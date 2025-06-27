// context/JobFilterContext.js
import { createContext, useContext } from "react";
import useJobFilter from "@/hooks/useJobFilter";
import useJobFetch from "@/hooks/useJobFetch";

const JobFilterContext = createContext(null);

export const JobFilterProvider = ({ children }) => {
  const { jobs, categories, jobTypes, experienceLevels, loading, error } =
    useJobFetch();
  const jobFilter = useJobFilter(jobs);
  return (
    <JobFilterContext.Provider
      value={{
        ...jobFilter, // contains filters, searchTerm, setFilters, etc.
        categories,
        jobTypes,
        experienceLevels,
        loading,
        error,
      }}>
      {children}
    </JobFilterContext.Provider>
  );
};

export const useJobContext = () => useContext(JobFilterContext);
