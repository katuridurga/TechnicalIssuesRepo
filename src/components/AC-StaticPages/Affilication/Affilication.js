import React from 'react';
import "./Affilication.css";
import HomeContentForm from "../../../content/HomeContentFrom";
import { Helmet } from "react-helmet";
import { useSelector, shallowEqual } from "react-redux";

function Affilication() {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );



  return (
    <>
      <Helmet>
        <title>Backstage Pass Institute of Gaming is Accredited by JNAFAU & Lincoln University</title>

        <meta property="og:title" content="Backstage Pass Institute of Gaming is Accredited by JNAFAU & Lincoln University" />
        <meta name="description" content="Backstage Pass is affiliated with top universities like JNAFAU and Lincoln University to offer globally recognized programs in gaming and digital arts." />
        <meta property="og:url" content="https://www.backstagepass.co.in/about-us/affiliation-collaboration/" />

        <link
          rel="canonical"
          href="https://www.backstagepass.co.in/about-us/affiliation-collaboration/"
        />
      </Helmet>

      <header className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassaff' : 'affilationbanner'}`}>
        <div className="et_pb_text_innerimage">
          <h1 className="title white-txt">Affiliations</h1>
        </div>
      </header>
      <h2 className="mainHeadingTotal fadeInUp anime-delay">
        Jawaharlal Nehru Architecture & Fine Arts University (JNAFAU)
      </h2>
      <section className="content-section courses-container">

        <div className="content-wrapper">
          <div className="content-text">
            <p>
              JNAFAU is a prestigious state university in Telangana, recognized by the UGC. It specializes in programs such as Fine Arts, Architecture, Design, and Gaming.
            </p>
            <p>
              Backstage Pass partners with JNAFAU to offer accredited Bachelor's and Master's programs in game development, ensuring students receive a high-quality, recognized education.
            </p>
            <p>
              Our affiliation with JNAFAU also allows students to benefit from an academic curriculum that is aligned with industry standards and innovation in digital arts and technology.
            </p>
          </div>
          <div className="content-image">
            <img src="https://i.ytimg.com/vi/DT7tzcQHsvE/maxresdefault.jpg" alt="JNAFAU campus" />
          </div>
        </div>
      </section>

      <h2 className="mainHeadingTotal fadeInUp anime-delay">
        Lincoln University College
      </h2>
      <section className="content-section courses-container">

        <div className="content-wrapper">
          <div className="content-image">
            <img
              src="https://www.plic.edu.np/sites/default/files/styles/large/public/images/pages/lincoln-uni-logo.gif?itok=qSZr65aP"
              alt="Lincoln University Logo"
            />
          </div>
          <div className="content-text">
            <p>
              Lincoln University College is a premier private institution in Malaysia, approved by the Ministry of Higher Education and MQA.
            </p>
            <p>
              In collaboration with Backstage Pass, Lincoln University offers Diploma and Advanced Diploma programs in game design and technology, providing global exposure and strong academic foundation.
            </p>
            <p>
              This partnership empowers our students with international learning opportunities and credentials that are widely respected across the gaming industry.
            </p>
          </div>
        </div>
      </section>


      <HomeContentForm />
    </>
  );
}

export default Affilication;
