import React, { useState } from 'react';
import './Styles/navbar.css'; // Import the CSS file for styling
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FaDisplay } from "react-icons/fa6";
import { ImImages } from "react-icons/im";
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
        <li className="nav-item"><span className="items"><a href="#home"><span className="icon"><FaHome size={28} /></span><span className='text'>Home</span></a></span></li>
        <li className="nav-item"><span className="items"><a href="#about"><span className="icon"><IoPerson size={24} /></span> <span className='text'>About</span></a></span></li>
        <li className="nav-item"><span className="items"><a href="#skills"><span className="icon"><IoDocument size={24} /></span> <span className='text'>Skills</span></a></span></li>
        <li className="nav-item"><span className="items"><a href="#services"><span className="icon"><ImImages size={26} /></span><span className='text'>Services</span></a></span></li>
        <li className="nav-item"><span className="items"><a href="#projects"><span className="icon"><FaDisplay size={24} /></span><span className='text'>Projects</span></a></span></li>
        <li className="nav-item"><span className="items"><a href="#contact"><span className="icon"><IoMdContact size={24} /></span><span className='text'>Contact Me</span></a></span></li>
      </ul>
      <span className="navbar-toggler" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"><FiMenu size={35} /></span>
      </span>
    </nav>
  );
};

export default Navbar;
