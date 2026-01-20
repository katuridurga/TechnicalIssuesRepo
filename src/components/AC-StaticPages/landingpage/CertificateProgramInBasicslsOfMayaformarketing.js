import React, { useState, useRef, useEffect } from "react";
import "./Marketing.css";
import { Helmet } from "react-helmet";
import PaymentC from "./Payment";
import { useSelector, shallowEqual } from "react-redux";
import cer from "../../../assets/img/test/certificate-with-badge.png";
import { FaPlay } from "react-icons/fa";
import axios from 'axios';
import modeling from "../../../assets/img/Environment.webp";
import prop from "../../../assets/img/3D_Game_Asset.webp";
import gameasst from "../../../assets/img/3D_Prop.webp";
import envir from "../../../assets/img/3d-modelling.webp";
import { useTheme } from '@mui/material/styles';
import r1 from "../../../assets/img/partners/r1.webp";
import r2 from "../../../assets/img/partners/r2.webp";
import r15 from "../../../assets/img/partners/supergaming.png";
import r16 from "../../../assets/img/partners/r6.webp";
import r4 from "../../../assets/img/partners/r4.webp";
import r5 from "../../../assets/img/partners/r5.webp";
import r7 from "../../../assets/img/partners/r7.webp";
import rc2 from "../../../assets/img/partners/2.webp";
import r8 from "../../../assets/img/partners/SumoDigital.webp";
import r9 from "../../../assets/img/partners/Ubisoft.webp";
import r10 from "../../../assets/img/partners/Sony.webp";
import r11 from "../../../assets/img/partners/Qualcomm.webp";
import r12 from "../../../assets/img/partners/Juego.webp";
import r13 from "../../../assets/img/partners/Gamitronics.webp";
import r14 from "../../../assets/img/partners/GSNgames.webp";
import wtwh from "../../../assets/img/banners/afterwtwillhappen.webp";
import { FaLinkedin } from "react-icons/fa";
import icon1 from "../../../assets/img/Icons/Career_Counselling.webp";
import icon2 from "../../../assets/img/Icons/Industry_Led.webp";
import icon3 from "../../../assets/img/Icons/Placement.webp";
import icon4 from "../../../assets/img/Icons/learning_Modules.webp";
import icon5 from "../../../assets/img/Icons/Beginner.webp";
import icon6 from "../../../assets/img/Icons/Practical.webp";
import icon7 from "../../../assets/img/Icons/learning_Modules.webp";
import icon8 from "../../../assets/img/Icons/6_Hours.webp";
import icon9 from "../../../assets/img/Icons/onlinetotal.webp";
import icon10 from "../../../assets/img/Icons/Certificate.webp";
import Slide from '@mui/material/Slide';

