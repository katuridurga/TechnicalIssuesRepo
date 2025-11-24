import React, { useEffect, useRef } from "react";
import "./Affilication.css";
import HomeContentForm from "../../../content/HomeContentFrom";
import { Helmet } from "react-helmet";
import { useSelector, shallowEqual } from "react-redux";

function Affilication() {
  const isMobileState = useSelector(
    (state) => state.mainReducer.isMobile,
    shallowEqual
  );

  const imageRefs = useRef([]);

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("flipIn");
        } else {
          entry.target.classList.remove("flipIn");
        }
      });
    },
    { threshold: 0.3 }
  );

  imageRefs.current.forEach((img) => {
    if (img) observer.observe(img);
  });

  return () => observer.disconnect();
}, []);

  return (
    <>
      <Helmet>
        <title>
          Backstage Pass Institute of Gaming is Accredited by JNAFAU & Lincoln University
        </title>
        <meta
          property="og:title"
          content="Backstage Pass Institute of Gaming is Accredited by JNAFAU & Lincoln University"
        />
        <meta
          name="description"
          content="Backstage Pass is affiliated with top universities like JNAFAU and Lincoln University to offer globally recognized programs in gaming and digital arts."
        />
        <meta
          property="og:url"
          content="https://www.backstagepass.co.in/about-us/affiliation-collaboration/"
        />
        <link
          rel="canonical"
          href="https://www.backstagepass.co.in/about-us/affiliation-collaboration/"
        />
      </Helmet>

      
        

          <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassaff' : 'affilationbanner'}`}>
                <div className="et_pb_row et_pb_row_0">
                    <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                        <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner"><h1 className="title white-txt"> Affiliations</h1></div>
                        </div>
                    </div>
                </div>
            </div>
  

     

      <section className="content-section courses-container">
        <div className="content-wrapper" style={{marginTop:isMobileState?"0px" : "0px"}}>
           <h2 className="courseHeading fadeInUp anime-delay" style={{textAlign:"center"}}>
        Jawaharlal Nehru Architecture & Fine Arts University (JNAFAU)
      </h2>
          <div className="content-text">
            <p>
              JNAFAU is a prestigious state university in Telangana, recognized by
              the UGC. It specializes in programs such as Fine Arts, Architecture,
              Design, and Gaming.
            </p>
            <p>
              Backstage Pass partners with JNAFAU to offer accredited Bachelor's
              and Master's programs in game development, ensuring students receive
              a high-quality, recognized education.
            </p>
            <p>
              Our affiliation with JNAFAU also allows students to benefit from an
              academic curriculum that is aligned with industry standards and
              innovation in digital arts and technology.
            </p>
          </div>

          <div className="content-image">
            <img
              ref={(el) => (imageRefs.current[0] = el)}
              src="https://i.ytimg.com/vi/DT7tzcQHsvE/maxresdefault.jpg"
              alt="JNAFAU campus"
              className="flipImage"
            />
          </div>
        </div>
      </section>

      <section className="content-section courses-container">
        <div className="content-wrapper">
          <div className="content-image">
            <img
              ref={(el) => (imageRefs.current[1] = el)}
              src="https://www.plic.edu.np/sites/default/files/styles/large/public/images/pages/lincoln-uni-logo.gif?itok=qSZr65aP"
              alt="Lincoln University Logo"
              className="flipImage" style={{top:isMobileState? "0px":"30px", position:"relative"}}
            />
          </div>
          <div className="content-text" style={{marginTop:"0px"}}>
            <h2  className="courseHeading fadeInUp anime-delay" style={{textAlign:isMobileState?"center":"left"}}>
              Lincoln University College
            </h2>
            <p>
              Lincoln University College is a premier private institution in
              Malaysia, approved by the Ministry of Higher Education and MQA.
            </p>
            <p>
              In collaboration with Backstage Pass, Lincoln University offers
              Diploma and Advanced Diploma programs in game design and technology,
              providing global exposure and strong academic foundation.
            </p>
            <p>
              This partnership empowers our students with international learning
              opportunities and credentials that are widely respected across the
              gaming industry.
            </p>
          </div>
        </div>
      </section>

      <HomeContentForm />
    </>
  );
}

export default Affilication;
