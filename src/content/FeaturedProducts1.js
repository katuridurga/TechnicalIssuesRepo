import React from 'react';
import EmblaCarouselTestimonilas1 from './EmblaCarouselTestimonilas1'


import "./FeaturedProducts1.css"



function Testimonials() {





  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 2
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <>

      <section id="page-need_guidance-section" className="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative -mt-[2px] overflow-hidden" data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance">


        <div className="min-h-full h-full w-full  relative z-[3] py-4 md:py-8 rec">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>





            <h2 className={window.location.pathname === "/landingpage/diploma-and-advanced-diploma-gaming-courses/" ? "mainHeadingTotal" : "mainHeadingTotall-2"}>What Our Alumni Say</h2>
            <div className="v-c-p700 text-shadow-dp500 text-txt60">

            </div>

            <div className="container-full">

              <EmblaCarouselTestimonilas1 slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Testimonials;
