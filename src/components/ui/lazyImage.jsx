import React from "react";

/**
 * LazyImage
 * A wrapper for <img> that enables lazy loading by default
 * and supports additional props like className, alt, etc.
 */
const LazyImage = ({ src, alt = "image", className = "", ...props }) => {
  return (
    <img src={src} alt={alt} loading='lazy' className={className} {...props} />
  );
};

export default LazyImage;
