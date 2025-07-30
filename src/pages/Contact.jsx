import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-white flex items-center justify-center px-6 py-12">
      <motion.div
        className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl p-10 border border-indigo-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">
          📬 Get in Touch
        </h2>
        <p className="text-gray-700 text-center mb-8 text-lg">
          Got questions, feedback, or just want to connect? We’d love to hear from you!
        </p>
        <div className="space-y-6 text-gray-800 text-base">
          <div className="flex items-center gap-3">
            <Mail className="text-indigo-500" />
            <span className="font-medium">contact@campusconnect.in</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-indigo-500" />
            <span className="font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-indigo-500" />
            <span className="font-medium">SAC Building, NIT Trichy</span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-12 border-t pt-6">
          © 2025 CampusConnect. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;

