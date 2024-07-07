// About.js

import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import './About.css'; // Import CSS file for About component styles
import profileImage from '../assets/profile.png'; // Import your profile image

function About() {
  return (
    <div>
      <Nav />
      <Hero2
        heading="ABOUT"
        text="I am a versatile full-stack developer with a passion for crafting beautiful and user-friendly web experiences. With a comprehensive skill set spanning front-end and back-end technologies, and a commitment to continuous learning, I strive to deliver high-quality and responsive websites and applications that stand out."
      />
      <div className="about-content">
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
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
        <h2>My Experience</h2>
        <p>I am a proactive developer who continuously engages in personal projects and self-learning initiatives to enhance my skills. Although I haven't had formal work experience yet, I have developed various web applications and experimented with different technologies to deepen my knowledge and improve my proficiency.</p>
        <p>My journey as a full-stack developer is fueled by my dedication to staying updated with the latest trends and best practices in web development. I take pride in my ability to adapt to new challenges, solve complex problems, and collaborate effectively within a team.</p>
        <p>My expertise in HTML5, CSS3, and JavaScript allows me to build responsive and interactive websites, while my knowledge of back-end technologies like Node.js, Express.js, and databases such as MongoDB and MySQL enables me to create robust full-stack applications. Additionally, my familiarity with tools like Git, Docker, and various JavaScript libraries ensures that I can manage and streamline development workflows efficiently.</p>
        <p>Furthermore, my skills in Data Structures and Algorithms (DSA) with Java empower me to write efficient and optimized code, making my applications not only functional but also highly performant. This knowledge is crucial in solving complex problems and improving the overall quality of the software I develop.</p>
        <p>In addition to technical skills, I value the importance of communication, collaboration, and leadership in the software development process. I enjoy working in dynamic team environments where sharing knowledge and ideas leads to innovative solutions and continuous improvement.</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
