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

const awardsData = [
  {
    year: "2025",
    title: "ET Industry Achievers 2025",
    img: aw25310
  },
  {
    year: "2024",
    title: "Times Award 2024",
    img: aw24310
  },
  {
    year: "2025",
    title: "industry awards",
    img: aw25310
  },
  {
    year: "2024",
    title: "Times Education Excellence Award 2024",
    img: aw24310
  },
];
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




function Workshop() {
  const [selectedYear, setSelectedYear] = useState(null);

  const filteredData = selectedYear
    ? awardsData.filter(item => item.year === selectedYear)
    : awardsData;

  return (
    <>
      <div className='courseBanner'>
        <img alt="Courses Banner" title='Courses Banner' src={courseBanner} />
      </div>
      <Helmet>
        <title>Alumni</title>
        <meta name="description" content="Alumni" />
      </Helmet>
       <div class="courses-wrapper"><h2 class="mainHeadingTotal">Events & Celebrations</h2>
                      
                    </div>
      <div className="emblaaward">
        <div className="embla__viewportaward">
          <div className="embla__containeraward">

            {filteredData.map((item, index) => (
              <div className="embla__slideaward" key={index}>

             <div
  className="cardsgawardh"
  onClick={() => setSelectedYear(item.year)}
>

  <img
    src={item.img}
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
      </div>
      {/* {selectedYear && (
        <button onClick={() => setSelectedYear(null)} className="showllbtn">
          Show All
        </button>
      )} */}
    </>
  );
}
export default Workshop;

