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
      title: "CS & Game Programming",
      subjects: [
        "C++ | Adv C++ & STL",
"Unity 3D Game Engine – Basic & Advanced",
"Unreal Game Engine - Blue Prints & Programming with C++",
"Graphic Programming with OpenGL",
"AI Programming",
"Game Networking",
"Gameplay Programming",
"Code Optimization",
      ],
    },
    {
      title: "ADD-ON",
         
       subcategories: [
        {
          title: "*Free 50 teaching hours of Fundamentals Of Game Design & Production add-on",
          
        },
      ],
      subjects: [
        "History of Games & Genres",
"Game Analysis & Deconstruction",
"Conceptualization & Design thinking",
"Pitch Deck & Presentation",
"Design & Production Pipeline",
      ],
    },
  ];

  const items = ["Develop proficiency in C++ and C#, focusing on object-oriented programming, advanced concepts, and the essential features required for game development.",
"Learn both basic and advanced aspects of Unity and Unreal game engines including UI components, animation systems, physics, AI navigation, optimization techniques, etc.",
"Master version management strategies for efficient project tracking, ensuring smooth development processes and the ability to manage multiple game versions effectively.",
"Engage in practical, hands-on projects that mimic real-world game development scenarios, enhancing your problem-solving abilities.",
"Stay ahead of the curve by mastering cutting edge technologies like AI programming, graphic programming with OpenGL, and game optimization techniques.",
"Apply your skills by developing games on topics of your choice thus creating an impressive portfolio for the job market.",
"Learn and apply optimization techniques to enhance game performance, and understand the end-to-end processes of developing a game.",
"Learn from industry experts and build a professional network that will support your career growth and development.",
"Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market."];

  const faqs = [
    {
      question: "Game Development",
      answer: [

"Game Programmer",
"Unity Developer",
"Unreal Developer",
"Gameplay Programmer",
"Graphic Programmer",
"AI Programmer",
"Game Engine Programmer",
"AR-VR Developer",
"Game Designer",
      ],
    },
  

  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Advanced-Diploma-in-Game-Developmentm' : 'Advanced-Diploma-in-Game-Development'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Advanced Diploma in <br />Game Development</h1><a href="#Enquire-Now" class="capplynow">Apply Now</a></div>
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
          "name": "Advanced Diploma in Game Development | Backstage Pass Institute of Gaming",
          "item": "https://www.backstagepass.co.in/courses/advanced-diploma-in-game-development/"  
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
                "target": "https://www.backstagepass.co.in/courses/advanced-diploma-in-game-development/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
              `}
          </script>
          <title>Advanced Diploma in Game Development | Backstage Pass Institute of Gaming

          </title>

          <meta property="og:title" content="Advanced Diploma in Game Development | Backstage Pass Institute of Gaming" />
          <meta property="og:description" name="description" content="Launch your game development career in India with Backstage Pass Institute of Gaming. Our 1-Year Advanced Diploma covers design, art, programming & more. Apply  now!" />
           <meta name="description" content="Launch your game development career in India with Backstage Pass Institute of Gaming. Our 1-Year Advanced Diploma covers design, art, programming & more. Apply  now!" />
          <meta property="og:url" content="https://www.backstagepass.co.in/courses/advanced-diploma-in-game-development/" />
          <meta name="keywords" content="Advanced diploma in game development, Game development courses in advanced diploma, Advanced Game Development Diploma India, Game Development Course Advanced Hyderabad, Professional Game Development Training India, Advanced Game Programming Courses India, Advanced Level Game Development Training, Learn Advanced Game Development Hyderabad, Game Development with C++ Advanced India​" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/advanced-diploma-in-game-development/" />
        </Helmet>



      <div className="courses-wrapper">


        <div className="course-page">
          {/* Info Card */}
          <div className="info-card slanted-info">
            <div className="info-item">
            <span className="info-subtitle">Course Duration</span>
              <span className="info-title">1 Year</span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Mode</span>
              <span className="info-title">Offline & Online</span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Eligibility</span>
              <span className="info-title">10+2 or Equivalent </span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Affiliated</span>
              <span className="info-title">Lincoln


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
         The Advanced Diploma in Game Development at Backstage Pass Institute of Gaming is a comprehensive program designed to equip students with the essential skills and knowledge required to excel in the gaming industry.</p>
<p>
The curriculum covers foundational programming, advanced game engine programming, graphics programming, and portfolio development, ensuring that students are well-prepared to create and optimise games across various platforms.

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
                  <div className="curriculum-row" key={index} style={{gridTemplateColumns:"repeat(2, 1fr)"}} >
                    {semesters.slice(index, index + 2).map((s, i) => (
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
                            <h5 className="subcategory-title" style={{fontSize:"15px",lineHeight:"26px",textAlign:"justify",fontWeight:"bold",margin:"0px 10px 16px"}}>{sub.title}</h5>
                           
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
        <p className='normaltext' style={{ width: "75%", margin: "0px auto" }}>We ensure that learning is limitless and not restricted within the four walls of the classroom. Therefore, we provide students with activities and opportunities where they get to enter the real world and get firsthand experience of how things work in the gaming industry. This commitment to practical learning and innovation makes Backstage Pass the top game development college in India.
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

