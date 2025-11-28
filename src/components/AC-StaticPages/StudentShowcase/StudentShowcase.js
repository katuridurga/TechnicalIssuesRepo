import React from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "./StudentShowcase.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import awardthree from "../../../assets/img/awards/IGDC19.webp"
import awardone from "../../../assets/img/awards/NGDC.webp"
import awardfive from "../../../assets/img/awards/competition.webp"
import awardfour from "../../../assets/img/awards/igdc2025.jpg"
import awardsix from "../../../assets/img/awards/IGDC23.webp"
import awardseven from "../../../assets/img/awards/GEM-AWARDS-2025.webp"
import awardeight from "../../../assets/img/awards/JayJainAward.webp"
import { Helmet } from "react-helmet";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};





function StudentShowcase(props) {





  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'MobileClassstaw' : 'staw'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Student Awards</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-containerss">
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
          "name": "Student Awards & Achievements | Backstage Pass",
          "item": "https://www.backstagepass.co.in/life-at-bsp/student-awards/"  
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
          "target": "https://www.backstagepass.co.in/life-at-bsp/student-awards/{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
        `}
          </script>
          <title>Student Awards & Achievements | Backstage Pass</title>

          <meta property="og:title" content="Student Awards & Achievements | Backstage Pass" />
          <meta property="og:description" name="description" content="From classroom to competition stage—see how Backstage Pass students are winning awards and getting noticed in the gaming world." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/student-awards/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/student-awards/" />
        </Helmet>
        <div className="courses-wrapper">
          <div className="CourseesOverViewsh courseover1" style={{ marginTop: isMobileState ? "0px" : "0px" }}>
            <h2 className="mainHeadingTotal">Student Awards</h2>

            <p className="suprtsMobile" style={{ color: "#000", marginBottom: isMobileState ? "0px" : "10px" }}>The Student Showcase is a celebration of excellence, where our brightest minds present their projects, games, and animations. This is a space to highlight the achievements of our students and demonstrate the cutting-edge work being produced at Backstage Pass Institute.
            </p>


            <div class="containergaward">
                    <div class="cardsgaward">
                <img src={awardfour} alt="awardtwo" style={{ objectFit: isMobileState ? "cover" : "contain" }} />
                <div class="overlaysaward">
                  <h3>Student Game of the year at IGDC 2025</h3>

                </div>
              </div>
                  <div class="cardsgaward">
                <img src={awardeight} alt="awardtwo" style={{ objectFit: isMobileState ? "cover" : "contain" }} />
                <div class="overlaysaward">
                  <h3>Student Game of the year - <br/>runner-up at IGDC 2025</h3>

                </div>
              </div>
              <div class="cardsgaward">
                <img src={awardseven} alt="awardseven" />
                <div class="overlaysaward">
                  <h3>GEM Award 2025 - Best Hyper Casual Game</h3>

                </div>
              </div>
              <div class="cardsgaward">
                <img src={awardsix} alt="awardsix" />
                <div class="overlaysaward">
                  <h3>Student Game of the Year at IGDC 2023</h3>

                </div>
              </div>
              <div class="cardsgaward">
                <img src={awardone} alt="awardone" />
                <div class="overlaysaward">
                  <h3>Casual connect 2015</h3>

                </div>
              </div>
        
              <div class="cardsgaward">
                <img src={awardthree} alt="awardthree" style={{ height: isMobileState ? "187px" : "100%" }} />
                <div class="overlaysaward">
                  <h3>Student game of the year at IGDC 2019</h3>
                </div>
              </div>
             
              <div class="cardsgaward">
                <img src={awardfive} alt="awardfive" />
                <div class="overlaysaward">
                  <h3>In house Game development competition 2023 </h3>

                </div>
              </div>



            </div>
     

          </div>







        </div>
      </div>

    </>
  )
}

export default StudentShowcase;