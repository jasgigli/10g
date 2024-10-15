import React from "react";

const GalleryImage = ({ src, alt }) => {
  return (
    <div className="relative w-72 h-48 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full transition-opacity duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        {alt}
      </div>
    </div>
  );
};

export default GalleryImage;
