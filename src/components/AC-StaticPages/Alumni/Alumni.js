//import React, { useState } from 'react'
import React, { useState } from 'react';
import "./Alumni.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.webp";
import r2 from "../../../assets/img/partners/r2.webp";
import r4 from "../../../assets/img/partners/r4.webp";
import r5 from "../../../assets/img/partners/r5.webp";
import r6 from "../../../assets/img/partners/r6.webp";
import r7 from "../../../assets/img/partners/r7.webp";
import r8 from "../../../assets/img/partners/SumoDigital.webp";
import r9 from "../../../assets/img/partners/Ubisoft.webp";
import r10 from "../../../assets/img/partners/Sony.webp";
import r11 from "../../../assets/img/partners/Qualcomm.webp";
import r12 from "../../../assets/img/partners/Juego.webp";
import r13 from "../../../assets/img/partners/Gamitronics.webp";
import r14 from "../../../assets/img/partners/GSNgames.webp";
import speaker7 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DennchenLama.webp";
import speaker8 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DevashishTiwari.webp";
import speaker9 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DikshaSubba.webp";
import speaker10 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/EkagraMittal.webp";
import speaker11 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/GiriNithinYogendra.webp";
import speaker12 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/HarshalShinde.webp";
import speaker13 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/HritamSamanta.webp";
import speaker14 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/JithinPeter.webp";
import speaker15 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Naanisreeram.webp";
import speaker16 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Pallicharantej.webp";
import speaker17 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RishiPrakaashSM.webp";
import speaker18 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SrutiChekka.webp";
import speaker19 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/TarunReddi.webp";
import speaker20 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/VijaySivatejMareedu.webp";
import speaker1 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnicsChacko.webp";
import speaker2 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DevashishTiwari.webp";
import speaker3 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnshulSoni.webp";
import speaker4 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnoushkaYadav.webp";
import speaker5 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AakashParameswaran.webp";
import speaker6 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AdityaMehta.webp";
import speaker21 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Harshiniisvi.webp";
import speaker22 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SimbramDas.webp";
import speaker23 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnirudhBhandari.webp";
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

  const speakers = [
    {
      img: speaker3,
      name: "AnshulSoni",
      title: "Engineering Manager",
      subtitle: "Electronic Arts (EA), Canada"
    },
    {
      img: speaker23,
      name: "Anirudh Bhandari",
      title: "Senior Engineer",
      subtitle: "Qualcomm, Bengaluru"
    },
    {
      img: speaker5,
      name: "Aakash Parameswaran",
      title: "Founder/CEO",
      subtitle: "Fable Fox, Canada"
    },
    {
      img: speaker22,
      name: "Simbram Das",
      title: "Project Co-ordinator",
      subtitle: "Lakshya Digital, Pune"
    },
    {
      img: speaker15,
      name: "Nani Surya Teja Sreerama",
      title: "Software Developer",
      subtitle: "East Side Games, Canada"
    },
    {
      img: speaker12,
      name: "Harshal Shinde ",
      title: "Game Developer",
      subtitle: "Boo boo games, Ahemdabad"
    },
    {
      img: speaker6,
      name: "Aditya Mehta",
      title: "Senior Game Designer",
      subtitle: "Scopely, USA"
    },
    {
      img: speaker17,
      name: "Rishi Prakaash S M",
      title: "Software Developer",
      subtitle: "Mobilityware, USA"
    },
    {
      img: speaker14,
      name: "Jithin Peter",
      title: "Programmer",
      subtitle: "Sumo Digital Ltd, Pune"
    },
    {
      img: speaker18,
      name: "Sruthi Chekka",
      title: "Game Artist",
      subtitle: "88 Games, Bengaluru"
    },

    {
      img: speaker7,
      name: "Dennchen Lama",
      title: "Game Designer",
      subtitle: "Ubisoft, UAE"
    },
    {
      img: speaker19,
      name: "Tarun Reddi",
      title: "Project Manager",
      subtitle: "Pidgin, USA"
    },
    {
      img: speaker11,
      name: "Giri Nithin Yogendra",
      title: "Software Developer ",
      subtitle: "Paycom, USA"
    },
    {
      img: speaker9,
      name: "Diksha Subba",
      title: "Game Developer",
      subtitle: "Gape Labs, Bengaluru"
    },
    {
      img: speaker2,
      name: "Divyanshu Soni",
      title: "Motion Graphic Designer",
      subtitle: "HitWicket, Hyderabad"
    },
    {
      img: speaker1,
      name: "Anics Chacko",
      title: "Gameplay Engineer",
      subtitle: "Zynga, Hyderabad"
    },
    {
      img: speaker8,
      name: "Devashish Tiwari",
      title: "Game Play Programmer",
      subtitle: "Tuttifrutti Interactive, Kerala"
    },

    {
      img: speaker4,
      name: "Anoushka Yadav",
      title: "Game Designer ",
      subtitle: "Electronic Arts, Hyderabad"
    },



    {
      img: speaker13,
      name: "Hritam Samanta",
      title: "Graphic User Interface <br/> <br/> Designer",
      subtitle: "American Software Resources, Inc, Hyderabad"
    },
    {
      img: speaker16,
      name: "Palli charan tej ",
      title: "Graphic User Interface <br/> <br/> Designer",
      subtitle: "American S/W Resources, Hyderabad"
    },

    {
      img: speaker10,
      name: "Ekagra Mittal",
      title: "Junior Engineer",
      subtitle: "Kuro Gaming, Hyderabad"
    },

    {
      img: speaker20,
      name: "Vijay Sivatej Mareedu",
      title: "3D Artist",
      subtitle: "GameShastra, Hyderabad"
    },
    {
      img: speaker21,
      name: "Harshini isvi",
      title: "Senior Designer",
      subtitle: "IVY, Hyderabad"
    },
  ];

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
          <meta property="og:description" name="description" content="Backstage Pass graduates are making an impact in the gaming industry. Explore inspiring success stories and connect with our alumni network for career growth." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/alumni-success/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/alumni-success/" />
        </Helmet>

        <div className="courses-wrapper">
          <div className="CourseesOverViewA">
            <p className="suprts mar-t" style={{ marginTop: isMobileState ? "20px" : "30px" }}>Backstage Pass is leaving its mark not only across India but across the globe. Some of the top companies that our alumni are currently working at are:</p>


            <Marquee pauseOnHover={true} // ✅ stops scroll on hover
              speed={100}
              style={{
                padding: "0px 20px",
                marginBottom: isMobileState ? "0px" : "10px",
              }} className='recuitersList'>
              <img alt="rec4" src={r4} width={"300"} height={"81"} />
              <img alt="rec1" src={r1} width={"300"} height={"81"} />
              <img alt="rec10" src={r7} width={"300"} height={"81"} />
              <img alt="rec2" src={r2} width={"300"} height={"81"} />
              <img alt="rec10" src={r10} width={"300"} height={"81"} />
              {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}

              <img alt="rec12" src={r12} width={"300"} height={"81"} />
              <img alt="rec5" src={r5} width={"300"} height={"81"} />
              <img alt="rec13" src={r13} width={"300"} height={"81"} />
              <img alt="rec9" src={r6} width={"300"} height={"81"} />

              <img alt="rec8" src={r8} width={"300"} height={"81"} />
              <img alt="rec9" src={r9} width={"300"} height={"81"} />

              <img alt="rec11" src={r11} width={"300"} height={"81"} />


              <img alt="rec14" src={r14} width={"300"} height={"81"} />
            </Marquee>

            <h2 className="mainHeadingTotal">What Are They Working As?</h2>
            {/* {isMobileState ?
              <div id="Featured-Mentorsd" backgroundColor="brown" height="150vh">


                <div className="maincoll clear-fix">
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo1} alt="logo" />
                      <figcaptionsalu>


                        <div className="mainggameing"><p>Sikander Manshahia</p><div>Core Systems Programmer @ Creative Assembly</div></div>
                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo2} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Aakash Parameswaran</p><div>Founder / Creative Director @ Fable Fox</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo3} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Rishi Prakaash S M</p><div>Software Developer I @ MobilityWare</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo4} alt="logo" />
                      <figcaptionsalu>


                        <div className="mainggameing"><p>Nani Surya Teja Sreerama</p><div>Software Engineer II @ East Side Games</div></div>
                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo5} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Tarun Reddi</p><div>Project Manager @ Pidgin</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo6} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Sri Ram Kaushik Karnati</p><div>Programming Analyst @ Cognizant</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo7} alt="logo" />
                      <figcaptionsalu>


                        <div className="mainggameing"><p>Rohit Lalwani</p><div>System Engineer @ Unasys</div></div>
                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo8} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Nagnath Chippa</p><div>Senior Developer @ Imagination Technologies</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo9} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Dennchen Lama</p><div>Game Designer @ Ubisoft in Abu Dhabi</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>

                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo10} alt="logo" />
                      <figcaptionsalu>


                        <div className="mainggameing"><p>Agnibha Goswami</p><div>Business Analyst @ Labaiik</div></div>
                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo11} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Fasi Uddin Mir</p><div>Game Design Intern @ Sports Media Inc</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>
                  <div className="cardssalu maincolltwoalu">
                    <figure className="figuresalu">
                      <img src={logo12} alt="logo" />
                      <figcaptionsalu>
                        <div className="mainggameing"><p>Kedar Chandulur</p><div>Game Programmer @ Games For Love</div></div>

                      </figcaptionsalu>
                    </figure>
                  </div>

                </div>


              </div> :


              <div id="Featured-Mentorsd" backgroundColor="brown" height="150vh">

                <div className="maincoll clear-fix">
                  <div
                    className="scroll-container"
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="scroll-content">

                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo1} alt="logo" />
                          <figcaptionsalu>


                            <div className="mainggameing"><p>Sikander Manshahia</p><div>Core Systems Programmer @ Creative Assembly</div></div>
                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo2} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Aakash Parameswaran</p><div>Founder / Creative Director @ Fable Fox</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo3} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Rishi Prakaash S M</p><div>Software Developer I @ MobilityWare</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo4} alt="logo" />
                          <figcaptionsalu>


                            <div className="mainggameing"><p>Nani Surya Teja Sreerama</p><div>Software Engineer II @ East Side Games</div></div>
                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo5} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Tarun Reddi</p><div>Project Manager @ Pidgin</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo6} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Sri Ram Kaushik Karnati</p><div>Programming Analyst @ Cognizant</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo7} alt="logo" />
                          <figcaptionsalu>


                            <div className="mainggameing"><p>Rohit Lalwani</p><div>System Engineer @ Unasys</div></div>
                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo8} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Nagnath Chippa</p><div>Senior Developer @ Imagination Technologies</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo9} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Dennchen Lama</p><div>Game Designer @ Ubisoft in Abu Dhabi</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo10} alt="logo" />
                          <figcaptionsalu>


                            <div className="mainggameing"><p>Agnibha Goswami</p><div>Business Analyst @ Labaiik</div></div>
                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo11} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Fasi Uddin Mir</p><div>Game Design Intern @ Sports Media Inc</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>
                      <div className="cardssalu maincolltwoalu">
                        <figure className="figuresalu">
                          <img src={logo12} alt="logo" />
                          <figcaptionsalu>
                            <div className="mainggameing"><p>Kedar Chandulur</p><div>Game Programmer @ Games For Love</div></div>

                          </figcaptionsalu>
                        </figure>
                      </div>


                    </div>


                  </div>
                </div>
              </div>} */}
            <div className="speakers-container">
              {speakers.map((s, i) => (
                <div className="speaker-card" key={i}>
                  <div className="speaker-box">
                    <img src={s.img} alt={s.name} />
                    <span className="speaker-border"></span>
                  </div>

                  <h3 className="speaker-name">{s.name}</h3>
                 <p
  className="speaker-title"
  dangerouslySetInnerHTML={{ __html: s.title }}
></p>

                  
                  <p style={{ color: "#000", opacity: "0.8", marginTop: "0px",fontSize:"13px" }}>{s.subtitle}</p>
                </div>
              ))}
            </div>


            <h2 className="mainHeadingTotal" style={{ marginBottom: isMobileState ? "0px" : "30px" }}>Get In Touch With Us</h2>
            <p className="suprtsMobile mobilehead">If you have graduated from Backstage Pass, we would love to get in touch with you. Fill the form below to register yourself into our Alumni Database.<br /><br />
              Don’t worry, we will not spam your inbox or call log!
            </p>
            <div className="fom-ad">
              <div className="containers">
                <form onSubmit={handleSubmit}>
                  <h3 className="mainHeadingTotal">Alumni Registration Form </h3>
                  <div className="contents">
                    <div className="input-boxs">
                      <label htmlFor="name">Name</label>
                      <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="year">Year Of Graduation</label>
                      <input type="text" placeholder="Year" name="year" value={formData.year} onChange={handleChange}  style={{ border: "1px solid #ccc" }}
                      />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="course">Course</label>
                      <input type="text" placeholder="Course" name="course" value={formData.course} onChange={handleChange} required style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="campus">Campus</label>
                      <input type="text" placeholder="Campus" name="campus" value={formData.campus} onChange={handleChange}  style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="number">Mobile Number</label>
                      <input type="tel" placeholder="Mobile Number" name="number" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.number} onChange={handleChange}  style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="email">Email ID</label>
                      <input type="email" placeholder="Email ID" name="email" value={formData.email} onChange={handleChange}  style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="linkdin">LinkedIn</label>
                      <input type="url" placeholder="LinkedIn" name="linkdin" value={formData.linkdin} onChange={handleChange}  style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="emply">Employment Status</label>
                      <input type="text" placeholder="Employment Status" name="emply" value={formData.emply} onChange={handleChange}  style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="org">Current Organisation</label>
                      <input type="text" placeholder="Current Organisation" name="org" value={formData.org} onChange={handleChange} required style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="des">Designation</label>
                      <input type="text" placeholder="Designation" name="des" value={formData.des} onChange={handleChange}  style={{ border: "1px solid #ccc" }} />
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

