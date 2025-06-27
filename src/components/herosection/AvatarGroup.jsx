import { FaHeart } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  {
    src: "https://images.unsplash.com/photo-1678286742832-26543bb49959",
    alt: "Jordi Espinosa unsplash",
    fallback: "JE",
  },
  {
    src: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c",
    alt: "oğuz yağız unsplash",
    fallback: "OY",
  },
  {
    src: "https://images.unsplash.com/photo-1640951613773-54706e06851d",
    alt: "alex unsplash",
    fallback: "AU",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    alt: "Jake Nackos unsplash",
    fallback: "JN",
  },
];

const AvatarGroup = () => {
  return (
    <div className='hidden md:block md:absolute md:bottom-10 md:right-20'>
      <div className='relative bg-[#f5f5f5] dark:bg-card p-4 rounded-md backdrop-blur-md shadow-sm flex flex-col gap-4 items-center'>
        <p className='text-sm text-muted-foreground font-medium'>
          Over 5k job holders
        </p>

        <div className='flex -space-x-2'>
          {users.map((user, i) => (
            <Avatar key={i}>
              <AvatarImage src={user.src} alt={user.alt} />
              <AvatarFallback>{user.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>

      {/* Bottom like emoji */}
      <div className='absolute -bottom-2 -right-2 bg-card shadow p-2 rounded-md'>
        <FaHeart size={12} className='text-pink-500' />
      </div>
    </div>
  );
};

export default AvatarGroup;
