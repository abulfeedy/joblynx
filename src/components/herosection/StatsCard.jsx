// StatsCard.js
import React from "react";

// Component for displaying stats
const StatsCard = ({ count, text }) => {
  return (
    <div className='inline-block mb-4 font-medium text-xs bg-primary-foreground dark:bg-[#00968263] text-primary px-4 py-2 rounded-full'>
      <span className='font-semibold'>{count}</span> {text}
    </div>
  );
};

export default StatsCard;
