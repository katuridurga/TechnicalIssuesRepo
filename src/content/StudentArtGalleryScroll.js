import React, { useState, useRef, useEffect } from "react";
import AnimatedText from "../components/AC-StaticPages/landingpage/AnimatedText"; // Update if needed
import "./StudentArtGalleryScroll.css";

// Image imports
import art33 from "../assets/img/art/VijaySivatej1.webp";
import art44 from "../assets/img/art/SuryaShankha2.webp";
import art55 from "../assets/img/art/AbhiAstu1.webp";
import art66 from "../assets/img/art/Frame37.webp";
import art77 from "../assets/img/art/Frame19.webp";
import artad2 from "../assets/img/art/render027.webp";
import art22 from "../assets/img/art/Frame28.png";
import artad3 from "../assets/img/art/VijaySivatejMareedu.png";
import artad1 from "../assets/img/art/art1.webp";
import artadb from "../assets/img/art/indratanu-bhattacharya.webp";
import artadb2 from "../assets/img/art/lakshminadh-singh-1.webp";
import artadb3 from "../assets/img/art/sreedhar-hredner2.webp";

const ResponsiveGallery = () => {
  const images = [art77, art33, art55, art44, art66, artad1, artad2, artad3, art22, artadb, artadb2, artadb3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imagesPerPage = isMobile ? 1 : 6;
  const pageCount = Math.ceil(images.length / imagesPerPage);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swipe left (next)
      setCurrentIndex((prev) => (prev + 1) % pageCount);
    } else if (diff < -50) {
      // Swipe right (previous)
      setCurrentIndex((prev) => (prev - 1 + pageCount) % pageCount);
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // Prevent vertical scroll while swiping
  };

  const getImagesForCurrentPage = () => {
    const start = currentIndex * imagesPerPage;
    return images.slice(start, start + imagesPerPage);
  };

  return (
    <div
      className="containergbn responsive-gallery"
      ref={galleryRef}
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
    >
      <div className={`gallery-grid ${isMobile ? "mobile" : "desktop"}`}>
        {getImagesForCurrentPage().map((imgSrc, idx) => (
          <AnimatedText
            key={idx}
            direction={idx % 3 === 0 ? "left" : idx % 3 === 1 ? "up" : "right"}
            delay={0.2}
          >
            <div className="gallery-itembn">
              <img
                className="gallery-image1"
                src={imgSrc}
                alt={`art${idx}`}
                style={{ transition: "transform 0.3s ease-in-out" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Dots */}
      <div className="dotsbn">
        {Array.from({ length: pageCount }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
          onClick={() => {
  setCurrentIndex(idx);
}}

          ></span>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGallery;
