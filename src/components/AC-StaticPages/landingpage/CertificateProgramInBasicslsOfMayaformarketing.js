import React, { useState, useRef, useEffect } from "react";
import "./Marketing.css";
import { Helmet } from "react-helmet";
import PaymentC from "./Payment";
import { useSelector, shallowEqual } from "react-redux";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import cer from "../../../assets/img/test/certificate-with-badge.png";
import modeling from "../../../assets/img/Environment.webp";
import prop from "../../../assets/img/3D_Game_Asset.webp";
import gameasst from "../../../assets/img/3D_Prop.webp";
import envir from "../../../assets/img/3d-modelling.webp";
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
import advdip from '../../../assets/img/banners/Thumbnailformaya.png';
import { FaLinkedin } from "react-icons/fa";
import icon5 from "../../../assets/img/Icons/Beginner.webp";
import icon6 from "../../../assets/img/Icons/Practical.webp";
import icon7 from "../../../assets/img/Icons/learning_Modules.webp";
import icon8 from "../../../assets/img/Icons/6_Hours.webp";
import icon9 from "../../../assets/img/Icons/onlinetotal.webp";
import icon10 from "../../../assets/img/Icons/Certificate.webp";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const EXPIRY_TIME = 5 * 60 * 1000;
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

  function Featurecarrer1({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ padding: "8px", flexDirection: "column", backgroundColor: "#faebd7" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={modeling} alt="modeling" /></div>
        <div>
          <div className="feature-titlecar" style={{ fontSize: "14px" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featurecarrer2({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ flexDirection: "column", backgroundColor: "#fbe4ec" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={prop} alt="prop" /></div>
        <div>
          <div className="feature-titlecar" style={{ fontSize: "14px" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featurecarrer3({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ flexDirection: "column", backgroundColor: "#fae9e1" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={gameasst} alt="gameasst" /></div>
        <div>
          <div className="feature-titlecar" style={{ fontSize: "14px" }}>{title}</div>
        </div>
      </div>
    );
  }
  function Featurecarrer4({ title, subtitle }) {
    return (
      <div className="feature-boxcar" style={{ flexDirection: "column", backgroundColor: "#cedeff" }}>
        <div className="feature-iconcercar" style={{ fontSize: "18px", fontWeight: "bold" }}><img src={envir} alt="envir" /></div>
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

  // 5 minutes

  useEffect(() => {
    localStorage.setItem("stickyFormData", JSON.stringify(formData1));
  }, [formData1]);
  // const clearStickyForm = () => {
  //   setFormData1({
  //     name: "",
  //     email: "",
  //     phone: "",
  //   });

  // };





  const handleEnrollNow = () => {
    localStorage.removeItem("stickyFormData");
    setEnableStorage(true);

    // 🔥 Copy sticky form data into popup form
    setFormData((prev) => ({
      ...prev,
      fullname: formData1.name || "",
      email: formData1.email || "",
      PhoneNumber: formData1.phone || "",
    }));

    setOpenFormModal(true);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [courses, setCourses] = useState([]);
  const formRef = useRef();
  const [couponRemarks, setCouponRemarks] = useState("");

  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    PhoneNumber: "",
    email: "",
    course: "",
    city: "",
    school: "",
    coupon: "",
    declaration: false,
    url: window.location.href,
  });
  const [paymentDetails, setPaymentDetails] = useState({
    originalPayment: "",
    discountValue: "",
    finalAmount: "",
  });

  useEffect(() => {

    let lastSegment = "certificate-program-in-basics-of-maya";

    // if (referrer) {
    //   const parts = referrer.split("/").filter(Boolean);
    //   lastSegment = parts[parts.length - 1];
    //   if (lastSegment === "short-course") lastSegment = "";
    // }

    axios
      .get(
        `https://www.backstagepass.co.in/reactapi/courses_api.php?slug=${lastSegment}`
      )
      .then((res) => {
        const data = res.data || [];
        setCourses(data);

        if (data.length === 1) {
          setFormData((prev) => ({ ...prev, course: data[0].value }));
          setPaymentDetails({
            originalPayment: data[0].orignialpayment,
            discountValue: "",
            finalAmount: data[0].gstpayment,
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const checkAlreadyEnrolled = async (email, course) => {
    const res = await fetch(
      "https://www.backstagepass.co.in/reactapi/check_enrollment.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        cache: "no-store",
        body: JSON.stringify({ email, course }),
      }
    );

    return res.json();
  };

  const handleInputChange = async (e) => {
    const { name, type, value, checked, files } = e.target;

    if (name === "coupon") {
      if (value.length <= 4) {
        setCouponRemarks("");
      }
      if (!formData.course) {
        alert("Please select a course first");
        return;
      }
      if (!formData.email) {
        alert("Please enter email first");
        return;
      }
      const enrollment = await checkAlreadyEnrolled(formData.email, formData.course);
      console.log('enrolled', enrollment?.alreadyEnrolled);
      if (enrollment?.alreadyEnrolled) {
        setCouponRemarks("You are already enrolled in this course");
        return;
      }


      try {
        const res = await fetch(
          "https://www.backstagepass.co.in/reactapi/getpaymentapi.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ course: formData.course, coupon: value }),
          }
        );

        const data = await res.json();
        if (data?.length) {


          setPaymentDetails({
            originalPayment: data[0].orignialpayment,
            discountValue: data[0].discountvalue,
            finalAmount: data[0].finalamount,

          });
          if (data[0].remarkscoupon != '' && value.length >= 4) {
            setCouponRemarks(data?.[0]?.remarkscoupon || "Invalid Coupon Code");
          }
          else {

            setCouponRemarks(""); // clear error


          }

        }
      } catch {
        alert("Coupon error");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleMainCategoryChange = (e) => {

    const selectedCourse = e.target.value;
    const selectedOption = courses.find((course) => course.value === selectedCourse);

    setFormData({
      ...formData,
      course: selectedCourse,
      specialization: "", // You can set specialization if needed
    });

    // Update payment details based on the selected course
    if (selectedOption) {
      setPaymentDetails({
        originalPayment: selectedOption.orignialpayment,
        gstPayment: '18%',
        discountValue: '',
        finalAmount: selectedOption.gstpayment,
      });
    }
  };
  useEffect(() => {
    const autoCheckEnrollment = async () => {
      if (!formData.email || !isValidEmail(formData.email)) return;
      if (!formData.course) return;

      try {
        const enrollment = await checkAlreadyEnrolled(
          formData.email,
          formData.course
        );

        if (enrollment?.alreadyEnrolled) {
          setAlreadyEnrolled(true);
          setCouponRemarks("You are already enrolled in this course");
        } else {
          setAlreadyEnrolled(false);
          setCouponRemarks("");
        }
      } catch (error) {
        console.error("Enrollment check failed:", error);
      }
    };

    autoCheckEnrollment();
  }, [formData.email, formData.course]);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleEmailBlur = async () => {

    if (!formData.email || !isValidEmail(formData.email)) return;
    if (!formData.course) return;

    const enrollment = await checkAlreadyEnrolled(
      formData.email,
      formData.course
    );

    if (enrollment.alreadyEnrolled) {
      setAlreadyEnrolled(true);
      setCouponRemarks("You are already enrolled in this course");
    } else {
      setAlreadyEnrolled(false);
      setCouponRemarks("");
    }
  };




  return (
    <>
      <Helmet>
        <title>
          Basics of Maya Course for Beginners | Learn Maya Online
        </title>

        <meta name="description" content="Learn Autodesk Maya from scratch. Beginner-friendly online course covering 3D modeling, UV mapping & texturing. Certificate included." />
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
              <h1 className="hero-title" style={{ marginTop: isMobileState ? "60px" : "20px" }}>Basics Of Maya for Beginners</h1>

              <p className="hero-text">
                A beginner-friendly course that teaches the essentials of Autodesk Maya.
                Learn the interface, basic 3D modeling, UV unwrapping, and simple texturing
                through hands-on practice.
              </p>

              <p className="discountpanel">Buy this Course @</p>

              <div className="disdvi">
                <del style={{ color: "#fff", textDecorationColor: "#fff", fontSize: "25px", fontWeight: "600" }}>
                  ₹4999
                </del>
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
                <h3 className="previewcon1" style={{ textAlign: "center", padding: "0px", margin: "0px", fontSize: "22px" }}>
                  Get this Course @ <del style={{ color: "#000", textDecorationColor: "#000", fontSize: "22px", fontWeight: "600" }}>
                    ₹4999
                  </del> <span style={{ color: "#e42929", fontSize: "25px" }}>₹799</span>
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
                    required
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
          <section className="maya-overview-section" style={{ backgroundColor: "" }}>
            <div className="videomain2maya">
              <video
                ref={videoRef}
                controls
                loop
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
              >
                <source
                  src="https://backstagepass.co.in/Marketing-Video.mp4"
                  type="video/mp4"
                />
              </video>


              {!isPlaying && (
                <div className="overlay-wrapper" onClick={handlePlay}>
                  <img
                    src={advdip}
                    className="overlay-image2maya-1"
                    alt="advdip"
                  />

                  <div className="play-icon">▶</div>
                </div>
              )}
            </div>
          </section>
          <section className="maya-overview-section" style={{ backgroundColor: "#f6f7f8" }}>
            <div className="section-wrappercer" >
              <h2 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px", paddingBottom: "0px", marginTop: isMobileState ? "4px" : "50px", paddingTop: "20px" }}>
                Basics Of Maya Course Overview
                <span className="displaypath"></span>
                <span className="designdisplay"></span>
              </h2>

              <p className="previewconp">
                Ever wanted to bring your ideas to life in 3D? This beginner-friendly course introduces Autodesk Maya step by step.
                Learn the interface, basic modeling, UV unwrapping, and simple texturing to create your own 3D assets from scratch—no prior
                3D experience needed, just curiosity and creativity.
              </p>
            </div>
          </section>

          {/* <section style={{width:"100%", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="scene">
              <h1>Last Chance! Offer Ends Jan 15, 2026</h1>
            </div>
          </section> */}

          <section className="" style={{ marginBottom: "40px", backgroundColor: "", marginTop: "40px" }}>
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



          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "40px", marginTop: "40px" }}>
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
                      <li>Learn how to create and edit 3D geometry in Maya using primitives, component editing, and essential modeling tools like bevel, extrude, etc., to add detail, shape, and clean structure to your models.
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
                      <li>An overview of the complete prop creation process, from setting up references and blocking the main shapes to modeling details, refining topology,  roof modeling, fence modeling, and preparing the final asset.</li>

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



          <section style={{ backgroundColor: "#f6f7f8", marginTop: isMobileState ? "4px" : "40px", borderRadius: "10px", padding: isMobileState ? "10px" : "0px" }}>
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
          <section className="" style={{ backgroundColor: "", marginBottom: "0px", marginTop: "40px" }}>
            <div className="section-wrappercer">
              <h3 className="previewcon1" style={{ fontSize: isMobileState ? "24px" : "28px" }}>This Course is for You, If You are
              </h3>

              <div className="courseUpdatescertificate">
                <ul style={{ width: "100%", margin: "0px auto", paddingTop: "10px", paddingBottom: "0px" }}>
                  <li style={{ marginLeft: "0px" }}>

                    <Feature1 title=" 
" />
                    <div className='BeyondRightcer'>

                      <p>Someone who wants to start learning 3D modeling from the basics.

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
          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "50px", marginTop: "50px" }}>
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
          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "50px", marginTop: "50px" }}>

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
          {/* <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "30px", marginTop: "15px", padding: isMobileState ? "0px" : "0px" }}>
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
          </section> */}

        </div>

        {/* ===== RIGHT STICKY FORM (DESKTOP ONLY) ===== */}
        {!isMobileState && (
          <aside className="right-sticky">
            <div className="sticky-form">
              <h3 className="previewcon1" style={{ textAlign: "center" }}>
                Get this Course @ <del style={{ color: "#000", textDecorationColor: "#000", fontSize: "25px", fontWeight: "600" }}>
                  ₹4999
                </del>  <span style={{ color: "#e42929", fontSize: "25px" }}>₹799</span>
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
                required
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
        <div className="small-banner1 ftbaner1">
          <div className="banner-wrapper">

            <div className="foot-ban">
              <p className="didYouKnow">
                Enroll in the Basics of Maya Course and Earn Certification @
              </p>

              <div className="disdvi">
                <span
                  style={{
                    color: "#fff",
                    textDecoration: "line-through",
                    textDecorationColor: "#fff",
                    fontSize: "25px",
                    fontWeight: "600"
                  }}
                >
                  ₹4999
                </span>


                <span className="discountprice">
                  ₹799
                </span>

                <span className="savingamt">
                  84% Disc.
                </span>
              </div>

              <div className="pricetags">
                *Price inclusive of all applicable taxes (GST)
              </div>

              <div className="savingamto">
                Limited Time Offer!
              </div>
            </div>

          </div>
        </div>
      </section>


      {isButtonVisible && (
        <div
          className="CousellingButton1 tetstL1"
          id="mbopen"
          style={{ marginBottom: "0px", backgroundColor: "#ffffff", border: "1px solid#e4d8d8", boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px" }}
          onClick={scrollToBottom}
        >
          {/* <PaymentC
                className="my-custom-class"
                open={openFormModal}
                onClose={() => setOpenFormModal(false)}
                onClick={handleEnrollNow}
              /> */}


          <Dialog
            open={openFormModal}
            onClose={handleFormClose}
            disableScrollLock
            fullWidth
            maxWidth={false}
            PaperProps={{
              sx: {
                width: isMobileState ? "95%" : "750px",
                maxWidth: "95%",
                margin: "0 auto",
              },
            }}
          >

            <DialogActions style={{ backgroundColor: "#fa9f42" }}>
              <p className="mainHeadingTotall-2" style={{ fontSize: isMobileState ? "20px" : "30px", color: "#fff", margin: "16px auto" }}>ENROLLMENT FORM</p>
              <Button onClick={handleFormClose} className="hvcls" style={{ fontSize: "35px", color: "#fff", fontWeight: "bold" }}> &times;</Button>

            </DialogActions>

            <DialogContent dividers>
              <form
                ref={formRef} className="formMain"
                method="POST"
                action="https://www.backstagepass.co.in/payment_process.php"
                encType="multipart/form-data"
              // onSubmit={handlePayNow}
              >



                <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container" style={{
                  gridTemplateColumns: isMobileState ? "repeat(1, 1fr)" : "repeat(1, 1fr)"
                }}>
                  <div className="">
                    <label className="" for="fullname">Full Name (as per official documents)</label>
                    <input
                      className=""
                      placeholder="Full Name"
                      id="fullname"
                      name="fullname"
                      type="text"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      required
                    />
                    <input type="hidden" name="url" value={formData.url} />
                    <input type="hidden" name="course_ttl" value={formData.course_ttl} />
                  </div>

                  {/* <div className="">
                <label className="" for="dob">Date of Birth (as per official documents)</label>
               
                <Controller
                  name="dob"
                  control={control}
                  render={({ field }) => (
                    <input

                      fullWidth
                      //label="Date Of Birth (dd/mm/yyyy)"
                      label="Date of Birth"
                      type="date"
                      variant="outlined"
                      {...field}

                      InputProps={{

                        sx: {

                          '& input[type="date"]::-webkit-calendar-picker-indicator': {

                            filter: 'invert(0)', // Inverts the icon to white

                          },
                          color: '#000',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555', // Default border color
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555', // Focused border color
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555', // Hover border color
                          },

                        },

                      }}

                      value={formData.dob}
                      onChange={handleInputChange}
                      InputLabelProps={{
                        sx: {
                          color: 'white', // Label text color
                          background: '#f9fafb',
                          px: 1,
                          '& .MuiInputLabel-asterisk': {
                            color: 'red', // Asterisk color
                            fontSize: '21px',
                          },
                        },
                      }}
                    />
                  )}
                />
              </div> */}
                </div>

                <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container" style={{
                  gridTemplateColumns: isMobileState ? "repeat(1, 1fr)" : "repeat(2, 1fr)"
                }}>
                  <div className="">
                    <label className="" htmlFor="email">Email Address</label>
                    <input
                      className=""
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleEmailBlur}
                      required={!alreadyEnrolled}

                    />
                  </div>

                  <div className="">
                    <label className="" for="PhoneNumber">Mobile Number</label>
                    <input
                      className=""
                      placeholder="Mobile Number"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      type="tel"
                      pattern="[6-9][0-9]{9}"
                      minlength="10"
                      maxlength="10"
                      value={formData.PhoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="formGrid-c" data-form-id="need-guidance" data-form="step1-container">
                  <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                    <label className="" htmlFor="course">Course <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                    <select
                      onChange={handleMainCategoryChange}
                      name="course"
                      id="course"
                      value={formData.course}
                      style={{ width: "100%", marginBottom: "20px" }}
                      required
                    >
                      <option value="" disabled>
                        Select Course
                      </option>
                      {courses.map((course) => (
                        <option
                          key={course.id}
                          value={course.value}
                          data-original-payment={course.orignialpayment} // Store original payment in data attribute
                          data-gst-payment={course.gstpayment} // Store GST payment in data attribute
                        >
                          {course.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* 
              <div className="">
                <label className="" for="school">Last School/ College Attended</label>
                <input
                  className=""
                  placeholder="Last School/ College Attended"
                  id="school"
                  name="school"
                  type="text"
                  value={formData.school}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="">
                <label className="" for="Phone Number">City</label>
                <input className="" placeholder="Location" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
              </div> */}

                  {/* <div className="">
                <label className="" for="document">Upload Document (Marksheet/ Certificate)</label>
                <input
                  className=""
                  id="document"
                  name="document"
                  type="file"
                  accept=".jpg,.png,.pdf"
                  onChange={handleInputChange}
                />
              </div> */}

                  <div className="">
                    <label className="" for="coupon">Coupon Code</label>
                    <input
                      className=""
                      placeholder="Coupon Code (Optional)"
                      id="coupon"
                      name="coupon"
                      type="text"
                      value={formData.coupon}
                      onChange={handleInputChange}
                    />
                  </div>
                  <p style={{ color: "#f52525" }}><span>{couponRemarks}</span></p>
                  {paymentDetails.originalPayment && (

                    <div className='paymentShortCourse'>

                      <div style={{ color: "#000" }}>Payment (INR):  <span><span className="actprice" style={{ color: "#000" }}><del>₹4999</del></span> ₹{paymentDetails.originalPayment}</span></div>
                      {paymentDetails.discountValue > 0 && (
                        <div style={{ color: "#000" }}>
                          Discount (INR): <span>-₹{paymentDetails.discountValue}</span>
                        </div>
                      )}

                      <div style={{ color: "#000" }}>Total Payment (INR): <span>₹{paymentDetails.finalAmount}</span></div>


                    </div>
                  )}
                  <div className="checkbox-container" >
                    <label className="checkbox-label" style={{ fontSize: "14px" }}>
                      <input
                        type="checkbox"
                        name="declaration"
                        checked={formData.declaration}
                        onChange={handleInputChange}
                        required
                        style={{
                          marginTop: '4px',
                          marginRight: '100px !important',
                          display: 'inline-block',
                          width: '16px',
                          height: '16px',
                          opacity: 1,
                          position: "relative"
                        }}
                      />
                      I hereby declare that all the information provided above is true to the best of my knowledge. I understand that submitting false documents or details may result in cancellation of my enrollment.
                    </label>
                  </div>
                </div>
                <div style={{ padding: "20px" }}>
                  {/* <button
                type="submit"
                className="three button brand size200 w-full sm:w-auto"
              // onClick={handlePayNow}
              >
                Pay Now
              </button> */}
                  <button
                    type="submit"
                    disabled={alreadyEnrolled}
                    className={`w-full py-3 rounded-xl font-semibold transition
    ${alreadyEnrolled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-800"
                      }
  `}
                  >
                    {alreadyEnrolled ? "Already Enrolled" : "Proceed to Payment"}
                  </button>


                </div>
              </form>


            </DialogContent>
          </Dialog>

          <button
            type="button"
            className="alt-enroll-btn1"
            onClick={handleEnrollNow}
          >
            ENROLL NOW  @ <span className="actprice1" ><del>₹4999</del></span> <span className="discountprice1">₹799</span>
          </button>


        </div>
      )}


    </>
  );
}

export default DiplomaAndAdvancedDiplomaCourses;
