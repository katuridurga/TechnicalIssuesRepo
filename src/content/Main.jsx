import React, { useState, useEffect } from 'react';

import Async from "react-code-splitting";
import HomeContent from "./HomeContent";
import AboutBsp from "./AboutBsp";
import FeaturedProduct from "./FeaturedProduct";
import FeaturedProducts from "./FeaturedProducts";
import TopRequiters from "./topRequiters";
import Awards from "./awards";
import Buzzing from "./Buzzing";
import preLoaderVideo from "../assets/img/BSPAnimated.mp4";
import preLoaderWebm from "../assets/img/BSPAnimated.webm";


import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Helmet } from "react-helmet";

import { CustomPreloader } from 'react-preloaders';



import EmblaCarousel from './EmblaCarousel.js'


const Footer = () => (
  <Async load={import("../components/AC-Footer/Footer.jsx")} />
);

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
    </div>
  );
};


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

function Main({ active, props }) {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setShowBanner(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  }, [showBanner]);

  // const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowBanner(false);
  //     setLoading(false);
  //   }, 3000);

  // }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
      setLoading(false);
    }, 3000); // adjust as needed
    return () => clearTimeout(timer);
  }, []);

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  useEffect(() => {
    if (!showPreloader) {
      const checkIfBannerReady = () => {
        const banner = document.getElementById('owl-banners');
        if (banner) {
          setIsReady(true);
        }
      };
      const timeout = setTimeout(checkIfBannerReady, 100);
      return () => clearTimeout(timeout);
    }
  }, [showPreloader]);
  


  return (
    <>
      <Helmet>
        <title>India’s Best Game Development college | Backstage Pass Institute of Gaming
        </title>
        <meta name="description" content="Backstage Pass Institute of Gaming, a leading game development college in India, offers Bachelor’s, Master’s, Diploma, and Advanced Diploma programs in Game Development, Game Art & Design, AR/VR, and more. Get gaming industry-ready with our hands-on curriculum and placement support. Apply Now." />
        <meta name="keywords" content="game programming, best gaming colleges in india, best game development colleges in india, game development, game art & design, game design courses, unity game development, game development courses, gaming colleges in india, gaming courses in india, game design colleges, bsc gaming colleges​​" />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <>
        {isReady && window.location.pathname === '/' &&  (
          <a href="#ribbon">
            <div className='scallop animate'>

              <div className='stripd'>
                <div className='adopen'><p>Admissions Open! </p></div>
                <div className='mainhdb'>
                  <p><b>Bachelor's/Master's Programs :</b> <strong> Apply now for 2025 intake!</strong><strong style={{fontWeight:"700"}}> (Limited seats, Last Date: 15 July 2025)</strong></p><br />
                  <p><b>Diploma/Advanced Diploma Programs :</b> <strong> Limited seats for the July and August 2025 batches. Apply now!</strong> </p>

                </div>
              </div>

            </div>
          </a>)}
        <div className="mainPanel">
          <div className="item pr9">
            {/* Show this block ONLY after preloader is hidden */}
            {!showPreloader && (
              <div id="owl-banners" className="">
                {/* Show internal loader until banner is ready */}
                {!isReady && <Loader />}

                {/* Show carousel only when ready and on homepage */}
                {isReady && window.location.pathname === '/' && (
                  <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                )}
              </div>
            )}
          </div>
          <div>
            <section id="there's-still-time-to-apply-for-2024" className="banner siva">

              <div className="container1">
                <div className="heading heading--white banner__heading">
                  Trailblazers of gaming education in India since 2010
                </div>
              </div>
            </section>
          </div>
          <div className="">




            <AboutBsp />
            <FeaturedProduct />
            <TopRequiters />

            <div className='chapter' id="chapter1">
              <div className="bg-c-gradient300 absolute w-full h-[101%] -top-[1px] -bottom-[1px] left-0 z-[2]"></div>
              <FeaturedProducts />
              <Awards />
            </div>


          </div>



          <Buzzing />
          <div id="ribbon">
            <HomeContent />
          </div>
          <Footer />
        </div>
      </>
      {showPreloader && (
        <CustomPreloader customLoading={loading} background="#000000">
          <video
            autoPlay
            loop
            muted
            playsInline
            width="600"
            height="400"
            style={{ display: 'block', margin: '0 auto' }}
          >
            <source src={preLoaderVideo} type="video/mp4" />
            <source src={preLoaderWebm} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
        </CustomPreloader>
      )}


      
    </>
  );
}

export default Main;
