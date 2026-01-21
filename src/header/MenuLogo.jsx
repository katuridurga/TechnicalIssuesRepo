import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/newlogo.webp";
import { useSelector, shallowEqual } from "react-redux";


export default function MenuLogo() {
  const isMobileState = useSelector(
    (state) => state.mainReducer.isMobile,
    shallowEqual
  );


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
          loading="eager"
          decoding="sync"
          style={{
            width: "250px",
            height: isMobileState ? "43px" : "50px",
            display: "block",
            transition: "none",
            opacity: 1,
          }}
        />
      </Link>
    </>
  );
}
