import React, { useRef, useState} from 'react';
import './Styles/contact.css'; // Import CSS file for styling
import contactus from './contactus.png';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_ihjstts', 'template_pij807n', form.current, {
        publicKey: 'Vx6268t40hakkh0H5',
      })
      .then(
        () => {
          
          console.log('SUCCESS!');
          setPopupMessage('Form submitted successfully!');
        setShowPopup(true);
        
      },
        (error) => {
          console.log('FAILED...', error.text);
          setPopupMessage('Failed to submit form. Please try again later.');
          setShowPopup(true);
        },
      );
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
      <form ref={form} onSubmit={sendEmail}>
        <div className ="form-group">
      <label>Name :</label>
      <input type="text" name="full_name" /></div>
      <div className ="form-group">
      <label>Email :</label>
      <input type="email" name="email_id" /></div>
      <div className ="form-group">
      <label>Message :</label>
      <textarea name="message" />
      
      <button type="submit" value="Send Message" >Submit</button>
      </div>
    </form>
      </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            
          </div>
        </div>
      )}
      </div>
  );
};

export default ContactUs;
