import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import r1 from "../../../assets/img/partners/r1.png";
import r2 from "../../../assets/img/partners/r2.png";
import r4 from "../../../assets/img/partners/r4.png";
import r5 from "../../../assets/img/partners/r5.png";
import r6 from "../../../assets/img/partners/r6.svg";
import r7 from "../../../assets/img/partners/r7.png";
import advdip2S from '../../../assets/img/banners/GameDevS.webp';
import B1 from "../../../assets/img/banners/business-standard-logo.png";
import B2 from "../../../assets/img/banners/forbes-logo.webp";
import B3 from "../../../assets/img/banners/et-logo.webp";
import B4 from "../../../assets/img/banners/thehindu-logo.svg";
import csgd from "../../../assets/img/Courses/csgdc.webp"
import { Helmet } from "react-helmet";


import StudentGamesList from "../../../content/StudentGamesList";
import MIntheMedia from "../../../content/MIntheMedia";
import ReactWhatsappButton from "react-whatsapp-button";
import Flag1 from "../../../assets/img/banners/usa.webp";
import Flag2 from "../../../assets/img/banners/uk.webp";
import Flag3 from "../../../assets/img/banners/canada.webp";
import Flag4 from "../../../assets/img/banners/sweden.webp";
import advdip1v from '../../../assets/img/banners/advdip1.webp';
import Marquee from "react-fast-marquee";
import axios from 'axios';
import { useSelector, shallowEqual } from "react-redux";
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import recimg from '../../../assets/img/banners/Times-Award.webp';
import Typography from '@mui/material/Typography';

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import advdip from '../../../assets/img/banners/GameDevmain.webp';
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
import gd11 from "../../../assets/img/art/Echoes-Dead.webp";
import gd22 from "../../../assets/img/art/Evolve.webp";
import gd33 from "../../../assets/img/art/Portal-Drifters.webp";
import gd44 from "../../../assets/img/art/Warbound.webp";
import gd55 from "../../../assets/img/art/Chaos-Reborn.webp";
import gd66 from "../../../assets/img/art/wobble-Gobble.webp";
import gd77 from "../../../assets/img/art/Slunkey.webp";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";
import m1 from "../../../assets/img/test/1.webp";
import m2 from "../../../assets/img/test/2.webp";
import flag7 from "../../../assets/img/partners/software-logo/Maya.webp";
import flag8 from "../../../assets/img/partners/software-logo/Photoshop.webp";
import flag9 from "../../../assets/img/partners/software-logo/Substance-Painter.webp";
import flag10 from "../../../assets/img/partners/software-logo/Unreal-Engine.webp";
import flag11 from "../../../assets/img/partners/software-logo/ZBrush.webp";
import GAIMG4 from "../../../assets/img/partners/Icons/CharacterArtDigitalSculpting.webp";
import MscGameTechnology from "../../../assets/img/Courses/MscGameTechnology.webp"
import AdvancedDiplomainGameDevelopment from "../../../assets/img/Courses/AdvancedDiplomainGameDevelopment.webp"
import DiplomainGameDevelopmentwithUnity from "../../../assets/img/Courses/DiplomainGameDevelopmentwithUnity.webp"

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
    course:'',
    specialization:'',
    url: window.location.href,
    comments: '',
    course_ttl: 10,// Initialize URL in state
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
        course:'',
        specialization:'',
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
    ],
    masters: [
      { value: "msc", label: "Master’s Game Technology" }
    ],
    advancedDiploma: [
      { value: "gd", label: " Game Development" },
      { value: "3dgame", label: "3D Game Art & Digital Sculpting" },
      { value: "tdca", label: "Traditional & Digital Concept Art" }
    ],
    
    diploma: [
      { value: "gdp", label: "Game Design & Production" },
      { value: "gdu", label: "Game Development with Unity" },
      { value: "3dart", label: "3D Environment Art For Games" },
      { value: 'gdunreal', label: 'Game Development with Unreal' },
    ]
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
      question: "What is the role of a 3D Artist in game development?",
      answer: "A 3D Artist creates the visual assets for a game, such as characters, objects, and environments, in three dimensions, adding realism and immersion."
    },
    {
      id: 1,
      question: "What is the role of a Graphic Programmer in game development?",
      answer: "Graphic Programmers focus on the visual aspects of a game, optimizing rendering, implementing shaders, and creating visual effects."
    },
    {
      id: 2,
      question: "What is the process of creating character models for a game?",
      answer: "Character modeling involves conceptualizing designs, sculpting in 3D software, texturing, rigging, and integrating models into the game engine."
    },
    {
      id: 3,
      question: "What is the difference between a Game Designer and a Level Designer?",
      answer: "A Game Designer focuses on gameplay mechanics, while a Level Designer creates the actual levels, ensuring they fit the game’s narrative and mechanics."
    },
    {
      id: 4,
      question: "What are some challenges AI Programmers face in game development?",
      answer: "Challenges include creating responsive, realistic AI behaviors, optimizing performance, and ensuring that AI systems feel natural and fun for players."
    },
    {
      id: 5,
      question: "What is the difference between linear and non-linear game design?",
      answer: "Linear game design follows a set path, while non-linear design offers players more freedom to explore and choose how they progress."
    },
    {
      id: 6,
      question: "What are some common techniques used in digital sculpting for game art?",
      answer: "Techniques include using tools like ZBrush for creating detailed models, sculpting high-resolution assets, and optimizing them for game engines."
    },
    {
      id: 7,
      question: "How does a Game Producer balance creativity and project management??",
      answer: "A Game Producer ensures the creative vision is met while managing timelines, budgets, and team coordination to ensure smooth production."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title> Become a Game Developer</title>
        <meta name="description" content="Kickstart your career in game development. Learn programming, 3D modeling, AR/VR, and more with expert training and hands-on experience." />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>

            {/* <a onClick={scrollToBottom} href="#CounsellingOnGamingCareer"> <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'Game-Developmentm' : 'Game-Development'}`}>
              {isMobileState ? <div className="CousellingButton10" style={{ position: "absolute", bottom: "-50px", left: "auto", marginBottom: "0px" }} onClick={scrollToBottom}><a style={{ padding: "12px 30px", width: "363px" }} href="#CounsellingOnGamingCareer">Enroll Now</a></div> : null}
            </div></a> */}
               <div style={{background:"#000",color:"#fff"}}>
             <h1 className='maintext' style={{textTransform: "capitalize", marginBottom:isMobileState ? "25px" : "0px"}}>Make a Career in Gaming that pays you from 3 LPA to  30 LPA*
              </h1>
              </div>
       
            <div className="maincls">
              <div className='mainv'>
              <div className='MainVideoSection'>
        
        <div className="videomain2">
          <video ref={videoRef} controls loop>
            <source src="https://www.backstagepass.co.in/landingpage/gamedevi.mp4" type="video/mp4" />

          </video>


          {!isPlaying && (
            <img
              src={advdip}
              className="overlay-image2-1"
              alt="advdip"
              height={isMobileState ? "100" : "720"} 
        width={isMobileState ? "100" : "1221"}
        style={{objectFit:"contain", objectPosition:"center"}}
              onClick={handlePlayMain} // Handle the click to play the video
              
            />
          )}
        </div>
      </div> 
            </div>
            <div>
            <div className='fom-ad-2' id="CounsellingOnGamingCareer" style={{marginTop:isMobileState ? "25px" : "70px"}}>


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

    <div className="formGrid-c" data-form-id="need-guidance" data-form="step1-container">
    
    <div className="" style={{ width: isMobileState ? "100%" :"100%"}}>
                  <label className="" for="email">Course <span style={{color:"red", marginLeft:"4px", marginTop:"2px"}}>*</span></label>
      <select onChange={handleMainCategoryChange} name="course" id="course" value={formData.course}  style={{marginBottom:"10px", width: isMobileState ? "100%" :"100%"}} required>
        <option value="" disabled>Select Course</option>
        <option value="bachelor">Bachelor's</option>
        <option value="masters">Master's</option>
        <option value="advancedDiploma">Advanced Diploma</option>
        <option value="diploma">Diploma</option>
      </select>

      {subOptions.length > 0 && (
        <>
          <label>Specialization</label>
          <select onChange={handleSubCategoryChange}  value={formData.specialization}name="specialization" id="specialization" style={{ width: isMobileState ? "100%" :"100%"}} required>
            <option value="">Select Specialization</option>
            {subOptions.map((sub) => (
              <option key={sub.value} value={sub.value}>{sub.label}</option>
            ))}
          </select>
        </>
      )}
    </div>
    </div>
    <div className="formGrid-c" data-form-id="need-guidance" data-form="step1-container">
    <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                    <label className="" for="comments">Comments</label>
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
            <div className="mainrec22" style={{marginTop: isMobileState ? "0px" : "0px"}}>
              <img src={recimg} alt="recimg" height={isMobileState ? "166" : "611"} 
              width={isMobileState ? "414" : "1526"} />

            </div>

            <h2 className='mainHeadingTotall-2'>You are eligible for a career in Game Development if you
            </h2>

            <ul className='featuress2'>
              <li><img src={ic1} alt="ic1" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Are 10th or 12th Pass
                </div></li>
              <li><img src={ic2} alt="ic2"  height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Are pursuing graduation

                </div></li>
              <li><img src={icg} alt="icg" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Did not take Math in 12th

                </div></li>
              <li><img src={ic4} alt="ic4" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Do/do not know coding

                </div></li>
              <li><img src={ic5} alt="ic5" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon2'>Are a problem-solver

                </div></li>
              <li><img src={ic6} alt="ic6" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Are a strategic thinker

                </div></li>
            </ul>

           

 <h2 className='mainHeadingTotall-2'>What Our Alumni And Game Companies Say</h2>

              <div className='maincls'>
              <div className='mainv'>
            <div className='MainVideoSection1'>
             
              <div className="videomain21i">
              <video ref={videoRefI} controls loop style={{width:isMobileState ?"100%" : "700px",height:"auto"}}>
                  <source src="https://www.backstagepass.co.in/landingpage/industryv.mp4" type="video/mp4" />

                </video>


                {!isPlayingI && (
                  <img
                    src={advdip1v}
                    style={{objectFit: isMobileState ? "fill":"contain",position:isMobileState ?"absolute":"absolute"}}
                    className="overlay-image2-1gs"
                    alt="advdip1v"
                    height={isMobileState ? "233" : "545"} 
              width={isMobileState ? "414" : "725"}
                    onClick={handlePlayIndustry} // Handle the click to play the video
                  />
                )}
              </div>
            </div> 
            </div>
            <div className='mainv'>
            <div className='MainVideoSection1s'>
             
              <div className="videomain21i">
               
              <video ref={videoRefS} controls loop style={{width:isMobileState ?"100%" : "700px",height:"auto"}}>
                  <source src="https://www.backstagepass.co.in/landingpage/ggamedevs.mp4" type="video/mp4" />

                </video>


                {!isPlayingS && (
                  <img
                    src={advdip2S}
                    style={{objectFit: isMobileState ? "fill":"contain", position:isMobileState ?"absolute":"absolute"}}
                    className="overlay-image2-1gs"
                    alt="advdip2S"
                    height={isMobileState ? "233" : "545"} 
              width={isMobileState ? "414" : "725"}
                    onClick={handlePlayStudent} // Handle the click to play the video
                  />
                )}
              </div>
            </div> 
            </div>
            
              </div>
            <h2 className='mainHeadingTotall-2'>In the Media</h2>

            {isMobileState ? <MIntheMedia /> :

              <ul className='CountryLogoss'>
                <li><img src={B1} alt="B1" height={isMobileState ? "36" : "78"} 
              width={isMobileState ? "291" : "282"}/>

                </li>

                <li><img src={B2} alt="B2" height={isMobileState ? "36" : "78"} 
              width={isMobileState ? "291" : "282"}/>

                </li>

                <li><img style={{ filter: "invert(1)"}} src={B3} alt="B3" height={isMobileState ? "36" : "78"} 
              width={isMobileState ? "291" : "282"} />

                </li>

                <li><img style={{ filter: "invert(1)"}} src={B4} alt="B4" height={isMobileState ? "36" : "78"} 
              width={isMobileState ? "291" : "282"} />

                </li>
              </ul>}


            <h2 className='mainHeadingTotall-2'>Career Options in Game Development

            </h2>

            <ul className='featuress3u'>
              <li><img src={ic7} alt="ic7" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon2'>Game Programmer

                </div></li>
              <li><img src={ic13} alt="ic13" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>
                <div className='featuresscon2'>AR Developer

                </div></li>
              <li><img src={ic9} alt="ic9" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon2'>Game Designer
                </div></li>
              <li><img src={ic8} alt="ic8" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />
                <div className='featuresscon2'>3D Modeler
                </div></li>

              <li><img src={ic10} alt="ic10" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Digital Sculptor

                </div></li>
              <li><img src={ic11} alt="ic11" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>
                <div className='featuresscon2'>Metaverse Developer

                </div></li>
              <li><img src={ic12} alt="ic12" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon2'>Concept Artist

                </div></li>
             <li><img src={ic14} alt="ic14" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon2'>AR/VR Game Developer


                </div></li>
            </ul>

            <h2 className='mainHeadingTotall-2'>Learn from scratch to advanced level and build games like...</h2>

            <StudentGamesList />
            {/* <div className={isMobileState ? "CousellingButton1 ismobtest" : "CousellingButton1"} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career Test</a></div> */}




            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
           
                <div>
                <h2 className='mainHeadingTotall-2'>Essential concepts you’ll explore:
                  </h2>
                <ul className='featuress3'>
                  
              <li><img src={ic7} alt="ic7" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Core Computer Science subjects
                </div></li>
              <li><img src={ic13} alt="ic13" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>
                <div className='featuresscon2'>Game design and production pipeline

                </div></li>
              <li><img src={ic9} alt="ic9" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Traditional and digital art techniques


                </div></li>
              <li><img src={ic8} alt="ic8" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>
                <div className='featuresscon2'>2D and 3D art asset creation for games

                </div></li>

              <li><img src={ic10} alt="ic10" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon2'>Advanced graphics programming using IDEs like OpenGL

                </div></li>
         
             
            </ul>
            </div>



            </div>

            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
              <h2 className='mainHeadingTotall-2'>Explore our Game Development program options

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
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", width: isMobileState ? "23%" : "auto" }} label="Master's" />
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Advanced Diploma Courses" />
                  <Tab style={{ color: "#fff", fontSize: isMobileState ? "11px" : "15px", fontFamily: "Montserrat, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }} label="Diploma Courses" />
                </Tabs>

                <TabPanel value={value1} index={0} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto", padding: "0px 8px" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon"/>
                        <span>Duration: 4 Years</span></li>
                      <li><img src={m2} alt="Eligibility icon"  />
                        <span>Eligibility: 10+2 or Equivalent *</span></li>

                    </ul>
                    {/* <p style={{ color: "#fff", textAlign: "center" }}>*The eligibility criteria for each Bachelor's course varies based the curriculum. Please check the criteria for the course you want to opt for before applying.</p> */}
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
                                     <li><img src={m1} alt="Duration icon"/>
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
                  

                </TabPanel>

                <TabPanel value={value1} index={3} dir={theme.direction} style={{ width: isMobileState ? "100%" : "85%", margin: "0 auto", padding: "0px 8px" }}>
                  <div className='courseUpdatesl'>
                    <ul>
                      <li><img src={m1} alt="Duration icon" />
                        <span>Duration: 6 months</span></li>
                      <li><img src={m2} alt="Eligibility icon" />
                        <span>Eligibility: 10+2 or Equivalent</span></li>


                    </ul>
                  </div>
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
              
                
                </TabPanel>

   <div className='toolsa'>
                <h2 className='mainHeadingTotall-2'>Essential concepts you’ll explore:
                  </h2>
                <ul className='featuress3'>
                  
              <li style={{paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null}}><img src={ic7} alt="ic7" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon22'>Traditional and digital art techniques


                </div></li>
              <li style={{paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null}}><img src={ic13} alt="ic13" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>
                <div className='featuresscon22'>3D Modeling & Texturing Techniques


                </div></li>
              <li style={{paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null}}><img src={ic9} alt="ic9" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"} />

                <div className='featuresscon22'>Environment Art & Optimization


                </div></li>
                <li style={{paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null}}><img src={GAIMG4} alt="GAIMG4" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon22'>Character Art & Digital Sculpting

                </div></li>
              <li style={{paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null}}><img src={ic8} alt="ic8" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>
                <div className='featuresscon22'>Lighting and Shading Fundamentals

                </div></li>

              <li style={{paddingBottom: isMobileState ? "10px" : null, paddingTop: isMobileState ? "10px" : null}}><img src={ic10} alt="ic10" height={isMobileState ? "30" : "50"} 
              width={isMobileState ? "30" : "50"}/>

                <div className='featuresscon22'>Industry-standard tools like Maya, ZBrush, Substance Painter, Marmoset toolbag, Photoshop, Unreal Engine etc.



                </div></li>
         
               
            </ul>
            <div className="featuress31" style={{ margin: '0px auto',display:"flex",alignItems:"center", padding: isMobileState ? "20px" : null }}>
              <ul className='CountryLogos21g' style={{width: isMobileState ? "100%":"55%" ,margin: '0px auto',display:"flex",alignItems:"center",justifyContent:"center" }}>
                <li><img alt="marmoset" src={"https://tse2.mm.bing.net/th?id=OIP.atSrendp8pQnMsT3wdwedgAAAA&pid=Api&P=0&h=220"} height={isMobileState ? "43" : "95"} 
              width={isMobileState ? "42" : "94"} />

                </li>

                <li><img src={flag7} alt="flag7" height={isMobileState ? "43" : "95"} 
              width={isMobileState ? "42" : "94"} />


                  </li>

                <li><img src={flag8} alt="flag8" height={isMobileState ? "43" : "95"} 
              width={isMobileState ? "42" : "94"} />


                  </li>

                <li><img src={flag9} alt="flag9" height={isMobileState ? "43" : "95"} 
              width={isMobileState ? "42" : "94"} />


                  </li>
                  <li><img src={flag10} alt="flag10" height={isMobileState ? "43" : "95"} 
              width={isMobileState ? "42" : "94"}  />
                  </li>
<li><img src={flag11} alt="flag11" height={isMobileState ? "43" : "95"} 
              width={isMobileState ? "42" : "94"}  style={{background:"#cccc",padding:"4px"}}/>


</li>
              </ul>
            </div>
            </div>
              </Box>

       

            </div>
 <div className="" style={{flexDirection:"column",marginTop: isMobileState ? "-22px":"0px"}}>
   
            <h2 className="mainHeadingTotall-2">Student Artwork</h2>

{isMobileState ? <div>
  <div>
    <ul className='mbimg1g'>
      <li><img src={gd11} alt="gd11" style={{width:"100%", height:"100%"}}/></li>
      <li><img src={gd33} alt="gd33" style={{width:"100%", height:"100%"}}/></li>
      <li><img src={gd22} alt="gd22" style={{width:"100%", height:"100%"}}/></li>
      <li><img src={gd44} alt="gd44" style={{width:"100%", height:"100%"}}/></li>
      <li><img src={gd55} alt="gd55" style={{width:"100%", height:"100%"}} /></li>
      <li><img src={gd66} alt="gd66" style={{width:"100%", height:"100%"}} /></li>
      <li><img src={gd77} alt="gd77" style={{width:"100%", height:"100%"}} /></li>
      
    </ul>
  </div>
</div> :

            <div className="containerg">


  <div className="gallery">

    <div className="gallery-item">
      <img className="gallery-image" src={gd77} alt="gd77" height="209" 
                    width="372"/>
    </div>

    <div className="gallery-item">
      <img className="gallery-image"  src={gd33} alt="gd33" height="209" 
                    width="372"/>
    </div>

    <div className="gallery-item">
      <img className="gallery-image" src={gd55} alt="gd55" height="209" 
                    width="372"/>
    </div>

    <div className="gallery-item">
      <img className="gallery-image"  src={gd44} alt="gd44" height="470" 
                    width="372"/>
    </div>

    <div className="gallery-item">
      <img className="gallery-image"  src={gd66} alt="gd66" height="470" 
                    width="372"/>
    </div>

    <div className="gallery-item">
      <img className="gallery-image" src={gd22} alt="gd22" height="470" 
                    width="372"/>
    </div>
  
  </div>

</div>}

</div>

            <h2 className='mainHeadingTotall-2'>Our Students are working in Countries Like
            </h2>

            <div style={{ margin: '0px auto' }}>
              <ul className='CountryLogos'>
                <li><img src={Flag1}  height={isMobileState ? "70" : "130"} 
              width={isMobileState ? "90" : "282"} alt="Flag1"/>

                  {isMobileState ? '' : <div className='CountryLogos-2'>United States</div>}</li>

                <li><img src={Flag2}  height={isMobileState ? "70" : "130"} 
              width={isMobileState ? "90" : "282"} alt="Flag2"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>United Kingdom</div>}</li>

                <li><img src={Flag3}  height={isMobileState ? "70" : "130"} 
              width={isMobileState ? "90" : "282"} alt="Flag3"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Canada</div>}</li>

                <li><img src={Flag4}  height={isMobileState ? "70" : "130"} 
              width={isMobileState ? "90" : "282"} alt="Flag4"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Sweden</div>}</li>
              </ul>
            </div>
            <h2 className='mainHeadingTotall-2'>Our Students are working at Companies like</h2>

            <Marquee speed={100} style={{ Padding: "0px 20px" }} className='recuitersList-20'>
              <img alt="r1" src={r1} height="61"  
              width="210"/>
              <img alt="r2" src={r2} height="61"  
              width="210"/>
              {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}
              <img alt="r4" src={r4} height="61"  
              width="210"/>
              <img alt="r5" src={r5} height="61"  
              width="210" />
              <img alt="r6" src={r6} height="61"  
              width="210" />
              <img alt="r7" src={r7} height="61"  
              width="210" />

            </Marquee>

            {/* <div className="CousellingButton1 TestM" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div> */}
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
                        </li>

                      </ul>

                    </div> : null}

                    {faq.id === "4" ? <div className='faq2'>

                      <p> </p>



                    </div> : null}


                    {faq.id === "5" ? <div className='faq2'>

                      <p> </p>



                    </div> : null}




                    {faq.id === "7" ? <div className='faq2'>
              
                      A Game Producer ensures the creative vision is met while managing timelines, budgets, and team coordination to ensure smooth production.

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






           

          </div>


        </div>
      </div>
      {isButtonVisible && (
        <div className="CousellingButton" style={{display:"flex", justifyContent:isMobileState ? "center" : "center"}} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>)}
<div className="App">
        <ReactWhatsappButton
          countryCode="91"
          phoneNumber="8977945705"
          style={{ right: isMobileState ? "1.5rem" : "2rem", marginBottom: isMobileState ? "4rem" : "-1rem", zIndex: "11111" }}
          className="whatsappsivak"
        />

      </div>
    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

