import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuLogo from "./MenuLogo.jsx";
import { selectedTab } from "../redux/actions/tabAction";
import { FiChevronDown, FiAlignLeft } from "react-icons/fi";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import fourteen from "../../src/assets/img/banners/14-fa50a1ea.webp";
import years from "../../src/assets/img/banners/LAPTOPVIEW.webp";
import yearss from "../../src/assets/img/banners/MOBILEVERSION.webp";
import "./header.css";

// Styled Accordions
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': { borderBottom: 0 },
  '&::before': { display: 'none' },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.3rem', color: "#000" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  color: "#000",
  border: "none",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(90deg)', border: "none" },
  '& .MuiAccordionSummary-content': { marginLeft: theme.spacing(1), border: "none" },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: '1px solid #000',
  backgroundColor: '#fff',
  color: "#fff",
  padding: "0px 0px",
  fontFamily: "'Montserrat', sans-serif"
}));

function MenuCore(props) {
  const [expanded, setExpanded] = useState('panel0');
  const [activeParent, setActiveParent] = useState(false);
  const [activeParent1, setActiveParent1] = useState(false);
  const [activeParent2, setActiveParent2] = useState(false);
  const [activeParent3, setActiveParent3] = useState(false);
  const [activeParent4, setActiveParent4] = useState(false);
  const [activeParent5, setActiveParent5] = useState(false);
  const [left, setLeft] = useState(false);
  const [expandedPanel, setExpandedPanel] = useState(null);


  const toggleDrawer = (open) => () => setLeft(open);
  const [activeMenu, setActiveMenu] = useState(null);

  const togglePanel = (panel) => {
    setExpandedPanel(expandedPanel === panel ? null : panel);
  };
  const dispatch = useDispatch();
  const location = props.location; // from withRouter
  const isMobileState = useSelector(state => state.mainReducer.isMobile, shallowEqual);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (location.pathname.includes("/courses/")) setActiveParent(true);
    else setActiveParent(false);
    if (location.pathname.includes("/about-us/")) setActiveParent1(true);
    else setActiveParent1(false);
    if (location.pathname.includes("/admissions/")) setActiveParent2(true);
    else setActiveParent2(false);
    if (location.pathname.includes("/life-at-bsp/")) setActiveParent3(true);
    else setActiveParent3(false);
    if (location.pathname.includes("/blogs/")) setActiveParent4(true);
    else setActiveParent4(false);
    if (location.pathname.includes("/contactus/")) setActiveParent5(true);
    else setActiveParent5(false);
  }, [location.pathname]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  const selectTab = index => dispatch(selectedTab(index));
  const hiddenPaths = [
    "/landingpage/diploma-and-advanced-diploma-courses/",
    "/landingpage/diploma-and-advanced-diploma-game-development-courses/",
    "/landingpage/masters-and-bachelors-game-development-courses/",
    "/landingpage/certificate-program-in-essentials-of-game-design/",
    "/landingpage/certificate-program-in-basics-of-maya/",
    "/landingpage/certificate-program-in-3DGame-development-with-unity/",
    "/landingpage/certificate-program-in-game-development-for-VR/",
    "/landingpage/certificate-program-in-prototyping-and-game-concept-development/",
    "/landingpage/bachelors-degree-courses-in-gaming/",
    "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/",
    "/landingpage/masters-and-bachelors-programs/",
    "/landingpage/game-art-programs/",
    "/landingpage/short-course/",
    "/landingpage/short-course",
    "/landingpage/3DHard-surface-modelling-game-art/",
    "/landingpage/game-design-with-unreal-blue-prints/",
    "/landingpage/game-development-with-unity/",
    "/landingpage/game-development-with-unreal/",
    "/landingpage/ai-powered-game-design-and-level-building/",
    "/landingpage/game-development-with-unity-programs/",
    "/landingpage/game-development-with-unreal-programs/",
    "/landingpage/game-development-programs/",
    "/landingpage/certified-diploma-unity-game-development/",
    "/landingpage/top-game-development-programs/",
    "/landingpage/certified-diploma-unreal-game-development/",
    "/landingpage/certified-diploma-game-design-with-unreal-blueprints/",
    "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/",
    "/landingpage/best-gaming-courses-in-india/",
    "/intermediate-board-results/",
    "/shortcourses/form/"
  ];

  const shouldHide = hiddenPaths.includes(window.location.pathname);

  const linkStyles = {
    fontSize: isMobileState ? "13px" : "13.5px",
    height: "35px",
    lineHeight: "35px",
    borderBottom: "1px solid #999",
    fontWeight: isMobileState ? "500" : "500",
    fontFamily: "'Montserrat', sans-serif",
    color: "#000",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px",
    margin: "0"
  };
  const linkStyle = {
    fontSize: isMobileState ? "13px" : "13.5px",
    height: "35px",
    lineHeight: "35px",
    borderBottom: "0px solid #999",
    fontWeight: isMobileState ? "500" : "600",
    fontFamily: "'Montserrat', sans-serif",
    color: "#000",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px",
    margin: "0"
  };
  const renderCourses = () => (
    <div>
      {/* Bachelor's */}
      <div onClick={() => togglePanel("bachelors")} className="mainct" style={{ fontSize: "13.5px", cursor: "pointer" }}>
        Bachelor's Degree
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" style={{ marginLeft: "auto", color: "#fff" }}>
          <polyline points="6 9 12 13.5 18 9"></polyline>
        </svg>
      </div>
      {expandedPanel === "bachelors" && (
        <div className="accordion-content">
          <Link to="/courses/bachelors-in-computer-science-and-game-development/" style={linkStyles} onClick={toggleDrawer(false)}>Computer Science & Game Development</Link>
          <Link to="/courses/bachelors-in-game-art-and-design/" style={linkStyles} onClick={toggleDrawer(false)}>Game Art & Design</Link>
          <Link to="/courses/bachelors-in-augmented-reality-and-virtual-reality/" style={linkStyles} onClick={toggleDrawer(false)}>Augmented Reality & Virtual Reality</Link>
        </div>
      )}

      {/* Advanced Diploma */}
      <div onClick={() => togglePanel("advDiploma")} className="mainct" style={{ fontSize: "13.5px", cursor: "pointer", marginTop: "10px" }}>
        Advanced Diploma
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" style={{ marginLeft: "auto", color: "#fff" }}>
          <polyline points="6 9 12 13.5 18 9"></polyline>
        </svg>
      </div>
      {expandedPanel === "advDiploma" && (
        <div className="accordion-content">
          <Link to="/courses/advanced-diploma-in-game-development/" style={linkStyles} onClick={toggleDrawer(false)}>Game Development</Link>
          <Link to="/courses/advanced-diploma-in-3d-game-art-digital-sculpting/" style={linkStyles} onClick={toggleDrawer(false)}>3D Game Art & Digital Sculpting</Link>
          {/* <Link to="/courses/advanced-diploma-in-traditional-digital-art/" style={linkStyles} onClick={toggleDrawer(false)}>Traditional & Digital Concept Art</Link> */}
        </div>
      )}

      {/* Diploma */}
      <div onClick={() => togglePanel("diploma")} className="mainct" style={{ fontSize: "13.5px", cursor: "pointer", marginTop: "10px" }}>
        Diploma
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" style={{ marginLeft: "auto", color: "#fff" }}>
          <polyline points="6 9 12 13.5 18 9"></polyline>
        </svg>
      </div>
      {expandedPanel === "diploma" && (
        <div className="accordion-content">
          <Link to="/courses/diploma-in-game-design-production/" style={linkStyles} onClick={toggleDrawer(false)}>Game Design & Production</Link>
          <Link to="/courses/diploma-in-game-development-with-unity/" style={linkStyles} onClick={toggleDrawer(false)}>Game Development with Unity</Link>
          <Link to="/courses/diploma-in-game-development-with-unreal/" style={linkStyles} onClick={toggleDrawer(false)}>Game Development with Unreal</Link>
          <Link to="/courses/diploma-in-3d-environment-art-creation-for-games/" style={linkStyles} onClick={toggleDrawer(false)}>3D Environment Art For Games</Link>
          <Link to={"/courses/diploma-in-vr-application-development/"} style={linkStyles} onClick={toggleDrawer(false)}>VR Application Development</Link>
        </div>
      )}

      {/* Master's */}
      <div onClick={() => togglePanel("masters")} className="mainc" style={{ fontSize: "13.5px", cursor: "pointer", marginTop: "10px" }}>
        Master's
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" style={{ marginLeft: "auto", color: "#fff" }}>
          <polyline points="6 9 12 13.5 18 9"></polyline>
        </svg>
      </div>
      {expandedPanel === "masters" && (
        <div className="accordion-content">
          <Link to="/courses/masters-in-game-technology/" style={linkStyles} onClick={toggleDrawer(false)}>Game Technology</Link>
          <Link to="/courses/masters-in-3d-game-art-design/" style={linkStyles} onClick={toggleDrawer(false)}>3D Game Art & Game Design</Link>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* ===== DESKTOP MENU ===== */}
      {!isMobileState ? (
        <div className="head-container" style={{ background: "#ffffff" }}>
          <div className="head-wrapper">
            <MenuLogo />
            <div>

              {/* Celebration Banner */}
              {location.pathname.startsWith("/landingpage/") && (
                <div className="Celebratingd" style={{ margin: "10px auto", display: "flex", alignItems: "center", justifyContent: "right" }}>
                  <img alt="fourteen" style={{ marginRight: "10px" }} width="67" height="67" src={fourteen} />
                  <img alt="years" width="197" height="39" src={isMobileState ? yearss : years} />
                </div>
              )}

              {/* Navigation */}
              <div
                id="AnaMenu"
                style={{
                  display: shouldHide ? "none" : "block",
                }}
              >
                <ul id="nav">
                  {/* COURSES */}
                  <li style={{ color: "#ee1b24" }}>
                    <Link to={"/courses/"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: activeParent ? "#ee1b24" : "#000", padding: "10px 14px", fontWeight: "600", textDecoration: "none" }}>
                      Courses <FiChevronDown style={{ color: activeParent ? "#ee1b24" : "#000" }} />
                    </Link>
                    <ul style={{ width: "390px" }}>
                      {/* Bachelor's */}
                      <Accordion expanded={expanded === "panelg"} onChange={handleChange("panelg")}>
                        <AccordionSummary aria-controls="panelgd-content" id="panelgd-header">
                          <Typography component="div"><div className="mainct" style={{ fontSize: "13.5px", color: "#000", textTransform: "uppercase" }}>Bachelor’s</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="accordion-content">
                            <Link to={"/courses/bachelors-in-computer-science-and-game-development/"} onClick={() => setActiveParent(true)} style={linkStyles}>Computer Science & Game Development</Link>
                            <Link to={"/courses/bachelors-in-game-art-and-design/"} onClick={() => setActiveParent(true)} style={linkStyles}>Game Art & Design</Link>
                            <Link to={"/courses/bachelors-in-augmented-reality-and-virtual-reality/"} onClick={() => setActiveParent(true)} style={linkStyles}>Augmented Reality & Virtual Reality</Link>
                          </div>
                        </AccordionDetails>
                      </Accordion>

                      {/* Advanced Diploma */}
                      <Accordion expanded={expanded === "panela3"} onChange={handleChange("panela3")}>
                        <AccordionSummary aria-controls="panela3d-content" id="panela3d-header">
                          <Typography component="div"><div className="mainct" style={{ fontSize: "13.5px", color: "#000", textTransform: "uppercase" }}>Advanced Diploma</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="accordion-content">
                            <Link to={"/courses/advanced-diploma-in-game-development/"} onClick={() => setActiveParent(true)} style={linkStyles}>Game Development</Link>
                            <Link to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"} onClick={() => setActiveParent(true)} style={linkStyles}>3D Game Art & Digital Sculpting</Link>
                            {/* <Link to={"/courses/advanced-diploma-in-traditional-digital-art/"} onClick={() => setActiveParent(true)} style={linkStyles}>Traditional & Digital Concept Art</Link> */}
                          </div>
                        </AccordionDetails>
                      </Accordion>

                      {/* Diploma */}
                      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                          <Typography component="div"><div className="mainct" style={{ fontSize: "13.5px", color: "#000", textTransform: "uppercase" }}>Diploma</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="accordion-content">
                            <Link to={"/courses/diploma-in-game-design-production/"} onClick={() => setActiveParent(true)} style={linkStyles}>Game Design & Production</Link>
                            <Link to={"/courses/diploma-in-game-development-with-unity/"} onClick={() => setActiveParent(true)} style={linkStyles}>Game Development with Unity</Link>
                            <Link to={"/courses/diploma-in-game-development-with-unreal/"} onClick={() => setActiveParent(true)} style={linkStyles}>Game Development with Unreal</Link>
                            <Link to={"/courses/diploma-in-3d-environment-art-creation-for-games/"} onClick={() => setActiveParent(true)} style={linkStyles}>3D Environment Art For Games</Link>
                            <Link to={"/courses/diploma-in-vr-application-development/"} onClick={() => setActiveParent(true)} style={linkStyles}>VR Application Development</Link>
                          </div>
                        </AccordionDetails>
                      </Accordion>

                      {/* Master's */}
                      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                          <Typography component="div"><div className="mainct" style={{ fontSize: "13.5px", color: "#000", textTransform: "uppercase" }}>Master’s</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="accordion-content">
                            <Link to={"/courses/masters-in-game-technology/"} onClick={() => setActiveParent(true)} style={linkStyles}>Game Technology</Link>
                            <Link to={"/courses/masters-in-3d-game-art-design/"} onClick={() => setActiveParent(true)} style={linkStyles}>3D Game Art & Game Design</Link>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </ul>
                  </li>

                  {/* ABOUT US */}
                  <li style={{ color: activeParent1 ? "#ee1b24" : "#000" }}>
                    <Link to={""} onClick={(e) => e.preventDefault()} style={{ color: activeParent1 ? "#ee1b24" : "#000" }}>About us <FiChevronDown style={{ color: activeParent1 ? "#ee1b24" : "#000" }} /></Link>
                    <ul style={{ width: "320px" }}>
                      <div className="mainc"><Link to={"/about-us/our-story/"} onClick={() => setActiveParent1(true)} style={linkStyle}>Our story</Link></div>
                      <div className="mainc"><Link to={"/about-us/affiliation-collaboration/"} onClick={() => setActiveParent1(true)} style={linkStyle}>Affiliation</Link></div>
                      <div className="mainc"><Link to={"/about-us/placement-support/"} onClick={() => setActiveParent1(true)} className="link-item" style={linkStyle}>Placement Support</Link></div>
                    </ul>
                  </li>

                  {/* ADMISSIONS */}
                  <li style={{ color: activeParent2 ? "#ee1b24" : "#000" }}>
                    <Link to={""} onClick={(e) => e.preventDefault()} style={{ color: activeParent2 ? "#ee1b24" : "#000" }}>Admissions <FiChevronDown style={{ color: activeParent2 ? "#ee1b24" : "#000" }} /></Link>
                    <ul style={{ width: "350px" }}>
                      <div className="mainc"><Link to={"/admissions/admission-process/"} onClick={() => setActiveParent2(true)} style={linkStyle}>Admission Process</Link></div>
                      <div className="mainc"><Link to={"/admissions/financial-assistance-and-scholarship/"} onClick={() => setActiveParent2(true)} className="link-item" style={linkStyle}>Financial Assistance</Link></div>
                    </ul>
                  </li>

                  {/* LIFE @ BSP */}
                  <li style={{ color: activeParent3 ? "#ee1b24" : "#000" }}>
                    <Link to={""} onClick={(e) => e.preventDefault()} style={{ color: activeParent3 ? "#ee1b24" : "#000" }}>Life @ BSP <FiChevronDown style={{ color: activeParent3 ? "#ee1b24" : "#000" }} /></Link>
                    <ul style={{ width: "350px" }}>
                      <div className="mainc"><Link to={"/life-at-bsp/alumni-success/"} onClick={() => setActiveParent3(true)} style={linkStyle}>Alumni Success</Link></div>
                      <div className="mainc"><Link to={"/life-at-bsp/student-portfolio/"} onClick={() => setActiveParent3(true)} style={linkStyle}>Student Portfolio</Link></div>
                      <div className="mainc"><Link to={"/life-at-bsp/student-awards/"} onClick={() => setActiveParent3(true)} style={linkStyle}>Student Awards</Link></div>
                      <div className="mainc"><Link to={"/life-at-bsp/accelerator-program/"} onClick={() => setActiveParent3(true)} style={linkStyle}>Accelerator Program</Link></div>
                      <div className="mainc"><Link to={"/life-at-bsp/facilities/"} className="link-item" onClick={() => setActiveParent3(true)} style={linkStyle}>Hostel Facilities</Link></div>
                    </ul>
                  </li>

                  {/* BLOGS */}
                  <li style={{ color: activeParent4 ? "#ee1b24" : "#000" }}><Link to={"/blogs/"} style={{ color: activeParent4 ? "#ee1b24" : "#000" }}>Blogs</Link></li>

                  {/* CONTACT */}
                  <li style={{ color: activeParent5 ? "#ee1b24" : "#000" }}><Link to={"/contactus/"} style={{ color: activeParent5 ? "#ee1b24" : "#000" }}>Contact us</Link></li>

                  {/* APPLICATION FORM */}
                  <li style={{ color: activeParent5 ? "#ee1b24" : "#000" }}>
                    <Link to={"/Application-form/"} className="nobg">
                      <button className="three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">Application Form</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (


        <div className="head-container">
          <div className="mobile-menu">
            {isMobileState ? <FiAlignLeft style={{
              display: window.location.pathname === "/landingpage/diploma-and-advanced-diploma-courses/" || window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/"|| window.location.pathname === "/landingpage/certificate-program-in-basics-of-maya/" || window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/" || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/" || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" ||
                window.location.pathname === "/landingpage/masters-and-bachelors-programs/" || window.location.pathname === "/landingpage/bachelors-degree-courses-in-gaming/" || window.location.pathname === "/landingpage/game-art-programs/" || window.location.pathname === "/landingpage/short-course/" ||
                window.location.pathname === "/landingpage/3DHard-surface-modelling-game-art/" || window.location.pathname === "/landingpage/game-design-with-unreal-blue-prints/" || window.location.pathname === "/landingpage/game-development-with-unity/" || window.location.pathname === "/landingpage/game-development-with-unreal/" || window.location.pathname === "/landingpage/ai-powered-game-design-and-level-building/" || window.location.pathname === "/landingpage/short-course" || window.location.pathname === "/landingpage/game-development-with-unity-programs/" || window.location.pathname === "/landingpage/game-development-with-unreal-programs/" || window.location.pathname === "/landingpage/game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/top-game-development-programs/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" ||
                window.location.pathname === "/intermediate-board-results/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/best-gaming-courses-in-india/" || window.location.pathname === "/shortcourses/form/" ? "none" : "block"
            }} className="mt-menu-icon" alt="menú" onClick={toggleDrawer(true)} /> : null}
            <MenuLogo />
            <div>
              {window.location.pathname === "/landingpage/diploma-and-advanced-diploma-game-development-courses/" || window.location.pathname === "/landingpage/masters-and-bachelors-game-development-courses/" || window.location.pathname === "/landingpage/certificate-program-in-essentials-of-game-design/" || window.location.pathname === "/landingpage/certificate-program-in-basics-of-maya/"|| window.location.pathname === "/landingpage/certificate-program-in-3DGame-development-with-unity/" || window.location.pathname === "/landingpage/certificate-program-in-game-development-for-VR/" || window.location.pathname === "/landingpage/certificate-program-in-prototyping-and-game-concept-development/" || window.location.pathname === "/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/" || window.location.pathname === "/landingpage/bachelors-degree-courses-in-gaming/" ||
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
                    <Link to={"/courses/"} onClick={() => {
                      toggleDrawer(false)();
                      window.scrollTo(0, 0);
                    }}
                    >Courses</Link>
                    <div>
                      <FiChevronDown style={{ color: "#000" }} />
                    </div>
                  </li>
                  {activeMenu === 'courses' && (
                    <>
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                          <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Bachelor's Degree</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="div" onClick={() => {
                            toggleDrawer(false)();
                            window.scrollTo(0, 0);
                          }}>
                            <div className="accordion-content">
                              <Link to={"/courses/bachelors-in-computer-science-and-game-development/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Computer Science & Game Development</Link>
                              <Link to={"/courses/bachelors-in-game-art-and-design/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Art & Design</Link>
                              <Link to={"/courses/bachelors-in-augmented-reality-and-virtual-reality/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>Augmented Reality & Virtual Reality</Link>
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                          <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Advanced Diploma</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="div" onClick={() => {
                            toggleDrawer(false)();
                            window.scrollTo(0, 0);
                          }}>
                            <div className="accordion-content">
                              <Link to={"/courses/advanced-diploma-in-game-development/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}> Game Development</Link>
                              <Link to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}> 3D Game Art & Digital Sculpting</Link>
                              {/* <Link to={"/courses/advanced-diploma-in-traditional-digital-art/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>Traditional & Digital Concept Art</Link> */}
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                          <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Diploma</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="div" onClick={() => {
                            toggleDrawer(false)();
                            window.scrollTo(0, 0);
                          }}>
                            <div className="accordion-content">
                              <Link onClick={() => {
                                toggleDrawer(false)();
                                window.scrollTo(0, 0);
                              }} to={"/courses/diploma-in-game-design-production/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Design & Production</Link>
                              <Link onClick={() => {
                                toggleDrawer(false)();
                                window.scrollTo(0, 0);
                              }} to={"/courses/diploma-in-game-development-with-unity/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Development with Unity</Link>
                              <Link onClick={() => {
                                toggleDrawer(false)();
                                window.scrollTo(0, 0);
                              }} to={"/courses/diploma-in-game-development-with-unreal/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Development with Unreal</Link>
                              <Link onClick={() => {
                                toggleDrawer(false)();
                                window.scrollTo(0, 0);
                              }} to={"/courses/diploma-in-3d-environment-art-creation-for-games/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>3D Environment Art For Games</Link>
                              <Link onClick={() => {
                                toggleDrawer(false)();
                                window.scrollTo(0, 0);
                              }} to={"/courses/diploma-in-vr-application-development/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>VR Application Development</Link>
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                          <Typography component="div"><div className="mainc" style={{ fontSize: "13.5px" }}>Master's</div></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="div" onClick={() => {
                            toggleDrawer(false)();
                            window.scrollTo(0, 0);
                          }}>
                            <div className="accordion-content">
                              <Link onClick={() => {
                                toggleDrawer(false)();
                                window.scrollTo(0, 0);
                              }} to={"/courses/masters-in-game-technology/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "10px", display: "flex", paddingLeft: "40px" }}>Game Technology</Link>
                              <Link onClick={() => {
                                toggleDrawer(false)();
                                window.scrollTo(0, 0);
                              }} to={"/courses/masters-in-3d-game-art-design/"} style={{ fontSize: "13px", height: "35px", lineHeight: "35px", borderBottom: "1px solid #999", fontWeight: "500", fontFamily: "'Montserrat', sans-serif", color: "#000", marginLeft: "0px", textTransform: "uppercase", marginBottom: "0px", display: "flex", paddingLeft: "40px" }}>3D Game Art & Game Design</Link>

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
                      <FiChevronDown style={{ color: "#000" }} />
                    </div>
                  </li>
                  {activeMenu === 'about' && (
                    <div className="MobileAccordian-content" onClick={() => {
                      toggleDrawer(false)();
                      window.scrollTo(0, 0);
                    }} onKeyDown={toggleDrawer(false)}>
                      <Link to={"/about-us/our-story/"}>Our story</Link>
                      <Link to={"/about-us/affiliation-collaboration/"}>Affiliation</Link>
                      <Link to={"/about-us/placement-support/"}>Placement Support</Link>
                    </div>
                  )}
                  <li onClick={() => setActiveMenu(activeMenu === 'admission' ? null : 'admission')}>
                    <Link to={"/admissions/admission-process/"} onClick={() => selectTab(0)}>Admissions</Link>
                    <div>
                      <FiChevronDown style={{ color: "#000" }} />
                    </div>
                  </li>
                  {activeMenu === 'admission' && (
                    <div className="MobileAccordian-content" onClick={() => {
                      toggleDrawer(false)();
                      window.scrollTo(0, 0);
                    }} onKeyDown={toggleDrawer(false)}>
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
                      <FiChevronDown style={{ color: "#000" }} />
                    </div>
                  </li>
                  {activeMenu === 'life' && (
                    <div className="MobileAccordian-content" onClick={() => {
                      toggleDrawer(false)();
                      window.scrollTo(0, 0);
                    }} onKeyDown={toggleDrawer(false)}>
                      <Link to={"/life-at-bsp/alumni-success/"}>Alumni Success</Link>
                      <Link to={"/life-at-bsp/student-portfolio/"}>Student Portfolio</Link>
                      <Link to={"/life-at-bsp/student-awards/"}>Student Awards</Link>

                      <Link to={"/life-at-bsp/accelerator-program/"}>Accelerator Program</Link>
                      <Link to={"/life-at-bsp/facilities/"}>Hostel Facilities</Link>
                    </div>
                  )}
                  <li onClick={() => {
                    toggleDrawer(false)();
                    window.scrollTo(0, 0);
                  }} onKeyDown={toggleDrawer(false)}>
                    <Link to={"/blogs/"}>Blogs</Link>

                  </li>



                  {/* {isActiveB4 && <div className="MobileAccordian-content" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                      <Link to={""}>Blog</Link>
                    </div>} */}
                  <li onClick={() => {
                    toggleDrawer(false)();
                    window.scrollTo(0, 0);
                  }} onKeyDown={toggleDrawer(false)}>
                    <Link to={"/contactus/"}>Contact us</Link>
                  </li>

                  <li onClick={() => {
                    toggleDrawer(false)();
                    window.scrollTo(0, 0);
                  }} onKeyDown={toggleDrawer(false)}>

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
                onClick={() => {
                  toggleDrawer(false)();
                  window.scrollTo(0, 0);
                }}
                onKeyDown={toggleDrawer(false)}
              >
                <div className="menu-divider"></div>
                <MenuLogo />

              </div>
            </div>
          </SwipeableDrawer>
        </div>

      )}
    </>
  );
}

export default withRouter(MenuCore);