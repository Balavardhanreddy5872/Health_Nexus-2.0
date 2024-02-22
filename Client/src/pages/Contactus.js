import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10vh', border: '2px solid #000', backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 30%', padding: '20px', borderRight: '1px solid #ccc' }}>
            <div style={{ marginBottom: '20px', fontSize: '24px' }}><span role="img" aria-label="Address">🏠</span>Address</div>
            <p>House No.123, SriCity, Andhra Pradesh</p>
            <div style={{ marginBottom: '20px', fontSize: '24px' }}><span role="img" aria-label="Phone">📞</span>Phone</div>
            <p>9704737929</p>
            <div style={{ marginBottom: '20px', fontSize: '24px' }}><span role="img" aria-label="Email">✉️</span>Email</div>
            <p>NetMeds@gmail.com</p>
          </div>
          <div style={{ flex: 1, padding: '20px', backgroundColor: 'white' }}>
            <h2>Send us your experience</h2>
            <p>If you have any complaints or suggestions about our website, please give your feedback here. It will help us in improving the website.</p>
            <div style={{ position: 'relative' }}>
              {loading && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ border: '8px solid #f3f3f3', borderTop: '8px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
                </div>
              )}
              <form style={{ width: '100%' }} ref={form} onSubmit={sendEmail}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ marginRight: '10px', minWidth: '100px' }}>Name:</label>
                  <input type="text" name="from_name" required />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ marginRight: '10px', minWidth: '100px' }}>Email:</label>
                  <input type="email" name="from_email" required />
                  {emailError && <p style={{ color: 'red', marginTop: '5px' }}>Please enter a valid email address.</p>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ marginRight: '10px', minWidth: '100px' }}>Message:</label>
                  <textarea name="message" required />
                </div>
                <input type="submit" value="Send" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
              </form>
              {emailSent && <div style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', borderRadius: '5px', zIndex: '999', position: 'absolute' }}>Email sent!</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
