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


//compressed images
import aw25310 from "../assets/img/awards/ET_Achievers_2025-310w.webp";
import aw24310 from "../assets/img/awards/Times_Education_Excellence_2024-310w.webp";
import aw21310 from "../assets/img/awards/Times_Education_Excellence_2021-310w.webp";
import bui6310 from "../assets/img/esa245-310w.webp";
import aw22310 from "../assets/img/awards/Times_Education_Excellence_2022-310w.webp";
import aw23310 from "../assets/img/awards/Times_Education_Excellence_2023-310w.webp";
import aw18310 from "../assets/img/awards/Best_Education_Brand_2018-310w.webp";
import aw19310 from "../assets/img/awards/Times_Education_Excellence_2019-310w.webp";
import aw20310 from "../assets/img/awards/Time_Excellence_Awards_2020-310w.webp";
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
                                        {/* <img src={aw25} alt="ET Industry Achievers 2025" width="310" height="298" /> */}
                                        <img
                                            src={aw25310}   // smallest image as default
                                            srcSet={`${aw25310} 310w,${aw25} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="ET Industry Achievers 2025"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />


                                        <p>2025</p>
                                        <div class="overlaysawardh">
                                            <h3>ET Industry Achievers <br /><br /> 2025 </h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        <img
                                            src={aw24310}   // smallest image as default
                                            srcSet={`${aw24310} 310w,${aw24} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="Times Education Excellence Award 2024"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        <p>2024</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2024</h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        {/* <img src={bui6} alt="EduSpark Awards 2023" width="365" height="298"/> */}
                                          <img
                                            src={bui6310}   // smallest image as default
                                            srcSet={`${bui6310} 310w,${bui6} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="EduSpark Awards 2023"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        <p>2023</p>
                                        <div class="overlaysawardh">
                                            <h3>EduSpark Awards  <br /><br />  2023</h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        {/* <img src={aw23} alt="Times Education Award 2023" width="365" height="298"/> */}
                                         <img
                                            src={aw23310}   // smallest image as default
                                            srcSet={`${aw23310} 310w,${aw23} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="Times Education Excellence Award 2023"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        <p>2023</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2023</h3>

                                        </div>
                                    </div>

                                    <div class="cardsgawardh">
                                        {/* <img src={aw22} alt="Times Education Award 2022" width="365" height="298"/> */}
                                        
                                        <img
                                            src={aw22310}   // smallest image as default
                                            srcSet={`${aw22310} 310w,${aw22} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="Times Education Excellence Award 2022"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        <p>2022</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2022</h3>
                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                      
                                        <img
                                            src={aw21310}   // smallest image as default
                                            srcSet={`${aw21310} 310w,${aw21} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="Times Education Excellence Award 2021"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        <p>2021</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2021</h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        {/* <img src={aw20} alt="Times Education Award 2020" width="365" height="298"/> */}
                                            <img
                                            src={aw20310}   // smallest image as default
                                            srcSet={`${aw20310} 310w,${aw20} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="Times Education Excellence Award 2020"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        <p>2020</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Excellence Award <br /><br />  2020</h3>

                                        </div>
                                    </div>
                                    <div class="cardsgawardh">
                                        {/* <img src={aw19} alt="Times Education Award 2019" width="365" height="298"/> */}
                                              <img
                                            src={aw19310}   // smallest image as default
                                            srcSet={`${aw19310} 310w,${aw19} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="Times Education Excellence Award 2019"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        <p>2019</p>
                                        <div class="overlaysawardh">
                                            <h3>Times Education Excellence Award <br /><br />  2019</h3>

                                        </div>
                                    </div>

                                    <div class="cardsgawardh">
                                        {/* <img src={aw18} alt="Best Education Brand Award 2018" width="365" height="298"/> */}
                                            <img
                                            src={aw18310}   // smallest image as default
                                            srcSet={`${aw18310} 310w,${aw18} 365w`}
                                            sizes="(max-width: 480px) 310px, 365px"
                                            alt="Best Education Brand Award Economic Times 2018"
                                            width={310}
                                            height={253}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="async"
                                            style={{ width: "100%", height: "auto" }}
                                        />
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
