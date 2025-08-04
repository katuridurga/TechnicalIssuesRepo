import React from 'react'
import "./Placements.css";
import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.webp";
import r2 from "../../../assets/img/partners/r2.webp";
import r4 from "../../../assets/img/partners/r4.webp";
import r5 from "../../../assets/img/partners/r5.webp";
import r6 from "../../../assets/img/partners/r6.webp";
import r7 from "../../../assets/img/partners/r7.webp";
import { CiPhone, CiMail } from "react-icons/ci";
import { useSelector, shallowEqual } from "react-redux";






import { Helmet } from "react-helmet";
import HomeContentForm from '../../../content/HomeContentFrom';



function Placementsupport(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClasspls' : 'Placement'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Placement Support</h1></div>
            </div>
          </div>
        </div>
      </div>
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
                "name": "Placement Support for Gaming Jobs & Internships | Backstage Pass Institute of Gaming",
                "item": "https://www.backstagepass.co.in/about-us/placement-support/"  
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
                "target": "https://www.backstagepass.co.in/about-us/placement-support/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
              `}
        </script>
        <title>Placement Support for Gaming Jobs & Internships | Backstage Pass Institute of Gaming</title>


        <meta property="og:title" content="Placement Support for Gaming Jobs & Internships | Backstage Pass Institute of Gaming" />
        <meta property="og:description" content="Backstage Pass Institute of Gaming offers 100% placement support. Get mentorship, portfolio-building guidance, and direct access to top gaming companies and studios for internships and job placements." />
        <meta property="og:url" content="https://www.backstagepass.co.in/about-us/placement-support/" />
        <link rel="canonical" href="https://www.backstagepass.co.in/about-us/placement-support/" />
      </Helmet>
      {/* <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div> */}

      <div className="courses-wrapper">
        <h2 className="mainHeadingTotal fadeInUp anime-delay">PLACEMENT RECORD
        </h2>

        <p className='suprt' style={{ width: "86%", marginBottom: isMobileState ? "20px" : "50px" }}>At Backstage Pass, we provide 100% placement support. With a placement record of 90%, our students get placed at top-notch companies.
        </p>
        <Marquee speed={100} style={{ Padding: "0px 20px", marginBottom: isMobileState ? "50px" : "10px" }} className='recuitersList'>
          <img alt="rec1" src={r1} width={"300"} height={"81"} />
          <img alt="rec2" src={r2} width={"300"} height={"81"} />
          {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}
          <img alt="rec4" src={r4} width={"300"} height={"81"} />
          <img alt="rec5" src={r5} width={"300"} height={"81"} />
          <img alt="rec9" src={r6} width={"300"} height={"81"} />
          <img alt="rec10" src={r7} width={"300"} height={"81"} />

        </Marquee>
        <p className='suprt sp1' style={{ marginBottom: isMobileState ? "10px" : "50px" }}>All students who submit their portfolios are eligible for placement opportunities. Students in their 3rd year, 2nd semester can apply for internships. The college provides opportunities to connect students with leading companies.
        </p>

      </div>

      <h2 className="mainHeadingTotal fadeInUp anime-delay" style={{ marginBottom: isMobileState ? "20px" : "95px" }}>INTERNSHIP/PLACEMENT SUPPORT</h2>


      <div className='hexagon hexagon-1'>


        <p className='suprt'>
          <div className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}> Mentorship and Portfolio Building</div>
          Students are connected with mentors before starting internship and placement drives. The college offers specialized classes with industry experts to help students build portfolios. Mentors assist students in creating their portfolios and resumes.
        </p>

      </div>
      <div className='hexagon hexagon-1'>


        <p className='suprt'>
          <div className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}> Internal Assessments and Shortlisting</div>
          Internal assessments are conducted to identify top-performing students. The best students are shortlisted based on their assessment results. Shortlisted students are introduced to reputable companies for placement opportunities
        </p>

      </div>
      <div className='hexagon hexagon-1' >

        <p className='suprt'>

          <div className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}> Company Engagement
          </div>
          The college actively reaches out to companies for internship and placement opportunities. Top-notch companies and unicorn startups often approach the college with their requirements. Company requirements are shared with students, who can then apply accordingly.
        </p>

      </div>
      <div className='hexagon hexagon-1' >


        <p className='suprt'>
          <div className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}> Profile Review and Interview Process</div>
          Companies review student profiles and provide feedback to the college. Interviews typically involve 3-4 rounds, including technical and HR rounds. Some interview processes include assessments that need to be submitted by a deadline.
        </p>

      </div>
      <div className='hexagon hexagon-1'>


        <p className='suprt'>
          <div className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}> College Management Oversight</div>
          The college administration manages and oversees the entire placement process. The college ensures a smooth and transparent process from start to finish. Support is provided to students throughout the process, including interview preparation.
        </p>

      </div>
      <div className='hexagon hexagon-1'>


        <p className='suprt'>
          <div className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}>Internships and Employment</div>
          Internships offered followed by full-time employment opportunities. Certain companies extend Pre-Placement Offers (PPO) to successful interns. The college also supports alumni seeking new job opportunities or career changes.
        </p>

      </div>
      <div className="courses-title fadeInUp anime-delay">CONTACT OUR PLACEMENT CELL</div>

      <ul className="askuss">
        <li><p style={{ marginBottom: "0px", marginTop: "0px" }}><a href="tel:8977945702"><CiPhone /> Call Us</a></p></li>
        <li><p style={{ marginBottom: "0px", marginTop: "0px" }}><a href="mailto:placements@backstagepass.co.in"><CiMail /> Mail Us</a></p></li>
      </ul>
      <HomeContentForm />
    </>
  )
}


export default Placementsupport;

