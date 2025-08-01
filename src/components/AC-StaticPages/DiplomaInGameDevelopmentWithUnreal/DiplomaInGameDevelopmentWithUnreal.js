import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import "./DiplomaInGameDevelopmentWithUnreal.css";
import Scrollspy from "react-scrollspy";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import EmblaCarouselMentors9 from '../../../content/EmblaCarouselMentors9';
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
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Diploma-in-Game-Development-with-Unrealmm' : 'Diploma-in-Game-Development-with-Unreal'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Diploma in Game Development with Unreal</h1></div>
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
    "name": "est Game Development with Unreal Course in India - Backstage Pass college",
    "item": "https://www.backstagepass.co.in/courses/diploma-in-game-development-with-unreal/"  
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
    "target": "https://www.backstagepass.co.in/courses/diploma-in-game-development-with-unreal/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
              `}
          </script>

          <title>Best Game Development with Unreal Course in India - Backstage Pass college</title>
          <meta name="description" content="Learn game development with Unreal Engine Diploma by Backstage Pass. Master C++, Blueprints, AI, level design, ⁠Game systems, Gameplay Programming. 6-month diploma. Online & offline modes." />
          <meta name="keywords" content="unreal engine course, game development course, unreal game development training, learn unreal engine, game development with unreal, best unreal engine course in India, how to become unreal engine developer, career in unreal engine game development, game development course with placement, unreal engine certification course​" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/diploma-in-game-development-with-unreal/" />
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
                        href="https://backstagepass.co.in/application-form/"
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
                    label="Diploma in Game Development with Unreal"
                  //component="a" href="/"
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
                      <p className='normaltext'>The Game Development with Unreal Engine program provides a comprehensive foundation in game programming using C++ and Unreal Engine. This hands-on course covers essential topics such as gameplay mechanics, AI behavior, UI programming, and level design.

                      </p>
                      <p className='normaltext'>Students will learn both C++ scripting and Unreal Blueprints, ensuring a versatile skill set. Advanced gameplay programming techniques, AI systems, and UI development will be explored in-depth.

                      </p>

                      <p className='normaltext'>The course culminates in a final portfolio project, where students create a polished game prototype. Graduates will be well-prepared for careers in game development, interactive media, and emerging fields like VR and AR development.

                      </p>




                    </div>
                    <div id="Course-Objectives" height="150vh" style={{ padding: "0px 0px", borderRadius: '20px', marginTop: '30px' }}>
                      <h2 className='courseHeading' style={{ marginTop: "0px" }}>Course Objectives</h2>

                      <ul className='Objectives'>


                        <li>	Understand and implement C++ programming for Unreal Engine.</li>

                        <li>	Utilize Unreal Blueprints for rapid prototyping and gameplay scripting.</li>

                        <li>	Develop interactive gameplay mechanics using both Blueprints and C++.</li>

                        <li> Design immersive levels with environment interactions and physics.</li>

                        <li> Implement AI behaviors using Behavior Trees and decision-making systems.</li>

                        <li> Create user interfaces using Unreal Motion Graphics (UMG).</li>

                        <li>	Build and showcase a fully functional Unreal Engine game project.</li>
                      </ul>


                    </div>

                    <div id="Curriculum" backgroundColor="blue" height="150vh">


                      <h2 className='courseHeading'>Curriculum</h2>

                      <Box >
                        <Tabs
                          TabIndicatorProps={{ style: { background: '#ed1923' } }}
                          value={value}
                          onChange={handleChange}

                        >
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="CS & Game Programming" />
                          {/* <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="ADD-ON*" /> */}

                        </Tabs>

                        <TabPanel value={value} index={0} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>


                            <li> C++ Fundamentals for Unreal Engine </li>
                            <li>	Introduction to Unreal Engine and Game Development </li>
                            <li>		Gameplay Programming Essentials </li>
                            <li>	Unreal Blueprints </li>
                            <li>	 	Level Design and Environment Interaction</li>
                            <li>	AI and Behavior Programming </li>
                            <li>		Advanced Gameplay Programming </li>
                            <li>	UI Programming and Game Systems </li>
                            <li>	Portfolio Development & Final Project</li>



                          </ul>
                        </TabPanel>
                        {/* <TabPanel value={value} index={1} dir={theme.direction}>
                          <p style={{ color: "#fff", fontSize: "17px", fontWeight: "500", fontFamily: "Montserrat, sans-serif" }} >*Free 50 teaching hours of Fundamentals Of Game Design & Production add-on
                          </p>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>


                            <li>History of Games & Genres</li>
                            <li>	Game Analysis & Deconstruction</li>
                            <li>	Conceptualization & Design thinking</li>
                            <li>	Pitch Deck & Presentation</li>
                            <li>	Design & Production Pipeline</li>
                          </ul>
                        </TabPanel> */}


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


                      <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>


                        <li>Unreal Engine Game Developer</li>
                        <li>	Gameplay Programmer</li>
                        <li>	AI Programmer</li>
                        <li>	Level Designer</li>
                        <li>UI/UX Developer for Games</li>
                        <li>	Technical Artist</li>
                        <li>	VR/AR Developer</li>
                        <li>	Indie Game Developer</li>
                      </ul>

                      <p className='normaltext'>This program prepares students for roles in game studios, interactive media companies, and AR/VR development firms.</p>
                      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{ width: "400px", fontSize: "17px" }}>DOWNLOAD CAREER GUIDE</button>
                      </div> */}

                    </div>


                    <div id="Featured-Mentors" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading'>Featured Mentors</h2>

                      <EmblaCarouselMentors9 slides={SLIDES} options={OPTIONS} />




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

