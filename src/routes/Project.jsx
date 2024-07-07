import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Work from '../components/Work';

function Project() {
  return (
    <div>
      <Nav />
      <Hero2 
      heading="Projects"
      text ="Some of my Work I have done in recent times"/>
      <Work/>
      <Footer />
    </div>
  );
}

export default Project;
