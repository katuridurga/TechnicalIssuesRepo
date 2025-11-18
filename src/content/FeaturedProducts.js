import React from 'react';
import EmblaCarouselTestimonilas from './EmblaCarouselTestimonilas'


import "./FeaturedProducts.css"



function Testimonials() {





  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <>

      <section id="page-need_guidance-section" className="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden" data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance" style={{background:"#fff", marginTop:"50px", boxShadow:" 0 2px 15px 0px rgba(0, 0, 0, 0.1)", position:"relative", zIndex:'1'
}}>


        <div className="min-h-full h-full w-full  relative z-[3] py-4 md:py-8 rec">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>





          {/* <h3 className="mainHeadingTotal">Testimonials</h3> */}
            <div className="v-c-p700 text-shadow-dp500 text-txt60">

            </div>

            <div className="">

              <EmblaCarouselTestimonilas slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Testimonials;
