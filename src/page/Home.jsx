import React from "react";
import { motion } from "framer-motion"; // Optional: for animations

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 min-h-screen flex flex-col justify-center items-center text-white p-4 sm:p-6">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-4 shadow-lg drop-shadow-md">
        Welcome to the 10G Class Reunion!
      </h1>
      <p className="text-lg text-center mb-6 max-w-md">
        Join us for an unforgettable reunion experience filled with memories and
        joy!
      </p>

      <motion.img
        src="../public/Group Photo.jpg" // Ensure the image path is correct
        alt="Reunion"
        className="w-64 h-auto rounded-lg shadow-2xl mb-4 transition-transform duration-500 transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-center mb-8 max-w-md">
        We have exciting activities planned, along with a gallery of memories to
        cherish.
      </p>

      <div className="flex flex-col md:flex-row justify-center mb-10 space-x-4 space-y-4 md:space-y-0">
        <a
          href="/gallery"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 w-full md:w-auto"
        >
          View Gallery
        </a>
        <a
          href="/friends"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 w-full md:w-auto"
        >
          Friends Gallery
        </a>
      </div>

      <section className="bg-white text-gray-800 rounded-lg p-6 mb-10 max-w-3xl w-full shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get Ready for the Upcoming Gathering!
        </h2>
        <p className="mb-4">
          We are excited to announce our upcoming reunion! Mark your calendars
          and get ready for a memorable day filled with laughter, stories, and
          reconnecting with old friends!
        </p>

        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Reconnect with classmates</li>
          <li>Share your favorite memories</li>
          <li>Participate in fun activities</li>
          <li>Enjoy delicious food and drinks</li>
          <li>Capture moments in our photo booth</li>
        </ul>

        <p className="mb-4">
          Please let us know when you are available to join the gathering by
          entering your name and selecting a date below:
        </p>

        <form className="flex flex-col items-center mt-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-400 rounded-lg p-3 mb-4 w-full max-w-xs shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            required
          />
          <input
            type="date"
            className="border border-gray-400 rounded-lg p-3 mb-4 w-full max-w-xs shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 w-full max-w-xs"
          >
            Submit Availability
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
