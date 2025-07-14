import React from 'react';
import EmblaCarouselStudentGamesList from './EmblaCarouselStudentGamesList';

import { useSelector, shallowEqual } from "react-redux";
import "./StudentGamesList.css"


function HomeContent() {

  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  return (
    <>




      


      <section id="page-tuition_aid-section" class="pd-m tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10  -mt-[2px]" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid" style={{
        background: "none", zIndex: "2", paddingBottom: "0px", width: isMobileState ? "100%" : "85%", margin: "0 auto"

      }}>



        <div style={{ marginTop: "0px", display: "flex", background: "#000" }} class="min-h-full h-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between md:items-center" >

          <div class="flex flex-col md:items-start text-txt100 pb-8 md:max-w-1/2" style={{ maxWidth: "100%" }}>



            <EmblaCarouselStudentGamesList slides={SLIDES} options={OPTIONS} />


          </div>


        </div>

      </section>


    </>
  );
}

export default HomeContent;
