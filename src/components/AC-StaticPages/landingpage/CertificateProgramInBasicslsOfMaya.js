import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import ic13 from '../../../assets/img/Icons/WEBSITE-ICON/Environment.webp';
import Box from '@mui/material/Box';


import axios from 'axios';
import { useSelector, shallowEqual } from "react-redux";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

import ic7 from '../../../assets/img/Icons/WEBSITE-ICON/3D_Game_Asset.webp';
import ic8 from '../../../assets/img/Icons/WEBSITE-ICON/3D_Prop.webp';
import ic9 from '../../../assets/img/Icons/WEBSITE-ICON/3d-modelling.webp';
import ic10 from '../../../assets/img/Icons/WEBSITE-ICON/abroad-opportunities.webp';






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

  const [isOpenM, setIsOpenM] = useState(false);

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




  const handleClickss = () => {
    // Redirect to the '/new-page' route
   // window.open('https://backstagepass.co.in/landingpage/short-course/', '_blank');
   window.open('/landingpage/short-course/', '_blank');
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

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    PhoneNumber: '',
    email: '',
    url: window.location.href,
    course_ttl: 11,// Initialize URL in state
    course_duration: 'shortterm',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOpen(true); // Assuming you want to show a modal upon submission

    try {
      const response = await axios.post("https://www.backstagepass.co.in/reactapi/downloadbroucher.php", formData);
      console.log(response);
      if (response.status === 200) {
        setOpen(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
      // Assuming the response indicates success
      // alert("Your data was submitted successfully!");

      // Reset form data
      setFormData({
        firstname: '',
        lastname: '',
        PhoneNumber: '',
        email: '',
        url: window.location.href, // Reset URL
        course_duration: 'shortterm',
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
  // const handleDownload = () => {
  //   // For example, triggering a download of a file (replace with your own file URL or logic)
  //   const fileUrl = 'https://www.backstagepass.co.in/brouchers/UNITY-compressed.pdf'; // Replace with your file URL or logic
  //   const link = document.createElement('a');
  //   link.href = fileUrl;
  //   link.download = 'UNITY-compressed.pdf'; // You can specify the name of the file you want to download
  //   link.click();
  // };
  const downloadLink = 'https://www.backstagepass.co.in/brouchers/UNITY-compressed.pdf';
  const handleDownload = () => {
    const fileContent = "This is the content of your file"; // Example content
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const downloadLink = URL.createObjectURL(blob); // Create a URL for the Blob

    // Create an anchor element programmatically to trigger the download
    const a = document.createElement('a');
    a.href = downloadLink;
    a.target = "_blank";
    a.download = "UNITY-compressed.pdf"; // Set the default file name
    document.body.appendChild(a);
    a.click(); // Simulate click to download
    document.body.removeChild(a); // Clean up
    handleClose();
    window.location.reload();
  };





  return (
    <>
      <Helmet>
        <title>  Basics of Maya Certificate Course | Modeling Tools, UV Mapping & Texturing
        </title>
          <meta property="og:title" content="Basics of Maya Certificate Course | Modeling Tools, UV Mapping & Texturing" />
        <meta name="description" content="Start your 3D journey with Maya. Learn modeling tools, UV unwrapping and texturing to create assets for games and animation." />
        <link rel="canonical" href="https://backstagepass.co.in/landingpage/certificate-program-in-basics-of-maya/" />
         <meta property="og:url" content="https://backstagepass.co.in/landingpage/certificate-program-in-basics-of-maya/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "10px auto" : "0px auto" }}>



            <a onClick={scrollToBottom}>
              <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'basicsofmayamc' : 'basicsofmaya'}`}>

                <div className="et_pb_row et_pb_row_0">
                  <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                    <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                      <div className="et_pb_text_inner"><h1 className="title white-txt">Certificate Program in Basics of Maya</h1></div>
                    </div>
                  </div>
                </div>
              </div>

            </a>

            <div className='eldiv'>
              <ul className='elm'>
                <li><b>Duration</b>: 6 Hours</li>
                <li><b>Mode</b>:  Online Live & Interactive
                </li>
              </ul>
            </div>

            <div className='Indtroduce'>
              <p>The Certificate Program in Basics of Maya is a 6-hour beginner-friendly course designed to introduce students to the core fundamentals of Autodesk Maya, including interface navigation, essential modelling tools, UV unwrapping, and basic texturing. Through guided lessons and practical, hands-on exercises, students will learn how to create 3D assets from scratch and understand the complete Maya workflow.</p>
              <p>This course, mentored by industry professionals, provides a strong foundation in 3D modelling, prop creation, UV layout, and material application, enabling students to confidently develop clean, textured models by the end of the program.</p>
            </div>


            <div className='courseObj'>
              <h2 className='mainHeadingTotall-2'>Course Objectives</h2>
              <ul>
                <li> Understand the Maya 2024 interface.</li>
                <li> Use essential modelling tools to create basic and detailed 3D props.</li>
                <li>Apply clean and efficient workflows for modelling inside Maya.</li>
                <li> Unwrap UVs properly and prepare models for texturing.</li>
                <li> Apply materials and perform basic image-based texturing within Maya.</li>
                <li> Develop the ability to create complete 3D assets from scratch.</li>
                <li>Gain a foundational understanding of the Maya production workflow.</li>
                <li>Build readiness to design beginner-level 3D models with clean UVs and realistic textures.</li>
                <li>Cultivate creativity and confidence in approaching 3D modelling tasks, even with no prior experience</li>

              </ul>
            </div>

            <div className='courseObj'>
              <h2 className='mainHeadingTotall-2'>Key Takeaways</h2>
              <ul>
                <li>Confidently navigate the Maya 2024 interface and essential tools.</li>
                <li>Create clean and detailed 3D props and assets from scratch.</li>
                <li>Understand and apply UV unwrapping for game-ready models.</li>
                <li>Work with materials and shaders inside Maya.</li>
                <li>Apply image-based texturing to bring your models to life.</li>
                <li>Build a solid foundation for moving into advanced 3D workflows or portfolio projects.</li>

              </ul>
            </div>


            <div className='courseObj1'>
              <h2 className='mainHeadingTotall-2'>Course Modules</h2>
              <ul>
                <li>Introduction to 3D and Maya</li>
                <li>Working with Geometry</li>
                <li>Scene Organization & Planning</li>
                <li>Overview of the Prop</li>
                <li>Model Review, Cleanup, and Export</li>
                <li>UV Mapping Fundamentals</li>
                <li>Basic Texturing in Maya</li>

              </ul>
            </div>


            <h2 className='mainHeadingTotall-2' style={{color:"#ee1b24"}}>Career Opportunities</h2>

            <ul className='featuress3u'>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>3D Modeling & Texturing Artist

                </div></li>

              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>3D Prop Artist
                </div></li>

              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>3D Game Asset Artist


                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Environment Artist

                </div></li>



            </ul>


            <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px" }} onClick={() => setIsOpenM(true)}>Download Brochure
            </button> </div>


          </div>


        </div>
      </div>
      {isButtonVisible && (
        <div className="CousellingButton1 tetstL1" style={{ marginBottom: "0px" }} onClick={scrollToBottom}> <button className="dwnbtn three w-full sm:w-auto" style={{ width:'fit-Content'}} onClick={handleClickss}>Pay Now
          </button> </div>
      )}

    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

