import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import courseBanner from "../../../assets/img/banners/CSGD.webp";
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.png";
import r2 from "../../../assets/img/partners/r2.png";
import r3 from "../../../assets/img/partners/r1.png";
import r4 from "../../../assets/img/partners/r4.png";
import r5 from "../../../assets/img/partners/r5.png";
import r6 from "../../../assets/img/partners/r6.svg";
import r7 from "../../../assets/img/partners/r7.png";

import B1 from "../../../assets/img/banners/business-standard-logo.png";
import B2 from "../../../assets/img/banners/forbes-logo.webp";
import B3 from "../../../assets/img/banners/et-logo.webp";
import B4 from "../../../assets/img/banners/thehindu-logo.svg";
import MscGameTechnology from "../../../assets/img/Courses/MscGameTechnology.webp"
import { SiTicktick } from "react-icons/si";
import { Helmet } from "react-helmet";

import { useLocation } from 'react-router-dom'; // If using React Router

import Async from "react-code-splitting";
import HomeContent from "../../../content/HomeContent1";
import StudentGamesList from "../../../content/StudentGamesList";
import MIntheMedia from "../../../content/MIntheMedia";

import Flag1 from "../../../assets/img/banners/usa.webp";
import Flag2 from "../../../assets/img/banners/uk.webp";
import Flag3 from "../../../assets/img/banners/canada.webp";
import Flag4 from "../../../assets/img/banners/sweden.webp";



