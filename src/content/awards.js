import React from 'react';
import aw18 from "../assets/img/awards/Best_Education_Brand_2018.webp";
import aw19 from "../assets/img/awards/Times_Education_Excellence_2019.webp";
import aw20 from "../assets/img/awards/Time_Excellence_Awards_2020.webp";
import aw21 from "../assets/img/awards/Times_Education_Excellence_2021.webp";
import aw22 from "../assets/img/awards/Times_Education_Excellence_2022.webp";
import aw23 from "../assets/img/awards/Times_Education_Excellence_2023.webp";
import aw24 from "../assets/img/awards/Times_Education_Excellence_2024.webp";
import aw25 from "../assets/img/awards/ET_Achievers_2025.webp";
import bui6 from "../assets/img/esa245.webp";

import "./awards.css"


function Awards() {
    return (
        <>
            <section id="page-need_guidance-section" className="ps-timeline-sec need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden" data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance">

                <div className="min-h-full h-full w-full relative z-[3] py-4 md:py-8">
                    <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>
                        <h2 className="mainHeadingTotal">Our Awards</h2>
                        <div className="">
                            <div className="container grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-5 lg:mt-6" style={{ width: "100%" }}>

                                <div class="containergawardh">
                                    <div class="cardsgawardh">
                                        <img src={aw25} alt="awardfive" />
                                        <p>2025</p>
                                        <div class="overlaysawardh">
                                            <h3>ET Industry Achievers <br /><br /> 2025 </h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        <img src={aw24} alt="awardfive" />
                                        <p>2024</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2024</h3>

                                        </div>
                                    </div>
                                         <div class="cardsgawardh">
                                        <img src={bui6} alt="awardfive" />
                                        <p>2023</p>
                                        <div class="overlaysawardh">
                                            <h3>EduSpark Awards 2023 <br /><br />  2023</h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        <img src={aw23} alt="awardfive" />
                                        <p>2023</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2023</h3>

                                        </div>
                                    </div>

                                    <div class="cardsgawardh">
                                        <img src={aw22} alt="awardthree" />
                                        <p>2022</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2022</h3>
                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        <img src={aw21} alt="aw630" />
                                        <p>2021</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2021</h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        <img src={aw20} alt="awardone" />
                                        <p>2020</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Excellence Award <br /><br />  2020</h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        <img src={aw19} alt="awardsix" />
                                        <p>2019</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2019</h3>

                                        </div>
                                    </div>

                                    <div class="cardsgawardh">
                                        <img src={aw18} alt="awardseven" />
                                        <p>2018</p>
                                        <div class="overlaysawardh">
                                            <h3>Best Education Brand Award Economic Times <br /><br />  2018</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Awards;
