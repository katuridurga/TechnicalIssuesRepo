import React from "react";
import "./Courses.css";
import { useSelector, shallowEqual } from "react-redux";
import csgd from "../../../assets/img/Courses/csgdc.webp";
import GameArtDesign from "../../../assets/img/Courses/GameArt&Design.webp";
import AugmentedRealityandVirtualReality from "../../../assets/img/Courses/AugmentedRealityandVirtualReality.webp";
import MscGameTechnology from "../../../assets/img/Courses/MscGameTechnology.webp";
import MscGameTechnology3d from "../../../assets/img/Courses/3dgameartandgamedesign.webp";
import AdvancedDiplomainGameDevelopment from "../../../assets/img/Courses/AdvancedDiplomainGameDevelopment.webp";
import AdvancedDiplomain3DGameArtDigitalSculpting from "../../../assets/img/Courses/AdvancedDiplomain3DGameArtDigitalSculpting.webp";
import DiplomainGameDesignProduction from "../../../assets/img/Courses/DiplomainGameDesignProduction.webp";
import DiplomainGameDevelopmentwithUnity from "../../../assets/img/Courses/DiplomainGameDevelopmentwithUnity.webp";
import Diplomain3DEnvironmentArtCreationforGames from "../../../assets/img/Courses/Diplomain3DEnvironmentArtCreationforGames.webp";
import Diploma_in_Game_Development_with_Unreal from "../../../assets/img/Courses/Diploma_in_Game_Development_with_Unreal.webp";
import { Helmet } from "react-helmet";
import HomeContentForm from '../../../content/HomeContentFrom';
import dvrc from "../../../assets/img/Courses/VRApplicationn.webp";

