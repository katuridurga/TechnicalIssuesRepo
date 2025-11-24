import React, { useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "./ContactUs.css";
import HomeContent from "../../../content/HomeContent";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaPlus, FaMinus } from "react-icons/fa";
import c1 from "../../../assets/img/Courses/careeroprt.webp";
import maps from "../../../assets/img/Icons/Map.webp";




function ContactUs(props) {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);

    const isMobileState = useSelector(
        state => state.mainReducer.isMobile,
        shallowEqual
    );
  
const faqs = [
  {
    question: "What is the duration of the Advanced Diploma and Diploma courses?",
    answer:
      "The duration of the Advanced Diploma courses is 1 year, and Diploma courses is 6 months.",
  },
  {
    question: "What is the eligibility criteria for these courses?",
    answer:
      "The eligibility criteria for both Diploma and Advanced Diploma courses is 10+2 or Equivalent. For particular courses that include computer programming, Math may be a prerequisite.",
  },
  {
    question: "Are the courses recognized?",
    answer:
      "For its Advanced Diploma and Diploma courses, Backstage Pass University of Gaming is affiliated to Lincoln University College. All our courses have industry-aligned curriculums with final approvals from the university. Each of these roles offers unique opportunities to contribute to the gaming industry.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Both Diploma and Advanced Diploma are degree courses. Students will receive a degree upon completion of the courses.",
  },
  {
    question: "What is the admission process for the Diploma and Advanced Diploma courses?",
    answer:
      "Once the eligibility criteria is met, students must fill the application form to take the process further. Once the application is approved, a counseling session with the admissions team is scheduled. After payment, the student’s seat may be reserved. For more detailed information, you can visit our admission process page for more details.",
  },
  {
    question: "Is there an entrance exam for admission?",
    answer:
      "No, there is no entrance exam for admissions related to Diploma and Advanced Diploma courses.",
  },
  {
    question: "Is Backstage Pass accredited?",
    answer:
      "Yes, Backstage Pass is affiliated with the Jawaharlal Nehru Architecture and Fine Arts University (JNAFAU) for all its Bachelor’s and Master’s courses. Whereas for the Advanced Diploma and Diploma courses, it is affiliated to the Lincoln University College. This ensures that the courses offered meet educational standards and can be trusted for quality education in game design and development.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



    return (
        <>


            <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular  ${isMobileState ? 'MobileClasscont' : 'contactUsbanner'}`}>
                <div className="et_pb_row et_pb_row_0">
                    <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                        <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner"><h1 className="title white-txt">Contact Us</h1></div>
                        </div>
                    </div>
                </div>
            </div>
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
                        "name": "Contact Backstage Pass Institute of Gaming | Get in Touch for Gaming College Admissions & Queries",
                        "item": "https://www.backstagepass.co.in/contactus/"  
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
                        "target": "https://www.backstagepass.co.in/contactus/{search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                    }
                    `}
                </script>
                <title>Contact Backstage Pass Institute of Gaming | Get in Touch for Gaming College Admissions & Queries</title>

                <meta property="og:title" content="Contact Backstage Pass Institute of Gaming | Get in Touch for Gaming College Admissions & Queries" />
                <meta name="description" content="Have questions about game development courses, admissions, or placements? Call, fill out the form, email, or visit us at Backstage Pass Institute of Gaming Hyderabad, India. Talk to our team today!" />
                <meta property="og:url" content="https://www.backstagepass.co.in/contactus/" />
                <link rel="canonical" href="https://www.backstagepass.co.in/contactus/" />

            </Helmet>
            <div className='courseUpdatess'>
                <div className='spcear'>
                      <div className=''>
                                            <ul>
                    <li style={{height:"auto"}}>
                       
                            <h3 class="text-center  enqhd">Talk To Us</h3>
                             <p style={{ color: "#000" }}>
                            Want to know more about the college, courses, fee structure or admission process? Call or write to us!</p>
                        <div className='ic-sty cont1'>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Phone"><path d="M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z"></path></g></svg><div><p><a href="tel:8008002794">+91-8008002794</a>
                            </p></div></div>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Phone"><path d="M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z"></path></g></svg><div><p><a href="tel:8008002795">+91-8008002795</a>
                            </p></div></div>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg><div><p><a href="mailto:info@backstagepass.co.in">info@backstagepass.co.in</a></p></div></div>
                             <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg><div><p><a href="mailto:admissions@backstagepass.co.in">admissions@backstagepass.co.in</a></p></div></div></div>
                    </li>
 <li style={{height:"auto"}}>
                      
                            <h3 class="text-center  enqhd">Head Office</h3>
                              <p style={{ color: "#000" }}>
                            Plot No. 72, beside Spring Board, Jubilee Enclave, HITEC City, Hyderabad, Telangana 500081
                        </p>
                        <div className='mainbtn'>
                            {/* <button className="lc"><a target='_blank' href="https://www.google.com/maps/place/Backstage+Pass+Institute+of+Gaming/@17.440162,78.392406,15z/data=!4m6!3m5!1s0x3bcb915c849c2fc5:0x8cde844cfd7d651e!8m2!3d17.4401621!4d78.3924059!16s%2Fg%2F1hjhgw81m?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D">MAPS Directions</a></button> */}
                            {/* <img src={maps} alt="maps"/> */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0933141003975!2d78.37267337493633!3d17.455247283443597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915c849c2fc5%3A0x8cde844cfd7d651e!2sBackstage%20Pass%20Institute%20of%20Gaming!5e0!3m2!1sen!2sin!4v1757322480056!5m2!1sen!2sin" width={isMobileState ? "100%" : "547"} height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                        </div>
                    </li>
                    <li style={{height:"auto"}}>
                        
                            <h3 class="text-center  enqhd">Placement-related Queries?</h3>
                            <p style={{ color: "#000" }}>
                            We have a dedicated team that helps our students for placement-support related queries. Call or write to us!
                        </p>
                        <div className='ic-sty cont1'>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Phone"><path d="M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z"></path></g></svg><div><p><a href="tel:8977945702">+91-8977945702</a></p></div></div>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg><div><p><a href="mailto:placements@backstagepass.co.in">placements@backstagepass.co.in</a></p></div></div></div>

                    </li>
                   
                    {/* <li>
                        <p style={{ color: "#fff" }}>
                            <p class="text-center enqhd" >North India Office</p>

                            <p><b>Address:</b></p>

                            <p> LGF 16, A Block,  North View Park,</p>
                            <p> Near Singpura Chowk, Ambala Chandigarh Highway, </p>
                            <p>Zirakpur, SAS Nagar - 140603.</p>
                            <p></p>
                            <p className='krish'><b>Phone No:</b> <a href="tel:9056225588" className='cont1'>+91-9056225588</a></p>
                            <p className='krish'><b> Email:</b> <a href="mailto:krishna@backstagepass.co.in" className='cont1'  >krishna@backstagepass.co.in </a></p>

                        </p></li> */}
                    {/* <li>
                        <p style={{ color: "#000" }}>
                            <p class="text-center enqhd" >Talk To A Mentor</p>

                            Need expert advice on the career opportunities in the gaming industry? Schedule a call with one of our mentors.
                        </p>
                        <div className='mainbtn'>
                            <button className=" three button brand size200" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">Coming Soon</button>
                        </div>
                    </li> */}
                </ul>
                </div>
         
                    </div>

            </div>

  <section className="max-w-3xl mx-auto p-6 iconsv" style={{ background: "#fff", color: "#000" }}>
     
                <h2 className="mainHeadingTotal" style={{color:"#ec1923"}}>Don’t Wish To Talk Or Type?</h2>

                <p className='faqsC' style={{ color: "#000" }}>Find answers to some Frequently Asked Questions below!</p>

   <div className="faqcontact border rounded-lg bg-white">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="p-4 inline-block justify-start" style={{borderBottom:"1px solid#d8d7d7", width:isMobileState?"90%":"70%", margin:"0px auto"}}>
      <button
        className="w-full flex justify-center items-center text-left"
        onClick={() => toggleFAQ(index)}
        style={{
          background: "#fff",
          color: "#000",
          justifyContent: "flex-start",
          paddingLeft:"0px"
      
        }}
      >
         {/* Icon inside circle */}
        <span
          className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full text-black"
          style={{
            background: "#fff",
            color: "#000",
            border: "1px solid #000",
            borderRadius: "50%",
          }}
        >
          {openIndex === index ? (
            <FaMinus className="w-3 h-3" />
          ) : (
            <FaPlus className="w-3 h-3" />
          )}
        </span>
        <span className="faqquestion text-lg font-medium text-gray-800">
          {faq.question}
        </span>

       
      </button>

      {openIndex === index && (
        <p
          className="mt-3 text-gray-600 faqa"
          style={{ background: "#fff", color: "#000" }}
        >
          {faq.answer}
        </p>
      )}
    </div>
  ))}
</div>



    </section>

            <HomeContent />
        </>
    )
}


export default ContactUs;

