import React from 'react';
import EmblaCarouselTestimonilas from './EmblaCarouselTestimonilas'



import "./testimonials.css"


function HomeContent() {




  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  return (
    // <div className="content-block1">
    //   <div className="content-container">


    //       <div className="section-title ">
    //         {/* <span className="pre-title">OUR Members</span> */}
    //         <h3 className="title">Testimonials</h3></div>

    //     <Zoom>
    //       <EmblaCarouselTestimonilas slides={SLIDES} options={OPTIONS} />
    //     </Zoom>



    //   </div>
    // </div>
    <>

      <section id="page-tuition_aid-section" class="tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10 md:pt-16 -mt-[2px]" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid">
        <div class="min-h-full h-full w-full container-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between lg:px-5 md:items-center gap-5 lg:gap-13">

          <div class="flex flex-col md:items-start text-txt100 gap-y-12px pb-8 md:max-w-1/2">
            <h3 class="text-txt900 v-c-h900 mb-4 text-center md:text-left">
              TESTIMONIALS
            </h3>


            <EmblaCarouselTestimonilas slides={SLIDES} options={OPTIONS} />


          </div>

          <div class="hidden md:block md:flex-1 self-start">





















            <img alt="test" src="https://static.sites.cgmasteracademy.com/imgproxy/q6grjvVu4GEuhxM8pC0dMrSIb5riw2cL02TSQHIk4qs/resize:fit:0:1280/gravity:sm/quality:85/aHR0cHM6Ly9jZ21hLWxhbmRpbmctc2l0ZXMtc3RhZ2luZy5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9jZ21hLWxhbmRpbmctc2l0ZXMtc3RhZ2luZy9zaXRlcy82Mzc0ZjhiMzllNDNhNjA1MzI4N2VlYmEvYXNzZXRzLzY0MzczMzJlMjBjZjI0MDAwODIzZjg3Zi9jb25jZXB0X2FydF9zY2hvb2xfVHVpdGlvbl9haWRfaW1hZ2UzLnBuZw.png" srcset="https://static.sites.cgmasteracademy.com/imgproxy/Ta2pgLLXufl6ZEf1XBViUvJAsCAonYKoZl3bKa0YrQk/resize:fit:0:1280/gravity:sm/quality:85/aHR0cHM6Ly9jZ21hLWxhbmRpbmctc2l0ZXMtc3RhZ2luZy5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9jZ21hLWxhbmRpbmctc2l0ZXMtc3RhZ2luZy9zaXRlcy82Mzc0ZjhiMzllNDNhNjA1MzI4N2VlYmEvYXNzZXRzLzY0MzczMzJlMjBjZjI0MDAwODIzZjg3Zi9jb25jZXB0X2FydF9zY2hvb2xfVHVpdGlvbl9haWRfaW1hZ2UzLnBuZw.webp" className="w-full h-full object-contain max-h-[640px]" data-form="step2-container" data-form-id="need-guidance" loading="lazy" />

          </div>
        </div>
        {/* <div class="absolute left-0 top-0 w-full h-full hidden sm:block bg-c-bg700 z-10 sm:clip-right-line200 md:clip-right-line300 lg:clip-right-line400"></div> */}
      </section>
    </>
  );
}

export default HomeContent;
