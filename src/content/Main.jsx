import React, { useState, useEffect, lazy, Suspense } from 'react';
// import preLoaderVideo from "../assets/img/BSPAnimated.mp4";
// import preLoaderWebm from "../assets/img/BSPAnimated.webm";
import { useSelector, shallowEqual } from "react-redux";
//import popupImg from "../assets/img/qs-ranking-2026.webp";
import popup685 from "../assets/img/qs-ranking-2026-685w.webp";
import popup1370 from "../assets/img/qs-ranking-2026-1370w.webp";
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Helmet } from "react-helmet";
// Lazy-loaded Components
import Marquee from "react-fast-marquee";
const Buzzing = lazy(() => import("./Buzzing"));
const YoutubeVideos = lazy(() => import("./YoutubeVideos.js"));
const Awards = lazy(() => import("./awards"));
const HomeContent = lazy(() => import("./HomeContent"));
const AboutBsp = lazy(() => import("./AboutBsp"));
const FeaturedProduct = lazy(() => import("./FeaturedProduct"));
const FeaturedProducts = lazy(() => import("./FeaturedProducts"));
const TopRequiters = lazy(() => import("./topRequiters"));
const EmblaCarousel = lazy(() => import('./EmblaCarousel.js'));
const Footer = lazy(() => import("../components/AC-Footer/Footer.jsx"));
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
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("HOME_POPUP_SHOWN");

    if (window.location.pathname === "/") {
      setShowPopup(true);
      localStorage.setItem("HOME_POPUP_SHOWN", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const now = new Date().getTime();
  const lastShown = localStorage.getItem("HOME_POPUP_TIME");

  // if (!lastShown || now - lastShown > 86400000) {
  //   setShowPopup(true);
  //   localStorage.setItem("HOME_POPUP_TIME", now);
  // }

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
          <a href="/Application-form/">
            <div className='scallop animate'>
              <div className='stripd'>
                {/* <div className='adopenp'>
                  <p style={{ marginBottom: isMobileState ? "0px" : "0px" }}>
                 
                    <span style={{ marginTop: "0px", display: "block" }}>
                        Admissions Open! Limited seats
                    </span>
                  </p>
                </div> */}
                {isMobileState ? <div className="admission-wrapper">
                  <div className="block">
                    <h1>
                      <span className="blinck">Admissions 2026</span>
                    </h1>
                  </div>
                </div> :
                  <div className="">
                    <div className="block">
                      <h1>
                        <span className='blinck'> Admissions 2026</span>

                      </h1>
                    </div>
                  </div>}

                {/* <div className="page">
                      <h1 className="texta page__text" data-text="Admissions Open!">Admissions Open!</h1>
                  </div>  */}
                {isMobileState ? <Marquee pauseOnHover={true} // ✅ stops scroll on hover
                  speed={50}
                  style={{
                    padding: "0px 20px",
                    marginBottom: isMobileState ? "0px" : "10px",
                  }} className='recuitersList hdmboile'>


                  <p style={{ color: "#fff", fontSize: "14px", marginBottom: "0px" }}><b>Bachelor's/Master's Programs :</b> <strong className='menu-item-mine'>Apply now </strong></p>
                  <p style={{ color: "#fff", fontSize: "14px", marginBottom: "0px" }}><b>Diploma/Advanced Diploma Programs :</b> <strong className='menu-item-mine'>Apply now!</strong></p>

                  <p style={{ color: "#fff", fontSize: "14px", marginBottom: "0px" }}><b>Bachelor's/Master's Programs :</b> <strong className='menu-item-mine'>Apply now </strong></p>
                  <p style={{ color: "#fff", fontSize: "14px", marginBottom: "0px" }}><b>Diploma/Advanced Diploma Programs :</b> <strong className='menu-item-mine'>Apply now!</strong></p>

                </Marquee>
                  :
                  <Marquee pauseOnHover={true} // ✅ stops scroll on hover
                    speed={50}
                    style={{
                      padding: "0px 20px",
                      marginBottom: isMobileState ? "0px" : "10px",
                    }} className='recuitersList'>


                    <p className='disp' style={{ color: "#fff", marginBottom: "3.7rem", fontSize: "16px" }}><b>Bachelor's Programs :</b> <strong className='menu-item-mine'>Apply now </strong></p>
                    <p className='disp' style={{ color: "#fff", marginBottom: "3.7rem", fontSize: "16px" }}><b>Master's Programs :</b> <strong className='menu-item-mine'>Apply now </strong></p>
                    <p className='disp' style={{ color: "#fff", marginBottom: "3.7rem", fontSize: "16px" }}><b>Diploma/Advanced Diploma Programs :</b> <strong className='menu-item-mine'>Apply now!</strong></p>

                    {/* <p style={{color:"#fff", marginBottom:"4rem", fontSize:"16px"}}><b>Bachelor's/Master's Programs :</b> <strong className='menu-item-mine'>Apply now </strong></p>
                      <p style={{color:"#fff", marginBottom:"4rem", fontSize:"16px"}}><b>Diploma/Advanced Diploma Programs :</b> <strong className='menu-item-mine'>Apply now!</strong></p> */}

                  </Marquee>

                }
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
          {/*admissions popup code*/}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-box">

                <button className="close-btn" onClick={handleClosePopup}>
                  ✖
                </button>

                <a href="/Application-form/?utm_source=seasonalpopout" target="_blank" rel="noopener noreferrer">
                  {/* <img src={popupImg} alt="Admissions Open" className="popup-image"  loading='lazy'/> */}
                                <img
                      src={popup685}
                      srcSet={`
                        ${popup685} 685w,
                        ${popup1370} 1370w
                      `}
                      sizes="(max-width: 768px) 100vw, 685px"
                      width="685"
                      height="286"
                      alt="Admissions Open"
                      className="popup-image"
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                    />
                </a>

              </div>
            </div>
          )}

          <section id="there's-still-time-to-apply-for-2024" className="banner siva">
            <div className="container1">
              <h2 className="heading heading--white banner__heading">
                Trailblazers of gaming education in India since 2010
              </h2>
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
                <YoutubeVideos />
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
