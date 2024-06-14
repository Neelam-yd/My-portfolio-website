import React from 'react';
import './Styles/project.css'; 
import landingpage from './landingpage.png';
import portfolio from './portfolio.png';
import url from "./url.png";

const MyProjects = () => {
  
  
  return (
    <section className="ProjectSection" >
      <h2 className='project'><span className="name">My</span> Projects</h2>
      <div className="ProjectsWrapper">
       
        {/* Other project cards */}
        <div className="ProjectCard"><a href ="https://neelam-portfolio-website.vercel.app/">
          <img src={portfolio} alt='Portfolio' className="ProjectImage" />
          <h3 className="ProjectTitle">Portfolio using React</h3></a>
          <p className="ProjectDescription">
          "An interactive showcase of my skills and achievements, crafted with React to captivate and inform visitors about my professional journey."




          </p>
        </div>
        <div className="ProjectCard"><a href="https://github.com/Neelam-yd/landing-page">
          <img src={landingpage} alt="Landing page" className="ProjectImage" />
          <h3 className="ProjectTitle">Landing Page</h3></a>
          <p className="ProjectDescription">
          "A striking landing page designed to leave a lasting impression, offering a seamless introduction to my brand or product with intuitive navigation and captivating visuals."




          </p>
        </div>
      
      <div className="ProjectCard">
          <img src={url} alt="url tracker" className="ProjectImage" />
          <h3 className="ProjectTitle">ML based URL Tracker</h3>
          <p className="ProjectDescription">
          "An extension is made using mackine learning that detects phishing and safe website "
          </p>
        </div></div>
      
    </section>
          
        
  );
};

export default MyProjects;
