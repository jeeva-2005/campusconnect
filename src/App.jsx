import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";       // ✅ Added
import Features from "./pages/Features";   // ✅ Added
import Contact from "./pages/Contact";     // ✅ Added (if you have one)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  // ✅ Added

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* ✅ Footer at bottom */}
    </BrowserRouter>
  );
}

export default App;
