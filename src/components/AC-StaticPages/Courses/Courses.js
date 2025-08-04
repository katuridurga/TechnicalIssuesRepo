import React from "react";
import "./Courses.css";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import csgd from "../../../assets/img/Courses/csgdc.webp"
import GameArtDesign from "../../../assets/img/Courses/GameArt&Design.webp"
import AugmentedRealityandVirtualReality from "../../../assets/img/Courses/AugmentedRealityandVirtualReality.webp"
import MscGameTechnology from "../../../assets/img/Courses/MscGameTechnology.webp"
import MscGameTechnology3d from "../../../assets/img/Courses/3dgameartandgamedesign.webp"
import AdvancedDiplomainGameDevelopment from "../../../assets/img/Courses/AdvancedDiplomainGameDevelopment.webp"
import AdvancedDiplomain3DGameArtDigitalSculpting from "../../../assets/img/Courses/AdvancedDiplomain3DGameArtDigitalSculpting.webp"
import DiplomainGameDesignProduction from "../../../assets/img/Courses/DiplomainGameDesignProduction.webp"
import DiplomainGameDevelopmentwithUnity from "../../../assets/img/Courses/DiplomainGameDevelopmentwithUnity.webp"
import Diplomain3DEnvironmentArtCreationforGames from "../../../assets/img/Courses/Diplomain3DEnvironmentArtCreationforGames.webp"
import AdvancedDiplomainTraditionalDigitalConceptArt from "../../../assets/img/Courses/AdvancedDiplomainTraditionalDigitalConceptArt.webp"
import { FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet";
import HomeContentForm from '../../../content/HomeContentFrom';

function Courses(props) {





 


  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  
 

 


  return (
    <>
  
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClass' : 'CoursesOffered'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Courses Offered</h1></div>
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
    "name": "Backstage Pass College offers Online & Offline Video Game Development & Design Courses",
    "item": "https://www.backstagepass.co.in/courses/"  
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
    "target": "https://www.backstagepass.co.in/{search_term_string}https://www.backstagepass.co.in/courses/",
    "query-input": "required name=search_term_string"
  }
}
    `}
</script>


  <title>Backstage Pass College offers Online & Offline Video Game Development & Design Courses</title>
 
  <meta property="og:title" content="Backstage Pass College offers Online & Offline Video Game Development & Design Courses" />
<meta property="og:description" content="Join career-building programs in Bachelor’s, Master’s, Advanced Diploma & Certified Skill Courses. Browse our Game Design, Game Art, 3D Art, Game Programming, & AR/VR courses. Upskill with our eLearning and Offline Programs." />
<meta property="og:url" content="https://www.backstagepass.co.in/courses/" />
  <meta name="keywords" content="game development courses near me, game design courses in india, video game college courses, game development college courses, course for game design and art, gaming courses after 12th, gaming courses in india, game development courses in india"/>

  <link rel="canonical" href="https://www.backstagepass.co.in/courses/" />
</Helmet>
        <div className="courses-wrapper" id="demo-simple-select-label">

          <h2 className="mainHeadingTotal fadeInUp anime-delay">BACHELOR’S COURSES</h2>
          <div className="site-content container">
            <Link to={"/courses/bachelors-in-computer-science-and-game-development/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={csgd} alt="B.Sc in Computer Science & Game Development" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">BACHELOR’S in Computer Science & Game Development</h2>
                  <p>Gain foundational knowledge in core Computer Science, software development, programming and game design with a focus on theoretical understanding and practical application.</p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/bachelors-in-computer-science-and-game-development/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
            <Link to={"/courses/bachelors-in-game-art-and-design/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={GameArtDesign} alt="B.A (Hons) in Game Art & Design" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">BACHELOR’S in Game Art & Design</h2>
                  <p>Want to combine your artistic talents with cutting-edge technology? Then this course is for you! Create visually stunning and immersive games by developing core skills in traditional and digital mediums.</p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/bachelors-in-game-art-and-design/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>

              </div>
            </Link>
            <Link to={"/courses/bachelors-in-augmented-reality-and-virtual-reality/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={AugmentedRealityandVirtualReality} alt="B.A (Hons) in Augmented Reality & Virtual Reality" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">BACHELOR’S in Augmented Reality & Virtual Reality</h2>
                  <p>Tailored for innovators who want to be at the forefront of this revolutionary technology, this course combines the basics of art, design, and programming for AR and VR application development.</p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/bachelors-in-augmented-reality-and-virtual-reality/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="courses-wrapper">
          <h3 className="mainHeadingTotal fadeInUp anime-delay">MASTER’S COURSES</h3>
          <div className="site-content container">
            <Link to={"/courses/masters-in-game-technology/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={MscGameTechnology} alt="M.Sc Game Technology" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">MASTER’S in Game Technology</h2>
                  <p>Whether you're a newcomer looking to switch to the field of game development or a professional aiming to elevate your career, this course provides the knowledge and skills necessary to thrive in the gaming industry.
                  </p><button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/masters-in-game-technology/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div className="site-content container">
            <Link to={"/courses/masters-in-3d-game-art-design/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={MscGameTechnology3d} alt="M.Sc Game Technology" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">MASTER’S in 3D Game Art & Game Design </h2>
                  <p>Looking for a master's degree in game design? If you're passionate about 3D modeling, texturing, and animation, this course is perfect for turning your artistic skills into a successful career in the gaming industry. From sketching concepts to creating game-ready assets, you’ll develop both creative and technical skills to work in top gaming studios. Learn to create meaningful and engaging gameplay experiences through hands-on projects and industry-standard tools.
                  </p><button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/masters-in-3d-game-art-design/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="courses-wrapper">
          <h3 className="mainHeadingTotal fadeInUp anime-delay">Advanced Diploma Courses</h3>
          <div className="site-content container">
            <Link to={"/courses/advanced-diploma-in-game-development/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={AdvancedDiplomainGameDevelopment} alt="Advanced Diploma in Game Development" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">Advanced Diploma in Game Development</h2>
                  <p>This comprehensive program is designed to equip students with the essential skills and knowledge required to excel in the gaming industry. Thus ensuring that students are well-prepared to create and optimize games across various platforms.</p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/advanced-diploma-in-game-development/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
            <Link to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={AdvancedDiplomain3DGameArtDigitalSculpting} alt="Advanced Diploma in 3D Game Art & Digital Sculpting" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">Advanced Diploma in 3D Game Art & Digital Sculpting</h2>
                  <p>Designed to provide students with a deep understanding of the 3D game art pipeline, this program equips students with the skills needed to create detailed and immersive game visuals.</p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/advanced-diploma-in-3d-game-art-digital-sculpting/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
            <Link to={"/courses/advanced-diploma-in-traditional-digital-art/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={AdvancedDiplomainTraditionalDigitalConceptArt} alt="Advanced Diploma in Traditional & Digital Concept Art" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">Advanced Diploma in Traditional & Digital Concept Art</h2>
                  <p>Designed to develop your skills in both traditional and digital art forms, this curriculum covers essential aspects of drawing, perspective, and anatomy, progressing into advanced concepts of environment, character, and creature design.</p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/advanced-diploma-in-traditional-digital-art/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="courses-wrapper">
          <h3 className="mainHeadingTotal fadeInUp anime-delay">Diploma Courses</h3>
          <div className="site-content container">
            <Link className="CourseLink" to={"/courses/diploma-in-game-design-production/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={DiplomainGameDesignProduction} alt="Diploma in Game Design & Production" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">Diploma in Game Design & Production</h2>
                  <p>From understanding the history and genres of games to mastering high-level design principles and practical tools like Unity/Unreal Engine, this program covers every aspect of game design.
                  </p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/diploma-in-game-design-production/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
            <Link to={"/courses/diploma-in-game-development-with-unity/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={DiplomainGameDevelopmentwithUnity} alt="Diploma in Game Development with Unity" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">Diploma in Game Development with Unity</h2>
                  <p>With a more specialized approach, this intensive program is designed to provide students with the foundational skills and advanced techniques necessary to excel in game development using Unity Game Engine.
                  </p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/diploma-in-game-development-with-unity/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
            <Link to={"/courses/diploma-in-3d-environment-art-creation-for-games/"}>
              <div className="mainCourse">
                <div className="mainCourseLeft">
                  <img src={Diplomain3DEnvironmentArtCreationforGames} alt="Diploma In 3D Environment Art For Games" className="img-circle" />
                </div>
                <div className="mainCourseRight">
                  <h2 className="CourseHead">Diploma In 3D Environment Art For Games</h2>
                  <p>This is a specialized program designed to equip students with the skills needed to create stunning and immersive environments for video games.</p>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit" style={{ width: "auto", color: "#fff" }}>
                    <Link className="" style={{ color: "#fff" }} to={"/courses/diploma-in-3d-environment-art-creation-for-games/"}>View More <FiArrowRight /></Link>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <HomeContentForm />
    </>
  )
}

Courses.propTypes = {

}

export default Courses;

