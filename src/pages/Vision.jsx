import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white flex items-center justify-center p-6">
      <motion.div
        className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl p-10 border border-indigo-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4 flex items-center justify-center gap-2">
          💡 Our Vision
        </h1>
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          To streamline communication, simplify access to campus resources,
          and strengthen student engagement at <span className="font-semibold text-indigo-600">NIT Trichy</span> by offering a unified digital platform.
        </p>
      </motion.div>
    </div>
  );
};

export default Vision;

