import React, { useState } from 'react'
import "./AboutUs.css";
import HomeContentForm from "../../../content/HomeContentFrom";
import Ourawards from "../../../content/ourawards";
import InTheMedia from "../../../content/inTheMedia";
import { useSelector, shallowEqual } from "react-redux";


import n1 from "../../../assets/img/banners/nemonics.webp";
import hwst from "../../../assets/img/test/howstrt.webp";
import suryasir from "../../../assets/img/test/suryasir.webp";
import { Helmet } from "react-helmet";





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


            <h2 className="mainHeadingTotal" style={{ marginTop: "-30px!important" }}>Our Story
            </h2>
            <p className='tagline tg1' style={{ color: "#fff" }}> To shape the future of global gaming education</p>
            <div className='courses-container'>
                <div className="main-img" style={{ boxShadow: "none", backgroundColor: "#000", marginBottom: "28px !important" }}>
                    <div style={{ boxShadow: "none", backgroundColor: "#000", padding: "0px" }} className="main-img2">
                        <div style={{ boxShadow: "none", background: "none", padding: "0px", width: "100%" }} >
                            <div className="inner-column" style={{ backgroundColor: "#000", padding: "0px" }}>
                                <div className="sec-title">
                                    <h3 className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}>How It Started</h3>
                                </div>
                                <div className="text">At a time when gaming enthusiasts didn’t have many Indian educational institutes to turn to,<b style={{ fontSize: "21px", color: '#ed1925' }}><a href="/" style={{ fontSize: "21px", color: '#ed1925' }} target="_blank"> Backstage Pass Institute of Gaming</a></b> rose as a beacon of hope. With a single motto to revolutionize the world of gaming in the country and transform this form of entertainment into a full-fledged source of earning, Backstage Pass has championed quality gaming education at an affordable price.</div>
                                <div className="text">The institute has welcomed students from all over the country, belonging to diverse backgrounds, possessing unique mindsets, and has united them through their singular passion for gaming and making games.</div>

                            </div></div>
                    </div>
                    <div style={{ boxShadow: "none", background: "none", padding: "0px" }} className="main-img2">
                        <div style={{ boxShadow: "none", background: "none", padding: "0px", width: "100%" }}>
                            <div className="inner-column inner-column1 wow fadeInLeft" style={{ backgroundColor: "#000" }}>
                                <div className="image-1"><a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images"><img src={hwst} alt="" /></a></div>

                            </div></div>
                    </div>



                </div>

                <div className="main-img" style={{ boxShadow: "none", backgroundColor: "#000", marginBottom: "28px !important" }}>

                    <div style={{ boxShadow: "none", background: "none", padding: "0px" }} className="main-img2">
                        <div style={{ boxShadow: "none", background: "none", padding: "0px", width: "100%" }}>
                            <div className="inner-column inner-column1 wow fadeInLeft" style={{ backgroundColor: "#000" }}>
                                <div className="image-1"><a href="/about-us/our-story/" className="lightbox-image" data-fancybox="images"><img src={suryasir} alt="" /></a></div>

                            </div></div>
                    </div>
                    <div style={{ boxShadow: "none", backgroundColor: "#000", padding: "0px" }} className="main-img2">
                        <div style={{ boxShadow: "none", background: "none", padding: "0px" }} >
                            <div className="inner-column" style={{ backgroundColor: "#000", padding: isMobileState ? '0px 0px 0px 0px' : '0px 0px 0px 30px' }}>
                                <div className="sec-title">
                                    <h3 className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}>Vision </h3>
                                </div>
                                <div className="text"> What started as <b style={{ fontSize: "21px", color: '#ed1925' }}><a href="https://www.linkedin.com/in/surya-p-99413b6/" rel="noopener noreferrer" style={{ fontSize: "21px", color: '#ed1925' }} target="_blank">Mr. Surya's</a></b> simple vision has evolved into a thriving academic and professional ecosystem, bringing together a diverse gaming community of students, alumni, and industry experts.</div>
                                <div className="text">Over the years, our graduates have joined some of the largest game studios, contributed to the development of innovative and acclaimed titles, and earned recognition for their creative and technical excellence. </div>
                                <div className="text">These achievements reflect the enduring spirit and high standards of our institution. If you're motivated to shape the future of game development, we welcome you to embark on this journey with us.</div>

                            </div></div>
                    </div>


                </div>
            </div>
            <div className='courses-container'>

                <h3 className="mainHeadingTotal" style={{ marginTop: "-30px!important" }}>Kyodai Gameworks
                </h3>
                <p className="text">
                    Kyodai Gameworks is a full-fledged game development studio dedicated to crafting immersive, innovative, and genre-defining gaming experiences. From concept to launch, the studio is involved in every aspect of game creation — including development, design, and publishing.
                </p>
                <p className="text">
                    Affiliated with the Backstage Pass Institute of Gaming, Kyodai Gameworks blends academic insight with industry expertise, pushing boundaries to deliver games that are not only fun and engaging but also refreshingly original. With a passion for storytelling and gameplay innovation, the studio continually explores new twists on familiar genres, setting the stage for the next generation of interactive entertainment.
                </p>
                <p className="text">
                    Kyodai Gameworks, a Game development studio, focused on creating Fun and Engaging Gaming experiences, has released it's first title: <a href="https://play.google.com/store/apps/details?id=com.KyodaiGameworks.Slunkey" className="slu" target='_blank'>Slunkey</a>,where you play as a cheeky monkey who, in a wild quest for bananas, accidentally plunges into a mysterious toxic vat inside a banana factory. What happens next? Mutation! You’ve transformed into a gooey, stretchy, banana-powered slime creature with extraordinary abilities. Now, your only mission is to escape this dangerously absurd factory using slingshot mechanics, puzzle-solving skills, and pure reflex-driven chaos!
                </p>
            </div>
            <div id='chapter12'>
                <div className="mid-title">


                </div>
                <div className="sec-title" id="">
                    <h3 className="mainHeadingTotal fadeInUp anime-delay">What Makes BSP Tick</h3>

                </div>
                {isMobileState ? <div>
                    <div>
                        <ul className='mbimg12'>
                            <li>
                                <h3>Passion For Gaming
                                </h3>
                                <p>At Backstage Pass, we pride ourselves on hosting students from across India with different cultures, backgrounds, and mindsets and uniting them through their passion for gaming</p></li>
                            <li>
                                <h3>Hands-on Experience

                                </h3>
                                <p>One of the most important things about making a kickass game is actually making it. That's where our workshops and various curricular programs come into picture for practical learning.</p></li>
                            <li>
                                <h3>Industry Veterans
                                </h3>
                                <p>Our students are continuously guided by industry veterans who have spent 12 to 20 years working in and for the industry. Thus, our students get firsthand knowledge of the goods and bads of the industry.</p></li>
                            <li>
                                <h3>Industry Connections
                                </h3>
                                <p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe...</p>

                                {/* <p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe, the management at Backstage Pass personally looks into proper industry exposure for the students.</p> */}
                            </li>

                        </ul>
                    </div>
                </div> :

                    <div style={{ position: "relative", height: "618px" }}>
                        <div id="pointer" className={isActive ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p>Passion For Gaming
                                </p>
                                <div className='pluin' onClick={() => setIsActive(!isActive)}></div>
                            </div>
                            {isActive && <div className="Faqs" style={{ display: isActive ? "block" : "block" }}><p>At Backstage Pass, we pride ourselves on hosting students from across India with different cultures, backgrounds, and mindsets and uniting them through their passion for gaming</p></div>}
                        </div>


                        <div id="pointer1" className={isActives ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p>Hands-on Experience
                                </p>
                                <div className='pluin' onClick={() => setIsActives(!isActives)}> </div>
                            </div>
                            {isActives && <div className="Faqs" id="HiddenText3" style={{ display: isActives ? "block" : "none" }}><p>One of the most important things about making a kickass game is actually making it. That's where our workshops and various curricular programs come into picture for practical learning.</p></div>}
                        </div>

                        <div id="pointer2" className={isActivess ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p>Industry Veterans
                                </p>
                                <div className='pluin' onClick={() => setIsActivess(!isActivess)}></div>
                            </div>
                            {isActivess && <div className="Faqs" style={{ display: isActivess ? "block" : "block" }}><p>Our students are continuously guided by industry veterans who have spent 12 to 20 years working in and for the industry. Thus, our students get firsthand knowledge of the goods and bads of the industry.</p></div>}
                        </div>

                        <div id="pointer3" className={isActivesss ? 'aboutHeaderPoint' : ' '} >
                            <div className='plu1'>
                                <p>Industry Connections
                                </p>
                                <div className='pluin' onClick={() => setIsActivesss(!isActivesss)}></div>
                            </div>
                            {isActivesss && <div className="Faqs" id="HiddenText3" style={{ display: isActivesss ? "block" : "block" }}><p>Since its inception, Backstage Pass has strong connections and exposure to the industry. Be it top gaming studios in India or our web of talented alumni spread across the globe...</p></div>}
                        </div>

                    </div>}
            </div>
            <Ourawards />
            <InTheMedia />
            <HomeContentForm />
        </>
    )
}


export default Aboutus;

