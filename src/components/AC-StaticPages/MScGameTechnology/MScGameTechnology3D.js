import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import "./MScGameTechnology3D.css";
import Scrollspy from "react-scrollspy";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import EmblaCarouselMentors3 from '../../../content/EmblaCarouselMentors3';
import StickyBox from "react-sticky-box";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ScrollSpy from "react-ui-scrollspy";

import m1 from "../../../assets/img/test/1.webp";
import m2 from "../../../assets/img/test/2.webp";
import m3 from "../../../assets/img/test/3.webp";
import m4 from "../../../assets/img/test/4.png";
import m5 from "../../../assets/img/Icons/flags.png";
import m6 from "../../../assets/img/Icons/lightbulb.png";
import m7 from "../../../assets/img/Icons/game-console.png";


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
  "Career-Opportunities",
  "Why-Choose-This-Program"
];


function Courses(props) {


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = React.useState(0);



  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <>

      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Mmaster3d' : 'master3d'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Master’s in 3D Game Art and Game Design</h1></div>
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
          <meta property="og:description" content="Master the 3D game art and design in sculpting, modeling, texturing, & more. Build worlds and design characters with Unreal blueprints and engine integration. You will learn from experts, create a professional portfolio, and confidently step into the game industry." />
          <meta property="og:url" content="https://www.backstagepass.co.in/courses/masters-in-3d-game-art-design/" />

          <meta name="keywords" content="Master’s in 3D Game Art, Master’s in Game Design, 3D Game Art and Design course, Game Art and Design degree, Game Design Master’s program, Master’s degree in 3D game art and game design in India, masters in 3D game art & design​" />
          <link rel="canonical" href="https://backstagepass.co.in/courses/masters-in-3d-game-art-design/" />
        </Helmet>

        <div className="courses-wrapper">






          <div className="CourseesOverView">
            {isMobileState ? null : <StickyBox offsetTop={isMobileState ? 0 : 90} offsetBottom={20} style={{ position: isMobileState ? "initial" : "sticky", width: isMobileState ? '100%' : '24%', marginRight: isMobileState ? "0%" : "3%" }}>
              <div className="sidebarview">
                <Scrollspy
                  items={sections}
                  currentClassName="active"
                  offset={-100}
                  componentTag="ul"
                >
                  {sections.map((section) => (
                    <li key={section}>
                      <div
                        className="ss-item-demo-2"
                        onClick={() => handleScroll(section)}
                      >
                        {section.replace(/-/g, " ")}
                      </div>
                    </li>
                  ))}
                  <li className="t-c1">
                    <button
                      className="three button brand size200 w-full sm:w-auto"
                      style={{ width: "auto", fontSize: "14.5px" }}
                      type="button"
                    >
                      <a
                        href="https://backstagepass.co.in/enquire-now/"
                        style={{ color: "#fff" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enquire Now
                      </a>
                    </button>
                  </li>
                </Scrollspy>
              </div>
              <div className="applybottom"><button
                className="three button brand size200 w-full sm:w-auto"
                style={{ width: "180px", fontSize: "14.5px" }}
                type="button"
              >
                <a
                  href="https://backstagepass.co.in/application-form/"
                  style={{ color: "#fff" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </button></div>
            </StickyBox>}
            <div style={{ width: isMobileState ? "100%" : "70%" }}>
              {!isMobileState ? <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb" style={{ background: "none", color: "#fff" }}>
                  <StyledBreadcrumb
                    style={{ cursor: "pointer", background: "none", color: "#fff", fontFamily: "Montserrat, sans-serif", border: "1px solid #fff" }}
                    component="a"
                    href="/"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                  />
                  <StyledBreadcrumb style={{ cursor: "pointer", background: "none", color: "#fff", fontFamily: "Montserrat, sans-serif", border: "1px solid #fff" }} component="a" href="/courses/" label="Courses" />
                  <StyledBreadcrumb
                    style={{ background: "none", color: "#fff", fontFamily: "Montserrat, sans-serif", border: "1px solid #fff" }}
                    label="M.A 3D Game Art Design"
                  // component="a" href="/"
                  />
                </Breadcrumbs>
              </div> : null}

              <div className="">
                <div
                // style={{
                //   position: "relative",
                //   overflowY: "scroll",
                //   height: "50vh",
                // }}
                >
                  <ScrollSpy
                    // parentScrollContainerRef={parentScrollContainerRef}
                    activeclassName="ss-active-demo-2"
                    offsetBottom={100}
                    scrollThrottle={80}
                    useBoxMethod
                  >
                    <div id="Course-Overview" backgroundColor="orange" height="150vh">
                      <h2 className='courseHeading'>Course Overview</h2>
                      <div className='courseUpdates'>
                        <ul>
                          <li><img src={m1} alt="Duration icon" />
                            <p>Duration <p className='innerhd'> 2 Years</p></p></li>
                          <li><img src={m2} alt="Eligibility icon" />
                            <p>Eligibility<p className='innerhd'>Any Graduation
                            </p></p></li>
                          <li><img src={m3} alt="Mode icon" />
                            <p>Mode  <p className='innerhd'>Offline</p></p></li>
                          <li><img src={m4} alt="m4" />
                            <p>Affiliated <p className='innerhd'>JNAFAU</p></p></li>
                        </ul>
                      </div>

                      <p className='normaltext'>The Master’s in 3D Game Art and Game Design is a two-year, industry-aligned postgraduate program crafted for aspiring game creators who want to master both the visual and design aspects of interactive digital worlds. With an emphasis on hands-on production, creativity, and innovation, the program empowers students to take ideas from sketch to screen using cutting-edge tools and real-time game engines.
                      </p>



                    </div>
                    <div id="Course-Objectives" height="150vh" style={{ padding: "0px 0px", borderRadius: '20px', marginTop: '30px' }}>
                      <h2 className='courseHeading' style={{ marginTop: "0px", marginBottom: "0px" }}>Course Objectives</h2>

                      <ul className='threedObjectives'>
                        <p className="objhd">
                          <span className="dot">.</span>
                          <span className="text3dg">Dual Specialization in Art & Design :</span>
                        </p><li>Blend creative storytelling and technical excellence. Develop skills in 3D modeling, animation, character art, level design, UI/UX, and game mechanics to work across the development pipeline.</li>
                        <p className="objhd">
                          <span className="dot">.</span>
                          <span className="text3dg">Industry-Aligned Curriculum : </span></p>
                        <li>Learn what studios demand—master asset creation, design workflows, environment building, and integration with industry-standard engines like Unity and Unreal Engine.</li>
                        <p className='objhd'>
                          <span className="dot">.</span>
                          <span className="text3dg"> Flexible Elective Pairing : </span></p>
                        <li>Customize your Semester 3 experience by choosing one elective from Game Design and one from 3D Game Art, allowing you to tailor your education to specific career goals.</li>
                        <p className='objhd'>
                          <span className="dot">.</span>
                          <span className="text3dg"> Capstone Game Project & Dissertation :</span></p>
                        <li>Your final semester focuses on a full production cycle—design, art, integration, testing—leading to a comprehensive portfolio, academic dissertation, and a playable game prototype.</li>



                      </ul>


                    </div>

                    <div id="Curriculum" backgroundColor="blue" height="150vh">


                      <h2 className='courseHeading'>Curriculum</h2>

                      <Box >
                        <Tabs
                          TabIndicatorProps={{ style: { background: '#ed1923' } }}
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          textColor="secondary"
                          // indicatorColor="secondary"
                          scrollButtons
                          aria-label="visible arrows tabs example"
                          style={{ background: "#222", color: "#fff" }}
                          sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                              '&.Mui-disabled': { opacity: 0.5, color: "#fff", fontSize: "35px" },
                            },
                          }}
                        >
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="3D Game Art Foundation" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="Game Design Core" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="Technology Integration" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="Specialization – 3D Game Art / Game Design" />

                        </Tabs>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                          <ul className='threedObjectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>3D Character Art</li>
                            <li>3D Asset Creation Pipeline (Modeling, Texturing, Lighting, Rigging, Rendering)</li>
                            <li>Digital Sculpting Basics</li>
                            <li>Props & Vehicles for Games</li>
                            <li>Environment Art</li>
                            <li>UI/UX Design for Games</li>

                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                          <ul className='threedObjectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>

                            <li>	History & Genres of Games</li>
                            <li>Game Design & Production Pipeline</li>
                            <li>Level Design</li>
                            <li>	Game World Building</li>
                            <li>Game Design Documentation</li>
                            <li>Project Management & QA</li>



                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                          <ul className='threedObjectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>Unreal Blueprints</li>
                            <li>Game Engine Integration for 3D Assets</li>

                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                          <p style={{ color: "#fff", fontSize: "20px", fontWeight: "500", fontFamily: "Montserrat, sans-serif" }} >Specialization in 3D Game Art
                          </p>
                          <ul className='threedObjectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>Advanced Digital Sculpting</li>
                            <li>Advanced Character Creation for Games</li>
                            <li>Procedural Material Creation using Node Systems</li>
                            <li>Technical Art Programming in Game Engines</li>
                            <li>Asset Optimization for Real-Time Rendering</li>


                          </ul>
                          <p style={{ color: "#fff", fontSize: "20px", fontWeight: "500", fontFamily: "Montserrat, sans-serif" }} >Specialization in Game Design
                          </p>
                          <ul className='threedObjectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>Gamification Principles</li>
                            <li>Game Marketing & Publishing</li>
                            <li>Monetization Strategies</li>
                            <li>Game Psychology & Storytelling</li>
                            <li>System Design & Balancing</li>

                          </ul>
                        </TabPanel>

                      </Box>



                    </div>
                    <div id="Beyond-The-Course" backgroundColor="blue" height="150vh" style={{ padding: "0px 0px" }}>
                      <h2 className='courseHeading' style={{ color: "#fff", marginTop: "0px" }}>Beyond The Course</h2>

                      <p className='normaltext'>At Backstage Pass, we ensure that learning is limitless and not restricted within the four walls of the classroom. Therefore, we provide students with activities and opportunities where they get to enter the real world and get firsthand experience of how things work in the gaming industry.
                      </p>

                      <div className='courseUpdates1'>
                        <ul>
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
                            <div className='BeyondLeft'>
                              <img src={m7} alt="m7" />
                            </div>
                            <div className='BeyondRight'>
                              <p className='lsh'>Professional Portfolio</p>
                              <p>Industry-ready demo reel or design documentation
                              </p>
                            </div>


                          </li>
                          <li>
                            <div className='BeyondLeft'>
                              <img src={m6} alt="m6" />
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

                    <div id="Career-Opportunities" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading' style={{ marginBottom: "0px" }}>Career Opportunities</h2>

                      <Box >


                        <TabPanel value={value1} index={0} dir={theme.direction}>
                          <p style={{ color: "#fff", fontSize: "20px", fontWeight: "500", fontFamily: "Montserrat, sans-serif" }} >Graduates can pursue roles such as
                          </p>
                          <ul className='threedObjectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>


                            <li>Game Designer / Level Designer</li>
                            <li>3D Artist / Character Artist / Environment Artist</li>
                            <li>Technical Artist / UI/UX Designer</li>
                            <li>Game Producer / Narrative Designer</li>
                            <li>Indie Game Developer / Researcher / Educator</li>

                          </ul>
                        </TabPanel>




                      </Box>
                      {/* 
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{ width: "400px", fontSize: "17px" }}>DOWNLOAD CAREER GUIDE</button>
                      </div> */}

                    </div>

                    <div id="Why-Choose-This-Program" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading' style={{ marginBottom: "0px" }}>Why Choose This Program?</h2>

                      <Box >


                        <TabPanel value={value1} index={0} dir={theme.direction}>
                          <ul className='threedObjectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>


                            <li>Cross-disciplinary training in both art and design</li>
                            <li>Emphasis on creativity, interactivity, and portfolio</li>
                            <li>Mentorship by experienced game professionals</li>
                            <li>Aligned with real-world industry practices</li>


                          </ul>
                        </TabPanel>




                      </Box>


                    </div>
                    <div id="Featured-Mentors" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading'>Featured Mentors</h2>

                      <EmblaCarouselMentors3 slides={SLIDES} options={OPTIONS} />




                    </div>
                    <div id="Enquire-Now">
                      <HomeContentForm />
                    </div>
                  </ScrollSpy>
                </div>
              </div>


            </div>
          </div>




        </div>






      </div>

    </>
  )
}

Courses.propTypes = {

}

export default Courses;

