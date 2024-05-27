import React from 'react';
import './Footer.css';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Info,
  Visibility,
  Create,
  MenuBook,
  Phone,
  Room,
} from '@mui/icons-material';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_company">
        Commerce Company Name
      </div>
      <div className="footer_sections">
        <div className="footer_section">
          <h2>About Us</h2>
          <ul className="footer_about">
            <li><a href="#">Aim</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer_section">
          <h2>Services</h2>
          <ul className="footer_services">
            <li><a href="#">Writing</a></li>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Coding</a></li>
            <li><a href="#">Teaching</a></li>
          </ul>
        </div>
        <div className="footer_section">
          <h2>Contact Us</h2>
          <ul className="footer_contact">
            <li><a href="#"><Phone className="icon" /> Uttar Pradesh</a></li>
            <li><a href="#"><Phone className="icon" /> Ahmedabad</a></li>
            <li><a href="#"><Phone className="icon" /> Indore</a></li>
            <li><a href="#"><Phone className="icon" /> Mumbai</a></li>
          </ul>
        </div>
        <div className="footer_section">
          <h2>Social Media</h2>
          <ul className="footer_social">
            <li><a href="#"><Facebook className="social_icon" />Facebook</a></li>
            <li><a href="#"><Instagram className="social_icon" />Instagram</a></li>
            <li><a href="#"><Twitter className="social_icon" />Twitter</a></li>
            <li><a href="#"><YouTube className="social_icon" />YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
