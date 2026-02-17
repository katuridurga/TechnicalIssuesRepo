import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { IoMdStarOutline } from "react-icons/io";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineGroups } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { LiaTrophySolid } from "react-icons/lia";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector, shallowEqual } from "react-redux";

import jobn from "../assets/img/placentsn.webp";
import insn from "../assets/img/yaen.webp";
import awdn from "../assets/img/awardsn.webp";
import gradn from "../assets/img/studentsi.webp";
import clockn from "../assets/img/star.webp";
import thumbnail from "../assets/img/thumbnail.webp";

import "./AboutBsp.css";

function HomeContent() {
  const [visible, setVisible] = useState(false);

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  return (
    <div className="counter-wrapper">
      <ScrollTrigger onEnter={() => setVisible(true)}>
        <div className="counter-wrapper1">

          {/* Counter Item */}
          <CounterItem
            visible={visible}
            end={1500}
            label="Alumni"
            icon={isMobileState ? <SlGraduation size={50} color="#ee1b24" /> :
              <LazyLoadImage effect="blur" src={gradn} placeholderSrc={thumbnail} alt="Alumni" width="65" height="65" style={{ width: "65px", height: "65px" }} />}
          />

          <CounterItem
            visible={visible}
            end={16}
            label="Years of Academic Excellence"
            icon={isMobileState ? <PiMedal size={50} color="#ee1b24" /> :
              <LazyLoadImage effect="blur" src={insn} placeholderSrc={thumbnail} alt="Years" width="65" height="65" style={{ width: "65px", height: "65px" }} />}
          />

          <CounterItem
            visible={visible}
            end={4.3}
            decimals={1}
            label="Student Rating"
            icon={isMobileState ? <IoMdStarOutline size={50} color="#ee1b24" /> :
              <LazyLoadImage effect="blur" src={clockn} placeholderSrc={thumbnail} alt="Rating" width="65" height="65" style={{ width: "65px", height: "65px" }} />}
          />

          <CounterItem
            visible={visible}
            end={30}
            label="Awards Won"
            icon={isMobileState ? <LiaTrophySolid size={50} color="#ee1b24" /> :
              <LazyLoadImage effect="blur" src={awdn} placeholderSrc={thumbnail} alt="Awards" width="65" height="65" style={{ width: "65px", height: "65px", }} />}
          />

          <CounterItem
            visible={visible}
            end={100}
            suffix="%"
            label="Placement Support"
            icon={isMobileState ? <MdOutlineGroups size={50} color="#ee1b24" /> :
              <LazyLoadImage effect="blur" src={jobn} placeholderSrc={thumbnail} alt="Placement" width="65" height="65" style={{ width: "65px", height: "65px", textAlign: "left" }} />}
          />

        </div>
      </ScrollTrigger>
    </div>
  );
}

function CounterItem({ visible, end, label, icon, decimals = 0, suffix = "+" }) {
  return (
    <div className="counter">
      <div className="count">
        <div className="icon">{icon}</div>

        <div className="number">
          <div className="num-line">
            <CountUp
              start={visible ? 0 : end}
              end={end}
              duration={2.5}
              decimals={decimals}
              preserveValue
            />
            <span className="plus">{suffix}</span>
          </div>
          <p style={{ textAlign: "left" }}>{label}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
