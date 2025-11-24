import React from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "./StudentShowcase.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import awardtwo from "../../../assets/img/awards/newgdc.webp"
import awardthree from "../../../assets/img/awards/IGDC19.webp"
import awardone from "../../../assets/img/awards/NGDC.webp"
import awardfive from "../../../assets/img/awards/competition.webp"
import awardfour from "../../../assets/img/awards/igdc2025.jpg"
import awardsix from "../../../assets/img/awards/IGDC23.webp"
import awardseven from "../../../assets/img/awards/GEM-AWARDS-2025.webp"

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




const StyledBreadcrumb = styled(Chip)(({ theme, Props }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function StudentShowcase(props) {


  const [value, setValue] = React.useState(0);



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
<meta name="description" content="From classroom to competition stage—see how Backstage Pass students are winning awards and getting noticed in the gaming world." />
<meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/student-awards/" />
              <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/student-awards/" />
            </Helmet>
        <div className="courses-wrapper">
          <div className="CourseesOverViewsh courseover1" style={{marginTop: isMobileState ? "0px" : "0px"}}>
            <h2 className="mainHeadingTotal">Student Awards</h2>
 
            <p className="suprtsMobile" style={{color:"#000",marginBottom:isMobileState?"0px" : "10px"}}>The Student Showcase is a celebration of excellence, where our brightest minds present their projects, games, and animations. This is a space to highlight the achievements of our students and demonstrate the cutting-edge work being produced at Backstage Pass Institute.
            </p>
          

                <div class="containergaward">
                <div class="cardsgaward">
                 <img src= {awardseven} alt="awardseven"/>
                 <div class="overlaysaward">
                   <h3>GEM Award 2025 - Best Hyper Casual Game</h3>
                  
                 </div>
               </div>
                <div class="cardsgaward">
                 <img src= {awardsix} alt="awardsix"/>
                 <div class="overlaysaward">
                   <h3>Student Game of the Year at IGDC 2023</h3>
                  
                 </div>
               </div>
               <div class="cardsgaward">
                 <img src= {awardone} alt="awardone"/>
                 <div class="overlaysaward">
                   <h3>Casual connect 2015</h3>
                
                 </div>
               </div>
               <div class="cardsgaward">
                 <img src= {awardfour} alt="awardtwo" style={{objectFit:isMobileState?"cover":"contain"}}/>
                 <div class="overlaysaward">
                   <h3>Student Game of the year at IGDC 2025</h3>
                   
                 </div>
               </div>
               <div class="cardsgaward">
                 <img src= {awardthree} alt="awardthree" style={{height: isMobileState ? "187px" : "100%"}}/>
                 <div class="overlaysaward">
                   <h3>Student game of the year at IGDC 2019</h3>
                 </div>
               </div>
               {/* <div class="cardsgaward">
                 <img src= {awardfour} alt="awardfour"/>
                 <div class="overlaysaward">
                   <h3>Hyper casual Game of the year- Student Game of the year at IGDC 2022</h3>
                 </div>
               </div> */}
               <div class="cardsgaward">
                 <img src= {awardfive} alt="awardfive"/>
                 <div class="overlaysaward">
                   <h3>In house Game development competition 2023 </h3>
                   
                 </div>
               </div>
               
              
             
             </div>
            {/* <h3 className="mainHeadingTotal">Student Artwork</h3>

<p className="suprts">Here are some of our student games - both published and unpublished</p>
{isMobileState ?

 <div>
   <div class="top-section">
      <div class="left-column">
        <img src={art1} alt="Art 1"/>
        <img src={art3} alt="Art 2"/>
        
      </div>
      <div class="right-main">
        <img src={art4} alt="Main Art"/>
        <img src={art6} alt="Main Art"/>
    
      </div>
      </div> 
        <div class="top-section">
      <div class="right-main">
       <img src={art2} alt="Art 3"/> 
      <img src={art5} alt="Wide Art"/>
   
      </div>
      <div class="left-column">
      <img src={art7} alt="Main Art"/>
      <img src={art8} alt="Main Art"/>
        </div>
    </div>
   
    {/* <div class="msgallery">
      <div class="large-image"><img src={art1} alt="art1" /></div>
      <div class="small-column">
        <img src={art3} alt="art3"/>
        <img src={art2} alt="art2"/>
      </div>
      <div class="large-image">
      <img src={art4} alt="art4" class="wide"/></div>
      
      <img src={art5} alt="art5" class="highlight"/>
      <img src={art6} alt="art6" class="portrait"/>
      <img src={art7} alt="art7" class="landscape"/>
    </div> */}
 
  {/* <div>
    <ul className='mbimg1'>
      <li><img src={art1} alt="art" /></li>
      <li><img src={art3} alt="art" /></li>
      <li><img src={art2} alt="art" /></li>
      <li><img src={art4} alt="art" /></li>
      <li><img src={art5} alt="art" /></li>
      <li><img src={art6} alt="art" /></li>
      <li><img src={art7} alt="art" /></li>
   <li><img src={art8} alt="art" /></li> 
    </ul>
  </div> 
</div> :
            

            <div className="gll">

              <div className="g1">
                <img src={art1} alt="artimg" />
              </div>
              <div className="g1">
                <img src={art3} alt="artimg" />
              </div>
              <div className="g1">
                <img src={art2} alt="artimg" className='lngimg' />
              </div>
              <div className="g1">
                <img src={art4} alt="artimg" />
              </div>
              <div className="g1">
                <img src={art5} alt="artimg" />
              </div>
              <div className="g1">
                <img src={art6} alt="artimg"  className='maimg'/>
              </div>
              <div className="g1">
                <img src={art7} alt="artimg" />
              </div>
              <div className="g1">
                <img src={art8} alt="artimg" />
              </div>


            

            </div>} */}

          </div>







        </div>
      </div>

    </>
  )
}

export default StudentShowcase;