function Courses(props) {

  const programs = [
    {
      heading: "Bachelor’s Courses",
      cards: [
        { title: "Bachelor’s in Computer Science & Game Development", alt: "Computer Science & Game Development", description: "Explore the science behind games with Computer Science & Game Development Courses. Master game programming, design, and development through theory...", link: "/courses/bachelors-in-computer-science-and-game-development/", image: csgd },
        { title: "Bachelor’s in Game Art & Design", alt: "Game Art & Design", description: "Discover the harmony of art and technology with a Bachelor’s in Game Art and Design. Learn 3D video game art, game design, and production to craft visually stunning...", link: "/courses/bachelors-in-game-art-and-design/", image: GameArtDesign },
        { title: "Bachelor’s in Augmented Reality & Virtual Reality", alt: "Augmented Reality & Virtual Reality", description: "A course for bold innovators, uniting art, design, and game engine programming to master the science of augmented and virtual reality. You will learn to transform...", link: "/courses/bachelors-in-augmented-reality-and-virtual-reality/", image: AugmentedRealityandVirtualReality }
      ]
    },
{
      heading: "Master’s Courses",
      cards: [
        { title: "Master’s in Game Technology", alt: "Master’s in Game Technology", description: "The Master’s in Game Technology unites art, logic, and physics, immersing learners in C++ engine development, graphics programming, and Unity & Unreal mastery to craft intelligent, high-performance games...", link: "/courses/masters-in-game-technology/", image: MscGameTechnology },
        { title: "Master’s in 3D Game Art & Game Design ", alt: "Master’s in Game Art & Game Design", description: "With the Master's in 3D Game Art & Design, students will learn 3D modelling, texturing, and animation so they can develop immersive, meaningful video game worlds that blend art with intelligent design.", link: "/courses/masters-in-3d-game-art-design/", image: MscGameTechnology3d }
      ]
    },
    {
      heading: "Advanced Diploma Courses",
      cards: [
        { title: "Advanced Diploma in Game Development", alt: "Game Development", description: "The Advanced Diploma in Game Development unites the precision of C++, the versatility of C#, and the power of OpenGL. Guiding students to master game...", link: "/courses/advanced-diploma-in-game-development/", image: AdvancedDiplomainGameDevelopment },
        { title: "Advanced Diploma in 3D Game Art & Digital Sculpting", alt: "3D Game Art & Digital Sculpting", description: "The Advanced Diploma in 3D Game Art & Digital Sculpting trains artists to master environment modelling and craft immersive characters and lifelike worlds for modern...", link: "/courses/advanced-diploma-in-3d-game-art-digital-sculpting/", image: AdvancedDiplomain3DGameArtDigitalSculpting },
        // { title: "Advanced Diploma in Traditional & Digital Concept Art", description: "A hands-on 12-month advanced diploma that builds strong fundamentals in advancing to character and environment design.", link: "/courses/advanced-diploma-in-traditional-digital-art/", image: AdvancedDiplomainTraditionalDigitalConceptArt }
      ]
    },

    {
      heading: "Diploma Courses",
      cards: [
        { title: "Diploma in Game Design & Production", alt: "Game Design & Production", description: "The Diploma in Game Design & Production explores Unity, Unreal Engine, and project-based training to build visionary designers and industry-ready game design portfolios.", link: "/courses/diploma-in-game-design-production/", image: DiplomainGameDesignProduction },
        { title: "Diploma in Game Development with Unity", alt: "Game Development with Unity Engine", description: "The Diploma in Game Development with Unity empowers creators to master both 2D and 3D game development by blending logic...", link: "/courses/diploma-in-game-development-with-unity/", image: DiplomainGameDevelopmentwithUnity },
        { title: "Diploma in Game Development with Unreal", alt: "Game Development with Unreal Engine", description: "With the Diploma in Game Development with Unreal, students will learn the real science behind making games. The course will guide students through Unreal Engine...", link: "/courses/diploma-in-game-development-with-unreal/", image: Diploma_in_Game_Development_with_Unreal },
        { title: "Diploma In 3D Environment Art For Games", alt: "3D Environment Art For Games Course", description: "The Diploma in 3D Environment Art Creation for Games explores the harmony of art in 3D modelling, texturing, and digital sculpting to craft breathtaking, immersive game worlds.", link: "/courses/diploma-in-3d-environment-art-creation-for-games/", image: Diplomain3DEnvironmentArtCreationforGames },
        { title: "Diploma in VR Application Development", alt: "VR Application Development Course", description: "The Diploma in VR Application Development Course unlocks the future of technology, where students master VR programming with Unity and Unreal to design, develop, and innovate...", link: "/courses/diploma-in-vr-application-development/", image: dvrc }
      ]
    },
    
  ];

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  return (
    <>
   
  <div className={isMobileState ? "MobileClass" : "CoursesOffered"}>
  {!isMobileState && (
    <img
      src="https://www.backstagepass.co.in/courses-ac05838e.webp"
      alt="Game Design and Game Development courses"
      className="bg-image"
    />
  )}
{isMobileState && (
   <img
      src=" https://www.backstagepass.co.in/maincourse-786ef7eb.webp"
      alt="Game Design and Game Development courses"
      className="bg-image1"
    />
)}
 

  <div className="et_pb_row">
    <h1>Courses Offered</h1>
  </div>
</div>
      <div className="courses-container">
        <Helmet>
          {/* Structured Data & meta tags */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org/", 
              "@type": "BreadcrumbList", 
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "India’s Best Game Development college | Backstage Pass Institute of Gaming","item": "https://www.backstagepass.co.in/" },
                {"@type": "ListItem", "position": 2, "name": "Backstage Pass College offers Online & Offline Video Game Development & Design Courses","item": "https://www.backstagepass.co.in/courses/" }
              ]
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
          <meta name="description" content="Join career-building programs in Bachelor’s, Master’s, Advanced Diploma & Certified Skill Courses. Browse our Game Design, Game Art, 3D Art, Game Programming, & AR/VR courses. Upskill with our eLearning and Offline Programs." />
          <meta property="og:description" name="description" content="Join career-building programs in Bachelor’s, Master’s, Advanced Diploma & Certified Skill Courses. Browse our Game Design, Game Art, 3D Art, Game Programming, & AR/VR courses. Upskill with our eLearning and Offline Programs." />
          <meta property="og:url" content="https://www.backstagepass.co.in/courses/" />
          <meta name="keywords" content="game development courses near me, game design courses in india, video game college courses, game development college courses, course for game design and art, gaming courses after 12th, gaming courses in india, game development courses in india" />
          <link rel="canonical" href="https://www.backstagepass.co.in/courses/" />
        </Helmet>

        <section className="programs-section">
          <p className="suprts" style={{ width: "90%", textAlign: "left", fontSize: "16px", margin: "0px auto", paddingTop: "20px" }}>Level up your creativity with Backstage Pass’s Gaming Courses. Learn game design, art, and programming using Unity and Unreal Engine. Explore AR & VR development, create stunning 3D video game art, and build immersive games. Learn from industry experts, design your own games, and join a community of passionate game developers shaping the future of interactive entertainment.</p>
          <div className="programs-container">

            {programs.map((program, index) => {
              if (!program.heading) return null;
              const cardsToShow = isMobileState ? program.cards : program.cards;

              return (
                <div key={index} className="program-heading-row">
                  <h2 className="mainHeadingTotal fadeInUp anime-delay center-heading">{program.heading}</h2>

                  <div className="programs-grid">
                    {cardsToShow.map((card, idx) => (
                      <div key={idx} className="program-card">
                        <img src={card.image} alt={card.alt} />
                        <div className="program-content">
                          <h4>{card.title}</h4>
                          <p>{card.description}</p>
                          <a href={card.link} className="read-more">View Course →</a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View All button for mobile */}

                </div>
              );
            })}
          </div>
        </section>
      </div>

      <HomeContentForm />
    </>
  )
}

export default Courses;
