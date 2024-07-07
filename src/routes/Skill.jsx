import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import './Skill.css';

function Skill() {
  return (
    <div>
      <Nav />
      <Hero2
        heading="SKILLS"
        text="Explore my diverse skill set across various domains in web development. From front-end design to back-end development and beyond, I am equipped with the knowledge and tools to build comprehensive and efficient web solutions."
      />
      <div className="skill-content">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-column">
            <h3>Front-End Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Back-End Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>DevOps & Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Docker</li>
              <li>YAML</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Programming & Problem Solving</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>Data Structures & Algorithms (DSA) with Java</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication Skills</li>
              <li>Collaboration</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skill;
