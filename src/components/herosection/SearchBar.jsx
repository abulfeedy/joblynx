import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Reusable search bar component using ShadCN UI
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='mt-8 md:mt-16 flex max-w-md mx-auto'>
      <div className='relative w-full'>
        {/* Text input */}
        <Input
          type='text'
          placeholder='Job title or keyword'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full p-6 pr-24 shadow-md rounded-md focus-visible:ring-1 focus-visible:ring-primary'
        />

        {/* Submit button aligned right inside input field */}
        <Button
          size='sm'
          className='absolute right-2 top-2 bottom-2 px-5 bg-primary hover:cursor-pointer text-white rounded-md hover:bg-primary/80'>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
