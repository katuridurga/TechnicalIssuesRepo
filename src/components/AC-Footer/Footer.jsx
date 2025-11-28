import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";
import LazyLoad from "react-lazyload";
import { useSelector, shallowEqual } from "react-redux";
import ReactWhatsappButton from "react-whatsapp-button";
import { FaWhatsapp } from "react-icons/fa";
import discord from "../../assets/img/Icons/dicord.webp";
import instagram from "../../assets/img/Icons/instagram.webp";
import facebook from "../../assets/img/Icons/facebook.webp";
import linkedin from "../../assets/img/Icons/linkedin.webp";
import Youtube from "../../assets/img/Icons/Youtube.webp";
import { CiYoutube } from "react-icons/ci";
import { PiDiscordLogoThin } from "react-icons/pi";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { CiPhone, CiMail } from "react-icons/ci";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./Footer.css";
import { BiSolidPencil } from "react-icons/bi";

import { IoIosCall } from "react-icons/io";

function Footer() {
  const isMobileState = useSelector(
    (state) => state.mainReducer.isMobile,
    shallowEqual
  );
  const [openForm, setOpenForm] = useState(false);
  const path = window.location.pathname;



  const shortHeightPaths = [
    "/landingpage/diploma-and-advanced-diploma-courses/",
    "/landingpage/diploma-and-advanced-diploma-gaming-courses-test/",
    "/landingpage/top-game-development-programs/",
    "/landingpage/masters-and-bachelors-programs/",
    "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"

  ];

  const testFooterPaths = [
    "/landingpage/diploma-and-advanced-diploma-courses/",
    "/landingpage/diploma-and-advanced-diploma-game-development-courses/",
    "/landingpage/game-development-programs/",
    "/landingpage/masters-and-bachelors-game-development-courses/",
    "/landingpage/certificate-program-in-essentials-of-game-design/",
    "/landingpage/certificate-program-in-3DGame-development-with-unity/",
    "/landingpage/certificate-program-in-game-development-for-VR/",
    "/landingpage/certificate-program-in-prototyping-and-game-concept-development/",
    "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/",
    "/landingpage/game-development-with-unreal-programs/",
    "/landingpage/3DHard-surface-modelling-game-art/",
    "/landingpage/game-design-with-unreal-blue-prints/",
    "/landingpage/game-development-with-unity/",
    "/landingpage/game-development-with-unreal/",
    "/landingpage/ai-powered-game-design-and-level-building/",
    "/landingpage/bachelors-degree-courses-in-gaming/",
    "/intermediate-board-results/",
    "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/",
    "/landingpage/game-development-with-unity-programs/",
    "/landingpage/masters-and-bachelors-programs/",
    "/landingpage/top-game-development-programs/",
    "/landingpage/best-gaming-courses-in-india/",
    "/landingpage/certified-diploma-game-design-with-unreal-blueprints/",
    "/landingpage/certified-diploma-unreal-game-development/",
    "/landingpage/certified-diploma-unity-game-development/",

  ];

  const mobileFooterHidePaths = [
    ...testFooterPaths,
    "/landingpage/game-art-programs/",
  ];

  const hiddenPaths = [
    "/landingpage/bachelors-degree-courses-in-gaming/",
    "/landingpage/game-art-programs/",
    "/landingpage/game-development-with-unreal-programs/",
    "/landingpage/masters-and-bachelors-programs/",
    "/landingpage/diploma-and-advanced-diploma-courses/",
    "/landingpage/diploma-and-advanced-diploma-game-development-courses/",
    "/landingpage/game-development-programs/",
    "/landingpage/game-development-with-unity-programs/",
    "/landingpage/masters-and-bachelors-game-development-courses/",
    "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"
  ];


  // ✅ Derived booleans for cleaner conditions
  const isShortHeight = shortHeightPaths.includes(path);
  const isTestFooter = testFooterPaths.includes(path);
  const hideMobileFooter = mobileFooterHidePaths.includes(path);
  const hideAllFooter = testFooterPaths.includes(path);
  const specialHeightPaths = [
    "/landingpage/masters-and-bachelors-game-development-courses/",
    "/landingpage/bachelors-degree-courses-in-gaming/",
    "/landingpage/diploma-and-advanced-diploma-game-development-courses/",
    "/landingpage/game-development-programs/",
    "/landingpage/game-development-with-unity-programs/",
    "/landingpage/game-development-with-unreal-programs/",
    "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"

  ];

  const computedHeight = specialHeightPaths.includes(path)
    ? isMobileState
      ? "250px"
      : "400px"
    : isShortHeight
      ? isMobileState
        ? "250px"
        : "300px"
      : isMobileState
        ? "800px"
        : "400px"

  const [formData, setFormData] = useState({
    name: "",
    PhoneNumber: "",
    email: "",
    url: window.location.href,
  });

  const handleBlurs = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
        const response = await fetch(
          `https://www.backstagepass.co.in/reactapi/checkenquirypagemobile.php?contactNumber=${value}`
        );
        if (response.status === 200) {
          alert(
            "This mobile number is already registered within the last 3 months. Our team will get back to you."
          );
          setFormData((prevData) => ({
            ...prevData,
            PhoneNumber: "",
          }));
        }
      } catch (error) {
        console.error("Error checking mobile number:", error);
        alert("Failed to validate mobile number. Please try again.");
      }
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://www.backstagepass.co.in/reactapi/allcourses_pdf.php",
        formData
      );
      if (response.status === 200) {
        setOpen(true);
        window.location.reload();
      }
      setFormData({
        name: "",
        PhoneNumber: "",
        email: "",
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const part1 = "+91";
  const part2 = "-8008002794";
  const part3 = "-8008002795";

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.8)",
      zIndex: 1500,
    },
  };

  return (
    <>
      {open && <div style={styles.overlay}></div>}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          top: "50% !important",
          left: "50% !important",
          transform: "translate(-50%, -50%) !important",
          zIndex: 1501,
          width: { xs: "90%", sm: "auto" },
        }}
      >
        <MuiAlert
          severity="success"
          icon={false}
          sx={{
            width: "100%",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#ec1923",
            backgroundColor: "white",
            padding: { xs: "10px", sm: "16px" },
          }}
        >
          Thank you for your interest! <br />
          We've sent the brochure to your email address. Please check your inbox and spam folder.
        </MuiAlert>
      </Snackbar>

      {/* Modal Form */}
      {openForm && (
        <div className="modal-overlaying">
          <div className="modal-box">
            <span className="modal-close" onClick={() => setOpenForm(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit} className="download-form">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlurs}
                required
              />
              <input
                type="tel"
                id="PhoneNumber"
                name="PhoneNumber"
                placeholder="Phone Number"
                value={formData.PhoneNumber}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* 🔹 Section Start */}
      <section
        id="page-need_guidance-section"
        className="bgfooter minhg need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden rammm"
        style={{
          [isMobileState ? "height" : "minHeight"]: computedHeight, padding: window.location.pathname === "/landingpage/game-development-programs/" || "/landingpage/certificate-program-in-prototyping-and-game-concept-development/"
            ? "1px"
            : "0px",
          backgroundPosition: isShortHeight ? "top" : "center",
          marginTop: isShortHeight ? "10px" : "0px"
        }}
        data-locomotive-section-id="page-need_guidance"
        data-locomotive-section-type="need_guidance"
      >
        <div className="min-h-full h-full w-full container-full1 relative z-[3] py-4">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>
            <div className="">
              <div className="grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-5" style={{ width: "100%" }}>
                <div className={isTestFooter ? "testfooter" : "footer-wrapper"}>

                  {/* 🔹 Mobile Footer */}
                  {isMobileState && (
                    <div
                      className="bottomFoot sticky-footer"
                      style={{ display: hideMobileFooter ? "none" : "block" }}
                    >
                      <div className="mobile-sticky-footer">
                        <div className="bottomFootLeft">
                          <a target="_blank" rel="noopener noreferrer" aria-label="Call with us" href="tel:+918008002795">
                            <FaPhone style={{ transform: "rotate(90deg)" }} /> Call Us
                          </a>
                        </div>
                        <div className="bottomFootRight">
                          <a href="/enquire-now/">
                            <FaPaperPlane style={{ color: "#fff" }} /> Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 🔹 Floating WhatsApp */}
                  {isMobileState ? (
                    <div className="floatingIcon" style={{
                               display: hiddenPaths.includes(window.location.pathname) ? "none" : "flex"
                            }}>
                      <div className="App">
                        <ReactWhatsappButton
                          countryCode="91"
                          phoneNumber="8008002795"
                          style={{
                            right: "0.6rem !important",
                            bottom: "9rem !important",
                            position:"fixed !important",
                          }}
                          className="whatsappsivak"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="floatingIcon" style={{
                               display: hiddenPaths.includes(window.location.pathname) ? "none" : "flex"
                            }}>
                      <div className="floatingIcon enq-fix-strip">
                        <div className="App">

                          <a
                            href="tel:+918008002795"
                            countryCode="91"
                            aria-label="Chat with us on WhatsApp durga3"
                            phoneNumber="8008002795"
                          
                            className="whatsappsivak"
                          >
                            <FaWhatsapp style={{ color: "#fff", fontSize: "28px" }} />
                          </a>
                          <a
                            href="tel:+918008002795"
                            className="btn-floating-whatsapp durga"
                            aria-label="Call with us"
                            style={{
                              backgroundColor: "rgb(0, 164, 245)",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "40%",
                             
                            }}
                          >
                            <IoIosCall style={{ color: "#fff", fontSize: "28px" }} />

                          </a>

                          <a
                            href="/enquire-now/"
                            className="btn-floating-whatsapp durga1"
                            aria-label="Enquire Now"
                            style={{
                              backgroundColor: "#eb1a23",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "40%",
                              display: hideAllFooter ? "none" : "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <BiSolidPencil style={{ color: "#fff", fontSize: "28px" }} />
                          </a>

                        </div>
                      </div>

                    </div>
                  )}

                  {/* --- commented experimental floating icon variations kept --- */}
                  {/* { window.location.pathname == "/landing" ? ( <div> ... </div> ) : null } */}

                  {/* 🔹 Quick Links */}
                  {!hideAllFooter && (
                    <div className="foot-details">
                      <LazyLoad height={76} offset={100} fadein={true}>
                        <div className="foot-item fadeInUp anime-delay3">
                          <h3 className="footer-title">Quick Links</h3>
                          <div className="contact-wrapper">
                            <div className="contact-wrapper-inner">
                              {/* <div><p>Blogs</p></div> */}
                            </div>
                            <div className="contact-wrapper-inner">
                              {/* <div><p>Brochure</p></div> */}
                            </div>
                            <div className="contact-wrapper-inner">
                              {/* <div><p>E-book</p></div> */}
                            </div>
                            <div className="contact-wrapper-inner">
                              <div className="cont1">
                                <p><a href="/terms-and-conditions/">Terms and Conditions</a></p>
                              </div>
                            </div>
                            <div className="contact-wrapper-inner">
                              <div className="cont1">
                                <p><a href="/privacy-policy/">Privacy Policy</a></p>
                              </div>
                            </div>
                            {/* <div className="contact-wrapper-inner"><div><p><a href="/refund-policy-test/">Return/Refund Policy</a></p></div></div> */}
                            <div className="contact-wrapper-inner">
                              <div className="cont1">
                                <p><a href="/sitemap/">Sitemap</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LazyLoad>
                    </div>
                  )}
                  {/* 🔹 Contact Info */}
                  {!hideAllFooter && (
                    <div className="foot-details brchrbtn">
                      <LazyLoad height={76} offset={100} fadein={true}>
                        <div className="foot-item fadeInUp anime-delay3">
                          <h3 className="footer-title">Contact Info</h3>
                          <div className="contact-wrapper">
                            <div className="cont1">
                              <div className="contact-wrapper-inner">
                                <CiPhone className="iconsmain" />
                                <div>
                                  <p>
                                    <a href="tel:+91-8008002794" rel="noopener noreferrer">
                                      {part1}{part2}
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="contact-wrapper-inner">
                                <CiPhone className="iconsmain" />
                                <div>
                                  <p>
                                    <a href="tel:+91-8008002795" rel="noopener noreferrer">
                                      {part1}{part3}
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="contact-wrapper-inner">
                                <CiMail className="iconsmain" />
                                <div>
                                  <p>
                                    <a href="mailto:info@backstagepass.co.in" rel="noopener noreferrer">
                                      info@backstagepass.co.in
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="contact-wrapper-inner">
                                <CiMail className="iconsmain" />
                                <div>
                                  <p>
                                    <a href="mailto:admissions@backstagepass.co.in" rel="noopener noreferrer">
                                      admissions@backstagepass.co.in
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LazyLoad>
                    </div>
                  )}

                  {/* 🔹 Download Brochure */}
                  {!hideAllFooter && (
                    <div className="foot-details brchrbtn">
                      <LazyLoad height={76} offset={100} fadein={true}>
                        <div className="foot-item fadeInUp anime-delay3">
                          <div
                            className="glowing-button1"
                            onClick={() => setOpenForm(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="call-info1">
                              <div className="call-title1">Download Brochure</div>
                            </div>
                          </div>
                        </div>
                      </LazyLoad>
                    </div>
                  )}

                  {/* 🔹 Compact Contact Info for certain landing pages */}
                  {isTestFooter && (
                    <div className="foot-details lfootdetails">
                      <LazyLoad height={76} offset={100} fadein={true}>
                        <div className="foot-item fadeInUp anime-delay3">
                          <h3 className="footer-title" style={{ textAlign: "center" }}>
                            Contact Info
                          </h3>
                          <div className="contact-wrapper">
                            <div className="cont1">
                              <div className="contact-wrapper-inner">
                                <CiPhone className="iconsmain" />
                                <div>
                                  <p>
                                    <a
                                      href="tel:+91-8008002794"
                                      className="phone-number"
                                      rel="noopener noreferrer"
                                    >
                                      +91-8008002794
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="cont1">
                              <div className="contact-wrapper-inner">
                                <CiPhone className="iconsmain" />
                                <div>
                                  <p>
                                    <a
                                      href="tel:+91-8008002795"
                                      className="phone-number"
                                      rel="noopener noreferrer"
                                    >
                                      +91-8008002795
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LazyLoad>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 🔹 Footer Bottom Text + Social Icons */}
            {path === "/intermediate-board-results/" && (
              <LazyLoad height={76} offset={100} fadein={true}>
                <div className="text-center foot-content fadeInUp anime-delay2" style={{ color: "#fff" }}>
                  © A Subsidiary of PVR Memorial Educational Society 2025. All Rights Reserved
                </div>
              </LazyLoad>
            )}

            <div>
              <LazyLoad height={76} offset={100} fadein={true}>
                <div className="foot-item fadeInUp anime-delay3 socialiconsmt">
                  {!hideAllFooter && (
                    <div className="contact-wrapper ftr">
                      {/* Discord */}
                      <div className="contact-wrapper-inner">
                        <a
                          href="https://discord.com/invite/ChQaKBnNuT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-box"
                        >
                          <PiDiscordLogoThin className="default-icon" />
                          <img src={discord} alt="discord" className="hover-icon" />
                        </a>
                      </div>

                      {/* Instagram / X */}
                      <div className="contact-wrapper-inner">
                        <a
                          href="https://www.instagram.com/backstagepassgaming/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-box"
                        >
                          <RiTwitterXLine className="default-icon" />
                          <img src={instagram} alt="instagram" className="hover-icon" />
                        </a>
                      </div>

                      {/* Facebook */}
                      <div className="contact-wrapper-inner">
                        <a
                          href="https://www.facebook.com/bspgaminginstitute/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-box"
                        >
                          <FacebookRoundedIcon className="default-icon" />
                          <img src={facebook} alt="facebook" className="hover-icon" />
                        </a>
                      </div>

                      {/* YouTube */}
                      <div className="contact-wrapper-inner">
                        <a
                          href="https://www.youtube.com/channel/UC8-3EcO9JQO8cRJklp8Gdvg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-box"
                        >
                          <CiYoutube className="default-icon" />
                          <img src={Youtube} alt="youtube" className="hover-icon" />
                        </a>
                      </div>

                      {/* LinkedIn */}
                      <div className="contact-wrapper-inner">
                        <a
                          href="https://www.linkedin.com/school/backstagepassinstitute/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-box"
                        >
                          <RiLinkedinLine className="default-icon" />
                          <img src={linkedin} alt="linkedin" className="hover-icon" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </LazyLoad>

              {path !== "/intermediate-board-results/" && (
                <LazyLoad height={76} offset={100} fadein={true}>
                  <div
                    className="text-center foot-content fadeInUp anime-delay2"
                    style={{ marginBottom: isMobileState ? "5rem" : "0rem" }}
                  >
                    © A Subsidiary of PVR Memorial Educational Society 2025. All Rights Reserved
                  </div>
                </LazyLoad>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default withStyles(footerStyle)(Footer);
