import React, { useState, useEffect } from 'react'
import "./DiplomaAndAdvancedDiplomaCourses.css";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import ic13 from '../../../assets/img/Icons/WEBSITE-ICON/short-term.webp';
import Box from '@mui/material/Box';
import { useSelector, shallowEqual } from "react-redux";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import ic7 from '../../../assets/img/Icons/WEBSITE-ICON/gaming-career.webp';
import ic8 from '../../../assets/img/Icons/WEBSITE-ICON/switch-gaming-career.webp';
import ic9 from '../../../assets/img/Icons/WEBSITE-ICON/career-opt.webp';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

function DiplomaAndAdvancedDiplomaCourses({ active, props }) {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setShowBanner(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  }, [showBanner]);


  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const [isOpenM, setIsOpenM] = useState(false);

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Function to scroll to the bottom of the container
  const scrollToBottom = () => {
    const container = document.getElementById('scroll-container');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });

    }
    // Hide the button after clicking
    setIsButtonVisible(true);
  };

  
    
  
    const handleClickss = () => {
      // Redirect to the '/new-page' route
      window.open('https://backstagepass.co.in/landingpage/short-course/', '_blank'); 
    };

  // Handle scroll event
  const handleScroll = () => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
      //alert(isAtBottom);
      // Show the button when scrolling up
      if (!isAtBottom) {
        setIsButtonVisible(true);
        // alert("Sivak");
      } else {
        setIsButtonVisible(false);
        // alert("Ram");
      }
    }
  };

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);

    }

    // Clean up the event listener
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);

      }
    };
  }, []);


  return (
    <>
      <Helmet>
        <title> Game Design with Unreal Blueprints	 | Backstage Pass
        </title>
        <meta  name="description" content="Game Design with Unreal Blueprints" />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>



            <a onClick={scrollToBottom}>
              <div className={`et_pb_section bgimage et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'DGAMEDEVELOPMENTWITHUNITY1mc' : 'DGAMEDEVELOPMENTWITHUNITY1'}`}>

                <div className="et_pb_row et_pb_row_0">
                  <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                    <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                      <div className="et_pb_text_inner"><h1 className="title white-txt">Game Design with Unreal Blueprints</h1></div>
                    </div>
                  </div>
                </div>
              </div>

            </a>


            {/* <div className="mainrec22s">
              <img src={recimg} alt="recimg" style={{ width: "100%", height: "100%" }} />

            </div> */}
            <div className='eldiv'>
              <ul className='elm'>
                <li><b>Duration</b>: 3 months (120 hours)</li>
                <li><b>Mode</b>: Online Live & Interactive
                </li>
                <li><b>Fees</b>: ₹55,000/-
                </li>
              </ul>
            </div>

            


            <div className='courseObj'>
              <h2>Course Modules</h2>
              <ul>
                <li>Game Design Principles</li>
                <li> Level Design & World Building</li>
                <li>Introduction to Unreal Blueprints</li>
                <li>Game Prototype & Mechanics Development</li>
                <li> Game Production & Project Management</li>
              </ul>
            </div>

            <div className='courseObj'>
              <h2>Key Takeaways</h2>
              <ul>
              <li>Hands-on Unreal Engine and Blueprint scripting</li>
    <li>Develop game prototypes without coding</li>
    <li>UI/UX design, AI behavior design, game balancing</li>
    <li>Project management fundamentals</li>
    <li>Game design portfolio</li>
              </ul>
            </div>


            








            <h2 className='mainHeadingTotall-2'>Career Opportunities</h2>
            
            <ul className="featuress3u">
  <li>
    <img src={ic9} alt="Game Designer" />
    <div className="featuresscon2">Game Designer</div>
  </li>

  <li>
    <img src={ic8} alt="Level Designer" />
    <div className="featuresscon2">Level Designer</div>
  </li>

  <li>
    <img src={ic7} alt="Blueprint Scripter" />
    <div className="featuresscon2">Blueprint Scripter</div>
  </li>

  <li>
    <img src={ic13} alt="Game Producer" />
    <div className="featuresscon2">Game Producer</div>
  </li>

  <li>
    <img src={ic9} alt="Indie Game Developer" />
    <div className="featuresscon2">Indie Game Developer</div>
  </li>

  <li>
    <img src={ic8} alt="VR/AR Content Creator" />
    <div className="featuresscon2">VR/AR Content Creator</div>
  </li>

  <li>
    <img src={ic7} alt="Technical Game Designer" />
    <div className="featuresscon2">Technical Game Designer</div>
  </li>
</ul>
            









            <div className="CousellingButton1 tetstL1" onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px" }} onClick={() => setIsOpenM(true)}>Download Brochure
            </button> </div>








          </div>


        </div>
      </div>
      {isButtonVisible && (
        <div className="CousellingButton1 tetstL1" style={{ marginBottom: "0px" }} onClick={scrollToBottom}><button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px", marginRight: "20px" }} onClick={() => setIsOpenM(true)}>Download Brochure
        </button>  <button className="dwnbtn three w-full sm:w-auto" style={{ width: "450px" }} onClick={handleClickss}>Pay Now
          </button> </div>
      )}

    </>
  )
}

export default DiplomaAndAdvancedDiplomaCourses;

