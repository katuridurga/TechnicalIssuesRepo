import React from 'react'
import "./Mentors.css";
import HomeContent from "../../../content/HomeContent";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import courseBanner from "../../../assets/img/banners/CSGD.webp";
import ScrollSpy from "react-ui-scrollspy";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import mentor1 from "../../../assets/img/test/mentor1.webp"
import men2 from "../../../assets/img/test/men2.webp"


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








function Mentors(props) {

  

  return (
    <>
      <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
      <div className="courses-container">
        <Helmet>
          <title>Mentors</title>
          <meta name="description" content="Mentors" />
        </Helmet>

        <div className="courses-wrapper">





          <div className="CourseesOverView">
         
            <div style={{width: "70%"}}>
            

              <div className="">
                <div
                // style={{
                //   position: "relative",
                //   overflowY: "scroll",
                //   height: "50vh",
                // }}
                >
                  <ScrollSpy
                    // parentScrollContainerRef={parentScrollContainerRef}
                    activeclassName="ss-active-demo-2"
                    offsetBottom={100}
                    scrollThrottle={80}
                    useBoxMethod
                  >
       

                    <div id="Featured-Mentors" backgroundColor="brown" height="150vh">
                      <h2 className='mainHeadingTotal'>Featured Mentors</h2>

                      <div className="card__collection clear-fix">
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>

                      </div>


                    </div>
                  </ScrollSpy>
                </div>
              </div>


            </div>
          </div>




        </div>






      </div>
      <div id="Why-BSP">
        <HomeContent />
      </div>
    </>
  )
}

export default Mentors;

