import React from "react";

import aw18 from "../assets/img/awards/Best_Education_Brand_2018.webp";
import aw19 from "../assets/img/awards/Times_Education_Excellence_2019.webp";
import aw20 from "../assets/img/awards/Time_Excellence_Awards_2020.webp";
import aw21 from "../assets/img/awards/Times_Education_Excellence_2021.webp";
import aw22 from "../assets/img/awards/Times_Education_Excellence_2022.webp";
import aw23 from "../assets/img/awards/Times_Education_Excellence_2023.webp";
import aw24 from "../assets/img/awards/Times_Education_Excellence_2024.webp";
import aw25 from "../assets/img/awards/ET_Achievers_2025.webp";
import bui6 from "../assets/img/esa245.webp";

import "./awards.css";

function Awards() {
    const awards = [
        {
            img: aw25, year: 2025, title: (
                <> ET Industry Achievers <br /><br /> 2025 </>)
        },
        {
            img: aw24, year: 2024, title: (
                <> Times Education Excellence Award <br /><br /> 2024 </>)
        },
        {
            img: bui6, year: 2023, title: (
                <> EduSpark Awards <br /><br /> 2023 </>)
        },
        {
            img: aw23, year: 2023, title: (
                <> Times Education Excellence Award <br /><br /> 2023 </>)
        },
        {
            img: aw22, year: 2022, title: (
                <> Times Education Excellence Award <br /><br /> 2022 </>)
        },
        {
            img: aw21, year: 2021, title: (
                <>Times Education Excellence Award <br /><br /> 2021 </>)
        },
        {
            img: aw20, year: 2020, title: (
                <>Times Excellence Award <br /><br /> 2020</>)
        },
        {
            img: aw19, year: 2019, title: (
                <>Times Education Excellence Award <br /><br /> 2019</>)
        },
        {
            img: aw18, year: 2018, title: (
                <> Best Education Brand Award Economic Times <br /><br /> 2018</>)
        },
    ];

    return (
        <section
            className="ps-timeline-sec need-guidance-form"
            id="page-need_guidance-section"
        >
            <div className="min-h-full w-full relative z-[3] py-4 md:py-8">
                <h2 className="mainHeadingTotal">Our Awards</h2>

                <div className="containergawardh">
                    {awards.map((item, index) => (
                        <div className="cardsgawardh" key={item.year + index}>
                            <img
                                src={item.img}
                                loading={index === 0 ? "eager" : "lazy"}   // <-- LCP optimization
                                decoding="async"
                                alt={`award ${item.year}`}
                            />
                            <p>{item.year}</p>
                            <div className="overlaysawardh">
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Awards;
