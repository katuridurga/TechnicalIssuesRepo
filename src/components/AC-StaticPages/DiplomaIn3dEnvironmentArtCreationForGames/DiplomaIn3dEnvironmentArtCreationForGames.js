import React, { useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "../BachelorsInComputerScienceGameDevelopment/BachelorsInComputerScienceGameDevelopment.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
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
      title: "Curriculum",
      subjects: [
"Introduction To 3D Interface",
"Modelling & Texturing",
"Navigation | UV Layout",
"Digital Sculpting",
"Environment Creation",
"Lighting & Rendering",
     ],
    },
   
  ];

  const items = ["Learn the fundamentals of 3D modeling, UV layout, texturing, lighting, shading, and rendering, starting with basic navigation and digital sculpting, and apply these skills in a simple props creation project.",
"Gain expertise in environment blocking, camera work, composition, and texture density management, with a focus on creating detailed and optimized 3D environments for games.",
"Use ZBrush for detailed sculpting of hero assets, retopologize using Maya for poly optimization, and apply advanced UV layout techniques, including the use of UDIMs.",
"Learn to sculpt realistic rocks and boulders, enhancing the natural elements within your 3D environment design.",
"Use Substance Painter to texture hero assets, ensuring high-quality and realistic textures that enhance the visual appeal of your 3D environment art.",
"Master foliage creation using SpeedTree, creating trees, plants, and ivy that add depth and realism to your 3D environment art.",
"Introduce Unreal Engine into your workflow, learning to apply lighting, post-process effects, and create landscapes using height fields, master materials, and material instances.",
"Develop skills in cinematic creation and final rendering, producing high-quality visual presentations of your 3D environment.",
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
      question: "Career Opportunities",
      answer: [
"Props Artist",
"Environment Artist",
"3D Artist",
"Modeling Artist",
"Texture Artist",
"Layout Artist",
"Lighting & Rendering Artist",
"Digital Sculptor",
"3D Generalist",
"Lookdev Artist",
      ],
    },
  

  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
        <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Diploma-In-3d-Environment-Art-Creation-For-Gamesm' : 'Diploma-In-3d-Environment-Art-Creation-For-Games'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Diploma in 3D Environment <br />Art Creation For Games </h1><a href="#Enquire-Now" class="capplynow">Apply Now</a></div>
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
                "name": "Become a 3D Environment Artist with our Diploma in 3D Environment Art for Games",
                "item": "https://www.backstagepass.co.in/courses/diploma-in-3d-environment-art-creation-for-games/"  
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
                "target": "https://www.backstagepass.co.in/courses/diploma-in-3d-environment-art-creation-for-games/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
              `}
          </script>
          <title>Become a 3D Environment Artist with our Diploma in 3D Environment Art for Games</title>


          <meta property="og:title" content="Become a 3D Environment Artist with our Diploma in 3D Environment Art for Games" />
          <meta name="description" content="Learn 3D environment art for games in 6 months, with modeling, texturing, sculpting, lighting, and Unreal Engine. Launch your game art career today!" />

          <meta property="og:url" content="https://www.backstagepass.co.in/courses/diploma-in-3d-environment-art-creation-for-games/" />
          <meta name="keywords" content="3D Environment Art Diploma India, Game Environment Art Course Hyderabad, Diploma in 3D Game Environment Art India, Environment Design for Games Diploma Hyderabad, 3D Art for Games Environment Training India, 3D Level Design Diploma,  Unreal Engine Environment Art Diploma, Career in 3D Environment Art India, Advanced 3D Environment Art Techniques​" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/diploma-in-3d-environment-art-creation-for-games/" />
        </Helmet>




      <div className="courses-wrapper">


        <div className="course-page">
          {/* Info Card */}
          <div className="info-card slanted-info">
            <div className="info-item">
            <span className="info-subtitle">Course Duration</span>
              <span className="info-title">6 months</span>
            </div>
            <div className="info-item">
              <span className="info-subtitle">Mode</span>
              <span className="info-title">Offline/Online</span>
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
       The Diploma in 3D Environment Art For Games is a specialized program designed to equip students with the skills needed to create stunning and immersive environments for video games.</p>
<p>
The curriculum covers the entire 3D art pipeline, from basic modeling and texturing to advanced digital sculpting and 3D environment art creation.
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
                  <div className="curriculum-row" key={index} style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
                    {semesters.slice(index, index + 1).map((s, i) => (
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
         <p className='normaltext'>This program prepares students for roles in game studios, interactive media companies, and AR/VR development firms.</p>


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