function DiplomaAndAdvancedDiplomaCourses() {
  const isMobileState = useSelector(
    (state) => state.mainReducer.isMobile,
    shallowEqual
  );

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      if (!container) return;

      const atBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 5;

      setIsButtonVisible(!atBottom);
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);


  const awardsData = [
    {
      imgMain: "https://backstagepass.co.in/ET_Achievers_2025-a03e9ae8.webp",
      imgTitle: "https://backstagepass.co.in/Times_Education_Excellence_2024-16ffaa61.webp",
      text: "ET Industry Achievers 2025"
    },
    {
      imgMain: "https://backstagepass.co.in/Times_Education_Excellence_2024-16ffaa61.webp",
      imgTitle: "https://backstagepass.co.in/Times_Education_Excellence_2024-16ffaa61.webp",
      text: "Times Education Excellence Award 2024"
    },
    {
      imgMain: "https://backstagepass.co.in/Times_Education_Excellence_2023-8eaeed8f.webp",
      imgTitle: "https://backstagepass.co.in/Times_Education_Excellence_2023-8eaeed8f.webp",
      text: "Times Education Excellence Award 2023"
    },
    {
      imgMain: "https://backstagepass.co.in/Times_Education_Excellence_2022-2718b806.webp",
      imgTitle: "https://backstagepass.co.in/Times_Education_Excellence_2022-2718b806.webp",
      text: "Times Education Excellence Award 2022"
    },
    {
      imgMain: "https://backstagepass.co.in/Times_Education_Excellence_2021-b7ba6b9f.webp",
      imgTitle: "https://backstagepass.co.in/Times_Education_Excellence_2021-b7ba6b9f.webp",
      text: "Times Education Excellence Award 2021"
    },
    {
      imgMain: "https://backstagepass.co.in/Time_Excellence_Awards_2020-9b0861f1.webp",
      imgTitle: "https://backstagepass.co.in/Time_Excellence_Awards_2020-9b0861f1.webp",
      text: "Times Excellence Award 2020"
    },
    {
      imgMain: "https://backstagepass.co.in/Times_Education_Excellence_2019-c24c65ad.webp",
      imgTitle: "https://backstagepass.co.in/Times_Education_Excellence_2019-c24c65ad.webp",
      text: "Times Education Excellence Award 2019"
    },
    {
      imgMain: "https://backstagepass.co.in/Best_Education_Brand_2018-8ffd3a56.webp",
      imgTitle: "https://backstagepass.co.in/Best_Education_Brand_2018-8ffd3a56.webp",
      text: "Best Education Brand Award Economic Times 2018"
    },
  ];




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
    window.open('/landingpage/short-course/', '_blank');
  };
  useEffect(() => {
    const details = document.querySelectorAll(".modules-grid details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("toggle", () => {
        if (targetDetail.open) {
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.removeAttribute("open");
            }
          });
        }
      });
    });

    return () => {
      details.forEach((detail) => {
        detail.replaceWith(detail.cloneNode(true));
      });
    };
  }, []);


  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
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
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    PhoneNumber: '',
    email: '',
    city: '',
    course: '',
    specialization: '',
    qualification: '',
    comments: '',
    url: window.location.href,
    course_ttl: 1,// Initialize URL in state
  });

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
        course: '',
        specialization: '',
        url: window.location.href, // Reset URL
      });
    } catch (error) {
      console.error('Error adding data:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };
  function Feature({ title, subtitle }) {
    return (
      <div className="feature-box">
        <div className="feature-iconcer" style={{ fontWeight: "bold" }}><img /></div>
        <div>
          <div className="feature-title" style={{ fontSize: isMobileState ? "14px" : "15px", color: "#000000" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Feature1({ title, subtitle }) {
    return (
      <div className="feature-box1">
        <div className="feature-iconcer" style={{ fontWeight: "bold" }}>✓</div>
        <div>
          <div className="feature-title" style={{ fontSize: isMobileState ? "14px" : "15px", fontWeight: "bold" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featurecarrer({ title, subtitle, img }) {
    return (
      <div className="feature-boxcar">

        <div>
          <div
            className="feature-titlecar"
            style={{ fontSize: isMobileState ? "14px" : "15px" }}
          > <img className="feature-iconcercar"
            style={{ fontWeight: "bold", marginRight: "20px", objectFit: "contain" }} src={img} alt={title} />
            {title}
          </div>

          {subtitle && <p className="feature-subtitlecar">{subtitle}</p>}
        </div>
      </div>
    );
  }
  function Featurecarrer1({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ padding: "8px", flexDirection: "column", backgroundColor: "#faebd7" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={modeling} /></div>
        <div>
          <div className="feature-titlecar" style={{ fontSize: "14px" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featurecarrer2({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ flexDirection: "column", backgroundColor: "#fbe4ec" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={prop} /></div>
        <div>
          <div className="feature-titlecar" style={{ fontSize: "14px" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featurecarrer3({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ flexDirection: "column", backgroundColor: "#fae9e1" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={gameasst} /></div>
        <div>
          <div className="feature-titlecar" style={{ fontSize: "14px" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featurecarrer4({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ flexDirection: "column", backgroundColor: "#cedeff" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={envir} /></div>
        <div>
          <div className="feature-titlecar" style={{ fontSize: "14px" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featureben({ title, subtitle, img }) {
    return (
      <div className="feature-boxcar" style={{ backgroundColor: "#f6f7f8" }}>
        <div>
          <div
            className="feature-titlecar"
            style={{ fontSize: isMobileState ? "14px" : "15px" }}
          > <img className="feature-iconcercar"
            style={{ fontWeight: "bold", display: "flex", marginRight: "20px" }} src={img} alt={title} />
            {title}
          </div>

          {subtitle && <p className="feature-subtitlecar">{subtitle}</p>}
        </div>
      </div>
    );
  }

  function Module({ title, items = [] }) {
    return (
      <div className="module-block">
        <h4 className="module-title">{title}</h4>
        <ul className="module-list">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    );
  }

  function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="faq-box">
        <button className="faq-btn" onClick={() => setOpen(!open)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{q}</span>
            <span>{open ? "-" : "+"}</span>
          </div>
        </button>

        {open && <div className="faq-answercer">{a}</div>}
      </div>
    );
  }
  const featureData = [
    {
      title: "Beginner-friendly Maya fundamentals",
      img: icon5
    },

    {
      title: "Practical, step-by-step asset creation",
      img: icon6
    },
    {
      title: "7 compact learning modules",
      img: icon7
    },
    {
      title: "6 hours of recorded video lessons",
      img: icon8
    },
    {
      title: "100% online and self-paced",
      img: icon9
    },
    {
      title: "Certificate on completion",
      img: icon10
    }
  ];
  const [openFormModal, setOpenFormModal] = useState(false);


  const handleFormClose = () => {
    setOpenFormModal(false);
  };
  const [formData1, setFormData1] = useState({
    name: "",
    email: "",
    phone: "",
  });

const [enableStorage, setEnableStorage] = useState(false);

  /* 🔹 Load data from localStorage on first render */
  // useEffect(() => {
  //   const savedData = localStorage.getItem("stickyFormData");
  //   if (savedData) {
  //     setFormData1(JSON.parse(savedData));
  //   }
  // }, []);
useEffect(() => {
  const stored = localStorage.getItem("stickyFormData");

  if (!stored) return;

  const { expiry } = JSON.parse(stored);

  if (Date.now() > expiry) {
    localStorage.removeItem("stickyFormData");
  }
}, []);
useEffect(() => {
  if (!enableStorage) return;

  const payload = {
    data: formData1,
    expiry: Date.now() + EXPIRY_TIME,
  };

  localStorage.setItem("stickyFormData", JSON.stringify(payload));
}, [formData1, enableStorage]);

  /* 🔹 Save data to localStorage whenever formData changes */
  const EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes

  useEffect(() => {
    localStorage.setItem("stickyFormData", JSON.stringify(formData1));
  }, [formData1]);
  const clearStickyForm = () => {
    setFormData1({
      name: "",
      email: "",
      phone: "",
    });

  
  };

  /* 🔹 Handle input change */
  const handleEnrollNow = () => {
  localStorage.removeItem("stickyFormData"); // reset old data
  setEnableStorage(true);                    // start saving
  setOpenFormModal(true);                    // open modal
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Helmet>
        <title>
          Basics of Maya Course for Beginners | Learn Maya 2024 Online
        </title>

        <meta name="description" content="Learn Autodesk Maya 2024 from scratch. Beginner-friendly online course covering 3D modelling, UV mapping & texturing. Certificate included." />
        <link rel="canonical" href="https://www.backstagepass.co.in/landingpage/basics-of-maya-online-certification/" />
      </Helmet>

      {openFormModal && (
        <PaymentC onClose={handleFormClose} style={{ width: "75%" }} onClick={handleEnrollNow} />
      )}


      {/* ===== Banner Section (100%) ===== */}
      <section className="banner-section hero-section" style={{ paddingBottom: "20px" }}>
        <div class="containerm">
          <div className="left-content">
            <div className="col-4 leftfrmv">
              <h1 className="hero-title" style={{marginTop:isMobileState?"60px":"20px"}}>Basics Of Maya for Beginners</h1>

              <p className="hero-text">
                A beginner-friendly course that teaches the essentials of Autodesk Maya.
                Learn the interface, basic 3D modelling, UV unwrapping, and simple texturing
                through hands-on practice.
              </p>

              <p className="discountpanel">Buy this Course @</p>

              <div className="disdvi">
                <span className="actprice"><del>₹4999</del></span>
                <span className="discountprice">₹799</span>
                <span className="savingamt">84% Disc.</span>
              </div>
   <div className="pricetags"><span className="">*Price inclusive of all applicable taxes (GST)</span></div>
              <div className="savingamto">
                <p>Limited Time Offer!</p>
              </div>

              {/* COURSE INFO */}
              {isMobileState ? (
                <div className="course-info">
                  <div className="row text-center">
                    <div className="col-6 border-rightc">
                      <p className="course-info-head">7 Modules</p>
                      <p>with Certifications</p>
                    </div>
                    <div className="col-6">
                      <p className="course-info-head">6 Hours</p>
                      <p>Recorded Content</p>
                    </div>
                    <div className="col-6 border-rightc">
                      <p className="course-info-head">Online</p>
                      <p>Mode</p>
                    </div>
                    <div className="col-6">
                      <p className="course-info-head">English</p>
                      <p>Language</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="course-info1">
                  <div className="row text-center">
                    <div className="col-3 border-rightc">
                      <p className="course-info-head">7 Modules</p>
                      <p>with Certifications</p>
                    </div>
                    <div className="col-4 border-rightc">
                      <p className="course-info-head">6 Hours</p>
                      <p>Recorded Content</p>
                    </div>
                    <div className="col-2 border-rightc">
                      <p className="course-info-head">Online</p>
                      <p>Mode</p>
                    </div>
                    <div className="col-3">
                      <p className="course-info-head">English</p>
                      <p>Language</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MOBILE FORM ONLY (UNCHANGED) */}
            {isMobileState && (
              <div className="" style={{ marginTop: "30px", backgroundColor: "#ffffff", borderRadius: "10px", padding: "10px" }}>
                <h3 className="previewcon1" style={{ textAlign: "center", padding:"0px", margin:"0px" }}>
                  Get this Course @ ₹799
                </h3>
                <form className="mble-form">
                    <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData1.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData1.email}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData1.phone}
                onChange={handleChange}
              />

                  <PaymentC
                    className="my-custom-class"
                    open={openFormModal}
                    onClose={() => setOpenFormModal(false)}
                    onClick={handleEnrollNow}
                  />
                  
                </form>


              </div>
            )}
          </div>
        </div>
      </section>






      {/* ===== Content Section ===== */}
      <section className="content-wrapper page-wrapper">

        {/* Left Content */}
        <div className="left-content">

          <section className="maya-overview-section" style={{ backgroundColor: "#f6f7f8" }}>
            <div className="section-wrappercer" >
              <h2 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px", paddingBottom: "0px", marginTop: isMobileState ? "4px" : "50px", paddingTop: "20px" }}>
                Basics Of Maya Course Overview
                <span className="displaypath"></span>
                <span className="designdisplay"></span>
              </h2>

              <p className="previewconp">
                Ever wanted to bring your ideas to life in 3D? This beginner-friendly course introduces Autodesk Maya 2024 step by step.
                Learn the interface, basic modelling, UV unwrapping, and simple texturing to create your own 3D assets from scratch—no prior
                3D experience needed, just curiosity and creativity.
              </p>
            </div>
          </section>

          {/* <section style={{width:"100%", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="scene">
              <h1>Last Chance! Offer Ends Jan 15, 2026</h1>
            </div>
          </section> */}

          <section className="" style={{ marginBottom: "0px", backgroundColor: "" }}>
            <div className="section-wrappercer">

              <h3 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px", paddingTop: "0px", marginTop: "0px" }}>Key Features</h3>

              <div className="feature-gridcer">

                {featureData.map((item, index) => (
                  <Featureben
                    key={index}
                    title={item.title}
                    img={item.img}
                  />
                ))}
              </div>
            </div>
          </section>



          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "30px", marginTop: "15px" }}>
            <div className="section-wrappercer modules-section">

              <div className="modules-grid">
                <div>
                  <h2 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px" }}>Course Topics You will Learn

                  </h2>

                  <details className="style-1" style={{ borderLeft: "5px solid#d11" }}>

                    <summary style={{ fontSize: "15px" }}>Introduction to 3D and Maya</summary>
                    <ul>
                      <li>An introduction to 3D fundamentals and the Maya interface, covering basic navigation, tools, and how 3D assets are created.
                      </li>

                    </ul>
                  </details>

                  <details className="style-1" style={{ borderLeft: "5px solid#d11" }}>
                    <summary style={{ fontSize: "15px" }}>Working with Geometry Scene</summary>
                    <ul>
                      <li>Learn how to create and edit 3D geometry in Maya using primitives, component editing, and essential modelling tools like bevel, extrude, etc., to add detail, shape, and clean structure to your models.
                      </li>

                    </ul>
                  </details>

                  <details className="style-1" style={{ borderLeft: "5px solid#d11" }}>
                    <summary style={{ fontSize: "15px" }}>Organization & Planning</summary>
                    <ul>
                      <li>Learn how to organise and plan your Maya scenes using proper naming, layers, grouping, and reference images, while maintaining correct scale, proportions, and clean workflows.</li>

                    </ul>
                  </details>

                  <details className="style-1" style={{ borderLeft: "5px solid#d11" }}>
                    <summary style={{ fontSize: "15px" }}>Overview of the Prop</summary>
                    <ul>
                      <li>An overview of the complete prop creation process, from setting up references and blocking the main shapes to modelling details, refining topology,  roof modelling, fence modelling, and preparing the final asset.</li>

                    </ul>
                  </details>

                  <details className="style-1" style={{ borderLeft: "5px solid#d11" }}>
                    <summary style={{ fontSize: "15px" }}>Model Review, Cleanup, and Export</summary>
                    <ul>
                      <li>Learn how to review and clean your model by fixing geometry issues, preparing for UV mapping, and exporting the asset correctly for texturing and other workflows.</li>

                    </ul>
                  </details>

                  <details className="style-1" style={{ borderLeft: "5px solid#d11" }}>
                    <summary style={{ fontSize: "15px" }}>UV Mapping Fundamentals</summary>
                    <ul>
                      <li>Learn the fundamentals of UV mapping, including unwrapping models, organising UV shells, fixing stretching and overlaps, and preparing clean UV layouts for texturing.</li>

                    </ul>
                  </details>

                  <details className="style-1" style={{ borderLeft: "5px solid#d11" }}>
                    <summary style={{ fontSize: "15px" }}>Basic Texturing in Maya</summary>
                    <ul>
                      <li>This module introduces the basics of texturing in Maya, understanding shaders, material attributes, applying texture maps, and using Hypershade to create and combine simple materials.
                      </li>

                    </ul>
                  </details>

                </div>

              </div>
            </div>
          </section>



          <section style={{ backgroundColor: "#f6f7f8", marginTop: isMobileState ? "4px" : "30px", borderRadius: "10px", padding: isMobileState ? "10px" : "0px" }}>
            <div className="section-wrappercer modules-section">

              <div className='coppertunitiescer'>
                {isMobileState && (
                  <h2 className='previewcon1' style={{ textAlign: isMobileState ? "left" : "left", width: isMobileState ? "100%" : "100%", fontSize: isMobileState ? "24px" : "28px" }}>Let Your Certificate Speak </h2>
                )}
                <div className='left'>
                  <img src={cer} alt="careerop" />


                  <div className="linkedinicon">
                    <span style={{ verticalAlign: "bottom" }}>Shareable on</span>

                    <FaLinkedin
                      size={28}
                      color="#0A66C2"
                      style={{ marginLeft: "8px", verticalAlign: "middle" }}
                    />
                  </div>

                </div>

                <div className="right career-tabs-container">
                  {/* Tabs */}


                  <section className="max-w-3xl mx-auto p-6 iconsv" style={{ color: "#000", width: isMobileState ? "100%" : "100%", margin: "0px" }}>
                    {!isMobileState && (
                      <h2 className='previewcon1' style={{ textAlign: "left", fontSize: isMobileState ? "24px" : "28px", width: isMobileState ? "100%" : "100%" }}>Let Your Certificate Speak </h2>
                    )}
                    <section className="certificatedisplay ">

                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>Certificate are awarded immediately upon successfully completing
                          all course modules. </p>
                      </div>

                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>You receive an official completion certificate that validates your
                          foundational Maya skills. </p>
                      </div>

                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>Your certificate serves as proof of learning and can be added to your
                          resume or portfolio.</p>
                      </div>




                    </section>



                  </section>

                </div>
              </div>
            </div>
          </section>
          <section className="" style={{ backgroundColor: "", marginBottom: "0px", marginTop: "20px" }}>
            <div className="section-wrappercer">
              <h3 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px" }}>This Course is for You, If You are
              </h3>

              <div className="courseUpdatescertificate">
                <ul style={{ width: "100%", margin: "0px auto", paddingTop: "10px", paddingBottom: "0px" }}>
                  <li style={{ marginLeft: "0px" }}>

                    <Feature1 title=" 
" />
                    <div className='BeyondRightcer'>

                      <p>Someone who wants to start learning 3D modelling from the basics.

                      </p>
                    </div>
                  </li>
                  <li style={{ marginLeft: "0px" }}>
                    <Feature1 title=" 
" />
                    <div className='BeyondRightcer'>

                      <p>A complete beginner with no prior experience in Autodesk Maya</p>
                    </div>


                  </li>

                  <li style={{ marginLeft: "0px" }}>
                    <Feature1 title=" 
" />
                    <div className='BeyondRightcer'>

                      <p>A student exploring career options in animation, gaming, or VFX.</p>
                    </div>


                  </li>

                  <li style={{ marginLeft: "0px" }}>
                    <Feature1 title=" 
" />
                    <div className='BeyondRightcer'>

                      <p>An aspiring 3D artist looking to build foundational skills.
                      </p>
                    </div>


                  </li>
                  <li style={{ marginLeft: "0px" }}>
                    <Feature1 title=" 
" />
                    <div className='BeyondRightcer'>

                      <p>A game design enthusiast who wants to create 3D assets.
                      </p>
                    </div>


                  </li>
                  <li style={{ marginLeft: "0px" }}>
                    <Feature1 title=" 
" />
                    <div className='BeyondRightcer'>

                      <p> A professional from another field wanting to switch to 3D or CG workflows.</p>
                    </div>


                  </li>

                </ul>
              </div>
            </div>
          </section>



          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "30px", marginTop: "20px" }}>
            <div className="section-wrappercer">

              <h3 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px" }}>Career Opportunities
              </h3>
              <p style={{ fontSize: "16px" }}>Once you complete this course, you can begin your journey as</p>
              <div className="feature-gridcer1">
                <Featurecarrer1 title="3D Modeling & Texturing Artist
" />
                <Featurecarrer2 title="3D Prop Artist
" />
                <Featurecarrer3 title="3D Game Asset Artist
" />
                <Featurecarrer4 title="Environment Artist

" />

              </div>
            </div>
          </section>

          <section className="" style={{ padding: "10px", backgroundColor: "#f6f7f8", marginBottom: "0px", borderRadius: "10px" }}>
            <div className="section-wrappercer">
              <h3 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px" }}>Our Learners Work Across Top Companies</h3>

              <div className="logo-grid-45">
                   <img src={r15} alt="r15" width="80" />
                <img src={r16} alt="r16" width="80" />
                 <img src={rc2} alt="rc2" width="80" />
                <img src={r1} alt="r1" width="85" />
                <img src={r2} alt="r2" width="90" />
                <img src={r11} alt="r11" width="80" />
                <img src={r10} alt="r10" width="80" />

                <img src={r4} alt="r4" width="85" />
                <img src={r5} alt="r5" width="90" />
                <img src={r7} alt="r7" width="85" />
                <img src={r8} alt="r8" width="90" />

                <img src={r12} alt="r12" width="85" />
                <img src={r13} alt="r13" width="90" />
                <img src={r9} alt="r9" width="80" />
                <img src={r14} alt="r14" width="80" />
              
              </div>
            </div>
          </section>







          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "0px", marginTop: "15px" }}>

            <div className="section-wrappercer modules-section">
              <div className='coppertunitiescer1' style={{ gap: isMobileState ? "0px" : "47px" }}>



                <div className="left career-tabs-container" style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
                  {/* Tabs */}


                  <section className="max-w-3xl mx-auto p-6 iconsv" style={{ color: "#000", width: isMobileState ? "100%" : "100%", margin: "0px" }}>
                    {!isMobileState && (
                      <h2 className='previewcon1' style={{ textAlign: "left", width: isMobileState ? "100%" : "100%", fontSize: isMobileState ? "24px" : "28px" }}>Why Backstage Pass Certification Course?


                      </h2>
                    )}

                    <section className="certificatedisplay" style={{ padding: isMobileState ? "0px 20px" : "0px 20px" }}>


                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>Beginner-friendly and industry-focused curriculum


                        </p>
                      </div>

                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>Learn through hands-on, practical projects
                        </p>
                      </div>

                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>Step-by-step guidance from experienced mentors

                        </p>
                      </div>
                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>Real production workflows, not just theory

                        </p>
                      </div>
                      <div className="certificate-point">
                        <FaPlay color="#d11" size={20} />
                        <p style={{ fontSize: isMobileState ? "14px" : "15px" }}>Builds strong fundamentals and job-ready skills

                        </p>
                      </div>




                    </section>



                  </section>

                </div>
                <div className='right'>
                  {isMobileState && (
                    <h2 className='previewcon1' style={{ textAlign: "left", fontSize: isMobileState ? "24px" : "28px", width: isMobileState ? "100%" : "100%" }}>Why Backstage Pass Certification Course?


                    </h2>
                  )}
                  <img src={wtwh} alt="careerop" style={{ width: isMobileState ? "100%" : "100%" }} />
                </div>
              </div>
            </div>
          </section>
          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "30px", marginTop: "15px", padding: isMobileState ? "0px" : "0px" }}>
            <div className="section-wrappercer">

              <h3 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px" }}>Benefits of the Course

              </h3>
              <p style={{ fontSize: "16px" }}>Once you complete this course, you can begin your journey as</p>
              <div className="feature-gridcer1" style={{ gridTemplateColumns: isMobileState ? "repeat(1, 1fr)" : "repeat(2, 1fr)" }}>
                <Featurecarrer
                  title="Career Counselling & Mentorship"
                  img={icon1}
                />

                <Featurecarrer
                  title="Industry-led & Comprehensive Curriculum"
                  img={icon2}
                />

                <Featurecarrer
                  title="Placement Preparation & Support"
                  img={icon3}
                />

                <Featurecarrer
                  title="Training Mode of Your Choice"
                  img={icon4}
                />





              </div>
            </div>
          </section>

        </div>

        {/* ===== RIGHT STICKY FORM (DESKTOP ONLY) ===== */}
        {!isMobileState && (
          <aside className="right-sticky">
            <div className="sticky-form">
              <h3 className="previewcon1" style={{ textAlign: "center" }}>
                Get this Course @ ₹799
              </h3>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData1.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData1.email}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData1.phone}
                onChange={handleChange}
              />

              <PaymentC
                className="my-custom-class"
                open={openFormModal}
                onClose={() => setOpenFormModal(false)}
               onClick={handleEnrollNow}
              />
            </div>
          </aside>
        )}


      </section>


      <section className="bancer">
        <div class="small-banner1 ftbaner1" style={{ paddingLeft: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}><div className="col-12 col-lg-8 col-md-7 col-sm-12 bottomcer"><div class="foot-ban"> <p class="didYouKnow h6 mb-3">Enroll in the Basics of Maya Course and <br /> Earn Certification @
        </p><div className="disdvi"><span className="actprice"><del>₹4999</del></span><span className="discountprice">₹799</span> <span className="savingamt">84% Disc.</span></div>
           <div className="pricetags"><span className="">*Price inclusive of all applicable taxes (GST)</span></div>
          <div className="savingamto" style={{ width: "150px" }}><p className="" style={{ margin: "0px", fontWeight: "600", fontSize: "12px" }}>Limited Time Offer!</p></div></div></div></div></section>
      {isButtonVisible && (
        <div
          className="CousellingButton1 tetstL1"
          style={{ marginBottom: "0px", backgroundColor: "#ffffff", border:"1px solid#e4d8d8", boxShadow:"rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px" }}
          onClick={scrollToBottom}
        >

         
            <PaymentC
              type="button"
              className="dwnbtn three w-full sm:w-auto"
              style={{ width: "350px", borderRadius:"20px", padding:"20px"}}
              open={openFormModal}
              onClose={() => setOpenFormModal(false)}
             onClick={handleEnrollNow}
            />


        </div>
      )}


    </>
  );
}

export default DiplomaAndAdvancedDiplomaCourses;
