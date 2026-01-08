import React from 'react';
import Marquee from "react-fast-marquee";
import r1 from "../assets/img/partners/r1.webp";
import r2 from "../assets/img/partners/r2.webp";
import rock from "../assets/img/partners/2.webp";
import superg from "../assets/img/partners/supergaming.png";
import r4 from "../assets/img/partners/r4.webp";
import r5 from "../assets/img/partners/r5.webp";
import r7 from "../assets/img/partners/r7.webp";
import easports from "../assets/img/partners/r6.webp";
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
              speed={60}
              gradient={false}
              pauseOnHover={true}
              className="recuitersList"
              style={{ padding: "0px 20px" }}
            >
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r4} alt="rec4" /></div>
                <div className="recuitersList-item"><LazyLoadImage effect="blur" src={easports} alt="easports" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={rock} alt="rock" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={superg} alt="superg" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r1} alt="rec1" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r7} alt="rec7" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r2} alt="rec2" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r10} alt="rec10" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r12} alt="rec12" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r5} alt="rec5" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r13} alt="rec13" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r8} alt="rec8" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r9} alt="rec9" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r11} alt="rec11" /></div>
              <div className="recuitersList-item"><LazyLoadImage effect="blur" src={r14} alt="rec14" /></div>
            </Marquee>



          </div>
        </div>
      </section>

    </>
  );
}

export default TopRequiters;
