import React, { useEffect, useRef } from "react";
import "./Affilication.css";
import HomeContentForm from "../../../content/HomeContentFrom";
import { Helmet } from "react-helmet";
import { useSelector, shallowEqual } from "react-redux";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import framebox from "../../../assets/img/Frameboxxlogo.webp";
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
  const items = ["Diploma in Game Development (Unity)",

    "Diploma in Game Development (Unreal)",

    "Diploma in Game Design & Production",

    "Diploma in Virtual Reality Application Development",

    "Advanced Diploma in Game Development"];
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
          property="og:description"
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
              <div className="et_pb_text_inner"><h1 className="title white-txt"> Our Affiliations and Collaborations</h1></div>
            </div>
          </div>
        </div>
      </div>



      <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: "center" }}>
        Affiliations
      </h2>
    

     {isMobileState ? (
        <>
          <section className="content-section courses-container">
            <div className="content-wrapper">
            
                 <h3 className="courseHeading fadeInUp anime-delay" style={{ color: "#ed1925", fontSize: isMobileState ? "24px" : "32px", textAlign: isMobileState ? "center" : "left" }}>Jawaharlal Nehru Architecture & Fine Arts University (JNAFAU)</h3>
            
              <div className="content-image">
                  <img
              ref={(el) => (imageRefs.current[0] = el)}
              src="https://i.ytimg.com/vi/DT7tzcQHsvE/maxresdefault.jpg"
              alt="JNAFAU campus"
              className="flipImage"
            />
              </div>
           <div className="content-text">

          
            <p>
              <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://jnafau.ac.in/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer"> JNAFAU</a></b>  is a prestigious state university in Telangana, recognized by
              the UGC. It specializes in programs such as Fine Arts, Architecture,
              Design, and Gaming.
            </p>
            <p>
              <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer">  Backstage Pass </a></b>

              partners with JNAFAU to offer accredited Bachelor's
              and Master's programs in game development, ensuring students receive
              a high-quality, recognized education.
            </p>
            <p>
              Our affiliation with JNAFAU also allows students to benefit from an
              academic curriculum that is aligned with industry standards and
              innovation in digital arts and technology.
            </p>
          </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="content-section courses-container">
            <div className="content-wrapper">
          
               <div className="content-text">
   <h3 className="courseHeading fadeInUp anime-delay" style={{ color: "#ed1925", fontSize: isMobileState ? "24px" : "32px", textAlign: isMobileState ? "center" : "left" }}>Jawaharlal Nehru Architecture & Fine Arts University (JNAFAU)</h3>
          
            <p>
              <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://jnafau.ac.in/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer"> JNAFAU</a></b>  is a prestigious state university in Telangana, recognized by
              the UGC. It specializes in programs such as Fine Arts, Architecture,
              Design, and Gaming.
            </p>
            <p>
              <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer">  Backstage Pass </a></b>

              partners with JNAFAU to offer accredited Bachelor's
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
        </>
      )}

      {isMobileState ? (
        <>
          <section className="content-section courses-container">
            <div className="content-wrapper">
              <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: isMobileState ? "center" : "left" }}>
                Lincoln University College
              </h2>
              <div className="content-image">
                <img
                  ref={(el) => (imageRefs.current[1] = el)}
                  src="https://www.plic.edu.np/sites/default/files/styles/large/public/images/pages/lincoln-uni-logo.gif?itok=qSZr65aP"
                  alt="Lincoln University Logo"
                  className="flipImage" style={{ top: isMobileState ? "0px" : "30px", position: "relative" }}
                />
              </div>
              <div className="content-text" style={{ marginTop: "0px" }}>

                <p>
                  <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://www.lincoln.edu.my/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer"> Lincoln University College </a></b>
                  is a premier private institution in
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
        </>
      ) : (
        <>
          <section className="content-section courses-container">
            <div className="content-wrapper">
              <div className="content-image">
                <img
                  ref={(el) => (imageRefs.current[1] = el)}
                  src="https://www.plic.edu.np/sites/default/files/styles/large/public/images/pages/lincoln-uni-logo.gif?itok=qSZr65aP"
                  alt="Lincoln University Logo"
                  className="flipImage" style={{ top: isMobileState ? "0px" : "30px", position: "relative" }}
                />
              </div>
              <div className="content-text" style={{ marginTop: "0px" }}>
                <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: isMobileState ? "center" : "left", fontSize: isMobileState ? "24px" : "32px" }}>
                  Lincoln University College
                </h2>
                <p>
                  <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://www.lincoln.edu.my/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer"> Lincoln University College </a></b>
                  is a premier private institution in
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
        </>
      )}
  {isMobileState ? (
        <>
             <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: isMobileState ? "center" : "left" }}>
                    Collaborations
              </h2>
          <section className="content-section courses-container">
            <div className="content-wrapper">
         
              <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: isMobileState ? "center" : "left" }}>
               Frameboxx Animation & Visual Effects
              </h2>
              <div className="content-image">
                <img
                  ref={(el) => (imageRefs.current[2] = el)}
                   src={framebox}
                  alt="Framebox Logo"
                  className="flipImage" style={{ top: isMobileState ? "0px" : "30px", position: "relative" }}
                />
              </div>
               <div className="content-text">

            <div className="sec-title">
       
            </div>
            <p>
              is a Backstage Pass Institute of Gaming and <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://jnafau.ac.in/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer">  </a></b> have entered into a strategic MoU to offer industry-focused Diploma and Advanced Diploma programs in game development and related disciplines across India.


            </p>
            <p>

              This collaboration combines  Backstage Pass’s academic depth and industry expertise with Frameboxx’s nationwide infrastructure and student network, enabling wider access to structured gaming education.
            </p>


            <p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <li key={index} style={{ display: "flex", marginBottom: "14px", fontSize: "16px", gap: "10px", alignItems: "flex-start", justifyContent: "flex-start", lineHeight: "1.6" }}>
                    <CheckBoxIcon style={{ color: "#ec1923", marginRight: "12px", fontSize: "22px", marginTop: "3px" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </p>
    <p style={{color:"#000", fontSize:"16px", lineHeight:"28px"}}>
            Programs are delivered through live online classes by Backstage Pass faculty, complemented by on-site mentorship, lab access, and technical support at Frameboxx centres nationwide. Students receive joint certification from both institutions, with optional additional credentials from Lincoln University College and Media & Entertainment Skills Council. <br/>
            Together, the partnership aims to prepare technically skilled and creatively driven professionals ready for India’s rapidly growing gaming industry.
          </p>
          </div>
     
            </div>
          </section>
        </>
      ) : (
        <>
          <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: "center" }}>
        Collaborations
      </h2>
      <section className="content-section courses-container">

        <div className="content-wrapper" style={{ marginTop: isMobileState ? "0px" : "0px", gap:"0px" }}>

          <div className="content-text">

            <div className="sec-title">
              <h3 className="courseHeading fadeInUp anime-delay" style={{ color: "#ed1925", fontSize: isMobileState ? "24px" : "32px" }}> Frameboxx Animation & Visual Effects</h3>
            </div>
            <p>
              is a Backstage Pass Institute of Gaming and <b style={{ fontSize: "16px", color: '#ed1925' }}><a href="https://jnafau.ac.in/" style={{ fontSize: "16px", color: '#ed1925' }} target="_blank" rel="noopener noreferrer"> Frameboxx Animation & Visual Effects </a></b> have entered into a strategic MoU to offer industry-focused Diploma and Advanced Diploma programs in game development and related disciplines across India.


            </p>
            <p>

              This collaboration combines  Backstage Pass’s academic depth and industry expertise with Frameboxx’s nationwide infrastructure and student network, enabling wider access to structured gaming education.
            </p>


            <p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <li key={index} style={{ display: "flex", marginBottom: "14px", fontSize: "16px", gap: "10px", alignItems: "flex-start", justifyContent: "flex-start", lineHeight: "1.6" }}>
                    <CheckBoxIcon style={{ color: "#ec1923", marginRight: "12px", fontSize: "22px", marginTop: "3px" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </p>
 
          </div>
     
    
          <div className="content-image">
            <img
              ref={(el) => (imageRefs.current[2] = el)}

              src={framebox}
              alt="framebox logo"
              className="flipImage"
            />
          </div>
              <p style={{color:"#000", fontSize:"16px", lineHeight:"28px"}}>
            Programs are delivered through live online classes by Backstage Pass faculty, complemented by on-site mentorship, lab access, and technical support at Frameboxx centres nationwide. Students receive joint certification from both institutions, with optional additional credentials from Lincoln University College and Media & Entertainment Skills Council. <br/>
            Together, the partnership aims to prepare technically skilled and creatively driven professionals ready for India’s rapidly growing gaming industry.
          </p>
        </div>
      </section>
        </>
      )}
    
      <HomeContentForm />


    </>
  );
}

export default Affilication;
