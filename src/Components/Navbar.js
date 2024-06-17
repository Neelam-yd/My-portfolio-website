import React, { useState } from 'react';
import './Styles/navbar.css'; // Import the CSS file for styling
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FaDisplay } from "react-icons/fa6";
import { HiPhoto } from "react-icons/hi2";
import { IoDocument } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
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
        <li className="nav-item"><span className ="items">< a href="#home"><span className="icon"><FaHome /> </span>Home</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#about"><span className="icon"><IoPerson /></span> About</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#skills"><span className="icon"><IoDocument /></span> Skills</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#services"><span className="icon"><HiPhoto /> </span>Services</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#projects"><span className="icon"><FaDisplay /> </span>Projects</a></span></li>
        <li className="nav-item"><span className ="items"><a href="#contact"><span className="icon"><IoMdContact /></span>Contact Me</a></span></li>
        
      </ul>
      <span className="navbar-toggler" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"><FiMenu size={35} /></span>
      </span>
    </nav>
  );
};

export default Navbar;
