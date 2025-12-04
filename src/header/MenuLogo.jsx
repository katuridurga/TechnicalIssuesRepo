import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/newlogow.webp";
import { useSelector, shallowEqual } from "react-redux";

export default function MenuLogo() {
  const isMobileState = useSelector(
    (state) => state.mainReducer.isMobile,
    shallowEqual
  );

  const path = window.location.pathname;

  // ✅ All paths you had in your condition, fixed with .includes()
  const landingLogoPaths = [
    "/landingpage/diploma-and-advanced-diploma-game-development-courses/",
    "/landingpage/gameart/",
    "/landingpage/masters-and-bachelors-game-development-courses/",
    "/landingpage/masters-and-bachelors-programs/",
    "/landingpage/game-art-programs/",
    "/landingpage/short-course/",
    "/landingpage/short-course",
    "/landingpage/game-development-with-unity-programs/",
    "/landingpage/best-gaming-courses-in-india/",
  ];

 
  return (
    <>
   <Link to="/" className="mainLogo" aria-label="Backstage Pass Home">
  <img
    src={logo}
    alt="Backstage Pass Homepage"
    className="logo"
    width="250"         // Width set to 250px
    height="43"         // Height calculated to maintain aspect ratio
    loading="eager"     // Load immediately on page load
    decoding="sync"     // Sync decoding for immediate render
    style={{
      width: "250px",    // Fixed width of 250px
      height: "43px",    // Fixed height of 43px
      display: "block",  // Prevents unwanted space below the image
      transition: "none", // Disable any transition animations
      opacity: 1,        // Always visible
    }}
    // To optimize for different screen sizes, using `srcSet` and `sizes`
    srcSet={`${logo}?w=250&h=43&fit=contain 1x, ${logo}?w=500&h=86&fit=contain 2x`} // Responsive image sources
    sizes="(max-width: 768px) 250px, 500px"  // Adjust size based on screen width
  />
</Link>


    </>
  );
}
