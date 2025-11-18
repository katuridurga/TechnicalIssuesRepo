import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Async from "react-code-splitting";
import { handleMobileOrDesktop } from "../redux/actions/mainActions";
import withStyles from "@material-ui/core/styles/withStyles";
import menuStyle from "../assets/jss/material-dashboard-react/layouts/menuStyle.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ScrollToTop from "react-scroll-to-top";

import { useSelector, shallowEqual } from "react-redux";



const Main = () => <Async load={import("../content/Main.jsx")} />;
const InsuranceTypes = () => < Async load={import("../components/AC-StaticPages/InsuranceTypes/InsuraceTypes")} />;
const News = () => < Async load={import("../components/AC-StaticPages/News/News")} />;
const Courses = () => < Async load={import("../components/AC-StaticPages/Courses/Courses")} />;
const AboutUs = () => < Async load={import("../components/AC-StaticPages/AboutUs/AboutUs")} />;
const Placements = () => < Async load={import("../components/AC-StaticPages/Placements/Placements")} />;
const Affilication = () => < Async load={import("../components/AC-StaticPages/Affilication/Affilication")} />;
const ContactUs = () => < Async load={import("../components/AC-StaticPages/ContactUs/ContactUs")} />;
const Admissions = () => < Async load={import("../components/AC-StaticPages/Admissions/Admissions")} />;
const FinancialAssistance = () => < Async load={import("../components/AC-StaticPages/FinancialAssistance/FinancialAssistance")} />;
const Mentors = () => < Async load={import("../components/AC-StaticPages/Mentors/Mentors")} />;
const Scholarships = () => < Async load={import("../components/AC-StaticPages/Scholarships/Scholarships")} />;
const Blog = () => < Async load={import("../components/AC-StaticPages/Blog/Blog")} />;
const Alumni = () => < Async load={import("../components/AC-StaticPages/Alumni/Alumni")} />;
const Workshop = () => < Async load={import("../components/AC-StaticPages/Workshop/Workshop")} />;
const Accelerator = () => < Async load={import("../components/AC-StaticPages/Accelerator/Accelerator")} />;
const StudentArtAndGames = () => < Async load={import("../components/AC-StaticPages/StudentArtAndGames/StudentArtAndGames")} />;
const Terms = () => < Async load={import("../components/AC-StaticPages/TermsAndConditions/Terms")} />;
const Privacy = () => < Async load={import("../components/AC-StaticPages/PrivacyPolicy/Privacy")} />;
const Refund = () => < Async load={import("../components/AC-StaticPages/RefundPolicy/Refund")} />;
const Facilities = () => < Async load={import("../components/AC-StaticPages/Facilities/Facilities")} />;
const Blogdetail = () => < Async load={import("../components/AC-StaticPages/BlogDetails/Blogdetail.js")} />;
const Datepicker = () => < Async load={import("../components/AC-StaticPages/Datepicker/Datepicker.js")} />;
const ComingSoon = () => < Async load={import("../components/AC-StaticPages/ComingSoon/ComingSoon")} />;
const SkillDiploma = () => < Async load={import("../components/AC-StaticPages/SkillDiploma/SkillDiploma")} />;
const SiteMaps = () => < Async load={import("../components/AC-StaticPages/SiteMaps/SiteMaps")} />;
const StudentResult = () => < Async load={import("../components/AC-StaticPages/StudentResult/StudentResult")} />;
const StudentShowcase = () => < Async load={import("../components/AC-StaticPages/StudentShowcase/StudentShowcase")} />;
const DiplomaInVrApllication = () => < Async load={import("../components/AC-StaticPages/DiplomaInVrApllication/DiplomaInVrApllication")} />;
const HomeContentForm = () => < Async load={import("../content/HomeContentFrom.js")} />;






const DiplomaAndAdvancedDiplomaCourses = () => < Async load={import("../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaCourses")} />;
const TopGameDevelopmentPrograms = () => < Async load={import("../components/AC-StaticPages/landingpage/TopGameDevelopmentPrograms")} />;
const DiplomaAndAdvancedDiplomaCourses2 = () => < Async load={import("../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaCourses2")} />;
const DiplomaAndAdvancedDiplomaGamingCourses = () => < Async load={import("../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaGamingCourses")} />;
const DiplomaAndAdvancedDiplomaGamingCourses2 = () => < Async load={import("../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaGamingCourses2")} />;

const AllDiplomaAndAdvancedDiplomaGamingCourses = () => < Async load={import("../components/AC-StaticPages/landingpage/AllDiplomaAndAdvancedDiplomaGamingCourses.js")} />

