import React from 'react';
import aw18 from "../assets/img/awards/Best_Education_Brand_2018.webp";
import aw19 from "../assets/img/awards/Times_Education_Excellence_2019.webp";
import aw20 from "../assets/img/awards/Time_Excellence_Awards_2020.webp";
import aw21 from "../assets/img/awards/Times_Education_Excellence_2021.webp";
import aw22 from "../assets/img/awards/Times_Education_Excellence_2022.webp";
import aw23 from "../assets/img/awards/Times_Education_Excellence_2023.webp";
import aw24 from "../assets/img/awards/Times_Education_Excellence_2024.webp";
import aw25 from "../assets/img/awards/ET_Achievers_2025.webp";

import "./awards.css";

function Awards() {
  return (
    <>
      <section
        id="page-need_guidance-section"
        className="ps-timeline-sec need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden"
        data-locomotive-section-id="page-need_guidance"
        data-locomotive-section-type="need_guidance"
      >
        <div className="min-h-full h-full w-full relative z-[3] py-4 md:py-8">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>
            <h2 className="mainHeadingTotal">Our Awards</h2>
            <div className="">
              <div className="container grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-5 lg:mt-6" style={{ width: "100%" }}>
                <div className="containergawardh">
                  {/* Award 2025 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw25} media="(max-width: 768px)" />
                      <img
                        src={aw25}
                        alt="ET Industry Achievers 2025"
                        width="400"
                        height="300"
                        loading="lazy" // Lazy load images for performance
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2025</p>
                    <div className="overlaysawardh">
                      <h3>ET Industry Achievers <br /><br /> 2025</h3>
                    </div>
                  </div>

                  {/* Award 2024 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw24} media="(max-width: 768px)" />
                      <img
                        src={aw24}
                        alt="Times Education Excellence Award 2024"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2024</p>
                    <div className="overlaysawardh">
                      <h3>Times Education Excellence Award <br /><br /> 2024</h3>
                    </div>
                  </div>

                  {/* Award 2023 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw23} media="(max-width: 768px)" />
                      <img
                        src={aw23}
                        alt="Times Education Excellence Award 2023"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2023</p>
                    <div className="overlaysawardh">
                      <h3>Times Education Excellence Award <br /><br /> 2023</h3>
                    </div>
                  </div>

                  {/* Award 2022 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw22} media="(max-width: 768px)" />
                      <img
                        src={aw22}
                        alt="Times Education Excellence Award 2022"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2022</p>
                    <div className="overlaysawardh">
                      <h3>Times Education Excellence Award <br /><br /> 2022</h3>
                    </div>
                  </div>

                  {/* Award 2021 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw21} media="(max-width: 768px)" />
                      <img
                        src={aw21}
                        alt="Times Education Excellence Award 2021"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2021</p>
                    <div className="overlaysawardh">
                      <h3>Times Education Excellence Award <br /><br /> 2021</h3>
                    </div>
                  </div>

                  {/* Award 2020 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw20} media="(max-width: 768px)" />
                      <img
                        src={aw20}
                        alt="Times Excellence Award 2020"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2020</p>
                    <div className="overlaysawardh">
                      <h3>Times Excellence Award <br /><br /> 2020</h3>
                    </div>
                  </div>

                  {/* Award 2019 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw19} media="(max-width: 768px)" />
                      <img
                        src={aw19}
                        alt="Times Education Excellence Award 2019"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2019</p>
                    <div className="overlaysawardh">
                      <h3>Times Education Excellence Award <br /><br /> 2019</h3>
                    </div>
                  </div>

                  {/* Award 2018 */}
                  <div className="cardsgawardh">
                    <picture>
                      <source srcSet={aw18} media="(max-width: 768px)" />
                      <img
                        src={aw18}
                        alt="Best Education Brand Award 2018"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%" }}
                      />
                    </picture>
                    <p>2018</p>
                    <div className="overlaysawardh">
                      <h3>Best Education Brand Award Economic Times <br /><br /> 2018</h3>
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
