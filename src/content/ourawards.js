import React from 'react';
import EmblaCarouselAwards from './EmblaCarouselAwards';


import "./ourawards.css"


function HomeContent() {

  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>




      <section id="page-tuition_aid-section" className="pd-m tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10  md:pt-16 -mt-[2px] bgw" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid" style={{
        paddingTop: "20px", paddingBottom: "0px", gridrowgap: "7px",
      }}>
        <div class="min-h-full h-full w-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between lg:px-5 md:items-center gap-5 lg:gap-13" style={{backgroundColor:"#000"}}>

          <div class="flex flex-col md:items-start text-txt100 gap-y-12px pb-8 md:max-w-1/2" style={{ maxWidth: "100%", width: "100%", alignItems: "center" }}>
          
            <h2 className="mainHeadingTotal fadeInUp anime-delay">Our Awards </h2>

            {/* <p style={{ color: "#fff", margin: "0px" }}>Backed by multiple educational awards, Backstage Pass proudly holds the #1 position as the best gaming college in India.
            </p> */}




          </div>


        </div>



      </section>


      <section id="page-tuition_aid-section" class="pd-m tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10  -mt-[2px]" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid" style={{
        background: "none", paddingBottom: "0px"

      }}>



        <div style={{ marginTop: "0px", display: "flex", background: "#000" }} class="min-h-full h-full w-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between md:items-center" >

          <div class="flex flex-col md:items-start text-txt100 pb-8 md:max-w-1/2" style={{ maxWidth: "100%" }}>



            <EmblaCarouselAwards slides={SLIDES} options={OPTIONS} />


          </div>


        </div>

      </section>


    </>
  );
}

export default HomeContent;
