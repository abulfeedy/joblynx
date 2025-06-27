import { useState, useMemo, useEffect } from "react";

// Format utility
const formatText = (text) =>
  text
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const parseUrlParams = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    jobType: params.get("jobType")?.split(",") || [],
    experienceLevel: params.get("experienceLevel")?.split(",") || [],
    category: params.get("category") || "All Categories",
    searchTerm: params.get("search") || "",
    sortBy: params.get("sort") || "date-newest",
  };
};

const updateUrlParams = (filters, searchTerm, sortBy) => {
  const params = new URLSearchParams();

  if (filters.jobType.length) params.set("jobType", filters.jobType.join(","));
  if (filters.experienceLevel.length)
    params.set("experienceLevel", filters.experienceLevel.join(","));
  if (filters.category && filters.category !== "All Categories")
    params.set("category", filters.category);
  if (searchTerm) params.set("search", searchTerm);
  if (sortBy && sortBy !== "date-newest") params.set("sort", sortBy);

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", newUrl);
};

const useJobFilter = (initialJobs, jobTypes, experienceLevels) => {
  const initial = parseUrlParams();

  const [filters, setFilters] = useState({
    jobType: initial.jobType,
    experienceLevel: initial.experienceLevel,
    category: initial.category,
  });

  const [searchTerm, setSearchTerm] = useState(initial.searchTerm);
  const [sortBy, setSortBy] = useState(initial.sortBy);

  // Sync to URL on change
  useEffect(() => {
    updateUrlParams(filters, searchTerm, sortBy);
    localStorage.setItem("jobFilters", JSON.stringify(filters));
    localStorage.setItem("jobSearchTerm", searchTerm);
    localStorage.setItem("jobSortBy", sortBy);
  }, [filters, searchTerm, sortBy]);

  const filteredJobs = useMemo(() => {
    let result = [...initialJobs];

    result = result.map((job) => ({
      ...job,
      type: formatText(job.job_type || "full_time"),
      experience: (() => {
        const formatted = formatText(
          job.experience_level || "senior"
        ).toLowerCase();
        if (formatted.includes("entry")) return "Entry/Junior";
        if (formatted.includes("mid")) return "Middle";
        return "Senior";
      })(),
      category: job.category || "Uncategorized",
      date: job.publication_date || "2021-01-01",
      salary: job.salary || "$3k",
      company: job.company_name,
      location: job.candidate_required_location || "Remote",
      description: job.description.replace(/<[^>]+>/g, ""),
    }));

    if (filters.jobType.length) {
      result = result.filter((job) => filters.jobType.includes(job.type));
    }

    if (filters.experienceLevel.length) {
      result = result.filter((job) =>
        filters.experienceLevel.includes(job.experience)
      );
    }

    if (filters.category !== "All Categories") {
      result = result.filter((job) => job.category === filters.category);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term)
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const salaryA =
        parseInt(a.salary.replace(/[^0-9.]/g, "").split("-")[0]) || 0;
      const salaryB =
        parseInt(b.salary.replace(/[^0-9.]/g, "").split("-")[0]) || 0;

      switch (sortBy) {
        case "date-oldest":
          return dateA - dateB;
        case "salary-low-high":
          return salaryA - salaryB;
        case "salary-high-low":
          return salaryB - salaryA;
        default:
          return dateB - dateA;
      }
    });

    return result;
  }, [initialJobs, jobTypes, experienceLevels, filters, searchTerm, sortBy]);

  return {
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    filteredJobs,
  };
};

export default useJobFilter;
