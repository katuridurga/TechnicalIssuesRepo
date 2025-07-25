import React, { useState, useEffect } from 'react'
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
import ReactWhatsappButton from "react-whatsapp-button";


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
      { value: "Computer Science & Game Development", label: "Computer Science & Game Development" },
      { value: "AR & VR", label: "AR & VR" }
    ],
    masters: [
      { value: "Master's in Game technology", label: "Master's in Game technology" }
    ],
    diploma: [
      { value: "Diploma in game development with unreal", label: "Diploma in game development with unreal" },
      { value: "Diploma in design & production", label: "Diploma in design & production" }
    ]


  };
 
  const [subOptions, setSubOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    PhoneNumber: '',
    email: '',
    city: '',
    qualification: '',
    comments: '',
    course: '',
    specialization: '',
    url: window.location.href,
    course_ttl: 7,// Initialize URL in state
  });

  const handleMainCategoryChange = (event) => {
    const selectedCategory = event.target.value;

   // setMainCategory(selectedCategory);
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

 


  const faqData = [
    {
      id: 0,
      question: "Is Unreal Engine free to use?",
      answer: "Yes, Unreal Engine is free to use with a royalty system applied when your game earns revenue."
    },
    {
      id: 1,
      question: "What programming languages does Unreal Engine use?",
      answer: "Unreal Engine primarily uses C++ for game programming and Blueprints for visual scripting."
    },
    {
      id: 2,
      question: "What are the system requirements for running Unreal Engine?",
      answer: "Unreal requires a powerful system with at least 8GB of RAM, a multi-core processor, and a modern GPU (NVIDIA GTX 770 or AMD Radeon RX 480 or higher)."
    },
    {
      id: 3,
      question: "What are the advantages of using Unreal Engine for game development?",
      answer: "Unreal offers superior graphical capabilities, a robust asset store, and an intuitive blueprint system for visual scripting."
    },
    {
      id: 4,
      question: " What is the difference between Unreal Engine 4 and Unreal Engine 5?",
      answer: "Unreal Engine 5 offers enhanced graphical features, including Nanite virtualized geometry, Lumen global illumination, and improved workflow tools."
    },
    {
      id: 5,
      question: "How do I create VR/AR experiences with Unreal Engine?",
      answer: "Unreal Engine provides built-in support for VR/AR development with tools and features tailored to creating immersive experiences."
    },
    {
      id: 6,
      question: "How do I optimize game performance in Unreal Engine?",
      answer: "Optimizing involves using the engine's profiling tools, optimizing assets, reducing draw calls, and efficiently managing memory usage."
    },
    {
      id: 7,
      question: "What are some challenges faced by Unreal Engine developers?",
      answer: "Challenges can include managing large, complex projects, optimizing performance, and handling Unreal's steep learning curve for new users."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title>Unreal Engine Development</title>
        <meta name="description" content="Learn Unreal Engine development, level design, C++, and more. Build immersive, high-quality games with expert training from scratch." />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>

            <a onClick={scrollToBottom} href="#CounsellingOnGamingCareer"> <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'Unreal-Developerm' : 'Unreal-Developer'}`}>
              {isMobileState ? <div className="CousellingButton10" style={{ position: "absolute", bottom: "-50px", left: "auto", marginBottom: "0px" }} onClick={scrollToBottom}><a style={{ padding: "12px 30px", width: "363px" }} href="#CounsellingOnGamingCareer">Enroll Now</a></div> : null}
            </div></a>

            <div className="mainrec22">
              <img src={recimg} alt="recimg" style={{marginTop:"10px"}} height={isMobileState ? "166" : "611"}
                width={isMobileState ? "414" : "1526"} />

            </div>

            <h2 className='mainHeadingTotall-2'>You can become an expert in Unreal Engine if you:
            </h2>

            <ul className='featuress2'>
              <li><img src={ic1} alt="ic1" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Are 10th or 12th Pass
                </div></li>
              <li><img src={ic2} alt="ic2" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Are excited by immersive environments

                </div></li>
              <li><img src={icg} alt="icg" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Are pursuing Graduation

                </div></li>
              <li><img src={ic4} alt="ic4" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Do/ do not know how to code

                </div></li>
              <li><img src={ic5} alt="ic5" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Driven by technical challenges

                </div></li>
              <li><img src={ic6} alt="ic6" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Have not taken Math in 12th

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
                <li><img src={B1} alt="B1" height={isMobileState ? "36" : "78"}
                  width={isMobileState ? "291" : "282"} />

                </li>

                <li><img src={B2} alt="B2" height={isMobileState ? "36" : "78"}
                  width={isMobileState ? "291" : "282"} />

                </li>

                <li><img height={isMobileState ? "36" : "78"}
                  width={isMobileState ? "291" : "282"} style={{ filter: "invert(1)" }} src={B3} alt="B3" />

                </li>

                <li><img height={isMobileState ? "36" : "78"}
                  width={isMobileState ? "291" : "282"} style={{ filter: "invert(1)" }} src={B4} alt="B4" />

                </li>
              </ul>}


            <h2 className='mainHeadingTotall-2'>Career Opportunities using Unreal

            </h2>

            <ul className='featuress3u'>
              <li><img src={ic7} alt="ic7" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Unreal Engine Developer

                </div></li>
              <li><img src={ic13} alt="ic13" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />
                <div className='featuresscon2'>Game Programmer

                </div></li>
              <li><img src={ic9} alt="ic9" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Technical Artist
                </div></li>
              <li><img src={ic8} alt="ic8" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />
                <div className='featuresscon2'>Level Designer
                </div></li>

              <li><img src={ic10} alt="ic10" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Gameplay Programmer


                </div></li>
              <li><img src={ic11} alt="ic11" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />
                <div className='featuresscon2'>Visual Effects Artist

                </div></li>
              <li><img src={ic12} alt="ic12" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Unreal Engine Specialist
                </div></li>
              <li><img src={ic14} alt="ic14" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>VR/AR Developer

                </div></li>
            </ul>

            <h2 className='mainHeadingTotall-2'>Learn from scratch to advanced level and build games like...</h2>

            <StudentGamesList />
            <div className={isMobileState ? "ismobtest" : "CousellingButton1"} onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>




            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
              <h2 className='mainHeadingTotall-2'>What will you learn?
              </h2>
              <div class="containeru">
                <div class="flexu">
                  <div class="btnu arrowu">
                    <a href="">Bachelor's</a>
                  </div>
                  <div class="btnu arrowu">
                    <a href="">Master’s</a>
                  </div>
                  <div class="btnu arrowu">
                    <a href="">Advanced Diploma</a>
                  </div>
                  <div class="btnu arrowu">
                    <a href="">Diploma</a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='mainHeadingTotall-2'>Essential concepts you’ll explore:
                </h2>
                <ul className='featuress3'>

                  <li><img src={ic7} alt="ic7" height={isMobileState ? "30" : "50"}
                    width={isMobileState ? "30" : "50"} />

                    <div className='featuresscon2'>Unreal Engine’s core features
                    </div></li>
                  <li><img src={ic13} alt="ic13" height={isMobileState ? "30" : "50"}
                    width={isMobileState ? "30" : "50"} />
                    <div className='featuresscon2'>Blueprint visual scripting system
                    </div></li>
                  <li><img src={ic9} alt="ic9" height={isMobileState ? "30" : "50"}
                    width={isMobileState ? "30" : "50"} />

                    <div className='featuresscon2'>C++ programming for Unreal

                    </div></li>
                  <li><img src={ic8} alt="ic8" height={isMobileState ? "30" : "50"}
                    width={isMobileState ? "30" : "50"} />
                    <div className='featuresscon2'>Level design and environment creation

                    </div></li>

                  <li><img src={ic10} alt="ic10" height={isMobileState ? "30" : "50"}
                    width={isMobileState ? "30" : "50"} />

                    <div className='featuresscon2'>Optimization techniques for performance
                    </div></li>


                </ul>
              </div>



            </div>


            <h2 className='mainHeadingTotall-2'>Our Students are working in Countries Like
            </h2>

            <div style={{ margin: '0px auto' }}>
              <ul className='CountryLogos'>
                <li><img src={Flag1} height={isMobileState ? "70" : "130"}
                  width={isMobileState ? "90" : "282"} alt="Flag1" />

                  {isMobileState ? '' : <div className='CountryLogos-2'>United States</div>}</li>

                <li><img src={Flag2} height={isMobileState ? "70" : "130"}
                  width={isMobileState ? "90" : "282"} alt="Flag2" />


                  {isMobileState ? '' : <div className='CountryLogos-2'>United Kingdom</div>}</li>

                <li><img src={Flag3} height={isMobileState ? "70" : "130"}
                  width={isMobileState ? "90" : "282"} alt="Flag4" />


                  {isMobileState ? '' : <div className='CountryLogos-2'>Canada</div>}</li>

                <li><img src={Flag4} height={isMobileState ? "70" : "130"}
                  width={isMobileState ? "90" : "282"} alt="Flag4" />


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

                      <p> </p>



                    </div> : null}


                    {faq.id === "5" ? <div className='faq2'>

                      <p> </p>



                    </div> : null}




                    {faq.id === "7" ? <div className='faq2'>
                      Challenges can include managing large, complex projects, optimizing performance, and handling Unreal's steep learning curve for new users.


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
                  <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">
                    <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                      <label className="" htmlFor="course">Course <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                      <select onChange={handleMainCategoryChange} name="course" id="course" value={formData.course} style={{ marginBottom: "10px", width: isMobileState ? "100%" : "100%" }} required>
                        <option value="" disabled>Select Course</option>
                        <option value="bachelor">Bachelor's</option>
                        <option value="masters">Master's</option>
                        <option value="diploma">Diploma</option>
                      </select>

                      {subOptions.length > 0 && (
                        <>
                          <label>Specialization</label>
                          <select onChange={handleSubCategoryChange} value={formData.specialization} name="specialization" id="specialization" style={{ width: isMobileState ? "100%" : "100%" }} required>
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
      </div>
      {isButtonVisible && (
        <div className="CousellingButton" onClick={scrollToBottom}><a href="#CounsellingOnGamingCareer">Get a Counselling Session on Gaming Career</a></div>)}
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

