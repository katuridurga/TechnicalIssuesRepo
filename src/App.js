import React from "react";
import CacheBuster from "./CacheBuster.js";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history.js";
import Menu from "./header/Menu.jsx";
import "../src/assets/css/reactMaterial.css";
import "../src/assets/css/icon.css";
import "./assets/css/dk.css";

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
                <Route
                  exact
                  path={"/courses/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Courses" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/bachelors-in-computer-science-and-game-development/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="BachelorsInComputerScienceGameDevelopment" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/bachelors-in-game-art-and-design/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="GameArtDesign" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/bachelors-in-augmented-reality-and-virtual-reality/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AugmentedRealityAndVirtualReality" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/masters-in-game-technology/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="MScGameTechnology" />
                  )}
                />
                 <Route
                  exact
                  path={"/courses/masters-in-3d-game-art-design/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="MScGameTechnology3D" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/advanced-diploma-in-game-development/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AdvancedDiplomaInGameDevelopment" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AdvancedDiplomain3DGameArtDigitalSculpting" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/advanced-diploma-in-traditional-digital-art/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AdvancedDiplomainTraditionalDigitalConceptArt" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/diploma-in-game-design-production/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomainGameDesignProduction" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/diploma-in-game-development-with-unity/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaInGameDevelopmentWithUnity" />
                  )}
                />

                <Route
                  exact
                  path={"/courses/diploma-in-game-development-with-unreal/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaInGameDevelopmentWithUnreal" />
                  )}
                />

                
                <Route
                  exact
                  path={"/courses/diploma-in-3d-environment-art-creation-for-games/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaIn3dEnvironmentArtCreationForGames" />
                  )}
                />
                <Route
                  exact
                  path={"/courses/diploma-in-vr-application-development/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaInVrApllication" />
                  )}
                />
                <Route
                  exact
                  path={"/about-us/our-story/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AboutUs" />
                  )}
                />

                <Route
                  exact
                  path={"/shortcourses/form/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="SkillDiploma" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/diploma-and-advanced-diploma-courses/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaAndAdvancedDiplomaCourses" />
                  )}
                />
 <Route
                  exact
                  path={"/landingpage/bachelors-degree-courses-in-gaming/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="BachelorsNewLandingPage" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/top-game-development-programs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="TopGameDevelopmentPrograms" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/masters-and-bachelors-programs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaAndAdvancedDiplomaCourses2" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/diploma-and-advanced-diploma-game-development-courses/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaAndAdvancedDiplomaGamingCourses" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/masters-and-bachelors-game-development-courses/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DiplomaAndAdvancedDiplomaGamingCourses2" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/best-gaming-courses-in-india/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AllDiplomaAndAdvancedDiplomaGamingCourses" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/game-art-programs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="GameArtLP" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/short-course/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="ShortCourse" />
                  )}
                />
                {/* <Route
                  exact
                  path={"/landingpage/game-art-programs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="StudentArtWork" />
                  )}
                /> */}
                <Route
                  exact
                  path={"/landingpage/game-development-with-unity-programs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="UnityGame" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/certified-diploma-unity-game-development/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertifiedSkillUnity" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/certificate-program-in-essentials-of-game-design/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertificateProgramInEssentialsOfGameDesign" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/certificate-program-in-3DGame-development-with-unity/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertificateProgramIn3DGameDevelopmentWithUnity" />
                  )}
                />



                <Route
                  exact
                  path={"/landingpage/certificate-program-in-game-development-for-VR/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertificateProgramInGameDevelopmentForVR" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/certificate-program-in-prototyping-and-game-concept-development/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertificateProgramInPrototypingAndGameConceptDevelopment" />
                  )}
                />


                <Route
                  exact
                  path={"/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertificateProgramInStorytellingAndDesignDocumentationForGames" />
                  )}
                />


                <Route
                  exact
                  path={"/landingpage/3DHard-surface-modelling-game-art/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DHardSurfaceModellingGameArt" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/game-design-with-unreal-blue-prints/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="GameDesignWithUnrealBlueprints" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/game-development-with-unity/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="GameDevelopmentWithUnity" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/game-development-with-unreal/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="GameDevelopmentWithUnreal" />
                  )}
                />

                <Route
                  exact
                  path={"/landingpage/ai-powered-game-design-and-level-building/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AIPoweredGameDesignAndLevelBuilding" />
                  )}
                />







                <Route
                  exact
                  path={"/landingpage/certified-diploma-unreal-game-development/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertifiedSkillUnreal" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/certified-diploma-game-design-with-unreal-blueprints/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="UnrealBluePrint" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CertifiedSkillHardSurface" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/game-development-with-unreal-programs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Unreal" />
                  )}
                />
                <Route
                  exact
                  path={"/landingpage/game-development-programs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="GamedevelopmentLP" />
                  )}
                />
                <Route
                  exact
                  path={"/about-us/affiliation-collaboration/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Affilication" />
                  )}
                />
                <Route
                  exact
                  path={"/about-us/placement-support/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Placements" />
                  )}
                />
                <Route
                  exact
                  path={"/admissions/admission-process/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Admissions" />
                  )}
                />
                <Route
                  exact
                  path={"/admissions/financial-assistance-and-scholarship/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="FinancialAssistance" />
                  )}
                />
                <Route
                  exact
                  path={"/life-at-bsp/alumni-success/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Alumni" />
                  )}
                />
                <Route
                  exact
                  path={"/life-at-bsp/student-awards/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="StudentShowcase" />
                  )}
                />
                 <Route
                  exact
                  path={"/life-at-bsp/student-portfolio/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="StudentArtAndGames" />
                  )}
                />
                <Route
                  exact
                  path={"/life-at-bsp/accelerator-program/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Accelerator" />
                  )}
                />
                <Route
                  exact
                  path={"/terms-and-conditions/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Terms" />
                  )}
                />
                <Route
                  exact
                  path={"/privacy-policy/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Privacy" />
                  )}
                />
                <Route
                  exact
                  path={"/refund-policy-test/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Refund" />
                  )}
                />
                <Route
                  exact
                  path={"/life-at-bsp/facilities/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Facilities" />
                  )}
                />
                <Route
                  exact
                  path={"/coming-soon/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="ComingSoon" />
                  )}
                />
                <Route
                  exact
                  path={"/intermediate-board-results/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="StudentResult" />
                  )}
                />
                <Route
                  exact
                  path={"/about-us/our-mentors/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Mentors" />
                  )}
                />
                {/* <Route
                  exact
                  path={"/BlogDetails/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="BlogDetails" />
                  )}
                /> */}
                <Route
                  exact
                  path={"/life-at-bsp/events-workshops/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Workshop" />
                  )}
                />
                {/* <Route
                  exact
                  path={"/scholarships/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Scholarships" />
                  )}
                /> */}
                <Route
                  exact
                  path={"/blogs/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Blog" />
                  )}
                />
                <Route
                  exact
                  path="/blogs/:id"
                  render={routeProps => (
                    <Menu {...routeProps} component="Blogdetail" />
                  )}
                />
                <Route
                  exact
                  path={"/contactus/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="ContactUs" />
                  )}
                />
                <Route
                  exact
                  path={"/Application-form/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Applicationform" />
                  )}
                />
                <Route
                  exact
                  path={"/sitemap/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="SiteMaps" />
                  )}
                />
                <Route
                  exact
                  path={"/enquire-now/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="HomeContentForm" />
                  )}
                />
                  
              </Switch>
            </Router>
          </>
        );
      }}
    </CacheBuster>
  );
}
