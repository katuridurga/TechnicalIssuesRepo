import React, { useState } from 'react'
import "./Landingpageshorter.css";
import HomeContentForm from "../../../content/HomeContentFrom";
import Ourawards from "../../../content/ourawards";
import InTheMedia from "../../../content/inTheMedia";
import { useSelector, shallowEqual } from "react-redux";


import n1 from "../../../assets/img/banners/nemonics.webp";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
          <title>about us page</title>
          <meta  property="og:description" content="about us description" />
          <link rel="canonical" href="https://www.backstagepass.co.in/about-us/our-story/" />
        </Helmet>
    <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassb' : 'StoryB'}`}>
                <div className="et_pb_row et_pb_row_0">
                    <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                        <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner"><h1 className="title white-txt">Our Story</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-ban  mainbans sec-title mabanimg"><img src={n1} alt="nemonics" /></div>


            <h2 className="mainHeadingTotal" style={{ marginTop: "-30px!important" }}>Vision</h2>
            <p className='tagline tg1' style={{ color: "#fff" }}> To shape the future of global gaming education</p>
            <div className='courses-container'>
            <div className="main-img" style={{ boxShadow: "none", backgroundColor: "#000", marginBottom: "28px !important" }}>
            <div style={{ boxShadow: "none", backgroundColor: "#000", padding: "0px" }} className="main-img2">
                    <div style={{ boxShadow: "none", background: "none", padding: "0px" }} >      
                        <div className="inner-column" style={{ backgroundColor: "#000", padding: "0px" }}>
                        <div className="sec-title">
                            <h3 className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}>How It Started</h3>
                        </div>
                        <div className="text">At a time when gaming enthusiasts didn’t have many Indian educational institutes to turn to, Backstage Pass Institute of Gaming & Technology rose as a beacon of hope. With a single motto to revolutionize the world of gaming in the country and transform this form of entertainment into a full-fledged source of earning, Backstage Pass has championed quality gaming education at an affordable price.</div>
                        <div className="text">The institute has welcomed students from all over the country, belonging to diverse backgrounds, possessing unique mindsets, and has united them through their singular passion for gaming and making games.</div>

                    </div></div>
                </div>
                <div style={{ boxShadow: "none", background: "none", padding: "0px" }} className="main-img2">
                    <div style={{ boxShadow: "none", background: "none", padding: "0px" }}>
                        <div className="inner-column inner-column1 wow fadeInLeft" style={{ backgroundColor: "#000" }}>
                            <div className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src={hwst} alt="" /></a></div>

                        </div></div>
                </div>
                


            </div>

            <div className="main-img" style={{ boxShadow: "none", backgroundColor: "#000", marginBottom: "28px !important" }}>
            
                <div style={{ boxShadow: "none", background: "none", padding: "0px" }} className="main-img2">
                    <div style={{ boxShadow: "none", background: "none", padding: "0px" }}>
                        <div className="inner-column inner-column1 wow fadeInLeft" style={{ backgroundColor: "#000" }}>
                            <div className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src={suryasir} alt="" /></a></div>

                        </div></div>
                </div>
                <div style={{ boxShadow: "none", backgroundColor: "#000", padding: "0px" }} className="main-img2">
                    <div style={{ boxShadow: "none", background: "none", padding: "0px" }} >      
                        <div className="inner-column" style={{ backgroundColor: "#000", padding: isMobileState ?  '0px 0px 0px 0px' : '0px 0px 0px 30px' }}>
                        <div className="sec-title">
                            <h3 className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}>How It’s Going</h3>
                        </div>
                        <div className="text"><b style={{ fontSize: "21px",color:'#fff' }}><a href="https://www.linkedin.com/in/surya-p-99413b6/" style={{ fontSize: "21px",color:'#fff' }} target="_blank">Mr. Surya Prakash’s</a></b> simple vision that started with less than 10 students in 2010 has now evolved into a robust ecosystem of 1000+ students and alumni, and 20+ industry experts.</div>
                        <div className="text">With a smashing record of 100+ placements in the past decade, our students have made multiple games and have won accolades that has made the college proud. So, if you think you are meant for greater things, join us.</div>
                        <div className="text">Let’s change the world, one game at a time!</div>

                    </div></div>
                </div>


            </div>
            </div>
            {/* <Grid container spacing={2} className="main-img" style={{ boxShadow: "none", backgroundColor: "#000" }}>

                <Grid xs={6} style={{ boxShadow: "none", background: "none", padding: "0px" }} className="main-img2">
                    <Item style={{ boxShadow: "none", background: "none", padding: "0px" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h3 className="courses-title fadeInUp anime-delay" style={{ color: "#fff", marginLeft: isMobileState ? '18px' : '35px' }}>How It’s Going</h3>

                        </div>
                        <div className="text" style={{ marginLeft: isMobileState ? '18px' : '35px' }}><b style={{ fontSize: "21px" }}>Mr. Surya Prakash’s</b> simple vision that started with less than 10 students in 2010 has now evolved into a robust ecosystem of 1000+ students and alumni, and 20+ industry experts.</div>
                        <div className="text" style={{ marginLeft: isMobileState ? '18px' : '35px' }}>With a smashing record of 100+ placements in the past decade, our students have made multiple games and have won accolades that has made the college proud. So, if you
                            think you are meant for greater things, join us.
                        </div>
                        <div className="text" style={{ marginLeft: isMobileState ? '18px' : '35px' }}>Let’s change the world, one game at a time!
                        </div>





                    </div></Item>
                </Grid>
                <Grid style={{ boxShadow: "none", backgroundColor: "#000" }} xs={6} className="main-img2">
                    <Item style={{ boxShadow: "none", background: "none" }}>    <div className="inner-column inner-column2 wow fadeInLeft">

                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img className='img-box' src={suryasir} alt="" /></a></figure>
                       
                    </div></Item>
                </Grid>

            </Grid> */}
            {/* <Grid container spacing={4} className="main-img">

                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>

                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid> */}
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
                                <p>Industry Connections </p>
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

