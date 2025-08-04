import React from 'react'
import "./ComingSoon.css";

import { Helmet } from "react-helmet";

function Courses(props) {
  return (
    <>

      <div className="courses-container">
        <Helmet>
          <title>Courses</title>
          <meta  property="og:description" content="Courses" />
        </Helmet>



        <div style={{ display: "flex", width: "100%" }}>
          <div className="mobile-container">

            <div>
              <article className="text-info">
                <h2>We're</h2>
                <h2>Coming<br />Soon</h2>
                <p>Hello friends! We are currently building our new Website Pages.</p>

              </article>
            </div>
          </div>
          <div className="hero-image-desktop">
            <img src="https://assets.codepen.io/6060109/athlete-big.png" alt="Femail athlete squinting towards the camera." />
          </div>
        </div>




      </div>

    </>
  )
}

Courses.propTypes = {

}

export default Courses;

