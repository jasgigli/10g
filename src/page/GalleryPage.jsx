// src/page/GalleryPage.js
import React from "react";

const GalleryPage = () => {
  const images = [
    "/3.jpeg",
    "/5.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/14.jpeg",
    "/15.jpeg",
    "/2.jpeg",
    "/19.jpeg",
    "/20.jpeg",
    "/11.jpeg",
    "/22.jpeg",
    "/8.jpeg",
    "/6.jpeg",
    "/4.jpeg",
    "/12.jpeg",
    "/16.jpeg",
    "/21.jpeg",
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Gallery
      </h1>
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover transition duration-500 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
