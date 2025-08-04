import React from 'react'
import "./Facilities.css";
import hstl2 from "../../../assets/img/test/hstl2.webp"
import hstl3 from "../../../assets/img/test/hstl3.webp"
import hstl5 from "../../../assets/img/test/hstl5.webp"
import location from "../../../assets/img/location.png";
import { CiPhone } from "react-icons/ci";
import { FaHome } from "react-icons/fa";




import { useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

function Courses(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'MobileClasshstl' : 'HostelB'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Hostel Facilities</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-container">
        <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org/", 
              "@type": "BreadcrumbList", 
              "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "India’s Best Game Development college | Backstage Pass Institute of Gaming",
                "item": "https://www.backstagepass.co.in/"  
              },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "Backstage Pass Institute of Gaming, college hostel facilities",
                "item": "https://www.backstagepass.co.in/life-at-bsp/facilities/"  
              }]
            }
              `}
          </script>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org/",
                "@type": "WebSite",
                "name": "Backstage Pass Institute of Gaming",
                "url": "https://www.backstagepass.co.in/",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.backstagepass.co.in/life-at-bsp/facilities/{search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
                `}
          </script>
          <title>Backstage Pass Institute of Gaming, college hostel facilities </title>
          <meta property="og:title" content="Backstage Pass Institute of Gaming, College Hostel Facilities" />
          <meta property="og:description" content="Live close to campus with our student-friendly hostel facilities. Spacious AC & Non-AC rooms, meals included, and a secure environment for a hassle-free stay." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/facilities/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/facilities/" />
        </Helmet>

        <p className='suprtsF'>We provide comfortable and secure hostel accommodations. This facility is currently only available for male students. Our hostels are designed to ensure a conducive environment for both study and relaxation.
        </p>

        <div className="courses-wrapper">
          <h2 className="mainHeadingTotal">ACCOMMODATION & FEES
          </h2>
          <p className='suprtsF'><a href="https://www.google.com/maps/place/Backstage+Pass+Institute+of+Gaming/@17.44016,78.392541,13z/data=!4m6!3m5!1s0x3bcb915c849c2fc5:0x8cde844cfd7d651e!8m2!3d17.4401601!4d78.3925411!16s%2Fg%2F1hjhgw81m?hl=en&entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D" target='_blanck' style={{ display: "contents", color: "#fff" }}><img src={location} alt="Location" /> <p>Plot No: 3-978, Road No: 49, Ayyappa Society, Madhapur, <br /> Hyderabad - 500081 </p></a>
          </p>

          {isMobileState ? <div>
            <div>
              <ul className='mbimg'>
                <li><img src={hstl2} alt="hostel" /></li>
                {/* <li><img src={hstl1} alt="hostel" /></li> */}
                <li><img src={hstl3} alt="hostel" /></li>
                {/* <li><img src={hstl6} alt="hostel" /></li> */}
                <li><img src={hstl5} alt="hostel" /></li>
              </ul>
            </div>
          </div> :
            <div className="gll">
              <div className="g1h">
                <img src={hstl2} alt="hostel" />
              </div>
              {/* <div className="g1">
                <img src={hstl1} alt="hostel" />
              </div> */}
              <div className="g1h">
                <img src={hstl3} className='' alt="hostel" />
              </div>
              {/* <div className="g1">
                <img src={hstl6} alt="hostel" />
              </div> */}
              <div className="g1h">
                <img src={hstl5} alt="hostel" />
              </div>



            </div>}
          <p className='suprtsF'>The hostel facility offers a variety of room-sharing options to suit different needs. Additionally, the fee is structured to be affordable. The accommodation fees is inclusive of food.
          </p>
          <div className="mainCourse1">

            <div className="mainCourseRight1">
              <h2><FaHome />Non AC Rooms
              </h2>
              <p>Available in 2, 3, 4, and 5-sharing configurations. The cost for this ranges from ₹8,000 to ₹12,000 per bed, depending on the room configuration.</p>

            </div>
          </div>
          <div className="mainCourse1">

            <div className="mainCourseRight1">

              <h2><FaHome />AC Rooms
              </h2>
              <p>Available with an additional charge of ₹1,000 per bed along with a shared power bill for the AC unit. This also requires a minimum commitment of one year.
              </p>

            </div>
          </div>
          <h2 className="mainHeadingTotal">HOW TO APPLY
          </h2>
          <p className='suprtsF'>Once a student has secured admission to the college, they can apply for hostel accommodation. The Hostel Supervisor will allocate rooms based on availability, ensuring a smooth and fair process.
          </p>
          <h2 className="mainHeadingTotal">HOSTEL DOs & DON’Ts
          </h2>

          <ul className='benfits1'>
            <li><div className='benfitIcon1'><img alt="recommend" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-256.png" /></div> <div className='benfitContent1'>We recommend that students bring their own bed sheets, blankets, pillows, pillow covers, meal plates, tea cups, and water bottles to make their stay more comfortable.

            </div></li>
            <li><div className='benfitIcon1'><img alt="recommend" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-256.png" /></div> <div className='benfitContent1'>Students are allowed to bring personal electronics like laptops and mobile phones.

            </div></li>
            <li><div className='benfitIcon1'><img alt="Norecommend" src="https://cdn1.iconfinder.com/data/icons/creative-round-ui/254/40-256.png" /></div> <div className='benfitContent1'>However, for safety reasons, certain electrical appliances such as immersion rods, iron boxes, induction stoves, and kettles are not permitted.

            </div></li>


          </ul>
          <h2 className="mainHeadingTotal">CONTACT US
          </h2>
          <div className='HostelMain1'>
            <div className='HostelMainleft'>
              <p>Hostel Supervisor <br />
                <b>Ammineni Jaya Chandra</b>
              </p>
            </div>
            <div className="HostelMainright">

              <div className="contact-wrapper">
                <div className="cont1">
                  <div className="contact-wrapper-inner">
                    <CiPhone className="iconsmain" />
                    <div>
                      <p><a href="tel:9490310390"> +91-9490310390</a></p>
                    </div></div></div></div>



            </div>


          </div>
        </div>

      </div>


    </>
  )
}

Courses.propTypes = {

}

export default Courses;

