import React, { useState } from 'react'
import "./AboutUs.css";
import HomeContentForm from "../../../content/HomeContentFrom";
import Ourawards from "../../../content/ourawards";
import EmblaCarouselAwards from "../../../content/EmblaCarouselAwards";
import InTheMedia from "../../../content/inTheMedia";
import { useSelector, shallowEqual } from "react-redux";
import bgImage from "../../../assets/img/banners/make-different-img.webp";

import n1 from "../../../assets/img/banners/nemonics.webp";
import hwst from "../../../assets/img/test/howstrt.webp";
import suryasir from "../../../assets/img/test/suryasir.webp";
import { Helmet } from "react-helmet";
import m1 from "../../../assets/img/Icons/passion.webp";
import m2 from "../../../assets/img/Icons/veterans.webp";
import m3 from "../../../assets/img/Icons/connections.webp";
import m5 from "../../../assets/img/Icons/experience.webp";




function Aboutus(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const [isActive, setIsActive] = useState(true);
  const [isActives, setIsActives] = useState(true);
  const [isActivess, setIsActivess] = useState(true);
  const [isActivesss, setIsActivesss] = useState(true);


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
      <div className='courses-container'>
        <div className="main-img" style={{ boxShadow: "none", backgroundColor: "#fff", marginBottom: "28px !important" }}>
          <div style={{ boxShadow: "none", padding: "0px" }} className="main-img2">
            <div style={{ boxShadow: "none", background: "none", padding: "0px", width: "100%" }} >
              <div className="inner-column" style={{ padding: "0px" }}>
                <div className="sec-title">
                  <h2 className="courseHeading fadeInUp anime-delay" style={{ color: "#ed1925" }}>How It Started</h2>
                </div>
                <div className="text">At a time when gaming enthusiasts didn’t have many game development colleges in India to turn to,<b style={{ fontSize: "16px", color: '#ed1925' }}><a href="/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank"> Backstage Pass Institute of Gaming</a></b> rose as a beacon of hope. With a single motto to revolutionise the world of gaming in the country and transform this form of entertainment into a full-fledged source of earning, Backstage Pass has championed quality gaming education at an affordable price.
                </div>
                <div className="text">
                  The institute has welcomed students from all over the country, belonging to diverse backgrounds and unique mindsets, uniting them through their singular passion for gaming and making games. As one of the leading gaming colleges in India, Backstage Pass offers career-oriented bachelor's programs in India, making it one of the best video game development courses after 12th for aspiring game developers and creators.
                </div>

              </div></div>
          </div>
          <div className="main-img2 brtopleft" style={{ boxShadow: "none", background: "none", padding: "0px" }} >
            <div style={{ boxShadow: "none", background: "none", padding: "16px", width: "100%" }}>
              <div className="inner-column inner-column1 wow fadeInLeft" style={{}}>
                <div className="image-1"><a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images"><img src={hwst} alt="" /></a></div>

              </div></div>
          </div>



        </div>

        <div className="main-img" style={{ boxShadow: "none", marginBottom: "28px !important" }}>

          <div style={{ boxShadow: "none", background: "none", padding: "0px", marginBottom: isMobileState ? "0px" : "0px" }} className="main-img2 brtopleft1">
            <div style={{ boxShadow: "none", background: "none", padding: "16px", width: "100%", marginTop: isMobileState ? "0px" : "20px" }}>
              <div className="inner-column inner-column1 wow fadeInLeft" style={{ paddingBottom: "0px" }}>
                <div className="image-1"><a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images"><img src={suryasir} alt="" /></a></div>

              </div></div>
          </div>
          <div style={{ boxShadow: "none", padding: "0px" }} className="main-img2">
            <div style={{ boxShadow: "none", background: "none", padding: "0px" }} >
              <div className="inner-column" style={{ padding: isMobileState ? '0px 0px 0px 0px' : '0px 0px 0px 30px' }}>
                <div className="sec-title">
                  <h2 className="courseHeading fadeInUp anime-delay" style={{ color: "#ed1925", textAlign: "left" }}>Vision </h2>
                </div>
                <div className="text"> What started as <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://www.linkedin.com/in/surya-p-99413b6/" rel="noopener noreferrer" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank">Mr. Surya's</a></b> simple vision has evolved into a thriving academic and professional ecosystem, bringing together a diverse gaming community of students, alumni, and industry experts.</div>
                <div className="text">Over the years, our graduates have joined some of the largest game studios, contributed to the development of innovative and acclaimed titles, and earned recognition for their creative and technical excellence. </div>
                <div className="text">These achievements reflect the enduring spirit and high standards of our institution. If you're motivated to shape the future of game development, we welcome you to embark on this journey with us.</div>

              </div></div>
          </div>


        </div>
      </div>
      <div className='courses-container'>

        <h2 className="courseHeading fadeInUp anime-delay" style={{ marginTop: "-30px!important", textAlign: "center" }}>Kyodai Gameworks
        </h2>
        <p className="text">
          <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://kyodaigameworks.com/" className="slu" target='_blank'> Kyodai Gameworks </a></b> is a full-fledged game development studio dedicated to crafting immersive, innovative, and genre-defining gaming experiences. From concept to launch, the studio is involved in every aspect of game creation — including development, design, and publishing.
        </p>
        <p className="text">
          Affiliated with the Backstage Pass Institute of Gaming, Kyodai Gameworks blends academic insight with industry expertise, pushing boundaries to deliver games that are not only fun and engaging but also refreshingly original. With a passion for storytelling and gameplay innovation, the studio continually explores new twists on familiar genres, setting the stage for the next generation of interactive entertainment.
        </p>
        <p className="text">
           <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://play.google.com/store/apps/details?id=com.KyodaiGameworks.Slunkey" className="slu" target='_blank'>Slunkey</a></b> is the first game launched by Kyodai Gameworks. It is a fun slime puzzle adventure where a cheeky monkey mutates into a gooey character, and it tries to escape the crazy banana factory using slingshot mechanics. If you love puzzle games, quirky platformers, or are searching for the best puzzle games for Android and iPhone, this monkey puzzle escape is packed with challenge and fun.

          Kyodai Gameworks’ 2nd game,  <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://play.google.com/store/apps/details?id=com.orbital.kyodaigameworks" className="slu" target='_blank'>Orbital Outbreak</a></b>, is a chaotic roguelite shooter set on spinning planets. Packed with nonstop action, this offline top-down shooter delivers survival chaos and ranks among the best shooting games for Android and iPhone
        </p>
      </div>


      <section className="wtmakesbsp">

        <div className="bg-image" style={{ backgroundImage: `url(${bgImage})` }}></div>


        <div className="container">
          <div className="custom-row">
            {/* Left section */}
            <div className="left">
              <div className="q-mark">?</div>
              <h2 className="courseHeading fadeInUp anime-delay" style={{ lineHeight: "4rem", color: "#fff", marginBottom: isMobileState ? "8px" : "30px", marginTop: isMobileState ? "8px" : "30px", textAlign: "center" }}>Why Students Choose Backstage Pass?
</h2>

            </div>
            {/* <div className='courseUpdatesabout'>
          <ul style={{ width: "80%", margin: "0px auto", paddingTop: "10px" }}>
            <li>
              <div className='BeyondLeft'>
                <img src={m1} />
              </div>
              <div className='BeyondRight'>
                <p className='lsh'>Passion For Gaming</p>
                <p>At Backstage Pass, we pride ourselves on hosting students from across India with different cultures, backgrounds, and mindsets and uniting them through their passion for gaming
                </p>
              </div>
            </li>
            <li>
              <div className='BeyondLeft'>
                <img src={m5} />
              </div>
              <div className='BeyondRight'>
                <p className='lsh'>Hands-on Experience</p>
                <p>One of the most important things about making a kickass game is actually making it. That's where our workshops and various curricular programs come into picture for practical learning</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m2} />
              </div>
              <div className='BeyondRight'>
                <p className='lsh'>Industry Veterans</p>
                <p>Our students are continuously guided by industry veterans who have spent 12 to 20 years working in and for the industry. Thus, our students get firsthand knowledge of the goods and bads of the industry.</p>
              </div>


            </li>

            <li>
              <div className='BeyondLeft'>
                <img src={m3} />
              </div>
              <div className='BeyondRight'>
                <p className='lsh'>Industry Connections</p>
                <p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe</p>
              </div>


            </li>


          </ul>
        </div> */}
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

      {/* <div id='chapter12' style={{background:"#fff"}} >
                <div className="mid-title">


                </div>
                <div className="sec-title" id="">
                    <h3 className="mainHeadingTotal fadeInUp anime-delay" style={{color:"#000"}}>What Makes BSP Tick</h3>

                </div>
                {isMobileState ? <div>
                    <div>
                        <ul className='mbimg12'>
                            <li>
                                <h3 style={{color:"#fff"}}>Passion For Gaming
                                </h3>
                                <p>At Backstage Pass, we pride ourselves on hosting students from across India with different cultures, backgrounds, and mindsets and uniting them through their passion for gaming</p></li>
                            <li>
                                <h3 style={{color:"#fff"}}>Hands-on Experience

                                </h3>
                                <p>One of the most important things about making a kickass game is actually making it. That's where our workshops and various curricular programs come into picture for practical learning.</p></li>
                            <li>
                                <h3 style={{color:"#fff"}}>Industry Veterans
                                </h3>
                                <p>Our students are continuously guided by industry veterans who have spent 12 to 20 years working in and for the industry. Thus, our students get firsthand knowledge of the goods and bads of the industry.</p></li>
                            <li>
                                <h3 style={{color:"#fff"}}>Industry Connections
                                </h3>
                                <p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe...</p>

                                <p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe, the management at Backstage Pass personally looks into proper industry exposure for the students.</p>
                            </li>

                        </ul>
                    </div>
                </div> :

                    <div style={{ position: "relative", height: "618px" }}>
                        <div id="pointerabut" className={isActive ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p style={{color:"#fff"}}>Passion For Gaming
                                </p>
                                <div className='pluin' onClick={() => setIsActive(!isActive)}></div>
                            </div>
                            {isActive && <div className="Faqs" style={{ display: isActive ? "block" : "block" }}><p>At Backstage Pass, we pride ourselves on hosting students from across India with different cultures, backgrounds, and mindsets and uniting them through their passion for gaming</p></div>}
                        </div>


                        <div id="pointerabut1" className={isActives ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p style={{color:"#fff"}}>Hands-on Experience
                                </p>
                                <div className='pluin' onClick={() => setIsActives(!isActives)}> </div>
                            </div>
                            {isActives && <div className="Faqs" id="HiddenText3" style={{ display: isActives ? "block" : "none" }}><p>One of the most important things about making a kickass game is actually making it. That's where our workshops and various curricular programs come into picture for practical learning.</p></div>}
                        </div>

                        <div id="pointerabut2" className={isActivess ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p style={{color:"#fff"}}>Industry Veterans
                                </p>
                                <div className='pluin' onClick={() => setIsActivess(!isActivess)}></div>
                            </div>
                            {isActivess && <div className="Faqs" style={{ display: isActivess ? "block" : "block" }}><p>Our students are continuously guided by industry veterans who have spent 12 to 20 years working in and for the industry. Thus, our students get firsthand knowledge of the goods and bads of the industry.</p></div>}
                        </div>

                        <div id="pointerabut3" className={isActivesss ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p style={{color:"#fff"}}>Industry Connections
                                </p>
                                <div className='pluin' onClick={() => setIsActivesss(!isActivesss)}></div>
                            </div>
                            {isActivesss && <div className="Faqs" id="HiddenText3" style={{ display: isActivesss ? "block" : "block" }}><p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe...</p></div>}
                        </div>

                    </div>}
            </div> */}
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

