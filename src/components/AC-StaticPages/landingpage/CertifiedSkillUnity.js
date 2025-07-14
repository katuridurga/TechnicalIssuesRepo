import React, { useState, useRef, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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

import Box from '@mui/material/Box';

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
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import recimg from '../../../assets/img/banners/Times-Award.webp';
import Typography from '@mui/material/Typography';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ic1 from '../../../assets/img/Icons/WEBSITE-ICON/pass.webp';
import ic2 from '../../../assets/img/Icons/WEBSITE-ICON/Pursuingengi.webp';
import ic4 from '../../../assets/img/Icons/WEBSITE-ICON/how-code.webp';
import ic5 from '../../../assets/img/Icons/WEBSITE-ICON/art-career.webp';
import ic7 from '../../../assets/img/Icons/WEBSITE-ICON/gaming-career.webp';
import ic8 from '../../../assets/img/Icons/WEBSITE-ICON/switch-gaming-career.webp';
import ic9 from '../../../assets/img/Icons/WEBSITE-ICON/career-opt.webp';
import ic10 from '../../../assets/img/Icons/WEBSITE-ICON/abroad-opportunities.webp';
import ic11 from '../../../assets/img/Icons/WEBSITE-ICON/income-job.webp';
import ic13 from '../../../assets/img/Icons/WEBSITE-ICON/short-term.webp';
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
  const [isOpenM, setIsOpenM] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
 
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
    lastname:'',
    PhoneNumber: '',
    email: '',
    url: window.location.href,
    course_ttl: 11,// Initialize URL in state
    course_duration: 'shortterm',
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
        lastname:'',
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
        <title> Short Course on Game Development with Unity | Certified Skills | Backstage Pass
        </title>
        <meta name="description" content="Learn to develop games with Unity. Gain industry-relevant skills and build a portfolio. Earn your Skill Diploma at Backstage Pass Institute.
" />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>

           
           
            <a onClick={scrollToBottom}>
            <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'Unity-Developermc' : 'Unity-Developerc'}`}>
              
              <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Certified Skill Diploma in Game Development with Unity

</h1></div>
            </div>
          </div>
        </div>
            </div>
            
            </a>
       
   
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

            <div className="mainrec22s">
              <img src={recimg} alt="recimg" style={{ width: "100%", height: "100%"}} />

            </div>
<div className='eldiv'>
  <ul className='elm'>
    <li><b>Eligibility</b>: 10+2 	</li>
    <li><b>Duration</b>: 3 Months – 120 Hours</li>
    <li><b>Mode</b>: Online Live & Interactive
    </li>
  </ul>
</div>
            <h2 className='mainHeadingTotall-2'>What This Course Offers

            </h2>

            <ul className='featuress2'>
              <li><img src={ic1} alt="ic1" />

                <div className='featuresscon2'>Foundation of C# Programming 	

                </div></li>
              <li><img src={ic2} alt="ic1" />

                <div className='featuresscon2'>Unity Basic Concepts 	


                </div></li>
              <li><img src={icg} alt="ic1" style={{ height: isMobileState ? "30px" : "50px", width: isMobileState ? "30px" : "50px" }} />

                <div className='featuresscon2'>Unity Intermediate Concepts 


                </div></li>
              <li><img src={ic4} alt="ic1" />

                <div className='featuresscon2'>Developing 2D Games Using Unity 


                </div></li>
              <li><img src={ic5} alt="ic1" />

                <div className='featuresscon2'>Developing 3D Games Using Unity 


                </div></li>
            
            </ul>

            {/* <div className='chapters' id="chapters1" style={{height:isMobileState ? '1140px':'480px' }}>

                

                <FeaturedProducts />

              </div> */}

            <div className='chapterL' id="chapter100">
              <div className="bg-c-gradient300 absolute w-full h-[101%] -top-[1px] -bottom-[1px] left-0"></div>
              <FeaturedProductL />
              {/* <Awards /> */}

              <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px"}}  onClick={() => setIsOpenM(true)}>Download Brochure
              </button> </div>
            </div>
            {isOpenM && (
        <div className="overlayM">
          <div className="popupM">
          <form onSubmit={handleSubmit} className="formMain">

<div className="formGrid-2M" data-form-id="need-guidance" data-form="step1-container">

<button className="close-btnM" onClick={() => setIsOpenM(false)}>
            <HighlightOffIcon/>
            </button>
  <div className="close-btnMd">
    <label className="" for="firstname">First Name  <span style={{color:"#ec1923"}}>*</span></label>
    <input  className="inputm"  placeholder="First Name" id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} required />
  </div>
  <div className="close-btnMd">
    <label className="" for="lastname">Last Name <span style={{color:"#ec1923"}}>*</span></label>
    <input  className="inputm"  placeholder="Last Name" id="lastname" name="lastname" type="text" value={formData.lastname} onChange={handleInputChange} required />
  </div>
  <div className="close-btnMd">
                      <label className="" for="Phone Number">Phone Number <span style={{color:"#ec1923"}}>*</span></label>
                      <input className="inputm" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minlength="10" maxlength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                    </div>
                    <div className="close-btnMd">
                      <label className="" for="Phone Number">Email <span style={{color:"#ec1923"}}>*</span></label>
                      <input className="inputm" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                    </div>

  </div>
  
  <div>
                    <button className=" three button brand size200m w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
                      Submit
                    </button>

                  </div> </form>

                  <React.Fragment>
                  
                                    <Dialog
                                      open={open}
                                      TransitionComponent={Transition}
                                      keepMounted
                                      onClose={handleClose}
                                      aria-describedby="alert-dialog-slide-description"
                                    >
                                      <DialogContent>
                                     
                                        <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: "19px", fontWeight: "500", color:"#ec1923", fontFamily: "'Montserrat', sans-serif" }}>
                                        Brochure download link has been sent to your email.                  
                                        </DialogContentText>
                                      </DialogContent>
                                 
                                    </Dialog>
                                  </React.Fragment>
                                  {/* <button className="close-btnM" onClick={() => setIsOpenM(false)}>
              Download
            </button> */}
           
          </div>
        </div>
      )}

            <h2 className='mainHeadingTotall-2'>In the Media</h2>

            {isMobileState ? <MIntheMedia /> :

              <ul className='CountryLogoss'>
                <li><img src={B1} alt="b1"/>

                </li>

                <li><img src={B2} alt="b2"/>

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B3} alt="b3" />

                </li>

                <li><img style={{ filter: "invert(1)" }} src={B4} alt="b4" />

                </li>
              </ul>}


            <h2 className='mainHeadingTotall-2'>Professional Paths with Game Development with Unity

            </h2>

            <ul className='featuress3u'>
              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>Game Developer


                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Unity Developer

                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Game Designer

                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Indie Game Developer
                </div></li>

              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Mobile Game Developer


                </div></li>
              <li><img src={ic11} alt="ic1" />
                <div className='featuresscon2'>AR/VR Developer

                </div></li>
                <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Game Tester & QA Analyst
                </div></li>
                
            </ul>

            <h2 className='mainHeadingTotall-2'>Learn from scratch to advanced level and build games like...</h2>

            <StudentGamesList />
           




            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
             
             
                <div>
                <h2 className='mainHeadingTotall-2'>What You’ll Achieve
                 		 				
                  </h2>
                <ul className='featuress3'>
                  
              <li><img src={ic7} alt="ic1" />

                <div className='featuresscon2'>Master C# for game development


                </div></li>
              <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Expertise in Unity tools & workflows


                </div></li>
              <li><img src={ic9} alt="ic1" />

                <div className='featuresscon2'>Build 2D & 3D games


                </div></li>
              <li><img src={ic8} alt="ic1" />
                <div className='featuresscon2'>Hands-on experience in physics, AI & UI



                </div></li>

              <li><img src={ic10} alt="ic1" />

                <div className='featuresscon2'>Optimize & deploy games


                </div></li>
          
                <li><img src={ic13} alt="ic1" />
                <div className='featuresscon2'>Create a game portfolio



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

            <Marquee speed={100} style={{ Padding: "0px 20px" }} className='recuitersList-20'>
              <img alt="rec1" src={r1} width={"300"} height={"81"} />
              <img alt="rec2" src={r2} width={"300"} height={"81"} />
              {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}
              <img alt="rec4" src={r4} width={"300"} height={"81"} />
              <img alt="rec5" src={r5} width={"300"} height={"81"} />
              <img alt="rec9" src={r6} width={"300"} height={"81"} />
              <img alt="rec10" src={r7} width={"300"} height={"81"} />

            </Marquee>

            <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px"}}  onClick={() => setIsOpenM(true)}>Download Brochure
            </button> </div>
           






          
          </div>


        </div>
      </div>
      {isButtonVisible && (
         <div className="CousellingButton1 tetstL1" style={{marginBottom:"0px"}} onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px"}}  onClick={() => setIsOpenM(true)}>Download Brochure
              </button> </div>
       )}

    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

