import React, { lazy, Suspense } from "react";
import CacheBuster from "./CacheBuster.js";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history.js";

import "../src/assets/css/reactMaterial.css";
import "../src/assets/css/icon.css";
import "./assets/css/dk.css";

const Menu = lazy(() => import("./header/Menu.jsx"));

// ---- Pages (ALL lazy-loaded) ----

// Home & Core
const Courses = lazy(() => import("./components/AC-StaticPages/Courses/Courses"));
const AboutUs = lazy(() => import("./components/AC-StaticPages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./components/AC-StaticPages/ContactUs/ContactUs"));

// Courses
const BachelorsInComputerScienceGameDevelopment = lazy(() =>
  import("./components/AC-StaticPages/BachelorsInComputerScienceGameDevelopment/BachelorsInComputerScienceGameDevelopment")
);
const GameArtDesign = lazy(() => import("./components/AC-StaticPages/GameArtDesign/GameArtDesign"));
const AugmentedRealityAndVirtualReality = lazy(() =>
  import("./components/AC-StaticPages/AugmentedRealityAndVirtualReality/AugmentedRealityAndVirtualReality")
);
const MScGameTechnology = lazy(() => import("./components/AC-StaticPages/MScGameTechnology/MScGameTechnology"));
const MScGameTechnology3D = lazy(() =>
  import("./components/AC-StaticPages/MScGameTechnology/MScGameTechnology3D")
);
const AdvancedDiplomaInGameDevelopment = lazy(() =>
  import("./components/AC-StaticPages/AdvancedDiplomaInGameDevelopment/AdvancedDiplomaInGameDevelopment")
);
const AdvancedDiplomain3DGameArtDigitalSculpting = lazy(() =>
  import("./components/AC-StaticPages/AdvancedDiplomain3DGameArtDigitalSculpting/AdvancedDiplomain3DGameArtDigitalSculpting")
);
const AdvancedDiplomainTraditionalDigitalConceptArt = lazy(() =>
  import("./components/AC-StaticPages/AdvancedDiplomainTraditionalDigitalConceptArt/AdvancedDiplomainTraditionalDigitalConceptArt")
);
const DiplomainGameDesignProduction = lazy(() =>
  import("./components/AC-StaticPages/DiplomainGameDesignProduction/DiplomainGameDesignProduction")
);
const DiplomaInGameDevelopmentWithUnity = lazy(() =>
  import("./components/AC-StaticPages/DiplomaInGameDevelopmentWithUnity/DiplomaInGameDevelopmentWithUnity")
);
const DiplomaInGameDevelopmentWithUnreal = lazy(() =>
  import("./components/AC-StaticPages/DiplomaInGameDevelopmentWithUnreal/DiplomaInGameDevelopmentWithUnreal")
);
const DiplomaIn3dEnvironmentArtCreationForGames = lazy(() =>
  import("./components/AC-StaticPages/DiplomaIn3dEnvironmentArtCreationForGames/DiplomaIn3dEnvironmentArtCreationForGames")
);
const DiplomaInVrApllication = lazy(() =>
  import("./components/AC-StaticPages/DiplomaInVrApllication/DiplomaInVrApllication")
);

