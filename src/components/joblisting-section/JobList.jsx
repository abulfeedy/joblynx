import { useJobContext } from "@/context/JobFilterContext";

// JobCard displays each individual job in a card layout
import JobCard from "./JobCard";

// FilterPanel contains checkboxes and search input for filtering jobs
import FilterPanel from "./FilterPanel";

// ShadCN Select components for sorting functionality
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// JobList receives initialJobs as prop and manages filtering + display
const JobList = () => {
  // Destructure state and helper functions from the filtering hook
  const {
    filters, // Selected job type filters (e.g. full-time, part-time)
    setFilters, // Function to update filters
    searchTerm, // Current text in the search bar
    setSearchTerm, // Function to update the search term
    sortBy, // Current sorting method selected
    setSortBy, // Function to update sort selection
    categories,
    filteredJobs, // Final result after applying filters + search + sort
    jobTypes,
    experienceLevels,
    loading,
    error,
  } = useJobContext();

  if (loading)
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
      </div>
    );

  // Render error state
  if (error) return <p className='dark:text-gray-200'>Error: {error}</p>;

  return (
    <div className='max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6'>
      {/* Left column: Sidebar for filters and search input */}
      <FilterPanel
        filters={filters}
        setFilters={setFilters}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        jobTypes={jobTypes}
        experienceLevels={experienceLevels}
      />

      {/* Right column: Job list and sorting controls */}
      <div className='w-full md:w-3/4 p-4'>
        {/* Top bar showing result count and sort dropdown */}
        <div className='flex justify-between items-center mb-4'>
          <span className='dark:text-gray-200'>
            Showing {filteredJobs.length} results
          </span>

          {/* Sorting dropdown using ShadCN Select */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className='md:w-[220px]'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='date-newest'>Date (Newest)</SelectItem>
              <SelectItem value='date-oldest'>Date (Oldest)</SelectItem>
              <SelectItem value='salary-low-high'>
                Salary (Low to High)
              </SelectItem>
              <SelectItem value='salary-high-low'>
                Salary (High to Low)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job results list or fallback message */}
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className='dark:text-gray-200'>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
