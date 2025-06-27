import React from "react";

const Footer = () => {
  return (
    <p className='text-xs text-primary text-center mt-6'>
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
