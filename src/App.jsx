import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";
import Skill from "./routes/Skill";
import CertificateSlider from "./routes/Slider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/certificate" element={<CertificateSlider />} />
      </Routes>
    </>
  );
}

export default App;
