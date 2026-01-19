import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.png";
import r2 from "../../../assets/img/partners/r2.png";
import r4 from "../../../assets/img/partners/r4.png";
import r5 from "../../../assets/img/partners/r5.png";
import r6 from "../../../assets/img/partners/r6.svg";
import r7 from "../../../assets/img/partners/r7.png";
import GAIMG from "../../../assets/img/partners/Icons/3DModelingenthusiast.webp";
import GAIMG1 from "../../../assets/img/partners/Icons/AFineArtsstudent.webp";
import GAIMG2 from "../../../assets/img/partners/Icons/AnArtEnthusiast.webp";
import GAIMG3 from "../../../assets/img/partners/Icons/AnimationVFXenthusiast.webp";
import GAIMG4 from "../../../assets/img/partners/Icons/CharacterArtDigitalSculpting.webp";
import GAIMG5 from "../../../assets/img/partners/Icons/HardSurfaceModeler.webp";
import GAIMG6 from "../../../assets/img/partners/Icons/Fundamentalsofgamedesign.webp";
import art11 from "../../../assets/img/art/Vishnusai.webp"
import art22 from "../../../assets/img/art/SuryaShankha.webp"
import art33 from "../../../assets/img/art/VijaySivatej1.webp"
import art44 from "../../../assets/img/art/SuryaShankha2.webp"
import art55 from "../../../assets/img/art/AbhiAstu1.webp"
import art66 from "../../../assets/img/art/Frame37.webp"
import art77 from "../../../assets/img/art/Frame19.webp"
import art88 from "../../../assets/img/art/vishnusai1.webp"
import art99 from "../../../assets/img/art/AniketMukhi2.webp"
import art19 from "../../../assets/img/art/AniketMukhi3.webp"
import art20 from "../../../assets/img/art/vishnusai1.webp"
import B1 from "../../../assets/img/banners/business-standard-logo.png";
import B2 from "../../../assets/img/banners/forbes-logo.webp";
import B3 from "../../../assets/img/banners/et-logo.webp";
import B4 from "../../../assets/img/banners/thehindu-logo.svg";

import { Helmet } from "react-helmet";



import StudentGamesList1 from "../../../content/StudentGamesList1";
import MIntheMedia from "../../../content/MIntheMedia";