const GameArtLP = () => < Async load={import("../components/AC-StaticPages/landingpage/GameArtLP.js")} />
const BachelorsNewLandingPage = () => < Async load={import("../components/AC-StaticPages/landingpage/BachelorsNewLandingPage.js")} />

const ShortCourse = () => < Async load={import("../components/AC-StaticPages/landingpage/ShortCourse.js")} />
const UnityGame = () => < Async load={import("../components/AC-StaticPages/landingpage/UnityGame.js")} />
const CertifiedSkillUnity = () => < Async load={import("../components/AC-StaticPages/landingpage/CertifiedSkillUnity.js")} />

const CertificateProgramInEssentialsOfGameDesign = () => < Async load={import("../components/AC-StaticPages/landingpage/CertificateProgramInEssentialsOfGameDesign.js")} />


const CertificateProgramIn3DGameDevelopmentWithUnity = () => < Async load={import("../components/AC-StaticPages/landingpage/CertificateProgramIn3DGameDevelopmentWithUnity.js")} />


const CertificateProgramInGameDevelopmentForVR = () => < Async load={import("../components/AC-StaticPages/landingpage/CertificateProgramInGameDevelopmentForVR.js")} />

const CertificateProgramInPrototypingAndGameConceptDevelopment = () => < Async load={import("../components/AC-StaticPages/landingpage/CertificateProgramInPrototypingAndGameConceptDevelopment.js")} />

const CertificateProgramInStorytellingAndDesignDocumentationForGames = () => < Async load={import("../components/AC-StaticPages/landingpage/CertificateProgramInStorytellingAndDesignDocumentationForGames.js")} />





const DHardSurfaceModellingGameArt = () => < Async load={import("../components/AC-StaticPages/landingpage/3DHardSurfaceModellingGameArt.js")} />
const GameDesignWithUnrealBlueprints = () => < Async load={import("../components/AC-StaticPages/landingpage/GameDesignWithUnrealBlueprints.js")} />
const GameDevelopmentWithUnity = () => < Async load={import("../components/AC-StaticPages/landingpage/GameDevelopmentWithUnity.js")} />
const GameDevelopmentWithUnreal = () => < Async load={import("../components/AC-StaticPages/landingpage/GameDevelopmentWithUnreal.js")} />
const AIPoweredGameDesignAndLevelBuilding = () => < Async load={import("../components/AC-StaticPages/landingpage/AIPoweredGameDesignAndLevelBuilding.js")} />







const CertifiedSkillUnreal = () => < Async load={import("../components/AC-StaticPages/landingpage/CertifiedSkillUnreal.js")} />
const CertifiedSkillHardSurface = () => < Async load={import("../components/AC-StaticPages/landingpage/CertifiedSkillHardSurface.js")} />
const UnrealBluePrint = () => < Async load={import("../components/AC-StaticPages/landingpage/UnrealBluePrint.js")} />
const Unreal = () => < Async load={import("../components/AC-StaticPages/landingpage/Unreal.js")} />
const GamedevelopmentLP = () => <  Async load={import("../components/AC-StaticPages/landingpage/GamedevelopmentLP.js")} />;
const BachelorsInComputerScienceGameDevelopment = () => < Async load={import("../components/AC-StaticPages/BachelorsInComputerScienceGameDevelopment/BachelorsInComputerScienceGameDevelopment")} />;
const GameArtDesign = () => < Async load={import("../components/AC-StaticPages/GameArtDesign/GameArtDesign")} />;
const AugmentedRealityAndVirtualReality = () => < Async load={import("../components/AC-StaticPages/AugmentedRealityAndVirtualReality/AugmentedRealityAndVirtualReality")} />;

const MScGameTechnology = () => < Async load={import("../components/AC-StaticPages/MScGameTechnology/MScGameTechnology")} />;
const MScGameTechnology3D = () => < Async load={import("../components/AC-StaticPages/MScGameTechnology/MScGameTechnology3D")} />;
const Applicationform = () => < Async load={import("../components/AC-StaticPages/Applicationform/Applicationform")} />;
const AdvancedDiplomaInGameDevelopment = () => < Async load={import("../components/AC-StaticPages/AdvancedDiplomaInGameDevelopment/AdvancedDiplomaInGameDevelopment")} />;

const AdvancedDiplomain3DGameArtDigitalSculpting = () => < Async load={import("../components/AC-StaticPages/AdvancedDiplomain3DGameArtDigitalSculpting/AdvancedDiplomain3DGameArtDigitalSculpting")} />;

