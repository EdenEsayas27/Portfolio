// components/Hero.jsx
import React from 'react';
import profilePhoto from '../assets/img/profile-photo.jpg';

const Hero = () => {
  return (
    <div id="hero" className="hero route bg-image">
      <div className="overlay-itro"></div>
      <div className="profile-photo">
        <img src={profilePhoto} alt="Eden Esayas Tesema" />
      </div>
      <div className="text-content">
        <h1 className="hero-title mb-4">I am Eden Esayas Tesema</h1>
        <h2 className="hero-subtitle mb-4">Full Stack Web Developer</h2>
        <p className="slogan mb-4">Building scalable and efficient web applications with a strong passion for technology and innovation.</p>
        <p className="hero-subtitle">
          <span className="typed" data-typed-items="Creating, Innovating, Inspiring"></span>
        </p>
        <a href="#contact" className="cta-button">Contact Me</a> 
      </div>
    </div>
  );
};

export default Hero;
