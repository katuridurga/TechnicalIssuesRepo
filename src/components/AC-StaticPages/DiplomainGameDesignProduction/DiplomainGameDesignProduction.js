import React from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "./DiplomainGameDesignProduction.css";
import Scrollspy from "react-scrollspy";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import EmblaCarouselMentors8 from '../../../content/EmblaCarouselMentors8';
import StickyBox from "react-sticky-box";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ScrollSpy from "react-ui-scrollspy";
import m1 from "../../../assets/img/test/1.webp";
import m2 from "../../../assets/img/test/2.webp";
import m3 from "../../../assets/img/test/3.webp";
import m5 from "../../../assets/img/Icons/flags.png";
import m6 from "../../../assets/img/Icons/lightbulb.png";
import m7 from "../../../assets/img/Icons/game-console.png";
import m8 from "../../../assets/img/Icons/team-work.png";

import Tabs from '@mui/material/Tabs';
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

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

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
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Diploma-in-Game-Design-Productionm' : 'Diploma-in-Game-Design-Production'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt"> Diploma in Game Design <br />& Production</h1></div>
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
          "@type": "WebSite",
          "name": "Backstage Pass Institute of Gaming",
          "url": "https://www.backstagepass.co.in/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.backstagepass.co.in/courses/diploma-in-game-design-production/{search_term_string}",
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
              "name": "Best Game Design & Production Diploma Course in India | Backstage Pass Institute of Gamingional & Digital Concept Art",
              "item": "https://www.backstagepass.co.in/courses/diploma-in-game-design-production/"  
            }]
          }
            `}
          </script>
          <title>Best Game Design & Production Diploma Course in India | Backstage Pass Institute of Gaming</title>

          <meta property="og:title" content="Best Game Design & Production Diploma Course in India | Backstage Pass Institute of Gaming" />
          <meta name="description" content="Backstage Pass Institute of Gaming is India’s leading Game Design college in Hyderabad. Our Diploma in Game Design and Production covers - genres, high-level design & hands-on Unity/Unreal Engine experience" />
          <meta property="og:url" content="https://www.backstagepass.co.in/courses/diploma-in-game-design-production/" />
          <meta name="keywords" content="Game Design Diploma India, Game Production Diploma India, Game Design and Production Course Hyderabad, Diploma in Game Development India, Game Production Training India, Game Design Fundamentals Diploma, Game Production Management Diploma, Introduction to Game Design Course​" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/diploma-in-game-design-production/" />
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
                <Breadcrumbs aria-label="breadcrumb" style={{ background: "none" }}>
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
                    label="Diploma in Game Design & Production"
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
                            <p>Duration <p className='innerhd'> 6 months</p></p></li>
                          <li><img src={m2} alt="Eligibility icon" />
                            <p>Eligibility<p className='innerhd'>10+2 or Equivalent
                            </p></p></li>
                          <li><img src={m3} alt="Mode icon" />
                            <p>Mode  <p className='innerhd'>Offline/Online</p></p></li>
                          <li><img src="https://www.plic.edu.np/sites/default/files/styles/large/public/images/pages/lincoln-uni-logo.gif?itok=qSZr65aP" alt="Lincoln university logo" style={{ width: "200px" }} />
                            <p>Affiliated <p className='innerhd'>Lincoln</p></p></li>
                        </ul>
                      </div>
                      <p className='normaltext'>The Diploma in Game Design and Production program offers a comprehensive curriculum that covers every aspect of game design and production, from understanding the history and genres of games to mastering high-level design principles and practical tools like Unity/Unreal Engine.</p>
                      <p className='normaltext'>This program is designed to equip students with the skills needed to conceptualize, design, and produce engaging and innovative games.
                      </p>


                    </div>
                    <div id="Course-Objectives" height="150vh" style={{ padding: "0px 0px", borderRadius: '20px', marginTop: '30px' }}>
                      <h2 className='courseHeading' style={{ marginTop: "0px" }}>Course Objectives</h2>

                      <ul className='Objectives'>


                        <li>Learn to play, analyze, and deconstruct games using various techniques, with a focus on comparative analysis, user experience, feedback, and case studies.</li>

                        <li>Master design thinking, idea generation, and concept development, with a focus on prototyping basics and feedback loops to refine game ideas.</li>

                        <li>Learn the elements of a pitch deck, storytelling, and pitching skills, as well as visual communication techniques, handling Q&A sessions, and practicing live pitches.</li>

                        <li>Define game vision, design game mechanics and dynamics, integrate narrative elements, and focus on balancing, pacing, and comprehensive documentation.</li>

                        <li>Develop thorough game design documentation, technical specifications, and understand version control, with an emphasis on clear communication with stakeholders and the use of document templates and tools.</li>

                        <li>Learn the principles of level design and world-building, focusing on environmental storytelling, and refining designs through playtesting and iteration.</li>

                        <li>Benefit from the knowledge and experience of seasoned professionals who will guide you through both theoretical and practical aspects of game design and production.
                        </li>

                        <li>Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market.</li>
                      </ul>


                    </div>

                    <div id="Curriculum" backgroundColor="blue" height="150vh">


                      <h2 className='courseHeading'>Curriculum</h2>


                      <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>


                        <li>Game History & Genres</li>
                        <li>Game Analysis & Deconstruction</li>
                        <li>Conceptualization & Design Thinking</li>
                        <li>Pitch Deck & Presentation</li>
                        <li>High-Level Game Design</li>
                        <li>Spec Creation & Game Design Documentation</li>
                        <li>Scope & Production Planning</li>
                        <li>Level Design & World building</li>
                        <li>Systems Design & Machinations</li>
                        <li>Introduction to Unreal Blueprints</li>
                        <li>Prototyping & Level Design Tools in Unreal</li>
                      </ul>



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
                              <p className='lsh'>Studio Visits</p>
                              <p>Visits to game studios allow students to witness how a game company truly works

                              </p>
                            </div>
                          </li>
                          <li>
                            <div className='BeyondLeft'>
                              <img src={m6} alt="m6" />
                            </div>
                            <div className='BeyondRight'>
                              <p className='lsh'>Jams & Conferences</p>
                              <p>Students are encouraged to participate in game jams and conferences to hone their skills
                              </p>
                            </div>


                          </li>

                          <li>
                            <div className='BeyondLeft'>
                              <img src={m8} alt="m8" />
                            </div>
                            <div className='BeyondRight'>
                              <p className='lsh'>Networking Opportunities</p>
                              <p>With frequent webinars and workshops, our students directly interact with alumni and industry experts
                              </p>
                            </div>


                          </li>

                          <li>
                            <div className='BeyondLeft'>
                              <img src={m7} alt="m7" />
                            </div>
                            <div className='BeyondRight'>
                              <p className='lsh'>Make Your Own Game</p>
                              <p>Our Accelerator Program allows students to make their own games and build an impressive portfolio
                              </p>
                            </div>


                          </li>


                        </ul>
                      </div>

                    </div>

                    <div id="Career-Opportunities" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading'>Career Opportunities</h2>

                      <Box >
                        <Tabs
                          TabIndicatorProps={{ style: { background: '#ed1923' } }}
                          value={value}
                          onChange={handleChange}

                        >
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="GAME DESIGN" />
                        </Tabs>

                        <TabPanel value={value} index={0} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>


                            <li>Game Designer</li>
                            <li>Level Designer</li>
                            <li>UI/UX Designer</li>
                            <li>Narrative Designer</li>
                            <li>Combat Designer</li>
                            <li>Technical Designer</li>
                          </ul>
                        </TabPanel>



                      </Box>

                      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{ width: "400px", fontSize: "17px" }}>DOWNLOAD CAREER GUIDE</button>
                      </div> */}

                    </div>


                    <div id="Featured-Mentors" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading'>Featured Mentors</h2>

                      <EmblaCarouselMentors8 slides={SLIDES} options={OPTIONS} />




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

