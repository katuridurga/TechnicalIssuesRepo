import React, { useState, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import { FaWhatsapp } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.png";
import r2 from "../../../assets/img/partners/r2.png";
import r4 from "../../../assets/img/partners/r4.png";
import r5 from "../../../assets/img/partners/r5.png";
import r6 from "../../../assets/img/partners/r6.svg";
import r7 from "../../../assets/img/partners/r7.png";
import superg from "../../../assets/img/partners/supergaming.png";
import rock from "../../../assets/img/partners/2.webp";
import B1 from "../../../assets/img/banners/business-standard-logo.png";
import B2 from "../../../assets/img/banners/forbes-logo.webp";
import B3 from "../../../assets/img/banners/et-logo.webp";
import B4 from "../../../assets/img/banners/thehindu-logo.svg";
import { Helmet } from "react-helmet";

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import StudentGamesList from "../../../content/StudentGamesList";
import MIntheMedia from "../../../content/MIntheMedia";

import Flag1 from "../../../assets/img/banners/usa.webp";
import Flag2 from "../../../assets/img/banners/uk.webp";
import Flag3 from "../../../assets/img/banners/canada.webp";
import Flag4 from "../../../assets/img/banners/sweden.webp";



import axios from 'axios';
import FeaturedProductL from "../../../content/FeaturedProductL.js";
import { useSelector, shallowEqual } from "react-redux";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import recimg from '../../../assets/img/banners/Times-Award.webp';
import Typography from '@mui/material/Typography';

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const options = {
    bachelor: [
      { value: "csgameDevelopment", label: "Computer Science & Game Development" },
      { value: "arvr", label: "AR & VR" }
    ],
    masters: [
      { value: "msc", label: "Master's in Game technology" }
    ],
    diploma: [
      { value: "gdu", label: "Game Development with Unity" }
    ],
    advancedDiploma: [
      { value: "gd", label: " Game Development" }
    ]
      
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
  comments: '',
    url: window.location.href,
    course_ttl: 8,// Initialize URL in state
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

  const faqData = [
    {
      id: 0,
      question: "What is Unity and how is it different from other game engines?",
      answer: "Unity is a game engine used to create both 2D and 3D games. It's known for its user-friendly interface, cross-platform capabilities, and wide range of supported devices."
    },
    {
      id: 1,
      question: "Can I create 3D games with Unity?",
      answer: "Yes, Unity supports both 2D and 3D game development, offering tools to create immersive 3D experiences."
    },
    {
      id: 2,
      question: "What is the difference between Unity and Unreal Engine?",
      answer: "Unity is known for its ease of use and flexibility, especially for mobile and indie games. Unreal Engine offers more powerful graphics and is often preferred for AAA games and high-end visual effects."
    },
    {
      id: 3,
      question: "What is the primary scripting language used in Unity?",
      answer: "Unity primarily uses C# for scripting game logic and behaviors."
    },
    {
      id: 4,
      question: " How do I use Unity for VR/AR development?",
      answer: "Unity offers robust support for VR/AR development with its built-in XR (Extended Reality) tools, allowing you to create immersive experiences across various VR and AR platforms."
    },
    {
      id: 5,
      question: "How do Graphic Programmers use Unity to create visual effects?",
      answer: "Graphic programmers use Unity’s rendering features, shaders, particle systems, and lighting tools to create visually stunning effects within the game."
    },
    {
      id: 6,
      question: "How do you implement AI navigation in Unity?",
      answer: "Unity’s NavMesh system helps implement AI navigation, allowing characters to move intelligently within a 3D environment."
    },
    {
      id: 7,
      question: "What are the most popular Unity-based game genres?",
      answer: "Unity is widely used for platformers, mobile games, puzzle games, and 3D open-world games."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title> Master Unity Game Development </title>
        <meta  name="description" content="Learn Unity game programming, AI, AR/VR, and more. From beginner to expert, build games using industry-leading Unity engine skills.
" />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>

            <a onClick={scrollToBottom} href="#CounsellingOnGamingCareer"> <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'Unity-Developerm' : 'Unity-Developer'}`}>
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
              <img src={recimg} alt="recimg" style={{ width: "100%", height: "100%"}} />

            </div>

            <h2 className='mainHeadingTotall-2'>You are eligible to learn the Unity Game Engine if you
            </h2>

            <ul className='featuress2'>
              <li><img src={ic1} alt="ic1" />

                <div className='featuresscon2'>Are 10th or 12th Pass
                </div></li>
              <li><img src={ic2} alt="ic1" />

                <div className='featuresscon2'>Are Pursuing Graduation

                </div></li>
              <li><img src={icg} alt="ic1" style={{ height: isMobileState ? "30px" : "50px", width: isMobileState ? "30px" : "50px" }} />

                <div className='featuresscon2'>Have not taken Math in 12th


                </div></li>
              <li><img src={ic4} alt="ic1" />

                <div className='featuresscon2'>Do/do not know how to code

                </div></li>
              <li><img src={ic5} alt="ic1" />

                <div className='featuresscon2'>Are passionate about games

                </div></li>
              <li><img src={ic6} alt="ic1" />

                <div className='featuresscon2'>Are Inspired by technology

                </div></li>
            </ul>

            {/* <div className='chapters' id="chapters1" style={{height:isMobileState ? '1140px':'480px' }}>

                

                <FeaturedProducts />

              </div> */}

            <div className='' id="">
              <FeaturedProductL />
              {/* <Awards /> */}

              <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>
            </div>


            <h2 className='mainHeadingTotall-2'>In the Media</h2>

            {isMobileState ? <MIntheMedia /> :

              <ul className='CountryLogoss'>
                <li><img src={B1} alt="b1" />

                </li>

                <li><img src={B2} alt="b2"/>

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B3} alt="b3"/>

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B4} alt="b4"/>

                </li>
              </ul>}


            <h2 className='mainHeadingTotall-2'>Professional Paths with Unity Engine

            </h2>

            <ul className='featuress3u' style={{backgroundColor:"#222"}}>
              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>Game Programmer

                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Unity Developer

                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Gameplay Programmer
                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Graphic Programmer
                </div></li>

              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>AI Programmer

                </div></li>
              <li><img src={ic11} alt="ic1" />
                <div className='featuresscon2'>Game Engine Programmer
                </div></li>
              <li><img src={ic12} alt="ic1" />

                <div className='featuresscon2'>AR-VR Developer

                </div></li>



              <li><img src={ic14} alt="ic1" />

                <div className='featuresscon2'>Game Designer

                </div></li>
            </ul>

            {/* <h2 className='mainHeadingTotall-2'>Learn from scratch to advanced level and build games like...</h2>

            <StudentGamesList /> */}
            <div className={isMobileState ? " ismobtest" : "CousellingButton1"} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>




            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
              <h2 className='mainHeadingTotall-2'>Explore our Unity program options
              </h2>
              <div class="containeru">
  <div class="flexu">
    <div class="btnu arrowu">
      <a href="/courses/">Bachelor's</a>
    </div>
    <div class="btnu arrowu">
      <a href="/courses/">Master’s</a>
    </div>
    <div class="btnu arrowu">
      <a href="/courses/">Advanced Diploma</a>
    </div>
    <div class="btnu arrowu">
      <a href="/courses/">Diploma</a>
    </div>
  </div>
  </div>
             
                <div>
                <h2 className='mainHeadingTotall-2'>Essential concepts you’ll explore:
                  </h2>
                <ul className='featuress3'>
                  
              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>Unity's basic features
                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>AI navigation, timeline, render pipeline
                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Core programming languages like C++ and C#

                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Optimization techniques

                </div></li>

              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Modern computer graphics
                </div></li>
         
             
            </ul>
            </div>

          

            </div>


            <h2 className='mainHeadingTotall-2'>Our Students are working in Countries Like
            </h2>

            <div style={{ margin: '0px auto' }}>
              <ul className='CountryLogos'>
                <li><img src={Flag1}  style={{width:"100%", height:isMobileState ?"100%":"130px"}} alt="Flag1"/>

                  {isMobileState ? '' : <div className='CountryLogos-2'>United States</div>}</li>

                <li><img src={Flag2}  style={{width:"100%", height:isMobileState ?"100%":"130px"}} alt="Flag2"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>United Kingdom</div>}</li>

                <li><img src={Flag3}  style={{width:"100%", height:isMobileState ?"100%":"130px"}} alt="Flag3"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Canada</div>}</li>

                <li><img src={Flag4}  style={{width:"100%", height:isMobileState ?"100%":"130px"}} alt="Flag4"/>


                  {isMobileState ? '' : <div className='CountryLogos-2'>Sweden</div>}</li>
              </ul>
            </div>
            <h2 className='mainHeadingTotall-2'>Our Students are working at Companies like</h2>

            <Marquee speed={100} style={{Padding: "0px 20px" }} className='recuitersList-20'>
                    <img alt="rock" src={rock} width={"300"} height={"81"} />
              <img alt="superg" src={superg} width={"300"} height={"81"} />
              <img alt="rec1" src={r1} width={"300"} height={"81"} />
              <img alt="rec2" src={r2} width={"300"} height={"81"} />
              <img alt="rec4" src={r4} width={"300"} height={"81"} />
              <img alt="rec5" src={r5} width={"300"} height={"81"} />
              <img alt="rec9" src={r6} width={"300"} height={"81"} />
              <img alt="rec10" src={r7} width={"300"} height={"81"} />

            </Marquee>

            <div id="nopadding" className="CousellingButton1 TestM" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>
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


                    </div> : null}


                    {faq.id === "5" ? <div className='faq2'>

                      <p> </p>



                    </div> : null}




                    {faq.id === "7" ? <div className='faq2'>
                      Unity is widely used for platformers, mobile games, puzzle games, and 3D open-world games.


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






            <div className='fom-ad-2' id="CounsellingOnGamingCareer">


              <div className='containers-2'>





                <form onSubmit={handleSubmit} className="formMain">

                  <p className="suprtsMobiless" style={{color:"#fff"}}>Get <b>a Counselling</b> Session on Gaming Career</p>
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
                  <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">
                  <div className="" style={{ width: isMobileState ? "100%" :"100%"}}>
                  <label className="" htmlFor="course">Course <span style={{color:"red", marginLeft:"4px", marginTop:"2px"}}>*</span></label>
      <select onChange={handleMainCategoryChange} name="course" id="course" value={formData.course}  style={{marginBottom:"10px", width: isMobileState ? "100%" :"100%"}} required>
        <option value="" disabled>Select Course</option>
        <option value="bachelor">Bachelor's</option>
        <option value="masters">Master's</option>
        <option value="diploma">Diploma</option>
        <option value="advancedDiploma">Advanced Diploma</option>


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
                      style={{ color: '#5a555a' }}
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
      </div>
      {isButtonVisible && (
        <div className="CousellingButton" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Enroll Now</a></div>)}
<div className="App">
        <a
          countryCode="91"
          phoneNumber="8977945705"
          style={{ right: isMobileState ? "1.5rem" : "2rem", marginBottom: isMobileState ? "4rem" : "-1rem", zIndex: "11111" }}
          className="whatsappsivakl">
          <FaWhatsapp  style={{ color: "#fff", fontSize: "32px" }} />

</a>
      </div>
    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

