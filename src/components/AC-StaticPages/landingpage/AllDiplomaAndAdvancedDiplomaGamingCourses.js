import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';

import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.png";
import r2 from "../../../assets/img/partners/r2.png";
import r4 from "../../../assets/img/partners/r4.png";
import r5 from "../../../assets/img/partners/r5.png";
import r6 from "../../../assets/img/partners/r6.svg";
import r7 from "../../../assets/img/partners/r7.png";

import B1 from "../../../assets/img/banners/business-standard-logo.png";
import B2 from "../../../assets/img/banners/forbes-logo.webp";
import B3 from "../../../assets/img/banners/et-logo.webp";
import B4 from "../../../assets/img/banners/thehindu-logo.svg";
import MscGameTechnology from "../../../assets/img/Courses/MscGameTechnology.webp"
import { Helmet } from "react-helmet";


import StudentGamesList from "../../../content/StudentGamesList";
import MIntheMedia from "../../../content/MIntheMedia";

import Flag1 from "../../../assets/img/banners/usa.webp";
import Flag2 from "../../../assets/img/banners/uk.webp";
import Flag3 from "../../../assets/img/banners/canada.webp";
import Flag4 from "../../../assets/img/banners/sweden.webp";



import axios from 'axios';
import FeaturedProductL from "../../../content/FeaturedProductL.js";
import { useSelector, shallowEqual } from "react-redux";
import { useTheme } from '@mui/material/styles';
import AdvancedDiplomainGameDevelopment from "../../../assets/img/Courses/AdvancedDiplomainGameDevelopment.webp"
import AdvancedDiplomain3DGameArtDigitalSculpting from "../../../assets/img/Courses/AdvancedDiplomain3DGameArtDigitalSculpting.webp"
import DiplomainGameDesignProduction from "../../../assets/img/Courses/DiplomainGameDesignProduction.webp"
import DiplomainGameDevelopmentwithUnity from "../../../assets/img/Courses/DiplomainGameDevelopmentwithUnity.webp"
import Diplomain3DEnvironmentArtCreationforGames from "../../../assets/img/Courses/Diplomain3DEnvironmentArtCreationforGames.webp"
import AdvancedDiplomainTraditionalDigitalConceptArt from "../../../assets/img/Courses/AdvancedDiplomainTraditionalDigitalConceptArt.webp"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import recimg from '../../../assets/img/banners/Times-Award.webp';
import Typography from '@mui/material/Typography';

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import m1 from "../../../assets/img/test/1.webp";
import m2 from "../../../assets/img/test/2.webp";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import advdip from '../../../assets/img/banners/thumbnail.webp';
import ic1 from '../../../assets/img/Icons/WEBSITE-ICON/pass.webp';
import ic2 from '../../../assets/img/Icons/WEBSITE-ICON/Pursuingengi.webp';
import ic4 from '../../../assets/img/Icons/WEBSITE-ICON/how-code.webp';
import ic5 from '../../../assets/img/Icons/WEBSITE-ICON/art-career.webp';
import ic6 from '../../../assets/img/Icons/WEBSITE-ICON/careers.webp';
import ic7 from '../../../assets/img/Icons/WEBSITE-ICON/gaming-career.webp';
import ic8 from '../../../assets/img/Icons/WEBSITE-ICON/switch-gaming-career.webp';
import ic9 from '../../../assets/img/Icons/WEBSITE-ICON/career-opt.webp';
import ic10 from '../../../assets/img/Icons/WEBSITE-ICON/abroad-opportunities.webp';
import ic11 from '../../../assets/img/Icons/WEBSITE-ICON/income-job.webp';
import ic12 from '../../../assets/img/Icons/WEBSITE-ICON/hands-on.webp';
import ic13 from '../../../assets/img/Icons/WEBSITE-ICON/short-term.webp';
import ic14 from '../../../assets/img/Icons/WEBSITE-ICON/actually-fun.webp';
import icg from '../../../assets/img/logos/console.webp';
import csgd from "../../../assets/img/Courses/csgdc.webp"
import GameArtDesign from "../../../assets/img/Courses/GameArt&Design.webp"
import AugmentedRealityandVirtualReality from "../../../assets/img/Courses/AugmentedRealityandVirtualReality.webp"


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
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setShowBanner(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  }, [showBanner]);

  



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



  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    PhoneNumber: '',
    email: '',
    city: '',
    qualification: '',
    url: window.location.href,
    course_ttl: 5,// Initialize URL in state
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        url: window.location.href, // Reset URL
      });
    } catch (error) {
      console.error('Error adding data:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  const videoRef = useRef(null); // To reference the video element
  const [isPlaying, setIsPlaying] = useState(false); // To manage the play state

  const handlePlay = () => {
    // Play the video when the image is clicked
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Update the state to hide the image
    }
  };


  const faqData = [
    {
      id: 0,
      question: "What is the duration of the bachelor’s and master’s courses?",
      answer: "The duration of Bachelor's course is 4 years and Master's course is 2 years."
    },
    {
      id: 1,
      question: "What is the eligibility criteria for these courses?",
      answer: "Eligibility for the Bachelor's in Computer Science & Game Development is 10+2 or equivalent with Maths, while Bachelor's in Game Art & Design and Bachelor's in AR/VR require 10+2 or equivalent. For the Master's in Game Technology, eligibility is a degree in B.E./B.Tech/B.Arch/B.Design/BFA/BCA/MCA or any 3-year UG/2-year PG in Gaming, Computer Science, Animation, or AR/VR from a UGC-approved university or equivalent."
    },
    {
      id: 2,
      question: "What’s the application process for bachelor’s and master’s programs?",
      answer: ""
    },
    {
      id: 3,
      question: "Why should I choose Backstage Pass Institute of Gaming?",
      answer: "Backstage Pass is a #1 gaming Institute that offers specialized education in game development with industry-aligned curriculum, hands-on learning, mentorship from veterans, networking opportunities, and flexible financial aid, preparing students for a competitive gaming career."
    },
    {
      id: 4,
      question: "Is there an entrance exam for admission?",
      answer: ""
    },
    {
      id: 5,
      question: "What career opportunities are available after completing the Diploma courses?",
      answer: ""
    },
    {
      id: 6,
      question: "What kind of support is available for students after graduation?",
      answer: "After graduation, Backstage Pass Institute supports graduates with placement assistance, industry networking, mentorship, job fairs, internships, and portfolio development for a smooth career launch."
    },
    {
      id: 7,
      question: "Where are the alumni from Backstage Pass working?",
      answer: "The Backstage Pass alumni are currently working at top gaming companies like EA Sports, Ubisoft, and Sumo."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title>Best Game Development College In India</title>
        <meta name="description" content="Join the top game design and development college in Hyderabad. Explore game development courses & game design courses to kickstart your gaming career." />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>

            <a onClick={scrollToBottom} href="#CounsellingOnGamingCareer"> <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'masterMobileClass2' : 'master2'}`}>
              {isMobileState ? <div className="CousellingButton10" style={{ position: "absolute", bottom: "-50px", left: "auto", marginBottom: "0px" }} onClick={scrollToBottom}><a style={{ padding: "12px 30px", width: "363px" }} href="#CounsellingOnGamingCareer">Enroll Now</a></div> : null}
            </div></a>
            <div className='MainVideoSection'>
              <h3 style={{ textTransform: "capitalize" }}>Make a Career in Gaming that pays you from 3 LPA to  30 LPA*</h3>
              <div className="videomain2">
                <video ref={videoRef} controls loop>
                  <source src="https://www.backstagepass.co.in/landingpage/GCV.mp4" type="video/mp4" />

                </video>


                {!isPlaying && (
                  <img
                    src={advdip}
                    className="overlay-image2-1"
                    alt="advdip"
                    onClick={handlePlay} // Handle the click to play the video
                  />
                )}
              </div>
            </div>

            <div className="mainrec2">
              <img src={recimg} alt="recimg" style={{ width: "100%", height: "100%" }} />

            </div>

            <h2 className='mainHeadingTotall-2'>You are Eligible for a Gaming Career if you are:</h2>

            <ul className='featuress2'>
              <li><img src={ic1} alt="ic1" />

                <div className='featuresscon2'>10th or 12th Pass</div></li>
              <li><img src={ic2} alt="ic1" />

                <div className='featuresscon2'>Pursuing Engineering
                </div></li>
              <li><img src={icg} alt="ic1" style={{ height: isMobileState ? "30px" : "50px", width: isMobileState ? "30px" : "50px" }} />

                <div className='featuresscon2'>Elevate your gaming career

                </div></li>
              <li><img src={ic4} alt="ic1" />

                <div className='featuresscon2'>Do/Don’t know how to code
                </div></li>
              <li><img src={ic5} alt="ic1" />

                <div className='featuresscon2'>Want to pursue an art career
                </div></li>
              <li><img src={ic6} alt="ic1" />

                <div className='featuresscon2'>Looking to switch careers
                </div></li>
            </ul>

            {/* <div className='chapters' id="chapters1" style={{height:isMobileState ? '1140px':'480px' }}>

                

                <FeaturedProducts />

              </div> */}

            <div className='chapterL' id="chapter100">
              <div className="bg-c-gradient300 absolute w-full h-[101%] -top-[1px] -bottom-[1px] left-0"></div>
              <FeaturedProductL />
              {/* <Awards /> */}

              <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>
            </div>


            <h2 className='mainHeadingTotall-2'>In the Media</h2>

            {isMobileState ? <MIntheMedia /> :

              <ul className='CountryLogoss'>
                <li><img src={B1} alt="B1" />

                </li>

                <li><img src={B2} alt="B1" />

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B3} alt="B1" />

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B4} alt="B1" />

                </li>
              </ul>}


            <h2 className='mainHeadingTotall-2'>This course is for you if you…</h2>

            <ul className='featuress3'>
              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>Want to elevate your existing gaming career

                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Want a specialized game development curriculum


                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Are confused about which career to opt for


                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Want to switch to a gaming career


                </div></li>

              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Are looking for abroad opportunities

                </div></li>
              <li><img src={ic11} alt="ic1" />
                <div className='featuresscon2'>Want a great income & job security

                </div></li>
              <li><img src={ic12} alt="ic1" />

                <div className='featuresscon2'>Like hands-on education, not just theory

                </div></li>



              <li><img src={ic14} alt="ic1" />

                <div className='featuresscon2'>Want a career which is actually fun


                </div></li>
            </ul>

            <h2 className='mainHeadingTotall-2'>Learn from scratch to advanced level and build games like...</h2>

            <StudentGamesList />
            <div className={isMobileState ? "CousellingButton1 ismobtest" : "CousellingButton1"} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>




            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
              <h2 className='mainHeadingTotall-2'>What will you learn?</h2>

              <Box>
                <Tabs
                  TabIndicatorProps={{ style: { border: "1px solid #222", background: '#222', display: "flex", alignItems: "center", justifyContent: "center" } }}
                  value={value1}
                  onChange={handleChange1}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  className='tabcenter'
                  style={{ background: "#222", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", width: isMobileState ? "100%" : "42%", margin: "0px auto" }}

                >
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", width: isMobileState ? "50%" : "auto" }} label="Bachelor's" />
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", width: isMobileState ? "50%" : "auto" }} label="Master's" />
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Advanced Diploma Courses" />
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Diploma Courses" />
                </Tabs>

                <TabPanel value={value1} index={0} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto", padding: "0px 8px" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration: 4 Years</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility: 10+2 or Equivalent *</span></li>

                    </ul>
                    <p style={{ color: "#fff", textAlign: "center" }}>*The eligibility criteria for each Bachelor's course varies based the curriculum. Please check the criteria for the course you want to opt for before applying.</p>
                  </div>
                  <Link className="CourseLink1" to={"/courses/bachelors-in-computer-science-and-game-development/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={csgd} alt="B.Sc in Computer Science & Game Development" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>BACHELOR’S in Computer Science & Game Development</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Gain foundational knowledge in core Computer Science, software development, programming and game design with a focus on theoretical understanding and practical application.
                        </p>

                      </div>
                    </div>
                  </Link>
                  <Link to={"/courses/diploma-in-game-development-with-unity/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={GameArtDesign} alt="B.A (Hons) in Game Art & Design" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>BACHELOR’S in Game Art & Design</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Want to combine your artistic talents with cutting-edge technology? Then this course is for you! Create visually stunning and immersive games by developing core skills in traditional and digital mediums.
                        </p>

                      </div>
                    </div>
                  </Link>
                  <Link to={"/courses/diploma-in-3d-environment-art-creation-for-games/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={AugmentedRealityandVirtualReality} alt="B.A (Hons) in Augmented Reality & Virtual Reality" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>BACHELOR’S in Augmented Reality & Virtual Reality</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Tailored for innovators who want to be at the forefront of this revolutionary technology, this course combines the basics of art, design, and programming for AR and VR application development.</p>

                      </div>
                    </div>
                  </Link>
                </TabPanel>

                <TabPanel value={value1} index={1} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration: 2 Years</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility:  As mentioned in the course</span></li>


                    </ul>
                  </div>
                  <Link to={"/courses/advanced-diploma-in-game-development/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={MscGameTechnology} alt="MASTER’S in Game Technology" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>MASTER’S in Game Technology</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Whether you're a newcomer looking to switch to the field of game development or a professional aiming to elevate your career, this course provides the knowledge and skills necessary to thrive in the gaming industry.</p>

                      </div>
                    </div>
                  </Link>


                </TabPanel>
                <TabPanel value={value1} index={2} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto", padding: "0px 8px" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration: 1 Year</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility: 10+2 or Equivalent</span></li>


                    </ul>
                  </div>
                  <Link to={"/courses/advanced-diploma-in-game-development/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={AdvancedDiplomainGameDevelopment} alt="Advanced Diploma in Game Development" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Advanced Diploma in Game Development</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>This comprehensive program is designed to equip students with the essential skills and knowledge required to excel in the gaming industry. Thus ensuring that students are well-prepared to create and optimize games across various platforms.</p>

                      </div>
                    </div>
                  </Link>
                  <Link to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={AdvancedDiplomain3DGameArtDigitalSculpting} alt="Advanced Diploma in 3D Game Art & Digital Sculpting" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="CourseHead1">Advanced Diploma in 3D Game Art & Digital Sculpting</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Designed to provide students with a deep understanding of the 3D game art pipeline, this program equips students with the skills needed to create detailed and immersive game visuals.</p>

                      </div>
                    </div>
                  </Link>
                  <Link to={"/courses/advanced-diploma-in-traditional-digital-art/"}>
                    <div className="mainCourse1" style={{ marginBottom: "0px" }}>
                      <div className="mainCourseLeft1">
                        <img src={AdvancedDiplomainTraditionalDigitalConceptArt} alt="Advanced Diploma in Traditional & Digital Concept Art" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="CourseHead1">Advanced Diploma in Traditional & Digital Concept Art</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Designed to develop your skills in both traditional and digital art forms, this curriculum covers essential aspects of drawing, perspective, and anatomy, progressing into advanced concepts of environment, character, and creature design.</p>

                      </div>
                    </div>
                  </Link>

                </TabPanel>

                <TabPanel value={value1} index={3} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration: 6 months</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility: 10+2 or Equivalent</span></li>


                    </ul>
                  </div>
                  <Link className="CourseLink1" to={"/courses/diploma-in-game-design-production/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={DiplomainGameDesignProduction} alt="Diploma in Game Design & Production" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Diploma in Game Design & Production</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>From understanding the history and genres of games to mastering high-level design principles and practical tools like Unity/Unreal Engine, this program covers every aspect of game design.
                        </p>

                      </div>
                    </div>
                  </Link>
                  <Link to={"/courses/diploma-in-game-development-with-unity/"}>
                    <div className="mainCourse1">
                      <div className="mainCourseLeft1">
                        <img src={DiplomainGameDevelopmentwithUnity} alt="Diploma in Game Development with Unity" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Diploma in Game Development with Unity</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>With a more specialized approach, this intensive program is designed to provide students with the foundational skills and advanced techniques necessary to excel in game development using Unity Game Engine.
                        </p>

                      </div>
                    </div>
                  </Link>
                  <Link to={"/courses/diploma-in-3d-environment-art-creation-for-games/"}>
                    <div className="mainCourse1" style={{ marginBottom: "0px" }}>
                      <div className="mainCourseLeft1">
                        <img src={Diplomain3DEnvironmentArtCreationforGames} alt="Diploma In 3D Environment Art For Games" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 className="CourseHead1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Diploma In 3D Environment Art For Games</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>This is a specialized program designed to equip students with the skills needed to create stunning and immersive environments for video games.</p>

                      </div>
                    </div>
                  </Link>
                </TabPanel>

              </Box>

              {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{ width: "400px", fontSize: "17px" }}>DOWNLOAD CAREER GUIDE</button>
                      </div> */}

            </div>


            <h2 className='mainHeadingTotall-2'>Our Students are working in Countries Like
            </h2>

            <div style={{ margin: '0px auto' }}>
              <ul className='CountryLogos'>
                <li><img src={Flag1} style={{ width: "100%", height: isMobileState ? "100%" : "130px" }} alt="Flag1" />

                  {isMobileState ? '' : <div className='CountryLogos-2'>United States</div>}</li>

                <li><img src={Flag2} style={{ width: "100%", height: isMobileState ? "100%" : "130px" }} alt="Flag2" />


                  {isMobileState ? '' : <div className='CountryLogos-2'>United Kingdom</div>}</li>

                <li><img src={Flag3} style={{ width: "100%", height: isMobileState ? "100%" : "130px" }} alt="Flag3" />


                  {isMobileState ? '' : <div className='CountryLogos-2'>Canada</div>}</li>

                <li><img src={Flag4} style={{ width: "100%", height: isMobileState ? "100%" : "130px" }} alt="Flag4" />


                  {isMobileState ? '' : <div className='CountryLogos-2'>Sweden</div>}</li>
              </ul>
            </div>
            <h2 className='mainHeadingTotall-2'>Our Students are working at Companies like</h2>

            <Marquee speed={100} style={{ Padding: "0px 20px" }} className='recuitersList-20'>
              <img alt="rec1" src={r1} width={"300"} height={"81"} />
              <img alt="rec2" src={r2} width={"300"} height={"81"} />
              {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}
              <img alt="rec4" src={r4} width={"300"} height={"81"} />
              <img alt="rec5" src={r5} width={"300"} height={"81"} />
              <img alt="rec9" src={r6} width={"300"} height={"81"} />
              <img alt="rec10" src={r7} width={"300"} height={"81"} />

            </Marquee>

            <div className="CousellingButton1 TestM" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>
            <h2 className='mainHeadingTotall-2'>FAQ's</h2>

            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question} <span>{activeIndex === index ? <CiCircleMinus /> : <CiCirclePlus />}</span>
                  </div>

                  <div className={`faq-answer ${activeIndex === index ? 'open' : 'closed'}`}>
                    {faq.id === "2" ? <div className='faq2'>
                      <ul>
                        <li>
                          To apply for Bachelor's or Master's programs at Backstage Pass, complete the online application, clear the entrance exam (Bachelor’s only), attend counseling, submit documents, and enroll after payment.</li>

                      </ul>

                    </div> : null}

                    {faq.id === "4" ? <div className='faq2'>

                      <p> At Backstage Pass, admission to Bachelor's courses requires an entrance exam, whereas Master's courses do not.</p>



                    </div> : null}


                    {faq.id === "5" ? <div className='faq2'>

                      <p> Backstage Pass Institute’s diploma courses open career paths in game design, development, and 3D art, with roles like game designer, Unity developer, and 3D environment artist.</p>



                    </div> : null}




                    {faq.id === "7" ? <div className='faq2'>
                      The Backstage Pass alumni are currently working at top gaming companies like EA Sports, Ubisoft, and Sumo.


                    </div> : null}

                    {faq.id === "7" ? null : faq.answer}
                  </div>
                </div>
              ))}
            </div>






            <div className='fom-ad-2' id="CounsellingOnGamingCareer">


              <div className='containers-2'>





                <form onSubmit={handleSubmit} className="formMain">

                  <p className="suprtsMobiless">Get <b>a Counselling</b> Session on Gaming Career</p>
                  <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">


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
                  <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">
                    <div className="">
                      <label className="" for="Phone Number">Phone Number</label>
                      <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                    </div>
                    <div className="">
                      <label className="" for="Phone Number">City</label>
                      <input className="" placeholder="City" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">
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


        </div>
      </div>
      {isButtonVisible && (
        <div className="CousellingButton" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>)}

    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

