import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import aw1 from "../assets/img/banners/IMG_0134.webp"
import aw2 from "../assets/img/banners/_SRI8766.webp"
import aw3 from "../assets/img/banners/BSP_AWard.webp"
import aw4 from "../assets/img/banners/A1.webp"
import aw5 from "../assets/img/banners/A2.webp"
import aw6 from "../assets/img/banners/Times-Award.webp"
import aw8 from "../assets/img/banners/times2023.webp"
import aw7 from "../assets/img/banners/et2025.webp"
import aw9 from "../assets/img/banners/2024times.webp"



import "./awards.css"


function Awards() {

    const isMobileState = useSelector(
        state => state.mainReducer.isMobile,
        shallowEqual
    );
    return (
        <>


            <section id="page-need_guidance-section" className="ps-timeline-sec need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden" data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance">

                <div className="min-h-full h-full w-full relative z-[3] py-4 md:py-8">
                    <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>
                        <h3 className="mainHeadingTotal">Our Awards</h3>

                        <div className="">








                            <div className="container grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-5 lg:mt-6" style={{ width: "100%" }}>

                                <ol className="ps-timeline">
                                    <li style={{ marginLeft: isMobileState ? "auto" : "17px" }}>
                                        <div className="img-handler-top">
                                            <img
                                                src={aw5}
                                                srcSet={`${aw5} 150w, ${aw5} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-aw5"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />

                                        </div>

                                        <span className="ps-sp-top">2018</span>
                                    </li>
                                    <li>
                                        <div className="img-handler-bot">
                                            <img
                                                src={aw2}
                                                srcSet={`${aw2} 150w, ${aw2} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-aw2"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />
                                          
                                        </div>

                                        <span className="ps-sp-bot">2019</span>
                                    </li>
                                    <li>
                                        <div className="img-handler-top">
                                            <img
                                                src={aw4}
                                                srcSet={`${aw4} 150w, ${aw4} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-aw4"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />

                                        </div>

                                        <span className="ps-sp-top">2020</span>
                                    </li>
                                    <li>
                                        <div className="img-handler-bot">
                                            <img
                                                src={aw6}
                                                srcSet={`${aw6} 150w, ${aw6} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-aw6"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />
                                           
                                        </div>

                                        <span className="ps-sp-bot">2021</span>
                                    </li>
                                    <li>
                                        <div className="img-handler-top">
                                            <img
                                                src={aw3}
                                                srcSet={`${aw3} 150w, ${aw3} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-five"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />

                                        </div>

                                        <span className="ps-sp-top">2022</span>
                                    </li>
                                    <li>
                                        <div className="img-handler-bot">

                                            <img
                                                src={aw8}
                                                srcSet={`${aw8} 150w, ${aw8} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-aw8"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />
                                        </div>

                                        <span className="ps-sp-bot">2023</span>
                                    </li>
                                    <li>
                                        <div className="img-handler-top">
                                           
                                            <img
                                                src={aw9}
                                                srcSet={`${aw9} 150w, ${aw9} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-aw9"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />
                                        </div>

                                        <span className="ps-sp-top">2024</span>
                                    </li>
                                    <li>
                                        <div className="img-handler-bot">
                                            
                                            <img
                                                src={aw7}
                                                srcSet={`${aw7} 150w, ${aw7} 300w`}
                                                sizes="(max-width: 600px) 150px, 300px"
                                                alt="award-aw7"
                                                width={150}
                                                height={136}
                                                loading="lazy"
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '136px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom',
                                                    borderRadius: '18px',
                                                    padding: '7px',
                                                    background: 'none',
                                                    margin: '0 auto'
                                                }}
                                            />
                                        </div>

                                        <span className="ps-sp-bot">2025</span>
                                    </li>

                                </ol>





                            </div>


                        </div>



                    </div>
                </div>
            </section>






        </>
    );
}

export default Awards;
