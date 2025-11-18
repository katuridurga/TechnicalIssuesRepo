import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/newlogo.webp";
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

  const isLandingLogo = landingLogoPaths.includes(path);

  return (
    <>
      {/* ✅ Single Link (no conditional mount) to avoid flicker */}
      <Link to="/" className="mainLogo" aria-label="Backstage Pass Home">
        <img
          src={logo}
          alt="Backstage Pass"
          className="logo"
          width="250"
          height={isMobileState ? 43 : 50}
          loading="eager"      // ✅ Load immediately on page load
          decoding="sync"      // ✅ Render instantly (no async decode delay)
          style={{
            width: "250px",
            height: isMobileState ? "43px" : "50px",
            display: "block",
            transition: "none",  // ✅ Disable fade/transition
            opacity: 1,          // ✅ Always visible (no fade-in)
          }}
        />
      </Link>
    </>
  );
}
