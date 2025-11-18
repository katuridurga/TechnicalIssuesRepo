import React from 'react'
import "./SiteMaps.css";
import { Helmet } from "react-helmet";
import  {useSelector, shallowEqual}  from "react-redux";


const ulStyle = {
  listStyleType: 'disc',  // Set the bullet point style
   paddingLeft: '200px', 
  color:'#000', 
  // textAlign:'center',  // Indentation for the bullets
};

const liStyle = {
  marginBottom: '8px',    // Space between each bullet point
  fontSize: '16px', 
  // paddingLeft: '200px', 
  color:'#000', 
  
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
   
        <div className="">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Sitemap
              </h1></div>
            </div>
          </div>
        </div>
    
      <div className="courses-container">
       <Helmet>
               <title>Sitemap | Backstage Pass Institute of Gaming - Explore All Pages
               </title>
               <meta  name="description" content="Easily navigate through all the important pages of Backstage Pass Institute of Gaming. Find course details, admissions, alumni success stories, and more." />
             <link rel="canonical" href="https://backstagepass.co.in/sitemap/"/>
     
     
             </Helmet>
        <div className="courses-wrapper">
          <div className="testcontent">
        <ul style={ulStyle} className='pdns'>
         
         <li style={liStyle}><span style={boldStyle}>Courses</span>  </li>
       <li style={{marginLeft:"20px", marginBottom:"10px", listStyleType:"circle"}}><span>Bachelor's</span>  </li>
    <ul className="innerc">
     <li>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/bachelors-in-computer-science-and-game-development/"> Computer Science & Game Development</a>
       </div>
       </li>
       <li>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/bachelors-in-game-art-and-design/"> Game Art & Design</a>
       </div>
    
       </li>
       <li>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/bachelors-in-augmented-reality-and-virtual-reality/">Augmented Reality & Virtual Reality </a>
       </div>
       </li>
       </ul>

                 <li style={{marginLeft:"20px", marginBottom:"10px",  listStyleType:"circle"}}><span style={{marginBottom:"10px"}}>Master's </span>
                 <ul className="innerc"> 
                  <li style={{marginTop:"10px"}}>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/masters-in-game-technology/">Game Technology</a>
       </div>
       </li>
       <li style={{marginTop:"10px"}}>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/masters-in-3d-game-art-design/">3D Game Art & Game Design</a>
       </div>
       </li>
       </ul>
       </li>
       
       <li style={{marginLeft:"20px", marginBottom:"10px",  listStyleType:"circle"}}><span style={{marginBottom:"10px"}}>Diploma</span> 
       <ul className="innerc"> 
       <li  style={{marginTop:"10px"}}>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/diploma-in-game-design-production/">Game Design & Production</a>
       </div>
       </li>
       <li>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/diploma-in-game-development-with-unity/">Game Development with Unity</a>
       </div>
       </li>
       <li>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/diploma-in-3d-environment-art-creation-for-games/">3D Environment Art For Games</a>
       </div>
       </li>
       </ul>
       </li>
      
       
       <li style={{marginLeft:"20px", marginBottom:"10px", listStyleType:"circle"}}><span style={{marginBottom:"10px"}}>Advanced Diploma</span> 
       <ul className="innerc"> 
<li  style={{marginTop:"10px"}}>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/advanced-diploma-in-game-development/">Game Development</a>
       </div>
       </li>
       <li>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/advanced-diploma-in-3d-game-art-digital-sculpting/">3D Game Art & Digital Sculpting</a>
       </div>
       </li>
       <li>
       <div style={{marginBottom: '10px', marginLeft: isMobileState ? '10px':"0px" }}>
       <a href="/courses/advanced-diploma-in-traditional-digital-art/">Traditional & Digital Concept Art</a>
       </div>
       </li>

      </ul>
      </li>
      <li style={{marginBottom:"10px"}}><span style={boldStyle}>About Us</span>  </li>
         <ul className='innerc'>
       <li style={liStyle} ><a href="/about-us/our-story/">Our story</a></li>
       <li style={liStyle}><a href="/about-us/affiliation-collaboration/">Affiliation</a></li>
       <li style={liStyle}><a href="/about-us/placement-support/">Placement Support</a></li>
       </ul>
       <li style={{marginBottom:"10px"}}><span style={boldStyle}>Admissions</span>  </li>

         <ul className='innerc'>
       <li  style={{marginLeft:"20px"}}><span><a href="/admissions/admission-process/">Admission Process</a></span></li>
       <li  style={{marginLeft:"20px"}}><span><a href="/admissions/financial-assistance-and-scholarship/">Financial Assistance</a></span></li>
       </ul>
       <li style={{marginBottom:"10px"}}><span style={boldStyle}>Life @ BSP</span>  </li>

         <ul className='innerc'>
       <li style={liStyle}><a href="/life-at-bsp/alumni-success/">Alumni Success</a></li>
       <li style={liStyle}><a href="/life-at-bsp/student-artwork-and-games/">Student Art works & games</a></li>
       <li style={liStyle}><a href="/life-at-bsp/student-awards/">Student Awards</a></li>
       <li style={liStyle}><a href="/life-at-bsp/accelerator-program/">Accelerator Program</a></li>
       <li style={liStyle}><a href="/life-at-bsp/facilities/">Hostel Facilities</a></li>
       </ul>
       <li style={{marginBottom:"10px"}}><span style={boldStyle}><a href="/blogs/" style={{color:"#000"}}>Blogs</a></span>  </li>
       <li><span style={boldStyle}><a href="/contactus/" style={{color:"#000"}}>Contact Us</a></span></li>    
        </ul>
        </div>
        </div>
        
       
        </div>

      </>
    )
}



export default Courses;

