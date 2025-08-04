import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import "./MScGameTechnology.css";
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

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <>

      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'Masters-in-Game-Technologym' : 'Masters-in-Game-Technology'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Master's in Game Technology</h1></div>
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
              "name": "Master’s in Game Technology | Advanced Game Development & Design",
              "item": "https://www.backstagepass.co.in/courses/masters-in-game-technology/"  
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
    "target": "https://www.backstagepass.co.in/courses/masters-in-game-technology/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
  `}
          </script>
          <title>Master’s in Game Technology | Advanced Game Development & Design</title>

          <meta property="og:title" content="Master’s in Game Technology | Advanced Game Development & Design" />
          <meta property="og:description" content="Take your game development skills to the next level with a Master's in Game Technology. Learn & gain in-depth training in C++, Unity, Unreal Engine, AI programming & Gameplay Programming for a top gaming career." />
          <meta property="og:url" content="https://www.backstagepass.co.in/courses/masters-in-game-technology/" />
          <meta name="keywords" content="masters in game development​,masters in game design, masters in game design india​, masters in computer science game development​, masters in game design and development​, masters in game development india, masters in game programming​, masters in gaming​, masters in video game design​" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/masters-in-game-technology/" />
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
                    label="M.Sc Game Technology"
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
                            <p>Eligibility<p className='innerhd'>Graduation*
                            </p></p></li>
                          <li><img src={m3} alt="Mode icon" />
                            <p>Mode  <p className='innerhd'>Offline</p></p></li>
                          <li><img src={m4} />
                            <p>Affiliated <p className='innerhd'>JNAFAU</p></p></li>
                        </ul>
                      </div>
                      <div className='alkksk'>
                        *B.E. /B, Tech. / B. Arch/ B. Design[BFA(BV A(BMM/B. Sc. (Computers/Maths/ Visual  Communications)/BCA /MCA /any  UG of  at  least  3 year  or  PG  of 2 year related to Gaming /Computer Science /Animation /ARVR from any UGC approved University or equivalent.
                      </div>
                      <p className='normaltext'>The M.Sc Game Technology program is designed to equip students with advanced programming, design, and production concepts, and offers in-depth training in cutting-edge game technology.
                      </p>
                      <p className='normaltext'>This program enhances your expertise in key areas of game development, preparing you for a successful career or advancement in the industry. Whether you're a newcomer looking to switch to the field of game development or a professional aiming to elevate your career, this course provides the knowledge and skills necessary to master in game design and development and thrive in the evolving landscape of game technology.

                      </p>


                    </div>
                    <div id="Course-Objectives" height="150vh" style={{ padding: "0px 0px", borderRadius: '20px', marginTop: '30px' }}>
                      <h2 className='courseHeading' style={{ marginTop: "0px" }}>Course Objectives</h2>

                      <ul className='Objectives'>

                        <li>Gain practical experience in core programming languages such as C++, C#, and the .NET framework, essential for game development.</li>

                        <li>Obtain in-depth knowledge of industry-standard game engines like Unity3D and Unreal, enabling you to create and optimize games.</li>

                        <li>Learn advanced graphics programming using IDEs like OpenGL to build visually stunning and technically sound games.</li>

                        <li>Develop the skills to design games for multiple genres, with a focus on creating immersive worlds and detailed level designs.</li>

                        <li>Learn to navigate the entire game development lifecycle, from initial design documentation to final release, ensuring a thorough understanding of each phase.</li>

                        <li>Develop a detailed understanding of game economies and revenue models, crucial for designing commercially successful games.</li>

                        <li>Work on real-world projects with industry professionals, enhancing your ability to collaborate across various teams and disciplines.</li>

                        <li>Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market.</li>

                      </ul>


                    </div>

                    <div id="Curriculum" backgroundColor="blue" height="150vh">


                      <h2 className='courseHeading'>Curriculum</h2>

                      <Box >
                        <Tabs
                          TabIndicatorProps={{ style: { background: '#ed1923' } }}
                          value={value}
                          onChange={handleChange}
                          style={{ background: "#222", color: "#fff" }}

                        >
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="CS & Game Programming" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="Game Design & Production" />
                        </Tabs>

                        <TabPanel value={value} index={0} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>

                            <li>C++ | Adv C++ & STL</li>
                            <li>Unity 3D Game Engine – Basic & Advanced</li>
                            <li>Unreal Game Engine -  Blue Prints & Programming with C++</li>
                            <li>Graphic Programming with OpenGL</li>
                            <li>Mathematical Concepts for Gaming</li>
                            <li>Physics for Gaming</li>
                            <li>AI Programming</li>
                            <li>Game Networking</li>
                            <li>Gameplay Programming</li>
                            <li>Code Optimization</li>

                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>Conceptulization and Design thinking</li>
                            <li>Game Design and Production Pipeline</li>
                            <li>Level Design for Games</li>
                            <li>Game World Design</li>
                            <li>Game Design Documentation</li>
                            <li>Game Quality Assurance</li>
                            <li>Game Project Management</li>
                            <li>Publishing & Marketing for Games</li>
                            <li>Game Monetization</li>
                            <li>Gamification</li>
                            <li>UI Design for Games</li>

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
                              <p className='lsh'>Studio Visits</p>
                              <p>An annual visit to game studios allow students to witness how a game company truly works

                              </p>
                            </div>
                          </li>
                          <li>
                            <div className='BeyondLeft'>
                              <img src={m6} alt="m6" />
                            </div>
                            <div className='BeyondRight'>
                              <p className='lsh'>Jams & Conferences</p>
                              <p>Students are encouraged to participate in game jams and attend conferences to hone their skills
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
                              <p>Our Accelerator Program allows eligible students to make and publish their own game even before graduation
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
                          value={value1}
                          onChange={handleChange1}
                          variant="scrollable"
                          scrollButtons="auto"
                          aria-label="scrollable auto tabs example"
                          style={{ background: "#222", color: "#fff" }}
                        >
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="GAME PROGRAMMING" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="GAME DESIGN" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="OTHER CAREERS" />
                        </Tabs>

                        <TabPanel value={value1} index={0} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>

                            <li>Programmer</li>
                            <li>Game Programmer</li>
                            <li>Unity/Unreal Developer</li>
                            <li>Gameplay Programmer</li>
                            <li>Graphic Programmer</li>
                            <li>Game Engine Programmer</li>
                            <li>Software Developer</li>
                            <li>AI Programmer</li>
                            <li>Metaverse Developer</li>
                          </ul>
                        </TabPanel>
                        <TabPanel value={value1} index={1} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>

                            <li>Game Designer</li>
                            <li>Level Designer</li>
                            <li>UI/UX Designer</li>
                            <li>Narrative Designer</li>
                            <li>Combat Designer</li>
                            <li>Economy Designer</li>
                            <li>Systems Designer</li>
                          </ul>
                        </TabPanel>
                        <TabPanel value={value1} index={2} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>

                            <li>Game Producer</li>
                            <li>Quality Assurance Tester</li>
                            <li>Video Game Marketing</li>
                            <li>Start Your Own Studio</li>
                          </ul>
                        </TabPanel>



                      </Box>
                      {/* 
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{ width: "400px", fontSize: "17px" }}>DOWNLOAD CAREER GUIDE</button>
                      </div> */}

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

