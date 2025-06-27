import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { TfiMicrosoftAlt } from "react-icons/tfi";

// Floating background logos for visual flair
const PartnerLogos = () => {
  const sharedClass =
    "bg-[#f5f5f5] dark:bg-card w-10 h-10 rounded-full flex justify-center items-center";

  return (
    <>
      <div className='hidden absolute md:block top-10 left-10 md:left-40'>
        <div className={sharedClass}>
          <FcGoogle size={20} />
        </div>
      </div>

      <div className='hidden absolute md:block top-10 right-10 md:right-40'>
        <div className={sharedClass}>
          <FaXTwitter size={20} />
        </div>
      </div>

      <div className='absolute hidden md:block top-40 left-8 md:left-20'>
        <div className={sharedClass}>
          <TfiMicrosoftAlt size={20} />
        </div>
      </div>
    </>
  );
};

export default PartnerLogos;
