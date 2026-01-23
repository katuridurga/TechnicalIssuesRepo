import React, { useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "../BachelorsInComputerScienceGameDevelopment/BachelorsInComputerScienceGameDevelopment.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import m5 from "../../../assets/img/Icons/flags.webp";
import c1 from "../../../assets/img/Courses/careeroprt.webp";
import m6 from "../../../assets/img/Icons/jams.webp";
import m8 from "../../../assets/img/Icons/team-work.webp";
import awic1 from '../../../assets/img/banners/expertn.webp';
import awic2 from '../../../assets/img/banners/medaln.webp';
import awic3 from '../../../assets/img/banners/mindsetn.webp';
import { FaPlus, FaMinus } from "react-icons/fa";
import awic from '../../../assets/img/banners/global-networkn.webp';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Helmet } from "react-helmet";
import HomeContentForm from '../../../content/HomeContentFrom';


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
        <Box sx={{ p: 3 }}>
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


function Courses(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const semesters = [
    {
      title: "3D Game Art Foundation",
      subjects: [
        "3D Character Art",
        "3D Asset Creation Pipeline (Modeling, Texturing, Lighting, Rigging, Rendering)",
        "Digital Sculpting Basics",
        "Props & Vehicles for Games",
        "Environment Art",
        "UI/UX Design for Games",

      ],
    },
    {
      title: "Game Design Core",

      subjects: [

        "History & Genres of Games",
        "Game Design & Production Pipeline",
        "Level Design",
        "Game World Building",
        "Game Design Documentation",
        "Project Management & QA",
      ],
    },
    {
      title: "Technology Integration",

      subjects: [

        "Unreal Blueprints",
        "Game Engine Integration for 3D Assets",
      ],
    },
    {
      title: "Specialization in 3D Game Art",

      subjects: [

        "Advanced Digital Sculpting",
        "Advanced Character Creation for Games",
        "Procedural Material Creation using Node Systems",
        "Technical Art Programming in Game Engines",
        "Asset Optimization for Real-Time Rendering",
      ],
    },
    {
      title: "Specialization in Game Design",

      subjects: [

        "Gamification Principles",
        "Game Marketing & Publishing",
        "Monetization Strategies",
        "Game Psychology & Storytelling",
        "System Design & Balancing",
      ],
    },
  ];

  const items = [
    {
      title: "Dual Specialization in Art & Design:",
      subjects: [
        "Blend creative storytelling and technical excellence. Develop skills in 3D modeling, animation, character art, level design, UI/UX, and game mechanics to work across the development pipeline.",

      ],
    },
    {
      title: "Industry-Aligned Curriculum :",

      subjects: [

        "Learn what studios demand—master asset creation, design workflows, environment building, and integration with industry-standard engines like Unity and Unreal Engine",
      ],
    },
    {
      title: "Flexible Elective Pairing :",

      subjects: [
        "Customize your Semester 3 experience by choosing one elective from Game Design and one from 3D Game Art, allowing you to tailor your education to specific career goals.",
      ],
    },
    {
      title: "Capstone Game Project & Dissertation :",

      subjects: [

        "Your final semester focuses on a full production cycle—design, art, integration, testing—leading to a comprehensive portfolio, academic dissertation, and a playable game prototype.",
      ],
    },

  ];

  const faqs = [
    {
      question: "Game Art / Game Design",
      answer: [
        "Game Designer / Level Designer",
        "3D Artist / Character Artist / Environment Artist",
        "Technical Artist / UI/UX Designer",
        "Game Producer / Narrative Designer",
        "Indie Game Developer / Researcher / Educator",
      ],
    },



  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Mmaster3d' : 'master3d'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Master’s in 3D Game Art and Game Design</h1>  <a href="#Enquire-Now" class="capplynow">Apply Now</a></div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "India’s Best Game Development college | Backstage Pass Institute of Gaming",
    "item": "https://www.backstagepass.co.in/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Master’s in 3D Game Art and Game Design | Backstage Pass Institute of Gaming",
    "item": "https://www.backstagepass.co.in/courses/masters-in-3d-game-art-design/"  
  }]
}
`}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Backstage Pass Institute of Gaming",
  "url": "https://www.backstagepass.co.in/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.backstagepass.co.in/courses/masters-in-3d-game-art-design/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
  `}
        </script>
        <title>Master’s in 3D Game Art and Game Design | Backstage Pass Institute of Gaming</title>

        <meta property="og:title" content="Master’s in Game Technology | Advanced Game Development & Design" />
        <meta property="og:description" name="description" content="Master the 3D game art and design in sculpting, modeling, texturing, & more. Build worlds and design characters with Unreal blueprints and engine integration. You will learn from experts, create a professional portfolio, and confidently step into the game industry." />
            <meta name="description" content="Master the 3D game art and design in sculpting, modeling, texturing, & more. Build worlds and design characters with Unreal blueprints and engine integration. You will learn from experts, create a professional portfolio, and confidently step into the game industry.." />
        <meta property="og:url" content="https://www.backstagepass.co.in/courses/masters-in-3d-game-art-design/" />

        <meta name="keywords" content="Master’s in 3D Game Art, Master’s in Game Design, 3D Game Art and Design course, Game Art and Design degree, Game Design Master’s program, Master’s degree in 3D game art and game design in India, masters in 3D game art & design​" />
        <link rel="canonical" href="https://backstagepass.co.in/courses/masters-in-3d-game-art-design/" />
      </Helmet>






      <div className="courses-wrapper">


        <div className="course-page">
          {/* Info Card */}
          <div className="info-card slanted-info">
            <div className="info-item">
              <span className="info-subtitle">Course Duration</span>
              <span className="info-title">2 years</span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Mode</span>
              <span className="info-title">Offline</span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Eligibility</span>
              <span className="info-title">Any Graduation


              </span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Affiliated</span>
              <span className="info-title">JNAFAU


              </span>

            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="overviewsection">
        <h2 className='courseHeading'>Course Overview</h2>
        <div className="brname"></div>
        <p>
          The Master’s in 3D Game Art and Game Design is a two-year, industry-aligned postgraduate program crafted for aspiring game creators who want to master both the visual and design aspects of interactive digital worlds. With an emphasis on hands-on production, creativity, and innovation, the program empowers students to take ideas from sketch to screen using cutting-edge tools and real-time game engines.
        </p>
      </div>

      {/* Course Objectives / Curriculum */}
      <div className="curriculum-section" style={{ marginTop: "24px" }}>
        <h2 className='courseHeading'>Course Objectives</h2>
        <div className="brname"></div>
        <div className="">
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={{ display: "flex", marginBottom: "14px", fontSize: "16px", gap: "10px", alignItems: "flex-start", justifyContent: "flex-start", lineHeight: "1.6" }}>
                <CheckBoxIcon style={{ color: "#ec1923", marginRight: "12px", fontSize: "22px", marginTop: "3px" }} />
                <span><div style={{ fontWeight: "900" }}>{item.title}</div><div> {item.subjects}</div> </span>

              </li>

            ))}
          </ul>
        </div>
      </div>
      {/* Course Objectives / Curriculum */}
      <div className="curriculum-section" style={{ background: "#f9fafb", marginBottom: "20px", boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)", padding: "10px", marginTop: "30px" }}>
        <h2 className='courseHeading'>Course Curriculum</h2>
        <div className="brname"></div>
        <section className="curriculum">
          <div className="curriculum-grid">
            {semesters.map((sem, index) => {
              // Start a new row every 3 semesters
              if (index % 3 === 0) {
                return (
                  <div className="curriculum-row" key={index}>
                    {semesters.slice(index, index + 3).map((s, i) => (
                      <div key={i} className="semester-card">
                        <h4 className="semester-title">{s.title}</h4>
                        <ul>
                          {s.subjects.map((subject, j) => (
                            <li key={j}>{subject}</li>
                          ))}
                        </ul>


                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}


          </div>

        </section>



      </div>
      <div id="Beyond-The-Course" backgroundColor="blue" height="180vh" style={{ padding: "0px 0px", marginBottom: "20px" }}>
        <h2 className='courseHeading' style={{ color: "#ec1923", marginTop: "0px" }}>Beyond The Course</h2>
        <div className="brname"></div>
        <p className='normaltext' style={{ width: "75%", margin: "0px auto" }}>At Backstage Pass, we ensure that learning is limitless and not restricted within the four walls of the classroom. Therefore, we provide students with activities and opportunities where they get to enter the real world and get firsthand experience of how things work in the gaming industry.




        </p>

        <div className='courseUpdates1'>
          <ul style={{ width: "80%", margin: "0px auto", paddingTop: "10px" }}>
            <li>
              <div className='BeyondLeft'>
                <img src={m5} alt="m5" />
              </div>
              <div className='BeyondRight'>
                <p className='lsh'>Final Game Project</p>
                <p>Research project exploring critical topics in game art, design, or player behavior
                </p>
              </div>
            </li>
            <li>
              <div className='BeyondLeft' style={{ width: "60px" }}>
                <img src={m6} alt="m6" />
              </div>
              <div className='BeyondRight'>
                <p className='lsh'>Professional Portfolio</p>
                <p>Industry-ready demo reel or design documentation</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m8} alt="m8" />
              </div>
              <div className='BeyondRight'>
                <p className='lsh'>Dissertation</p>
                <p>Research project exploring critical topics in game art, design, or player behavior

                </p>
              </div>


            </li>


          </ul>
        </div>

      </div>
      <div id="Career-Opportunities" backgroundColor="brown" >

        <div className='coppertunities'>
          <div className='left'>
            <img src={c1} alt="careerop" />
          </div>

          <div className="right career-tabs-container">
            {/* Tabs */}


            <section className="max-w-3xl mx-auto p-6 iconsv" style={{ background: "#f9fafb", color: "#000", width: isMobileState ? "100%" : "80%", margin: "0px" }}>
              <h2 className='courseHeading' style={{ textAlign: "left", width: isMobileState ? "100%" : "80%" }}>Career Opportunities</h2>
              <div className="brname"></div>
              <div className="border rounded-lg bg-white" style={{ marginTop: "30px" }}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 inline-block justify-start" style={{ borderBottom: "1px solid#d8d7d7", width: "100%", margin: "0px auto" }}>
                    <button
                      className="w-full flex justify-center items-center text-left btnplus"
                      onClick={() => toggleFAQ(index)}
                      style={{
                        background: "#f9fafb",
                        color: "#000",
                        justifyContent: "flex-start",
                        paddingLeft: "0px"

                      }}
                    >
                      {/* Icon inside circle */}
                      <span
                        className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full text-black plusbtn"
                        style={{
                          background: "#fff",
                          color: "#000",
                          border: "1px solid #000",
                          borderRadius: "0%",
                          padding: "20px"
                        }}
                      >
                        {openIndex === index ? (
                          <FaMinus className="w-3 h-3" />
                        ) : (
                          <FaPlus className="w-3 h-3" />
                        )}
                      </span>
                      <span className="faqquestion text-lg font-medium text-gray-800" style={{
                        paddingLeft: "20px",
                        textAlign: "justify",
                        lineHeight: "24px",
                        fontSize: "16px"
                      }}>
                        {faq.question}
                      </span>


                    </button>

                    {openIndex === index && (
                      <ul style={{ paddingLeft: "6.5rem", lineHeight: "1.9" }}>
                        {faq.answer.map((point, i) => (
                          <li key={i} style={{ listStyle: "disc" }}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                ))}
              </div>



            </section>

          </div>
        </div>
      </div>

      <section className="tuitiona-aid-sections mbtextlr">

        <div className="tuitiona-aid-sectionsLeft left1">

          <div className="show-grid desg" style={{ margin: "0px auto", backgroundColor: "#ffffff" }}>
            <h3 className="mainHeadingTotal3">
              Why choose backstage Pass?
            </h3>
            <div className="maind">

              <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                <div style={{
                  flexShrink: "0",
                  position: "relative",
                  background: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "45px",
                  height: "45px",
                  boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                }}><LazyLoadImage effect="blur"
                  src={awic2}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30px",
                    maxHeight: "30px",
                    objectFit: "contain",
                    display: "block",
                  }} /></div>
                <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                  <p className="suprts" style={{ color: "#000", fontWeight: "400" }}>Cross-disciplinary training in both art and design</p>

                </div>
              </div>
              <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                <div style={{
                  flexShrink: "0",
                  position: "relative",
                  background: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "45px",
                  height: "45px",
                  boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                }}><LazyLoadImage effect="blur" width="30" height="30" src={awic} alt="icons" style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "30px",
                  maxHeight: "30px",
                  objectFit: "contain",
                  display: "block",
                }} /></div>
                <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                  <p className="suprts" style={{ color: "#000", fontWeight: "400" }}>Emphasis on creativity, interactivity, and portfolio
                  </p>

                </div></div>

            </div>
            <div className="maind">
              <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                <div style={{
                  flexShrink: "0",
                  position: "relative",
                  background: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "45px",
                  height: "45px",
                  boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                }}><LazyLoadImage effect="blur" width="30" height="30" src={awic1} alt="icons" style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "30px",
                  maxHeight: "30px",
                  objectFit: "contain",
                  display: "block",
                }} /></div>
                <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                  <p className="suprts" style={{ color: "#000", fontWeight: "400", marginTop: "4px" }}>Mentorship by experienced game professionals

                  </p>

                </div>
              </div>
              <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                <div style={{
                  flexShrink: "0",
                  position: "relative",
                  background: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "45px",
                  height: "45px",
                  boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                }}><LazyLoadImage effect="blur" width="30" height="30" src={awic3} alt="icons" style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "30px",
                  maxHeight: "30px",
                  objectFit: "contain",
                  display: "block",
                }} /></div>
                <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                  <p className="suprts" style={{
                    color: "#000", fontWeight: "400", marginTop: "4px"
                  }}>Aligned with real-world industry practices

                  </p>


                </div></div>
            </div>

          </div>


        </div>


      </section>

      <div id="Enquire-Now" style={{ marginTop: "30px", fontSize: "14px" }}>
        <HomeContentForm />
      </div>





    </>
  )
}

Courses.propTypes = {

}

export default Courses;

