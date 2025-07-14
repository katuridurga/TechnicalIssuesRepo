import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.webp";
import { useSelector, shallowEqual } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import thumbnail from "../assets/img/thumbnail.webp";

export default function MenuLogo() {
   const isMobileState = useSelector(
      state => state.mainReducer.isMobile,
      shallowEqual
    );
  return (
<>


   {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || "/landingpage/gameart/" || "/landingpage/masters-and-bachelors-game-development-courses/" || "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/short-course/"  || window.location.pathname === "/landingpage/short-course" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/"  ?   <Link to="/" className="mainLogo">
   {/* <LazyLoadImage effect="blur" placeholderSrc={thumbnail}
        src={logo}
        alt="Backstage Pass"
        className="logo"
        height={isMobileState ? "43" : "50"} 
              width={isMobileState ? "250" : "250"} 
      /> */}
      
      <LazyLoadImage
    effect="blur"
    placeholderSrc={thumbnail}
    src={logo}
    srcSet={`${logo} 250w, ${logo} 500w`}
    sizes="(max-width: 600px) 250px, 500px"
    alt="Backstage Pass"
    className="logo"
    width="250"
    height={isMobileState ? "43" : "50"}
    style={{
      width: "250px",
      height: isMobileState ? "43px" : "50px",
      display: "block"
    }}
  /> </Link>:
    <Link to="/" className="mainLogo">
       <LazyLoadImage
    effect="blur"
    placeholderSrc={thumbnail}
    src={logo}
    srcSet={`${logo} 250w, ${logo} 500w`}
    sizes="(max-width: 600px) 250px, 500px"
    alt="Backstage Pass"
    className="logo"
    width="250"
    height={isMobileState ? "43" : "50"}
    style={{
      width: "250px",
      height: isMobileState ? "43px" : "50px",
      display: "block"
    }}
  /> 

    </Link>}
    </>
  );
}

