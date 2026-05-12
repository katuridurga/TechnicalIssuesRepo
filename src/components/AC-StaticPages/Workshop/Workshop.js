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
import { set } from "react-hook-form";
import { error } from "jquery";


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
  const [categories, setCategories] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState(null);
  //const years = [...new Set(eventsData.map(item => item.year))];
  const years = Object.keys(
    eventsData.reduce((acc, item) => {
      acc[item.year] = true;
      return acc;
    }, {})
  ).sort((a, b) => b - a); // descending: 2026 first
  useEffect(() => {

    const url =
      selectedCatId === null
        ?
        "https://www.backstagepass.co.in/reactapi/eventapi/events.php"
        : `https://www.backstagepass.co.in/reactapi/eventapi/events.php?categoryId=${selectedCatId}`;

    fetch(url, { cache: "no-store" })

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
  }, [selectedCatId]);

  useEffect(() => {
    fetch("https://www.backstagepass.co.in/reactapi/eventapi/eventscategories_list.php", {
      cache: "no-store",
    })
      .then(response => response.json())
      .then(result => {
        setCategories(result);
      })
      .catch(error => {
        console.error('Error Fetching Categories:', error)
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
        <title>Events & WorkShops</title>
        <meta name="description" content="Events & WorkShops" />
      </Helmet>


      <div className="emblaawardworkshop">

        <div className="embla__viewportaward">

          <div className="courses-wrapper">
            <h2 className="mainHeadingTotal">
              {selectedYear
                ? `${selectedYear} Events & WorkShops`
                : "Events & WorkShops"}
            </h2>
          </div>
          <div className="maincondiv">
            <div className="embla__containeraward">

              {!selectedYear &&
                years.map((year) => (
                  <div className="embla__slideaward" key={year}>
                    <div
                      className="cardsgawardhw"
                      //onClick={() => setSelectedYear(year)}
                      //         onClick={() => {
                      //   setSelectedYear(year);
                      //    props.history.push(`/life-at-bsp/events-celebrations-${year}`);
                      // }}
                      onClick={() => {
                        setSelectedYear(year);

                        props.history.push({
                          pathname: `/life-at-bsp/events-celebrations-${year}`,
                          state: {
                            selectedCatId: selectedCatId,
                          },
                        });
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

              {/* {selectedYear &&
        yearWiseEvents.map((item, index) => (
          <div className="embla__slideaward" key={index}>
           
            <div className="cardsgawardhw">

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
        ))} */}

            </div>

            <div className='workshoprightside'>
              <div className='worksopost'>
                <div className='workshoptc'> Life @ BSP</div>

                <ul className='segmentworkshop'>
                  {categories?.map((category) => (

                    <li key={category.id}>
                      <div className='workshopc'>
                        <p onClick={() =>
                          setSelectedCatId(
                            selectedCatId === category.id ? null : category.id
                          )
                        }
                          className={selectedCatId === category.id ? 'selected' : ''}
                          style={{ userSelect: 'none', cursor: 'pointer' }}>
                          {category.category_name}
                        </p>
                      </div>
                    </li>


                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="eventsegments">
      <ul>
        <li>
            <a href="" >
        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
    Global Game Jam
      </a>
        
        </li>
        <li>
          Celebrations 
        </li>
        <li>
          Workshops
        </li>
        <li>
          Studio Visits
        </li>
      </ul>
    </div> */}
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
export default withRouter(Workshop);

