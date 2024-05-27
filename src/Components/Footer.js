// Footer.js

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/neelam-yadav-322245257/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
