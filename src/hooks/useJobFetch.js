import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to fetch jobs, unique categories, job types, and experience levels from Remotive API
const useJobFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://remotive.com/api/remote-jobs",
          {
            params: { limit: 20 }, // Limit to 10 jobs for demo
          }
        );
        const jobsData = response.data.jobs || [];

        // Set jobs
        setJobs(jobsData);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(jobsData.map((job) => job.category || "Uncategorized")),
        ];
        setCategories(["All Categories", ...uniqueCategories]);

        // Extract unique job types and format (e.g., 'full_time' to 'Full Time')
        const uniqueJobTypes = [
          ...new Set(
            jobsData.map((job) => formatText(job.job_type || "full_time"))
          ),
        ];
        setJobTypes(uniqueJobTypes);

        // Extract unique experience levels and format with specific mappings
        const uniqueExperienceLevels = [
          ...new Set(jobsData.map((job) => job.experience_level || "senior")),
        ].map((level) => {
          switch (formatText(level).toLowerCase()) {
            case "entry level":
              return "Entry/Junior";
            case "mid level":
              return "Middle";
            case "senior":
              return "Senior";
            default:
              return "Senior"; // Fallback to 'Senior' for unknown levels
          }
        });
        setExperienceLevels([...new Set(uniqueExperienceLevels)]); // Ensure uniqueness
      } catch (err) {
        setError(err.message || "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    // Helper function to format text (e.g., 'full_time' to 'Full Time')
    const formatText = (text) => {
      return text
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    fetchJobs();
  }, []);

  return { jobs, categories, jobTypes, experienceLevels, loading, error };
};

export default useJobFetch;
