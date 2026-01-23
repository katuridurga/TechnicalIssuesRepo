import React, { useEffect, useState } from 'react';
import "./StudentArtAndGames.css";
import art17 from "../../../assets/img/art/KhushiNileshPathak.png"
import art18 from "../../../assets/img/art/Deepak.png"
import art19 from "../../../assets/img/art/SuryaVamsi2.png"
import art20 from "../../../assets/img/art/SuryaVamsi1.png"
import art21 from "../../../assets/img/art/SuryaVamsi3.png"
import art22 from "../../../assets/img/art/SuryaVamsi4.png"
import art23 from "../../../assets/img/art/SuryaVamsi5.png"
import art24 from "../../../assets/img/art/SOUMYADEEP.png"
import art25 from "../../../assets/img/art/NCharishmaDevi.png"
import art26 from "../../../assets/img/art/AbhiAstu.png"
import art27 from "../../../assets/img/art/Sumanthmuralikumar.png"
import art28 from "../../../assets/img/art/AniketMukhi2d.png"
import art29 from "../../../assets/img/art/Nikhil-1.png"
import art30 from "../../../assets/img/art/Nikhil.png"
import art31 from "../../../assets/img/art/KhushiNileshPathak-1.png"
import art32 from "../../../assets/img/art/Mahesh.png"
import art33 from "../../../assets/img/art/TaniyaDas.png"
import b1 from "../../../assets/img/StudentGames/Student Games/Frame389.webp";
import b2 from "../../../assets/img/StudentGames/Student Games/Frame390.webp";
import b3 from "../../../assets/img/StudentGames/Student Games/Frame391.webp";
import b4 from "../../../assets/img/StudentGames/Student Games/Frame396.webp";
import b5 from "../../../assets/img/StudentGames/Student Games/Frame395.webp";
import b6 from "../../../assets/img/StudentGames/Student Games/Frame393.webp";
import b7 from "../../../assets/img/StudentGames/Student Games/Frame394.webp";
import b9 from "../../../assets/img/StudentGames/Student Games/Frame397.webp";
import b10 from "../../../assets/img/StudentGames/Student Games/Frame398.webp";
import b11 from "../../../assets/img/StudentGames/Student Games/Frame399.webp";
import b12 from "../../../assets/img/StudentGames/Student Games/Frame400.webp";
import b13 from "../../../assets/img/StudentGames/Student Games/Frame392.webp";
import b15 from "../../../assets/img/StudentGames/Student Games/Frame401.webp";
import b16 from "../../../assets/img/StudentGames/Student Games/Frame402.webp";
import b17 from "../../../assets/img/StudentGames/Student Games/Frame403.webp";
import b18 from "../../../assets/img/StudentGames/Student Games/Frame404.webp";
import b19 from "../../../assets/img/StudentGames/Student Games/Frame405.webp";
import b20 from "../../../assets/img/StudentGames/Student Games/Frame406.webp";
import b21 from "../../../assets/img/StudentGames/Student Games/Frame407.webp";
import b22 from "../../../assets/img/StudentGames/Student Games/Frame408.webp";
import b23 from "../../../assets/img/StudentGames/Student Games/Frame409.webp";
import b24 from "../../../assets/img/StudentGames/Student Games/Fram410.webp";
import b25 from "../../../assets/img/StudentGames/Student Games/Frame411.webp";
import b26 from "../../../assets/img/StudentGames/Student Games/Frame412.webp";
import b27 from "../../../assets/img/StudentGames/Student Games/Frame413.webp";
import b28 from "../../../assets/img/StudentGames/Student Games/Fram414.webp";
import b29 from "../../../assets/img/StudentGames/Student Games/Frame415.webp";
import b30 from "../../../assets/img/StudentGames/Student Games/Frame416.webp";
import b31 from "../../../assets/img/StudentGames/Student Games/Frame417.webp";
import b32 from "../../../assets/img/StudentGames/Student Games/Frame418.webp";
import b33 from "../../../assets/img/StudentGames/Student Games/Frame419.webp";
import b34 from "../../../assets/img/StudentGames/Student Games/Frame420.webp";
import b35 from "../../../assets/img/StudentGames/Student Games/Frame421.webp";
import Frame61 from "../../../assets/img/StudentGames/Student Games/Frame6.webp";
import Framell from "../../../assets/img/StudentGames/Student Games/Framel.webp";
import Framew1 from "../../../assets/img/StudentGames/Student Games/Framew.webp";
import Framet1 from "../../../assets/img/StudentGames/Student Games/Framet.webp";
import Frame388 from "../../../assets/img/StudentGames/Student Games/Frame388.webp";
import orbit from "../../../assets/img/StudentGames/Student Games/Frameo.webp";

