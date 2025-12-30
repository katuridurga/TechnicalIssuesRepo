import React, { useState, useRef, useEffect } from "react";
import "./DiplomaAndAdvancedDiplomaCourses.css";
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
import r4 from "../../../assets/img/partners/r4.webp";
import r5 from "../../../assets/img/partners/r5.webp";
import r7 from "../../../assets/img/partners/r7.webp";
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  const [isActives, setIsActives] = useState(true);
  const theme = useTheme();




  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
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
        <div className="feature-iconcer" style={{ fontWeight: "bold" }}><img/></div>
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
        <div
          className="feature-iconcercar"
          style={{ fontWeight: "bold" }}
        >
          <img src={img} alt={title} />
        </div>

        <div>
          <div
            className="feature-titlecar"
            style={{ fontSize: isMobileState ? "14px" : "15px" }}
          >
            {title}
          </div>

          {subtitle && <p className="feature-subtitlecar">{subtitle}</p>}
        </div>
      </div>
    );
  }
function Featurecarrer1({ title, subtitle }) {
  return (
    <div className="feature-boxcar" style={{padding:"8px"}}>
      <div className="feature-iconcercar" style={{fontSize:"18px", fontWeight:"bold"}}><img src={modeling}/></div>
      <div>
        <div className="feature-titlecar" style={{fontSize:"14px"}}>{title}</div>
      </div>
    </div>
  );
}
function Featurecarrer2({ title, subtitle }) {
  return (
    <div className="feature-boxcar">
      <div className="feature-iconcercar" style={{fontSize:"18px", fontWeight:"bold"}}><img src={prop}/></div>
      <div>
        <div className="feature-titlecar" style={{fontSize:"14px"}}>{title}</div>
      </div>
    </div>
  );
}
function Featurecarrer3({ title, subtitle }) {
  return (
    <div className="feature-boxcar">
      <div className="feature-iconcercar" style={{fontSize:"18px", fontWeight:"bold"}}><img src={gameasst}/></div>
      <div>
        <div className="feature-titlecar" style={{fontSize:"14px"}}>{title}</div>
      </div>
    </div>
  );
}
function Featurecarrer4({ title, subtitle }) {
  return (
    <div className="feature-boxcar">
      <div className="feature-iconcercar" style={{fontSize:"18px", fontWeight:"bold"}}><img src={envir}/></div>
      <div>
        <div className="feature-titlecar" style={{fontSize:"14px"}}>{title}</div>
      </div>
    </div>
  );
}
  function Featureben({ title, subtitle, img }) {
    return (
      <div className="feature-boxcar">
        <div
          className="feature-iconcercar"
          style={{ fontWeight: "bold", display:"flex" }}
        >
          <img src={img} alt={title} />
        </div>

        <div>
          <div
            className="feature-titlecar"
            style={{ fontSize: isMobileState ? "14px" : "15px" }}
          >
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
        <PaymentC onClose={handleFormClose} style={{width:"75%"}} />
      )}
      
      {/* ===== Banner Section (100%) ===== */}
      <section className="banner-section hero-section" style={{ paddingBottom: "20px" }}>
     

  <div className="left-content">
   
          <div className="col-4 leftfrmv">
                <h1 className="hero-title">Basics Of Maya for Beginners</h1>

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

                <div className="savingamto">
                  <p>Limited Time Offer!</p>
                </div>

                {/* COURSE INFO */}
                {isMobileState ? (
                  <div className="course-info">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="course-info-head">7 Modules</p>
                        <p>with Certifications</p>
                      </div>
                      <div className="col-6">
                        <p className="course-info-head">6 Hours</p>
                        <p>Recorded Content</p>
                      </div>
                      <div className="col-6">
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
               {isMobileState && (
  <aside className="right-sticky">
    <div className="sticky-form">
      <h3 className="previewcon" style={{ textAlign: "center" }}>
        Get this Course @ 799
      </h3>

      <input
        type="text"
        placeholder="Name"
      />

      <input
        type="text"
        placeholder="Email"
      />

      <input
        type="tel"
        placeholder="Phone"
      />

      <button onClick={() => setOpenFormModal(true)}>
        Enroll Now
      </button>
    </div>
  </aside>
)}
  </div>


</section>

     



      {/* ===== Content Section ===== */}
      <section className="content-wrapper page-wrapper">

        {/* Left Content - 80% */}
        <div className="left-content">
          <section className="" style={{ backgroundColor: "#f6f7f8" }}>
            <div className="section-wrappercer">
              <h2 className="previewcon" style={{fontSize:isMobileState?"20px":"28px"}}>Basics Of Maya Course Overview
                <span className="displaypath"></span><span className="designdisplay"></span></h2>
              <p className="previewconp">
                Ever wanted to bring your ideas to life in 3D? This beginner-friendly course introduces Autodesk Maya 2024 step by step. Learn the interface, basic modelling, UV unwrapping, and simple texturing to create your own 3D assets from scratch—no prior 3D experience needed, just curiosity and creativity.</p>

            </div>
          </section>
          <section className="" style={{ backgroundColor: "#ffffff", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div class="scene">
              <h1>Last Chance! Offer Ends Jan 15, 2026
</h1>
            </div>
          </section>
          <section className="" style={{marginBottom: "0px" }}>
            <div className="section-wrappercer">

              <h3 className="previewcon" style={{fontSize:isMobileState?"20px":"28px"}}>Key Features</h3>

              <div className="feature-gridcer">
                {/* <Featureben title="Beginner-friendly Maya fundamentals
" />
                <Featureben title="Practical, step-by-step asset creation" />
                <Feature title="7 compact learning modules" />
                <Feature title="6 hours of recorded video lessons
" />
                <Feature title="100% online and self-paced

" />
                <Feature title="Certificate on completion


" /> */}
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



          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "0px" }}>
            <div className="section-wrappercer modules-section">

              <div className="modules-grid">
                <div>
                  <h2 className="previewcon" style={{fontSize:isMobileState?"20px":"28px"}}>Course Topics You will Learn

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



          <section style={{ backgroundColor: "#f6f7f8" }}>
            <div className="section-wrappercer modules-section">

              <div className='coppertunitiescer'>
                {isMobileState && (
                  <h2 className='previewcon' style={{ textAlign: isMobileState ? "left" : "left", width: isMobileState ? "100%" : "100%", fontSize:isMobileState?"20px":"28px" }}>Let Your Certificate Speak </h2>
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
                      <h2 className='previewcon' style={{ textAlign: "left",fontSize:isMobileState?"20px":"28px", width: isMobileState ? "100%" : "100%" }}>Let Your Certificate Speak </h2>
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
           <section className="" style={{ backgroundColor: "", marginBottom: "0px" }}>
            <div className="section-wrappercer">
              <h3 className="previewcon" style={{fontSize:isMobileState?"20px":"28px"}}>This is the One for You, If You are
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
          
        
        
            <section className="" style={{ backgroundColor: "#ffffff", marginBottom:"30px" }}>
              <div className="section-wrappercer">

                <h3 className="previewcon">Career Opportunities
                </h3>
<p style={{fontSize:"16px"}}>Once you complete this course, you can begin your journey as</p>
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
           
          <section className="" style={{ backgroundColor: "#f6f7f8", marginBottom: "0px" }}>
            <div className="section-wrappercer">
              <h3 className="previewcon" style={{fontSize:isMobileState?"20px":"28px"}}>Our Learners Work Across Top Companies</h3>

              <div className="logo-grid-45">
                <img src={r1} alt="" width="85" />
                <img src={r2} alt="" width="90" />
                <img src={r11} alt="" width="80" />
                <img src={r10} alt="" width="80" />

                <img src={r4} alt="" width="85" />
                <img src={r5} alt="" width="90" />
                <img src={r7} alt="" width="85" />
                <img src={r8} alt="" width="90" />

                <img src={r12} alt="" width="85" />
                <img src={r13} alt="" width="90" />
                <img src={r9} alt="" width="80" />
                <img src={r14} alt="" width="80" />
              </div>
            </div>
          </section>



        



          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "0px" }}>

            <div className="section-wrappercer modules-section">
              <div className='coppertunitiescer1' style={{ gap: isMobileState ? "0px" : "47px" }}>



                <div className="left career-tabs-container" style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
                  {/* Tabs */}


                  <section className="max-w-3xl mx-auto p-6 iconsv" style={{ color: "#000", width: isMobileState ? "100%" : "100%", margin: "0px" }}>
                    {!isMobileState && (
                      <h2 className='previewcon' style={{ textAlign: "left", width: isMobileState ? "100%" : "100%",fontSize:isMobileState?"20px":"28px" }}>Why Backstage Pass Certification Course?


                      </h2>
                    )}

                    <section className="certificatedisplay ">


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
                    <h2 className='previewcon' style={{ textAlign: "left",fontSize:isMobileState?"20px":"28px",width: isMobileState ? "100%" : "100%" }}>Why Backstage Pass Certification Course?


                    </h2>
                  )}
                  <img src={wtwh} alt="careerop" style={{ width: isMobileState ? "100%" : "100%" }} />
                </div>
              </div>
            </div>
          </section>
          <section className="" style={{ backgroundColor: "#ffffff", marginBottom: "30px" }}>
            <div className="section-wrappercer">

              <h3 className="previewcon" style={{fontSize:isMobileState?"20px":"28px"}}>Benefits of the Course

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

        {/* Right Sticky Form - 20% */}

