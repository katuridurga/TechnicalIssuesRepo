import React, { useRef } from 'react'
import "./Workshop.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import courseBanner from "../../../assets/img/banners/CSGD.webp";
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import b1 from "../../../assets/img/games/1.webp";
import b11 from "../../../assets/img/games/11.webp";
import b3 from "../../../assets/img/games/3.webp";
import b4 from "../../../assets/img/games/4.webp";

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
});

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Workshop(props) {


  

  return (
    <>
      <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
      <div className="courses-container">
        <Helmet>
          <title>Alumni</title>
          <meta name="description" content="Alumni" />
        </Helmet>

        <div className="courses-wrapper">





          <div className="CourseesOverVieww">
            <div className="courses-wrapper">
              <div className="CourseesOverVieww">

                <p className="suprts">At Backstage Pass, we are firm believers of knowledge beyond academics. Which is why we ensure our students get to participate in every event, workshop, webinar and more such events to keep their creative juices flooding.
                </p>
                <h3 className="mainHeadingTotal">EVENTS ON THE CAMPUS
                </h3>

                <div className="gll">

                  <div className="g1">

                    <img src={b1} alt="" />



                  </div>

                  <div className="g1">

                    <img src={b1} alt="" />



                  </div>

                  <div className="g1">

                    <img src={b3} alt="" className='lngimg' />



                  </div>
                  <div className="g1">

                    <img src={b11} alt="" />



                  </div>
                  <div className="g1">

                    <img src={b4} alt="" />



                  </div>
               
                 
                  



                </div>
                <h3 className="mainHeadingTotal">WORKSHOPS & WEBINARS</h3>

                <div className="gll">

                  <div className="g1">

                    <img src={b3} alt="" />



                  </div>

                  <div className="g1">

                    <img src={b11} alt="" />



                  </div>

                  <div className="g1">

                    <img src={b4} alt="" className='lngimg' />



                  </div>
                  <div className="g1">

                    <img src={b11} alt="" />



                  </div>
                  <div className="g1">

                    <img src={b3} alt="" />



                  </div>




                </div>
              </div>







            </div>

          </div>




        </div>






      </div>

    </>
  )
}

export default Workshop;

