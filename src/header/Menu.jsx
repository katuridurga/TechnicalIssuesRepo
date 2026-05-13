import React, { Suspense, lazy, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { handleMobileOrDesktop } from "../redux/actions/mainActions";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ScrollToTop from "react-scroll-to-top";
import { withRouter } from "react-router-dom";
import MenuCore from "./MenuCore";
import LastChanceStripe from "../components/AC-StaticPages/landingpage/LastChanceStripe";
import withStyles from "@material-ui/core/styles/withStyles";
import menuStyle from "../assets/jss/material-dashboard-react/layouts/menuStyle.jsx";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
const Main = lazy(() => import("../content/Main"));
const Courses = lazy(() => import("../components/AC-StaticPages/Courses/Courses"));
const AboutUs = lazy(() => import("../components/AC-StaticPages/AboutUs/AboutUs"));
const Blog = lazy(() => import("../components/AC-StaticPages/Blog/Blog"));
const ContactUs = lazy(() => import("../components/AC-StaticPages/ContactUs/ContactUs"));
const Placements = lazy(() => import("../components/AC-StaticPages/Placements/Placements"));
const Footer = lazy(() => import("../components/AC-Footer/Footer"));

const InsuranceTypes = lazy(() => import(  "../components/AC-StaticPages/InsuranceTypes/InsuraceTypes"));
const News = lazy(() => import(  "../components/AC-StaticPages/News/News")) ;
const Affilication = lazy(() => import(  "../components/AC-StaticPages/Affilication/Affilication"));
const Admissions = lazy(() => import(  "../components/AC-StaticPages/Admissions/Admissions"));
const FinancialAssistance = lazy(() => import(  "../components/AC-StaticPages/FinancialAssistance/FinancialAssistance"));
const Mentors = lazy(() =>
  import("../components/AC-StaticPages/Mentors/Mentors")
);
const Scholarships = lazy(() => import(  "../components/AC-StaticPages/Scholarships/Scholarships"));
const Alumni = lazy(() => import(  "../components/AC-StaticPages/Alumni/Alumni"));
const Workshop = lazy(() => import(  "../components/AC-StaticPages/Workshop/Workshop"));
const Accelerator = lazy(() => import(  "../components/AC-StaticPages/Accelerator/Accelerator"));
const StudentArtAndGames = lazy(() => import(  "../components/AC-StaticPages/StudentArtAndGames/StudentArtAndGames"));
const Terms = lazy(() => import(  "../components/AC-StaticPages/TermsAndConditions/Terms"));
const Privacy = lazy(() => import(  "../components/AC-StaticPages/PrivacyPolicy/Privacy"));
const Refund = lazy(() => import(  "../components/AC-StaticPages/RefundPolicy/Refund"));
const Facilities = lazy(() => import(  "../components/AC-StaticPages/Facilities/Facilities"));
const Blogdetail = lazy(() => import(  "../components/AC-StaticPages/BlogDetails/Blogdetail.js"));
const Datepicker = lazy(() => import(  "../components/AC-StaticPages/Datepicker/Datepicker.js"));
const ComingSoon = lazy(() => import(  "../components/AC-StaticPages/ComingSoon/ComingSoon"));
const SkillDiploma = lazy(() => import(  "../components/AC-StaticPages/SkillDiploma/SkillDiploma"));
const SiteMaps = lazy(() => import(  "../components/AC-StaticPages/SiteMaps/SiteMaps"));
const StudentResult = lazy(() => import(  "../components/AC-StaticPages/StudentResult/StudentResult"));
const StudentShowcase = lazy(() => import(  "../components/AC-StaticPages/StudentShowcase/StudentShowcase"));
const DiplomaInVrApllication = lazy(() => import(  "../components/AC-StaticPages/DiplomaInVrApllication/DiplomaInVrApllication"));
const HomeContentForm = lazy(() => import(  "../content/HomeContentFrom.js"));

const DiplomaAndAdvancedDiplomaCourses = lazy(() => import(  "../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaCourses"));
const TopGameDevelopmentPrograms = lazy(() => import(  "../components/AC-StaticPages/landingpage/TopGameDevelopmentPrograms"));
const DiplomaAndAdvancedDiplomaCourses2 = lazy(() => import(  "../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaCourses2"));
const DiplomaAndAdvancedDiplomaGamingCourses = lazy(() => import(  "../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaGamingCourses"));
const DiplomaAndAdvancedDiplomaGamingCourses2 = lazy(() => import(  "../components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaGamingCourses2"));

const AllDiplomaAndAdvancedDiplomaGamingCourses = lazy(() => import(  "../components/AC-StaticPages/landingpage/AllDiplomaAndAdvancedDiplomaGamingCourses.js"));

const GameArtLP = lazy(() => import(  "../components/AC-StaticPages/landingpage/GameArtLP.js"));
const BachelorsNewLandingPage = lazy(() => import(  "../components/AC-StaticPages/landingpage/BachelorsNewLandingPage.js"));

const ShortCourse = lazy(() => import(  "../components/AC-StaticPages/landingpage/ShortCourse.js"));
const UnityGame = lazy(() => import(  "../components/AC-StaticPages/landingpage/UnityGame.js"));
const CertifiedSkillUnity = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertifiedSkillUnity.js"));

const CertificateProgramInEssentialsOfGameDesign = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertificateProgramInEssentialsOfGameDesign.js"));
const CertificateProgramInBasicslsOfMaya = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertificateProgramInBasicslsOfMaya.js"));
const Payment = lazy(() => import(  "../components/AC-StaticPages/landingpage/Payment.js"));

const CertificateProgramInBasicslsOfMayaformarketing = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertificateProgramInBasicslsOfMayaformarketing.js"));
const CertificateProgramIn3DGameDevelopmentWithUnity = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertificateProgramIn3DGameDevelopmentWithUnity.js"));

const CertificateProgramInGameDevelopmentForVR = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertificateProgramInGameDevelopmentForVR.js"));
const CertificateProgramInPrototypingAndGameConceptDevelopment = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertificateProgramInPrototypingAndGameConceptDevelopment.js"));

const CertificateProgramInStorytellingAndDesignDocumentationForGames = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertificateProgramInStorytellingAndDesignDocumentationForGames.js"));
const DHardSurfaceModellingGameArt = lazy(() => import(  "../components/AC-StaticPages/landingpage/3DHardSurfaceModellingGameArt.js"));
const GameDesignWithUnrealBlueprints = lazy(() => import(  "../components/AC-StaticPages/landingpage/GameDesignWithUnrealBlueprints.js"));
const GameDevelopmentWithUnity = lazy(() => import(  "../components/AC-StaticPages/landingpage/GameDevelopmentWithUnity.js"));
const GameDevelopmentWithUnreal = lazy(() => import(  "../components/AC-StaticPages/landingpage/GameDevelopmentWithUnreal.js"));
const AIPoweredGameDesignAndLevelBuilding = lazy(() => import(  "../components/AC-StaticPages/landingpage/AIPoweredGameDesignAndLevelBuilding.js"));


const CertifiedSkillUnreal = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertifiedSkillUnreal.js"));
const CertifiedSkillHardSurface = lazy(() => import(  "../components/AC-StaticPages/landingpage/CertifiedSkillHardSurface.js"));
const UnrealBluePrint = lazy(() => import(  "../components/AC-StaticPages/landingpage/UnrealBluePrint.js"));
const Unreal = lazy(() => import(  "../components/AC-StaticPages/landingpage/Unreal.js"));
const GamedevelopmentLP =  lazy(() => import("../components/AC-StaticPages/landingpage/GamedevelopmentLP.js"));
const BachelorsInComputerScienceGameDevelopment = lazy(() => import(  "../components/AC-StaticPages/BachelorsInComputerScienceGameDevelopment/BachelorsInComputerScienceGameDevelopment"));;
const GameArtDesign = lazy(() => import(  "../components/AC-StaticPages/GameArtDesign/GameArtDesign"));
const AugmentedRealityAndVirtualReality = lazy(() => import(  "../components/AC-StaticPages/AugmentedRealityAndVirtualReality/AugmentedRealityAndVirtualReality"));

const MScGameTechnology = lazy(() => import(  "../components/AC-StaticPages/MScGameTechnology/MScGameTechnology"));
const MScGameTechnology3D = lazy(() => import(  "../components/AC-StaticPages/MScGameTechnology/MScGameTechnology3D"));
const Applicationform = lazy(() => import(  "../components/AC-StaticPages/Applicationform/Applicationform"));
const AdvancedDiplomaInGameDevelopment = lazy(() => import(  "../components/AC-StaticPages/AdvancedDiplomaInGameDevelopment/AdvancedDiplomaInGameDevelopment"));

const AdvancedDiplomain3DGameArtDigitalSculpting = lazy(() => import(  "../components/AC-StaticPages/AdvancedDiplomain3DGameArtDigitalSculpting/AdvancedDiplomain3DGameArtDigitalSculpting"));

const DiplomaIn3dEnvironmentArtCreationForGames = lazy(() => import(  "../components/AC-StaticPages/DiplomaIn3dEnvironmentArtCreationForGames/DiplomaIn3dEnvironmentArtCreationForGames"));

const DiplomainGameDesignProduction = lazy(() => import(  "../components/AC-StaticPages/DiplomainGameDesignProduction/DiplomainGameDesignProduction"));

const DiplomaInGameDevelopmentWithUnity = lazy(() => import(  "../components/AC-StaticPages/DiplomaInGameDevelopmentWithUnity/DiplomaInGameDevelopmentWithUnity"));

const DiplomaInGameDevelopmentWithUnreal = lazy(() => import(  "../components/AC-StaticPages/DiplomaInGameDevelopmentWithUnreal/DiplomaInGameDevelopmentWithUnreal"));

const AdvancedDiplomainTraditionalDigitalConceptArt = lazy(() => import(  "../components/AC-StaticPages/AdvancedDiplomainTraditionalDigitalConceptArt/AdvancedDiplomainTraditionalDigitalConceptArt"));
const WorkshopYearly  = lazy(() => import(  "../components/AC-StaticPages/Workshop/WorkshopYearly"));
const WorkshopOnlyYears  = lazy(() => import(  "../components/AC-StaticPages/Workshop/WorkshopOnlyYears.js"));
const darkTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fff",
    },
  },
});

