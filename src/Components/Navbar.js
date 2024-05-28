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
      <ul className={isOpen ? "navbar-nav open" : "navbar-nav"}><span className ="items">
        <li className="nav-item">< a href="#home"><span className="icon"><IoHomeOutline /> </span>Home</a></li>
        <li className="nav-item"><a href="#about"><span className="icon"><IoPersonOutline /></span> About</a></li>
        <li className="nav-item"><a href="#skills"><span className="icon"><VscFileCode /></span> Skills</a></li>
        <li className="nav-item"><a href="#services"><span className="icon"><FiImage /> </span>Services</a></li>
        <li className="nav-item"><a href="#projects"><span className="icon"><MdDisplaySettings /> </span>Projects</a></li>
        <li className="nav-item"><a href="#contact"><span className="icon"><LuContact2 /></span> Contact Me</a></li>
        </span>
      </ul>
      <span className="navbar-toggler" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"><FiMenu size={35} /></span>
      </span>
    </nav>
  );
};

export default Navbar;
