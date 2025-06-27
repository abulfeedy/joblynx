import SearchBar from "./SearchBar";
import StatsCard from "./StatsCard";
import AvatarGroup from "./AvatarGroup";
import PartnerLogos from "./PartnerLogos";
import { useJobContext } from "@/context/JobFilterContext";

const HeroSection = () => {
  // Get the shared search state from context
  const { searchTerm, setSearchTerm } = useJobContext();

  return (
    <section className='relative max-w-6xl pt-8 px-4 flex flex-col overflow-hidden'>
      {/* Floating brand logos (Google, Twitter, etc.) */}
      <PartnerLogos />

      {/* Floating avatars showing active job holders or users */}
      <AvatarGroup />

      {/* Main content: stats, heading, text, and search */}
      <div className='text-center px-4'>
        {/* Stat card showing job count */}
        <StatsCard count='5000+' text='Opportunities Await' />

        {/* Primary headline */}
        <h1 className='text-2xl md:text-4xl font-extrabold text-foreground mt-4'>
          Find Work That Works for You
        </h1>

        {/* Subheading */}
        <p className='mt-5 text-sm text-muted-foreground max-w-lg mx-auto font-medium'>
          At Joblynx we make finding jobs and hiring easier, faster, smarter.
          Browse listings, post openings, and link up with what matters.
        </p>

        {/* Controlled search input linked to global context */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Partner reference */}
        <p className='text-sm text-muted-foreground font-medium mt-8'>
          Take-home task from{" "}
          <a href='/' className='text-[#009682]'>
            Astra Labs
          </a>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
