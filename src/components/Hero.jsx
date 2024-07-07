import React from 'react';
import IntoImage from "../assets/intro-bg.jpg";
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntoImage} alt="Mizaan working on a computer" />
      </div>
      <div className='content'>
        <p>Hi, My Name is Mizaan ur Rehman</p>
        <h1>Full Stack Developer</h1>
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
