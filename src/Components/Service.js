import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Styles/service.css'; // Import the CSS file for styling
import { HiCode } from "react-icons/hi";
import { FaPalette } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

AOS.init();
const Service = () => {
  return (
    <div className="s">
        <h2><span className="name">My</span> Services</h2>
        
    <div className="service">
       
      <div className="service-item">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <span className="icon"> <HiCode/></span>
       <h3>Web Development</h3>
        <p>From simple landing pages to complex web applications, I specialize in creating dynamic and responsive websites tailored to your needs.</p>
        <button className="button">Read more</button>
      </div>
      </div>
      <div className="service-item">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <span className="icon"><FaAndroid /></span>
<h3>Mobile Friendly Design</h3>
        <p>Ensure your website looks great and functions flawlessly on all devices, from smartphones to tablets, with my mobile-friendly design expertise.</p>
        <button className="button">Read more</button>
      </div>
      </div>
      <div className="service-item">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <span className="icon"><FaPalette /></span>
        <h3>UI/UX Design</h3>
        <p>Deliver exceptional user experiences with intuitive and visually appealing interfaces crafted through meticulous UI/UX design.</p>
        <button className="button">Read more</button>
      </div>
      </div>
    </div>
    </div>  );
};

export default Service;
