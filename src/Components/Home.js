import React from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './Styles/home.css'; // Import the CSS file for styling
import home from './Assets/homepic.png';

AOS.init();
const Home = () => {
  return (
    <div className="home">
    
      <div className="home-content">
        <div className="home-text">
        <h2> Hello !</h2><h1>I'm <span className="name">Neelam </span> </h1>
          <h1>Frontend Developer</h1>
          <p>I specializing in creating user-friendly websites and applications. I love turning ideas into digital reality!</p>
        </div>
        <div className="hire-me-button">
          <button>Hire Me</button>
        </div>
      </div>
      <div className="home-image">
      <div data-aos="fade-down-right">
        {/* You can replace this with an image of a cartoon girl using a laptop */}
        <img src={home} alt="Cartoon Girl" />
      </div></div>
    </div>
  );
};

export default Home;
