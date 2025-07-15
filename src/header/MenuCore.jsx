import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuLogo from "./MenuLogo.jsx";
import { selectedTab } from "../redux/actions/tabAction";
import { FiChevronDown } from "react-icons/fi";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FiAlignLeft } from "react-icons/fi";
import fourteen from "../../src/assets/img/banners/14-fa50a1ea.webp";
import years from "../../src/assets/img/banners/LAPTOPVIEW.webp";
import yearss from "../../src/assets/img/banners/MOBILEVERSION.webp";






import "./header.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));



const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.3rem', color: "#fff" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#000',
  color: "#fff",
  border: "none",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    border: "none",
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    border: "none",
  },
  ...theme.applyStyles('dark', {
    backgroundColor: '#000',
    border: "none",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //padding: theme.spacing(2),
  borderTop: '0px solid #000',
  backgroundColor: '#000',
  color: "#fff",
  padding: "0px 0px",
  fontFamily: "'Montserrat', sans-serif"
}));


export default function MenuCore() {

  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const dispatch = useDispatch();



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const [activeMenu, setActiveMenu] = useState(null);
  // const [isActiveB1, setIsActiveB1] = useState(false);
  // const [isActiveB2, setIsActiveB2] = useState(false);
  // const [isActiveB3, setIsActiveB3] = useState(false);
  // const [isActiveB4, setIsActiveB4] = useState(false);
  // const [isActiveB5, setIsActiveB5] = useState(false);

  const selectTab = index => {
    dispatch(selectedTab(index))
  }

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const [left, setLeft] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setLeft(open);
  };


  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Helmet>
      {
        !isMobileState ?
          <div className="head-container">
            <div className="head-wrapper">
              <MenuLogo />
              <div>




                {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" ||
                  window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/" || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/" || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/" || window.location.pathname === "/landingpage/bachelors-degree-courses-in-gaming/" || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" ||
                  window.location.pathname === "/intermediate-board-results/" ||
                  window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/short-course/" || window.location.pathname === "/landingpage/short-course" ||
                  window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" || window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" || window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/top-game-development-programs/"
                  || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? <div className="Celebratingd" style={{ margin: "10px auto", display: "flex", alignItems: "center", justifyContent: "right" }}><img alt="fourteen" style={{ marginRight: "10px" }} width="67" height="67" src={fourteen} /><img alt="years" width="197" height="39" src={isMobileState ? yearss : years} /></div> : null}



                <div id='AnaMenu' style={{
                  display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/" || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/" || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/" || window.location.pathname === "/landingpage/bachelors-degree-courses-in-gaming/" || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" ||
                    window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/short-course/" || window.location.pathname === "/landingpage/short-course" ||
                    window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" || window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" || window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ||
                    window.location.pathname === "/intermediate-board-results/" || window.location.pathname === "/shortcourses/form/" ? "none" : "block"
                }}>
                  <ul id='nav'>
                    {/* <li><Link to={"/"} onClick={() => selectTab(0)}>Home</Link></li> */}

                    <li>
                      <Link to={"/courses/"}>Courses <FiChevronDown /></Link>
                      <ul style={{ width: "390px" }}>


                        <Accordion expanded={expanded === 'panelg'} onChange={handleChange('panelg')}>
                          <AccordionSummary aria-controls="panelgd-content" id="panelgd-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Bachelor’s</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div">
                              <div className="accordion-content">
                                <Link to={"/courses/bachelors-in-computer-science-and-game-development/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}> Computer Science & Game Development</Link>
                                <Link to={"/courses/bachelors-in-game-art-and-design/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>Game Art & Design</Link>
                                <Link to={"/courses/bachelors-in-augmented-reality-and-virtual-reality/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>Augmented Reality & Virtual Reality</Link>
                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panela3'} onChange={handleChange('panela3')}>
                          <AccordionSummary aria-controls="panela3d-content" id="panela3d-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Advanced Diploma</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div">
                              <div className="accordion-content">
                                <Link to={"/courses/advanced-diploma-in-game-development/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}> Game Development</Link>
                                <Link to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}> 3D Game Art & Digital Sculpting</Link>
                                <Link to={"/courses/advanced-diploma-in-traditional-digital-art/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>Traditional & Digital Concept Art</Link>
                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Diploma</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div">
                              <div className="accordion-content">
                                <Link to={"/courses/diploma-in-game-design-production/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>Game Design & Production</Link>
                                <Link to={"/courses/diploma-in-game-development-with-unity/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>Game Development with Unity</Link>
                                <Link to={"/courses/diploma-in-3d-environment-art-creation-for-games/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>3D Environment Art For Games</Link>
                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Master’s</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div">
                              <div className="accordion-content">
                                <Link to={"/courses/masters-in-game-technology/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}> Game Technology</Link>
                                <Link to={"/courses/masters-in-3d-game-art-design/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>3D Game Art & Game Design</Link>

                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>






                      </ul>

                    </li>
                    <li>
                      <Link to={""} onClick={(e) => e.preventDefault()} style={{ pointerEvents: 'none', color: '#fff' }}>
                        About us <FiChevronDown />
                      </Link>                      <ul style={{ width: "320px" }}>




                        <div className="mainc"><Link to={"/about-us/our-story/"} style={{ color: "#fff" }}>Our story</Link></div>

                        <div className="mainc"><Link to={"/about-us/affiliation-collaboration/"} style={{  color: "#fff" }}>Affiliation</Link></div>

                        {/* <div className="mainc"><Link to={"/about-us/our-mentors/"} style={{ paddingLeft: "0px", paddingRight: "0px", color: "#fff" }}>Our mentors</Link></div> */}
                        <div className="mainc"><Link to={"/about-us/placement-support/"} style={{ color: "#fff" }}>Placement Support</Link></div>


                      </ul>

                    </li>

                    <li>
                      <Link to={""} onClick={(e) => e.preventDefault()} style={{ pointerEvents: 'none', color: '#fff' }}>Admissions <FiChevronDown /></Link>
                      <ul style={{ width: "350px" }}>


                        <div className="mainc"><Link to={"/admissions/admission-process/"} style={{color: "#fff" }}>Admission Process</Link></div>

                        {/* < div className="mainc"><Link to={"/admissions/financial-assistance-and-scholarship/"} style={{ paddingLeft: "0px", paddingRight: "0px", color: "#fff", pointerEvents: "none" }}>Financial Assistance</Link></ div> */}

                        < div className="mainc"><Link to={"/admissions/financial-assistance-and-scholarship/"} style={{  color: "#fff" }}>Financial Assistance</Link></ div>

                        {/* < div className="mainc"><Link to={"/scholarships/"} style={{paddingLeft: "0px", paddingRight: "0px", color: "#fff"}}>Scholarships</Link></ div> */}


                      </ul>

                    </li>

                    <li>
                      <Link to={""} onClick={(e) => e.preventDefault()} style={{ pointerEvents: 'none', color: '#fff' }}>Life @ BSP <FiChevronDown /></Link>
                      <ul style={{ width: "350px" }}>


                        <div className="mainc"><Link to={"/life-at-bsp/alumni-success/"} style={{  color: "#fff" }}>Alumni Success</Link></div>
                        < div className="mainc"><Link to={"/life-at-bsp/student-artwork-and-games/"} style={{ color: "#fff" }}>Student Art works & games</Link></ div>

                        < div className="mainc"><Link to={"/life-at-bsp/student-awards/"} style={{ color: "#fff" }}>Student Awards</Link></ div>
                        {/* <Accordion expanded={expanded === 'panels'} onChange={handleChange('panels')}>
        <AccordionSummary aria-controls="panel4ds-content" id="panel4ds-header">
          <Typography><div className="mainc" style={{fontSize:"13.5px"}}><Link to={"/life-at-bsp/student-awards/"} style={{ paddingLeft: "0px", paddingRight: "0px", color: "#fff" }}>Student Showcase</Link></div></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="accordion-content">
                          <Link to={"/life-at-bsp/student-art-works/"} style={{ fontSize: "13.5px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>Student Art works & games</Link>
                         
                       
                        </div>
          </Typography>
        </AccordionDetails>
      </Accordion> */}
                        < div className="mainc"><Link to={"/life-at-bsp/accelerator-program/"} style={{  color: "#fff" }}>Accelerator Program</Link></ div>

                        {/* < div className="mainc"><Link to={"/life-at-bsp/events-workshops/"} style={{ paddingLeft: "0px", paddingRight: "0px", color: "#fff" }}>Events & Workshops</Link></ div>  */}
                        < div className="mainc"><Link to={"/life-at-bsp/facilities/"} style={{ color: "#fff" }}>Hostel Facilities</Link></ div>

                      </ul>

                    </li>

                    <li>
                      <Link to={"/blogs/"}>Blogs</Link>



                      {/* <div className="mainc"><Link to={"/"} style={{ paddingLeft: "0px", paddingRight: "0px", color: "#fff" }}>Media</Link></div> */}

                      {/* < div className="mainc">
                          <Link to={""} style={{ paddingLeft: "0px", paddingRight: "0px", color: "#fff" }}> 
                          Blog
                        </Link>
                        </ div> */}

                      {/* < div className="mainc"><Link to={"/coming-soon/"} style={{ paddingLeft: "0px", paddingRight: "0px", color: "#fff" }}>Brochures</Link></ div> */}



                    </li>




                    <li>
                      <Link to={"/contactus/"}>Contact us</Link>

                    </li>

                    <li>
                      <Link to={"/Application-form/"} className="nobg">
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
                          Application-form
                        </button>
                      </Link>
                      {/* <Link to={"/Application-form/"}>Application-form</Link> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="head-container">
            <div className="mobile-menu">
              {isMobileState ? <FiAlignLeft style={{
                display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/" || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/" || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/" || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" ||
                  window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/bachelors-degree-courses-in-gaming/"|| window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/short-course/" ||
                  window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" || window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" || window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/" || window.location.pathname === "/landingpage/short-course" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||
                  window.location.pathname === "/intermediate-board-results/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" || window.location.pathname === "/shortcourses/form/" ? "none" : "block"
              }} className="mt-menu-icon" alt="menú" onClick={toggleDrawer(true)} /> : null}
              <MenuLogo />
              <div>
                {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/" || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/" || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/" || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" || window.location.pathname === "/landingpage/bachelors-degree-courses-in-gaming/"||
                  window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" || window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" || window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/" || window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/short-course/" || window.location.pathname === "/landingpage/short-course" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/top-game-development-programs/" ||
                  window.location.pathname === "/landingpage/masters-and-bachelors-programs/" ||
                  window.location.pathname === "/intermediate-board-results/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" ? <div className="Celebratingd" style={{ margin: "10px auto", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: isMobileState ? "space-between" : "right", width: isMobileState ? "88px" : "100%" }}><img alt="fourteen" width="44" height="44" style={{ marginBottom: "4px" }} src={fourteen} /><img alt="Years" width="88" height="44" src={years} /></div> : null}
              </div>
            </div>
            <SwipeableDrawer
              open={left}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              style={{ width: "90%" }}
            >
              <div className="mobile-menu-block" style={{ display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" ? "none" : "block" }}>
                <div className="mobile-menu-wrapper">
                  <ul
                    className="mobile-menumt"
                  // onClick={toggleDrawer(false)}
                  // onKeyDown={toggleDrawer(false)}
                  >
                    <li onClick={() => setActiveMenu(activeMenu === 'courses' ? null : 'courses')}>
                      <Link to={"/courses/"} onClick={toggleDrawer(false)}>Courses</Link>
                      <div>
                        <FiChevronDown style={{ color: "#fff" }} />
                      </div>
                    </li>
                    {activeMenu === 'courses' && (
                      <>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Bachelor's Degree</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div" onClick={toggleDrawer(false)}>
                              <div className="accordion-content">
                                <Link to={"/courses/bachelors-in-computer-science-and-game-development/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Computer Science & Game Development</Link>
                                <Link to={"/courses/bachelors-in-game-art-and-design/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Art & Design</Link>
                                <Link to={"/courses/bachelors-in-augmented-reality-and-virtual-reality/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>Augmented Reality & Virtual Reality</Link>
                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Advanced Diploma</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div" onClick={toggleDrawer(false)}>
                              <div className="accordion-content">
                                <Link to={"/courses/advanced-diploma-in-game-development/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}> Game Development</Link>
                                <Link to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}> 3D Game Art & Digital Sculpting</Link>
                                <Link to={"/courses/advanced-diploma-in-traditional-digital-art/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>Traditional & Digital Concept Art</Link>
                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Diploma</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div" onClick={toggleDrawer(false)}>
                              <div className="accordion-content">
                                <Link onClick={toggleDrawer(false)} to={"/courses/diploma-in-game-design-production/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Design & Production</Link>
                                <Link onClick={toggleDrawer(false)} to={"/courses/diploma-in-game-development-with-unity/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Development with Unity</Link>
                                <Link onClick={toggleDrawer(false)} to={"/courses/diploma-in-3d-environment-art-creation-for-games/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>3D Environment Art For Games</Link>
                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Master's</div></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography component="div" onClick={toggleDrawer(false)}>
                              <div className="accordion-content">
                                <Link onClick={toggleDrawer(false)} to={"/courses/masters-in-game-technology/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Technology</Link>
                                <Link onClick={toggleDrawer(false)} to={"/courses/masters-in-3d-game-art-design/"} style={{ fontSize: "12px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#fff", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>3D Game Art & Game Design</Link>

                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                      </>)}

                    {/* <li onClick={() => setIsActiveB5(!isActiveB5)}>
                      <Link to={""} onClick={() => selectTab(0)}>About us </Link>
                      <div>{isActiveB5 ? <FiChevronDown style={{ color: "#fff" }} /> : <FiChevronDown style={{ color: "#fff" }} />}</div>
                    </li>
                    {isActiveB5 && <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                      <Link to={"/about-us/our-story/"}>Our story</Link>
                      <Link to={"/about-us/affiliation-collaboration/"}>Affiliation</Link>
                      <Link to={"/about-us/placement-support/"}>Placement Support</Link>
                    </div>} */}
                    <li onClick={() => setActiveMenu(activeMenu === 'about' ? null : 'about')}>
                      <Link to={"/about-us/our-story/"} onClick={() => selectTab(0)}>About us</Link>
                      <div>
                        <FiChevronDown style={{ color: "#fff" }} />
                      </div>
                    </li>
                    {activeMenu === 'about' && (
                      <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                        <Link to={"/about-us/our-story/"}>Our story</Link>
                        <Link to={"/about-us/affiliation-collaboration/"}>Affiliation</Link>
                        <Link to={"/about-us/placement-support/"}>Placement Support</Link>
                      </div>
                    )}
                    <li onClick={() => setActiveMenu(activeMenu === 'admission' ? null : 'admission')}>
                      <Link to={"/admissions/admission-process/"} onClick={() => selectTab(0)}>Admissions</Link>
                      <div>
                        <FiChevronDown style={{ color: "#fff" }} />
                      </div>
                    </li>
                    {activeMenu === 'admission' && (
                      <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                        <Link to={"/admissions/admission-process/"}>Admission Process</Link>
                        <Link to={"/admissions/financial-assistance-and-scholarship/"} >Financial Assistance</Link>
                      </div>
                    )}

                    {/* <li onClick={() => setIsActiveB2(!isActiveB2)}>
                      <Link to={""} onClick={() => selectTab(0)}>Admissions </Link>
                      <div>{isActiveB2 ? <FiChevronDown style={{ color: "#fff" }} /> : <FiChevronDown style={{ color: "#fff" }} />}</div>
                    </li>
                    {isActiveB2 && <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                      <Link to={"/admissions/admission-process/"}>Admission Process</Link>
                      <Link to={"/admissions/financial-assistance-and-scholarship/"} >Financial Assistance</Link>
                    </div>} */}

                    {/* <li onClick={() => setIsActiveB3(!isActiveB3)} >
                      <Link to={""}>Life @ BSP</Link>
                      <div>{isActiveB3 ? <FiChevronDown style={{ color: "#fff" }} /> : <FiChevronDown style={{ color: "#fff" }} />}</div>
                    </li>
                    {isActiveB3 && <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                      <Link to={"/life-at-bsp/alumni-success/"}>Alumni Success</Link>
                      
                      <Link to={"/life-at-bsp/student-awards/"}>Student Showcase</Link>
                 
                      <Link to={"/life-at-bsp/accelerator-program/"}>Accelerator Program</Link>
                      <Link to={"/life-at-bsp/facilities/"}>Hostel Facilities</Link>
                    </div>} */}
                    <li onClick={() => setActiveMenu(activeMenu === 'life' ? null : 'life')}>
                      <Link to={"/life-at-bsp/alumni-success/"} onClick={() => selectTab(0)}>Life @ BSP</Link>
                      <div>
                        <FiChevronDown style={{ color: "#fff" }} />
                      </div>
                    </li>
                    {activeMenu === 'life' && (
                      <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                        <Link to={"/life-at-bsp/alumni-success/"}>Alumni Success</Link>
                        <Link to={"/life-at-bsp/student-artwork-and-games/"}>Student Art works & games</Link>
                        <Link to={"/life-at-bsp/student-awards/"}>Student Awards</Link>

                        <Link to={"/life-at-bsp/accelerator-program/"}>Accelerator Program</Link>
                        <Link to={"/life-at-bsp/facilities/"}>Hostel Facilities</Link>
                      </div>
                    )}
                    <li onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                      <Link to={"/blogs/"}>Blogs</Link>

                    </li>



                    {/* {isActiveB4 && <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                      <Link to={""}>Blog</Link>
                    </div>} */}
                    <li onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                      <Link to={"/contactus/"}>Contact us</Link>
                    </li>

                    <li onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>

                      <Link to={"/Application-form/"} className="nobg">
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ marginTop: "0px" }}>
                          Application-form
                        </button>
                      </Link>
                    </li>

                  </ul>
                </div>
                <div
                  className="mobile-menu-footer"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <div className="menu-divider"></div>
                  <MenuLogo />

                </div>
              </div>
            </SwipeableDrawer>
          </div>
      }
    </>
  );
}
