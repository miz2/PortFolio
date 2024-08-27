import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import IntoImage from "../assets/intro-bg.jpg";
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  const el = useRef(null); // Create a ref for the element

  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'Problem Solver','Passionate Learner'],
      typeSpeed: 40,
      backSpeed: 20, 
      backDelay: 2000, 
      loop: true, 
      cursorChar: '|', 
    };

    const typed = new Typed(el.current, options); // Initialize Typed.js

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntoImage} alt="Mizaan working on a computer" />
      </div>
      <div className='content'>
        <p>Hi, My Name is Mizaan ur Rehman</p>
        <h1>
          <span ref={el}></span> 
        </h1>
        <div className="buttons">
          <Link to="/project" className='btn'>Projects</Link>
          <Link to="/contact" className='btn-light'>Contact</Link>
          <Link to="/skill" className='btn'>Skills</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
