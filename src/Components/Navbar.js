import React, { useState } from 'react';
import './Styles/navbar.css'; // Import the CSS file for styling
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdDisplaySettings } from "react-icons/md";
import { LuContact2 } from "react-icons/lu";
import { VscFileCode } from "react-icons/vsc";
import { FiImage } from "react-icons/fi";
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
        <li className="nav-item">< a href="#home"><IoHomeOutline /> Home</a></li>
        <li className="nav-item"><a href="#about"><IoPersonOutline /> About</a></li>
        <li className="nav-item"><a href="#skills"><VscFileCode /> Skills</a></li>
        <li className="nav-item"><a href="#services"><FiImage /> Services</a></li>
        <li className="nav-item"><a href="#projects"><MdDisplaySettings /> Projects</a></li>
        <li className="nav-item"><a href="#contact"><LuContact2 /> Contact Me</a></li>
    
      </ul>
      <span className="navbar-toggler" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"><FiMenu /></span>
      </span>
    </nav>
  );
};

export default Navbar;
