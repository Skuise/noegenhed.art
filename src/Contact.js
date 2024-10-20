import React, { useState } from 'react';
import './Contact.css';

const Navigation = () => {
  return (
    <nav>
      <div className="main-nav">
        <ul>
<li><a href="#/">Prices</a></li>
<li><a href="#/gallery">Gallery</a></li>
<li><a href="#/about">About</a></li>
<li><a href="#/contact">Contact</a></li>
<li><a href="#/terms">Terms</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commissionType, setCommissionType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email sending functionality
    console.log('Form submitted:', { name, email, commissionType, message });
    alert('Thank you for your interest! We will contact you soon.');
    // Reset form fields
    setName('');
    setEmail('');
    setCommissionType('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <header>
        <img src="/logo-colorized.png" alt="Nogenhed Logo" className="logo" />
        <Navigation />
      </header>
      <div className="contact-form-container">
        <h1>Commission Interest Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="commissionType">Commission Type:</label>
            <select
              id="commissionType"
              value={commissionType}
              onChange={(e) => setCommissionType(e.target.value)}
              required
            >
              <option value="">Select a commission type</option>
              <option value="character">Character Design</option>
              <option value="illustration">Illustration</option>
              <option value="animation">Animation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Interest</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
