import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
      <h1 className="text-2xl sm:text-3xl py-8 font-bold text-blue-700 mb-6 text-center sm:text-left">
        About
      </h1>
      
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        A Sports Management System is a digital platform designed to streamline
        the scheduling and coordination of sports-related activities and
        resources. It enables efficient management of teams, players, events,
        venues, and registrations. This system simplifies communication with
        organizers, while also providing tools for reporting, analytics, and
        decision-making. By replacing manual processes, the system saves time,
        reduces errors, and improves overall efficiency.
      </p>

      <br />

      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        Benefits and Features
      </h2>

      <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-2">
        <li>
          The system offers features like online registration, communication
          tools, and venue management.
        </li>
        <li>
          Organizers can schedule events, manage venues, and maintain player
          databases all in one place.
        </li>
        <li>
          Players benefit from centralized communication and easy access to
          schedules and updates, ensuring better coordination and engagement.
        </li>
      </ul>
    </div>
  );
};

export default About;
