import React, { useState, useRef, useEffect } from "react";
import "./DiplomaAndAdvancedDiplomaCourses.css";
import { Helmet } from "react-helmet";
import { useSelector, shallowEqual } from "react-redux";
import cer from "../../../assets/img/test/certificate-with-badge.png";
import { FaPlay } from "react-icons/fa";
import advdip from '../../../assets/img/banners/Thumbnailformaya.png';
import r1 from "../../../assets/img/partners/r1.webp";
import r2 from "../../../assets/img/partners/r2.webp";
import r4 from "../../../assets/img/partners/r4.webp";
import r5 from "../../../assets/img/partners/r5.webp";
import r7 from "../../../assets/img/partners/r7.webp";
import r6 from "../../../assets/img/partners/r6.webp";
import rc2 from "../../../assets/img/partners/2.webp";
import su from "../../../assets/img/partners/supergaming.png";
import r8 from "../../../assets/img/partners/SumoDigital.webp";
import r9 from "../../../assets/img/partners/Ubisoft.webp";
import r10 from "../../../assets/img/partners/Sony.webp";
import r11 from "../../../assets/img/partners/Qualcomm.webp";
import r12 from "../../../assets/img/partners/Juego.webp";
import r13 from "../../../assets/img/partners/Gamitronics.webp";
import r14 from "../../../assets/img/partners/GSNgames.webp";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import wtwh from "../../../assets/img/banners/afterwtwillhappen.webp";
import wtaln from "../../../assets/img/banners/allyouneed.webp";
import { FaLinkedin } from "react-icons/fa";
import Ourawards from "../../../content/ourawards";
import jobn from '../../../assets/img/placentsn.webp';
import clockn from '../../../assets/img/star.webp';
function Feature({ title, subtitle }) {
  return (
    <div className="feature-box">
      <div className="feature-iconcer" style={{fontSize:"18px", fontWeight:"bold", background:"none"}}><img className="staricon" src={clockn}/></div>
      <div>
        <div className="feature-title" style={{ color: "#000000" }}>{title}</div>
      </div>
    </div>
  );
}
function Feature1({ title, subtitle }) {
  return (
    <div className="feature-box1">
      <div className="feature-iconcer" style={{fontSize:"18px", fontWeight:"bold"}}>✓</div>
      <div>
        <div className="feature-title">{title}</div>
      </div>
    </div>
  );
}
function Featurecarrer({ title, subtitle }) {
  return (
    <div className="feature-boxcar">
      <div className="feature-iconcercar" style={{fontSize:"18px", fontWeight:"bold"}}><img src={jobn}/></div>
      <div>
        <div className="feature-titlecar">{title}</div>
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

  const handlePayNow = () =>
    window.open(
      "https://backstagepass.co.in/landingpage/short-course/",
      "_blank"
    );
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
  const items = ["Confidently navigate the Maya 2024 interface and essential tools.",
    "Create clean and detailed 3D props and assets from scratch.",
    "Understand and apply UV unwrapping for game-ready models.",
    "Work with materials and shaders inside Maya.",
    "Apply image-based texturing to bring your models to life.",
    "Build a solid foundation for moving into advanced 3D workflows or portfolio projects."];
  const itemssys = ["Operating System: Windows®, Apple®, Linux®",
    "RAM: 8 GB of RAM (16 GB or more recommended) ",
    "CPU: 64-bit Intel® or AMD® with SSE4.2 instruction set, For macOS, Apple Silicon arm64 or Intel x86",
    "GPU: Certified graphics card (e.g., NVIDIA RTX series, Quadro) for smooth viewport.",
    "Storage: SSD for faster loading and performance.",
    "Disk Space: 7 GB of free disk space for installation"];

  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awardsData.length);
    }, 4000); // autoplay speed

    return () => clearInterval(interval);
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Certificate Program in Basics of Maya?",
      answer:
        "This is a beginner-friendly online course designed to introduce students to Autodesk Maya. It covers interface navigation, essential modelling tools, UV mapping, and basic texturing, enabling learners to create simple 3D assets from scratch.",
    },
    {
      question: "Who is this course ideal for?",
      answer:
        "The course is designed for absolute beginners, school or college students, aspiring 3D artists, game design enthusiasts, and anyone looking to start a career in 3D modelling or digital content creation.",
    },

    {
      question: "Do I need previous experience in 3D modelling or Maya?",
      answer:
        "No prior knowledge is required. The course starts with the fundamentals and gradually progresses through practical exercises suited for first-time users.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes. After completing all modules and required activities, students will receive a Certificate of Completion.",
    },
    {
      question: "What software do I need for this course?",
      answer:
        "You will need Autodesk Maya, which offers an educational version for students or a free trial for beginners.",
    },
    {
      question: "How is the course conducted?",
      answer:
        "This is a self-paced online course, allowing students to learn at their convenience through pre-recorded videos and practical demonstrations.",
    },
    {
      question: "What are the career opportunities after completing this course?",
      answer:
        "After completing the course, learners can pursue entry-level roles such as 3D Modelling Intern, Junior Asset Artist, Game Art Trainee, or continue advancing into animation, VFX, or game development specialities.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [isOpenM, setIsOpenM] = useState(false);
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
  const videoRef = useRef(null); // To reference the video element
  const [isPlaying, setIsPlaying] = useState(false); // To manage the play state

  const handlePlay = () => {
    // Play the video when the image is clicked
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Update the state to hide the image
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Certificate Program in Essentials of Game Design | Backstage Pass
        </title>
      </Helmet>

      <div id="scroll-container" className="scroll-wrapper">
        <div className="mainPanel1">
          <div className="course-wrappecer">

            <section
              className="hero-section" style={{padding:"50px 0px"}}
>
              <div className="hero-container" style={{display:"flex", flexDirection:isMobileState?"column-reverse":""}}>
                <div className="col-8" style={{width:isMobileState?"100%":"52%"}}>
                  {/* <nav aria-label="breadcrumb" className="bc-wrap">
                    <ol className="bc">
                      <li className="bc-item">
                        <a href="/" className="bc-link">Home</a>
                      </li>

                      <li className="bc-item bc-highlight">
                        <a href="/courses/" className="bc-link">Courses</a>
                      </li>

                      <li
                        className="bc-item bc-current"
                        aria-current="page"
                      >
                        Maya for Basics
                      </li>
                    </ol>
                  </nav> */}

                  <h1 className="hero-title" style={{fontSize:isMobileState?"35px":"40px"}}>
                   Basics Of Maya for Beginners

                  </h1>


                  <p className="hero-text" style={{maxWidth:isMobileState?"100%":"100%"}}>
                    The Certificate Program in Basics of Maya is a beginner-friendly course designed to introduce students to the core fundamentals of Autodesk Maya, including interface navigation, essential modelling tools, UV unwrapping, and basic texturing. Through guided lessons and practical, hands-on exercises, students will learn how to create 3D assets from scratch and understand the complete Maya workflow.
                  </p>
                  <p className="discountpanel">Buy this Course @

                  </p><div className="disdvi"><span className="actprice"><del>₹4999</del></span><span className="discountprice">₹799</span> <span className="savingamt">84% Disc.</span> </div>
                  <div className="savingamto"><p className="">Limited Time Offer!</p></div>
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
<div className="col-4" style={{ width:isMobileState?"100%":"48%" }}>
  <div className="videomain2maya">
  <video ref={videoRef} controls loop>
    <source
      src="https://www.backstagepass.co.in/landingpage/LmsTrailerFinalLowRender.mp4"
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

</div>


              </div>
            </section>
            <section className="" style={{ backgroundColor: "#f6f7f8" }}>
              <div className="section-wrappercer">
                <h2 className="previewcon">Basics Of Maya Course Overview
   <span className="displaypath"></span><span className="designdisplay"></span></h2>
                <p className="previewconp">
                  Have you ever wanted to bring your ideas to life in 3D? Whether it’s game assets, props, or creative projects, Autodesk Maya is one of the most powerful tools for 3D modelling and texturing.</p>
                <p className="previewconp">
                  In this course, we’ll explore Maya 2024 step by step - perfect for complete beginners. You’ll learn how to navigate the Maya interface, work with essential modelling tools, create detailed props, unwrap UVs, and apply materials. We’ll also cover the basics of image-based texturing inside Maya so you can give your models realistic looks.</p>
                <p className="previewconp">
                  By the end of this course, you’ll be comfortable creating 3D assets from scratch, understanding the Maya workflow, and preparing your models with clean UVs and textures. No prior 3D experience is needed - just curiosity and creativity.
                </p>
              </div>
            </section>
            <section className="" style={{ backgroundColor: "#ffffff", marginBottom:"30px" }}>
              <div className="section-wrappercer">

                <h3 className="previewcon">Key Features</h3>

                <div className="feature-gridcer">
                  <Feature title="Beginner-friendly Maya fundamentals
" />
                  <Feature title="Practical, step-by-step asset creation" />
                  <Feature title="7 compact learning modules" />
                  <Feature title="6 hours of recorded video lessons
" />
                  <Feature title="100% online and self-paced

" />
                  <Feature title="Certificate on completion


" />
                </div>
              </div>
            </section>
            <section className="" style={{ backgroundColor: "#f6f7f8", marginBottom:"0px" }}>
              <div className="section-wrappercer" style={{paddingBottom:"0px"}}>
               <h3 className="previewcon" style={{marginBottom:"0px"}}>Our Awards</h3>
                   </div>
            <Ourawards />
        
            </section>


            <section className="" style={{ backgroundColor: "#ffffff", marginBottom:"0px" }}>
              <div className="section-wrappercer modules-section">

                <div className="modules-grid">
                  <div>
                    <h2 className="previewcon">Course Topics You will Learn

                    </h2>

                    <details className="style-1">
                      <summary>Introduction to 3D and Maya</summary>
                      <ul>
                        <li>What is 3D? Uses in Games, Film, and Design</li>
                        <li>Types of 3D Assets – Props, Environments, Characters</li>
                        <li>Introduction to Maya 2024 – Installation and Setup</li>
                        <li>Exploring the Maya Interface – Menus, Shelves, Panels</li>
                        <li>Navigating the Viewport – Orbit, Pan, Zoom</li>
                        <li>Transform Tools – Move, Rotate, Scale</li>
                        <li>Channel Box & Attribute Editor – Understanding Object Data</li>
                      </ul>
                    </details>

                    <details className="style-1">
                      <summary>Working with Geometry Scene</summary>
                      <ul>
                        <li>Creating Primitives – Cube, Sphere, Cylinder, Plane</li>
                        <li>Transformations – Pivots, Snapping Tools, Local vs World Space</li>
                        <li>Editable Components – Vertex, Edge, Face Overview</li>
                        <li>Soft Selection – Editing Multiple Components Smoothly</li>
                        <li>Extrude Tool – Adding Depth and Complexity</li>
                        <li>Bevel Tool – Smoothening Edges</li>
                        <li>Insert Edge Loop & Multi-Cut Tool – Adding Detail</li>
                        <li>Boolean Operations – Combine and Subtract Shapes</li>
                        <li>Normals – Correct vs Reverse Normals</li>
                      </ul>
                    </details>

                    <details className="style-1">
                      <summary>Organization & Planning</summary>
                      <ul>
                        <li>Naming Conventions – Keeping Your Scene Organized</li>
                        <li>Using Layers for Asset Management</li>
                        <li>Grouping Objects – Hierarchies and Parent-Child Relationships</li>
                        <li>Image Plane Setup – Reference Images for Accurate Modeling</li>
                        <li>Scale and Unit Setup – Real-World Measurements</li>
                        <li>Proportion Planning – Matching Reference and Scale</li>
                        <li>Smooth Mesh Preview – Previewing Subdivision Surfaces</li>
                        <li>Local Orientation – Transforming Objects in Their Space</li>
                      </ul>
                    </details>

                    <details className="style-1">
                      <summary>Overview of the Prop</summary>
                      <ul>
                        <li>Introduction & Reference Setup</li>
                        <li>Blocking the Main Body</li>
                        <li>Roof Modeling – Base Structure</li>
                        <li>Roof Detailing – Planks & Overlaps</li>
                        <li>Main Body & Platform Base Modeling</li>
                        <li>Window Modeling</li>
                        <li>Door Modeling</li>
                        <li>Circular Entry & Flower Frame</li>
                        <li>Fence Modeling</li>
                        <li>Support Beams & Small Additions</li>
                        <li>Final Topology</li>
                      </ul>
                    </details>

                    <details className="style-1">
                      <summary>Model Review, Cleanup, and Export</summary>
                      <ul>
                        <li>Checking Geometry – Identifying Problem Areas</li>
                        <li>Cleaning Up Geometry Problems – Using Cleanup Tool to Find and Fix Errors</li>
                        <li>Freeze Transform – Cleaning Up Object History</li>
                        <li>Retopology Introduction – Why Clean Geometry Matters</li>
                        <li>Preparing for UV Mapping – Correcting Topology Issues</li>
                        <li>FBX Export – File Setup for Texturing Software</li>
                      </ul>
                    </details>

                    <details className="style-1">
                      <summary>UV Mapping Fundamentals</summary>
                      <ul>
                        <li>What is UV Mapping? – Texture Coordinates Explained</li>
                        <li>Understanding UV Shells and Layouts</li>
                        <li>Auto vs Manual UV Unwrapping Techniques</li>
                        <li>Using the UV Editor – Navigating and Editing</li>
                        <li>Texel Density – Matching Texture Resolution</li>
                        <li>Common Issues – Stretching and Overlaps</li>
                        <li>Fixing UV Problems – Aligning, Merging, and Splitting</li>
                        <li>Exporting UV Layouts for External Texturing</li>
                      </ul>
                    </details>

                    <details className="style-1">
                      <summary>Basic Texturing in Maya</summary>
                      <ul>
                        <li>Understanding Shaders – Lambert, Blinn, Phong</li>
                        <li>Material Attributes – Color, Specular, Bump</li>
                        <li>Applying Textures – Base Color and Maps</li>
                        <li>Hypershade Overview – Node Editor Walkthrough</li>
                        <li>Combining Textures Using Nodes</li>
                      </ul>
                    </details>

                  </div>

                </div>
              </div>
            </section>



            <section style={{ backgroundColor: "#f6f7f8" }}>
              <div className="section-wrappercer modules-section">

                <div className='coppertunitiescer'>
                   {isMobileState && (
                      <h2 className='previewcon' style={{ textAlign:isMobileState?"left": "left", width: isMobileState ? "100%" : "100%" }}>Let Your Certificate Speak </h2>
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
                      <h2 className='previewcon' style={{ textAlign: "left", width: isMobileState ? "100%" : "100%" }}>Let Your Certificates Speak </h2>
   )}
                      <section className="certificatedisplay ">

                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Certificate are awarded immediately upon successfully completing
                            all course modules. </p>
                        </div>

                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>You receive an official completion certificate that validates your
                            foundational Maya skills. </p>
                        </div>

                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Your certificate serves as proof of learning and can be added to your
                            resume or portfolio.</p>
                        </div>




                      </section>



                    </section>

                  </div>
                </div>
              </div>
            </section>
  <section className="" style={{ backgroundColor: "#ffffff", marginBottom:"0px" }}>

              <div className="section-wrappercer modules-section">
                <div className='coppertunitiescer1' style={{gap:isMobileState?"0px":"47px"}}>

                

                  <div className="left career-tabs-container" style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
                    {/* Tabs */}


                    <section className="max-w-3xl mx-auto p-6 iconsv" style={{ color: "#000", width: isMobileState ? "100%" : "100%", margin: "0px" }}>
                            {!isMobileState && (
                      <h2 className='previewcon' style={{ textAlign: "left", width: isMobileState ? "100%" : "100%" }}>After this Course, You will be Able to

                      </h2>
                           )}

                      <section className="certificatedisplay ">


                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Confidently navigate the Maya 2024 interface and essential tools.

                          </p>
                        </div>

                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Create clean and detailed 3D props and assets from scratch.
                          </p>
                        </div>

                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Understand and apply UV unwrapping for game-ready models.
                          </p>
                        </div>
                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Work with materials and shaders inside Maya.

                          </p>
                        </div>
                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Apply image-based texturing to bring your models to life.

                          </p>
                        </div>
                        <div className="certificate-point">
                          <FaPlay color="#d11" size={20} />
                          <p>Build a solid foundation for moving into advanced 3D workflows or portfolio projects.
                          </p>
                        </div>



                      </section>



                    </section>

                  </div>
  <div className='right'>
        {isMobileState && (
       <h2 className='previewcon' style={{ textAlign: "left", width: isMobileState ? "100%" : "100%" }}>After this Course, You will be Able to

                      </h2>
)}
                    <img src={wtwh} alt="careerop"  style={{width:isMobileState?"100%":"100%"}}/>
                  </div>
                </div>
              </div>
            </section>

 <section className="" style={{ backgroundColor: "#f6f7f8", marginBottom:"0px" }}>
              <div className="section-wrappercer">
                <h3 className="previewcon">Our Learners Work Across Top Companies</h3>

                <div className="logo-grid-4">
                    <img src={r6} alt="" width="85" />
                      <img src={rc2} alt="" width="85" />
                        <img src={su} alt="" width="85" />
                  <img src={r1} alt="" width="85" />
                  <img src={r2} alt="" width="90" />
                  <img src={r11} alt="" width="80" />
                  <img src={r10} alt="" width="80" />

                  <img src={r4} alt="" width="85" />
                  <img src={r5} alt="" width="90" />
                  <img src={r7} alt="" width="85" />
                  <img src={r8} alt="" width="90" />

                  <img src={r12} alt="" width="85" />
                  {/* <img src={r13} alt="" width="90" /> */}
                  <img src={r9} alt="" width="80" />
                  <img src={r14} alt="" width="80" />
                </div>
              </div>
            </section>
          
           
 <section style={{ backgroundColor: "#ffffff", marginBottom: "0px" }}>
  <div className="section-wrappercer">
    <div
      className="coppertunitiescer"
      style={{ gap: isMobileState ? "0px" : "47px" }}
    >

      {/* LEFT */}
      <div className="left">
        {isMobileState && (
          <h3
            className="previewcon"
            style={{ lineHeight: "30px", fontSize:isMobileState? "20px":"28px"}}
          >
            System Requirements for Autodesk Maya 2024
          </h3>
        )}

        <img
          src={wtaln}
          alt="careerop"
          style={{ width: isMobileState ? "100%" : "80%" }}
        />
      </div>

      {/* RIGHT */}
      <div className="right">
        {!isMobileState && (
          <h3
            className="previewcon"
            style={{ lineHeight: "40px", fontSize:isMobileState? "20px":"28px" }}
          >
            System Requirements for Autodesk Maya 2024
          </h3>
        )}

        <ul style={{ listStyle: "none", padding: 0 }}>
          {itemssys.map((itemsys, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                marginBottom: isMobileState?"20px": "25px",
                fontSize: isMobileState ? "15px" : "18px",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <CheckBoxIcon
                style={{
                  color: "#ec1923",
                  marginRight: "12px",
                  fontSize: "22px",
                  marginTop: "3px",
                }}
              />
              {itemsys}
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

            
            <section className="" style={{ backgroundColor: "#f6f7f8", marginBottom:"0px" }}>
              <div className="section-wrappercer">
                <h3 className="previewcon">This is the One for You, If You are
 </h3>

                <div className="courseUpdatescertificate">
                  <ul style={{ width: "100%", margin: "0px auto", paddingTop: "10px", paddingBottom:"30px" }}>
                    <li>

                      <Feature1 title=" 
" />
                      <div className='BeyondRightcer'>
                       
                        <p>Someone who wants to start learning 3D modelling from the basics.

                        </p>
                      </div>
                    </li>
                    <li>
                      <Feature1 title=" 
" />
                      <div className='BeyondRightcer'>
                       
                        <p>A complete beginner with no prior experience in Autodesk Maya</p>
                      </div>


                    </li>

                    <li>
                      <Feature1 title=" 
" />
                      <div className='BeyondRightcer'>
                        
                        <p>A student exploring career options in animation, gaming, or VFX.</p>
                      </div>


                    </li>

                    <li>
                      <Feature1 title=" 
" />
                      <div className='BeyondRightcer'>
                        
                        <p>An aspiring 3D artist looking to build foundational skills.
</p>
                      </div>


                    </li>
                    <li>
                      <Feature1 title=" 
" />
                      <div className='BeyondRightcer'>
                      
                        <p>A game design enthusiast who wants to create 3D assets.
</p>
                      </div>


                    </li>
                    <li>
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
            

            <section className="" style={{ backgroundColor: "#ffffff", marginBottom:"30px" }}>
              <div className="section-wrappercer">

                <h3 className="previewcon">Career Opportunities
                </h3>
<p style={{fontSize:"16px"}}>Once you complete this course, you can begin your journey as</p>
                <div className="feature-gridcer1">
                  <Featurecarrer title="3D Modeling & Texturing Artist
" />
                  <Featurecarrer title="3D Prop Artist
" />
                  <Featurecarrer title="3D Game Asset Artist
" />
                  <Featurecarrer title="Environment Artist

" />

                </div>
              </div>
            </section>
           
                <section className="" style={{ backgroundColor: "#f6f7f8" }}>
              <div className="section-wrappercer">
              <div className="section-wrappercer bancer">
                <div class="small-banner"><div class="container"><p class="didYouKnow" style={{marginTop:"10px"}}>Did You Know?</p><div class="foot-ban"><p>The average salary is</p><p class="salary h6">4L <p style={{fontSize:"20px", fontWeight:"600", color:"#fff"}}>/year in India</p></p></div></div></div>
              </div></div></section>
        <section className="" style={{ backgroundColor: "#ffffff", marginBottom:"30px" }}>
              <div className="section-wrappercer">
              <h2 className="previewcon">Frequently Asked Questions</h2>

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-itemcer ${activeIndex === index ? "active" : ""}`}
                >
                  <button className="faq-questioncer" onClick={() => toggleFAQ(index)}>
                    {faq.question}
                    <span className="faq-icon">+</span>
                  </button>

                  <div className="faq-answercer">{faq.answer}</div>
                </div>
              ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="bancer">
        <div class="small-banner1 ftbaner1"><div className="col-12 col-lg-8 col-md-7 col-sm-12 bottomcer"><div class="foot-ban"> <p class="didYouKnow h6 mb-3">Enroll in the Basics of Maya Course and Earn Certification @
        </p><div className="disdvi"><span className="actprice"><del>₹4999</del></span><span className="discountprice">₹799</span> <span className="savingamt">84% Disc.</span></div>
          <div className="savingamto" style={{width:"150px"}}><p className="" style={{margin:"0px", fontWeight:"bold",fontSize:"12px"}}>Limited Time Offer!</p></div></div></div></div></section>
      {isButtonVisible && (
        <div className="CousellingButton1 tetstL1" style={{ marginBottom: "0px" }} onClick={scrollToBottom}> <button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px" }} onClick={handleClickss}>Enroll Now
        </button> </div>
      )}

    </>
  );
}

export default DiplomaAndAdvancedDiplomaCourses;
