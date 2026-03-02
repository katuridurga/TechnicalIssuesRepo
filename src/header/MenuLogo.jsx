import React from "react";
import { Link } from "react-router-dom";
//import logo from "../assets/img/newlogo.webp";
import logo313 from "../assets/img/newlogo-313w.webp";
import logo626 from "../assets/img/newlogo-626w.webp";
//import { useSelector, shallowEqual } from "react-redux";
import { useLocation } from "react-router-dom";

export default function MenuLogo() {
  // const isMobileState = useSelector(
  //   (state) => state.mainReducer.isMobile,
  //   shallowEqual
  // );
  // Determine if we are on the Maya landing page
const isMayaLanding =
  window.location.pathname === "/landingpage/basics-of-maya-online-certification/";
  return (
    <>
      {/* ✅ Single Link (no conditional mount) to avoid flicker */}
<Link
  to="/"
  className="mainLogo"
  aria-label="Backstage Pass Home"
  title="Backstage Pass – Home"
  {...(isMayaLanding && {
    onClick: (e) => {
      e.preventDefault(); // prevent default <Link> behavior
      window.location.href = "https://learning.backstagepass.co.in/";
    },
  })}
>
  <img
    src={logo313}
    srcSet={`${logo313} 1x, ${logo626} 2x`}
    alt="Backstage Pass"
    className="logo"
    width="313"
    height="54"
    loading="eager"
    fetchpriority="high"
    style={{
      width: "250px",
      height: "50px",
      display: "block",
      transition: "none",
      opacity: 1,
    }}
  />
</Link>

    </>
  );
}
