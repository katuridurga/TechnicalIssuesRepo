import React from 'react'
import "./Privacy.css";

import { Helmet } from "react-helmet";
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
// const boldStyle = {
//   fontWeight: 'bold',     // Bold text
//   fontSize: '18px',       // Larger font size
// };

// const numStyle = {
//   marginBottom: '0px',
//   textAlign: 'left', 
//   marginLeft: '100px', 
// };

function Courses(props) {
//   const isMobileState = useSelector(
//     state => state.mainReducer.isMobile,
//     shallowEqual
// );
  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Privacy Policy</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-container">
        <Helmet>
          <title>Privacy Policy | Backstage Pass Institute of Gaming
          </title>
          <meta  name="description" content="Learn how Backstage Pass Institute of Gaming collects, uses, and protects your data. Read our privacy practices for complete transparency and trust." />
          <link rel="canonical" href="https://www.backstagepass.co.in/privacy-policy/"/>

        </Helmet>

        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Privacy Policy
        </h3>

          <p className='suprtst'>At Backstage Pass, we are committed to protecting your privacy. This Privacy Policy outlines how we handle and safeguard your personal information.
          </p>
        
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Security of Personal Information
        </h3>

          
          <ul style={ulStyle} className='pdn'>
        <li style={liStyle}>We take practical steps to safeguard your Personal Information from unauthorized access, alteration, or disclosure.
        </li>
        <li style={liStyle}>Sensitive data is transmitted using encryption for additional protection.</li>
      
      </ul>
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >User Control Over Personal Information
        </h3>

          
          <ul style={ulStyle} className='pdn'>
        <li style={liStyle}>You can choose whether or not to provide your Personal Information. Choosing not to do so may limit your access to certain services, offers, or features.

        </li>
        <li style={liStyle}>If you provide Personal Information, we aim to keep it accurate and up-to-date. You may contact us to update or correct your information.</li>
      
      </ul>
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Use of Personal Information
        </h3>

          
          <ul style={ulStyle} className='pdn'>
        <li style={liStyle}>Personal Information is used primarily to respond to inquiries, process orders, and provide access to certain services.
      </li>
        <li style={liStyle}>
          We may use Personal Information for internal research, marketing, and strategic analysis.
           </li>
        <li style={liStyle}>Your information will be kept confidential unless required by law (e.g., court orders) or with your consent for third-party sharing.</li>
      
      </ul>
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Cookies
        </h3>

          
          <ul style={ulStyle} className='pdn'>
        <li style={liStyle}>We use cookies to analyze web traffic and improve the functionality of the website, such as enhancing searchability and usability.
      </li>
        <li style={liStyle}>
        Cookies do not access any of your system data or personal information beyond what you’ve voluntarily provided.

           </li>
        <li style={liStyle}>If you prefer to disable cookies, you can adjust your browser settings.</li>
      
      </ul>
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Data Sharing & Disclosure
        </h3>

          
          <ul style={ulStyle} className='pdn'>
        <li style={liStyle}>We will not transfer your Personal Information to third parties without your consent, except when legally required.
      </li>
        <li style={liStyle}>
        In case we need to share your data for any purpose, we will inform you in advance or as required by law.
     </li>
  
      
      </ul>
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Changes to Privacy Policy
        </h3>

          
          <ul style={ulStyle} className='pdn'>
        <li style={liStyle}>This Privacy Policy may be updated periodically, and changes will be made at our sole discretion without prior notice.
      </li>
        <li style={liStyle}>
        You are encouraged to review this policy regularly for any updates.
     </li>
  
      
      </ul>
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Contact Information
        </h3>

          
          <ul style={ulStyle} className='pdn'>
        <li style={liStyle}>If you have any questions or concerns about this Privacy Policy, or if you notice any abusive or plagiarized content, please reach out to us at <a href="mailto:info@backstagepass.co.in" rel="noopener noreferrer" style={{color:"#ec1925"}}>info@backstagepass.co.in</a>.
      </li>
       
  
      
      </ul>
        </div>
        </div>

      </>
    )
}



export default Courses;

