import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./Hero.css";

export default function HeroSection() {
  const backgroundImageUrl = "/marco-bianchetti-KYjs8Z4JP-0-unsplash.jpg";

  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  // Smooth Scrolling Functions
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero-section" id="home">
      {/* Background */}
      <motion.div
        className="hero-bg"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          y,
        }}
      >
        <div className="hero-overlay"></div>
      </motion.div>

      {/* Content */}
      <div className="hero-content">
        <motion.h3
          className="hero-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every Frame Tells a Story Worth Remembering
        </motion.h3>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We specialize in transforming raw footage into captivating visual experiences 
          that move hearts and inspire minds. From weddings to podcasts, trailers to vlogs — your vision becomes a masterpiece.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.button
            className="btn-primary"
            onClick={scrollToPortfolio}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            View Portfolio
          </motion.button>

          <motion.button
            className="btn-secondary"
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about-section">
          <ChevronDown className="scroll-icon" />
        </a>
      </motion.div>
    </header>
  );
}