import Flag1 from "../../../assets/img/banners/usa.webp";
import Flag2 from "../../../assets/img/banners/uk.webp";
import Flag3 from "../../../assets/img/banners/canada.webp";
import Flag4 from "../../../assets/img/banners/germany.webp";
import Flag5 from "../../../assets/img/banners/sweden.webp";
import flag6 from "../../../assets/img/partners/software-logo/marmoset-toolbag.webp";
import flag7 from "../../../assets/img/partners/software-logo/Maya.webp";
import flag8 from "../../../assets/img/partners/software-logo/Photoshop.webp";
import flag9 from "../../../assets/img/partners/software-logo/Substance-Painter.webp";
import flag10 from "../../../assets/img/partners/software-logo/Unreal-Engine.webp";
import flag11 from "../../../assets/img/partners/software-logo/ZBrush.webp";
import axios from 'axios';
import FeaturedProductL from "../../../content/FeaturedProductL.js";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useTheme } from '@mui/material/styles';
import AdvancedDiplomain3DGameArtDigitalSculpting from "../../../assets/img/Courses/AdvancedDiplomain3DGameArtDigitalSculpting.webp"
import DiplomainGameDesignProduction from "../../../assets/img/Courses/DiplomainGameDesignProduction.webp"
import Tabs, { tabsClasses } from '@mui/material/Tabs';
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
import advdip from '../../../assets/img/banners/ThumbnailofGameArt.webp';
import advdip1v from '../../../assets/img/banners/advdip1.webp';
import advdip2s from '../../../assets/img/banners/advdip2.webp';
import ic1 from '../../../assets/img/Icons/WEBSITE-ICON/pass.webp';
import ic2 from '../../../assets/img/Icons/WEBSITE-ICON/Pursuingengi.webp';
import ic6 from '../../../assets/img/Icons/WEBSITE-ICON/careers.webp';
import ic7 from '../../../assets/img/Icons/WEBSITE-ICON/gaming-career.webp';
import ic8 from '../../../assets/img/Icons/WEBSITE-ICON/switch-gaming-career.webp';
import ic9 from '../../../assets/img/Icons/WEBSITE-ICON/career-opt.webp';
import ic10 from '../../../assets/img/Icons/WEBSITE-ICON/abroad-opportunities.webp';
import ic11 from '../../../assets/img/Icons/WEBSITE-ICON/income-job.webp';
import ic12 from '../../../assets/img/Icons/WEBSITE-ICON/hands-on.webp';
import ic13 from '../../../assets/img/Icons/WEBSITE-ICON/short-term.webp';
import wc1 from '../../../assets/img/Icons/WEBSITE-ICON/15yearsofExperience.webp';
import wc2 from '../../../assets/img/Icons/WEBSITE-ICON/Awardwinninggamingcollege.webp';
import wc3 from '../../../assets/img/Icons/WEBSITE-ICON/Industryalignedcurriculum.webp';
import wc4 from '../../../assets/img/Icons/WEBSITE-ICON/TaughtbyindustryExperiencedprofessionals.webp';
import wc5 from '../../../assets/img/Icons/WEBSITE-ICON/HandsonTraining.webp';
import wc6 from '../../../assets/img/Icons/WEBSITE-ICON/StrongIndustryConnection.webp';
import wc7 from '../../../assets/img/Icons/WEBSITE-ICON/Placementassistance.webp';
import wc8 from '../../../assets/img/Icons/WEBSITE-ICON/Accesstofreewebinars_workshops.webp';
import wc9 from '../../../assets/img/Icons/WEBSITE-ICON/GlobalAluminicommunity.webp';
import icg from '../../../assets/img/logos/console.webp';
import GameArtDesign from "../../../assets/img/Courses/GameArt&Design.webp"
import LazyLoad from "react-lazyload";

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
  // const [showBanner, setShowBanner] = useState(true);

  // useEffect(() => {
  //   const data = window.localStorage.getItem('MY_APP_STATE');
  //   if (data !== null) setShowBanner(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  // }, [showBanner]);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowBanner(false);
  //     setLoading(false);
  //   }, 3000);

  // }, []);

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [isActive, setIsActive] = useState(true);
  const [isActives, setIsActives] = useState(true);
  const [isActivess, setIsActivess] = useState(true);
  const [isActivesss, setIsActivesss] = useState(true);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);


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
    course_ttl: 9,// Initialize URL in state
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
  const videoRefI = useRef(null); // To reference the video element
  const videoRefS = useRef(null); // To reference the video element
  const [isPlaying, setIsPlaying] = useState(false); // To manage the play state
  const [isPlayingI, setIsPlayingI] = useState(false); // To manage the play state
  const [isPlayingS, setIsPlayingS] = useState(false); // To manage the play state

  const handlePlayMain = () => {
    // Play the video when the image is clicked
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Update the state to hide the image
    }
  };
  const handlePlayIndustry = () => {
    // Play the video when the image is clicked
    if (videoRefI.current) {
      videoRefI.current.play();
      setIsPlayingI(true); // Update the state to hide the image
    }
  };

  const handlePlayStudent = () => {
    // Play the video when the image is clicked
    if (videoRefS.current) {
      videoRefS.current.play();
      setIsPlayingS(true); // Update the state to hide the image
    }
  };



  const faqData = [
    {
      id: 0,
      question: "What is game art, and what does a game artist do?",
      answer: "Game art involves creating the visual elements of a game, such as characters, environments, and textures. A game artist designs and produces these assets to bring the game's world to life."
    },
    {
      id: 1,
      question: "What skills do I need to become a game artist?",
      answer: "Skills include strong drawing abilities, knowledge of color theory, 3D modeling, texturing, and proficiency in design software like Photoshop, Blender, or Maya"
    },
    {
      id: 2,
      question: "How does an Environment Artist contribute to game worlds?",
      answer: ""
    },
    {
      id: 3,
      question: "What is the difference between 2D and 3D game art?",
      answer: "2D game art is flat, used in games like side-scrollers, while 3D game art has depth, used in more immersive, realistic games."
    },
    {
      id: 4,
      question: "What software is commonly used for game art?",
      answer: ""
    },
    {
      id: 5,
      question: "What are the responsibilities of a Character Artist?",
      answer: ""
    },
    {
      id: 6,
      question: "How does game art fit into the overall game development process?",
      answer: "Game art is crucial throughout development, providing assets that enhance gameplay and tell the game’s visual story, guiding player experience."
    },
    {
      id: 7,
      question: "How much do game artists typically earn?",
      answer: "Salaries range from ₹3,00,000 to ₹8,00,000 annually, depending on experience, location, and the studio's size."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "India’s Best Game Development college | Backstage Pass Institute of Gaming",
    "item": "https://www.backstagepass.co.in/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Student Awards & Achievements | Backstage Pass",
    "item": "https://www.backstagepass.co.in/life-at-bsp/student-awards/"  
  }]
}
`}
        </script>

        <title>Build Your Career in Game Art</title>

        <meta property="og:title" content="Build Your Career in Game Art" />
        <meta property="og:description" name="description" content="Learn 3D modeling, character design, and more. Start from scratch and master game art to create stunning game worlds and characters." />
        <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/student-awards/" />
        <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/student-awards/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>
            {/* <a onClick={scrollToBottom} href="#CounsellingOnGamingCareer"> <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? '' : ''}`}>
              {isMobileState ? <div className="CousellingButton10" style={{ position: "absolute", bottom: "-50px", left: "auto", marginBottom: "0px" }} onClick={scrollToBottom}><a style={{ padding: "12px 30px", width: "363px" }} href="#CounsellingOnGamingCareer">Enroll Now</a></div> : null}
            </div></a> */}
            <div style={{ background: "#000", color: "#fff" }}>
              <h1 style={{ textTransform: "capitalize" }} className='maintext'>Transform Your Love for Games into a Game Art Career
              </h1>
              <p className='undhd'>Get ready to create Immersive Gaming experiences and Pursue Your Dream </p>
            </div>
            <div className="maincls">
              <div className='mainv'>
                <div className='MainVideoSection1'>

                  <div className="videomain21g">
                    <video ref={videoRef} controls loop>
                      <source src="https://www.backstagepass.co.in/landingpage/game-artv.mp4" type="video/mp4" />

                    </video>


                    {!isPlaying && (
                      <img
                        src={advdip}
                        style={{ objectFit: isMobileState ? "null" : "contain" }}
                        className="overlay-image2-1g"
                        alt="advdip"
                        onClick={handlePlayMain} // Handle the click to play the video
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className='fom-ad-21' id="CounsellingOnGamingCareer">


                  <div className='containers-21'>





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
                          <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minlength="10" maxlength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
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
                          <label className="" for="email">Qualification</label>
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
                      <div className="formGrid-c" data-form-id="need-guidance" data-form="step1-container">
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
                              style={{ color: '#5a555a' }}
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
            </div>

            <div className="mainrec22g">
              <img src={recimg} alt="recimg" style={{ width: "100%", height: "100%" }} />

            </div>

            <h2 className='mainHeadingTotall-2'>Who is This Course for?
            </h2>

            <ul className='featuress2'>
              <li><img src={ic1} alt="ic1" />

                <div className='featuresscon2'>10th or 12th Pass</div></li>
              <li><img src={ic2} alt="ic1" />

                <div className='featuresscon2'>Pursuing Graduation
                </div></li>
              <li><img src={GAIMG2} alt="ic1" style={{ height: isMobileState ? "30px" : "50px", width: isMobileState ? "30px" : "50px" }} />

                <div className='featuresscon2'>An Art Enthusiast

                </div></li>
              <li><img src={GAIMG1} alt="ic1" />

                <div className='featuresscon2'>A Fine Arts student

                </div></li>
              <li><img src={icg} alt="ic1" />

                <div className='featuresscon2'>A Gamer

                </div></li>
              <li><img src={ic6} alt="ic1" />

                <div className='featuresscon2'>Looking to switch careers

                </div></li>
              <li><img src={GAIMG3} alt="ic1" />

                <div className='featuresscon2'>Animation & VFX enthusiast


                </div></li>
              <li><img src={GAIMG} alt="GAIMG" />

                <div className='featuresscon2'>3D Modeling enthusiast


                </div></li>
              <li><img src={GAIMG6} alt="GAIMG" />

                <div className='featuresscon2'>Passionate to create immersive game worlds


                </div></li>
            </ul>

            {/* <div className='chapters' id="chapters1" style={{height:isMobileState ? '1140px':'480px' }}>

                

                <FeaturedProducts />

              </div> */}
            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
              <h2 className='mainHeadingTotall-2'>Explore our Game Art program options
              </h2>

              <Box>
                <Tabs
                  TabIndicatorProps={{ style: { border: "1px solid #222", background: '#222', display: "flex", alignItems: "center", justifyContent: "center" } }}
                  value={value1}
                  onChange={handleChange1}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  className='tabcenter'
                  style={{ background: "#222", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", width: isMobileState ? "100%" : "fit-Content", margin: "0px auto" }}

                >
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", width: isMobileState ? "23%" : "auto" }} label="Bachelor's" />

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
                    {/* <p style={{ color: "#fff", textAlign: "center" }}>*The eligibility criteria for each Bachelor's course varies based the curriculum. Please check the criteria for the course you want to opt for before applying.</p> */}
                  </div>

                  <Link to={"/courses/bachelors-in-game-art-and-design/"}>
                    <div className="mainCourse1" style={{ marginBottom: "-14px" }}>
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

                </TabPanel>


                <TabPanel value={value1} index={1} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto", padding: "0px 8px" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration: 1 Year</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility: 10+2 or Equivalent</span></li>


                    </ul>
                  </div>

                  <Link to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"}>
                    <div className="mainCourse1" style={{ marginBottom: "-14px" }}>
                      <div className="mainCourseLeft1">
                        <img src={AdvancedDiplomain3DGameArtDigitalSculpting} alt="Advanced Diploma in 3D Game Art & Digital Sculpting" className="img-circle" />
                      </div>
                      <div className="mainCourseRight1">
                        <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="CourseHead1">Advanced Diploma in 3D Game Art & Digital Sculpting</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Designed to provide students with a deep understanding of the 3D game art pipeline, this program equips students with the skills needed to create detailed and immersive game visuals.</p>

                      </div>
                    </div>
                  </Link>


                </TabPanel>

                <TabPanel value={value1} index={2} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto", padding: "0px 8px" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration: 6 months</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility: 10+2 or Equivalent</span></li>


                    </ul>
                  </div>
                  <Link to={"/courses/diploma-in-game-design-production/"}>
                    <div className="mainCourse1" style={{ marginBottom: "-14px" }}>
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


                </TabPanel>

                <div className='toolsa'>
                  <h2 className='mainHeadingTotall-2'>Essential concepts you’ll explore:
                  </h2>
                  <ul className='featuress3'>

                    <li style={{ paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null }}><img src={ic7} alt="ic1" />

                      <div className='featuresscon22'>Traditional and digital art techniques


                      </div></li>
                    <li style={{ paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null }}><img src={ic13} alt="ic1" />
                      <div className='featuresscon22'>3D Modeling & Texturing Techniques


                      </div></li>
                    <li style={{ paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null }}><img src={ic9} alt="ic1" />

                      <div className='featuresscon22'>Environment Art & Optimization


                      </div></li>
                    <li style={{ paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null }}><img src={GAIMG4} alt="ic1" />

                      <div className='featuresscon22'>Character Art & Digital Sculpting

                      </div></li>
                    <li style={{ paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null }}><img src={ic8} alt="ic1" />
                      <div className='featuresscon22'>Lighting and Shading Fundamentals

                      </div></li>

                    <li style={{ paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null }}><img src={ic10} alt="ic1" />

                      <div className='featuresscon22'>Industry-standard tools like Maya, ZBrush, Substance Painter, Marmoset toolbag, Photoshop, Unreal Engine etc.



                      </div></li>


                  </ul>
                  <div className="featuress31" style={{ margin: '0px auto', display: "flex", alignItems: "center", padding: isMobileState ? "20px" : null }}>
                    <ul className='CountryLogos21g' style={{ width: isMobileState ? "100%" : "55%", margin: '0px auto', display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <li><img src={"https://tse2.mm.bing.net/th?id=OIP.atSrendp8pQnMsT3wdwedgAAAA&pid=Api&P=0&h=220"} alt="mamostar"/>

                      </li>

                      <li><img src={flag7} alt="Flag7"/>


                      </li>

                      <li><img src={flag8} alt="Flag8"/>


                      </li>

                      <li><img src={flag9} alt="Flag9"/>


                      </li>
                      <li><img src={flag10} alt="Flag10"/>
                      </li>
                      <li><img src={flag11} style={{ background: "#cccc", padding: "4px" }} alt="Flag11" />


                      </li>
                    </ul>
                  </div>
                </div>
              </Box>

              {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{ width: "400px", fontSize: "17px" }}>DOWNLOAD CAREER GUIDE</button>
                      </div> */}

            </div>
            <div className="" style={{ flexDirection: "column", marginTop: isMobileState ? "-22px" : "0px" }}>

              <h2 className="mainHeadingTotall-2">Student Artwork</h2>

              {isMobileState ? <div>
                <div>
                  <ul className='mbimg1g'>
                    <li><img src={art11} alt="art11" /></li>
                    <li><img src={art33} alt="art33" /></li>
                    <li><img src={art22} alt="art22" /></li>
                    <li><img src={art44} alt="art44" /></li>
                    <li><img src={art55} alt="art55" /></li>
                    <li><img src={art66} alt="art66" /></li>
                    <li><img src={art77} alt="art77" /></li>
                    <li><img src={art88} alt="art88" /></li>
                  </ul>
                </div>
              </div> :

              
                <div className="containerg">


                  <div className="gallery">

                    <div className="gallery-item">
                      <img className="gallery-image" src={art77} alt="art77"/>
                    </div>

                    <div className="gallery-item">
                      <img className="gallery-image" src={art33} alt="art33"/>
                    </div>

                    <div className="gallery-item">
                      <img className="gallery-image" src={art55} alt="art55"/>
                    </div>

                    <div className="gallery-item">
                      <img className="gallery-image" src={art44} alt="art44"/>
                    </div>

                    <div className="gallery-item">
                      <img className="gallery-image" src={art66} alt="art66"/>
                    </div>

                    <div className="gallery-item">
                      <img className="gallery-image" src={art22} alt="art22"/>
                    </div>

                  </div>

                </div>}

            </div>
            <h2 className='mainHeadingTotall-2'>What Our Alumni And Game Companies Say</h2>

            <div className='maincls'>
              <div className='mainv'>
                <div className='MainVideoSection1'>

                  <div className="videomain21">
                    <video ref={videoRefI} controls loop style={{ width: "100%", height: "auto" }}>
                      <source src="https://www.backstagepass.co.in/landingpage/industryv.mp4" type="video/mp4" />

                    </video>


                    {!isPlayingI && (
                      <img
                        src={advdip1v}
                        style={{ objectFit: isMobileState ? "fill" : "contain", position: isMobileState ? "absolute" : "absolute", width: "100%", height: isMobileState ? "100%" : "100%" }}
                        className="overlay-image2-1gs"
                        alt="advdip"
                        onClick={handlePlayIndustry} // Handle the click to play the video
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className='mainv'>
                <div className='MainVideoSection1'>

                  <div className="videomain21">

                    <video ref={videoRefS} controls loop style={{ width: "100%", height: "auto" }}>
                      <source src="https://www.backstagepass.co.in/landingpage/industrys.mp4" type="video/mp4" />

                    </video>


                    {!isPlayingS && (
                      <img
                        src={advdip2s}
                        style={{ objectFit: isMobileState ? "fill" : "contain", position: isMobileState ? "absolute" : "absolute" }}
                        className="overlay-image2-1gs"
                        alt="advdip"
                        onClick={handlePlayStudent} // Handle the click to play the video
                      />
                    )}
                  </div>
                </div>
              </div>

            </div>
            {/* <FeaturedProductL /> */}
            {/* <Awards /> */}





            <h2 className='mainHeadingTotall-2'>In the Media</h2>

            {isMobileState ? <MIntheMedia /> :

              <ul className='CountryLogoss'>
                <li><img src={B1} alt="B1" />

                </li>

                <li><img src={B2} alt="B2"/>

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B3} alt="B3" />

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B4} alt="B4"/>

                </li>
              </ul>}


            <h2 className='mainHeadingTotall-2'>Career Options in Game Art
            </h2>

            <ul className='featuress3g'>
              <li ><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>3D Modeler

                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Concept Artist

                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Environment Artist
                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>3D Character Artist
                </div></li>



              <li><img src={GAIMG5} alt="ic1" />

                <div className='featuresscon2'>Hard Surface Modeler


                </div></li>

              <li><img src={ic11} alt="ic1" />
                <div className='featuresscon2'>Digital Sculptor

                </div></li>
              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Character Designer

                </div></li>
              <li><img src={ic12} alt="ic1" />

                <div className='featuresscon2'>Game Designer


                </div></li>

            </ul>

            <h2 className='mainHeadingTotall-2'>Our Alumni had worked on games like</h2>

            <StudentGamesList1 />
            <div className={isMobileState ? "CousellingButton1 ismobtest" : "CousellingButton1"} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>






            <h2 className='mainHeadingTotall-2'>Our Alumni Work Worldwide, Including

            </h2>

            <div style={{ margin: '0px auto' }}>
              <ul className='CountryLogos2'>
                <li><img src={Flag1} alt="Flag1"/>

                  {isMobileState ? '' : <div className='CountryLogos-2'>United States</div>}</li>

                <li><img src={Flag2} alt="Flag2"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>United Kingdom</div>}</li>

                <li><img src={Flag3} alt="Flag3"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Canada</div>}</li>

                <li><img src={Flag4} alt="Flag4"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Sweden</div>}</li>
                <li><img src={Flag5} alt="Flag5"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Germany</div>}</li>
              </ul>
            </div>
            <h2 className='mainHeadingTotall-2'>Our Alumni Work At Leading Companies Like</h2>

            <Marquee speed={100} style={{ Padding: "0px 20px" }} className='recuitersList-20'>
              <img alt="rec1" src={r1} width={"300"} height={"81"} />
              <img alt="rec2" src={r2} width={"300"} height={"81"} />
              <img alt="rec4" src={r4} width={"300"} height={"81"} />
              <img alt="rec5" src={r5} width={"300"} height={"81"} />
              <img alt="rec9" src={r6} width={"300"} height={"81"} />
              <img alt="rec10" src={r7} width={"300"} height={"81"} />

            </Marquee>


            <h2 className='mainHeadingTotall-2'>Why Choose Backstage Pass?
            </h2>

            <ul className='featuress3gl'>
              <li ><img src={wc1} alt="ic1" />

                <div className='featuresscon2'>15+ Years Experience

                </div></li>
              <li><img src={wc2} alt="ic1" />
                <div className='featuresscon2'>Award-Winning Gaming College
                </div></li>
              <li><img src={wc3} alt="ic1" />

                <div className='featuresscon2'>Industry-Aligned Curriculum
                </div></li>
              <li><img src={wc4} alt="ic1" />
                <div className='featuresscon2'>Taught by Industry Experienced Professionals
                </div></li>



              <li><img src={wc5} alt="ic1" />

                <div className='featuresscon2'>Hands-on Training


                </div></li>

              <li><img src={wc6} alt="ic1" />
                <div className='featuresscon2'>Strong Industry Connections

                </div></li>
              <li><img src={wc7} alt="ic1" />

                <div className='featuresscon2'>100% Placement Assistance

                </div></li>
              <li><img src={wc8} alt="ic1" />

                <div className='featuresscon2'>Access to Free Webinars/Workshops


                </div></li>
              <li><img src={wc9} alt="ic1" />

                <div className='featuresscon2'>Global Alumni Community


                </div></li>
            </ul>
            <h2 className='mainHeadingTotall-2' style={{ display: "none" }}>FAQ's</h2>

            <div className="faq-containerlg">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question} <span>{activeIndex === index ? <CiCircleMinus /> : <CiCirclePlus />}</span>
                  </div>

                  <div className={`faq-answer ${activeIndex === index ? 'open' : 'closed'}`}>
                    {faq.id == "2" ? <div className='faq2'>
                      <ul>
                        <li>
                          Environment artists create the backgrounds, landscapes, and worlds that players explore. They design everything from terrain to buildings and other in-game structures.</li>

                      </ul>

                    </div> : null}

                    {faq.id == "4" ? <div className='faq2'>

                      <p> Common software includes Adobe Photoshop, Autodesk Maya, ZBrush, Blender, and Unity for integrating assets into games.</p>



                    </div> : null}


                    {faq.id == "5" ? <div className='faq2'>

                      <p> Character artists design and create 3D or 2D characters, ensuring they are visually appealing and fit the game’s style and mechanics.</p>



                    </div> : null}




                    {faq.id == "7" ? <div className='faq2'>
                      Game art is crucial throughout development, providing assets that enhance gameplay and tell the game’s visual story, guiding player experience.


                    </div> : null}

                    {faq.id == "7" ? null : faq.answer}

                    {faq.id == "8" ? <div className='faq2'>

                      <p> Salaries range from ₹3,00,000 to ₹8,00,000 annually, depending on experience, location, and the studio's size.</p>



                    </div> : null}

                    {faq.id == "9" ? <div className='faq2'>

                      <p> Salaries range from ₹3,00,000 to ₹8,00,000 annually, depending on experience, location, and the studio's size.</p>



                    </div> : null}
                  </div>
                </div>
              ))}
            </div>






            <div className="footerin" style={{ height: "160px", padding: "30px" }}>
              <div className="text-center foot-content fadeInUp anime-delay2" style={{ display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>© 2025 All Rights Reserved</div>
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

