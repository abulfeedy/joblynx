import { Filter } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// FilterPanel component for job filtering options
const FilterPanel = ({
  filters,
  setFilters,
  searchTerm,
  setSearchTerm,
  categories,
  jobTypes,
  experienceLevels,
}) => {
  const filterContent = (
    <div className='p-4 space-y-6'>
      {/* Job Type Filter */}
      <div>
        <h3 className='text-lg font-semibold dark:text-gray-200 mb-2'>
          Job Type
        </h3>
        {jobTypes.map((type) => (
          <div key={type} className='flex items-center gap-2 mb-2'>
            <Checkbox
              id={type}
              checked={filters.jobType.includes(type)}
              onCheckedChange={(checked) =>
                setFilters((prev) => ({
                  ...prev,
                  jobType: checked
                    ? [...prev.jobType, type]
                    : prev.jobType.filter((t) => t !== type),
                }))
              }
            />
            <label
              htmlFor={type}
              className='text-sm font-medium dark:text-gray-200'>
              {type}
            </label>
          </div>
        ))}
      </div>

      {/* Experience Level Filter */}
      <div>
        <h3 className='text-lg font-semibold dark:text-gray-200 mb-2'>
          Experience Level
        </h3>
        {experienceLevels.map((level) => (
          <div key={level} className='flex items-center gap-2 mb-2'>
            <Checkbox
              id={level}
              checked={filters.experienceLevel.includes(level)}
              onCheckedChange={(checked) =>
                setFilters((prev) => ({
                  ...prev,
                  experienceLevel: checked
                    ? [...prev.experienceLevel, level]
                    : prev.experienceLevel.filter((l) => l !== level),
                }))
              }
            />
            <label
              htmlFor={level}
              className='text-sm font-medium dark:text-gray-200'>
              {level}
            </label>
          </div>
        ))}
      </div>

      {/* Category Filter with Dynamic Options */}
      <div>
        <h3 className='text-lg font-semibold dark:text-gray-200 mb-2'>
          Category
        </h3>
        <Select
          value={filters.category}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value }))
          }>
          <SelectTrigger className='w-full mb-2'>
            <SelectValue placeholder='Select Category' />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Search Filter */}
      <div>
        <h3 className='text-lg font-semibold dark:text-gray-200 mb-2'>
          Search
        </h3>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search by title or company...'
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (visible on md and above) */}
      <div className='hidden md:block w-full md:w-1/4 p-4 sticky top-12 self-start h-screen'>
        {filterContent}
      </div>

      {/* Mobile Drawer (visible below md) */}
      <div className='block md:hidden px-4'>
        <Drawer>
          <DrawerTrigger className='flex ml-auto items-center bg-card p-2 rounded-md dark:bg-transparent dark:border border-zinc-600 gap-2 text-sm font-medium text-primary'>
            <Filter size={16} /> Filters
          </DrawerTrigger>
          <DrawerContent className='pt-6'>
            <DrawerHeader>
              <DrawerTitle className='text-center'>Filter Jobs</DrawerTitle>
            </DrawerHeader>
            {filterContent}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default FilterPanel;
