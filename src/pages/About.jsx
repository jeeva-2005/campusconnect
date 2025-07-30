import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 px-6 py-16 flex flex-col items-center text-center">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About CampusConnect
      </motion.h1>

      <motion.p
        className="max-w-3xl text-gray-800 text-lg sm:text-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <strong>CampusConnect</strong> is a student-centric platform designed to
        simplify campus life at <strong>NIT Trichy</strong>. Whether it’s academic
        updates, club activities, or placement alerts, our mission is to unify
        it all into one seamless digital hub.
      </motion.p>

      <div className="space-y-10 max-w-4xl">
        <motion.div
          className="bg-gradient-to-r from-pink-100 via-white to-indigo-100 rounded-2xl shadow-lg p-6 sm:p-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">🎯 Why CampusConnect?</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Students often miss out on key opportunities due to scattered communication.
            CampusConnect bridges that gap with centralized access and instant updates
            — all in one place.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-100 via-white to-pink-100 rounded-2xl shadow-lg p-6 sm:p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-purple-700 mb-2">🚀 Our Vision</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            To build a unified space that supports everything happening in and
            around the campus — academics, events, clubs, fests, placements,
            and everything in between.
          </p>
        </motion.div>
      </div>

      <p className="mt-16 text-sm text-gray-500 border-t pt-6">
        © 2025 CampusConnect. All rights reserved.
      </p>
    </div>
  );
};

export default About;
