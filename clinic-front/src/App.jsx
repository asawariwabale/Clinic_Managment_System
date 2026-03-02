import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./comp/Navbar/Navbar";

const Home = lazy(() => import("./comp/page/Home"));
const Doctors = lazy(() => import("./comp/page/Doctors"));
const About = lazy(() => import("./comp/page/About"));
const Contact = lazy(() => import("./comp/page/Contact"));
const Services = lazy(() => import("./comp/page/Services"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
      <About />
    
    <Services />
    <Doctors />
    <Contact />
    </Router>

  );
}

export default App;