const componentMap = {
  Courses,
  AboutUs,
  Blog,
  ContactUs,
  Placements,
  InsuranceTypes,
  News,
  Affilication,
  Admissions,
  FinancialAssistance,
  Mentors,
  Scholarships,
  Alumni,
  Workshop,
  Accelerator,
  StudentArtAndGames,
  Terms,
  Privacy,
  Refund,
  Facilities,
  Blogdetail,
  Datepicker,
  ComingSoon,
  SkillDiploma,
  SiteMaps,
  StudentResult,
  StudentShowcase,
  DiplomaInVrApllication,
  HomeContentForm,
  DiplomaAndAdvancedDiplomaCourses,
  TopGameDevelopmentPrograms,
  DiplomaAndAdvancedDiplomaCourses2,
  DiplomaAndAdvancedDiplomaGamingCourses,
  DiplomaAndAdvancedDiplomaGamingCourses2,
  AllDiplomaAndAdvancedDiplomaGamingCourses,
  GameArtLP,
  BachelorsNewLandingPage,
  ShortCourse,
  UnityGame,
  CertifiedSkillUnity,
  CertificateProgramInEssentialsOfGameDesign,
  CertificateProgramInBasicslsOfMaya,
  Payment,
  CertificateProgramInBasicslsOfMayaformarketing,
  CertificateProgramIn3DGameDevelopmentWithUnity,
  CertificateProgramInGameDevelopmentForVR,
  CertificateProgramInPrototypingAndGameConceptDevelopment,
  CertificateProgramInStorytellingAndDesignDocumentationForGames,
  DHardSurfaceModellingGameArt,
  GameDesignWithUnrealBlueprints,
  GameDevelopmentWithUnity,
  GameDevelopmentWithUnreal,
  AIPoweredGameDesignAndLevelBuilding,
  CertifiedSkillUnreal,
  CertifiedSkillHardSurface,
  UnrealBluePrint,
  Unreal,
  GamedevelopmentLP,
  BachelorsInComputerScienceGameDevelopment,
  GameArtDesign,
  AugmentedRealityAndVirtualReality,
  MScGameTechnology,
  MScGameTechnology3D,
  Applicationform,
  AdvancedDiplomaInGameDevelopment,
  AdvancedDiplomain3DGameArtDigitalSculpting,
  DiplomaIn3dEnvironmentArtCreationForGames,
  DiplomainGameDesignProduction,
  DiplomaInGameDevelopmentWithUnity,
  DiplomaInGameDevelopmentWithUnreal,
  AdvancedDiplomainTraditionalDigitalConceptArt,
  WorkshopYearly,
  WorkshopOnlyYears,
};
function ElevationScroll(props) {
  const { children, window } = props;

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
  window: PropTypes.func,
};
const Layout = memo(({ children, darkHeader, showFooter, showStrip }) => {
  const isMobile = useMediaQuery("(max-width:1268px)");

const dispatch = useDispatch();

const isMobileState = useSelector(
  (state) => state.mainReducer.isMobile,
  shallowEqual
);

useEffect(() => {
  dispatch(handleMobileOrDesktop(isMobile));
}, [isMobile, dispatch]);
  const showLastChanceStrip =
    window.location.pathname.startsWith(
      "/landingpage/basics-of-maya-online-certification"
    );
const toolbarStyle = {
  minHeight: "80px",
  backgroundColor: "#ffffff",
  padding: showLastChanceStrip
    ? "0px 0px"
    : isMobileState
    ? "0px 16px"
    : "0px 24px",
};
  return (
    <>
      <CssBaseline />

      {showStrip && <LastChanceStripe />}

      <ThemeProvider theme={darkTheme}>
     <ElevationScroll>
  <AppBar
    className={`main-appbar ${darkHeader ? "dark-appbar" : ""}`}
  >
           <Toolbar style={toolbarStyle}>
            <MenuCore />
          </Toolbar>
        </AppBar>
</ElevationScroll>
      </ThemeProvider>

      <div className="header-spacer" />

      <Suspense fallback={<div className="page-loader">Loading...</div>}>
        {children}
      </Suspense>

      {showFooter && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}

      <ScrollToTop smooth top={100} />
    </>
  );
});

function Menu(props) {
 const pathname = props.location.pathname;

  const showStrip = pathname.startsWith(
    "/landingpage/basics-of-maya-online-certification"
  );

  const SelectedComponent = componentMap[props.component] || Main;

  const darkHeaderPages = [
    "GameArtLP",
    "ShortCourse",
    "UnityGame",
    "Unreal",
  ];

  const noFooterPages = [
    "ShortCourse",
    "GameArtLP",
  ];

  return (
    <Layout
      darkHeader={darkHeaderPages.includes(props.component)}
      showFooter={!noFooterPages.includes(props.component)}
      showStrip={showStrip}
    >
      <SelectedComponent {...props} />
    </Layout>
  );
}



export default withStyles(menuStyle)(Menu);



