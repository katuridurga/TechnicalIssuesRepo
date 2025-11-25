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
	"C++ | Adv C++ & STL | C#",
"Unity 3D Game Engine Concepts",
"Unreal Game Engine Concepts",
"VR Application Development",
"Code Optimization",
"Portfolio Development", 

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
"AR /VR AppDeveloper",
"AR/VR Game Developer",
"AR/VR Programmer",
"Unity Developer",
"Gameplay Programmer",
"Unreal Developer",
"AI Programmer",
"Metaverse Developer",

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
              <div className="et_pb_text_inner"><h1 className="title white-txt">Diploma in  <br />VR Application Development </h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-container">
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
    "name": "Diploma in VR Application Development | Backstage Pass",
    "item": "https://www.backstagepass.co.in/courses/diploma-in-vr-application-development/"  
  }]
}
              `}
          </script>
          <script type="application/ld+json">
            {`
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Courses Offered",
  "itemListElement": [
    {
      "@type": "Course",
      "name": "Diploma in VR Application Development | Backstage Pass",
      "description": "Step into the world of VR! Enroll in a Diploma in Virtual Reality Application Development and start your creative tech career today.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Backstage Pass Institute of Gaming",
        "url": "https://www.backstagepass.co.in/"
      },
      "url": "https://www.backstagepass.co.in/courses/diploma-in-vr-application-development/",
      "educationalCredentialAwarded": "Diploma in VR Application Development | Backstage Pass",
      "offers": [
        {
          "@type": "Offer",
          "category": "Paid",
          "priceCurrency": "INR",
          "price": "Contact college for details"
        }
      ],
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": {
            "@type": "Place",
             "name": "Backstage Pass Institute of Gaming",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. 72, beside Spring Board, Jubilee Enclave, HITEC City",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500081",
              "addressCountry": "IN"
            }
          },
          "courseSchedule": {
            "@type": "Schedule",
            "duration": "6months",
            "repeatFrequency": "",
            "repeatCount": 0,
            "startDate": "",
            "endDate": ""
          }
        }
      ]
    }
  ]
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
    "target": "https://www.backstagepass.co.in/courses/diploma-in-vr-application-development/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

              `}
          </script>
          <title>Diploma in VR Application Development</title>


          <meta property="og:title" content=" Diploma in VR Application Development | Backstage Pass" />
          <meta name="description" content="Step into the world of VR! Enroll in a Diploma in Virtual Reality Application Development and start your creative tech career today." />

          <meta property="og:url" content="https://www.backstagepass.co.in/courses/diploma-in-vr-application-development/" />
          <meta name="keywords" content="3D Environment Art Diploma India, Game Environment Art Course Hyderabad, Diploma in 3D Game Environment Art India, Environment Design for Games Diploma Hyderabad, 3D Art for Games Environment Training India, 3D Level Design Diploma,  Unreal Engine Environment Art Diploma, Career in 3D Environment Art India, Advanced 3D Environment Art Techniques​" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/diploma-in-vr-application-development/" />
        </Helmet>

  




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
     The Diploma in VR Application Development is an intensive, hands-on program crafted to prepare students for the fast-growing field of Virtual Reality. It integrates strong foundations in programming, 3D engines, and immersive application design using Unity and Unreal Engine.</p>
<p>
Learners will explore VR development principles, user interaction, optimization for headsets, and content creation workflows—culminating in a professional portfolio showcasing real-world VR projects.
        </p>
      </div>

    
      {/* Course Objectives / Curriculum */}
      <div className="curriculum-section" style={{ background: "#ffffff", marginBottom: "20px", padding: "10px", marginTop: "30px" }}>
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
   
      <div id="Career-Opportunities" backgroundColor="brown" style={{boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"}}>

        <div className='coppertunities'>
          <div className='left'>
            <img src={c1} alt="careerop" />
          </div>

          <div className="right career-tabs-container">
            {/* Tabs */}


            <section className="max-w-3xl mx-auto p-6 iconsv" style={{ background: "#f9fafb",color: "#000", width:isMobileState?"100%":"80%", margin:"0px" }}>
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
                        paddingLeft:isMobileState?"12px":"34px"

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

