// JobCard component displays individual job listing information
import { MapPin } from "lucide-react";
import LazyImage from "../ui/lazyImage";
import { useState } from "react";
import JobDetailsModal from "./JobDetailsModal";

const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className='p-4 bg-white/80 dark:bg-card rounded-lg shadow-md mb-4 cursor-pointer flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full'>
          {/* Top section: logo + title + company + location + salary */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4'>
            <div className='flex items-center gap-3 w-full md:w-auto'>
              {/* Logo (visible only on md and up, scaled for mobile if needed) */}
              <div className='w-12 h-12 hidden md:flex items-center justify-center rounded-md overflow-hidden bg-white shadow'>
                <LazyImage
                  src={job.company_logo}
                  alt='Brand logo'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Title + Company + Location */}
              <div className='flex-1 min-w-0'>
                <h3 className='text-base md:text-lg font-semibold line-clamp-1'>
                  {job.title}
                </h3>
                <p className='text-sm text-gray-500/80 flex flex-wrap items-center mt-1 gap-x-2'>
                  <span className='truncate'>{job.company}</span>
                  <span className='flex items-center gap-1 truncate'>
                    <MapPin size={14} className='text-muted-foreground' />
                    {job.location}
                  </span>
                </p>
              </div>
            </div>

            {/* Salary aligned to the top-right, stacked on mobile */}
            <p className='text-sm md:text-base font-bold mt-2 md:mt-0'>
              {job.salary}
            </p>
          </div>

          {/* Description (truncated to 2 lines) */}
          <p className='mt-3 text-sm text-medium text-muted-foreground line-clamp-2'>
            {job.description}
          </p>

          {/* Bottom section: type, experience, category, remote tag, and date */}
          <div className='flex flex-col md:flex-row justify-between flex-wrap mt-3 gap-2'>
            <div className='text-sm text-primary flex flex-wrap gap-2'>
              <span>
                {job.type} • {job.experience} • {job.category}
              </span>
              {job.remote && <span className='ml-2'>Remote</span>}
            </div>
            <p className='mt-2 md:mt-0 text-sm text-ring'>
              {new Date(job.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <JobDetailsModal
        job={job}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default JobCard;
