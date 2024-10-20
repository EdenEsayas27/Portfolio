import React from 'react';
// Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Eden Esayas Tesema. All Rights Reserved.</p>
        {/* <ul className="social-links">
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Email</a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">facebook</a></li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