import { useSelector, shallowEqual } from "react-redux";



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


  const [showMore, setShowMore] = useState(false);

  const gameCards = [
    { img: orbit, title: "Orbital Outbreak", desc: "Dive into Orbital Outbreak, a chaotic roguelite top-down shooter where alien swarms test your reflexes in nonstop action.", href: "https://play.google.com/store/apps/details?id=com.orbital.kyodaigameworks&hl=en" },
    { img: b5, title: "Slunkey", desc: "Play as a cheeky monkey turned into slime in Slunkey — a quirky slingshot puzzle platformer.", href: "https://play.google.com/store/apps/details?id=com.KyodaiGameworks.Slunkey&hl=en" },
    { img: b13, title: "ESC Sim", desc: "Esc Sim is a quirky first-person escape game where you explore a study, solve puzzles, uncover clues, and enjoy surprises.", href: "https://itiskiruhere.itch.io/esc-sim" },
    { img: b3, title: "Resonance", desc: "Resonance is a serene puzzle game where you form rhythmic loops, match shifting patterns, and solve meditative challenges through timing.", href: "https://anya-musk.itch.io/resonance" },
    { img: Framew1, title: "Warbound", desc: "WARBOUND blends deckbuilding and real-time strategy as you build, command, and conquer with a custom battle deck and powerful armies.", href: "https://store.steampowered.com/app/3119640/Warbound/" },
    { img: b22, title: "Keep Sake", desc: "Tapestries of Memory is a cozy point-and-click puzzle where you relive warm memories through simple mouse interactions in a heartfelt narrative.", href: "https://monty500500.itch.io/keepsake" },
    { img: b1, title: "Stone Wall", desc: "Stonewall is a fast-paced tower-defence auto-battler where you build defences, outsmart enemies, and protect your kingdom.", href: "https://monty500500.itch.io/stonewall" },
    { img: b20, title: "Are You Stupid??", desc: "Are U Stupid is a tricky 2D brain-teaser where you tap buttons, solve unexpected puzzles, and think outside the box to progress.", href: "https://lazy-wizard-studio.itch.io/are-you-stupid" },
    { img: b2, title: "Void Within", desc: "Void Within is a fast-paced FPS where you wall-run, slide, and unleash devastating weapons to survive chaotic arenas and relentless hordes." },
    { img: b4, title: "Feny Frenzy", desc: "Feni Frenzy is a cel-shaded co-op shooter set in COVID-era Goa, where you raid monster-filled parties, loot, level up, and enjoy seasonal live-ops." },
    { img: b6, title: "Infocus", desc: "A 2-player first-person co-op puzzle game where you manipulate time with special cameras to solve challenges and uncover civilisation’s downfall." },
    { img: b7, title: "Disengage", desc: "Disengage is an adventure puzzle game where you start with nothing, using simple controls to overcome challenges in a unique, immersive experience." },
    { img: b9, title: "Russ, Fight the Power!", desc: "Fight the Power! It is a cartoon, chaotic rogue-like where you battle classroom monsters, survive waves, and defeat corrupted education." },
    { img: b10, title: "Capital Quest", desc: "Capital Quest is a cyberpunk board game where you build a corporate empire, outsmart rivals with hacking and corruption, and dominate Neo-City." },
    { img: b11, title: "Stellar Wings", desc: "Stellar Wings is a fast-paced space shooter where you pilot advanced starfighters, perform daring manoeuvres, and battle foes across stunning cosmic worlds." },
    { img: b15, title: "Glyph", desc: "GLYPH is a puzzle game where you decode ancient symbols, solving pattern-based challenges to uncover the secrets of a lost civilisation." },

    // NOW ADD ALL NEW IMAGES BELOW
    { img: b12, title: "The Echo of Two Goodbyes", desc: "A first-person escape horror puzzle where you explore a haunted house, solve eerie mysteries, and uncover the tragic truth behind a restless spirit." },

    { img: b16, title: "Bhoomi", desc: "Bhoomi is a mythological action narrative set in 1950s Adilabad, where Ramu battles oppression and supernatural forces to avenge his family." },
    { img: b17, title: "Bricker", desc: "Bricker is a quirky voxel action game where you sneak, collect gold, survive as a brick, then activate King Mode for chaotic power." },
    { img: b18, title: "Meteor Strike", desc: "Meteor Strike is an 8-bit space shooter where you blast asteroids, collect coins, fight bosses, dodge patrol ships, and upgrade your craft." },
    { img: b19, title: "Crown Jump", desc: "Crown Jump is a fast, timing-based platformer where a sliding crown must jump perfectly to dodge spikes and reach its throne." },

    { img: b21, title: "Squishy", desc: "Squishy is a precision jumping platformer where a jelly leaps upward, aiming perfect jumps or falling back down with no checkpoints." },

    { img: b23, title: "Portal Drifters", desc: "Portal Drifters is a powered-up arcade racer where you drift through portals, transition between worlds mid-race, and speed through dynamic dimensions." },
    { img: b24, title: "Last Stand: Wasteland", desc: "Last Stand: Wasteland is a top-down survival shooter where a lone robot battles endless corrupted machines in a post-apocalyptic desert." },
    { img: b25, title: "Lost in the Dungeons", desc: "Lost in the Dungeons is a fantasy puzzle adventure where a brave duck rotates platforms, shifts water, and solves traps to escape a mysterious labyrinth." },
    { img: b26, title: "Death Spiral", desc: "Death Spiral is a casual dungeon adventure where you navigate brutal traps and tough levels that constantly test your patience." },
    { img: b27, title: "Sermon", desc: "SERMON is a psychological horror where sleep-paralysis nightmares unfold, revealing unseen terrors, haunting memories, and quiet horrors of isolation and regret." },
    { img: b28, title: "Echoes of the Dead", desc: "Echoes of the Dead is a 2D roguelike where Tanzo, a vengeful wizard, battles monsters with precise projectile combat through procedural levels." },
    { img: b29, title: "Console Rift", desc: "Shrunk to toy size, battle swarms of insects, collect your friend’s soul fragments, and fight through your room in a tiny adventure." },
    { img: b30, title: "Flux Eternum", desc: "A first-person parkour platformer where you wall-run, climb, grapple, and jump-pad your way upward, mastering movement to reach the sky." },
    { img: b31, title: "Evolve", desc: "A Unity retro-style 2D/3D platformer where you travel through time, exploring humanity’s history across stages themed around major eras." },
    { img: b32, title: "Traumatized", desc: "Enter Rose’s warped reality as a babysitter returning to her old orphanage, where shadows whisper and past fears resurface." },
    { img: b33, title: "Gravitality", desc: "Gravitality is a mind-bending puzzle game with intricate challenges that push your problem-solving skills to the limit." },
    { img: b34, title: "The Haunting of Belle Islands", desc: "A first-person horror set on a remote island where you explore an abandoned mansion, uncover dark secrets, and survive a vengeful spirit." },
    { img: b35, title: "Battle M.A.Y.H.E.M", desc: "BATTLE M.A.Y.H.E.M is a chaotic arena brawler packed with lasers, rockets, and wild physics where you outlast friends in explosive battles." },
    { img: Frame61, title: "Chaos Reborn", desc: "Dash, wall-run, slide, and create stylish chaos to earn points, unlock power-ups, control crowds with black holes, and freeze time." },
    { img: Framell, title: "Laser Tanks ", desc: "In Laser Tanks, a pixel roguelike RPG, battle alien forces and eliminate enemies to reclaim Earth’s vital chip and save the world." },

    { img: Framet1, title: "Trox", desc: "TROX is a psychological narrative where Marco faces brutal choices and dark truths in a post-World War III world driven by survival." },
    { img: Frame388, title: "Wobble Gobble", desc: "Guide a bouncy jelly cube through colourful isometric levels, using physics-based movement to solve adorable puzzles and explore whimsical worlds." },
  ];
  // Hook 1 — detect which card is centered and add “active” class
  useEffect(() => {
    if (window.innerWidth > 1024) return; // only mobile

    const container = document.querySelector(".containerga");
    const cards = container.querySelectorAll(".cardsg");

    const setActiveCard = () => {
      const centerX = window.innerWidth / 2;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.left < centerX && rect.right > centerX) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    };

    container.addEventListener("scroll", setActiveCard);
    // initial call
    setActiveCard();

    return () => container.removeEventListener("scroll", setActiveCard);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1024) return; // only mobile

    // WAIT for ViewMore DOM to finish rendering

    const container = document.querySelector(".containerga");
    if (!container) return;

    let scrollPos = 0;

    const autoScroll = setInterval(() => {
      scrollPos += container.clientWidth * 0.85;

      // FULL WIDTH AVAILABLE because of the delay
      if (scrollPos >= container.scrollWidth - window.innerWidth) {
        scrollPos = 0;
      }

      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(autoScroll);

  }, [showMore, gameCards]);

  return (
    <>

      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'MobileClassstang' : 'starng'}`}>
        <div className="et_pb_row et_pb_row_0">

          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Student Portfolio
              </h1></div>
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
    "item": "https://www.backstagepass.co.in/life-at-bsp/student-portfolio/"  
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
    "target": "https://www.backstagepass.co.in/life-at-bsp/student-portfolio/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
  `}
          </script>
          <title>Explore Backstage Pass Institute Students arts and games</title>
          <meta property="og:title" content="Explore Backstage Pass Institute Students Arts and Games" />
          <meta property="og:description" name="description" content="See what students at Backstage Pass are building—from concept art to full-fledged games. A creative space where learning turns into real projects." />
          <meta name="description" content="See what students at Backstage Pass are building—from concept art to full-fledged games. A creative space where learning turns into real projects." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/student-portfolio/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/student-portfolio/" />

        </Helmet>

        <div className="courses-wrapper">
          <h2 className="mainHeadingTotal">Student Artwork
          </h2>

          <p className='suprts'>Explore the creativity and talent of our students through their stunning artwork. From digital designs to traditional pieces, each creation represents the dedication and passion that drives our artistic community. Dive into a world of innovation, skill, and imagination!
          </p>

        </div>
        <section className="photos">
          <div className="ph" data-type="3D Artwork"><img src={art17} alt="art4" /></div>
          <div className="ph" data-type="2D Artwork"><img src={art27} alt="art7" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art18} alt="art5" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art19} alt="art7" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art20} alt="art6" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art21} alt="art8" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art22} alt="art2" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art23} alt="art3" /></div>
          <div className="ph" data-type="2D Artwork"><img src={art33} alt="art10" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art24} alt="art9" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art25} alt="art10" /></div>
          <div className="ph" data-type="3D Artwork"><img src={art26} alt="art11" /></div>

          <div className="ph" data-type="2D Artwork"><img src={art28} alt="art6" /></div>
          <div className="ph" data-type="2D Artwork"><img src={art29} alt="art8" /></div>
          <div className="ph" data-type="2D Artwork"><img src={art30} alt="art2" /></div>
          <div className="ph" data-type="2D Artwork"><img src={art31} alt="art3" /></div>
          <div className="ph" data-type="2D Artwork"><img src={art32} alt="art9" /></div>

          {/* <div className="ph" data-type="3D Artwork"><img src={art1} alt="art1" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art4} alt="art4" /></div>
  <div className="ph" data-type="3D Artwork"><img src={art5} alt="art5" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art7} alt="art7" /></div>
  <div className="ph" data-type="3D Artwork"><img src={art6} alt="art6" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art8} alt="art8" /></div>
  <div className="ph" data-type="3D Artwork"><img src={art2} alt="art2" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art3} alt="art3" /></div>
  <div className="ph" data-type="3D Artwork"><img src={art9} alt="art9" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art10} alt="art10" /></div>
  <div className="ph" data-type="3D Artwork"><img src={art11} alt="art11" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art12} alt="art12" /></div>
  <div className="ph" data-type="3D Artwork"><img src={art13} alt="art13" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art14} alt="art14" /></div>
  <div className="ph" data-type="3D Artwork"><img src={art15} alt="art15" /></div>
  <div className="ph" data-type="2D Artwork"><img src={art16} alt="art16" /></div> */}
        </section>






        <h2 className="mainHeadingTotal">Student Games
        </h2>
        <p className='suprts'> At Backstage Pass, we celebrate and recognize exceptional achievements in game art, design, and development. Our awards honor students for their innovation, dedication, and talent, distinguishing them as future leaders in the industry. These awards extend beyond internal recognition, encompassing students who excel in external competitions.</p>
        {isMobileState ? (
          /* MOBILE → Show all cards */
          <div className="containerga">
            {gameCards.map((g, i) => (
              <div className="cardsg" key={i}>
                <img src={g.img} alt={g.title} />
                <h3>{g.title}</h3>

                <div className="overlaysg">
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                  {g?.href && (
                    <a
                      href={g.href}
                      className="capplynow"
                      style={{ padding: "12px", fontSize: "16px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  )}

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* DESKTOP → Show limited + View More */
          <>
            <div className="containerga">
              {(showMore ? gameCards : gameCards.slice(0, 15)).map((g, i) => (
                <div className="cardsg" key={i}>
                  <img src={g.img} alt={g.title} />
                  <h3>{g.title}</h3>

                  <div className="overlaysg">
                    <h3>{g.title}</h3>
                    <p>{g.desc}</p>
                    {g?.href && (
                      <a
                        href={g.href}
                        className="capplynow"
                        style={{ padding: "12px", fontSize: "16px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    )}

                  </div>
                </div>
              ))}
            </div>

            <div className="viewmore-btn-wrapper">
              <button
                className="viewmore-btn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "View Less" : "View More"}
              </button>
            </div>
          </>
        )}


      </div>

    </>
  )
}



export default Courses;

