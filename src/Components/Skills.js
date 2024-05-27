import React from 'react';
import './Styles/skill.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { GoCodeSquare } from "react-icons/go";
import { HiCode } from "react-icons/hi";

AOS.init();
const Skill = () => {
  return (
    <div className="skill">
        <div data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skill-items">
    
     
        <div className="skill-item">
          
        <div data-aos="zoom-in">
          <i className="fab fa-html5"><FaHtml5/></i>
          <p>HTML</p>
        </div></div>
        <div className="skill-item">
        <div data-aos="zoom-in">
          <i className="fab fa-css3-alt">< FaCss3Alt/></i>
          <p >CSS</p>
        </div></div>
        <div className="skill-item">
        <div data-aos="zoom-in">
          <i className="fab fa-js"><IoLogoJavascript/></i>
          <p>JavaScript</p>
        </div></div>
        <div className="skill-item">
        <div data-aos="zoom-in">
          <i className="fab fa-react"><RiReactjsFill/></i>
          <p>React.js</p>
        </div></div>
        <div className="skill-item">
        <div data-aos="zoom-in">
          <i className="fab fa-cuttlefish"> <GoCodeSquare /></i>
          <p>C</p>
        </div></div>
        <div className="skill-item">
        <div data-aos="zoom-in">
          <i className="fab fa-cuttlefish"><HiCode/></i>
          <p>C++</p>
        </div></div>
        <div className="skill-item">
        <div data-aos="zoom-in">
          <i className="fas fa-database"><FaDatabase/></i>
          <p>SQL</p>
        </div></div>
        <div className="skill-item">
        <div data-aos="zoom-in">
          <i className="fab fa-bootstrap"><FaBootstrap/></i>
          <p>Bootstrap</p>
        </div>
      </div></div>
      </div>
    </div>
  );
};

export default Skill;
