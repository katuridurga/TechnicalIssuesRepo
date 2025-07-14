import React from 'react'
import "./Scholarships.css";
import HomeContent from "../../../content/HomeContent";
import courseBanner from "../../../assets/img/banners/newban1.webp";
import sc1 from "../../../assets/img/test/scholarship.webp";
import sc2 from "../../../assets/img/test/Scholarships.webp";
import sicon from "../../../assets/img/7920927.gif";

import { Helmet } from "react-helmet";

function Courses(props) {
    return (
        <>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            <div className="courses-container">
                <Helmet>
                    <title>Scholarships</title>
                    <meta name="description" content="Scholarships" />
                </Helmet>

                <div className="courses-wrapper">
                    <h2 className="mainHeadingTotal fadeInUp anime-delay">Scholarships</h2>

                    <p className='adminissionPTag1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>


                    <div className='infinite-scroll-component'>
                        <div id="curve" className="card" style={{ background: `url(${sc1})`, backgroundPosition: "bottom" }}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">Scholarships TYPE 1</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{ background: `url(${sc2})`, backgroundPosition: "center" }}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">Scholarships TYPE 2</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{ background: `url(${sc1})`, backgroundPosition: "bottom" }}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">Scholarships TYPE 3</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>

                        <div id="curve" className="card" style={{ background: `url(${sc2})`, backgroundPosition: "center" }}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">Scholarships TYPE 4</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>

                </div>






            </div>


            <div className="courses-container">

                <div className="courses-wrapper">
                    <h2 className="mainHeadingTotal fadeInUp anime-delay">Benefits</h2>


                    <ul className='benfits'>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                        <li><div className='benfitIcon'><img src={sicon} alt="Benefits" /></div> <div className='benfitContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div></li>
                    </ul>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><button class=" three button brand size200 w-full sm:w-auto" style={{ width: "240px", fontSize: "17px" }}>ENQUIRE NOW</button></div>

                </div>

            </div>
            <HomeContent />
        </>
    )
}

Courses.propTypes = {

}

export default Courses;

