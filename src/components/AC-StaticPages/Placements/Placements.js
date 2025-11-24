import React, { useState } from 'react'
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
import c1 from "../../../assets/img/partners/InternshipPlacement.webp";
import { FaPlus, FaMinus } from "react-icons/fa";






import { Helmet } from "react-helmet";
import HomeContentForm from '../../../content/HomeContentFrom';



function Placementsupport(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const faqs = [
    {
      question: "Mentorship and Portfolio Building",
      answer: [

        "Students are connected with mentors before starting internship and placement drives. The college offers specialized classes with industry experts to help students build portfolios. Mentors assist students in creating their portfolios and resumes.",
      ],
    },
    {
      question: "Internal Assessments and Shortlisting",
      answer: [
        "Internal assessments are conducted to identify top-performing students. The best students are shortlisted based on their assessment results. Shortlisted students are introduced to reputable companies for placement opportunities",
      ],
    },
    {
      question: "Company Engagement",
      answer: [
        "The college actively reaches out to companies for internship and placement opportunities. Top-notch companies and unicorn startups often approach the college with their requirements. Company requirements are shared with students, who can then apply accordingly.",
      ],
    },
    {
      question: "Profile Review and Interview Process",
      answer: [
        "Companies review student profiles and provide feedback to the college. Interviews typically involve 3-4 rounds, including technical and HR rounds. Some interview processes include assessments that need to be submitted by a deadline.",
      ],
    },
    {
      question: "College Management Oversight",
      answer: [
        "The college administration manages and oversees the entire placement process. The college ensures a smooth and transparent process from start to finish. Support is provided to students throughout the process, including interview preparation.",
      ],
    },
    {
      question: "Internships and Employment",
      answer: [
        "Internships offered followed by full-time employment opportunities. Certain companies extend Pre-Placement Offers (PPO) to successful interns. The college also supports alumni seeking new job opportunities or career changes.",
      ],
    },

  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        <meta name="description" content="Backstage Pass Institute of Gaming offers 100% placement support. Get mentorship, portfolio-building guidance, and direct access to top gaming companies and studios for internships and job placements." />
        <meta property="og:url" content="https://www.backstagepass.co.in/about-us/placement-support/" />
        <link rel="canonical" href="https://www.backstagepass.co.in/about-us/placement-support/" />
      </Helmet>
      {/* <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div> */}

      <div className="courses-wrapper">
        <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: "center" }}>Placement Record
        </h2>

        <p className='suprt' style={{ width: "86%", color: "#000", marginBottom: isMobileState ? "20px" : "50px" }}>At Backstage Pass, we provide 100% placement support. With a placement record of 90%, our students get placed at top-notch companies.
        </p>


        <Marquee
          pauseOnHover={true} // ✅ stops scroll on hover
          speed={100}
          style={{
            padding: "0px 20px",
            marginBottom: isMobileState ? "34px" : "10px",
          }}
          className="recruitersList"
        >
          <img alt="rec1" src={r1} width={"220"} height={"81"} />
          <img alt="rec2" src={r2} width={"220"} height={"81"} />
          {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}
          <img alt="rec4" src={r4} width={"220"} height={"81"} />
          <img alt="rec5" src={r5} width={"220"} height={"81"} />
          <img alt="rec9" src={r6} width={"220"} height={"81"} />
          <img alt="rec10" src={r7} width={"220"} height={"81"} />
        </Marquee>

        <p className='suprt sp1' style={{ marginBottom: isMobileState ? "10px" : "50px" }}>All students who submit their portfolios are eligible for placement opportunities. Students in their 3rd year, 2nd semester can apply for internships. The college provides opportunities to connect students with leading companies.
        </p>

      </div>
      <div id="Career-Opportunities" style={{ backgroundColor: "#f9fafb", overflow: "hidden",boxShadow:"0 2px 15px 5px rgba(0, 0, 0, 0.1)"  }} >

        <div className='coppertunitiesaff'>
          <div className='left'>
            <img src={c1} alt="careerop" />
          </div>

          <div className="right career-tabs-container">
            {/* Tabs */}


            <section className="max-w-3xl mx-auto p-6 iconsv" style={{ background: "#f9fafb", color: "#000", width: isMobileState ? "100%" : "80%", margin: "0px" }}>
              <h2 className='courseHeading fadeInUp anime-delay' style={{
                textAlign: "left", textAlign: isMobileState ? "center" : "left",
                width: isMobileState ? "100%" : "100%",
                lineHeight: isMobileState ? "38px" : "48px",                
                wordWrap: "break-word"
              }}>Internship/Placement Support
              </h2>
              <div className="brname"></div>
              <div className="border rounded-lg bg-white" style={{ marginTop:isMobileState?"0px":"30px" }}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 inline-block justify-start" style={{ borderBottom: "1px solid#d8d7d7", width: "100%", margin: "0px auto" }}>
                    <button
                      className="w-full flex justify-center items-center text-left btnplus"
                      onClick={() => toggleFAQ(index)}
                      style={{
                        background: "#f9fafb",
                        color: "#000",
                        justifyContent: "flex-start",
                        paddingLeft: "0px"

                      }}
                    >
                      {/* Icon inside circle */}
                      <span
                        className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full text-black plusbtn"
                        style={{
                          background: "#fff",
                          color: "#000",
                          border: "1px solid #000",
                          borderRadius: "0%",
                          padding: "20px"
                        }}
                      >
                        {openIndex === index ? (
                          <FaMinus className="w-3 h-3" />
                        ) : (
                          <FaPlus className="w-3 h-3" />
                        )}
                      </span>
                      <span className="faqquestion text-lg font-medium text-gray-800" style={{
                        paddingLeft: "20px",
                        textAlign: "justify",
                        lineHeight: "24px",
                        fontSize: "16px"
                      }}>
                        {faq.question}
                      </span>


                    </button>

                    {openIndex === index && (
                      <ul style={{ paddingLeft: "6.5rem", lineHeight: "1.9" }}>
                        {faq.answer.map((point, i) => (
                          <li key={i} style={{ listStyle: "disc" }}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>



            </section>

          </div>
        </div>
      </div>

      {/* <h2 className="mainHeadingTotal fadeInUp anime-delay" style={{ marginBottom: isMobileState ? "20px" : "95px" }}>INTERNSHIP/PLACEMENT SUPPORT</h2> */}


      {/* <div className='hexagon hexagon-1'>


        <p className='suprt'>
          <div className="courses-title fadeInUp anime-delay" style={{ color: "#fff" }}> Mentorship and Portfolio Building</div>
          Students are connected with mentors before starting internship and placement drives. The college offers specialized classes with industry experts to help students build portfolios. Mentors assist students in creating their portfolios and resumes.
        </p>

      </div> */}

      <h2 className="courseHeading fadeInUp anime-delay" style={{ textAlign: "center" }}>Contact Our Placement Cell</h2>

      <ul className="askuss">
        <li><p style={{ marginBottom: "0px", marginTop: "0px" }}><a href="tel:+91-8977945702"><CiPhone /> Call Us</a></p></li>
        <li><p style={{ marginBottom: "0px", marginTop: "0px" }}><a href="mailto:placements@backstagepass.co.in"><CiMail /> Mail Us</a></p></li>
      </ul>
      <HomeContentForm />
    </>
  )
}


export default Placementsupport;

