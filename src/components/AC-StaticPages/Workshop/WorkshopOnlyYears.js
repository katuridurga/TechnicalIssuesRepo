import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Workshop.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import courseBanner from "../../../assets/img/banners/CSGD.webp";
import b1 from "../../../assets/img/games/1.webp";
import b11 from "../../../assets/img/games/11.webp";
import b3 from "../../../assets/img/games/3.webp";
import b4 from "../../../assets/img/games/4.webp";
import { FaHome, FaArrowRight } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import aw25310 from "../../../assets/img/awards/ET_Achievers_2025-310w.webp";
import aw24310 from "../../../assets/img/awards/Times_Education_Excellence_2024-310w.webp";
import { withRouter } from "react-router-dom";


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



function WorkshopOnlyYears(props) {
  const { slug } = props.match.params;

  const [eventsData, setEventsData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
 const [title, setTitle] = useState("");

useEffect(() => {
  fetch(`https://www.backstagepass.co.in/reactapi/eventapi/events_by_year.php?year=${slug}`, {
    cache: "no-store",
  })
    .then(res => res.json())
    .then(result => {
      console.log("API RESULT:", result);

      if (result.status && Array.isArray(result.data)) {
        setEventsData(result.data);
            setTitle(result.title);
      }
    })
    .catch(error => {
      console.error("Error fetching events:", error);
    });
}, [slug]);


 


  return (
    <>
      <div className='courseBanner'>
        <img alt="Courses Banner" title='Courses Banner' src={courseBanner} />
      </div>
      <Helmet>
        <title>Alumni</title>
        <meta name="description" content="Alumni" />
      </Helmet>
     
      
<div className="emblaawardworkshop">
    <div className="breadcrumbswork">
           <div className="container">
             <ul className="breadcrumbswork__list">
   <li>
                 <a href="/"><FaHome className="icon" /> Home</a>
               </li>
               <li>
                 <a href={`/life-at-bsp/events-celebrations`}><FaArrowRight className="icon" />Events & Celebrations</a>
               </li>
               {/* <li>
                 <a
                   href="#"
                   onClick={(e) => {
                     e.preventDefault();
                     props.history.goBack();
                   }}
                 ><FaArrowRight className="icon" />Events-Celebrations-{slug}</a>
               </li> */}
              
             </ul>
           </div>
         </div>
  <div className="embla__viewportaward">

    <div className="courses-wrapper">
      <h2 className="mainHeadingTotal">
        {selectedYear
          ? `${selectedYear} Events & Celebrations`
          : "Events & Celebrations"}
      </h2>
    </div>
    <div className="embla__containeraward">
{eventsData.map((item, index) => (
  <div className="embla__slideaward" key={index}>
    <div className="cardsgawardhw"  onClick={() =>
          props.history.push(
            `/life-at-bsp/events-celebrations/${item.slug}`
          )
        }>
      <img src={item.banner_image} alt={item.title} />

      <span
        className="titleTextw"
       
      >
        {item.title}
      </span>
    </div>
  </div>
))}
</div>
   
  </div>
</div>
     
    </>
  );
}
export default withRouter(WorkshopOnlyYears);