// Landing Pages
const DiplomaAndAdvancedDiplomaCourses = lazy(() =>
  import("./components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaCourses")
);
const BachelorsNewLandingPage = lazy(() =>
  import("./components/AC-StaticPages/landingpage/BachelorsNewLandingPage")
);
const TopGameDevelopmentPrograms = lazy(() =>
  import("./components/AC-StaticPages/landingpage/TopGameDevelopmentPrograms")
);
const DiplomaAndAdvancedDiplomaCourses2 = lazy(() =>
  import("./components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaCourses2")
);
const DiplomaAndAdvancedDiplomaGamingCourses = lazy(() =>
  import("./components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaGamingCourses")
);
const DiplomaAndAdvancedDiplomaGamingCourses2 = lazy(() =>
  import("./components/AC-StaticPages/landingpage/DiplomaAndAdvancedDiplomaGamingCourses2")
);
const AllDiplomaAndAdvancedDiplomaGamingCourses = lazy(() =>
  import("./components/AC-StaticPages/landingpage/AllDiplomaAndAdvancedDiplomaGamingCourses")
);
const GameArtLP = lazy(() => import("./components/AC-StaticPages/landingpage/GameArtLP"));
const ShortCourse = lazy(() => import("./components/AC-StaticPages/landingpage/ShortCourse"));
const UnityGame = lazy(() => import("./components/AC-StaticPages/landingpage/UnityGame"));
const CertifiedSkillUnity = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertifiedSkillUnity")
);
const CertificateProgramInEssentialsOfGameDesign = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertificateProgramInEssentialsOfGameDesign")
);
const CertificateProgramInBasicslsOfMaya = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertificateProgramInBasicslsOfMaya")
);
const CertificateProgramInBasicslsOfMayaformarketing = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertificateProgramInBasicslsOfMayaformarketing")
);
const Payment = lazy(() => import("./components/AC-StaticPages/landingpage/Payment"));
const CertificateProgramIn3DGameDevelopmentWithUnity = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertificateProgramIn3DGameDevelopmentWithUnity")
);
const CertificateProgramInGameDevelopmentForVR = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertificateProgramInGameDevelopmentForVR")
);
const CertificateProgramInPrototypingAndGameConceptDevelopment = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertificateProgramInPrototypingAndGameConceptDevelopment")
);
const CertificateProgramInStorytellingAndDesignDocumentationForGames = lazy(
  () =>
    import(
      "./components/AC-StaticPages/landingpage/CertificateProgramInStorytellingAndDesignDocumentationForGames"
    )
);
const DHardSurfaceModellingGameArt = lazy(() =>
  import("./components/AC-StaticPages/landingpage/3DHardSurfaceModellingGameArt.js")
);
const GameDesignWithUnrealBlueprints = lazy(() =>
  import("./components/AC-StaticPages/landingpage/GameDesignWithUnrealBlueprints")
);
const GameDevelopmentWithUnity = lazy(() =>
  import("./components/AC-StaticPages/landingpage/GameDevelopmentWithUnity")
);
const GameDevelopmentWithUnreal = lazy(() =>
  import("./components/AC-StaticPages/landingpage/GameDevelopmentWithUnreal")
);
const AIPoweredGameDesignAndLevelBuilding = lazy(() =>
  import("./components/AC-StaticPages/landingpage/AIPoweredGameDesignAndLevelBuilding")
);
const CertifiedSkillUnreal = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertifiedSkillUnreal")
);
const UnrealBluePrint = lazy(() => import("./components/AC-StaticPages/landingpage/UnrealBluePrint"));
const CertifiedSkillHardSurface = lazy(() =>
  import("./components/AC-StaticPages/landingpage/CertifiedSkillHardSurface")
);
const Unreal = lazy(() => import("./components/AC-StaticPages/landingpage/Unreal"));
const GamedevelopmentLP = lazy(() =>
  import("./components/AC-StaticPages/landingpage/GamedevelopmentLP")
);

// About / Life at BSP
const Affilication = lazy(() => import("./components/AC-StaticPages/Affilication/Affilication"));
const Placements = lazy(() => import("./components/AC-StaticPages/Placements/Placements"));
const Admissions = lazy(() => import("./components/AC-StaticPages/Admissions/Admissions"));
const FinancialAssistance = lazy(() =>
  import("./components/AC-StaticPages/FinancialAssistance/FinancialAssistance")
);
const Alumni = lazy(() => import("./components/AC-StaticPages/Alumni/Alumni"));
const StudentShowcase = lazy(() =>
  import("./components/AC-StaticPages/StudentShowcase/StudentShowcase")
);
const StudentArtAndGames = lazy(() =>
  import("./components/AC-StaticPages/StudentArtAndGames/StudentArtAndGames")
);
const Accelerator = lazy(() => import("./components/AC-StaticPages/Accelerator/Accelerator"));
const Facilities = lazy(() => import("./components/AC-StaticPages/Facilities/Facilities"));
const Mentors = lazy(() => import("./components/AC-StaticPages/Mentors/Mentors"));
const Workshop = lazy(() => import("./components/AC-StaticPages/Workshop/Workshop"));

