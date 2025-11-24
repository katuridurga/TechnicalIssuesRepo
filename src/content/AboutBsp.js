import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import { IoMdStarOutline } from "react-icons/io";
import { IoRibbonOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineGroups } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { LiaTrophySolid } from "react-icons/lia";
import { RiAwardFill } from "react-icons/ri";






import job from '../assets/img/11.webp';
import ins from '../assets/img/12.webp';
import awd from '../assets/img/13.webp';
import grad from '../assets/img/14.webp';
import clock from '../assets/img/15.webp';
import jobn from '../assets/img/placentsn.webp';
import insn from '../assets/img/yaen.webp';
import awdn from '../assets/img/awardsn.webp';
import gradn from '../assets/img/studentsi.webp';
import clockn from '../assets/img/star.webp';
import "./AboutBsp.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSelector, shallowEqual } from "react-redux";
import Mbcounter from '../components/AC-StaticPages/counter/counter.js';
import thumbnail from "../assets/img/thumbnail.webp";

function HomeContent() {

  const [counterState, setCounterState] = useState(false);
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  return (

    <>

      <div className="counter-wrapper" style={{ backgroundColor: "#f9fafb" }}>
        <div className="counter-wrapper1">

          {/* 1. Students */}
          <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="counter">
              <div className="count">
                {/* Icon left */}
                <div className="icon">
                  {isMobileState ? (
                    <SlGraduation
                      size={50} color="#ee1b24" />
                  ) : (
                    <LazyLoadImage
                      effect="blur"
                      src={gradn}
                      placeholderSrc={thumbnail}
                      alt="count"
                      width="50"
                      height="50"
                      style={{
                        width: '65px',
                        height: '65px',
                        display: 'block'
                      }}
                    />
                  )}
                </div>

                {/* Number + p stacked */}
                <div className="number">
                  <div className="num-line">
                    {counterState && <CountUp start={0} end={1500} duration={5} />}
                    <span className="plus">+</span>
                  </div>

                  <p>Alumni</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>

          {/* 2. Academic Excellence */}
          <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="counter">
              <div className="count">
                <div className="icon">
                  {isMobileState ? (
                    <PiMedal 
                      size={50} color="#ee1b24" />
                  ) : (
                    <LazyLoadImage
                      effect="blur"
                      src={insn}
                      placeholderSrc={thumbnail}
                      alt="count"
                      width="50"
                      height="50"
                      style={{
                        width: '65px',
                        height: '65px',
                        display: 'block'
                      }}
                    />
                  )}
                </div>
                <div className="number">
                  <div className="num-line">
                    {counterState && <CountUp start={0} end={15} duration={5} />}
                    <span className="plus">+</span>
                  </div>

                  <p style={{ textAlign: "left" }}>Years of Academic Excellence</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>

          {/* 3. Mentoring Hours */}
          <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="counter">
              <div className="count">
                <div className="icon">
                  {isMobileState ? (
                    <IoMdStarOutline
                      size={50} color="#ee1b24" />
                  ) : (
                    <LazyLoadImage
                      effect="blur"
                      src={clockn}
                      placeholderSrc={thumbnail}
                      alt="count"
                      width="50"
                      height="50"
                      style={{
                        width: '65px',
                        height: '65px',
                        display: 'block'
                      }}
                    />
                  )}
                </div>
                <div className="number">
                  <div className="num-line">
                    {counterState && <CountUp start={0} end={4.3} duration={5} decimals={1} />}


                  </div>
                  <p>Student Rating</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>

          {/* 4. Awards */}
          <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="counter">
              <div className="count">
                <div className="icon">
                  {isMobileState ? (
                    <LiaTrophySolid
                      size={50} color="#ee1b24" />
                  ) : (
                    <LazyLoadImage
                      effect="blur"
                      src={awdn}
                      placeholderSrc={thumbnail}
                      alt="count"
                      width="50"
                      height="50"
                      style={{
                        width: '65px',
                        height: '65px',
                        display: 'block'
                      }}
                    />
                  )}

                </div>
                <div className="number">
                  <div className="num-line">
                    {counterState && <CountUp start={0} end={30} duration={5} />}          <span className="plus">+</span>
                  </div>

                  <p>Awards Won</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>

          {/* 5. Placement */}
          <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="counter">
              <div className="count">
                <div className="icon">
                  {isMobileState ? (
                    <MdOutlineGroups
                      size={50} color="#ee1b24" />
                  ) : (
                    <LazyLoadImage
                      effect="blur"
                      src={jobn}
                      placeholderSrc={thumbnail}
                      alt="count"
                      width="50"
                      height="50"
                      style={{
                        width: '65px',
                        height: '65px',
                        display: 'block'
                      }}
                    />
                  )}

                </div>
                <div className="number">
                  <div className="num-line">
                    {counterState && <CountUp start={0} end={100} duration={5} />}         <span className="plus">%</span>
                  </div>

                  <p style={{ textAlign: "left" }}>Placement Support</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>

        </div>
      </div>


    </>
  );
}

export default HomeContent;