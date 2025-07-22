import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import AnimatedText from "./AnimatedText";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import ReactWhatsappButton from "react-whatsapp-button";
import Marquee from "react-fast-marquee";
import { CiPhone } from "react-icons/ci";
import FeaturedProductsb from "../../../content/FeaturedProductsb.js";
import StudentArtGalleryS from "../../../content/StudentArtGalleryScroll.js";

import r1 from "../../../assets/img/partners/r1.png";
import bachg from "../../../assets/img/mobilebanner/bgeneric.webp";
import r2 from "../../../assets/img/partners/r2.png";
import r4 from "../../../assets/img/partners/r4.png";
import r5 from "../../../assets/img/partners/r5.png";
import r6 from "../../../assets/img/partners/r6.svg";
import r7 from "../../../assets/img/partners/r7.png";
import lc1 from "../../../assets/img/logos/TerminatorGenisys.webp";
import lc2 from "../../../assets/img/logos/starwars.webp";
import lc3 from "../../../assets/img/logos/Spyder.webp";
import lc4 from "../../../assets/img/logos/sniper.webp";
import lc5 from "../../../assets/img/logos/sackboy.webp";
import lc6 from "../../../assets/img/logos/crackdown3.webp";
import lc7 from "../../../assets/img/logos/Pac-man.webp";
import lc8 from "../../../assets/img/logos/Forza7.webp";
import lc9 from "../../../assets/img/logos/Thetexaschainsawmassacre.webp";


import { Helmet } from "react-helmet";

import Flag1 from "../../../assets/img/banners/usa.webp";
import Flag2 from "../../../assets/img/banners/uk.webp";
import Flag3 from "../../../assets/img/banners/canada.webp";
import Flag4 from "../../../assets/img/banners/germany.webp";
import Flag5 from "../../../assets/img/banners/sweden.webp";
import axios from 'axios';
import { useSelector, shallowEqual } from "react-redux";
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import Typography from '@mui/material/Typography';

import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import wc1 from '../../../assets/img/Icons/WEBSITE-ICON/15yearsofExperience1.webp';
import wc2 from '../../../assets/img/Icons/WEBSITE-ICON/Awardwinninggamingcollege1.webp';
import wc3 from '../../../assets/img/Icons/WEBSITE-ICON/Industryalignedcurriculum1.webp';
import wc4 from '../../../assets/img/Icons/WEBSITE-ICON/TaughtbyindustryExperiencedprofessionals1.webp';
import wc5 from '../../../assets/img/Icons/WEBSITE-ICON/HandsonTraining1.webp';
import wc6 from '../../../assets/img/Icons/WEBSITE-ICON/StrongIndustryConnection1.webp';
import wc7 from '../../../assets/img/Icons/WEBSITE-ICON/Placementassistance1.webp';
import wc8 from '../../../assets/img/Icons/WEBSITE-ICON/Accesstofreewebinars_workshops1.webp';
import wc9 from '../../../assets/img/Icons/WEBSITE-ICON/GlobalAluminicommunity1.webp';
import cc1 from '../../../assets/img/Icons/WEBSITE-ICON/GameDeveloper.webp';
import cc2 from '../../../assets/img/Icons/WEBSITE-ICON/Gameplayprogrammer.webp';
import cc3 from '../../../assets/img/Icons/WEBSITE-ICON/Gamedesigner.webp';
import cc4 from '../../../assets/img/Icons/WEBSITE-ICON/3Denvironmentartist.webp';
import cc5 from '../../../assets/img/Icons/WEBSITE-ICON/Characterartist.webp';
import cc6 from '../../../assets/img/Icons/WEBSITE-ICON/UI_Uxdesignerforgames.webp';
import cc7 from '../../../assets/img/Icons/WEBSITE-ICON/TechnicalArtisticon.webp';
import cc8 from '../../../assets/img/Icons/WEBSITE-ICON/AR_VRDeveloper.webp';
import arb from "../../../assets/img/Courses/AR-VRb.webp"
import csb from "../../../assets/img/Courses/computerscienceandgamedevelopmentb.webp"
import gab from "../../../assets/img/Courses/Gameartdesignb.webp"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




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
        <Box sx={{ p: 1 }}>
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


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

