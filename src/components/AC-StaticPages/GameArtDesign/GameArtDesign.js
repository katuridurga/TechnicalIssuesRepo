import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import "./GameArtDesign.css";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import EmblaCarouselMentors1 from '../../../content/EmblaCarouselMentors1';
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
import Scrollspy from "react-scrollspy";

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
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassart' : 'Bachelors-in-Game-Art-Design'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Bachelor's in Game Art & Design</h1></div>
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
              "name": "Bachelor's in Game Art & Design | Backstage Pass Institute of Gaming Hyderabad",
              "item": "https://www.backstagepass.co.in/courses/bachelors-in-game-art-and-design/"  
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
            "target": "https://www.backstagepass.co.in/courses/bachelors-in-game-art-and-design/{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
          `}
        </script>
          <title>Bachelor's in Game Art & Design |  Backstage Pass Institute of Gaming Hyderabad</title>
          <meta name="description" content="Enroll in the Bachelor's in Game Art & Design program at Backstage Pass Institute of Gaming. Learn 2D & 3D game art, traditional Art, concept art, and game design. Master industry tools like Maya & ZBrush." />
          <meta name="keywords" content="game design courses, game designing courses after 12th, game design courses in india​, game design and development courses, game designing courses fees, game design and development courses​, game designing courses after 12th science, video game designer courses in india, game design courses near me, game design degree in india​, game design and development courses, game designing courses fees, game design colleges​"/>
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/bachelors-in-game-art-and-design/" />
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
            <div style={{ width: isMobileState? "100%" : "70%" }}>
            {!isMobileState ? <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb" style={{ background: "none", color: "#fff" }}>
                  <StyledBreadcrumb
                    style={{ cursor: "pointer", background: "none", color: "#fff", fontFamily: "Montserrat, sans-serif", border: "1px solid #fff"}}
                    component="a"
                    href="/"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                  />
                  <StyledBreadcrumb style={{ cursor: "pointer", background: "none", color: "#fff", fontFamily: "Montserrat, sans-serif", border: "1px solid #fff"}} component="a" href="/courses/" label="Courses" />
                  <StyledBreadcrumb
                  style={{ background: "none", color: "#fff", fontFamily: "Montserrat, sans-serif", border: "1px solid #fff"}}
                    label="BA (Hons) Game Art And Design"
                   // component="a" href="/"
                  />
                </Breadcrumbs>
              </div> : null }

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
                          <li><img src={m1} alt="Duration icon"/>
                            <p>Duration <p className='innerhd'> 4 Years</p></p></li>
                          <li><img src={m2} alt="Eligibility icon" />
                            <p>Eligibility<p className='innerhd'>10+2 or Equivalent
                            </p></p></li>
                          <li><img src={m3} alt="Mode icon" />
                            <p>Mode  <p className='innerhd'>Offline</p></p></li>
                          <li><img src={m4} alt="m4" />
                             <p>Affiliated <p className='innerhd'>JNAFAU</p></p></li>
                        </ul>
                      </div>
                      <p className='normaltext'>The Bachelor’s in Game Art & Design program prepares students for success with a curriculum that covers Traditional Art, Concept Art, 2D and 3D Game Art, and Game Design. </p>
                      <p className='normaltext'>
                      We, at <a href="https://www.backstagepass.co.in/" style={{color:"#ec1923",fontWeight:"500"}}> Backstage Pass Institute of Gaming, </a> designed this course for aspiring artists and designers who aim to combine their artistic talents with cutting-edge technology to create visually stunning and immersive games. It focuses on developing core skills in both traditional and digital mediums, offering a comprehensive education that balances theory and practical application. </p>


                    </div>
                    <div id="Course-Objectives" height="150vh" style={{ padding: "0px 0px", borderRadius: '20px', marginTop:"30px" }}>
                      <h2 className='courseHeading' style={{ marginTop: "0px" }}>Course Objectives</h2>

                      <ul className='Objectives'>
                        <li>Learn the traditional and digital art techniques necessary for flawless creative expression, bringing your artistic vision to life in the world of game art & design.  </li>

                        <li>Gain expertise in industry-standard tools like Maya, Substance Painter, ZBrush, Photoshop etc. to create 2D and 3D art assets.</li>
                        <li>Understand the complete game design and production pipeline including level design, world design, gameplay mechanics, etc.</li>
                        <li>Learn how to market, publish, and monetize the games along with gamification of applications of various domains.
                        </li>
                        <li>Open doors to various roles in 2D and 3D art asset creation for games.
                        </li>
                        <li>Learn from experienced industry professionals who will mentor you through every step of your artistic and design journey.
                        </li>
                        <li>Build a strong portfolio showcasing your unique style and technical skills, making you a competitive candidate in the job market.
                        </li>
                      </ul>


                    </div>

                    <div id="Curriculum" backgroundColor="blue" height="150vh">


                      <h2 className='courseHeading'>Curriculum</h2>

                      <Box >
                        <Tabs
TabIndicatorProps={{style: {background:'#ed1923'}}}
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          scrollButtons
                          aria-label="visible arrows tabs example"
                          style={{ background: "#222", color: "#fff" }}
                          sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                              '&.Mui-disabled': { opacity: 0.5, color: "#fff", fontSize: "35px" },
                            },
                          }}
                        >
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="Traditional Art" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="2D Game Art" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="3D Game Art" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="Game Design & Production" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="Humanities" />
                          <Tab style={{ color: "#fff", fontSize: "13px", fontFamily: "Montserrat, sans-serif" }} label="Computer Science & Programming - Electives" />
                        </Tabs>

                        <TabPanel value={value} index={0} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                          <li>Drawing & Sketching </li>
                                                                       <li>Colour, Value and Line </li>
                                                                       <li>Figure Drawing </li>
                                                                       <li>Anatomy of Humans and Birds </li>
                                                                       <li>Perspective </li>
                                                                       <li>Lighting and shading </li>
                                                                       <li>Composition</li> 
                                                                       <li>Live Drawing </li>
                                                                       <li>Color Theory </li>
                                                                       <li>Color Design </li>
                                                                       <li>Traditional Sculpting.</li>
                                                                      


                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                     
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                         <li><b>Intro to Digital Painting -</b> Image Editing and Design|  2D Illustration |Lighting & Shading|  Composition | UI Design  </li>
                         <li><b>Digital Concept Art:</b> Prop Design | Vehicle Design | Environment Design |Ch aracter and Creature Design</li>

                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                          
                          <li>3D Art Pipeline: Modelling | Texturing | Lighting | Rendering | Animation </li>
                          <li>3D Art Asset Creation: Props, Vehicle, Environment & Character creation</li>
                          <li>Digital Sculpting for Environment, Props, Vehicle and Character creation</li>

                          </ul>
                        </TabPanel>

                        <TabPanel value={value} index={3} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>Game Genres & History </li>
                            <li>Conceptulization and Design thinking</li>
                            <li>Game Design and Production Pipeline</li>
                            <li>Level Design for Games</li>
                            <li>Game World Design</li>
                            <li>Game Design Documentation</li>
                            <li>Story Telling for Games </li>
                            <li>Game Psychology</li>
                            <li>Game Quality Assurance</li>
                            <li>Game Project Management</li>
                            <li>Publishing & Marketing for Games</li>
                            <li>Game Monetization</li>
                            <li>Gamification</li>
                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>English Communication</li>
                            <li>Creative Writing for Media</li>
                            <li>Environmental Science</li>
                            <li>Universal Human Values</li>
                            <li>Personality Development</li>
                          </ul>
                        </TabPanel>
                        <TabPanel value={value} index={5} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>	C Programming Language</li>
                            <li>Python Programming Procedural</li>
                            <li>Web Design</li>
                            <li>	Web Programming</li>
                            <li>PHP</li>
                            <li>Web Application Development</li>
                            <li>Object Oriented System Development</li>
                            <li>2D Game Engine Concepts</li>
                            <li>3D Game Engine Concepts</li>

                          </ul>
                        </TabPanel>

                        

                      </Box>



                    </div>
                    <div id="Beyond-The-Course" backgroundColor="blue" height="150vh" style={{ padding: "0px 0px" }}>
                      <h2 className='courseHeading' style={{ color: "#fff", marginTop: "0px" }}>Beyond The Course</h2>

                      <p className='normaltext'>We ensure that learning is limitless and not restricted within the four walls of the classroom. Therefore, we provide students with activities and opportunities where they get to enter the real world and get firsthand experience of how things work in the gaming industry. This is what makes Backstage Pass stand out as the best game designing college in India.  
                      </p>

                      <div className='courseUpdates1'>
                        <ul>
                          <li>
                            <div className='BeyondLeft'>
                              <img src={m5} alt="m5"/>
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
                              <p>Students are encouraged to participate in game jams and attend conferences to hone their skills</p>
                            </div>


                          </li>

                          <li>
                            <div className='BeyondLeft'>
                              <img src={m8} alt="m8" />
                            </div>
                            <div className='BeyondRight'>
                              <p className='lsh'>Networking Opportunities</p>
                              <p>With frequent webinars and workshops, our students directly interact with alumni and industry experts</p>
                            </div>


                          </li>

                          <li>
                            <div className='BeyondLeft'>
                              <img src={m7} alt="m7" />
                            </div>
                            <div className='BeyondRight'>
                              <p className='lsh'>Make Your Own Game</p>
                              <p>Our Accelerator Program enables students to make their own games and build an impressive portfolio</p>
                            </div>


                          </li>


                        </ul>
                      </div>

                    </div>

                    <div id="Career-Opportunities" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading'>Career Opportunities</h2>

                      <Box >
                        <Tabs
TabIndicatorProps={{style: {background:'#ed1923'}}}
                          value={value1}
                          onChange={handleChange1}
                          variant="scrollable"
                          scrollButtons="auto"
                          aria-label="scrollable auto tabs example"
                          style={{ background: "#222", color: "#fff" }}
                        >
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="GAME ART" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="GAME DESIGN" />
                          <Tab style={{ color: "#fff", fontSize: "15px", fontFamily: "Montserrat, sans-serif" }} label="OTHERS" />
                        </Tabs>

                        <TabPanel value={value1} index={0} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>3D Modeler</li>
                            <li>Props Artist</li>
                            <li>Environment Artist</li>
                            <li>Character Artist</li>
                            <li>Texture Artist</li>
                            <li>Digital Sculptor</li>
                            <li>Lighting Artist</li>
                            <li>Rigging Artist</li>
                            <li>Animator</li>
                            <li>Concept Artist</li>
                            <li>Character Designer</li>
                            <li>Illustrator</li>
                            <li>Lookdev Artist</li>
                          </ul>
                        </TabPanel>
                        <TabPanel value={value1} index={1} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>Game Designer</li>
                            <li>Economy/Monetization Designer</li>
                            <li>Level Designer</li>
                            <li>UI/UX Designer</li>
                            <li>Narrative Designer</li>
                            <li>Combat Designer</li>
                            <li>Systems Designer</li>
                          </ul>
                        </TabPanel>
                        <TabPanel value={value1} index={2} dir={theme.direction}>
                          <ul className='Objectives1' style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <li>Game Producer</li>
                            <li>Quality Assurance Tester</li>
                            <li>Video Game Marketing</li>
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

                      <EmblaCarouselMentors1 slides={SLIDES} options={OPTIONS} />




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