const DiplomaIn3dEnvironmentArtCreationForGames = () => < Async load={import("../components/AC-StaticPages/DiplomaIn3dEnvironmentArtCreationForGames/DiplomaIn3dEnvironmentArtCreationForGames")} />;

const DiplomainGameDesignProduction = () => < Async load={import("../components/AC-StaticPages/DiplomainGameDesignProduction/DiplomainGameDesignProduction")} />;

const DiplomaInGameDevelopmentWithUnity = () => < Async load={import("../components/AC-StaticPages/DiplomaInGameDevelopmentWithUnity/DiplomaInGameDevelopmentWithUnity")} />;

const DiplomaInGameDevelopmentWithUnreal = () => < Async load={import("../components/AC-StaticPages/DiplomaInGameDevelopmentWithUnreal/DiplomaInGameDevelopmentWithUnreal")} />;

const AdvancedDiplomainTraditionalDigitalConceptArt = () => < Async load={import("../components/AC-StaticPages/AdvancedDiplomainTraditionalDigitalConceptArt/AdvancedDiplomainTraditionalDigitalConceptArt")} />;





const MenuCore = () => <Async load={import("./MenuCore.jsx")} />;
const Footer = () => <Async load={import("../components/AC-Footer/Footer")} />;


const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function Menu(props) {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(window.innerWidth);
  const mobileSize = 1268;

  // 🖥️ Handle window resize
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Dispatch device type
  React.useEffect(() => {
    const isMobile = width <= mobileSize;
    dispatch(handleMobileOrDesktop(isMobile));
  }, [width, dispatch]);



  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const toolbarStyle = {
    minHeight: '80px',
    backgroundColor: '#ffffff',
  };

  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);



  if (props.component === "tiposDeSeguros") {
    return (
      <>


        <div className="" style={{ boxShadow: '0 0 4px #cdcdcd' }}>
          <div>
            <div >
              <MenuCore />
            </div>
          </div>
        </div>

        <InsuranceTypes />
        <Footer />
      </>
    );
  }
  else if (props.component === "SabíasQue") {
    return (
      <>


        <div className="" style={{ boxShadow: '0 0 4px #cdcdcd', backgroundColor: "#f9fafb" }}>
          <div>
            <div >
              <MenuCore />
            </div>
          </div>
        </div>

        <News />
        <Footer />
      </>
    );
  }
  else if (props.component === "cotice") {
    return (
      <>


        <div className="" style={{ boxShadow: '0 0 4px #cdcdcd' }}>
          <div>
            <div >
              <MenuCore />
            </div>
          </div>
        </div>


        <Footer />
      </>
    );
  }
  else if (props.component === "ComingSoon") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <ComingSoon />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Courses") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Courses />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "GameArtDesign") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <GameArtDesign />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }



  else if (props.component === "AdvancedDiplomainTraditionalDigitalConceptArt") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AdvancedDiplomainTraditionalDigitalConceptArt />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "SkillDiploma") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <SkillDiploma />
        {/* <Footer /> */}
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "DiplomaAndAdvancedDiplomaCourses") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomaAndAdvancedDiplomaCourses />

        <Footer />

        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "TopGameDevelopmentPrograms") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <TopGameDevelopmentPrograms />

        <Footer />

        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "DiplomaAndAdvancedDiplomaCourses2") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomaAndAdvancedDiplomaCourses2 />

        <Footer />

        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "AllDiplomaAndAdvancedDiplomaGamingCourses") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AllDiplomaAndAdvancedDiplomaGamingCourses />

        <Footer />

        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }



  else if (props.component === "AllDiplomaAndAdvancedDiplomaGamingCourses") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AllDiplomaAndAdvancedDiplomaGamingCourses />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


  else if (props.component === "DiplomaAndAdvancedDiplomaGamingCourses2") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomaAndAdvancedDiplomaGamingCourses2 />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "DiplomaAndAdvancedDiplomaGamingCourses") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomaAndAdvancedDiplomaGamingCourses />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "GameArtLP") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <GameArtLP />
        {/* <Footer /> */}
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "BachelorsNewLandingPage") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <BachelorsNewLandingPage />
        {isMobileState && <Footer />}
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "ShortCourse") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <ShortCourse />
        {/* <Footer /> */}
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "UnityGame") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <UnityGame />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


  else if (props.component === "Unreal") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Unreal />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


  else if (props.component === "GamedevelopmentLP") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar style={{ background: "#000" }}>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <GamedevelopmentLP />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "MScGameTechnology") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <MScGameTechnology />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "AdvancedDiplomaInGameDevelopment") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AdvancedDiplomaInGameDevelopment />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }



  else if (props.component === "AdvancedDiplomain3DGameArtDigitalSculpting") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AdvancedDiplomain3DGameArtDigitalSculpting />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "DiplomaIn3dEnvironmentArtCreationForGames") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomaIn3dEnvironmentArtCreationForGames />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "DiplomainGameDesignProduction") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomainGameDesignProduction />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "DiplomaInGameDevelopmentWithUnity") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomaInGameDevelopmentWithUnity />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "DiplomaInGameDevelopmentWithUnreal") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DiplomaInGameDevelopmentWithUnreal />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "CertifiedSkillUnity") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <CertifiedSkillUnity />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "CertificateProgramInEssentialsOfGameDesign") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <CertificateProgramInEssentialsOfGameDesign />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


  else if (props.component === "CertificateProgramInStorytellingAndDesignDocumentationForGames") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <CertificateProgramInStorytellingAndDesignDocumentationForGames />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }





  else if (props.component === "DHardSurfaceModellingGameArt") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <DHardSurfaceModellingGameArt />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "GameDesignWithUnrealBlueprints") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <GameDesignWithUnrealBlueprints />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "GameDevelopmentWithUnity") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <GameDevelopmentWithUnity />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "GameDevelopmentWithUnreal") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <GameDevelopmentWithUnreal />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "AIPoweredGameDesignAndLevelBuilding") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AIPoweredGameDesignAndLevelBuilding />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }




  else if (props.component === "CertificateProgramInPrototypingAndGameConceptDevelopment") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <CertificateProgramInPrototypingAndGameConceptDevelopment />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }





  else if (props.component === "CertificateProgramInGameDevelopmentForVR") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <CertificateProgramInGameDevelopmentForVR />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }






  else if (props.component === "CertificateProgramIn3DGameDevelopmentWithUnity") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <CertificateProgramIn3DGameDevelopmentWithUnity />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }







  else if (props.component === "CertifiedSkillUnreal") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <CertifiedSkillUnreal />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "AugmentedRealityAndVirtualReality") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AugmentedRealityAndVirtualReality />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "BachelorsInComputerScienceGameDevelopment") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <BachelorsInComputerScienceGameDevelopment />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "MScGameTechnology3D") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <MScGameTechnology3D />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "DiplomaInVrApllication") {
    return (
      <>
       
       <React.Fragment>
              <CssBaseline />
              <ThemeProvider theme={darkTheme}>
                <ElevationScroll  {...props}>

                  <AppBar>
                    <Toolbar style={toolbarStyle}>
                      <MenuCore />
                    </Toolbar>
                  </AppBar>

                </ElevationScroll >
              </ThemeProvider>
              <Toolbar />

            </React.Fragment>  
        <DiplomaInVrApllication />
        <Footer />
        <ScrollToTop
        smooth
        top={100}
        />
      </>
    );
  }
  else if (props.component === "AboutUs") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AboutUs />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Blog") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Blog />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Affilication") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Affilication />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Alumni") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Alumni />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "Facilities") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Facilities />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "Accelerator") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Accelerator />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Terms") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Terms />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Refund") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Refund />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Privacy") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Privacy />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


  else if (props.component === "counter") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <counter />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Datepicker") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Datepicker />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "StudentShowcase") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <StudentShowcase />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "StudentArtAndGames") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <StudentArtAndGames />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Blogdetail") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Blogdetail />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "Workshop") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Workshop />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Admissions") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Admissions />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "FinancialAssistance") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <FinancialAssistance />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Mentors") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        < Mentors />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Scholarships") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Scholarships />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "Placements") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Placements />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "ContactUs") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <ContactUs />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "UnrealBluePrint") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <UnrealBluePrint />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "CertifiedSkillHardSurface") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <CertifiedSkillHardSurface />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else if (props.component === "Applicationform") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Applicationform />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "SiteMaps") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <SiteMaps />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "HomeContentForm") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <HomeContentForm />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component === "StudentResult") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <StudentResult />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll  {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll >
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Main />
        <ScrollToTop
          smooth
          top={100}
        />
        {/* <a onClick={scrollToTop}>To the top!</a>
    <br/>
    <a onClick={scrollToBottom}>To the bottom!</a>
    <br/>
    <a onClick={scrollTo}>Scroll to 100px from the top</a>
    <br/>
    <a onClick={scrollMore}>Scroll 100px more from the current position!</a> */}


      </>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(menuStyle)(Menu);
