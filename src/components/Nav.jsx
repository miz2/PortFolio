import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/certificate">Certifications</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mizaan-ur-rehman-278706249/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} /> <span className="nav-text">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/miz2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} /> <span className="nav-text">GitHub</span>
          </a>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
      </div>
    </div>
  );
};

export default Nav;
