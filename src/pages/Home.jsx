import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// import FilterBar from '../components/FilterBar'; // ← comment this if you don't have it

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 relative overflow-hidden">
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.h1 
        className="text-3xl sm:text-5xl font-extrabold text-indigo-700 mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Welcome to CampusConnect
      </motion.h1>

      <motion.p 
        className="text-base sm:text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Your one-stop digital platform for everything at NIT Trichy!
      </motion.p>

      <motion.button 
        className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Now <ArrowRight size={20} />
      </motion.button>

      {/* <FilterBar selected={selectedCategory} onSelect={setSelectedCategory} /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-indigo-700">Event Name</h2>
          <p className="text-sm text-gray-600 mt-2">Event details and short description go here.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-indigo-700">Workshop</h2>
          <p className="text-sm text-gray-600 mt-2">Learn cool stuff with experts!</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-indigo-700">Club Meeting</h2>
          <p className="text-sm text-gray-600 mt-2">Join us and connect with like-minded people.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