function DiplomaAndAdvancedDiplomaCourses({ active, props }) {


  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const theme = useTheme();


  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Function to scroll to the bottom of the container
  const scrollToBottom = () => {
    const container = document.getElementById('scroll-container');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });

    }
    // Hide the button after clicking
    setIsButtonVisible(true);
  };

  // Handle scroll event
  const handleScroll = () => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
      //alert(isAtBottom);
      // Show the button when scrolling up
      if (!isAtBottom) {
        setIsButtonVisible(true);
        // alert("Sivak");
      } else {
        setIsButtonVisible(false);
        // alert("Ram");
      }
    }
  };

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);

    }

    // Clean up the event listener
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);

      }
    };
  }, []);

  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const [open, setOpen] = React.useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Set your desired speed (e.g., 0.7x)
    }
  }, []);


  const handleClose = () => {
    setOpen(false);
  };

  const [mainCategory, setMainCategory] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    PhoneNumber: '',
    email: '',
    city: '',
    qualification: '',
    course: '',
    specialization: '',
    url: window.location.href,
    comments: '',
    course_ttl: 15,// Initialize URL in state
  });
  const handleMainCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    setMainCategory(selectedCategory);
    setSubOptions(options[selectedCategory] || []);
    setFormData((prevData) => ({
      ...prevData,
      course: selectedCategory,
    }));
  };
  const handleSubCategoryChange = (event) => {
    const selectedsubCategory = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      specialization: selectedsubCategory,
    }));
  };
  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "PhoneNumber" && /^[0-9]{10}$/.test(value)) {
      try {
        const response = await fetch(`https://www.backstagepass.co.in/reactapi/checklandingpagemobile.php?contactNumber=${value}`);
        const result = await response.json();

        if (response.status === 200) {
          alert('This mobile number is already registered with in the last 3 months our team will get back to you.');
          setFormData((prevData) => ({
            ...prevData,
            PhoneNumber: '',  // Reset the contact number field to an empty string
          }));
        }
      } catch (error) {
        console.error('Error checking mobile number:', error);
        alert('Failed to validate mobile number. Please try again.');
      }
    }

  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setOpen(true); // Assuming you want to show a modal upon submission

    try {
      const response = await axios.post("https://www.backstagepass.co.in/reactapi/landing_adv.php", formData);
      console.log(response);

      // Assuming the response indicates success
      // alert("Your data was submitted successfully!");

      // Reset form data
      setFormData({
        firstname: '',
        lastname: '',
        PhoneNumber: '',
        email: '',
        city: '',
        qualification: '',
        course: '',
        specialization: '',
        comments: '',
        url: window.location.href, // Reset URL
      });
    } catch (error) {
      console.error('Error adding data:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };
  const options = {
    bachelor: [
      { value: "csgameDevelopment", label: "Computer Science & Game Development" },
      { value: "gameArtDesign", label: "Game Art & Design" },
      { value: "arvr", label: "AR & VR" }
    ]
  };



  const faqData = [
    {
      id: 0,
      question: "What is the duration of the Bachelor's courses?",
      answer: "The duration of Bachelor's course is 4 years."
    },
    {
      id: 1,
      question: "What is the eligibility criteria for this course?",
      answer: "Eligibility for the Bachelor's in Computer Science & Game Development is 10+2 or equivalent with Maths, while Bachelor's in Game Art & Design and Bachelor's in AR/VR require 10+2 or equivalent."
    },
    {
      id: 2,
      question: "What’s the application process for bachelor’s and master’s programs?",
      answer: "To apply for Bachelor's Backstage Pass, complete the online application, clear the entrance exam, attend counseling, submit documents, and enroll after payment."
    },
    {
      id: 3,
      question: "Why should I choose Backstage Pass Institute of Gaming?",
      answer: "Backstage Pass is a #1 gaming Institute that offers specialized education in game development with industry-aligned curriculum, hands-on learning, mentorship from veterans, networking opportunities, and flexible financial aid, preparing students for a competitive gaming career."
    },
    {
      id: 4,
      question: "Is there an entrance exam for admission?",
      answer: "At Backstage Pass, admission to Bachelor's courses requires an entrance exam."
    },
    {
      id: 5,
      question: "What kind of support is available for students after graduation?",
      answer: "After graduation, Backstage Pass Institute supports graduates with placement assistance, industry networking, mentorship, job fairs, internships, and portfolio development for a smooth career launch."
    },
    {
      id: 6,
      question: "Where are the alumni from Backstage Pass working?",
      answer: "The Backstage Pass alumni are currently working at top gaming companies like EA Sports, Ubisoft, and Sumo."
    },

  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title>Bachelor's Degree Courses in Gaming | Backstage Pass</title>
        <meta name="description" content="Explore our Bachelor's degree courses in gaming to kickstart your career in game design, development, and animation. Learn from industry experts with hands-on training and placement assistance." />
        <link rel="canonical" href="https://www.backstagepass.co.in/landingpage/bachelors-degree-courses-in-gaming/" />
      </Helmet>
      <a href="#ribbon" className='mainribbonb'>
        <div className='scallop animate'>

          <div className='stripdb'>
            <div className='mainhdb1'>
              <p><b>Limited Seats are Available - Enroll Now </b></p><br />


            </div>
          
          </div>

        </div>
      </a>

      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1" style={{ background: "#222" }}>

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "0px 0px 0px 0px" : "0px auto" }}>

            <div className="video-bannerb overlay-textb">
              {/* Show video only on desktop */}
              {!isMobileState && (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-element"
                  >
                    <source
                      src="https://www.backstagepass.co.in/landingpage/Stellar_wings.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="video-overlay" />
                </>
              )}

              {/* Show image only on mobile */}
              {isMobileState && (
                <>
                  <img
                    src={bachg}
                    alt="Mobile Banner"
                    className="mobile-banner-img"
                  />

                  <h1 className="titleb white-txt b-animated">You too can create a realistic and immersive game!</h1>
                
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-element"
                  >
                    <source
                      src="https://www.backstagepass.co.in/landingpage/Stellar_wings.mp4"
                      type="video/mp4"
                    />
                  </video>
                </>
              )}

              {/* Overlay Text Content - common for both */}
              <div className="overlay-content">
                <AnimatedText direction="up" delay={0.2}>
                  <div className="et_pb_text_inner">
                    <h1 className="titleb white-txt b-animated">
                      India’s only 4 years Bachelor’s Degree in
                      <br />
                      Game Development | AR/VR | Game Art & Design
                    </h1>
                  </div>
                </AnimatedText>
                <AnimatedText direction="up" delay={0.2}>
                  <p className="subtitle downcontent">
                    Don't miss a chance to be a part of top game studios across the globe.
                  </p>
                </AnimatedText>
                <div className="anidiv" onClick={scrollToBottom}>
                  <a href="#CounsellingOnGamingCareer" className="anidivli fullwidthinline">
                    <div className="listbtntext listbatchnumber">Enquire Now</div>

                  </a>
                </div>
              </div>

            </div>




            <section style={{ background: "#222" }}>
              {!isMobileState ?
                <div className="counter-wrapperba" >
                  <div className="counter-wrapper1ba">
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">

                        <div> 15 Years</div></div>
                        <p>Academic Excellence </p>
                      </div>
                    </AnimatedText>
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">
                          <div> 30+ </div></div>
                        <p>Awards Won</p>
                      </div>
                    </AnimatedText>
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">
                          <div> 100% </div></div>
                        <p>Placement Support
                        </p>
                      </div>
                    </AnimatedText>
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">

                          <div> 4.3  <FaStar style={{ fontSize: "20px", color: "#f59d41" }} /></div></div>
                        <p>Student Rating</p>
                      </div>
                    </AnimatedText>

                  </div>
                </div> :

                <div className="mblcounter">
                  <div className="counter-wrapper1ba">
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">

                          <div> 15 Years</div></div>
                        <p>Academic Excellence </p>
                      </div>
                    </AnimatedText>
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">
                          <div> 30+ </div></div>
                        <p>Awards won</p>
                      </div>
                    </AnimatedText>
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">
                          <div> 100% </div></div>
                        <p>Placement support
                        </p>
                      </div>
                    </AnimatedText>
                    <AnimatedText direction="up" delay={0.2}>
                      <div className="counterba">
                        <div className="countba">

                          <div> 4.3  <FaStar style={{ fontSize: "20px", color: "#f59d41" }} /></div></div>
                        <p>student rating</p>
                      </div>
                    </AnimatedText>

                  </div>
                </div>
              }
            </section>

            <section style={{ background: "#fff", padding: "1px", overflow: "hidden" }}>
              <AnimatedText direction="up" delay={0.2}>
                <h2 className='mainHeadingTotall-2' style={{color:"#000"}}>Why Choose Backstage Pass?
                </h2>
              </AnimatedText>
             <div className='whychooseb'>
  <ul>
    <AnimatedText direction={isMobileState ? "up" : "left"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={wc3} alt="wc3" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Industry-Aligned Curriculum</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction="up" delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={wc4} alt="wc4" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Taught by Industry Experienced Professionals</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction="up" delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={wc5} alt="wc5" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Hands-on Training</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction={isMobileState ? "up" : "left"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={wc6} alt="wc6" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Strong Industry Connections</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction="up" delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={wc8} alt="wc8" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Access to Free Webinars/Workshops</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction={isMobileState ? "up" : "right"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={wc9} alt="wc9" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Global Alumni Community</p>
        </div>
      </li>
    </AnimatedText>
  </ul>
</div>

            </section>
            <section className='mainanidiv'><div className="anidiv">
              <a href="#CounsellingOnGamingCareer" className="anidivli fullwidthinline">
                <div className="listbtntext listbatchnumber" onClick={scrollToBottom}>
                  Enquire Now
                </div>

              </a>
            </div></section>
            <section style={{ background: "#fff", padding: "1px", overflow: "hidden" }}>
              <AnimatedText direction="up" delay={0.2}>
                <h2 className="mainHeadingTotall-2" style={{ color: "#000" }}> Explore our Bachelor’s Courses</h2>
              </AnimatedText>

              <div className='imgbache'>

                <div className='main-blgba'>
                  <Link to={`/courses/bachelors-in-computer-science-and-game-development/`} >
                    <AnimatedText direction={isMobileState ? "up" : "left"} delay={0.2}>

                      <div className="maindba">
                        <div className="blogba">
                          <div className="blogba-image">
                            <img
                              src={csb}
                              alt="csb"
                            />
                            <div className="blogba-contentba">
                              <div>
                                <AnimatedText direction="up" delay={0.2}>

                                  <h2>Bachelor's in Computer Science & Game Development</h2>
                                </AnimatedText>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </AnimatedText>
                  </Link>

                </div>
                <div className='main-blgba'>
                  <Link to={`/courses/bachelors-in-game-art-and-design/`} >
                    <AnimatedText direction="up" delay={0.2}>

                      <div className="maindba">
                        <div className="blogba">
                          <div className="blogba-image">
                            <img
                              src={gab}
                              alt="gab"
                            />
                            <div className="blogba-contentba">
                              <div>
                                <AnimatedText direction="up" delay={0.2}>

                                  <h2>Bachelor's  in Game Art & <br /> Design</h2>
                                </AnimatedText>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </AnimatedText>
                  </Link>

                </div>

                <div className='main-blgba'>
                  <Link to={`/courses/bachelors-in-augmented-reality-and-virtual-reality/`} >
                    <AnimatedText direction={isMobileState ? "up" : "right"} delay={0.2}>

                      <div className="maindba">
                        <div className="blogba">
                          <div className="blogba-image">
                            <img
                              src={arb}
                              alt="arb"
                            />
                            <div className="blogba-contentba">
                              <div>
                                <AnimatedText direction="up" delay={0.2}>
                                  <h2>Bachelor's in Augmented Reality & Virtual Reality</h2>

                                </AnimatedText>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </AnimatedText>
                  </Link>

                </div>
              </div>
            </section>
            <section className='sart' style={{ overflow: "hidden" }}>


              <div className="" style={{ flexDirection: "column", marginTop: isMobileState ? "-22px" : "0px" }}>
                <AnimatedText direction="up" delay={0.2}>
                  <h2 className="mainHeadingTotall-2">Student Artwork</h2>
                </AnimatedText>
                 <StudentArtGalleryS/>

              </div>
            </section>
            <section className='o-h' style={{ background: "#fff", padding: "1px", overflow: "hidden" }}>
              <AnimatedText direction="up" delay={0.2}>
                <h2 className="mainHeadingTotall-2" style={{ color: "#000" }}>Career Options</h2>
              </AnimatedText>
             <div className='whychooseb1'>
  <ul>
    <AnimatedText direction={isMobileState ? "up" : "left"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc1} alt="ic7" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Game Developer (Unity, Unreal, Mobile & Console)</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction="up" delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc2} alt="ic13" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Gameplay Programmer</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction={isMobileState ? "up" : "right"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc3} alt="ic9" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Game Designer (Level, Systems, Mechanics)</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction={isMobileState ? "up" : "left"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc4} alt="ic8" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>3D Environment Artist</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction="up" delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc5} alt="GAIMG5" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Character Artist / Animator</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction={isMobileState ? "up" : "right"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc6} alt="ic11" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>UI/UX Designer for Games</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction={isMobileState ? "up" : "left"} delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc7} alt="ic10" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>Technical Artist</p>
        </div>
      </li>
    </AnimatedText>

    <AnimatedText direction="up" delay={0.2}>
      <li>
        <div className=''>
          <div className='imgmb'>
            <img src={cc8} alt="ic12" height={isMobileState ? "30" : "50"} width={isMobileState ? "30" : "50"} />
          </div>
          <p className='lsh'>AR/VR Developer / Designer</p>
        </div>
      </li>
    </AnimatedText>
  </ul>
</div>

            </section>

            <section style={{ overflow: "hidden" }}>
              <AnimatedText direction="up" delay={0.2}>

                < FeaturedProductsb />
              </AnimatedText>

            </section>
            <section className='mainanidiv'><div className="anidiv" onClick={scrollToBottom}>
              <a href="#CounsellingOnGamingCareer" className="anidivli fullwidthinline">
                <div className="listbtntext listbatchnumber">
                  Enquire Now
                </div>

              </a>
            </div></section>
            <section className='o-h' style={{ background: "#fff", padding: "1px" }}>
              <AnimatedText direction="up" delay={0.2}>

                <h2 className='mainHeadingTotall-2' style={{ color: "#000" }}>Our Alumni had worked on games like
                </h2>
              </AnimatedText>
              <ul className='featuress2ba'>

                <li><AnimatedText direction="up" delay={0.2}>
                  <img src={lc1} alt="lc1" />
                </AnimatedText>
                </li>
                <li><AnimatedText direction="up" delay={0.2}>
                  <img src={lc2} alt="lc2" />
                </AnimatedText>
                </li>
                <li><AnimatedText direction="up" delay={0.2}><img src={lc3} alt="lc3" />
                </AnimatedText>
                </li>
                <li><AnimatedText direction="up" delay={0.2}><img src={lc4} alt="lc4" />
                </AnimatedText>
                </li>
                <li><AnimatedText direction="up" delay={0.2}><img src={lc5} alt="lc5" />
                </AnimatedText>
                </li>
              </ul>
              <ul className='featuress2ba1'>

                <li><AnimatedText direction="up" delay={0.2}><img src={lc6} alt="lc6" />
                </AnimatedText>
                </li>
                <li><AnimatedText direction="up" delay={0.2}><img src={lc7} alt="lc7" />
                </AnimatedText>
                </li>
                <li><AnimatedText direction="up" delay={0.2}><img src={lc8} alt="lc8" />
                </AnimatedText>
                </li>
                <li><AnimatedText direction="up" delay={0.2}><img src={lc9} alt="lc9" />
                </AnimatedText>
                </li>
              </ul>

            </section>

            <section style={{ background: "#fff", padding: "1px", marginBottom: "20px" }}>
              <AnimatedText direction="up" delay={0.2}>

                <h2 className='mainHeadingTotall-2' style={{ color: "#000" }}>Our Alumni Work Worldwide, Including

                </h2>
              </AnimatedText>

              <div style={{ margin: '0px auto' }}>
                <ul className='CountryLogos2' style={{ marginBottom: "45px" }}>
                  <AnimatedText direction="up" delay={0.2}>

                    <li style={{ background: "#a7a0a017" }}>
                      <img src={Flag1} height={isMobileState ? "171" : "130"}
                        width={isMobileState ? "312" : "246"} alt="Flag1" />

                      {isMobileState ? '' : <div className='CountryLogos-2' style={{ color: "#000" }}>United States</div>}</li></AnimatedText>
                  <AnimatedText direction="up" delay={0.2}>

                    <li style={{ background: "#a7a0a017" }}>
                      <img src={Flag2} height={isMobileState ? "171" : "130"}
                        width={isMobileState ? "312" : "246"} alt="Flag2" />


                      {isMobileState ? '' : <div className='CountryLogos-2' style={{ color: "#000" }}>United Kingdom</div>}</li></AnimatedText>
                  <AnimatedText direction="up" delay={0.2}>

                    <li style={{ background: "#a7a0a017" }}>
                      <img src={Flag3} height={isMobileState ? "171" : "130"}
                        width={isMobileState ? "312" : "246"} alt="Flag3" />


                      {isMobileState ? '' : <div className='CountryLogos-2' style={{ color: "#000" }}>Canada</div>}</li></AnimatedText>
                  <AnimatedText direction="up" delay={0.2}>

                    <li style={{ background: "#a7a0a017" }}>
                      <img src={Flag4} height={isMobileState ? "171" : "130"}
                        width={isMobileState ? "312" : "246"} alt="Flag4" />


                      {isMobileState ? '' : <div className='CountryLogos-2' style={{ color: "#000" }}>Sweden</div>}</li></AnimatedText>
                  <AnimatedText direction="up" delay={0.2}>

                    <li style={{ background: "#a7a0a017" }}>
                      <img src={Flag5} height={isMobileState ? "171" : "130"}
                        width={isMobileState ? "312" : "246"} alt="Flag5" />


                      {isMobileState ? '' : <div className='CountryLogos-2' style={{ color: "#000" }}>Germany</div>}</li></AnimatedText>
                </ul>
              </div>

            </section>
            <section style={{ marginBottom: "45px", background: "#222" }}>
              <AnimatedText direction="up" delay={0.2}>

                <h2 className='mainHeadingTotall-2'>Our Alumni Work At Leading Companies Like</h2>
              </AnimatedText>


              {/* <Marquee speed={100} gradient={false} loop={0} style={{ Padding: "0px 20px" }} className='recuitersList-20'>
                  <img alt="r1" src={r1} height="61"
                    width="210" />
                  <img alt="r2" src={r2} height="61"
                    width="210" />
                  <img alt="r4" src={r4} height="61"
                    width="210" />
                  <img alt="r5" src={r5} height="61"
                    width="210" />
                  <img alt="r6" src={r6} height="61"
                    width="210" />
                  <img alt="r7" src={r7} height="61"
                    width="210" />

                </Marquee> */}

              <Marquee
                speed={100}
                gradient={false}
                className="recruitersList-20"
              >
                {[r1, r2, r7, r4, r5, r6].map((logo, index) => (
                  <img
                    key={`logo-${index}`}
                    src={logo}
                    alt={`logo-${index}`}
                    height="auto"
                    width="210"
                    style={{ marginRight: "70px" }}
                  />
                ))}
                {[r1, r2, r7, r4, r5, r6].map((logo, index) => (
                  <img
                    key={`logo-dup-${index}`}
                    src={logo}
                    alt={`logo-dup-${index}`}
                    height="auto"
                    width="210"
                    style={{ marginRight: "70px" }}
                  />
                ))}
              </Marquee>


            </section>
            {/* <div className={isMobileState ? "ismobtest" : "CousellingButton1"} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div> */}









            <section style={{ background: "#fff", padding: "1px" }}>
              <AnimatedText direction="up" delay={0.2}>

                <h2 className='mainHeadingTotall-2' style={{ display: "block", color: "#000" }}>FAQ's</h2>
              </AnimatedText>
              <AnimatedText direction="up" delay={0.2}>

                <div className="faq-containerlg" style={{ display: "block", marginBottom: "45px" }}>
                  {faqData.map((faq, index) => (
                    <div key={index} className="faq-itemb">
                      <div
                        className="faq-questionb"
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question} <span>{activeIndex === index ? <HiChevronUp /> : <HiChevronDown />}</span>
                      </div>

                      <div className={`faq-answerb ${activeIndex === index ? 'open' : 'closed'}`}>
                        {faq.id === "2" ? <div className='faq2'>
                          <ul>
                            <li>
                              To apply for Bachelor's Backstage Pass, complete the online application, clear the entrance exam, attend counseling, submit documents, and enroll after payment.</li>

                          </ul>

                        </div> : null}

                        {faq.id === "4" ? <div className='faq2'>

                          <p> Common software includes Adobe Photoshop, Autodesk Maya, ZBrush, Blender, and Unity for integrating assets into games.</p>



                        </div> : null}


                        {faq.id === "5" ? <div className='faq2'>

                          <p> Character artists design and create 3D or 2D characters, ensuring they are visually appealing and fit the game’s style and mechanics.</p>



                        </div> : null}




                        {faq.id === "7" ? <div className='faq2'>
                          Game art is crucial throughout development, providing assets that enhance gameplay and tell the game’s visual story, guiding player experience.


                        </div> : null}

                        {faq.id === "7" ? null : faq.answer}

                        {faq.id === "8" ? <div className='faq2'>

                          <p> Salaries range from ₹3,00,000 to ₹8,00,000 annually, depending on experience, location, and the studio's size.</p>



                        </div> : null}

                        {faq.id === "9" ? <div className='faq2'>

                          <p> Salaries range from ₹3,00,000 to ₹8,00,000 annually, depending on experience, location, and the studio's size.</p>



                        </div> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedText>
            </section>



            <section className='o-h' style={{ marginBottom: isMobileState ? "0px" : "45px", overflow: "hidden", marginTop: isMobileState ? "0px" : "45px", width: "100%", background: "#222" }}>
              <div className="mainclsbachelors">
                <div className='leftcontentm'>
                  <div className=''>
                    <AnimatedText direction="left" delay={0.2}>
                      <div className="leftcb">

                        <p>Limited seats only available – Enquire Now!</p>


                      </div>
                    </AnimatedText>
                  </div>
                                      <AnimatedText direction="left" delay={0.2}>

                    <div className="foot-itembn fadeInUp anime-delay3">
                       <div className="leftcb">
                                    <p>Contact Info</p></div>
                                    <div className="contact-wrapperbn">
                                    <div className="cont1">
                                      <div className="contact-wrapper-innerbn">
            
                                       
            
                                          <CiPhone className="iconsmain" />
                                          <div><p> <a href="tel:8008002794" className="phone-number" rel="noopener noreferrer"> +91-8008002794</a></p>
                                          </div>
                                      </div>
                                      </div>
                                      <div className="cont1">
                                      <div className="contact-wrapper-innerbn">
            
                                       
                                          <CiPhone className="iconsmain" />
                                          <div>
                                          <p> <a href="tel:8008002795" className="phone-number" rel="noopener noreferrer"> +91-8008002795</a></p>
                                          </div>
            
                                        
                                      </div>
                                      </div>
            
                                    </div>
                                  
                                  </div>
                                     </AnimatedText>
                </div>
                <AnimatedText direction="up" delay={0.2}>
                  <div className="rightcb">
                    <div className='fom-ad-21' id="CounsellingOnGamingCareer">


                      <div className='containers-21'>





                        <form onSubmit={handleSubmit} className="formMain">

                          <p className="suprtsMobiless">Get <b>a Counselling</b> Session on Gaming Career</p>
                          <div className="formGrid-cbach" data-form-id="need-guidance" data-form="step1-container">


                            <div className="">
                              <label className="" for="firstname">First Name</label>
                              <input className="" placeholder="First Name" id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} required />
                            </div>
                            <input type="hidden" name="url" value={formData.url} />
                            <input type="hidden" name="course_ttl" value={formData.course_ttl} />
                            <div className="">
                              <label className="" for="lastname">Last Name</label>
                              <input className="" placeholder="Last Name" id="lastname" name="lastname" type="text" value={formData.lastname} onChange={handleInputChange} required />
                            </div>
                          </div>
                          <div className="formGrid-cbach" data-form-id="need-guidance" data-form="step1-container">

                          </div>
                          <div className="formGrid-cbach" data-form-id="need-guidance" data-form="step1-container">
                            <div className="">
                              <label className="" for="Phone Number">Phone Number</label>
                              <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minlength="10" maxlength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                            </div>
                            <div className="">
                              <label className="" for="Phone Number">City</label>
                              <input className="" placeholder="City" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                            </div>
                          </div>

                          <div className="formGrid-cbach" data-form-id="need-guidance" data-form="step1-container">
                            <div className="">
                              <label className="" for="Phone Number">Email</label>
                              <input className="" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="">
                              <label className="" for="qualification">Qualification</label>
                              <select className="input-gray" name="qualification" id="qualification" value={formData.qualification} onChange={handleInputChange} required>
                                <option value="">Qualification</option>
                                <option value="10th">10th Pass</option>
                                <option value="12th">12th Pursuing</option>
                                <option value="12pass">12th Pass</option>
                                <option value="ugraduate">Undergraduate</option>
                                <option value="graduate">Graduate</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>

                          <div className="formGrid-cbach" data-form-id="need-guidance" data-form="step1-container">
                            <div className="" style={{ width: "100%" }}>
                              <label className="" htmlFor="course">
                                Course <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span>
                              </label>
                              <select
                                onChange={handleMainCategoryChange}
                                name="course"
                                id="course"
                                value={formData.course}
                                required
                                style={{
                                  width: "100%",
                                  maxWidth: "100%",
                                  boxSizing: "border-box",
                                  padding: "8px",
                                  fontSize: "16px",
                                }}
                              >
                                <option value="" disabled>Select Course</option>
                                <option value="bachelor">Bachelor's</option>

                              </select>

                              {subOptions.length > 0 && (
                                <>
                                  <label htmlFor="specialization" style={{ marginTop: "10px", display: "block" }}>
                                    Specialization
                                  </label>
                                  <select
                                    onChange={handleSubCategoryChange}
                                    value={formData.specialization}
                                    name="specialization"
                                    id="specialization"
                                    required
                                    style={{
                                      width: "100%",
                                      maxWidth: "100%",
                                      boxSizing: "border-box",
                                      padding: "8px",
                                      fontSize: "16px",
                                    }}
                                  >
                                    <option value="">Select Specialization</option>
                                    {subOptions.map((sub) => (
                                      <option key={sub.value} value={sub.value}>
                                        {sub.label}
                                      </option>
                                    ))}
                                  </select>
                                </>
                              )}
                            </div>
                            <div className="" data-form-id="need-guidance" data-form="step1-container">
                              <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                                <label className="" for="comments">Comments</label>
                                <textarea
                                  className="input-gray text1a"
                                  name="comments"
                                  id="comments"
                                  placeholder="Enter your comments here..."
                                  value={formData.comments}
                                  onChange={handleInputChange}

                                  rows="6"
                                  maxLength={40}
                                  style={{ color: 'white' }}
                                  title="max 40 characters allowed"
                                ></textarea>
                                <small style={{ color: '#888', fontSize: '12px' }}>Allow maximum 40 characters</small>
                              </div>
                            </div>
                          </div>


                          <div style={{ padding: "20px" }}>
                            <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
                              Submit
                            </button>

                          </div>
                        </form>
                        <React.Fragment>

                          <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                          >
                            <DialogTitle style={{ fontSize: "21px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>{"Thank you for reaching out to us"}</DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: "19px", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>
                                We appreciate your interest and will get in touch with you soon.

                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose} style={{ fontSize: "21px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>Close</Button>
                            </DialogActions>
                          </Dialog>
                        </React.Fragment>



                      </div>
                    </div>
                  </div>
                </AnimatedText>
              </div>
                <AnimatedText direction="up" delay={0.2}>
                 <div className="text-center foot-content fadeInUp anime-delay2" id="pvrnm" style={{color:"#fff",height:"136px",display:"flex",alignItems:"center",justifyContent:"center"}}>© A Subsidiary of PVR Memorial Educational Society 2025. All Rights Reserved</div>
                 </AnimatedText>
            </section>

          </div>


        </div>

      </div>
      {isButtonVisible && (

        <div className="CousellingButton stickyenq" style={{ background: "#393838f0" }} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer" style={{ padding: "10px 35px", borderRadius:"0px", background:"linear-gradient(101deg, #ec242d, #ca484d)" }}>Enquire now</a></div>)}
      <div className="App">
        <ReactWhatsappButton
          countryCode="91"
          phoneNumber="8977945705"
          style={{ right: isMobileState ? "1.5rem" : "2rem", marginBottom: isMobileState ? "-7rem" : "-1rem", zIndex: "11111" }}
          className="whatsappsivak"
        />

      </div>
    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

