import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";
import LazyLoad from "react-lazyload";
import { useSelector, shallowEqual } from "react-redux";
import ReactWhatsappButton from "react-whatsapp-button";
import { RiFacebookLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { PiDiscordLogoThin } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPaperPlane } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { CiPhone, CiMail } from "react-icons/ci";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import "./Footer.css"

function Footer() {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [openForm, setOpenForm] = useState(false);
 const isLandingPage = window.location.pathname.includes("/landingpage");
 const isLandingPageb = window.location.pathname.includes("/landingpage/bachelors-degree-courses-in-gaming/");
  
 const hiddenPaths = [
  "/landingpage/bachelors-degree-courses-in-gaming/",
  "/landingpage/game-art-programs/",
  "/landingpage/game-development-with-unreal-programs/",
  "/landingpage/masters-and-bachelors-programs/",
  "/landingpage/masters-and-bachelors-game-development-courses/",
  "/landingpage/diploma-and-advanced-diploma-courses/",
  "/landingpage/diploma-and-advanced-diploma-game-development-courses/",
  "/landingpage/game-art-programs/",
  "/landingpage/game-development-programs/",
  "/landingpage/game-development-with-unity-programs/",
  "landingpage/game-development-with-unreal-programs/",
];


const [formData, setFormData] = useState({
    name: '',PhoneNumber: '', email: '', url: window.location.href
  });
  const handleBlurs = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value && !emailRegex.test(value)) {
        alert("Please enter a valid email address.");
      }
    }
  };
  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "PhoneNumber" && /^[0-9]{10}$/.test(value)) {
      try {
        const response = await fetch(`https://www.backstagepass.co.in/reactapi/checkenquirypagemobile.php?contactNumber=${value}`);
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
  
const [open, setOpen] = React.useState(false);
const handleClose = (event, reason) => {
  if (reason === 'clickaway') return;
  setOpen(false);
};
  const handleSubmit = async (event) => {
      //alert("Your Data Submitted successfully");
      //console.log(formData);
      setOpen(true);
      //console.log('pranathi');
  
  
      event.preventDefault();
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };  
      try {
        const response = await axios.post("https://www.backstagepass.co.in/reactapi/allcourses_pdf.php", formData);
        console.log(response);
        //alert(response.statuscode);
      if (response.status === 200) {
        
        setOpen(true);
         window.location.reload();
      }
        setFormData({
          name: '', PhoneNumber: '', email: '', 
          url: window.location.href
        });
      } 
      catch (error) {
        console.error('Error adding data:', error);
        
      }
  
  
    };

  const part1 = '+91';
  const part2 = '-8008002794';
  const part3 = '-8008002795';

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.8)',
      zIndex: 1500, 
    }
  };
  return (
    <>
      {open && (
        <div style={styles.overlay}></div>
      )}

 <Snackbar open={open} autoHideDuration={3000}
 onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} sx={{
    top: '50% !important',
    left: '50% !important',
    transform: 'translate(-50%, -50%) !important',
    zIndex: 1501,
    width: {
      xs: '90%', // ✅ 90% width on mobile (xs)
      sm: 'auto', // auto width on small devices and up
    }
  }}>
        <MuiAlert 
    severity="success"
    icon={false}
    sx={{
      width: '100%',
      fontWeight: 'bold',
      fontSize:"16px",
      color: '#ec1923', // ✅ text color
      backgroundColor: 'white', // optional: make background white
      padding: {
        xs: '10px', // ✅ Padding only on mobile
        sm: '16px', // Default or larger padding on larger screens (optional)
      }
      
    }}