{/* ===== RIGHT STICKY FORM (DESKTOP ONLY) ===== */}
{!isMobileState && (
  <aside className="right-sticky">
    <div className="sticky-form">
      <h3 className="previewcon" style={{ textAlign: "center" }}>
        Get this Course @ 799
      </h3>

      <input
        type="text"
        placeholder="Name"
      />

      <input
        type="text"
        placeholder="Email"
      />

      <input
        type="tel"
        placeholder="Phone"
      />

      <button className="en-btn" onClick={() => setOpenFormModal(true)}>
        Enroll Now
      </button>
    </div>
  </aside>
)}

      </section>

      <section className="bancer">
        <div class="small-banner1 ftbaner1"><div className="col-12 col-lg-8 col-md-7 col-sm-12 bottomcer"><div class="foot-ban"> <p class="didYouKnow h6 mb-3">Enroll in the Basics of Maya Course and Earn Certification @
        </p><div className="disdvi"><span className="actprice"><del>₹3000</del></span><span className="discountprice">₹2499</span> <span className="savingamt">84% Disc.</span></div>
          <div className="savingamto" style={{ width: "150px" }}><p className="" style={{ margin: "0px", fontWeight: "600", fontSize: "12px" }}>Limited Time Offer!</p></div></div></div></div></section>
      {isButtonVisible && (
        <div className="CousellingButton1 tetstL1" style={{ marginBottom: "0px", backgroundColor:"#ffffff" }} onClick={scrollToBottom}>
              {/* DIALOG FROM ANOTHER PAGE */}
              <PaymentC
               className="my-custom-class"
                style={{ width: "450px" }}
                open={openFormModal}
                onClose={() => setOpenFormModal(false)}
              /> </div>
      )}

    </>
  );
}

export default DiplomaAndAdvancedDiplomaCourses;
