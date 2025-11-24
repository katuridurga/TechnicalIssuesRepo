import React, { useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "../../src/components/AC-StaticPages/Alumni/Alumni.css";
import f1 from "../assets/img/art/csd.webp";
import f3 from "../assets/img/art/gad.webp";
import f4 from "../assets/img/art/arvr.webp";
import f5 from "../assets/img/art/msc.webp";
import f6 from "../assets/img/art/adgd.webp";
import f9 from "../assets/img/art/adtd.webp";
import f10 from "../assets/img/art/dcac.webp";
import f11 from "../assets/img/art/dgdp.webp";
import f7 from "../assets/img/art/3dart.webp";
import f8 from "../assets/img/art/gdu.webp";
import f3d from "../assets/img/art/3gard.webp";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import thumbnail from "../assets/img/thumbnail.webp";

import "./FeaturedProduct.css"



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};







function HomeContent() {











  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const [activeTab, setActiveTab] = useState("bachelors");
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const courses = {
    bachelors: [
      { src: f1, title: "Bachelor's in Computer Science & Game Development", link: "/courses/bachelors-in-computer-science-and-game-development/" },
      { src: f3, title: "Bachelor's in Game Art & Design", link: "/courses/bachelors-in-game-art-and-design/" },
      { src: f4, title: "Bachelor's in Augmented Reality & Virtual Reality", link: "/courses/bachelors-in-augmented-reality-and-virtual-reality/" },
    ],
    advancedDiploma: [
      { src: f6, title: "Advanced Diploma in Game Development", link: "/courses/advanced-diploma-in-game-development/" },
      { src: f7, title: "Advanced Diploma in 3D Game Art & Digital Sculpting", link: "/courses/advanced-diploma-in-3d-game-art-digital-sculpting/" },
      { src: f9, title: "Advanced Diploma in Traditional & Digital Concept Art", link: "/courses/advanced-diploma-in-traditional-digital-art/" },
    ],

    diploma: [
      { src: f11, title: "Diploma in Game Design & Production", link: "/courses/diploma-in-game-design-production/" },
      { src: f8, title: "Diploma in Game Development with Unity", link: "/courses/diploma-in-game-development-with-unity/" },
      { src: f10, title: "Diploma in 3D Environment Art For Games", link: "/courses/diploma-in-3d-environment-art-creation-for-games/" },
    ],
    masters: [
      { src: f5, title: "Master's in Game Technology", link: "/courses/masters-in-game-technology/" },
      { src: f3d, title: "Master's in 3D Game Art & Design", link: "/courses/masters-in-3d-game-art-design/" },
    ],

  };
  const categories = [
    { id: "bachelors", title: "Bachelor's Degree" },

    { id: "advancedDiploma", title: "Advanced Diploma" },
    { id: "diploma", title: "Diploma" },
    { id: "masters", title: "Master's Degree" },
  ];
  return (
    <>
      <section id="page-need_guidance-section" className="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden bgw" data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance" >
        <div className="min-h-full h-full w-full container-full relative z-[3] py-4 md:py-8">
          <div className="d">
            <h2 className="mainHeadingTotal"> About Us </h2>


            <p class="text" style={{fontSize:"16px", marginBottom:"20px"}}>
              Founded in 2010, Backstage Pass Institute of Gaming is recognised as one of the best game development colleges in India. We offer comprehensive <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="/courses/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank"> game design and development courses</a></b>, including Bachelor's, Master's, Diploma, and Advanced Diploma programs.
            </p>
            <p class="text" style={{fontSize:"16px", marginBottom:"20px"}}>
              Our founder and chairman, Mr Surya P, is a visionary and a pioneer in the Indian gaming industry and education. <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="/life-at-bsp/alumni-success/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank"> Alumni from Backstage Pass</a></b> now work at top game studios across India and abroad, reflecting the strong industry connections and real-world exposure our students gain.
            </p>
            <p class="text" style={{fontSize:"16px"}}>
              We also offer an  <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="/life-at-bsp/accelerator-program/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank">accelerator program </a></b>to help students build a professional portfolio and gain hands-on experience with real games. As part of our commitment to industry-focused gaming courses, we emphasise practical learning to ensure students develop a deep understanding of both creative and technical aspects of gaming.
            </p>
            <Link style={{ display: "flex", justifyContent: "center" }} to={"/about-us/our-story/"}> <button style={{ width: "fit-content", float: "right", marginTop: isMobileState ? '30px' : "0px", color: "#fff" }} className='three button brand size200 w-full sm:w-auto' type="button">Know More <FiArrowRight style={{ marginLeft: "7px", color: "#fff" }} /></button></Link>
          </div>
        </div>
      </section>
      <section id="page-need_guidance-section" className="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden bgw" data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance" style={{backgroundColor:"#f9fafb"}}>
        <div className="min-h-full h-full w-full container-full relative z-[3] py-4 md:py-8">
          <div className="d">
            <h2 className="mainHeadingTotal">Featured Courses </h2>


            {isMobileState ? (
              <section className="dropdown-container">
                {categories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  const list = courses[cat.id] || [];

                  return (
                    <div className="dropdown-section" key={cat.id}>
                      <div
                        className={`dropdown-header ${isActive ? "active" : ""}`}
                        onClick={() => setActiveTab(isActive ? "" : cat.id)}
                      >
                        <span>{cat.title}</span>
                        <span>{isActive ? "▲" : "▼"}</span>
                      </div>

                      {isActive && (
                        <div className="dropdown-content">
                          {list.map((course, index) => (
                            <div className="cardssf maincolltwo" key={index}>
                              <figure className="figuress">
                                <LazyLoadImage
                                  effect="blur"
                                  src={course.src}
                                  placeholderSrc={thumbnail}
                                  alt={course.title}
                                  style={{ borderRadius: "8px", width: "100%" }}
                                />
                                <figcaption className="figcaptionss">
                                  <div className="mainggames">
                                    <p>{course.title}</p>
                                    <div className="viewc">
                                      <a href={course.link}>View Course</a>
                                    </div>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </section>
            ) :
              <div id="Featured-Mentorsd" height="150vh">

                <div className="maincoll clear-fix">
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f1} placeholderSrc={thumbnail} alt="f1" style={{ borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">


                        <div className="mainggames"><p>Bachelor's in Computer Science & Game Development</p></div>
                        <div className="viewc"><a href="/courses/bachelors-in-computer-science-and-game-development/">View Course</a></div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f3} placeholderSrc={thumbnail} alt="f3" style={{ borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Bachelor's in Game Art & Design</p><div className="viewc"><a href="/courses/bachelors-in-game-art-and-design/">View Course</a></div>
                        </div>

                      </figcaption>
                    </figure>
                  </div>
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f4} placeholderSrc={thumbnail} alt="f4" style={{ borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Bachelor's in Augmented Reality & Virtual Reality</p> <div className="viewc"><a href="/courses/bachelors-in-augmented-reality-and-virtual-reality/">View Course</a></div>
                        </div>

                      </figcaption>
                    </figure>
                  </div>

                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f5} placeholderSrc={thumbnail} alt="f5" style={{ borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">


                        <div className="mainggames"><p>Master's in Game Technology</p><div className="viewc"><a href="/courses/masters-in-game-technology/">View Course</a></div></div>
                      </figcaption>
                    </figure>
                  </div>

                </div>
                <div className="maincoll clear-fix">
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f3d} placeholderSrc={thumbnail} alt="f3d" style={{ borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">


                        <div className="mainggames"><p>Master's in 3D Game Art & Game Design </p><div className="viewc"><a href="/courses/masters-in-3d-game-art-design/">View Course</a></div></div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f6} placeholderSrc={thumbnail} alt="f6" style={{ width: "100%", borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Advanced Diploma in
                          Game Development</p><div className="viewc"><a href="/courses/advanced-diploma-in-game-development/">View Course</a></div></div>

                      </figcaption>
                    </figure>
                  </div>

                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f7} placeholderSrc={thumbnail} alt="f7" style={{ width: "100%", borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p> Advanced Diploma in
                          3D Game Art & Digital Sculpting</p><div className="viewc"><a href="/courses/advanced-diploma-in-3d-game-art-digital-sculpting/">View Course</a></div></div>

                      </figcaption>
                    </figure>
                  </div>
                  {/* <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f9} placeholderSrc={thumbnail} alt="f9" style={{ width: "100%", borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Advanced Diploma in
                          Traditional & Digital Concept Art</p><div className="viewc"><a href="/courses/advanced-diploma-in-traditional-digital-art/">View Course</a></div></div>

                      </figcaption>
                    </figure>
                  </div> */}
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f8} placeholderSrc={thumbnail} alt="f8" style={{ width: "100%", borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Diploma in Game Development with Unity</p><div className="viewc"><a href="/courses/diploma-in-game-development-with-unity/">View Course</a></div></div>

                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maincoll clear-fix">

                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f10} placeholderSrc={thumbnail} alt="f10" style={{ width: "100%", borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Diploma in
                          3D Environment Art For Games</p><div className="viewc"><a href="/courses/diploma-in-3d-environment-art-creation-for-games/">View Course</a></div></div>

                      </figcaption>
                    </figure>
                  </div>
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f11} placeholderSrc={thumbnail} alt="f11" style={{ width: "100%", borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Diploma in Game Design & Production</p><div className="viewc"><a href="/courses/diploma-in-game-design-production/">View Course</a></div></div>

                      </figcaption>
                    </figure>
                  </div>
                  <div className="cardssf maincolltwo">
                    <figure className="figures">
                      <LazyLoadImage effect="blur" src={f3} placeholderSrc={thumbnail} alt="f11" style={{ width: "100%", borderRadius: "8px" }} />
                      <figcaption className="figcaptionss">
                        <div className="mainggames"><p>Diploma in VR Application Development</p><div className="viewc"><a href="/courses/diploma-in-vr-application-development/">View Course</a></div></div>

                      </figcaption>
                    </figure>
                  </div>
                </div>



              </div>}
            <Link style={{ display: "flex", justifyContent: "center" }} to={"/courses/"}> <button style={{ width: "300px", float: "right", marginTop: isMobileState ? '30px' : "0px", color: "#fff" }} className='three button brand size200 w-full sm:w-auto' type="button">View All Courses <FiArrowRight style={{ marginLeft: "7px", color: "#fff" }} /></button></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
