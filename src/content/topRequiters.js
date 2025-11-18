import React from 'react';
import Marquee from "react-fast-marquee";
import r1 from "../assets/img/partners/r1.webp";
import r2 from "../assets/img/partners/r2.webp";
import r4 from "../assets/img/partners/r4.webp";
import r5 from "../assets/img/partners/r5.webp";
import r6 from "../assets/img/partners/r6.webp";
import r7 from "../assets/img/partners/r7.webp";
import r8 from "../assets/img/partners/SumoDigital.webp";
import r9 from "../assets/img/partners/Ubisoft.webp";
import r10 from "../assets/img/partners/Sony.webp";
import r11 from "../assets/img/partners/Qualcomm.webp";
import r12 from "../assets/img/partners/Juego.webp";
import r13 from "../assets/img/partners/Gamitronics.webp";
import r14 from "../assets/img/partners/GSNgames.webp";
import { useSelector, shallowEqual } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import thumbnail from "../assets/img/thumbnail.webp";
import "./topRequiters.css"



function TopRequiters() {

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );


  return (
    <>

      <section id="page-need_guidance-section" className="need-guidance-form flex items-end md:items-center relative z-[11] -mt-[2px] overflow-hidden" style={{ marginBottom: isMobileState ? "20px" : "0px" }}>

        <div className="min-h-full h-full w-full  relative z-[3] py-4 rec">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>


            <h2 className="mainHeadingTotal">Our Top Recruiters</h2>


      <Marquee
  speed={100}
  gradient={false}
  pauseOnHover={true}
  style={{ padding: "0px 20px" }}
  className="recuitersList"
>
  <LazyLoadImage effect="blur" alt="rec4" src={r4} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec1" src={r1} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec7" src={r7} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec2" src={r2} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec10" src={r10} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec12" src={r12} placeholderSrc={thumbnail} width="300" height="81" />
    <LazyLoadImage effect="blur" alt="rec5" src={r5} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec13" src={r13} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec8" src={r8} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec9" src={r9} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec11" src={r11} placeholderSrc={thumbnail} width="300" height="81" />
  <LazyLoadImage effect="blur" alt="rec14" src={r14} placeholderSrc={thumbnail} width="300" height="81" />
</Marquee>



          </div>
        </div>
      </section>

    </>
  );
}

export default TopRequiters;
