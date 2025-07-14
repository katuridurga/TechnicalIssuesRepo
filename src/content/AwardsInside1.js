import React from 'react';
import EmblaCarouselAwardsInside1 from './EmblaCarouselAwardsInside1';


import "./ourawards.css"


function HomeContent() {

  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>




      


      <section id="page-tuition_aid-section" class="pd-m tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10  -mt-[2px]" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid" style={{
        background: "none", paddingBottom: "0px"

      }}>



        <div style={{ marginTop: "0px", display: "flex", background: "#000" }} class="min-h-full h-full w-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between md:items-center" >

          <div class="flex flex-col md:items-start text-txt100 pb-8 md:max-w-1/2" style={{ maxWidth: "100%" }}>



            <EmblaCarouselAwardsInside1 slides={SLIDES} options={OPTIONS} />


          </div>


        </div>

      </section>


    </>
  );
}

export default HomeContent;
