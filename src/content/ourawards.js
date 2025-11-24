import React from 'react';
import EmblaCarouselAwards from './EmblaCarouselAwards';

import "./ourawards.css";

function HomeContent() {

  const OPTIONS = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>

      {/* ---------- HEADING SECTION ---------- */}
      <section
        id="awards-section-header"
        className="pd-m tuitiona-aid-section bg-bg100 flex items-end md:items-center relative pt-5 sm:pt-10 md:pt-16 -mt-[2px] bgw"
        style={{
          paddingTop: "20px",
          paddingBottom: "0px",
          gridRowGap: "7px",
        }}
      >
        <div className="min-h-full h-full w-full mx-auto relative z-[4] flex md:flex-row justify-end md:justify-between lg:px-5 md:items-center gap-5 lg:gap-13">

          <div className="flex flex-col md:items-start text-txt100 gap-y-12px pb-8 md:max-w-1/2"
            style={{ maxWidth: "100%", width: "100%", alignItems: "center" }}>
            <h2 className="courseHeading fadeInUp anime-delay">Our Awards</h2>
          </div>

        </div>
      </section>


      {/* ---------- CAROUSEL SECTION ---------- */}
      <section
        id="awards-section"
        className="pd-m tuitiona-aid-section bg-bg100 flex items-end md:items-center relative pt-5 sm:pt-10 -mt-[2px]"
        style={{
          background: "none",
          paddingBottom: "0px"
        }}
      >

        <div
          style={{
            marginTop: "0px",
            display: "flex",
            background: "#f9fafb",
            boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
          }}
          className="min-h-full h-full w-full mx-auto relative z-[4] flex md:flex-row justify-end md:justify-between md:items-center awards-flex-wrapper"
        >

          <div className="flex flex-col md:items-start text-txt100 pb-8 md:max-w-1/2"
            style={{ maxWidth: "100%" }}>

            <EmblaCarouselAwards slides={SLIDES} options={OPTIONS} />

          </div>

        </div>

      </section>

    </>
  );
}

export default HomeContent;
