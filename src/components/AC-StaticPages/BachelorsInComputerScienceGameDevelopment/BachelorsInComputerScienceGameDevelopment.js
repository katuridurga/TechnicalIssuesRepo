import React, { useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "./BachelorsInComputerScienceGameDevelopment.css";
import Scrollspy from "react-scrollspy";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { PiArrowFatRightLight } from 'react-icons/pi';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import EmblaCarouselMentors from '../../../content/EmblaCarouselMentors';
import StickyBox from "react-sticky-box";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ScrollSpy from "react-ui-scrollspy";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import m1 from "../../../assets/img/test/1.webp";
import m2 from "../../../assets/img/test/2.webp";
import m3 from "../../../assets/img/test/3.webp";
import m4 from "../../../assets/img/test/4.png";
import m5 from "../../../assets/img/Icons/flags.webp";
import c1 from "../../../assets/img/Courses/careeroprt.webp";
import m6 from "../../../assets/img/Icons/jams.webp";
import m7 from "../../../assets/img/Icons/gameconsole.webp";
import m8 from "../../../assets/img/Icons/team-work.webp";
import { FaPlus, FaMinus } from "react-icons/fa";


import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

const StyledBreadcrumb = styled(Chip)(({ theme, Props }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];


  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const sections = [
  "Course-Overview",
  "Course-Objectives",
  "Curriculum",
  "Beyond-The-Course",
  "Career-Opportunities"
];

function Courses(props) {


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [value1, setValue1] = React.useState(0);

  // ✅ Add this here (INSIDE component)
  const [activeTab, setActiveTab] = useState("GAME PROGRAMMING");
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const semesters = [
    {
      title: "Computer science - Core",
      subjects: [
        "Operating Systems",
        "Data Structures",
        "Design and Analysis of Algorithms",
        "Data Base Management Systems",
        "Data Communications",
        "Computer Organization",
        "Object Oriented System Development",
        "Human Computer Interaction",
        "Artificial Intelligence and Machine Learning",
        "Software Engineering",
        "Information Retrieval Systems",
      ],
    },
    {
      title: "Computer Science - Programming",
      subjects: [
        "C++ | Adv C++ & STL",
        "Object Oriented Programming with Java",
        "C# and .Net Framework",
        "Python Programming Language",
        "Web Application Development",
        "Web Programming",
      ],
    },
    {
      title: "Game Programming",
      subjects: [
        "Unity 3D Game Engine – Basic & Advanced",
        "Unreal Game Engine -  Blue Prints & Programming with C++",
        "Graphic Programming with OpenGL",
        "Mathematical Concepts for Gaming",
        "Physics for Gaming",
        "AI Programming",
        "Game Networking",
        "Gameplay Programming",
        "Code Optimization",
      ],
    },
  ];
  const semsecond = [
    {
      title: "Game Design & Production",
      subjects: [
        "Game Genres & History ",
        "Conceptulization and Design thinking",
        "Game Design and Production Pipeline",
        "Level Design for Games",
        "Game World Design",
        "Game Design Documentation",
        "Story Telling for Games ",
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
      subcategories: [
        {
          title: "Art Courses",
          subjects: [
            "Introduction to Fine Arts",
            "Art History",
            "Digital Illustration Basics",
            "Drawing and Painting Techniques",
          ],
        },
      ],
    },
 {
      title: "AR & VR courses – Electives",
      subjects: [
        "Introduction to Augmented Reality",
        "Introduction to Virtual Reality",

      ],
    },
  ];
  const items = ["Gain a strong technical foundation in core Computer Science subjects, including data structures, algorithms, Database Management, operating systems, etc.",
    "Develop expertise in creating games using leading game engines including, Unity 3D (with C# programming language) and Unreal Engine (With C++ programming language), both essential tools in the game development industry.",
    "Master the basics of game design principles and understand the complete life cycle of a game’s development.",
    "Engage in practical, hands-on projects that mimic real-world game development scenarios, enhancing your problem-solving abilities.",
    "Stay ahead of the curve by mastering cutting edge technologies like AI programming, graphic programming with OpenGL, and game optimization techniques.",
    "Prepare for a variety of roles, including Game Programmer, AI Programmer, Unity Developer, Unreal Developer, Gameplay Programmer, Game Engine Programmer, Graphic Programmer, Software Engineer, Game Designer, Producer, Level Designer, etc. in both the IT and Gaming industries.",
    "Benefit from the knowledge and experience of seasoned professionals who will guide you through both theoretical and practical aspects of game development.",
    "Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market."];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const faqs = [
    {
      question: "GAME PROGRAMMING",
      answer: [

        "Game Programmer",
        "Unity Developer",
        "Unreal Developer",
        "Gameplay Programmer",
        "Graphic Programmer",
        "AI Programmer",
        "Game Engine Programmer",
        "AR Developer",
        "VR Developer",
        "Metaverse Developer",
      ],
    },
    {
      question: "GAME DESIGN",
      answer: [
        "Game Designer",
        "Level Designer",
        "UI/UX Designer",
        "Narrative Designer",
        "Combat Designer",
        "Economy/Monetization Designer",
        "Systems Designer",
        "Technical Designer",
      ],
    },
    {
      question: "OTHER CAREERS",
      answer: [
        "Game Producer",
        "Quality Assurance Tester",
        "Video Game Marketing",
        "Software Engineer",
        "Database Administrator",
      ],
    },

  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassbsc' : 'Bachelors-in-Computer-Science-Game-Development'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Bachelor's in Computer Science <br />& Game Development</h1>
                <a href="#Enquire-Now" class="capplynow">Apply Now</a>
              </div>
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
              "name": "Bachelor's Degree in Computer Science & Game Development | Backstage Pass Institute Gaming, Hyderabad,  India.",
              "item": "https://www.backstagepass.co.in/courses/bachelors-in-computer-science-and-game-development/"  
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
              "target": "https://backstagepass.co.in/courses/bachelors-in-computer-science-and-game-development{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
            `}
        </script>

        <title>Bachelor's Degree in Computer Science & Game Development | Backstage Pass Institute Gaming, Hyderabad,  India.</title>


        <meta property="og:title" content="Bachelor's Degree in Computer Science & Game Development | Backstage Pass Institute of Gaming, Hyderabad, India" />
        <meta name="description" content="Backstage Pass Institute of Gaming is offering a Bachelor's Degree in Computer Science & Game Development. Master game design, game programming, and top game engines like Unity & Unreal. Enroll Now & Build a Career in Gaming!" />
        <meta property="og:url" content="https://www.backstagepass.co.in/courses/bachelors-in-computer-science-game-development/" />
        <meta name="keywords" content="game development courses, game development colleges in india, game development courses in india, Computer Science in Gaming, game programming courses, bsc game design and development, game development degree, game development degree in india, game developer courses in india, video game developer course​, video game development courses​, video game development courses in india​" />
        <link rel="canonical" href="https://www.backstagepass.co.in/courses/bachelors-in-computer-science-and-game-development/" />

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
              <span className="info-title">10+2 or Equivalent to MPC</span>
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
        The B.Sc (Hons) - Computer Science & Game Development program blends Computer Science, Game Design, and Game Programming skills. This course provides students with a strong foundation in core computer science topics, including software development and programming, while also focusing on video game design and game development principles. Students will gain both theoretical knowledge and practical experience, preparing them for careers in both the IT and Game Development industries.</p>
       <p>
       Whether you are passionate about crafting immersive gaming experiences or advancing in the IT industry, Backstage Pass Institute of Gaming is the ideal choice. As the best game development college in India, we provide students opportunities to excel and thrive in the gaming and IT industries.

        </p>
      </div>

      {/* Course Objectives / Curriculum */}
      <div className="curriculum-section" style={{ marginTop: "24px" }}>
        <h2 className='courseHeading'>Course Objectives</h2>
         <div className="brname"></div>
        <div className="">
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={{ display: "flex", marginBottom: "14px", fontSize:"16px",gap:"10px", alignItems:"flex-start", justifyContent:"flex-start", lineHeight:"1.6"}}>
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
        <p className='normaltext' style={{ width: "75%", margin: "0px auto" }}>At Backstage Pass, we ensure that learning is limitless and not restricted within the four walls of the classroom. Therefore, we provide students with activities and opportunities where they get to enter the real world and get firsthand experience of how things work in the gaming industry.
        </p>

        <div className='courseUpdates1'>
          <ul style={{ width: "80%", margin: "0px auto", paddingTop: "10px" }}>
            <li>
              <div className='BeyondLeft'>
                <img src={m5} />
              </div>
              <div className='BeyondRight'>
               <h4 className='lsh'>Studio Visits</h4>
                <p>Visits to game studios allow students to witness how a game company truly works
                </p>
              </div>
            </li>
            <li>
              <div className='BeyondLeft'>
                <img src={m6} />
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Jams & Conferences</h4>
                <p>Students are encouraged to participate in game jams and attend conferences to hone their skills</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m8} />
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Networking Opportunities</h4>
                <p>With frequent webinars and workshops, our students directly interact with alumni and industry experts</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m7} />
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


            <section className="max-w-3xl mx-auto p-6 iconsv" style={{ background: "#f9fafb", color: "#000", width:isMobileState?"100%":"80%", margin:"0px" }}>
              <h2 className='courseHeading' style={{ textAlign: "left", width:isMobileState?"100%":"100%" }}>Career Opportunities</h2>
 <div className="brname"></div>
              <div className="border rounded-lg bg-white" style={{marginTop:"30px"}}>
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
                        fontSize:"16px"
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



      <div id="Enquire-Now" style={{marginTop:"30px"}}>
        <HomeContentForm />
      </div>





    </>
  )
}

Courses.propTypes = {

}

export default Courses;

