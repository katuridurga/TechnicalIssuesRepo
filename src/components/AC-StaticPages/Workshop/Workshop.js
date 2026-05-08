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




function Workshop(props) {
  const [eventsData, setEventsData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  //const years = [...new Set(eventsData.map(item => item.year))];
  const years = Object.keys(
  eventsData.reduce((acc, item) => {
    acc[item.year] = true;
    return acc;
  }, {})
).sort((a, b) => b - a); // descending: 2026 first
useEffect(() => {
  fetch("https://www.backstagepass.co.in/reactapi/eventapi/events.php", {
    cache: "no-store",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("API RESULT:", result);

      if (result.status && result.data) {
        const formattedData = Object.keys(result.data).flatMap((year) =>
          result.data[year].map((event) => ({
            ...event,
            year,
          }))
        );

        console.log("FORMATTED:", formattedData);

        setEventsData(formattedData);
      }
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
    });
}, []);

  const filteredData = Array.isArray(eventsData) ? selectedYear
    ? eventsData.filter(item => item.year === selectedYear)
    : eventsData : [];
const yearWiseEvents = selectedYear
  ? eventsData.filter(item => item.year === selectedYear)
  : [];
  const groupedData = eventsData.reduce((acc, item) => {
  if (!acc[item.year]) acc[item.year] = [];
  acc[item.year].push(item);
  return acc;
}, {});
 
const getYearImage = (year) => {
  return groupedData[year]?.[0]?.banner_image;
};

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
   
  <div className="embla__viewportaward">

    <div className="courses-wrapper">
      <h2 className="mainHeadingTotal">
        {selectedYear
          ? `${selectedYear} Events & Celebrations`
          : "Events & Celebrations"}
      </h2>
    </div>
    <div className="embla__containeraward">

     {!selectedYear &&
  years.map((year) => (
    <div className="embla__slideaward" key={year}>
      <div
        className="cardsgawardh"
        //onClick={() => setSelectedYear(year)}
        onClick={() => {
  setSelectedYear(year);
   props.history.push(`/life-at-bsp/events-celebrations-${year}`);
}}
      >
        <img
          src={getYearImage(year)}
          alt={year}
        />
        <p>{year}</p>
      </div>
    </div>
  ))}
  
      {selectedYear &&
        yearWiseEvents.map((item, index) => (
          <div className="embla__slideaward" key={index}>
           
            <div className="cardsgawardh">

              <img
                src={item.banner_image}
                alt={item.title}
              />
              <span
                className="titleTextw"
                onClick={() => {
                  window.location.href = `/life-at-bsp/events-celebrations/${item.slug}`;
                }}
              > 
             {item.title}
              </span>

            </div>
          </div>
        ))}

    </div>
  </div>
</div>
      {/* <div className="emblaaward">
        <div className="embla__viewportaward">
          <div className="embla__containeraward">

            {filteredData.map((item, index) => (
              <div className="embla__slideaward" key={index}>

                <div
                  className="cardsgawardh"
                  onClick={() => setSelectedYear(item.year)}
                >
                  <img
                    src={item.banner_image}
                    alt={item.title}
                  />
                  {!selectedYear ? (
                    <p>{item.year}</p>
                  ) : (
                    <span className="titleTextw" onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/life-at-bsp/events-celebrations-1/${item.year}`;
                    }}>{item.title}</span>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>
      </div> */}

      {/* {selectedYear && (
        <button onClick={() => setSelectedYear(null)} className="showllbtn">
          Show All
        </button>
      )} */}
    </>
  );
}
export default withRouter(Workshop);

