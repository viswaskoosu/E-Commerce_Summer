import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../../Components/Header';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address.'
      });
    } else {
      setErrors({
        ...errors,
        email: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.email) {
      alert('Please correct the errors in the form.');
      return;
    }
    alert('Form submitted successfully!');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:9063607818`;
    navigator.clipboard.writeText('9063607818'); 
    alert('Phone number copied to clipboard. You can paste it to your dial pad.');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:210030016@iitdh.ac.in`;
  };

  const handleLocationClick = () => {
    window.location.href = 'https://maps.app.goo.gl/jHgBqTuERbSSpe3K9';
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="heading">Contact Us</h2>
        <div className="grid">
          <div className="contact-info">
            <div className="contact-item" onClick={handlePhoneClick}>
              <FaPhoneAlt className="icon" />
              <p>9063607818</p>
            </div>
            <div className="contact-item" onClick={handleEmailClick}>
              <FaEnvelope className="icon" />
              <p>210030016@iitdh.ac.in</p>
            </div>
            <div className="contact-item" onClick={handleLocationClick}>
              <FaMapMarkerAlt className="icon" />
              <p>
                INDIAN INSTITUTE OF TECHNOLOGY DHARWAD
                <br /> PERMANENT CAMPUS
                <br /> CHIKKAMALLIGAWAD
                <br /> DHARWAD - 580007
                <br /> KARNATAKA, INDIA
              </p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="input"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={`input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="input"
                rows="4"
              />
              <button type="submit" className="button" disabled={!!errors.email}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
