import React from "react";

const Footer = () => {
  return (
    <p className='bg-[#f5f5f5] dark:bg-zinc-800  text-xs text-primary font-medium text-center pt-10 pb-4'>
      Powered by{" "}
      <a
        href='https://remotive.com'
        className='underline'
        target='_blank'
        rel='noopener noreferrer'>
        Remotive API
      </a>
    </p>
  );
};

export default Footer;
