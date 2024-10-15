import React from "react";
import { motion } from "framer-motion"; // For animations
import { useState } from "react"; // For managing form state

const Home = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Thank you, ${name}! We have noted your availability for ${date}.`);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 min-h-screen flex flex-col justify-center items-center text-white p-4 sm:p-6">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-4 shadow-lg drop-shadow-md">
        Welcome to the 10G Class Reunion!
      </h1>
      <p className="text-lg text-center mb-6 max-w-md">
        Join us for an unforgettable reunion experience filled with memories and
        joy!
      </p>

      <div className="flex flex-col md:flex-row justify-center mb-8 space-x-0 md:space-x-5">
        <motion.img
          src="/school.jpeg"
          alt="School"
          className="w-full md:w-64 h-auto rounded-lg shadow-2xl mb-4 transition-transform duration-500 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/10g.jpg"
          alt="Reunion"
          className="w-full md:w-64 h-auto rounded-lg shadow-2xl mb-4 transition-transform duration-500 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      <p className="text-center mb-8 max-w-md">
        We have exciting activities planned, along with a gallery of memories to
        cherish.
      </p>

      <div className="flex flex-col md:flex-row justify-center mb-10 space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <motion.a
          href="/gallery"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 w-full md:w-auto"
          whileHover={{ scale: 1.05 }}
        >
          View Gallery
        </motion.a>
        <motion.a
          href="/friends"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 w-full md:w-auto"
          whileHover={{ scale: 1.05 }}
        >
          Friends Gallery
        </motion.a>
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

        <form
          className="flex flex-col items-center mt-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-400 rounded-lg p-3 mb-4 w-full max-w-xs shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="date"
            className="border border-gray-400 rounded-lg p-3 mb-4 w-full max-w-xs shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

      {/* Heart-Touching Quote */}
      <motion.div
        className="mt-10 p-4 bg-gray-200 rounded-lg shadow-lg max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-800 italic">
          "A reunion is not just a gathering of friends; it’s a reminder of the
          love and memories we’ve built together. Let's cherish these moments!"
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
