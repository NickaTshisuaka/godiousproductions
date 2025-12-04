import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Branding */}
        <div className="footer-brand">
          <h2>Godious Productions</h2>
          <p>Transforming visions into captivating visuals.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services-section">Services</a></li>
            <li><a href="#portfolio-section">Portfolio</a></li>
            <li><a href="#contact-section">Contact</a></li>
            <li><a href="#about-section">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📧 godiousproductions@gmail.com</p>
          <p>📞 +27 82 570 6915</p>
          <p>📍 Johannesburg, South Africa</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Godious Productions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
