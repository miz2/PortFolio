import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import "./Contact.css"; // Import your CSS file for Contact component styles

function Contact() {
  return (
    <div>
      <Nav />
      <Hero2
        heading="CONTACT"
        text="Let's Connect and have a Chat"
      />
      <div className="resume-section">
        <h2>Download My Resume</h2>
        <p>You can download my resume using the link below:</p>
        <a href="/assets/Resume.pdf" download="Resume.pdf">Download Resume</a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
