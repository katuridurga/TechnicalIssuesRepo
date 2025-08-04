import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';



import { Helmet } from "react-helmet";


import axios from 'axios';
import { BsDot } from "react-icons/bs";
import ReactWhatsappButton from "react-whatsapp-button";
import FeaturedProducts1 from "../../../content/FeaturedProducts1.js";
import { useSelector, shallowEqual } from "react-redux";
import StickyBox from "react-sticky-box";
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
import { Link } from "react-router-dom";
import m1 from "../../../assets/img/test/1.webp";
import m2 from "../../../assets/img/test/2.webp";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import infog from '../../../assets/img/banners/info.webp';
import advdip from '../../../assets/img/banners/advdip.webp';

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
  const [isActives, setIsActives] = useState(true);
  const theme = useTheme();




  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };
 
  const [subOptions, setSubOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    PhoneNumber: '',
    email: '',
    city: '',
    course:'',
    specialization:'',
    qualification: '',
    comments: '',
    url: window.location.href,
    course_ttl: 1,// Initialize URL in state
  });
  const options = {
    advancedDiploma: [
      { value: "gd", label: " Game Development" },
      { value: "3dgame", label: "3D Game Art & Digital Sculpting" },
      { value: "tdca", label: "Traditional & Digital Concept Art" }
    ],
    
    diploma: [
      { value: "gdp", label: "Game Design & Production" },
      { value: "gdu", label: "Game Development with Unity" },
      { value: "3dart", label: "3D Environment Art For Games" },
      { value: 'gdunreal', label: 'Game Development with Unreal' }
    ]
  };

  const handleMainCategoryChange = (event) => {
    const selectedCategory = event.target.value;
   
   
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
        comments: '',
        course:'',
        specialization:'',
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


  return (
    <>
      <Helmet>
        <title>Best Game Development College In India</title>
        <meta  property="og:description" content="Join the top game design and development college in Hyderabad. Explore game development courses & game design courses to kickstart your gaming career." />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0">
        <div className="mainPanel1">


          <div style={{ width: isMobileState ? "100%" : "70%" }}>
            <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassdipadv' : 'desktopdipadv'}`}>
              <div className="et_pb_row et_pb_row_0">
                <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                  {/* <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt conthead">Kickstart your gaming career with our Diploma & Advanced Diploma Courses</h1></div>
            </div> */}
                </div>
              </div>
            </div>
            <div className='mbview'>

              <div className="videomain1">
                <video ref={videoRef} controls loop className='advvideo'>
                  <source src="https://www.backstagepass.co.in/landingpage/adv-dip.mp4" type="video/mp4" />

                </video>


                {!isPlaying && (
                  <img
                    src={advdip}
                    className="overlay-image2"
                    alt="advdip"
                    onClick={handlePlay} // Handle the click to play the video
                  />
                )}
              </div>

            </div>

            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
              <h2 className='mainHeadingTotall'>COURSES OVERVIEW</h2>

              <Box >
                <Tabs
                  TabIndicatorProps={{ style: { background: '#ed1923', display: "flex", alignItems: "center", justifyContent: "center" } }}
                  value={value1}
                  onChange={handleChange1}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  className='tabcenter'
                  style={{ background: "#222", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", width: isMobileState ? "100%" : "fit-content", margin: "0px auto" }}
                >
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "12px" : "15px",width: isMobileState ? "50%" : "fit-content", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Diploma Courses"  />
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "12px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Advanced Diploma Courses" />

                </Tabs>

                <TabPanel value={value1} index={0} dir={theme.direction}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration : 6 months</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility : 10+2 or Equivalent</span></li>


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
                    <div className="mainCourse1">
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
                <TabPanel value={value1} index={1} dir={theme.direction}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration :1 Year</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility : 10+2 or Equivalent</span></li>


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
                    <div className="mainCourse1">
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



              </Box>

         
            </div>
            <div className="mainrec">
              <img src={infog} alt="infog" style={{ width: "100%", height:"100%" }} />
            </div>
            <div style={{ background: "#000", padding: "20px" }}>
              <h2 className='mainHeadingTotall mt-top'>YOU SHOULD TAKE THIS COURSE IF </h2>

              {isMobileState ? <div>
                <div>
                  <ul className='mbimgland'>
                    <li>

                      <h3><BsDot /><p>You have a knack for strategy and problem-solving</p>
                      </h3>
                    </li>
                    <li>

                      <h3><BsDot /><p>You are creative, imaginative, and like art</p>

                      </h3>
                    </li>
                    <li>
                      <h3><BsDot /><p>You like coding & don’t want to opt for software development careers</p>

                      </h3>
                    </li>
                    <li>
                      <h3><BsDot /><p>You are a trend-setter and want to choose a unique career</p>
                      </h3>
                    </li>
                    <li>
                      <h3><BsDot /><p>Like gaming and want to make new worlds come to life</p>
                      </h3>
                    </li>


                  </ul>
                </div>
              </div> :

                <div style={{ position: "relative", height: "auto" }}>
                  <div id="pointerss" className={isActives ? 'aboutHeaderPoint' : ' '} >
                    <div className='plu1s'>
                      <div><span>01</span></div><h1>You have a knack for strategy and problem-solving


                      </h1>

                    </div>

                  </div>
                  <div id="pointerss" className={isActives ? 'aboutHeaderPoint' : ' '} >
                    <div className='plu1s'>
                      <div><span>02</span></div><h1 className='pdleft'>You are creative, imaginative, and like art problem-solving


                      </h1>

                    </div>

                  </div>
                  <div id="pointerss" className={isActives ? 'aboutHeaderPoint' : ' '} >
                    <div className='plu1s'>
                      <div><span>03</span></div> <h1>You like coding & don’t want to opt for software development careers


                      </h1>

                    </div>

                  </div>
                  <div id="pointerss" className={isActives ? 'aboutHeaderPoint' : ' '} >
                    <div className='plu1s'>
                      <div><span>04</span></div> <h1>You are a trend-setter and want to choose a unique career

                      </h1>

                    </div>

                  </div>
                  <div id="pointerss" className={isActives ? 'aboutHeaderPoint' : ' '} >
                    <div className='plu1s'>
                      <div><span>05</span></div> <h1>Like gaming and want to make new worlds come to life

                      </h1>

                    </div>

                  </div>


                </div>}
            </div>
            <div className='chapters' id="chapterss2">
              <div className="mainrec">
                <img src={recimg} alt="recimg" style={{ width: "100%", height:"100%"  }} />
              </div>
              <div className="show-grid">
                <h2 className="mainHeadingTotall">
                  Why choose us?
                </h2>
                <div className="maind">

                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30px" height="30px" src={choose2} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">#1 Gaming Institute</p>
                      Specialized education in gaming with industry-aligned curriculum
                    </div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30px" height="30px" src={choose} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Industry Exposure</p>

                      Networking opportunities and strategic tie-ups with top gaming studios</div></div>

                </div>
                <div className="maind">
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30px" height="30px" src={choose1} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Industry-experienced Mentors</p>

                      Guidance from industry veterans with an experience of 10+ years</div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30px" height="30px" src={choose3} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Hands-on Learning</p>

                      Mimicked real-world scenarios for practical learning
                    </div></div>
                </div>
                <div className="maind">
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30px" height="30px" src={choose4} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Financial Aid</p>

                      Flexible financial aid options for affordable quality learning
                    </div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30px" height="30px" src={choose5} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Professional Readiness</p>

                      Portfolio development for the competitive market
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className='mainHeadingTotall'>Student Showcase</h2>


            <div className="">
              {isMobileState ? <div>
                <div>
                  <ul className='mbimgart'>
                    <li><a href="https://ram-manohar.itch.io/slunkey" target="_blank" rel="noopener noreferrer"><img src={artimage1} alt="artimage1" style={{width:"100%", height:"100%"}} /></a></li>
                    <li><a href="https://vicvijay2129.itch.io/gravitality" target="_blank" rel="noopener noreferrer"><img src={artimage2} alt="artimage2" style={{width:"100%", height:"100%"}}/></a></li>
                    <li><a href="https://anoushmistry.itch.io/byte-the-cyber-dog" target="_blank" rel="noopener noreferrer"><img src={artimage3} alt="artimage3" style={{width:"100%", height:"100%"}}/></a></li>
                    <li><a href="https://unknown-coder.itch.io/battle-mayhem" target="_blank" rel="noopener noreferrer"><img src={artimage4} alt="artimage4" style={{width:"100%", height:"100%"}} /></a></li>
                    <li><a href="https://rishikesh-1.itch.io/chaos-reborn" target="_blank" rel="noopener noreferrer"><img src={artimage5} alt="artimage5" style={{width:"100%", height:"100%"}} /></a></li>
                    <li><a href="https://luckylikii.itch.io/stellar-wings" target="_blank" rel="noopener noreferrer"><img src={artimage6} alt="artimage6" /></a></li>
                    <li><a href="https://dynamicv.itch.io/lost-souls-the-console-rift" target="_blank" rel="noopener noreferrer"><img src={artimage7} alt="artimage7" style={{width:"100%", height:"100%"}}/></a></li>
                    <li><a href="https://saji002.itch.io/wobblegobble" target="_blank" rel="noopener noreferrer"><img src={artimage8} alt="artimage8" style={{width:"100%", height:"100%"}} /></a></li>
                  </ul>
                </div>
              </div> :


                <div className="gllart">

                  <div className="gart">
                    <a href="https://ram-manohar.itch.io/slunkey" target="_blank" rel="noopener noreferrer"><img src={artimage1} alt="artimage1" style={{ objectPosition: "left", width:"100%", height:"100%" }} /></a>
                  </div>
                  <div className="gart">
                    <a href="https://vicvijay2129.itch.io/gravitality" target="_blank" rel="noopener noreferrer">
                      <img src={artimage2} alt="artimage2" style={{width:"100%", height:"100%"}} /></a>
                  </div>
                  <div className="gart">
                    <a href="https://anoushmistry.itch.io/byte-the-cyber-dog" target="_blank" rel="noopener noreferrer">
                      <img src={artimage3} alt="artimage3" className='lngartimg' style={{width:"100%", height:"100%"}}/></a>
                  </div>
                  <div className="gart">
                    <a href="https://unknown-coder.itch.io/battle-mayhem" target="_blank" rel="noopener noreferrer"><img src={artimage4} alt="artimage4" style={{ objectPosition: "left", width:"100%", height:"100%" }} /></a>
                  </div>
                  <div className="gart">
                    <a href="https://rishikesh-1.itch.io/chaos-reborn" target="_blank" rel="noopener noreferrer"><img src={artimage5} alt="artimage5" style={{width:"100%", height:"100%"}}/></a>
                  </div>
                  <div className="gart">
                    <a href="https://luckylikii.itch.io/stellar-wings" target="_blank" rel="noopener noreferrer"><img src={artimage6} alt="artimage6" className='martimg' style={{width:"100%", height:"100%"}} /></a>
                  </div>
                  <div className="gart">
                    <a href="https://dynamicv.itch.io/lost-souls-the-console-rift" target="_blank" rel="noopener noreferrer"><img src={artimage7} alt="artimage7" style={{width:"100%", height:"100%"}}/></a>
                  </div>
                  <div className="gart">
                    <a href="https://saji002.itch.io/wobblegobble" target="_blank" rel="noopener noreferrer"><img src={artimage8} alt="artimage8" style={{width:"100%", height:"100%"}}/></a>
                  </div>




                </div>}



              <div className='chapters' id="chapters1">

                <FeaturedProducts1 />

              </div>
              <div className='sidebarview' id="mobileview">
                <div>



                  <form onSubmit={handleSubmit} className="formMain">

                    <p className="suprtsMobiless">Get a Counselling Session on Gaming Career</p>
                    <div className="formGrid1" data-form-id="need-guidance" data-form="step1-container">


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
                    <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                      <div className="">
                        <label className="" for="Phone Number">Phone Number</label>
                        <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                      </div>
                      <div className="">
                        <label className="" for="Phone Number">City</label>
                        <input className="" placeholder="City" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                      <div className="">
                        <label className="" for="Phone Number">Email</label>
                        <input className="" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                      <div className="">
                        <label className="" for="qualification">Highest Qualification</label>
                        <select className="input-gray" name="qualification" id="qualification" value={formData.qualification} onChange={handleInputChange} required style={{marginBottom:"10px"}}>
                          <option value="">Highest Qualification</option>
                          <option value="10th">10th Pass</option>
                          <option value="12th">12th Pursuing</option>
                          <option value="12pass">12th Pass</option>
                          <option value="ugraduate">Undergraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                      <div className="">
                  <label className="" for="course">Course <span style={{color:"red", marginLeft:"4px", marginTop:"2px"}}>*</span></label>
      <select onChange={handleMainCategoryChange} name="course" id="course" value={formData.course}  style={{marginBottom:"10px"}} required>
        <option value="" disabled>Select Course</option>
        <option value="diploma">Diploma</option>
        <option value="advancedDiploma">Advanced Diploma</option>
      </select>

      {subOptions.length > 0 && (
        <>
          <label>Specialization</label>
          <select onChange={handleSubCategoryChange}  value={formData.specialization}name="specialization" id="specialization" style={{marginBottom:"10px"}} required>
            <option value="">Select Specialization</option>
            {subOptions.map((sub) => (
              <option key={sub.value} value={sub.value}>{sub.label}</option>
            ))}
          </select>
        </>
      )}
    </div>
    <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                    <label className="" for="comments" style={{marginBottom:"10px"}}>Comments</label>
                    <textarea
                      className="input-gray"
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
          <div className='frmd'>
            {isMobileState ? null : <StickyBox offsetTop={isMobileState ? 0 : 0} offsetBottom={0} style={{ position: isMobileState ? "initial" : "sticky", width: isMobileState ? '100%' : '100%', marginRight: isMobileState ? "0%" : "3%" }}>
              <div className='sidebarview1' id="desview">
                <div>



                  <div>


                    <div>


                      <div className="videomain1">
                        <video ref={videoRef} controls loop>
                          <source src="https://www.backstagepass.co.in/landingpage/adv-dip.mp4" type="video/mp4" />

                        </video>

                        {/* Only show the image overlay when the video is not playing */}
                        {!isPlaying && (
                          <img
                            src={advdip}
                            className="overlay-image1"
                            alt="advdip"
                            onClick={handlePlay} // Handle the click to play the video
                          />
                        )}
                      </div>

                    </div>



                    <form onSubmit={handleSubmit} className="formMain">

                      <p className="suprtsMobiless">Get <b>a Counselling</b> Session on Gaming Career</p>
                      <div className="formGrid1" data-form-id="need-guidance" data-form="step1-container">


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
                      <div className="formGrid1" data-form-id="need-guidance" data-form="step1-container">
                        <div className="">
                          <label className="" for="Phone Number">Phone Number</label>
                          <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                        </div>
                        <div className="">
                          <label className="" for="Phone Number">City</label>
                          <input className="" placeholder="City" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="formGrid1" data-form-id="need-guidance" data-form="step1-container">
                        <div className="">
                          <label className="" for="Phone Number">Email</label>
                          <input className="" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="">
                          <label className="" for="qualification">Highest Qualification</label>
                          <select className="input-gray" name="qualification" id="qualification" value={formData.qualification} onChange={handleInputChange} required style={{marginBottom:"10px"}}>
                            <option value="" className='Testoptions'>Highest Qualification</option>
                            <option value="10th">10th Pass</option>
                            <option value="12th">12th Pursuing</option>
                            <option value="12pass">12th Pass</option>
                            <option value="ugraduate">Undergraduate</option>
                            <option value="graduate">Graduate</option>
                            <option value="others">Others</option>
                          </select>
                        </div>
                        <div className="">
                  <label className="" for="course">Course <span style={{color:"red", marginLeft:"4px", marginTop:"2px"}}>*</span></label>
      <select onChange={handleMainCategoryChange} name="course" id="course" value={formData.course}  style={{marginBottom:"10px"}} required>
        <option value="" disabled>Select Course</option>
        <option value="AdvancedDiploma">Advanced Diploma</option>
        <option value="Diploma">Diploma</option>
      </select>

      {subOptions.length > 0 && (
        <>
          <label>Specialization</label>
          <select onChange={handleSubCategoryChange}  value={formData.specialization}name="specialization" id="specialization" required style={{marginBottom:"10px"}}>
            <option value="">Select Specialization</option>
            {subOptions.map((sub) => (
              <option key={sub.value} value={sub.value}>{sub.label}</option>
            ))}
          </select>
        </>
      )}
    </div>

    <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                    <label className="" for="comments" style={{marginBottom:"10px"}}>Comments</label>
                    <textarea
                      className="input-gray"
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
            </StickyBox>}

          </div>

        </div>
      </div>
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

