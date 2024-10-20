import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaTwitter } from 'react-icons/fa';
import { BiCloud } from 'react-icons/bi';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <img src="/nogenhed_logo_black.png" alt="Nogenhed Logo" className="logo" />
        <nav>
          <div className="main-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://www.furaffinity.net/your-profile" target="_blank" rel="noopener noreferrer">
              <FaPaw />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://bsky.app/profile/your-profile" target="_blank" rel="noopener noreferrer">
              <BiCloud />
            </a>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;