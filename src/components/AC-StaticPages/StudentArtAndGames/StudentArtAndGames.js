import React, { useEffect } from 'react';
import "./StudentArtAndGames.css";
import art1 from "../../../assets/img/art/art1.webp"
import art2 from "../../../assets/img/art/art2.webp"
import art3 from "../../../assets/img/art/BPR_Composite.webp"
import art4 from "../../../assets/img/art/Heli_15.webp"
import art5 from "../../../assets/img/art/potbot_11.webp"
import art6 from "../../../assets/img/art/pratik-baidya-render-1.webp"
import art7 from "../../../assets/img/art/render027.webp"
import art8 from "../../../assets/img/art/sarwajeet-pandey-1-2.webp"
import art9 from "../../../assets/img/art/Frame16.png"
import art10 from "../../../assets/img/art/Frame19.png"
import art11 from "../../../assets/img/art/Frame36.png"
import art12 from "../../../assets/img/art/Frame30.png"
import art13 from "../../../assets/img/art/Frame28.png"
import art14 from "../../../assets/img/art/PratikBaidya.png"
import art15 from "../../../assets/img/art/VijaySivatejMareedu.png"
import art16 from "../../../assets/img/art/VijaySivatejMareedu1.png"
import b1 from "../../../assets/img/games/1.webp";
import b2 from "../../../assets/img/games/2.webp";
import b3 from "../../../assets/img/games/3.webp";
import b4 from "../../../assets/img/games/4.webp";
import b5 from "../../../assets/img/games/5.webp";
import b6 from "../../../assets/img/games/6.webp";
import b7 from "../../../assets/img/games/7.webp";
import b8 from "../../../assets/img/games/8.webp";
import b9 from "../../../assets/img/games/9.webp";
import b10 from "../../../assets/img/games/10.webp";
import b11 from "../../../assets/img/games/11.webp";
import b12 from "../../../assets/img/games/12.webp";

import  {useSelector, shallowEqual}  from "react-redux";



import { Helmet } from "react-helmet";



function Courses(props) {
  useEffect(() => {
    const images = document.querySelectorAll(".photos img");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoomed");
          } else {
            entry.target.classList.remove("zoomed");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the image is visible
      }
    );
  
    images.forEach((img) => observer.observe(img));
  
    return () => observer.disconnect();
  }, []);
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
);
// const images = [
//   art1, art2, art4, art3,
//   art1, art2, art4, art3,
//   art1, art2, art4, art3,
//   art1, art2, art4, art3
// ];
  return (
    <>
  
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'MobileClassstang' : 'starng'}`}>
        <div className="et_pb_row et_pb_row_0">
        
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Student Art works & games</h1></div>
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
    "name": "Explore Backstage Pass Institute Students arts and games",
    "item": "https://www.backstagepass.co.in/life-at-bsp/student-artwork-and-games/"  
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
    "target": "https://www.backstagepass.co.in/life-at-bsp/student-artwork-and-games/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
  `}
</script>
          <title>Explore Backstage Pass Institute Students arts and games</title>
          <meta property="og:title" content="Explore Backstage Pass Institute Students Arts and Games" />
<meta name="description" content="See what students at Backstage Pass are building—from concept art to full-fledged games. A creative space where learning turns into real projects." />
<meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/student-artwork-and-games/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/student-artwork-and-games/"/>

        </Helmet>

        <div className="courses-wrapper">
          <h2 className="mainHeadingTotal">Student Art Works
        </h2>

          <p className='suprts'>Explore the creativity and talent of our students through their stunning artwork. From digital designs to traditional pieces, each creation represents the dedication and passion that drives our artistic community. Dive into a world of innovation, skill, and imagination!
          </p>
        
        </div>
        
        <section class="photos">
        <img src={art1} alt="art1" />
        <img src={art4} alt="art4" />
        <img src={art5} alt="art5" />
        <img src={art7} alt="art7" />
        <img src={art6} alt="art6" />
        <img src={art8} alt="art8" />
        <img src={art2} alt="art2" />
        <img src={art3} alt="art3" />
        <img src={art9} alt="art9" />
        <img src={art10} alt="art10" />
        <img src={art11} alt="art11" />
        <img src={art12} alt="art12" />
        <img src={art13} alt="art13" />
        <img src={art14} alt="art14" />
        <img src={art15} alt="art15" />
        <img src={art16} alt="art16" />
 
</section>
  
  
 
        
                 <h2 className="mainHeadingTotal">Student Games
        </h2>
        <p className='suprts'> At Backstage Pass, we celebrate and recognize exceptional achievements in game art, design, and development. Our awards honor students for their innovation, dedication, and talent, distinguishing them as future leaders in the industry. These awards extend beyond internal recognition, encompassing students who excel in external competitions.</p>
                 <div class="containerga">
    <div class="cardsg">
      <img src= {b1} alt="b1"/>
      <div class="overlaysg">
        <h3>Byte- The Cyber Dog</h3>
        <p>Join Byte and Kai in a thrilling cyberpunk adventure to uncover the mysteries of a neon-lit city!</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b2} alt="b2"/>
      <div class="overlaysg">
        <h3>Battle M.A.Y.H.E.M</h3>
        <p>A face-off in the arena: Lasers! Rockets! Meteors! Destruction! Everything's ready for your squad.</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b3} alt="b3"/>
      <div class="overlaysg">
        <h3>Gravitality</h3>
        <p>Solve intricate puzzles using gravity mechanics in a beautifully crafted world!</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b4} alt="b4"/>
      <div class="overlaysg">
        <h3>Console Rift</h3>
        <p>Get shrunk to toy size and battle insect hordes in your own home to save a friend!</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b5} alt="b5"/>
      <div class="overlaysg">
        <h3>Slunkey</h3>
        <p>Step into the shoes of a stretchy monkey and escape a hazardous factory filled with quirky puzzles and banana challenges!</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b6} alt="b6"/>
      <div class="overlaysg">
        <h3>Stellar Wings</h3>
        <p>Engage in thrilling dogfights across stunning cosmic vistas in this action-packed space shooter!</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b7} alt="b7"/>
      <div class="overlaysg">
        <h3>wobble Gobble</h3>
        <p>Dive into chaotic battles with fast-paced shooting and dynamic movement mechanics!
        </p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b8} alt="b8"/>
      <div class="overlaysg">
        <h3>Echoes of the Dead</h3>
        <p>Go on a magical quest for vengeance in this 2D roguelike procedural platformer.</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b9} alt="b9"/>
      <div class="overlaysg">
        <h3>Flux Eternum</h3>
        <p>Race against time to reach new heights in this dynamic parkour platformer!</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b10} alt="b10"/>
      <div class="overlaysg">
        <h3>Evolve</h3>
        <p>Travel through time in a retro-inspired platformer exploring humanity's epic journey!</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b11} alt="b11"/>
      <div class="overlaysg">
        <h3>Chaos Reborn</h3>
        <p>Fast-paced boomer shooter. Wall run, slide, dash, and unleash chaos to earn power-ups.</p>
      </div>
    </div>
    <div class="cardsg">
      <img src= {b12} alt="b12"/>
      <div class="overlaysg">
        <h3>blur maniac</h3>
        <p>Dive into the world of portals, wrecking, and high-speed racing! What else do you need to know?</p>
      </div>
    </div>
  </div>
        </div>

      </>
    )
}



export default Courses;

