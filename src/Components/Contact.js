import React, { useState } from 'react';
import './Styles/contact.css'; // Import CSS file for styling
import contactus from './contactus.png';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData); // For demonstration, log form data to console
    // You can send this data to your backend or perform other actions
  };

  return (
    <div className="h">
     <div className="heading"> <h2>Contact <span className="name">Me</span></h2></div>
     <div className="contact-container">
      <div className="contact-image">
      
        <img src={contactus} alt="Contact us" />
      </div>
      {/* Right side with contact form */}
      <div className="contact-form">
       
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
