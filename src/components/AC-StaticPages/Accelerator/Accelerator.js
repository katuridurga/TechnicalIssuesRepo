import React from 'react'
import "./Accelerator.css";

import { useSelector, shallowEqual } from "react-redux";



import { Helmet } from "react-helmet";
const ulStyle = {
  listStyleType: 'disc',  // Set the bullet point style
  //  paddingLeft: '200px', 
  color: '#fff',
  // textAlign:'center',  // Indentation for the bullets
};

const liStyle = {
  margin: '8px',    // Space between each bullet point
  fontSize: '16px',
  // paddingLeft: '200px', 
  color: '#fff',

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
          <meta property="og:description" content="With Backstage Pass Gaming Accelerator Program, students have developed & published award-winning games. They also gained global exposure & mentorship to launch their own gaming studios." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/accelerator-program/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/accelerator-program/" />

        </Helmet>

        <div className="courses-wrapper223">
          <h3 className="mainHeadingTotall-2">The Accelerator Program
          </h3>

          <p className='suprtst' style={{ width: "85%" }}>The Accelerator Program is designed to equip Backstage Pass students with the skills, mentorship, and resources needed to develop industry-ready games. This program enhances students’ game development skills while fostering teamwork, creativity, and innovation.
          </p>

        </div>
        <div className="courses-wrapper223">
          <h3 className="mainHeadingTotall-2" >Program Overview
          </h3>

          <p className='suprtst' style={{ width: "85%" }}>The Accelerator Program combines practical experience, expert mentorship, and industry exposure to prepare students for success in the global gaming market. By participating, you  will gain access to resources and opportunities to:
          </p>

          <ul style={ulStyle} className='pdna lftpoints'>
            <li style={liStyle}><span style={boldStyle}>Real-World Projects:</span> Collaborate on advanced game development projects.</li>
            <li style={liStyle}><span style={boldStyle}>Global Networking:</span> Showcase your creations at top gaming conferences and expos.</li>
            <li style={liStyle}><span style={boldStyle}>Recognition:</span> Become part of a community of award-winning student developers.</li>
          </ul>
        </div>
        <div className="courses-wrapper223">
          <h3 className="mainHeadingTotall-2" >What You’ll Gain
          </h3>
          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>1.	Hands-On Game Development</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}><span style={boldStyle}>Practical Experience:</span> Work on real-world projects that simulate industry challenges.</li>
            <li style={liStyle}><span style={boldStyle}>Creative Freedom:</span> Design, develop, and refine your unique ideas into market-ready games.</li>

          </ul>
          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>2.	Expert Mentorship</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}><span style={boldStyle}>Learn from Leaders:</span> Collaborate with industry experts who possess extensive experience in <br />game design, programming, and production.</li>
            <li style={liStyle}><span style={boldStyle}>Career Guidance:</span> Receive advice on navigating the gaming industry and building a successful career.</li>
          </ul>
          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>3.	Recognition & Opportunities</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}><span style={boldStyle}>Award-Winning Projects:</span>  Contribute to games that have received recognition at:</li>
            <div style={{ marginBottom: '10px', marginLeft: isMobileState ? '10px' : "10px" }}>
              a. Shortlisted in Indie 40 Games at IGDC 2024
            </div>
            <div style={{ marginBottom: '10px', marginLeft: isMobileState ? '10px' : "10px" }}>
              b. Student Game of the Year nominations at IGDC 2024
            </div>
            <div style={{ marginBottom: '10px', marginLeft: isMobileState ? '10px' : "10px" }}>
              c. Showcased at prestigious Gaming Expos.
            </div>

            <li style={liStyle}><span style={boldStyle}>Global Exposure:</span> Showcase your games on global platforms and connect with industry leaders.</li>
          </ul>
          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>4.	Professional Portfolio</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}><span style={boldStyle}>Showcase Your Work:</span>  Develop a striking portfolio that showcases refined, professional-quality projects.</li>
            <li style={liStyle}><span style={boldStyle}>Future-Ready:</span>  Engage potential employers and collaborators with your varied skills and accomplishments.</li>
          </ul>

          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>5.	Revenue-Sharing Opportunities</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}><span style={boldStyle}>Earn While You Learn:</span>  Take advantage of a unique revenue-sharing model that acknowledges <br />your hard work and creativity.</li>

          </ul>
        </div>
        <div className="courses-wrapper223">
          <h3 className="mainHeadingTotall-2" >Why Choose Us?
          </h3>
          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>1.	Cutting-Edge Learning Environment</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}>Collaborate with peers from various disciplines—designers, artists, and developers—in a team-oriented <br />environment that reflects the gaming industry.</li>
          </ul>
          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>2.	Dedicated Project Support</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}><span style={boldStyle}>End-to-End Guidance:</span> Our experienced team ensures every aspect of your project operates smoothly.</li>
            <li style={liStyle}><span style={boldStyle}>Structured Milestones:</span> Follow a clear roadmap to bring your ideas to life efficiently and effectively.</li>
          </ul>
          <p className='suprtst' style={{ width: isMobileState ? "90%" : "75%", marginBottom: "0px" }}>
            <span style={boldStyle}>3.	Global Recognition</span>
          </p>
          <ul style={ulStyle} className='pdna lefcontac'>
            <li style={liStyle}> Showcase your work at major events like IGDC (India Game Developer Conference).</li>
            <li style={liStyle}> Gain exposure in international markets and forge meaningful industry connections.</li>
          </ul>
        </div>
      </div>

    </>
  )
}



export default Courses;

