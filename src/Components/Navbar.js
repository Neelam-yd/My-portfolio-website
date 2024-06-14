import React, { useState } from 'react';
import './Styles/navbar.css'; // Import the CSS file for styling

import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-brand-name">Neelam</span>
      </div>
      <ul className={isOpen ? "navbar-nav open" : "navbar-nav"}>
        <li className="nav-item"><span className ="items">< a href="#home"><span className="icon"> </span>Home</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#about"><span className="icon"></span> About</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#skills"><span className="icon"></span> Skills</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#services"><span className="icon"> </span>Services</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#projects"><span className="icon"> </span>Projects</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#contact"><span className="icon"></span>Contact Me</a></span></li>
        
      </ul>
      <span className="navbar-toggler" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"><FiMenu size={35} /></span>
      </span>
    </nav>
  );
};

export default Navbar;
