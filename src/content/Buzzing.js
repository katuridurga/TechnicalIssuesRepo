import React from 'react';
import EmblaCarouselBuzzing from './EmblaCarouselBuzzing';


import "./Buzzing.css"


function HomeContent() {

  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>




      <section id="page-tuition_aid-section" className="pd-m tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10  md:pt-16 -mt-[2px] bgw bgw12" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid" style={{
        paddingTop: "20px", gridrowgap: "7px"
      }}>
        <div className="min-h-full h-full w-full container-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between lg:px-5 md:items-center gap-5 lg:gap-13">

          <div className="flex flex-col md:items-start text-txt100 gap-y-12px pb-8 md:max-w-1/2" style={{ maxWidth: "100%", width: "100%", alignItems: "center" }}>
            <h2 className="mainHeadingTotal">
              The Buzz @ BSP
            </h2>





          </div>


        </div>



      </section>


      <section id="page-tuition_aid-section" className="tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10  -mt-[2px]" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid" style={{ background: "none" }}>



        <div style={{ marginTop: "0px", display: "flex", background: "#000" }} className="min-h-full h-full w-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between md:items-center" >

          <div className="flex flex-col md:items-start text-txt100 pb-8 md:max-w-1/2" style={{ maxWidth: "100%" }}>



            <EmblaCarouselBuzzing slides={SLIDES} options={OPTIONS} />


          </div>


        </div>

      </section>


    </>
  );
}

export default HomeContent;
