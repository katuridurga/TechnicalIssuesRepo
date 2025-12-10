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
    title: "Computer Science",
    subjects: [
      "C++ | Adv C++ & STL",
      "Object Oriented Programming with Java",
      "C# and .Net Framework",
      "Python Programming Language",
      "Data Structures",
      "Object Oriented System Development",
      "Human Computer Interaction",
      "Web Application Development",
      "Web Programming",
    ],
  },
  {
    title: "Game Engine Programming",
    subjects: [
      "Unity 3D Game Engine – Basic & Advanced",
      "Unreal Game Engine -  Blue Prints & Programming with C++",
      "Mathematical Concepts for Gaming",
      "Physics for Gaming",
      "AI Programming",
      "Game Networking",
      "Gameplay Programming",
      "Code Optimization",
    ],
  },
  {
    title: "Game Design & Production",
    subjects: [
      "Game Genres & History",
      "Conceptulization and Design thinking",
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
];

const semsecond = [
  {
    title: "Traditional Art",
    subjects: [
      "Drawing & Sketching",
      "Colour, Value and Line",
      "Figure Drawing",
      "Anatomy of Humans and Birds",
      "Perspective",
      "Lighting and shading",
      "Composition",
      "Live Drawing",
      "Color Theory",
      "Color Design",
      "Traditional Sculpting.",
    ],
  },
  {
    title: "Intro to Digital Art",
    subjects: [
      "Image Editing and Design",
      "2D Illustration",
      "Lighting & Shading",
      "Composition UI Design",
      "Digital Concept Art – Prop, Vehicle & Environment Design",
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
  {
    title: "AR & VR Courses",
    subjects: [
      "Introduction to Augmented Reality",
      "Introduction to Virtual Reality",
      "3D Models & Design for VR",
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
];


  const items = ["Enter a rapidly growing field and learn the basics of programming, game engines, AI and gameplay mechanics.",
"Engage in hands-on, practical learning experiences in game world and level design.",
"Gain expertise in the basics of Traditional Art and 3D Art with specialized training in AR and VR games and application development.",
"Master the latest AR and VR tools and techniques, to create immersive and interactive experiences.",
"Develop and customize geolocation-based AR/VR applications.",
"Open up diverse career opportunities, from Game Engine Programmer, AR/VR Developer to 3D Artist and Game Designer, in a variety of industries including gaming, education, healthcare, etc.",
"Learn from industry experts and build a professional network that will support your career growth and development.",
"Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market."];

  const faqs = [
    {
      question: "AR/VR & Game Programming",
      answer: [

       "AR/VR Application Developer",
"AR/VR Game Developer",
"Game Programmer",
"Unity Developer",
"Gameplay Programmer",
"Unreal Developer",
"AI Programmer",
"Metaverse Developer",
"XR Developer",
      ],
    },
    {
      question: "2D AND 3D Art",
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
"Illustrator",
      ],
    },
    {
      question: "Game Design & Others",
      answer: [
       "Game Designer",
"Technical Designer",
"Level Designer",
"UI/UX Designer",
"Narrative Designer",
"Combat Designer",
"Economy/Monetization Designer",
"Systems Designer",
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
         <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'MobileClassarvr' : 'Bachelors-in-Augmented-Reality-Virtual-Reality'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Bachelor's in Augmented Reality
                <br />& Virtual Reality </h1><a href="#Enquire-Now" class="capplynow">Apply Now</a></div>
            </div>
          </div>
        </div>
      </div>
        <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Bachelor's in Augmented & Virtual Reality (AR/VR) | Backstage Pass Institute of Gaming",
              "url": "https://www.backstagepass.co.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.backstagepass.co.in/courses/bachelors-in-augmented-reality-and-virtual-reality/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
              `}
          </script>
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
    "name": "Bachelor's in Augmented & Virtual Reality (AR/VR) | Backstage Pass Institute of Gaming",
    "item": "https://www.backstagepass.co.in/courses/bachelors-in-augmented-reality-and-virtual-reality/"  
  }]
}
  `}
          </script>
          <title>Bachelor's in Augmented & Virtual Reality (AR/VR) | Backstage Pass Institute of Gaming</title>

          <meta property="og:title" content="Bachelor's in Augmented & Virtual Reality (AR/VR) | Backstage Pass Institute of Gaming" />
          <meta property="og:description" name="description" content="Learn AR/VR game development and interactive design through Backstage Pass Bachelor’s program. Create interactive Games & Designs with Augmented and Virtual reality" />
          <meta property="og:url" content="https://www.backstagepass.co.in/courses/bachelors-in-augmented-reality-and-virtual-reality/" />
          <meta name="keywords" content="augmented reality vs virtual reality, ar vr courses, augmented reality courses, ar and vr course, ar and vr courses, augmented reality and virtual reality courses​, ar vr courses in hyderabad, ar vr courses in india, augmented and virtual reality courses​, ar and vr courses in india, ar & vr courses, ar vr design courses, ar vr training course, best ar vr courses in india​" />

          <link rel="canonical" href="https://www.backstagepass.co.in/courses/bachelors-in-augmented-reality-and-virtual-reality/" />

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
    The BA (Hons) in Augmented Reality and Virtual Reality curriculum is designed to equip students with the essential principles of art, design, and programming, specifically tailored for the development of AR and VR applications. Ideal for innovators eager to lead the future, this program combines computer science with hands-on AR/VR creation, making it one of the best AR VR courses in India for those who want to master these transformative technologies.</p>
<p>
The course explores a wide range of topics, including Augmented Reality and Virtual Reality, Game Design, 3D Art, and immersive AR/VR application development. Students also learn the difference between AR and VR, gaining clarity on how each technology shapes modern digital experiences.</p>
<p>
Through practical learning methods, such as case studies and assignments, this program ensures that learners in AR VR courses gain both the theoretical foundation and the technical skills required to thrive in the rapidly evolving world of AR/VR technology.

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
        <p className='normaltext' style={{ width: "75%", margin: "0px auto" }}>At Backstage Pass Institute of Gaming, we believe learning extends beyond the classroom. We provide students with numerous activities and opportunities to enter the real world and gain first-hand experience of how things work in the gaming industry. As one of the best game development colleges in India, Backstage Pass offers unparalleled opportunities for students interested in pursuing a career in Augmented Reality and Virtual Reality, from education to game development and beyond.
        </p>

        <div className='courseUpdates1'>
          <ul style={{ width: "80%", margin: "0px auto", paddingTop: "10px" }}>
            <li>
              <div className='BeyondLeft'>
                <img src={m5} alt="m5"/>
              </div>
              <div className='BeyondRight'>
               <h4 className='lsh'>Studio Visits</h4>
                <p>Visits to game studios allow students to witness how a game company truly works
                </p>
              </div>
            </li>
            <li>
              <div className='BeyondLeft'>
                <img src={m6} alt="m6"/>
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Jams & Conferences</h4>
                <p>Students are encouraged to participate in game jams and attend conferences to hone their skills</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m8} alt="m8"/>
              </div>
              <div className='BeyondRight'>
                <h4 className='lsh'>Networking Opportunities</h4>
                <p>With frequent webinars and workshops, our students directly interact with alumni and industry experts</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m7} alt="m7"/>
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
                          <li key={i} style={{ listStyle: "disc", fontSize:"14px" }}>{point}</li>
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

