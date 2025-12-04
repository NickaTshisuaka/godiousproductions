import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // SCROLL SPY — tracks what section is visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.getElementById(item.toLowerCase())
      );

      const scrollPos = window.scrollY + 200; // offset so it activates sooner

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(navItems[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.jpeg" alt="Godious Productions Logo" className="logo-icon" />
          <span className="logo-text">Godious Productions</span>
        </div>

        {/* DESKTOP NAV */}
        <div className="desktop-nav">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link ${activeSection === item ? "active" : ""}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="mobile-menu-button">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <motion.div
          className="mobile-nav-dropdown"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setIsOpen(false);
                setActiveSection(item);
              }}
              className={`mobile-nav-link ${activeSection === item ? "active" : ""}`}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