import axios from 'axios';
import { BsDot } from "react-icons/bs";
import FeaturedProductL from "../../../content/FeaturedProductL.js";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import StickyBox from "react-sticky-box";
import { useTheme } from '@mui/material/styles';
import AdvancedDiplomainGameDevelopment from "../../../assets/img/Courses/AdvancedDiplomainGameDevelopment.webp"
import AdvancedDiplomain3DGameArtDigitalSculpting from "../../../assets/img/Courses/AdvancedDiplomain3DGameArtDigitalSculpting.webp"
import DiplomainGameDesignProduction from "../../../assets/img/Courses/DiplomainGameDesignProduction.webp"
import DiplomainGameDevelopmentwithUnity from "../../../assets/img/Courses/DiplomainGameDevelopmentwithUnity.webp"
import Diplomain3DEnvironmentArtCreationforGames from "../../../assets/img/Courses/Diplomain3DEnvironmentArtCreationforGames.webp"
import AdvancedDiplomainTraditionalDigitalConceptArt from "../../../assets/img/Courses/AdvancedDiplomainTraditionalDigitalConceptArt.webp"
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import artimage1 from "../../../assets/img/art/sluncky.webp";
import artimage2 from "../../../assets/img/art/gravitity.webp";
import artimage3 from "../../../assets/img/art/cyberdog.webp";
import artimage4 from "../../../assets/img/art/battle.webp";
import artimage5 from "../../../assets/img/art/chaos.webp";
import artimage6 from "../../../assets/img/art/stellar.webp";
import artimage7 from "../../../assets/img/art/rift.webp";
import artimage8 from "../../../assets/img/art/gobble.webp";
import choose from '../../../assets/img/banners/global-network.png';
import choose1 from '../../../assets/img/banners/expert.png';
import choose2 from '../../../assets/img/banners/medal.png';
import choose3 from '../../../assets/img/banners/mindset.png';
import choose4 from '../../../assets/img/banners/loan-to-value.png';
import choose5 from '../../../assets/img/banners/business-man.png';
import recimg from '../../../assets/img/banners/Times-Award.webp';
import Typography from '@mui/material/Typography';

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import m1 from "../../../assets/img/test/1.webp";
import m2 from "../../../assets/img/test/2.webp";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import infog from '../../../assets/img/banners/info.webp';
import advdip from '../../../assets/img/banners/thumbnail.webp';
import ic1 from '../../../assets/img/Icons/WEBSITE-ICON/pass.webp';
import ic2 from '../../../assets/img/Icons/WEBSITE-ICON/Pursuingengi.webp';
import ic3 from '../../../assets/img/Icons/WEBSITE-ICON/Did-not.webp';
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(false);
      setLoading(false);
    }, 3000);

  }, []);

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
    course_ttl: 11,// Initialize URL in state
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
        <title>Build Your Career in Game Art</title>
        <meta  name="description" content="Learn 3D modeling, character design, and more. Start from scratch and master game art to create stunning game worlds and characters." />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>

            <a onClick={scrollToBottom} href="#CounsellingOnGamingCareer"> <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'mobilelga' : 'lga'}`}>
              {isMobileState ? <div className="CousellingButton10" style={{ position: "absolute", bottom: "-50px", left: "auto", marginBottom: "0px" }} onClick={scrollToBottom}><a style={{ padding: "12px 30px", width: "363px" }} href="#CounsellingOnGamingCareer">Enroll Now</a></div> : null}
            </div></a>
            {/* <div className='MainVideoSection'>
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
            </div> */}

            <div className="mainrec22">
              <img src={recimg} alt="recimg" style={{ width: "100%", height:"100%" }} />

            </div>

            <h2 className='mainHeadingTotall-2'>You Are Eligible For A Game Art Career If You Are
            </h2>

            <ul className='featuress2'>
              <li><img src={ic1} alt="ic1" />

                <div className='featuresscon2'>10th or 12th Pass</div></li>
              <li><img src={ic2} alt="ic1" />

                <div className='featuresscon2'>Pursuing Graduation
                </div></li>
              <li><img src={icg} alt="ic1" style={{ height: isMobileState ? "30px" : "50px", width: isMobileState ? "30px" : "50px" }} />

                <div className='featuresscon2'>Did not take Math in 12th

                </div></li>
              <li><img src={ic4} alt="ic1" />

                <div className='featuresscon2'>Do not know how to code

                </div></li>
              <li><img src={ic5} alt="ic1" />

                <div className='featuresscon2'>Want to pursue an Art career

                </div></li>
              <li><img src={ic6} alt="ic1" />

                <div className='featuresscon2'>Looking to switch careers

                </div></li>
            </ul>

            {/* <div className='chapters' id="chapters1" style={{height:isMobileState ? '1140px':'480px' }}>

                

                <FeaturedProducts />

              </div> */}

            <div >
              <div className="bg-c-gradient300 absolute w-full h-[101%] -top-[1px] -bottom-[1px] left-0"></div>
              <FeaturedProductL />
              {/* <Awards /> */}

              <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>
            </div>


            <h2 className='mainHeadingTotall-2'>In the Media</h2>

            {isMobileState ? <MIntheMedia /> :

              <ul className='CountryLogoss'>
                <li><img src={B1} alt="B1"/>

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
              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>3D Modeler

                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Props Artist

                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Environment Artist
                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Character Artist
                </div></li>

              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Character Designer

                </div></li>
              <li><img src={ic11} alt="ic1" />
                <div className='featuresscon2'>Digital Sculptor

                </div></li>
              <li><img src={ic12} alt="ic1" />

                <div className='featuresscon2'>Animator

                </div></li>



              <li><img src={ic14} alt="ic1" />

                <div className='featuresscon2'>Illustrator
                </div></li>
            </ul>
{/* 
            <h2 className='mainHeadingTotall-2'>Learn from scratch to advanced level and build games like...</h2>

            <StudentGamesList /> */}
            <div className={isMobileState ? "CousellingButton1 ismobtest" : "CousellingButton1"} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>




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
                  style={{ background: "#222", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", width: isMobileState ? "100%" : "fit-content", margin: "0px auto" }}

                >
                  <Tab className="hnone" style={{ color: "#fff !important", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", width: isMobileState ? "35%" : "auto" }} label="Bachelor's" />
                 
                  <Tab className="hnone" style={{ color: "#fff !important", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Advanced Diploma" />
                  <Tab className="hnone" style={{ color: "#fff !important", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Diploma" />
                </Tabs>
                <div>
                <h2 className='mainHeadingTotall-2'>Essential concepts you’ll explore:
                  </h2>
                <ul className='featuress3'>
                  
              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>Traditional and digital art techniques


                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>3D Modeling & Texturing Techniques


                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Environment Design & Optimization

                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Lighting and Shading Fundamentals

                </div></li>

              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Industry-standard tools like Maya, ZBrush, Photoshop, etc.


                </div></li>
         
             
            </ul>
            </div>
              </Box>

              {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{ width: "400px", fontSize: "17px" }}>DOWNLOAD CAREER GUIDE</button>
                      </div> */}

            </div>


            <h2 className='mainHeadingTotall-2'>Our Students are working in Countries Like
            </h2>

            <div style={{ margin: '0px auto' }}>
              <ul className='CountryLogos'>
                <li><img src={Flag1} alt="Flag1" />

                  {isMobileState ? '' : <div className='CountryLogos-2'>United States</div>}</li>

                <li><img src={Flag2} alt="Flag2"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>United Kingdom</div>}</li>

                <li><img src={Flag3} alt="Flag3"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Canada</div>}</li>

                <li><img src={Flag4} alt="Flag4"/>


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

