import React from 'react';

const Features = () => {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-700 text-center mb-8">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Centralized Announcements</h3>
          <p className="text-gray-600">No more missing out. All updates in one place.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Event Calendar</h3>
          <p className="text-gray-600">Stay updated with upcoming events and workshops.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Lost & Found</h3>
          <p className="text-gray-600">Report or find lost items on campus easily.</p>
        </div>
        {/* Add more feature cards as needed */}
      </div>
    </div>
  );
};

export default Features;