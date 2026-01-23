import React, { useState, useEffect, lazy, Suspense } from 'react';
// import preLoaderVideo from "../assets/img/BSPAnimated.mp4";
// import preLoaderWebm from "../assets/img/BSPAnimated.webm";
import { useSelector, shallowEqual } from "react-redux";

import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Helmet } from "react-helmet";


// Lazy-loaded Components
const Footer = lazy(() => import("../components/AC-Footer/Footer.jsx"));
const Buzzing = lazy(() => import("./Buzzing"));
const Awards = lazy(() => import("./awards"));
const HomeContent = lazy(() => import("./HomeContent"));
const AboutBsp = lazy(() => import("./AboutBsp"));
const FeaturedProduct = lazy(() => import("./FeaturedProduct"));
const FeaturedProducts = lazy(() => import("./FeaturedProducts"));
const TopRequiters = lazy(() => import("./topRequiters"));
const EmblaCarousel = lazy(() => import('./EmblaCarousel.js'));

// Loader fallback
const Loader = () => (
  <div className="loader-container">
    <div className="loader-spinner"></div>
  </div>
);

// Scroll hide logic
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
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
  const [showPreloader, setShowPreloader] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
 const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setShowBanner(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  }, [showBanner]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  useEffect(() => {
    if (!showPreloader) {
      const checkIfBannerReady = () => {
        const banner = document.getElementById('owl-banners');
        if (banner) setIsReady(true);
      };
      const timeout = setTimeout(checkIfBannerReady, 100);
      return () => clearTimeout(timeout);
    }
  }, [showPreloader]);

  return (
    <>
      <Helmet>
        <title>India’s Best Game Development college | Backstage Pass Institute of Gaming</title>

        <meta property="og:title" content="India’s Best Game Development college | Backstage Pass Institute of Gaming" />
        <meta property="og:description" name="description" content="Backstage Pass Institute of Gaming, a leading game development college in India, offers Bachelor’s, Master’s, Diploma, and Advanced Diploma programs in Game Development, Game Art & Design, AR/VR, and more. Get gaming industry-ready with our hands-on curriculum and placement support. Apply Now." />
      <meta name="description" content="Backstage Pass Institute of Gaming, a leading game development college in India, offers Bachelor’s, Master’s, Diploma, and Advanced Diploma programs in Game Development, Game Art & Design, AR/VR, and more. Get gaming industry-ready with our hands-on curriculum and placement support. Apply Now." />
        <meta property="og:url" content="https://www.backstagepass.co.in/" />
        <meta name="keywords" content="game programming, best gaming colleges in india, best game development colleges in india, game development, game art & design, game design courses, unity game development, game development courses, gaming colleges in india, gaming courses in india, game design colleges, bsc gaming colleges​​" />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <>
        {isReady && window.location.pathname === '/' && (
          <a href="#ribbon">
            <div className='scallop animate'>
              <div className='stripd'>
<div className='adopen'>
  <p style={{ marginBottom: isMobileState ? "0px" : "0px" }}>
    Admissions Open!
    <br />
    <span style={{ marginTop: "6px", display: "block" }}>
      Limited seats
    </span>
  </p>
</div>
                <div className='mainhdb'>
                  <p><b>Bachelor's/Master's Programs :</b> <strong> Apply now for 2026 intake!</strong></p><br />
                  <p><b>Diploma/Advanced Diploma Programs :</b> <strong>Apply now!</strong> </p>
                </div>
              </div>
            </div>
          </a>
        )}

        <div className="mainPanel">
          <div className="item pr9">
            {!showPreloader && (
              <div id="owl-banners">
                {!isReady && <Loader />}
                {isReady && window.location.pathname === '/' && (
                  <Suspense fallback={<Loader />}>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                  </Suspense>
                )}
              </div>
            )}
          </div>

          <section id="there's-still-time-to-apply-for-2024" className="banner siva">
            <div className="container1">
              <h1 className="heading heading--white banner__heading">
                Trailblazers of gaming education in India since 2010
              </h1>
            </div>
          </section>

          <div>
            <Suspense fallback={<Loader />}>
              <AboutBsp />
              <FeaturedProduct />
              <TopRequiters />

              <div className='chapter' id="chapter1">
                {/* <div className="bg-c-gradient300 absolute w-full h-[101%] -top-[1px] -bottom-[1px] left-0 z-[2]"></div> */}
                <FeaturedProducts />
                <Awards />
              </div>
            </Suspense>
          </div>

          <Suspense fallback={<Loader />}>
            <Buzzing />
            <div id="ribbon">
              <HomeContent />
            </div>
            <Footer />
          </Suspense>
        </div>
      </>

      {/* Optional: Use this if you want animated video loader back */}
      {/* {showPreloader && (
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
      )} */}
    </>
  );
}

export default Main;
