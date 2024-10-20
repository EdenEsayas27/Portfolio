import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax"
      style={{ backgroundImage: 'url(assets/img/overlay-bg.jpg)' }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="contact-mf">
          <h5>Contact</h5>
          <ul>
            <li><span>👤</span> Eden Esayas Tesema</li>
            <li><span>💻</span> Full Stack Developer</li>
            <li><span>📧</span> <a href="mailto:edenesayas1627@gmail.com">edenesayas1627@gmail.com</a></li>
            <li><span>📞</span> (+251) 986987186</li>
            <li><span>📍</span> Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
