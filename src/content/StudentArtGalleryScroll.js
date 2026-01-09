import React, { useEffect, useRef } from "react";
import "./StudentArtGalleryScroll.css";

/* Images */
import art17 from "../assets/img/art/KhushiNileshPathak.png";
import art18 from "../assets/img/art/Deepak.png";
import art19 from "../assets/img/art/SuryaVamsi2.png";
import art20 from "../assets/img/art/SuryaVamsi1.png";
import art21 from "../assets/img/art/SuryaVamsi3.png";
import art22 from "../assets/img/art/SuryaVamsi4.png";
import art23 from "../assets/img/art/SuryaVamsi5.png";
import art24 from "../assets/img/art/SOUMYADEEP.png";
import art25 from "../assets/img/art/NCharishmaDevi.png";
import art26 from "../assets/img/art/AbhiAstu.png";
import art27 from "../assets/img/art/Sumanthmuralikumar.png";
import art28 from "../assets/img/art/AniketMukhi2d.png";
import art29 from "../assets/img/art/Nikhil-1.png";
import art30 from "../assets/img/art/Nikhil.png";
import art31 from "../assets/img/art/KhushiNileshPathak-1.png";
import art32 from "../assets/img/art/Mahesh.png";
import art33 from "../assets/img/art/TaniyaDas.png";

const ResponsiveGallery = () => {
  const images = [
    art17, art18, art19, art20, art21, art22, art23,
    art24, art25, art26, art27, art28, art29, art30,
    art31, art32, art33
  ];

  const trackRef = useRef(null);
  const isPaused = useRef(false); // 🔥 pause flag
  const speed = 0.95;

  useEffect(() => {
    let x = 0;
    let raf;

    const animate = () => {
      if (!isPaused.current) {
        x -= speed;

        if (Math.abs(x) >= trackRef.current.scrollWidth / 2) {
          x = 0;
        }

        trackRef.current.style.transform = `translateX(${x}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="containergbn responsive-gallery"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <div className="gallery-track-grid" ref={trackRef}>
        {[...images, ...images].map((img, idx) => (
          <div className="gallery-itembn" key={idx}>
            <img
              src={img}
              alt="student-art"
              className="gallery-image1"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGallery;
