import React from "react";

const GalleryPage = () => {
  const images = [
    "/1.jpg",
    "/3.jpeg",
    "/5.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/12.jpeg",
    "/14.jpeg",
    "/15.jpeg",
    "/16.jpeg",
    // "/17.png", personal
    "/2.jpeg",
    // "/18.jpeg", duplicate
    "/19.jpeg",
    "/20.jpeg",
    "/21.jpeg",
    "/22.jpeg",

    "/8.jpeg",
    // "/7.jpeg", duplicate
    "/6.jpeg",
    "/4.jpeg",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Gallery
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto max-h-96 object-cover transition duration-500 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
