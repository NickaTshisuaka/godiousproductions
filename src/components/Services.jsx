import React from "react";
import { motion } from "framer-motion";
import {
  Film,
  Stars,
  Layers
} from "lucide-react"; // icons
import "./Services.css";

export default function ServicesSection() {
  const services = [
    {
      title: "Video Editing",
      icon: <Film size={40} color="#d4af37" />,
      description: (
        <>
          From weddings to podcasts — we craft visuals that connect and captivate.
          <ul>
            <li>Cinematic wedding highlight reels</li>
            <li>Podcast edits with clean audio</li>
            <li>Trailers & teasers</li>
            <li>Vlogs for lifestyle & travel creators</li>
            <li>YouTube content: short & long form</li>
          </ul>
        </>
      ),
      img: "https://i.pinimg.com/1200x/49/c8/55/49c855437304f1f61ba12f5273e1a566.jpg",
    },
    {
      title: "Creative Enhancements",
      icon: <Stars size={40} color="#d4af37" />,
      description: (
        <>
          Professional enhancements that make your videos stand out.
          <ul>
            <li>Color correction & cinematic grading</li>
            <li>Sound design & noise cleanup</li>
            <li>Motion graphics & text animations</li>
            <li>Logo intros/outros</li>
            <li>Visual effects & advanced transitions</li>
          </ul>
        </>
      ),
      img: "https://i.pinimg.com/1200x/a7/39/99/a73999fd855b5ef4af0cb9a5261c1670.jpg",
    },
    {
      title: "Post-Production Excellence",
      icon: <Layers size={32} color="#d4af37" />,
      description: (
        <>
          We handle the technical side so your story shines.
          <ul>
            <li>Multi-camera syncing</li>
            <li>Sound mixing & mastering</li>
            <li>Subtitles & closed captions</li>
            <li>Platform-optimized formatting</li>
            {/* <li>Custom thumbnails & cover graphics</li> */}
          </ul>
        </>
      ),
      img: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
    },
  ];

  return (
    <section className="services-section" id="services">
      {/* PARALLAX BACKGROUND */}
      <div className="parallax-layer layer-1"></div>
      <div className="parallax-layer layer-2"></div>

      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="services-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        At Godious Productions, every frame is treated with excellence.  
        We transform raw footage into visual stories that move, inspire, and captivate.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="service-icon">{service.icon}</div>

            <h3 className="service-title">{service.title}</h3>

            <div className="service-desc">{service.description}</div>

            <motion.div
              className="service-image"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            >
              <img src={service.img} alt={service.title} />
            </motion.div>

            {/* gold glowing line */}
            <div className="gold-divider"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
