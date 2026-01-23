import React, { useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "../BachelorsInComputerScienceGameDevelopment/BachelorsInComputerScienceGameDevelopment.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import m5 from "../../../assets/img/Icons/flags.webp";
import c1 from "../../../assets/img/Courses/careeroprt.webp";
import m6 from "../../../assets/img/Icons/jams.webp";
import m7 from "../../../assets/img/Icons/gameconsole.webp";
import m8 from "../../../assets/img/Icons/team-work.webp";
import { FaPlus, FaMinus } from "react-icons/fa";

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
      title: "Traditional Art",
      subjects: [
        "Drawing & Sketching",
        "Colour, Value and Line",
        "Figure Drawing",
        "Anatomy of Humans and Birds",
        "Perspective",
        "Lighting and Shading",
        "Composition",
        "Live Drawing",
        "Color Theory",
        "Color Design",
        "Traditional Sculpting",
      ],
    },
    {
      title: "2D Game Art",
      subjects: [
        "Intro to Digital Painting - Image Editing and Design | 2D Illustration | Lighting & Shading | Composition | UI Design",
        "Digital Concept Art: Prop Design | Vehicle Design | Environment Design | Character and Creature Design",
      ],
    },
    {
      title: "3D Game Art",
      subjects: [
        "3D Art Pipeline: Modelling | Texturing | Lighting | Rendering | Animation",
        "3D Art Asset Creation: Props, Vehicle, Environment & Character creation",
        "Digital Sculpting for Environment, Props, Vehicle and Character creation",
      ],
    },
  ];

  const semsecond = [
    {
      title: "Game Design & Production",
      subjects: [
        "Game Genres & History",
        "Conceptulization and Design Thinking",
        "Game Design and Production Pipeline",
        "Level Design for Games",
        "Game World Design",
        "Game Design Documentation",
        "Story Telling for Games",
        "Game Psychology",
        "Game Quality Assurance",
        "Game Project Management",
        "Publishing & Marketing for Games",
        "Game Monetization",
        "Gamification",
      ],
    },
    {
      title: "Humanities",
      subjects: [
        "English Communication",
        "Creative Writing for Media",
        "Environmental Science",
        "Universal Human Values",
        "Personality Development",
      ],
    },
    {
      title: "Computer Science & Programming - Electives",
      subjects: [
        "C Programming Language",
        "Python Programming Procedural",
        "Web Design",
        "Web Programming",
        "PHP",
        "Web Application Development",
        "Object Oriented System Development",
        "2D Game Engine Concepts",
        "3D Game Engine Concepts",
      ],
    },
  ];

  const items = ["Learn the traditional and digital art techniques necessary for flawless creative expression, bringing your artistic vision to life in the world of game art & design.",
    "Gain expertise in industry-standard tools like Maya, Substance Painter, ZBrush, Photoshop etc. to create 2D and 3D art assets.",
    "Understand the complete game design and production pipeline including level design, world design, gameplay mechanics, etc.",
    "Learn how to market, publish, and monetize the games along with gamification of applications of various domains.",
    "Open doors to various roles in 2D and 3D art asset creation for games.",
    "Learn from experienced industry professionals who will mentor you through every step of your artistic and design journey.",
    "Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market."];

  const faqs = [
    {
      question: "Game Art",
      answer: [

        "3D Modeler",
        "Props Artist",
        "Environment Artist",
        "Character Artist",
        "Texture Artist",
        "Digital Sculptor",
        "Lighting Artist",
        "Rigging Artist",
        "Animator",
        "Concept Artist",
        "Character Designer",
        "Illustrator",
        "Lookdev Artist",
      ],
    },
    {
      question: "Game Design",
      answer: [
        "Game Designer",
        "Level Designer",
        "UI/UX Designer",
        "Narrative Designer",
        "Combat Designer",
        "Economy/Monetization Designer",
        "Systems Designer",
      ],
    },
    {
      question: "Other",
      answer: [
        "Game Producer",
        "Quality Assurance Tester",
        "Video Game Marketing",
      ],
    },

  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassart' : 'Bachelors-in-Game-Art-Design'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Bachelor's in Game Art & Design</h1><a href="#Enquire-Now" class="capplynow">Apply Now</a></div>
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
              "name": "Bachelor's in Game Art & Design | Backstage Pass Institute of Gaming Hyderabad",
              "item": "https://www.backstagepass.co.in/courses/bachelors-in-game-art-and-design/"  
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
            "target": "https://www.backstagepass.co.in/courses/bachelors-in-game-art-and-design/{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
          `}
        </script>
        <title>Bachelor's in Game Art & Design |  Backstage Pass Institute of Gaming Hyderabad</title>

        <meta property="og:title" content="Bachelor's in Game Art & Design | Backstage Pass Institute of Gaming Hyderabad" />
        <meta property="og:description" name="description" content="Enroll in the Bachelor's in Game Art & Design program at Backstage Pass Institute of Gaming. Learn 2D & 3D game art, traditional Art, concept art, and game design. Master industry tools like Maya & ZBrush." />
        <meta name="description" content="Enroll in the Bachelor's in Game Art & Design program at Backstage Pass Institute of Gaming. Learn 2D & 3D game art, traditional Art, concept art, and game design. Master industry tools like Maya & ZBrush." />
        <meta property="og:url" content="https://www.backstagepass.co.in/courses/bachelors-in-game-art-and-design/" />
        <meta name="keywords" content="game design courses, game designing courses after 12th, game design courses in india​, game design and development courses, game designing courses fees, game design and development courses​, game designing courses after 12th science, video game designer courses in india, game design courses near me, game design degree in india​, game design and development courses, game designing courses fees, game design colleges​" />
        <link rel="canonical" href="https://www.backstagepass.co.in/courses/bachelors-in-game-art-and-design/" />
      </Helmet>

      <div className="courses-wrapper">


        <div className="course-page">
          {/* Info Card */}
          <div className="info-card slanted-info">
            <div className="info-item">
              <span className="info-subtitle">Course Duration</span>
              <span className="info-title">4 Years</span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Mode</span>
              <span className="info-title">Offline</span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Eligibility</span>
              <span className="info-title">10+2 or Equivalent </span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Affiliated</span>
              <span className="info-title">JNAFAU</span>

            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="overviewsection">
        <h2 className='courseHeading'>Course Overview</h2>
        <div className="brname"></div>
        <p>
          The Bachelor’s in Game Art & Design program prepares students for success with a curriculum that covers Traditional Art, Concept Art, 2D and 3D Game Art, and Game Design.</p>
        <p>
          We, at Backstage Pass Institute of Gaming, designed this course for aspiring artists and designers who aim to combine their artistic talents with cutting-edge technology to create visually stunning and immersive games. It focuses on developing core skills in both traditional and digital mediums, offering a comprehensive education that balances theory and practical application.
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
                {item}
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

                        {/* 👇 Add this part for subcategories like Art Courses */}
                        {s.subcategories?.map((sub, k) => (
                          <div key={k} className="subcategory">
                            <h5 className="subcategory-title">{sub.title}</h5>
                            <ul>
                              {sub.subjects.map((subj, l) => (
                                <li key={l}>{subj}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </section>
        <section className="curriculum">
          <div className="curriculum-grid">
            {semsecond.map((sem, index) => {
              // Start a new row every 3 semesters
              if (index % 3 === 0) {
                return (
                  <div className="curriculum-row" key={index}>
                    {semsecond.slice(index, index + 3).map((s, i) => (
                      <div key={i} className="semester-card">
                        <h4 className="semester-title">{s.title}</h4>
                        <ul>
                          {s.subjects.map((subject, j) => (
                            <li key={j}>{subject}</li>
                          ))}
                        </ul>

                        {/* 👇 Add this part for subcategories like Art Courses */}
                        {s.subcategories?.map((sub, k) => (
                          <div key={k} className="subcategory">
                            <h5 className="subcategory-title">{sub.title}</h5>
                            <ul>
                              {sub.subjects.map((subj, l) => (
                                <li key={l}>{subj}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
        <p className='normaltext' style={{ width: "75%", margin: "0px auto" }}>The Bachelor’s in Game Art & Design program prepares students for success with a curriculum covering Traditional Art, Concept Art, 2D and 3D Game Art, and Game Design.
        </p>
        <p className='normaltext' style={{ width: "75%", margin: "0px auto" }}>This course is crafted for aspiring creators eager to merge art with technology. The course builds strong foundations in both traditional and digital mediums, offering a world-class game art and design degree in India that blends creativity, theory, and hands-on practice.
        </p>


        <div className='courseUpdates1'>
          <ul style={{ width: "80%", margin: "0px auto", paddingTop: "10px" }}>
            <li>
              <div className='BeyondLeft'>
                <img src={m5} alt="m5" />
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Studio Visits</h4>
                <p>Visits to game studios allow students to witness how a game company truly works
                </p>
              </div>
            </li>
            <li>
              <div className='BeyondLeft'>
                <img src={m6} alt="m6" />
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Jams & Conferences</h4>
                <p>Students are encouraged to participate in game jams and attend conferences to hone their skills</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m8} alt="m8" />
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Networking Opportunities</h4>
                <p>With frequent webinars and workshops, our students directly interact with alumni and industry experts</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m7} alt="m7" />
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Make Your Own Game</h4>
                <p>Our Accelerator Program enables students to make their own games and build an impressive portfolio</p>
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
              <h2 className='courseHeading' style={{ textAlign: "left", width: isMobileState ? "100%" : "100%" }}>Career Opportunities</h2>
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
                          <li key={i} style={{ listStyle: "disc", fontSize: "14px" }}>{point}</li>
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



      <div id="Enquire-Now" style={{ marginTop: "30px" }}>
        <HomeContentForm />
      </div>





    </>
  )
}

Courses.propTypes = {

}

export default Courses;

