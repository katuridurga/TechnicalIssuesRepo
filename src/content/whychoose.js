import React from "react";
import "./whychoose.css";
import "./FeaturedProducts.css";
import awic from '../assets/img/banners/global-network.png';
import awic1 from '../assets/img/banners/expert.png';
import awic2 from '../assets/img/banners/medal.png';
import awic3 from '../assets/img/banners/mindset.png';
import awic4 from '../assets/img/banners/loan-to-value.png';
import awic5 from '../assets/img/banners/business-man.png';




function HomeContent() {


  return (
    <>

      <section className="tuitiona-aid-sections">
        <div className="tuitiona-aid-sectionsInner">
          {typeof window !== undefined && !window.location.pathname.includes("/courses/") ?
            <div className="tuitiona-aid-sectionsLeft">

              <div className="show-grid">
                <h3 className="mainHeadingTotal">
                  Why choose us?
                </h3>
                <div className="maind">

                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic2} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">#1 Gaming Institute</p>
                      Specialized education in gaming with industry-aligned curriculum
                    </div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Industry Exposure</p>

                      Networking opportunities and strategic tie-ups with top gaming studios</div></div>

                </div>
                <div className="maind">
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic1} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Industry-experienced Mentors</p>

                      Guidance from industry veterans with an experience of 10+ years</div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic3} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Hands-on Learning</p>

                      Mimicked real-world scenarios for practical learning
                    </div></div>
                </div>
                <div className="maind">
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic4} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Financial Aid</p>

                      Flexible financial aid options for affordable quality learning
                    </div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic5} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Professional Readiness</p>

                      Portfolio development for the competitive market
                    </div>
                  </div>
                </div>
              </div>


            </div> : null}


        </div>

      </section>
    </>
  );
}

export default HomeContent;
