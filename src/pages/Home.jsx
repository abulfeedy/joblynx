import { HeroSection } from "@/components/herosection";
import JobList from "@/components/joblisting-section/JobList";
import { JobFilterProvider } from "@/context/JobFilterContext";

const Home = () => {
  return (
    <JobFilterProvider>
      <HeroSection />
      <div className='min-h-screen bg-[#f5f5f5] dark:bg-zinc-800 mt-20'>
        <JobList />
      </div>
    </JobFilterProvider>
  );
};

export default Home;
