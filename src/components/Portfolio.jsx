import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import "./Portfolio.css";

export default function PortfolioCarousel() {
  const items = [
    { id: "wedding", title: "Cinematic Wedding Highlight Reel", caption: "Emotion-filled wedding highlights edited with cinematic storytelling.", video: "https://www.w3schools.com/html/mov_bbb.mp4", icon: <FaPlay /> },
    { id: "podcast", title: "Podcast Studio Edit", caption: "Clean multi-cam editing + crisp audio mixing for long-form podcasts.", video: "https://www.w3schools.com/html/movie.mp4", icon: <FaExternalLinkAlt /> },
    { id: "trailer", title: "Trailer / Teaser Edit", caption: "High-energy cuts crafted for hype, suspense, and social media promos.", video: "https://www.w3schools.com/html/mov_bbb.mp4", icon: <FaPlay /> },
    { id: "vlog", title: "Vlog Edit (Travel / Lifestyle)", caption: "Dynamic vlog edits built for personality, pacing, and engagement.", video: "https://www.w3schools.com/html/movie.mp4", icon: <FaPlay /> },
    { id: "motion", title: "Motion Graphics + Text Animation", caption: "Professional motion graphics, lyric videos, intros & lower thirds.", video: "https://www.w3schools.com/html/mov_bbb.mp4", icon: <FaExternalLinkAlt /> },
    { id: "ministry", title: "Ministry / Teaching Edits", caption: "Impactful edits for sermons, testimonies, and teaching content.", video: "https://www.w3schools.com/html/movie.mp4", icon: <FaPlay /> },
  ];

  // Duplicate items to allow seamless looping
  const loopItems = [...items, ...items, ...items]; 
  const trackRef = useRef(null);
  const innerRef = useRef(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(0.5); // pixels per frame, adjust for faster/slower

  // Calculate total width of inner track
  const [trackWidth, setTrackWidth] = useState(0);
  useEffect(() => {
    const inner = innerRef.current;
    if (inner) setTrackWidth(inner.scrollWidth / 3); // width of one original set
    const handleResize = () => {
      if (inner) setTrackWidth(inner.scrollWidth / 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous animation
  useEffect(() => {
    let animationFrame;
    let x = -trackWidth; // start at middle set
    const animate = () => {
      if (!isPaused) {
        x -= speed; // move left
        if (x <= -trackWidth * 2) x = -trackWidth; // loop seamlessly
        controls.set({ x });
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [trackWidth, isPaused, speed, controls]);

  // Drag snapping (optional for user drag)
  const onDragEnd = () => {
    const children = Array.from(innerRef.current.children);
    const trackLeft = trackRef.current.getBoundingClientRect().left;
    let nearest = 0,
      minDiff = Infinity;
    children.forEach((c, idx) => {
      const diff = Math.abs(c.getBoundingClientRect().left - trackLeft);
      if (diff < minDiff) {
        minDiff = diff;
        nearest = idx;
      }
    });
    const child = children[nearest];
    if (child) {
      const delta = child.getBoundingClientRect().left - trackLeft;
      controls.start({ x: -delta, transition: { duration: 0.5, ease: "easeOut" } });
    }
  };

  return (
    <section className="portfolio-carousel" aria-label="Creative showcase" id="portfolio">
      <div className="portfolio-header">
        <h2>Portfolio — Creative Showcase</h2>
        <p className="sub">Selected creative edits & studio work (placeholders)</p>
      </div>

      <div
        className="carousel-viewport"
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="carousel-track"
          ref={innerRef}
          drag="x"
          dragConstraints={{ left: -trackWidth * 2, right: 0 }}
          onDragEnd={onDragEnd}
          animate={controls}
          whileTap={{ cursor: "grabbing" }}
        >
          {loopItems.map((it, i) => (
            <motion.article
              className="carousel-item"
              key={`${it.id}-${i}`}
              whileHover={{ scale: 1.03, zIndex: 5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="item-media">
                <video
                  src={it.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }}
                />
                <div className="item-label">{it.title}</div>
              </div>
              <div className="item-meta">
                <h3>{it.title}</h3>
                <p>{it.caption}</p>
                {/* <div className="item-actions">
                  <button className="btn view">{it.icon} View Work</button>
                  <button className="btn ghost">{it.icon} Open</button>
                </div> */}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