>
        Thank you for your interest!<br/>
        We've sent the brochure to your email address. Please check your inbox and spam folder.
        </MuiAlert>
      </Snackbar>
      {/* Modal Form */}
      {openForm && (
        <div className="modal-overlaying">
         <div className="modal-box">
  {/* Close Icon */}
  <span className="modal-close" onClick={() => setOpenForm(false)}>
    &times;
  </span>

  <form onSubmit={handleSubmit}  className="download-form">
    <input type="text" id="name" name="name"  placeholder="Full Name" value={formData.name} onChange={handleInputChange}  required />
    <input type="email" id= "email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} onBlur={handleBlurs} required  />
    <input type="tel" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" value={formData.PhoneNumber} onChange={handleInputChange}  required />

    <button type="submit">Submit</button>
    
  </form>
 
</div>
        </div>
      )}
      <section id="page-need_guidance-section" className="minhg need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden rammm" style={{ minHeight: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-gaming-courses-test/" || window.location.pathname === "/landingpage/top-game-development-programs/" ? "300px" : "350px" }} data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance">


        <div className="min-h-full h-full w-full container-full1 relative z-[3] py-4">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>

            <div className="">








              <div className="grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-5 " style={{ width: "100%" }}>








                <div className={window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/"  || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/" ||window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/" || 
            window.location.pathname === "/intermediate-board-results/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/game-development-with-unity-programs/"|| window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" ? "testfooter" : "footer-wrapper"}>
                  {isMobileState ? <div className="bottomFoot sticky-footer" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/"  || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  ||
            window.location.pathname === "/intermediate-board-res+ults/"||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/game-development-programs/"  || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>
                    <div className="mobile-sticky-footer ">
                      <div className="bottomFootLeft"><a target="_blank" rel="noopener noreferrer" aria-label="Call with us" href="tel:+918008002795">   <FaPhone style={{ transform: 'rotate(90deg)' }} /> Call Us</a></div>
                      <div className="bottomFootRight"><a href="/enquire-now/"><FaPaperPlane /> Apply-Now</a></div>
                    </div>
                  </div> : null}

                  {isMobileState ?  <div className="floatingIcon" >
                    <div className="App">
                      <ReactWhatsappButton
                        countryCode="91"
                        phoneNumber="8008002795"
                        style={{ right: "2rem",  display: hiddenPaths.includes(window.location.pathname) ? "none" : "flex" }}
                        className="whatsappsivak"
                      />
                      </div>
                      </div>
                    : 
                    <div className="floatingIcon" >
                    <div className="App">
                      <ReactWhatsappButton
                        countryCode="91"
                        aria-label="Chat with us on WhatsApp"
                        phoneNumber="8008002795"
                        style={{ right: "2rem",  display: hiddenPaths.includes(window.location.pathname) ? "none" : "flex"}}
                        className="whatsappsivak"
                      />
                   
                      <a href="tel:+918008002795" className="btn-floating-whatsapp durga" aria-label="Call with us" style={{right: isMobileState ? "10rem" : "8rem", bottom: isLandingPage ? "6.3rem" : "1.5rem", backgroundColor: "rgb(0, 164, 245)", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: '40%',  display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-with-unity-programs/"  ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/"||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/"  ||
            window.location.pathname === "/intermediate-board-results/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}> </a>
                    </div>
                    
                  </div>
                  } 

                 {/* {
  isMobileState 
    ? window.location.pathname == "/landing" 
      ? (
          <div className="floatingIcon">
            <div className="App">
              <ReactWhatsappButton
                countryCode="91"
                phoneNumber="8008002795"
                animated
                style={{ right: "2rem", bottom:"80px"}}
                className="whatsappsivak"
              />
              <a 
                href="tel:+918008002795" 
                className="btn-floating-whatsapp durga btn-floating-whatsapp__animated" 
                style={{
                  right: "10rem",
                  backgroundColor: "rgb(0, 164, 245)",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: '40%',
                  display: window.location.pathname === "/landing" ? "block" : "none" 
                }}
              />
            </div>
          </div>
        )
      : null
    : (
        <div className="floatingIcon">
          <div className="App">
            <ReactWhatsappButton
              countryCode="91"
              phoneNumber="8008002795"
              animated
              style={{ right: "2rem" }}
              className="whatsappsivak"
            />
            <a 
              href="tel:+918008002795" 
              className="btn-floating-whatsapp durga btn-floating-whatsapp__animated" 
              style={{
                right: "8rem",
                backgroundColor: "rgb(0, 164, 245)",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: '40%',
                display: window.location.pathname === "/" ? "block" : "none" 
              }}
            />
          </div>
        </div>
    )
} */} 
                 {/* {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-with-unity-programs/"  ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/"||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/"  ||
            window.location.pathname === "/intermediate-board-results/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" ||  window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/"  ?
                    <div className="App">
                      <ReactWhatsappButton
                        countryCode="91"
                        phoneNumber="8977945705"
                        style={{ right: isMobileState ? "1.5rem" : "2rem", marginBottom: isMobileState ? "-10rem" : "5rem", zIndex:"11111" }}
                        className="whatsappsivak"
                      />
                      
                  </div>
                   : null}  */}

                  {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/"  || window.location.pathname === "/landingpage/best-gaming-courses-in-india/"||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/"  || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" ||window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/" ||
            window.location.pathname === "/intermediate-board-results/"|| window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/top-game-development-programs/" ? null : <div className="foot-details">
                    <LazyLoad height={76} offset={100} fadein={true}>
                      <div className="foot-item fadeInUp anime-delay3">
                        <h3 className="footer-title">Quick Links</h3>
                        <div className="contact-wrapper">
                          <div className="contact-wrapper-inner" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>

                            {/* <div>
                              <p>Blogs</p>
                            </div> */}
                          </div>
                          <div className="contact-wrapper-inner" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" ||window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/"  ||
            window.location.pathname === "/intermediate-board-results/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>

                            {/* <div>
                              <p>Brochure</p>
                            </div> */}
                          </div>
                          <div className="contact-wrapper-inner" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-programs/"  ||
            window.location.pathname === "/intermediate-board-results/" || window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>

                            {/* <div>
                              <p>E-book</p>
                            </div> */}
                          </div>
                          {/* <div className="contact-wrapper-inner">

                            <div>
                              <p>Why the Gaming Industry?</p>
                            </div>
                          </div> */}
                          <div className="contact-wrapper-inner" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-programs/"  ||
            window.location.pathname === "/intermediate-board-results/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" ||window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>

                            <div className="cont1">
                              <p><a href="/terms-and-conditions/">Terms and Conditions</a></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/game-development-programs/"  ||
            window.location.pathname === "/intermediate-board-results/"||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/"  || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" || window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>

                            <div className="cont1">
                              <p><a href="/privacy-policy/">Privacy Policy</a></p>
                            </div>
                          </div>
                          {/* <div className="contact-wrapper-inner" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/"  ||
            window.location.pathname === "/intermediate-board-results/"||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>

                            <div className="cont1">
                              <p><a href="/refund-policy-test/">Return/Refund Policy</a></p>
                            </div>
                         
                          </div> */}
                          <div className="contact-wrapper-inner" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/"  ||
            window.location.pathname === "/intermediate-board-results/"||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/"|| window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? "none" : "block" }}>

                            
                            <div className="cont1">
                              <p><a href="/sitemap/">Sitemap</a></p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </LazyLoad>
                  </div>}
       
                {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/"  || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-with-unity-programs/"  || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"  ||
            window.location.pathname === "/intermediate-board-results/" ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/"||window.location.pathname ===  "/landingpage/bachelors-degree-courses-in-gaming/"? null : <div className="foot-details brchrbtn">
                    <LazyLoad height={76} offset={100} fadein={true}>

                      <div className="foot-item fadeInUp anime-delay3">
                        <h3 className="footer-title">Contact Info</h3>
                        <div className="contact-wrapper">
                          <div className="cont1">
                            <div className="contact-wrapper-inner">

                              <CiPhone className="iconsmain" />
                              <div>
                                {/* <p ><a href="tel:8008002794" rel="noopener noreferrer"> +91-8008002794  </a></p> */}
                                <p ><a href="tel:8008002794" rel="noopener noreferrer"> {part1}{part2}  </a></p>
                                
                              </div>
                            </div>
                            <div className="contact-wrapper-inner">
                              <CiPhone className="iconsmain" />
                              <div>
                                {/* <p ><a href="tel:8008002795" rel="noopener noreferrer"> +91-8008002795 </a></p> */}
                                <p ><a href="tel:8008002795" rel="noopener noreferrer"> {part1}{part3}  </a></p>
                              </div>
                            </div>

                            <div className="contact-wrapper-inner">
                              <CiMail className="iconsmain" />
                              <div>
                                <p><a href="mailto:info@backstagepass.co.in" rel="noopener noreferrer">info@backstagepass.co.in</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </LazyLoad>
                  </div>} 
                             
                  {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/"  || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-with-unity-programs/"  || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"  ||
            window.location.pathname === "/intermediate-board-results/" ||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? null :
                  <div className="foot-details brchrbtn">
                  <LazyLoad height={76} offset={100} fadein={true}>
  <div className="foot-item fadeInUp anime-delay3">
    <div className="call-card" onClick={() => setOpenForm(true)} style={{ cursor: "pointer" }}>
   
        <div className="call-info">
          <div className="call-title">Download Brochure</div>
        
        </div>
      </div>

  </div>
</LazyLoad>
</div>}
  {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/bachelors-degree-courses-in-gaming/"  || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" ||
                  window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/"||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/"  || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-programs/"  ||
                  window.location.pathname === "/intermediate-board-results/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? <div className="foot-details">
                    <LazyLoad height={76} offset={100} fadein={true}>

                      <div className="foot-item fadeInUp anime-delay3">
                        <h3 className="footer-title" style={{ textAlign: 'center' }}>Contact Info</h3>
                        <div className="contact-wrapper">
                        <div className="cont1">
                          <div className="contact-wrapper-inner">

                           

                              <CiPhone className="iconsmain" />
                              <div><p> <a href="tel:8008002794" className="phone-number" rel="noopener noreferrer"> +91-8008002794</a></p>
                              </div>
                          </div>
                          </div>
                          <div className="cont1">
                          <div className="contact-wrapper-inner">

                           
                              <CiPhone className="iconsmain" />
                              <div>
                              <p> <a href="tel:8008002795" className="phone-number" rel="noopener noreferrer"> +91-8008002795</a></p>
                              </div>

                            
                          </div>
                          </div>

                        </div>
                      
                      </div>
                    </LazyLoad>
                  </div> 
                  : null} 
                    {/* <div className="foot-details">
                    <LazyLoad height={76} offset={100} fadein={true}>

                      <div className="foot-item fadeInUp anime-delay3">
                        <h3 className="footer-title">Contact Info</h3>
                        <div className="contact-wrapper">
                          <div className="cont1">
                            <div className="contact-wrapper-inner">

                              <CiPhone className="iconsmain" />
                              <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px" }} onClick={() => setIsOpenM(true)}>Download Brochure
                              </button> </div>
                            </div>
                            

                          </div>
                        </div>
                      </div>
                    </LazyLoad>
                  </div> */}

{window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? null : null } 
                  {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"  || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? 
                 null : null}
                </div>
              </div>
            </div>

            {window.location.pathname === "/intermediate-board-results/"  ?  
                  <LazyLoad height={76} offset={100} fadein={true}>
                    <div className="text-center foot-content fadeInUp anime-delay2" style={{color:"#fff"}}>© A Subsidiary of PVR Memorial Educational Society 2025. All Rights Reserved</div>
                  </LazyLoad> : null}
            <div>

              <LazyLoad height={76} offset={100} fadein={true}>
                <div className="foot-item fadeInUp anime-delay3">
                
                  {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/"||  window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/"  || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||  window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"|| window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" ||  window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || 
            window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" ||  window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" ||  window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/"  ||  window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/"  || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"  || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/"  || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/"  || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/" ||window.location.pathname ==="/landingpage/bachelors-degree-courses-in-gaming/"  || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? null :

                    <div className="contact-wrapper ftr">
                       
                      <div className="contact-wrapper-inner md1">
                        <a href="https://discord.com/invite/ChQaKBnNuT" target="_blank" rel="noopener noreferrer"><PiDiscordLogoThin /></a>


                      </div>
                      <div className="contact-wrapper-inner md2">
                        <a href="https://www.instagram.com/backstagepassgaming/" target="_blank" rel="noopener noreferrer"><CiInstagram /></a>

                      </div>
                      <div className="contact-wrapper-inner md3">
                        <a href="https://www.facebook.com/bspgaminginstitute/" target="_blank" rel="noopener noreferrer"><RiFacebookLine /></a>

                      </div>
                      <div className="contact-wrapper-inner md4">
                        <a href="https://www.youtube.com/channel/UC8-3EcO9JQO8cRJklp8Gdvg" target="_blank" rel="noopener noreferrer"><CiYoutube /></a>

                      </div>

                      <div className="contact-wrapper-inner md4">
                        <a href="https://x.com/Bsp_Gaming" target="_blank" rel="noopener noreferrer"><RiTwitterXLine /></a>
                      </div>
                      <div className="contact-wrapper-inner md4">
                        <a href="https://www.linkedin.com/school/backstagepassinstitute/" rel="noopener noreferrer" target="_blank"><RiLinkedinLine />
                        </a>

                      </div>
                    </div>}
                    {window.location.pathname === "/intermediate-board-results/" ? null :
                  <LazyLoad height={76} offset={100} fadein={true}>
                    <div className="text-center foot-content fadeInUp anime-delay2" style={{marginBottom:isMobileState ? "5rem" :"0rem"}}>© A Subsidiary of PVR Memorial Educational Society 2025. All Rights Reserved</div>
                  </LazyLoad>}
                </div>
              </LazyLoad>
            </div>
          

          













          </div>
        </div>
      </section>
    </>
    
  );
}

export default withStyles(footerStyle)(Footer);
