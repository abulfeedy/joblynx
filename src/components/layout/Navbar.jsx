import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHashnode } from "react-icons/fa6";
import { ModeToggle } from "../theme/theme-toggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 border-b-2 border-[#f5f5f5] dark:border-card",
        scrolled ? "bg-white/80 dark:bg-black/60 shadow-sm" : "bg-transparent"
      )}>
      <nav className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Left: Brand Name */}
        <Link
          to='/'
          className='text-xl font-bold text-primary flex items-center gap-2'>
          <FaHashnode /> Joblynx
        </Link>

        {/* Right: icons and Avartar placeholder */}
        <div className='flex items-center gap-5 text-sm'>
          <ModeToggle />

          {/* Notifs icon */}
          <Bell size={20} className='text-secondary-foreground' />

          {/* Avatar placeholder */}
          <Avatar>
            <AvatarImage src='https://images.unsplash.com/photo-1633332755192-727a05c4013d' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
