import React from 'react'
import "./AboutUs.css";
import HomeContentForm from "../../../content/HomeContentFrom";
import Ourawards from "../../../content/ourawards";
import InTheMedia from "../../../content/inTheMedia";
import { useSelector, shallowEqual } from "react-redux";
import bgImage from "../../../assets/img/banners/make-different-img.webp";
import n1 from "../../../assets/img/banners/nemonics.webp";
import hwst from "../../../assets/img/test/howstrt.webp";
import suryasir from "../../../assets/img/test/suryasir.webp";
import balasir from "../../../assets/img/test/BalaSirimage.webp";
import { Helmet } from "react-helmet";
import m1 from "../../../assets/img/Icons/passion.webp";
import m2 from "../../../assets/img/Icons/veterans.webp";
import m3 from "../../../assets/img/Icons/connections.webp";
import m5 from "../../../assets/img/Icons/experience.webp";
import linkedin from "../../../assets/img/Icons/linkedin.webp";



function Aboutus(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  return (
    <>
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
                        "name": "Backstage Pass Institute of Gaming , India's #1 College for Game Development & Design",
                        "item": "https://www.backstagepass.co.in/about-us/our-story/"  
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
                        "target": "https://www.backstagepass.co.in/about-us/our-story/{search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                    }
                    `}
        </script>
        <title>Backstage Pass Institute of Gaming , India's #1 College for Game Development & Design
        </title>
        <meta property="og:title" content="Backstage Pass Institute of Gaming , India's #1 College for Game Development & Design" />
        <meta property="og:description" name="description" content="Experience hands-on game development and design education at Backstage Pass, India's leading gaming college. Get mentored by experts and build your future." />
          <meta name="description" content="Experience hands-on game development and design education at Backstage Pass, India's leading gaming college. Get mentored by experts and build your future." />
        <meta property="og:url" content="https://www.backstagepass.co.in/about-us/our-story/" />
        <link rel="canonical" href="https://www.backstagepass.co.in/about-us/our-story/" />
      </Helmet>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassb' : 'StoryB'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt"> About Us</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-ban  mainbans sec-title mabanimg"><img src={n1} alt="nemonics" /></div>


      <h2 className="mainHeadingTotal fadeInUp anime-delay" style={{ marginTop: "-30px!important", textAlign: "center" }}>Our Story
      </h2>
      <h3 className='tagline tg1' style={{ color: "#ed1925" }}> To shape the future of global gaming education</h3>
      <div className='courses-container' >
        <div className="main-img" style={{ boxShadow: "none", backgroundColor: "#fff", marginBottom: "28px !important" }}>


          {isMobileState ? (
            <>
              <div className="sec-title">
                <h2 className="courseHeading fadeInUp anime-delay" style={{ color: "#ed1925" }}>How It Started</h2>
              </div>
              <div className="main-img2 brtopleft" style={{ boxShadow: "none", background: "none", padding: "0px" }}>
                <div style={{ boxShadow: "none", background: "none", padding: "16px", width: "100%" }}>
                  <div className="inner-column inner-column1 wow fadeInLeft">
                    <div className="image-1">
                      <a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images">
                        <img src={hwst} alt="hwst" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                At a time when gaming enthusiasts didn’t have many game development colleges in India to turn to,
                <b style={{ fontSize: "16px", color: '#ed1925' }}>
                  <a href="/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer">
                    Backstage Pass Institute of Gaming
                  </a>
                </b>
                rose as a beacon of hope. With a single motto to revolutionise the world of gaming in the country and transform this form of entertainment into a full-fledged source of earning, Backstage Pass has championed quality gaming education at an affordable price.
              </div>

              <div className="text">
                The institute has welcomed students from all over the country, belonging to diverse backgrounds and unique mindsets, uniting them through their singular passion for gaming and making games. As one of the leading gaming colleges in India, Backstage Pass offers career-oriented bachelor's programs in India, making it one of the best video game development courses after 12th for aspiring game developers and creators.
              </div>
            </>
          ) : (
            <>

              <div style={{ boxShadow: "none", padding: "0px" }} className="main-img2">
                <div style={{ boxShadow: "none", background: "none", padding: "0px", width: "100%" }} >
                  <div className="inner-column" style={{ padding: "0px" }}>

                    <div className="sec-title">
                      <h2 className="courseHeading fadeInUp anime-delay" style={{ color: "#ed1925" }}>How It Started</h2>
                    </div>
                    <div className="text">At a time when gaming enthusiasts didn’t have many game development colleges in India to turn to,<b style={{ fontSize: "16px", color: '#ed1925' }}><a href="/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer"> Backstage Pass Institute of Gaming</a></b> rose as a beacon of hope. With a single motto to revolutionise the world of gaming in the country and transform this form of entertainment into a full-fledged source of earning, Backstage Pass has championed quality gaming education at an affordable price.
                    </div>
                    <div className="text">
                      The institute has welcomed students from all over the country, belonging to diverse backgrounds and unique mindsets, uniting them through their singular passion for gaming and making games. As one of the leading gaming colleges in India, Backstage Pass offers career-oriented bachelor's programs in India, making it one of the best video game development courses after 12th for aspiring game developers and creators.
                    </div>

                  </div></div>
              </div>

              <div className="main-img2 brtopleft" style={{ boxShadow: "none", background: "none", padding: "0px" }} >
                <div style={{ boxShadow: "none", background: "none", padding: "16px", width: "100%" }}>
                  <div className="inner-column inner-column1 wow fadeInLeft" style={{}}>
                    <div className="image-1"><a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images"><img src={hwst} alt="hwst" /></a></div>

                  </div></div>
              </div>


            </>
          )}


        </div>
        <div className='courses-container bgcontainerv' style={{ marginTop: isMobileState ? "30px" : "20px" }}>

          <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: "center" }}>
            Vision
          </h2>

          <div style={{ position: "relative", padding: "0px 40px" }}>

            {/* BIG LEFT QUOTE ICON */}
            <span
              className='upq'
            >
              “
            </span>

            <p
              style={{
                lineHeight: "28px",
                color: "#555",
              
              }}
            >
              What began as my vision has grown into a thriving academic and professional ecosystem uniting
              students, alumni, and industry experts. <br />
              Our graduates join leading game studios, contribute to acclaimed titles, and earn recognition
              for their creative and technical excellence. <br />
              These achievements reflect our spirit and standards. Join us in shaping the future of
              game development.
            </p>

            {/* BIG RIGHT QUOTE ICON */}
            <span

              className='downq'
            >
              ”
            </span>

          </div>


          {/* Signature Block — right aligned */}
          <div style={{ textAlign: "right", color: "#000000", alignSelf: "flex-end", flexDirection: "column", marginRight: "120px", marginTop: "-10px" }}>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: "18px", color: "#ed1f25" }}>— Surya P </p>
            <p style={{ margin: 0, fontSize: "16px", opacity: 0.8, marginTop: "-17px", color: "#ed1f25", marginLeft: "14px" }}>Founder</p>
          </div>

        </div>

        <div className="sec-title" style={{ marginBottom: "0px" }}>
          <h2 className="vision-section courseHeading fadeInUp anime-delay" style={{ color: "#ed1925", textAlign: "center", marginTop: "45px" }}>About Management </h2>
        </div>
        <div className="main-img" style={{ boxShadow: "none", marginBottom: "28px !important" }}>

          {isMobileState ? (
            <>


              <div className="main-img" style={{ boxShadow: "none", marginBottom: "28px !important", marginTop: "0px" }}>

                <div
                  style={{ boxShadow: "none", background: "none", padding: "0px", marginBottom: isMobileState ? "0px" : "0px" }}
                  className="main-img2 brtopleft1"
                >
                  <div
                    style={{ boxShadow: "none", background: "none", padding: "16px", width: "100%", marginTop: isMobileState ? "0px" : "20px" }}
                  >
                    <div className="inner-column inner-column1 wow fadeInLeft" style={{ paddingBottom: "0px" }}>

                      <div className="image-1">
                        <a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images">
                          <img src={suryasir} alt="suryasir" style={{height:"auto"}} />
                        </a>
                      </div>

                      <div className='bg-red'>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}

                <div style={{ boxShadow: "none", padding: "0px" }} className="main-img2 mat">
                  <div style={{ boxShadow: "none", background: "none", padding: "0px" }}>
                    <div className="inner-column" style={{ padding: isMobileState ? "0px" : "0px 0px 0px 30px" }}>

                      <div className="text">
                        <b style={{ fontSize: "16px", color: "#ed1925" }}>
                          <a
                            href="https://www.linkedin.com/in/surya-p-99413b6/"
                            rel="noopener noreferrer"
                            style={{ fontSize: "16px", color: "#ed1925" }}
                            target="_blank"
                          >
                            Mr. Surya P
                          </a>
                        </b>
                        {" "}
                        brings a unique blend of creative and business expertise to the gaming education
                        ecosystem. He holds a Diploma in 3D Animation and Visual Effects, specialising in Character
                        Animation from Vancouver Film School (2003), and a Bachelor's Degree in Foreign Trade from
                        Nizam College.
                      </div>

                      <div className="text">
                        With prior experience in the visual effects and gaming industry, he has navigated real-world
                        challenges, built strong industry connections, and now leverages that experience to guide and
                        empower students at Backstage Pass.
                      </div>

                      <div className="text">
                        He strongly believes that with the right mentorship and tools, Indian game developers
                        can succeed on the global stage.
                      </div>

                      {/* ⭐ ADDING LINKEDIN HERE — NOTHING ELSE CHANGED */}

                      <a
                        href="https://www.linkedin.com/in/bala-krishna-annaluri-ba08321a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="linkdinpv"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Linkedin Profile :</span>
                        <img src={linkedin} alt="linkedin" />
                      </a>

                    </div>
                  </div>
                </div>

              </div>

            </>
          ) : (
            <>

              <div className="main-img" style={{ boxShadow: "none", marginBottom: "28px !important", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" }}>
                <div className="main-img2 brtopleft" style={{ boxShadow: "none", background: "none", padding: "0px" }} >
                  <div style={{ boxShadow: "none", background: "none", padding: "16px", width: "100%" }}>
                    <div className="inner-column inner-column1 wow fadeInLeft" style={{}}>
                      <div className="image-1"><a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images"><img src={suryasir} alt="suryasir" style={{height:"auto"}} /></a></div>

                    </div></div>
                </div>
                <div style={{ boxShadow: "none", padding: "0px" }} className="main-img2 mat">
                  <div style={{ boxShadow: "none", background: "none", padding: "0px" }} >
                    <div className="inner-column" style={{ padding: isMobileState ? '0px 0px 0px 0px' : '0px 0px 0px 30px' }}>

                      <div className="text"> Mr. Surya P  brings a unique blend of creative and
                        business expertise to the gaming education
                        ecosystem. He holds a Diploma in 3D Animation
                        and Visual Effects, specialising in Character
                        Animation from Vancouver Film School (2003),
                        and a Bachelor's Degree in Foreign Trade from
                        Nizam College.</div>
                      <div className="text">With prior experience in the visual effects and
                        gaming industry, he has navigated real-world
                        challenges, built strong industry connections, and
                        now leverages that experience to guide and
                        empower students at Backstage Pass.</div>
                      <div className="text">He strongly believes that with the right
                        mentorship and tools, Indian game developers
                        can succeed on the global stage.</div>
                      <a href="https://www.linkedin.com/in/surya-prakash-patallapalli-99413b6/" className='linkdinp'><span>Linkedin Profile :</span> <img src={linkedin} alt="linkedin"/></a>
                    </div></div>
                </div>


              </div>



            </>
          )}
        </div>
      </div>
      <div className='courses-container' style={{ marginTop: isMobileState ? "0px" : "20px" }}>
        <div className="main-img" style={{ boxShadow: "none", marginBottom: "28px !important", display: "flex", alignItems: "center", justifyContent: "center" }}>

          <div style={{ boxShadow: "none", padding: "0px" }} className="main-img2 mat">
            <div style={{ boxShadow: "none", background: "none", padding: "0px" }} >
              <div className="inner-column" style={{ padding: isMobileState ? '0px 0px 0px 0px' : '0px 0px 0px 30px' }}>

                <div className="text"> Dr. Bala Krishna Annaluri   is a distinguished
                  academic in Game Development and Interactive
                  Technologies. He holds a PhD in Computer Science
                  specializing in AI-driven NPC creation.</div>
                <div className="text">With over 20+ years in higher and technical
                  education, including 16+ years dedicated to

                  gaming, he pioneered India’s first university-
                  affiliated undergraduate and postgraduate

                  programs in Game Art, Game Design, Game
                  Development, and AR/VR Technologies.</div>
                <div className="text">Under his leadership academic frameworks were
                  built to align curriculum design, evaluation
                  systems, and quality bench marks with industry
                  standards. Serving on the Boards of Studies for
                  JNAFAU and Osmania University, Dr. Annaluri
                  continues to advance gaming education nationally.</div>
                <a href="https://www.linkedin.com/in/dr-bala-krishna-annaluri-ba08321a/" className='linkdinp'><span>Linkedin Profile :</span> <img src={linkedin} alt="linkedin"/></a>
              </div></div>
          </div>
          <div className="main-img2 brtopleft" style={{ boxShadow: "none", background: "none", padding: "0px" }} >
            <div style={{ boxShadow: "none", background: "none", padding: "16px", width: "100%" }}>
              <div className="inner-column inner-column1 wow fadeInLeft" style={{ paddingBottom: isMobileState ? "0px" : "20px" }}>
                <div className="image-1"><a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images"><img src={balasir} alt="balasir" style={{height:"auto"}}  /></a></div>

              </div></div>
          </div>

        </div>
      </div>
      <div className='courses-container' style={{ marginTop: isMobileState ? "0px" : "20px" }}>

        <h2 className="courseHeading fadeInUp anime-delay" style={{ marginTop: "-30px!important", textAlign: "center" }}>Kyodai Gameworks
        </h2>
        <p className="text">
          <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://kyodaigameworks.com/" className="slu" target='_blank' rel="noopener noreferrer"> Kyodai Gameworks </a></b> is a full-fledged game development studio dedicated to crafting immersive, innovative, and genre-defining gaming experiences. From concept to launch, the studio is involved in every aspect of game creation — including development, design, and publishing.
        </p>
        <p className="text">
          Affiliated with the Backstage Pass Institute of Gaming, Kyodai Gameworks blends academic insight with industry expertise, pushing boundaries to deliver games that are not only fun and engaging but also refreshingly original. With a passion for storytelling and gameplay innovation, the studio continually explores new twists on familiar genres, setting the stage for the next generation of interactive entertainment.
        </p>
        <p className="text">
          <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://play.google.com/store/apps/details?id=com.KyodaiGameworks.Slunkey" className="slu" target='_blank' rel="noopener noreferrer">Slunkey</a></b> is the first game launched by Kyodai Gameworks. It is a fun slime puzzle adventure where a cheeky monkey mutates into a gooey character, and it tries to escape the crazy banana factory using slingshot mechanics. If you love puzzle games, quirky platformers, or are searching for the best puzzle games for Android and iPhone, this monkey puzzle escape is packed with challenge and fun.

          Kyodai Gameworks’ 2nd game,  <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://play.google.com/store/apps/details?id=com.orbital.kyodaigameworks" className="slu" target='_blank' rel="noopener noreferrer">Orbital Outbreak</a></b>, is a chaotic roguelite shooter set on spinning planets. Packed with nonstop action, this offline top-down shooter delivers survival chaos and ranks among the best shooting games for Android and iPhone
        </p>
      </div>


      <section className="wtmakesbsp">

        <div className="bg-image" style={{ backgroundImage: `url(${bgImage})` }}></div>


        <div className="container">
          <div className="custom-row">
            {/* Left section */}
            <div className="left">



            </div>

            {/* Right section */}
            <div className="right">
              <ul className="makes-different-list">
                <li>
                  <div className="inner">
                    <img src={m1} alt="Malleable Study Time" width={40} height={40} style={{ marginLeft: "-8px" }} />
                    <h2>Passion For Gaming</h2>
                  </div>

                  <p>At Backstage Pass, we pride ourselves on hosting students from across India with different cultures, backgrounds, and mindsets and uniting them through their passion for gaming</p>
                </li>
                <li>
                  <div className="inner">
                    <img src={m5} alt="Flexible Classes" width={40} height={40} />
                    <h2>Hands-on Experience</h2>
                  </div>
                  <p>One of the most important things about making a kickass game is actually making it. That's where our workshops and various curricular programs come into picture for practical learning</p>
                </li>
                <li>
                  <div className="inner">
                    <img src={m2} alt="Easy to Access" width={40} height={40} />
                    <h2>Industry Veterans</h2>
                  </div>
                  <p>Our students are continuously guided by industry veterans who have spent 12 to 20 years working in and for the industry. Thus, our students get firsthand knowledge of the goods and bads of the industry.</p>
                </li>
                <li>
                  <div className="inner">
                    <img src={m3} alt="Study on the go" width={40} height={40} />
                    <h2>Industry Connections</h2>
                  </div>
                  <p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* <Ourawards /> */}
      <div id="awards-section">
        <Ourawards />
      </div>
      <InTheMedia />
      <HomeContentForm />
    </>
  )
}


export default Aboutus;

