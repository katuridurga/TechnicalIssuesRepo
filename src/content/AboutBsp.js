import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import job from '../assets/img/11.webp';
import ins from '../assets/img/12.webp';
import awd from '../assets/img/13.webp';
import grad from '../assets/img/14.webp';
import clock from '../assets/img/15.webp';
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
  

    {!isMobileState ? 
            <div className="counter-wrapper" >
            <div className="counter-wrapper1">
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}> <div className="counter">
                <div className="count">
                <div> <LazyLoadImage effect="blur" src={grad} placeholderSrc={thumbnail} alt="count" width="90" height="90" style={{ width: '90px', height: '90px', display: 'block' }} /></div>
                <div>  {counterState &&
                  <CountUp
                    start={0}

                    end={1000}
                    duration={5}
                  />}+</div></div>
                <p>Students</p>
              </div>
              </ScrollTrigger>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
              <div className="counter">
                <div className="count">
                <div> <LazyLoadImage effect="blur" src={ins} placeholderSrc={thumbnail} alt="insurance" width="90" height="90" style={{ width: '90px', height: '90px', display: 'block' }} /></div>
                <div>  {counterState &&
                  <CountUp
                    start={0}

                    end={15}
                    duration={5}
                  />}</div></div>
                <p>Years of Academic Excellence</p>
              </div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}><div className="counter">
                <div className="count">
                <div> <LazyLoadImage effect="blur" src={clock} placeholderSrc={thumbnail} alt="clock" width="90" height="90" style={{ width: '90px', height: '90px', display: 'block' }} /></div>
                <div>  {counterState &&
                  <CountUp
                    start={0}

                    end={200}
                    duration={5}
                  />}K+</div></div>
                <p>Mentoring Hours</p>
              </div></ScrollTrigger>
              <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
              <div className="counter">
                <div className="count">
                <div> <LazyLoadImage effect="blur" src={awd} placeholderSrc={thumbnail} alt="award" width="90" height="90" style={{ width: '90px', height: '90px', display: 'block' }} /></div>
                <div>   {counterState &&
                  <CountUp
                    start={0}

                    end={30}
                    duration={5}
                  />}+</div></div>
                <p>Awards Won</p>
              </div>
              </ScrollTrigger>
              
              <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
              <div className="counter">
                <div className="count">
               <div> <LazyLoadImage effect="blur" src= {job} placeholderSrc={thumbnail} alt="count" width="90" height="90" style={{ width: '90px', height: '90px', display: 'block' }} /></div>
               <div> {counterState &&
                  <CountUp
                    start={0}

                    end={100}
                    duration={5}
                  />}%</div></div>
                <p>Placement Support</p>
              </div>
              </ScrollTrigger>
              
            </div>
            </div>:
                 
         <div className="mblcounter">
              <Mbcounter/>
        </div>
}

    </>
  );
}

export default HomeContent;