import React, { useState } from 'react'
import "./Accelerator.css";
import c1a from "../../../assets/img/Courses/Acceleratorimagea.webp";
import c2a from "../../../assets/img/Courses/WhyChooseUsImagea.webp";
import { useSelector, shallowEqual } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";



import { Helmet } from "react-helmet";
const ulStyle = {
  listStyleType: 'disc',  // Set the bullet point style
  //  paddingLeft: '200px', 
  color: '#000',
  // textAlign:'center',  // Indentation for the bullets
};

const liStyle = {
  margin: '8px',    // Space between each bullet point
  fontSize: '16px',
  // paddingLeft: '200px', 
  color: '#000',

  //textAlign:'center',      // Font size for the list items
};
const boldStyle = {
  fontWeight: 'bold',     // Bold text
  fontSize: '18px',       // Larger font size
};



function Courses(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const faqsac = [
    {
      question: "Hands-On Game Development",
      answer: [

        "<strong>Practical Experience:</strong> Work on real-world projects that simulate industry challenges.",
        "<strong>Creative Freedom:</strong> Design, develop, and refine your unique ideas into market-ready games.",
      ],
    },
    {
      question: "Expert Mentorship",
      answer: [
        "Learn from Leaders: Collaborate with industry experts who possess extensive experience in game design, programming, and production.",
        "Career Guidance: Receive advice on navigating the gaming industry and building a successful career.",
      ],
    },
 {
  question: "Recognition & Opportunities",
  answer: [
    "<strong>Award-Winning Projects:</strong> Contribute to games that have received recognition at:",
    "<ol type='a' class='inner-list'>\
      <li>Shortlisted in Indie 40 Games at IGDC 2024</li>\
      <li>Student Game of the Year nominations at IGDC 2024</li>\
      <li>Showcased at prestigious Gaming Expos</li>\
    </ol>",
    "<strong>Global Exposure:</strong> Showcase your games on global platforms and connect with industry leaders."
  ],
},

    {
      question: "Professional Portfolio",
      answer: [
        "<strong>Showcase Your Work:</strong> Develop a striking portfolio that showcases refined, professional-quality projects.",
        "<strong>Future-Ready:</strong> Engage potential employers and collaborators with your varied skills and accomplishments.",
      ],
    },
    {
      question: "Revenue-Sharing Opportunities",
      answer: [
        "Earn While You Learn: Take advantage of a unique revenue-sharing model that acknowledges your hard work and creativity.",
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

  const toggleFAQacc = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqswhy = [
    {
      question: "Cutting-Edge Learning Environment",
      answer: [

        "Collaborate with peers from various disciplines—designers, artists, and developers—in a team-oriented environment that reflects the gaming industry.",
      ],
    },
    {
      question: "Dedicated Project Support",
      answer: [
        "End-to-End Guidance: Our experienced team ensures every aspect of your project operates smoothly.",
        "Structured Milestones: Follow a clear roadmap to bring your ideas to life efficiently and effectively.",
      ],
    },
    {
      question: "Global Recognition",
      answer: [
        "Showcase your work at major events like IGDC (India Game Developer Conference).",
        "Gain exposure in international markets and forge meaningful industry connections.",
      ],
    },

  ];
  const [openIndex1, setOpenIndex1] = useState(null);

  const toggleFAQwhy = (indexw) => {
    setOpenIndex1(openIndex1 === indexw ? null : indexw);
  };

  return (
    <>

      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'MobileClassacctr' : 'AcceleratorB'}`}>
        <div className="et_pb_row et_pb_row_0">

          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">The Accelerator</h1></div>
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
              "name": "Game Development Accelerator Program | Backstage Pass Institute of Gaming",
              "item": "https://www.backstagepass.co.in/life-at-bsp/accelerator-program/"  
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
                "target": "https://www.backstagepass.co.in/life-at-bsp/accelerator-program/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
              `}
          </script>

          <title>Game Development Accelerator Program | Backstage Pass Institute of Gaming</title>

          <meta property="og:title" content="Game Development Accelerator Program | Backstage Pass Institute of Gaming" />
          <meta property="og:description" name="description" content="With Backstage Pass Gaming Accelerator Program, students have developed & published award-winning games. They also gained global exposure & mentorship to launch their own gaming studios." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/accelerator-program/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/accelerator-program/" />

        </Helmet>

        <div className="courses-wrapper223" style={{backgroundColor:"#f9fafb",boxShadow:"0 2px 15px 5px rgba(0, 0, 0, 0.1)",padding:"12px"}}>
          <h2 className="mainHeadingTotal">The Accelerator Program
          </h2>

          <p className='suprtst' style={{ width: "85%" }}>The Accelerator Program is designed to equip Backstage Pass students with the skills, mentorship, and resources needed to develop industry-ready games. This program enhances students’ game development skills while fostering teamwork, creativity, and innovation.
          </p>

        </div>
        <div className="courses-wrapper223">
          <h2 className="mainHeadingTotal" >Program Overview
          </h2>

          <p className='suprtst' style={{ width: "85%" }}>The Accelerator Program combines practical experience, expert mentorship, and industry exposure to prepare students for success in the global gaming market. By participating, you  will gain access to resources and opportunities to:
          </p>

          <ul style={ulStyle} className='pdna lftpoints'>
            <li style={liStyle}><span style={boldStyle}>Real-World Projects:</span> Collaborate on advanced game development projects.</li>
            <li style={liStyle}><span style={boldStyle}>Global Networking:</span> Showcase your creations at top gaming conferences and expos.</li>
            <li style={liStyle}><span style={boldStyle}>Recognition:</span> Become part of a community of award-winning student developers.</li>
          </ul>
        </div>

        <div id="Career-Opportunitiesacc" style={{ backgroundColor: "#f9fafb", overflow: "hidden",boxShadow:"0 2px 15px 5px rgba(0, 0, 0, 0.1)" }} >

          <div className='coppertunitiesacce'>
            <div className='left'>
              <img src={c1a} alt="careerop" />
            </div>

            <div className="right career-tabs-container">
              {/* Tabs */}


              <section className="max-w-3xl mx-auto p-6 iconsv" style={{ background: "#f9fafb", color: "#000", width: isMobileState ? "100%" : "80%", margin: "0px" }}>
                <h2 className='courseHeading fadeInUp anime-delay' style={{
                  textAlign: isMobileState ? "center" : "center",
                  width: isMobileState ? "100%" : "80%",
                  lineHeight: isMobileState ? "48px" : "48px",
                  wordWrap: "break-word"
                }}>What You’ll Gain

                </h2>
                <div className="brname"></div>
                <div className="border rounded-lg bg-white" style={{ marginTop:isMobileState?"0px":"30px" }}>
                  {faqsac.map((faq, index) => (
                    <div
                      key={index}
                      className="p-4 inline-block justify-start" style={{ borderBottom: "1px solid#d8d7d7", width: "100%", margin: "0px auto" }}>
                      <button
                        className="w-full flex justify-center items-center text-left btnplusacc"
                        onClick={() => toggleFAQacc(index)}
                        style={{
                          background: "#f9fafb",
                          color: "#000",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
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
                        <span className="faqquestionacc text-lg font-medium text-gray-800" style={{
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
 <li
  key={i}
  style={{
    listStyle: point.includes("<ol") ? "none" : "disc",
    fontSize: "14px",
    paddingLeft: point.includes("<ol") ? "0" : undefined,
  }}
  dangerouslySetInnerHTML={{ __html: point }}
/>


                            
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
        <div id="Career-Opportunitiesacc" style={{ backgroundColor: "#fff", overflow: "hidden", marginTop:"12px" }} >

          <div className='coppertunitiesacce'>


            <div className="left career-tabs-container">
              {/* Tabs */}


              <section className="max-w-3xl mx-auto p-6 iconsv" style={{ background: "#fff", color: "#000", width: isMobileState ? "100%" : "80%", margin: "0px" }}>
                <h2 className='courseHeading fadeInUp anime-delay' style={{
                 textAlign: isMobileState ? "center" : "center",
                  width: isMobileState ? "100%" : "80%",
                  lineHeight: isMobileState ? "48px" : "48px",
                  wordWrap: "break-word"
                }}>Why Choose Us?

                </h2>
                <div className="brname"></div>
                <div className="border rounded-lg bg-white" style={{ marginTop:isMobileState?"0px":"30px", padding:"10px" }}>
                  {faqswhy.map((faqw, indexw) => (
                    <div
                      key={indexw}
                      className="p-4 inline-block justify-start" style={{ borderBottom: "1px solid#d8d7d7", width: "100%", margin: "0px auto" }}>
                      <button
                        className="w-full flex justify-center items-center text-left btnplusacc"
                        onClick={() => toggleFAQwhy(indexw)}
                        style={{
                          background: "#fff",
                          color: "#000",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
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
                          {openIndex1 === indexw ? (
                            <FaMinus className="w-3 h-3" />
                          ) : (
                            <FaPlus className="w-3 h-3" />
                          )}
                        </span>
                        <span className="faqquestionacc text-lg font-medium text-gray-800" style={{
                          paddingLeft: "20px",
                          textAlign: "justify",
                          lineHeight: "24px",
                          fontSize: "16px"
                        }}>
                          {faqw.question}
                        </span>


                      </button>

                      {openIndex1 === indexw && (
                        <ul style={{ paddingLeft: "6.5rem", lineHeight: "1.9" }}>
                          {faqw.answer.map((pointw, p) => (
                            <li key={p} style={{ listStyle: "disc", fontSize:"14px" }}>{pointw}</li>
                          ))}
     

                        </ul>
                      )}
                    </div>
                  ))}
                </div>



              </section>

            </div>
            <div className='right'>
              <img src={c2a} alt="careerop" />
            </div>
          </div>
        </div>
     
      </div>

    </>
  )
}



export default Courses;

