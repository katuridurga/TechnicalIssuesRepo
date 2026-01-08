import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import ic13 from '../../../assets/img/Icons/WEBSITE-ICON/short-term.webp';
import Box from '@mui/material/Box';


import axios from 'axios';
import { useSelector, shallowEqual } from "react-redux";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

import ic7 from '../../../assets/img/Icons/WEBSITE-ICON/gaming-career.webp';
import ic8 from '../../../assets/img/Icons/WEBSITE-ICON/switch-gaming-career.webp';
import ic9 from '../../../assets/img/Icons/WEBSITE-ICON/career-opt.webp';
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
      window.open('https://backstagepass.co.in/landingpage/short-course/', '_blank'); 
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
        <title> Certificate Program in Storytelling & Design Documentation for Games | Backstage Pass
        </title>
        <meta  name="description" content="Certificate Program in Storytelling & Design Documentation for Games" />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>



            <a onClick={scrollToBottom}>
              <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'STORYTELLINGDESIGNDOCUMENTATIONFORGAMESmc' : 'STORYTELLINGDESIGNDOCUMENTATIONFORGAMES'}`}>

                <div className="et_pb_row et_pb_row_0">
                  <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                    <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                      <div className="et_pb_text_inner"><h1 style={{color: "#000"}} className="title ">Certificate Program in Storytelling & Design Documentation for Games</h1></div>
                    </div>
                  </div>
                </div>
              </div>

            </a>


            {/* <div className="mainrec22s">
              <img src={recimg} alt="recimg" style={{ width: "100%", height: "100%" }} />

            </div> */}
            <div className='eldiv'>
              <ul className='elm'>
                <li><b>Duration</b>: 20 Hours</li>
                <li><b>Mode</b>: Online Live & Interactive
                </li>
              </ul>
            </div>

            <div className='Indtroduce'>
              <p>The Certificate Program in Storytelling & Design Documentation for Games is an intensive course designed for aspiring game writers and designers. Covering branching storylines, dialogue writing, interactive storytelling, and design documentation, this program equips participants with essential skills for crafting immersive game narratives.</p>
              <p>Through hands-on exercises and industry-standard tools, learners will master the art of engaging storytelling, structuring non-linear narratives, and creating comprehensive design documentation crucial for game development projects.</p>
            </div>


            <div className='courseObj'>
              <h2>Course Objectives</h2>
              <ul>
                <li>Understand the fundamentals of game storytelling, including narrative structures and player engagement.</li>
                <li>Develop branching storylines and choice-driven narratives to enhance player agency.</li>
                <li>Learn the role and structure of design documentation in game development.</li>
                <li>Explore different genres and writing styles suited for interactive storytelling.</li>
                <li>Understand best practices for integrating story and gameplay mechanics seamlessly.</li>
              </ul>
            </div>

            <div className='courseObj'>
              <h2>Key Takeaways</h2>
              <ul>
                <li>Master storytelling techniques for interactive media and games.</li>
                <li>Develop well-structured, engaging game narratives and dialogues.</li>
                <li>Gain expertise in designing branching storylines and choice-driven plots.</li>
                <li>Learn to use industry-standard tools for interactive storytelling and documentation.</li>
                <li>Understand and create professional game design documentation.</li>
              </ul>
            </div>


            <div className='courseObj1'>
              <h2>Course Modules</h2>
              <ul>
                <li>Foundations of Game Storytelling </li>
                <li>Dialogue Writing & Character Development</li>
                <li>Interactive Storytelling & Tools</li>
                <li>Game Design Documentation & Industry Best Practices</li>
              </ul>
            </div>








            <h2 className='mainHeadingTotall-2'>Career Opportunities</h2>
            
            <ul className='featuress3u' style={{backgroundColor:"#222"}}>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Game Narrative Designer

                </div></li>

              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Interactive Story Writer
                </div></li>

              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>Game Scriptwriter


                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Game Designer with a focus on storytelling

                </div></li>



              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Narrative Consultant for game studios


                </div></li>


                <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Content Designer for interactive experiences


                </div></li>


                <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Storyboard Writer for game development teams


                </div></li>


            </ul>
           









            <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px" }} onClick={() => setIsOpenM(true)}>Download Brochure
            </button> </div>








          </div>


        </div>
      </div>
      {isButtonVisible && (
        <div className="CousellingButton1 tetstL1" style={{ marginBottom: "0px" }} onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px", marginRight: "20px" }} onClick={() => setIsOpenM(true)}>Download Brochure
        </button>  <button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px" }} onClick={handleClickss}>Pay Now
          </button> </div>
      )}

    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

