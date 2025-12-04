import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="about-wrap" id="about">
      <div className="about-flex">

        {/* LEFT SIDE — TEXT */}
        <div className="about-content">
          <motion.h1
            className="about-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            About Godious Productions
          </motion.h1>

          {[
            "At Godious Productions, we believe every frame tells a story worth remembering. We specialize in transforming raw footage into captivating visual experiences that move hearts and inspire minds. From weddings filled with emotion, to podcasts that demand clarity and connection, and trailers that ignite anticipation — our editing brings out the essence of every moment.",
            "We also craft seamless vlogs, short-form social videos, and long-form cinematic pieces that engage audiences and elevate your message with a modern, polished touch.",
            "Driven by creativity, precision, and excellence, Godious Productions merges artistry with storytelling to deliver edits that reflect both professionalism and passion. Whether it’s school content, ministry teachings, or pastoral messages, our goal is to make your visuals not just seen, but felt.",
            "We pride ourselves on a divine sense of quality — editing that speaks, inspires, and leaves a lasting impression. At Godious Productions, your vision becomes a masterpiece."
          ].map((text, i) => (
            <motion.p
              key={i}
              className="about-text"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/about.jpg" // UPDATE WITH YOUR FILE
            alt="Godious Productions"
            className="about-image"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}
