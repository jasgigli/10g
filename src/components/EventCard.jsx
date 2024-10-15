import React from "react";

const EventCard = ({ title, date, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
      <p>{description}</p>
    </div>
  );
};

export default EventCard;
