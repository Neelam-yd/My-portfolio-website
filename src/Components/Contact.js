import React, { useRef } from 'react';
import './Styles/contact.css'; // Import CSS file for styling
import contactus from './contactus.png';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ihjstts', 'template_pij807n', form.current, {
        publicKey: 'Vx6268t40hakkh0H5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Form submitted successfully!', {
           
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to submit form. Please try again later.', {
           
          });
        }
      );
  };

  return (
    <div className="h">
      <div className="heading">
        {' '}
        <h2>
          Contact <span className="name">Me</span>
        </h2>
      </div>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactus} alt="Contact us" />
        </div>
        {/* Right side with contact form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name :</label>
              <input type="text" name="full_name" />
            </div>
            <div className="form-group">
              <label>Email :</label>
              <input type="email" name="email_id" />
            </div>
            <div className="form-group">
              <label>Message :</label>
              <textarea name="message" />

              <button type="submit" value="Send Message">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
