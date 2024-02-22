import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css'; 
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.current.from_email.value)) {
      setEmailError(true);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm('service_ghgrt7r', 'template_lba6bjj', form.current, {
        publicKey: '5O7dWxNOaiPXhKs-L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          setEmailSent(true);
          form.current.reset();
          setTimeout(() => {
            setEmailSent(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        },
      );
  };
  return (
    <Layout>
      <div className="page-container">
        <div className="contact-info">
          <div className="contact-item">
            <span role="img" aria-label="Address">🏠</span>
            <p>Address: House No.123, SriCity, Andhra Pradesh</p>
          </div>
          <div className="contact-item">
            <span role="img" aria-label="Phone">📞</span>
            <p>Phone:9704737929</p>
          </div>
          <div className="contact-item">
            <span role="img" aria-label="Email">✉️</span>
            <p>Email:NetMeds@gmail.com</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us your experience</h2>
          <p>If you have any complaints or suggestions about our website,please give your feedback here.It will help us in improving the website. </p>
          <div className="content-container">
            {loading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
              </div>
            )}
            <form className="form-container" ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <label><b>Name:</b></label>
                <input type="text" name="from_name" required />
              </div>
              <div className="form-row">
                <label><b>Email:</b></label>
                <input type="email" name="from_email" required />
                {emailError && <p className="error-msg">Please enter a valid email address.</p>}
              </div>
              <div className="form-row">
                <label><b>Message:</b></label>
                <textarea name="message" required />
              </div>

              <input type="submit" value="Send" />
            </form>
            {emailSent && <div className="email-sent-msg">Email sent!</div>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;