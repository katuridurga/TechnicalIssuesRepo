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
      title: "3D Art Asset Creation",
      subjects: [
       "Introduction To 3D Interface",
"Digital Sculpting",
"Navigation | UV Layout",
"Modelling & Texturing",
"Props Modeling For Games",
"Environment Modeling For Games",
"Vehicle Modeling For Games",
"Lighting, Shading & Rendering",
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

  const items = ["Gain expertise in creating hand-painted and PBR-based game assets, focusing on both modeling and texturing for game environments.",
"Understand the complexities of vehicle structures and develop skills in creating detailed exterior models, using retopology tools to optimize for low-poly models and PBR texturing.",
"Master the fundamentals of CGI lighting, including direct and indirect lighting techniques, and learn to apply these principles within game engines.",
"Benefit from the knowledge and experience of seasoned professionals who will guide you through both theoretical and practical aspects of game development.",
"Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market."];

  const faqs = [
    {
      question: "Game Art",
      answer: [

"3D Modeler",
"3D Environment Artist",
"Texture Artist",
"Digital Sculpting Artist",
"Lighting & Rendering Artist",
"3D Generalist",
"Game Designer",
"Lookdev Artist",
"3D Artist",
"Prop Artist",
"Layout Artist",
      ],
    },
  

  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Advanced-Diploma-in-3D-Game-Art-Digital-Sculptingm' : 'Advanced-Diploma-in-3D-Game-Art-Digital-Sculpting'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Advanced Diploma in  <br />3D Game Art & Digital Sculpting</h1><a href="#Enquire-Now" class="capplynow">Apply Now</a></div>
            </div>
          </div>
        </div>
      </div>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Backstage Pass Institute of Gaming",
            "url": "https://www.backstagepass.co.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.backstagepass.co.in/courses/advanced-diploma-in-3d-game-art-digital-sculpting/{search_term_string}",
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
              "name": "Become a 3D Game Artist with our Advanced Diploma in 3D Game Art & Digital Sculpting",
              "item": "https://www.backstagepass.co.in/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"  
            }]
          }
            `}
        </script>
        <Helmet>
          <title>Become a 3D Game Artist with our Advanced Diploma in 3D Game Art & Digital Sculpting</title>

          <meta property="og:title" content="Become a 3D Game Artist with our Advanced Diploma in 3D Game Art & Digital Sculpting" />
          <meta property="og:description" name="description" content="Learn 3D modeling, character sculpting, environment art & texturing for video games. Backstage Pass's Advanced Diploma offers comprehensive training" />
            <meta name="description" content="Learn 3D modeling, character sculpting, environment art & texturing for video games. Backstage Pass's Advanced Diploma offers comprehensive training" />
          <meta property="og:url" content="https://www.backstagepass.co.in/courses/advanced-diploma-in-3d-game-art-digital-sculpting/" />

          <meta name="keywords" content="Advanced 3D Game Art Diploma India, Digital Sculpting Diploma India, 3D Character Art Diploma Hyderabad, Advanced Game Art Courses Hyderabad, Advanced Digital Sculpting Training India, Advanced 3D Modeling Diploma India, Game Character Design Diploma India, Advanced Texturing for Games Diploma​" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/advanced-diploma-in-3d-game-art-digital-sculpting/" />
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
        The Advanced Diploma in 3D Art & Digital Sculpting is designed to provide students with a deep understanding of the 3D game art pipeline, from basic modeling techniques to advanced digital sculpting, texturing, and rendering.
</p>
<p>
This program equips students with the skills needed to create detailed environments, props, and vehicles for games, while also mastering lighting and shading techniques.
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
                    {/* 👇 Add this part for subcategories like Art Courses */}
                  
                    {semesters.slice(index, index + 2).map((s, i) => (
                      <div key={i} className="semester-card">
                        <h4 className="semester-title">{s.title}</h4>
                        <ul>
                          {s.subjects.map((subject, j) => (
                            <li key={j}>{subject}</li>
                          ))}
                        </ul>

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
        <p className='normaltext' style={{ width: "75%", margin: "0px auto" }}>Backstage Pass Institute of Gaming stands out as a top game design college in India for its focus on providing students with hands-on, industry-specific experiences. We ensure that learning is limitless and not restricted within the four walls of the classroom.
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

