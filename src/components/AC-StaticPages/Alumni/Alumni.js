//import React, { useState } from 'react'
import React, { useState } from 'react';
import "./Alumni.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.png";
import r2 from "../../../assets/img/partners/r2.png";
import r4 from "../../../assets/img/partners/r4.png";
import r5 from "../../../assets/img/partners/r5.png";
import r6 from "../../../assets/img/partners/r6.svg";
import r7 from "../../../assets/img/partners/r7.png";
import logo1 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Sikander-Manshahia.webp";
import logo2 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Aakash -Parameswaran.webp";
import logo3 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Rishi-Prakaash.webp";
import logo4 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Nani-Surya-Teja- Sreerama.webp";
import logo5 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Tarun-Reddi.webp";
import logo6 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Sri-Ram-Kaushik- Karnati.webp";
import logo7 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Rohit-Lalwani.webp";
import logo8 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Nagnath-Chippa.webp";
import logo9 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Dennchen-Lama.webp";
import logo10 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Agnibha-Goswami.webp";
import logo11 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Fasi-Uddin-Mir.webp";
import logo12 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Kedar-Chandulur.webp";
import { useSelector, shallowEqual } from "react-redux";


import { Helmet } from "react-helmet";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};







function Alumni() {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    course: '',
    campus: '',
    number: '',
    email: '',
    linkdin: '',
    emply: '',
    org: '',
    des: '',
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);

    alert("Data Submitted Succesfully");
    fetch('https://www.backstagepass.co.in/reactapi/alumini.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });


    setFormData({
      name: '',
      year: '',
      course: '',
      campus: '',
      number: '',
      email: '',
      linkdin: '',
      emply: '',
      org: '',
      des: '',
    });
  };

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassass' : 'AssistanceB'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Alumni Success</h1></div>
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
            "name": "Alumni Success | Backstage Pass Institute of Gaming",
            "item": "https://www.backstagepass.co.in/life-at-bsp/alumni-success/"  
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
              "target": "https://www.backstagepass.co.in/life-at-bsp/alumni-success/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
            `}
          </script>
          <title>Alumni Success | Backstage Pass Institute of Gaming</title>
          <meta property="og:title" content="Alumni Success | Backstage Pass Institute of Gaming" />
          <meta name="description" content="Backstage Pass graduates are making an impact in the gaming industry. Explore inspiring success stories and connect with our alumni network for career growth." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/alumni-success/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/alumni-success/" />
        </Helmet>

        <div className="courses-wrapper">
          <div className="CourseesOverViewA">
            <p className="suprts mar-t" style={{ marginTop: isMobileState ? "20px" : "30px" }}>Backstage Pass is leaving its mark not only across India but across the globe. Some of the top companies that our alumni are currently working at are:</p>


            <Marquee speed={100} style={{ Padding: "0px 20px" }} className='recuitersList'>
              <img alt="rec1" src={r1} width={"300"} height={"81"} />
              <img alt="rec2" src={r2} width={"300"} height={"81"} />
              {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}
              <img alt="rec4" src={r4} width={"300"} height={"81"} />
              <img alt="rec5" src={r5} width={"300"} height={"81"} />
              <img alt="rec9" src={r6} width={"300"} height={"81"} />
              <img alt="rec10" src={r7} width={"300"} height={"81"} />

            </Marquee>
            <h2 className="mainHeadingTotal">WHAT ARE THEY WORKING AS?</h2>
            {isMobileState ?
              <div id="Featured-Mentorsd" backgroundColor="brown" height="150vh">


                <div className="maincoll clear-fix">
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo1} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Sikander Manshahia</p><div>Core Systems Programmer @ Creative Assembly</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo2} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Aakash Parameswaran</p><div>Founder / Creative Director @ Fable Fox</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo3} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Rishi Prakaash S M</p><div>Software Developer I @ MobilityWare</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo4} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Nani Surya Teja Sreerama</p><div>Software Engineer II @ East Side Games</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo5} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Tarun Reddi</p><div>Project Manager @ Pidgin</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo6} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Sri Ram Kaushik Karnati</p><div>Programming Analyst @ Cognizant</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo7} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Rohit Lalwani</p><div>System Engineer @ Unasys</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo8} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Nagnath Chippa</p><div>Senior Developer @ Imagination Technologies</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo9} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Dennchen Lama</p><div>Game Designer @ MyWhoosh</div></div>

                      </figcaptions>
                    </figure>
                  </div>

                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo10} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Agnibha Goswami</p><div>Business Analyst @ Labaiik</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo11} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Fasi Uddin Mir</p><div>Game Design Intern @ Sports Media Inc</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo12} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Kedar Chandulur</p><div>Game Programmer @ Games For Love</div></div>

                      </figcaptions>
                    </figure>
                  </div>

                </div>


              </div> :


              <div id="Featured-Mentorsd" backgroundColor="brown" height="150vh">

                <div className="maincoll clear-fix">
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo1} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Sikander Manshahia</p><div>Core Systems Programmer @ Creative Assembly</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo2} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Aakash Parameswaran</p><div>Founder / Creative Director @ Fable Fox</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo3} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Rishi Prakaash S M</p><div>Software Developer I @ MobilityWare</div></div>

                      </figcaptions>
                    </figure>
                  </div>


                </div>
                <div className="maincoll clear-fix">
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo4} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Nani Surya Teja Sreerama</p><div>Software Engineer II @ East Side Games</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo5} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Tarun Reddi</p><div>Project Manager @ Pidgin</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo6} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Sri Ram Kaushik Karnati</p><div>Programming Analyst @ Cognizant</div></div>

                      </figcaptions>
                    </figure>
                  </div>


                </div>
                <div className="maincoll clear-fix">
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo7} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Rohit Lalwani</p><div>System Engineer @ Unasys</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo8} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Nagnath Chippa</p><div>Senior Developer @ Imagination Technologies</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo9} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Dennchen Lama</p><div>Game Designer @ MyWhoosh</div></div>

                      </figcaptions>
                    </figure>
                  </div>



                </div>
                <div className="maincoll clear-fix">
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo10} alt="logo" />
                      <figcaptions>


                        <div className="mainggameing"><p>Agnibha Goswami</p><div>Business Analyst @ Labaiik</div></div>
                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo11} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Fasi Uddin Mir</p><div>Game Design Intern @ Sports Media Inc</div></div>

                      </figcaptions>
                    </figure>
                  </div>
                  <div className="cardss maincolltwo">
                    <figure className="figures">
                      <img src={logo12} alt="logo" />
                      <figcaptions>
                        <div className="mainggameing"><p>Kedar Chandulur</p><div>Game Programmer @ Games For Love</div></div>

                      </figcaptions>
                    </figure>
                  </div>



                </div>
              </div>}

            <h2 className="mainHeadingTotal mobilehead">GET IN TOUCH WITH US</h2>

            <p className="suprtsMobile mobilehead">If you have graduated from Backstage Pass, we would love to get in touch with you. Fill the form below to register yourself into our Alumni Database.<br /><br />
              Don’t worry, we will not spam your inbox or call log!
            </p>
            <div className="fom-ad">
              <div className="containers">
                <form onSubmit={handleSubmit}>
                  <h3 className="mainHeadingTotal">ALUMNI REGISTRATION FORM</h3>
                  <div className="contents">
                    <div className="input-boxs">
                      <label htmlFor="name">Name</label>
                      <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="year">Year Of Graduation</label>
                      <input type="text" placeholder="Year" name="year" value={formData.year} onChange={handleChange} required style={{ border: "1px solid #ddd" }}
                      />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="course">Course</label>
                      <input type="text" placeholder="Course" name="course" value={formData.course} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="campus">Campus</label>
                      <input type="text" placeholder="Campus" name="campus" value={formData.campus} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="number">Mobile Number</label>
                      <input type="tel" placeholder="Mobile Number" name="number" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.number} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="email">Email ID</label>
                      <input type="email" placeholder="Email ID" name="email" value={formData.email} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="linkdin">LinkedIn</label>
                      <input type="url" placeholder="LinkedIn" name="linkdin" value={formData.linkdin} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="emply">Employment Status</label>
                      <input type="text" placeholder="Employment Status" name="emply" value={formData.emply} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="org">Current Organisation</label>
                      <input type="text" placeholder="Current Organisation" name="org" value={formData.org} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="des">Designation</label>
                      <input type="text" placeholder="Designation" name="des" value={formData.des} onChange={handleChange} required style={{ border: "1px solid #ddd" }} />
                    </div>
                  </div>

                  <div style={{ width: "220px", margin: "0 auto" }}>
                    <button type="submit" className='three button brand size200 w-full sm:w-auto'>SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>



          </div>




        </div>






      </div>

    </>
  )
}

export default Alumni;