// Blog
const Blog = lazy(() => import("./components/AC-StaticPages/Blog/Blog"));
const Blogdetail = lazy(() => import("./components/AC-StaticPages/BlogDetails/Blogdetail.js"));

// Utility
const Terms = lazy(() => import("./components/AC-StaticPages/TermsAndConditions/Terms"));
const Privacy = lazy(() => import("./components/AC-StaticPages/PrivacyPolicy/Privacy"));
const Refund = lazy(() => import("./components/AC-StaticPages/RefundPolicy/Refund"));
const ComingSoon = lazy(() => import("./components/AC-StaticPages/ComingSoon/ComingSoon"));
const StudentResult = lazy(() => import("./components/AC-StaticPages/StudentResult/StudentResult"));
const Applicationform = lazy(() =>
  import("./components/AC-StaticPages/Applicationform/Applicationform")
);
const SiteMaps = lazy(() => import("./components/AC-StaticPages/SiteMaps/SiteMaps"));
const HomeContentForm = lazy(() =>
  import("./content/HomeContentFrom.js")
);
const SkillDiploma = lazy(() => import("./components/AC-StaticPages/SkillDiploma/SkillDiploma"));

export default function App() {
  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }

        return (
          <>
            <Suspense fallback={null}>
              <Router history={history}>
                <Switch>

           
    <Route
      exact
      path="/"
      render={routeProps => {
        return (
          <>
            <Menu {...routeProps} component="home" />
          </>
        );
      }}
    />


                  {/* Your other routes */}
                  <Route exact path="/courses/">
                    <Menu><Courses /></Menu>
                  </Route>

                 <Route exact path="/courses/bachelors-in-computer-science-and-game-development/">
                    <Menu><BachelorsInComputerScienceGameDevelopment /></Menu>
                  </Route>

                  <Route exact path="/courses/bachelors-in-game-art-and-design/">
                    <Menu><GameArtDesign /></Menu>
                  </Route>

                  <Route exact path="/courses/bachelors-in-augmented-reality-and-virtual-reality/">
                    <Menu><AugmentedRealityAndVirtualReality /></Menu>
                  </Route>

                  <Route exact path="/courses/masters-in-game-technology/">
                    <Menu><MScGameTechnology /></Menu>
                  </Route>

                  <Route exact path="/courses/masters-in-3d-game-art-design/">
                    <Menu><MScGameTechnology3D /></Menu>
                  </Route>

                  <Route exact path="/courses/advanced-diploma-in-game-development/">
                    <Menu><AdvancedDiplomaInGameDevelopment /></Menu>
                  </Route>

                  <Route exact path="/courses/advanced-diploma-in-3d-game-art-digital-sculpting/">
                    <Menu><AdvancedDiplomain3DGameArtDigitalSculpting /></Menu>
                  </Route>

                  <Route exact path="/courses/advanced-diploma-in-traditional-digital-art/">
                    <Menu><AdvancedDiplomainTraditionalDigitalConceptArt /></Menu>
                  </Route>

                  <Route exact path="/courses/diploma-in-game-design-production/">
                    <Menu><DiplomainGameDesignProduction /></Menu>
                  </Route>

                  <Route exact path="/courses/diploma-in-game-development-with-unity/">
                    <Menu><DiplomaInGameDevelopmentWithUnity /></Menu>
                  </Route>

                  <Route exact path="/courses/diploma-in-game-development-with-unreal/">
                    <Menu><DiplomaInGameDevelopmentWithUnreal /></Menu>
                  </Route>

                  <Route exact path="/courses/diploma-in-3d-environment-art-creation-for-games/">
                    <Menu><DiplomaIn3dEnvironmentArtCreationForGames /></Menu>
                  </Route>

                  <Route exact path="/courses/diploma-in-vr-application-development/">
                    <Menu><DiplomaInVrApllication /></Menu>
                  </Route>

                  <Route exact path="/about-us/our-story/">
                    <Menu><AboutUs /></Menu>
                  </Route>

                  <Route exact path="/shortcourses/form/">
                    <Menu><SkillDiploma /></Menu>
                  </Route>

                  <Route exact path="/landingpage/diploma-and-advanced-diploma-courses/">
                    <Menu><DiplomaAndAdvancedDiplomaCourses /></Menu>
                  </Route>

                  <Route exact path="/landingpage/bachelors-degree-courses-in-gaming/">
                    <Menu><BachelorsNewLandingPage /></Menu>
                  </Route>

                  <Route exact path="/landingpage/top-game-development-programs/">
                    <Menu><TopGameDevelopmentPrograms /></Menu>
                  </Route>

                  <Route exact path="/landingpage/masters-and-bachelors-programs/">
                    <Menu><DiplomaAndAdvancedDiplomaCourses2 /></Menu>
                  </Route>

                  <Route exact path="/landingpage/diploma-and-advanced-diploma-game-development-courses/">
                    <Menu><DiplomaAndAdvancedDiplomaGamingCourses /></Menu>
                  </Route>

                  <Route exact path="/landingpage/masters-and-bachelors-game-development-courses/">
                    <Menu><DiplomaAndAdvancedDiplomaGamingCourses2 /></Menu>
                  </Route>

                  <Route exact path="/landingpage/best-gaming-courses-in-india/">
                    <Menu><AllDiplomaAndAdvancedDiplomaGamingCourses /></Menu>
                  </Route>

                  <Route exact path="/landingpage/game-art-programs/">
                    <Menu><GameArtLP /></Menu>
                  </Route>

                  <Route exact path="/landingpage/short-course/">
                    <Menu><ShortCourse /></Menu>
                  </Route>

                  <Route exact path="/landingpage/game-development-with-unity-programs/">
                    <Menu><UnityGame /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certified-diploma-unity-game-development/">
                    <Menu><CertifiedSkillUnity /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certificate-program-in-essentials-of-game-design/">
                    <Menu><CertificateProgramInEssentialsOfGameDesign /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certificate-program-in-basics-of-maya/">
                    <Menu><CertificateProgramInBasicslsOfMaya /></Menu>
                  </Route>

                  <Route exact path="/landingpage/basics-of-maya-online-certification/">
                    <Menu><CertificateProgramInBasicslsOfMayaformarketing /></Menu>
                  </Route>

                  <Route exact path="/landingpage/payment/">
                    <Menu><Payment /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certificate-program-in-3DGame-development-with-unity/">
                    <Menu><CertificateProgramIn3DGameDevelopmentWithUnity /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certificate-program-in-game-development-for-VR/">
                    <Menu><CertificateProgramInGameDevelopmentForVR /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certificate-program-in-prototyping-and-game-concept-development/">
                    <Menu><CertificateProgramInPrototypingAndGameConceptDevelopment /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/">
                    <Menu><CertificateProgramInStorytellingAndDesignDocumentationForGames /></Menu>
                  </Route>

                  <Route exact path="/landingpage/3DHard-surface-modelling-game-art/">
                    <Menu><DHardSurfaceModellingGameArt /></Menu>
                  </Route>

                  <Route exact path="/landingpage/game-design-with-unreal-blue-prints/">
                    <Menu><GameDesignWithUnrealBlueprints /></Menu>
                  </Route>

                  <Route exact path="/landingpage/game-development-with-unity/">
                    <Menu><GameDevelopmentWithUnity /></Menu>
                  </Route>

                  <Route exact path="/landingpage/game-development-with-unreal/">
                    <Menu><GameDevelopmentWithUnreal /></Menu>
                  </Route>

                  <Route exact path="/landingpage/ai-powered-game-design-and-level-building/">
                    <Menu><AIPoweredGameDesignAndLevelBuilding /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certified-diploma-unreal-game-development/">
                    <Menu><CertifiedSkillUnreal /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certified-diploma-game-design-with-unreal-blueprints/">
                    <Menu><UnrealBluePrint /></Menu>
                  </Route>

                  <Route exact path="/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/">
                    <Menu><CertifiedSkillHardSurface /></Menu>
                  </Route>

                  <Route exact path="/landingpage/game-development-with-unreal-programs/">
                    <Menu><Unreal /></Menu>
                  </Route>

                  <Route exact path="/landingpage/game-development-programs/">
                    <Menu><GamedevelopmentLP /></Menu>
                  </Route>

                  <Route exact path="/about-us/affiliation-collaboration/">
                    <Menu><Affilication /></Menu>
                  </Route>

                  <Route exact path="/about-us/placement-support/">
                    <Menu><Placements /></Menu>
                  </Route>

                  <Route exact path="/admissions/admission-process/">
                    <Menu><Admissions /></Menu>
                  </Route>

                  <Route exact path="/admissions/financial-assistance-and-scholarship/">
                    <Menu><FinancialAssistance /></Menu>
                  </Route>

                  <Route exact path="/life-at-bsp/alumni-success/">
                    <Menu><Alumni /></Menu>
                  </Route>

                  <Route exact path="/life-at-bsp/student-awards/">
                    <Menu><StudentShowcase /></Menu>
                  </Route>

                  <Route exact path="/life-at-bsp/student-portfolio/">
                    <Menu><StudentArtAndGames /></Menu>
                  </Route>

                  <Route exact path="/life-at-bsp/accelerator-program/">
                    <Menu><Accelerator /></Menu>
                  </Route>

                  <Route exact path="/terms-and-conditions/">
                    <Menu><Terms /></Menu>
                  </Route>

                  <Route exact path="/privacy-policy/">
                    <Menu><Privacy /></Menu>
                  </Route>

                  <Route exact path="/refund-policy-test/">
                    <Menu><Refund /></Menu>
                  </Route>

                  <Route exact path="/life-at-bsp/facilities/">
                    <Menu><Facilities /></Menu>
                  </Route>

                  <Route exact path="/coming-soon/">
                    <Menu><ComingSoon /></Menu>
                  </Route>

                  <Route exact path="/intermediate-board-results/">
                    <Menu><StudentResult /></Menu>
                  </Route>

                  <Route exact path="/about-us/our-mentors/">
                    <Menu><Mentors /></Menu>
                  </Route>

                  <Route exact path="/life-at-bsp/events-workshops/">
                    <Menu><Workshop /></Menu>
                  </Route>

                  <Route exact path="/blogs/">
                    <Menu><Blog /></Menu>
                  </Route>

                  <Route exact path="/blogs/:id">
                    <Menu><Blogdetail /></Menu>
                  </Route>

                  <Route exact path="/contactus/">
                    <Menu><ContactUs /></Menu>
                  </Route>

                  <Route exact path="/Application-form/">
                    <Menu><Applicationform /></Menu>
                  </Route>

                  <Route exact path="/sitemap/">
                    <Menu><SiteMaps /></Menu>
                  </Route>

                  <Route exact path="/enquire-now/">
                    <Menu><HomeContentForm /></Menu>
                  </Route>
                </Switch>
              </Router>
            </Suspense>
          </>
        );
      }}
    </CacheBuster>
  );
}
