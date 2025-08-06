import React, { useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import "./ContactUs.css";
import HomeContent from "../../../content/HomeContent";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";





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
                <ul>
                    <li style={{ height: isMobileState ? "auto" : "295px" }}>
                        <p style={{ color: "#fff" }}>
                            <p class="text-center  enqhd">Talk To Us</p>
                            Want to know more about the college, courses, fee structure or admission process? Call or write to us!</p>
                        <div className='ic-sty cont1'>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Phone"><path d="M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z"></path></g></svg><div><p><a href="tel:8008002794">+91-8008002794</a>
                            </p></div></div>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Phone"><path d="M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z"></path></g></svg><div><p><a href="tel:8008002795">+91-8008002795</a>
                            </p></div></div>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg><div><p><a href="mailto:info@backstagepass.co.in">info@backstagepass.co.in</a></p></div></div></div>
                    </li>

                    <li style={{ height: isMobileState ? "auto" : "295px" }}>
                        <p style={{ color: "#fff" }}>
                            <p class="text-center  enqhd">Placement-related Queries?</p>
                            We have a dedicated team that helps our students for placement-support related queries. Call or write to us!
                        </p>
                        <div className='ic-sty cont1'>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Phone"><path d="M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z"></path></g></svg><div><p><a href="tel:8977945702">+91-8977945702</a></p></div></div>
                            <div class="contact-wrapper-inner hvref"><svg className="iconsmain" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg><div><p><a href="mailto:placements@backstagepass.co.in">placements@backstagepass.co.in</a></p></div></div></div>

                    </li>
                    <li>
                        <p style={{ color: "#fff" }}>
                            <p class="text-center  enqhd">HEAD OFFICE</p>
                            #2-46/2/8/L/21, Backstage Pass Institute of Gaming, Near Metro Pillar No. C1725, Beside Runee Homes, Madhapur, Hyderabad - 500081
                        </p>
                        <div className='mainbtn'>
                            {/* <button className="lc"><a target='_blank' href="https://www.google.com/maps/place/Backstage+Pass+Institute+of+Gaming/@17.440162,78.392406,15z/data=!4m6!3m5!1s0x3bcb915c849c2fc5:0x8cde844cfd7d651e!8m2!3d17.4401621!4d78.3924059!16s%2Fg%2F1hjhgw81m?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D">MAPS Directions</a></button> */}

                            <iframe title="Contact Us Google Map Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.633128789017!2d78.392406!3d17.440162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915c849c2fc5%3A0x8cde844cfd7d651e!2sBackstage%20Pass%20Institute%20of%20Gaming!5e0!3m2!1sen!2sin!4v1724395529987!5m2!1sen!2sin" width={isMobileState ? "100%" : "547"} height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
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
                    <li>
                        <p style={{ color: "#fff" }}>
                            <p class="text-center enqhd" >Talk To A Mentor</p>

                            Need expert advice on the career opportunities in the gaming industry? Schedule a call with one of our mentors.
                        </p>
                        <div className='mainbtn'>
                            <button className=" three button brand size200" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">Coming Soon</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div id="chapter122">
                <h2 className="mainHeadingTotal">Don’t Wish To Talk Or Type?</h2>

                <p className='faqsC' style={{ color: "#fff" }}>Find answers to some Frequently Asked Questions below!</p>
                <div id='chapternew'>

                    <div style={{ position: "relative", height: isMobileState ? "auto" : "860px" }}>
                        <div id="pointerr" className={isActive1 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <p>What is the duration of the Advanced Diploma and Diploma courses?</p>
                                <div className='pluin' onClick={() => setIsActive1(!isActive1)}> {!isActive1 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                            </div>
                            {isActive1 && <div className="faqsC" style={{ display: isActive1 ? "block" : "none" }}><p>The duration of the Advanced Diploma courses is 1 year, and Diploma courses is 6 months. </p>

                            </div>}
                        </div>


                        <div id="pointerr1" className={isActive2 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <div className='pluin' onClick={() => setIsActive2(!isActive2)}> {!isActive2 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                                <p>What is the eligibility criteria for these courses?</p>

                            </div>
                            {isActive2 && <div className="faqsC" id="HiddenText34" style={{ display: isActive2 ? "block" : "none" }}><p>The eligibility criteria for both Diploma and Advanced Diploma courses is 10+2 or Equivalent. For particular courses that include computer programming, Math may be a prerequisite.</p></div>}
                        </div>

                        <div id="pointerr2" className={isActive3 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <p>Are the courses recognized?</p>
                                <div className='pluin' onClick={() => setIsActive3(!isActive3)}> {!isActive3 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                            </div>
                            {isActive3 && <div className="faqsC" style={{ display: isActive3 ? "block" : "none" }}><p>For its Advanced Diploma and Diploma courses, Backstage Pass University of Gaming is affiliated to Lincoln University College. All our courses have industry-aligned curriculums with final approvals from the university.
                                {/* After the completion of the Diploma course, there is a wide range of opportunities.


                               <ul><li><span style={{fontWeight:"900",fontSize:"25px"}}>Game Design and Production</span>: This course prepares you for various roles in the gaming industry including Game Designer, Level Designer, Quality Assurance Tester, and Producer.</li>
                               <li><span style={{fontWeight:"900",fontSize:"25px"}}>Game Development With Unity </span>: As Unity is a popular game engine for creating both 2D and 3D games, it opens up several technical roles that include Unity developer, AR/VR developer, Simulation developer, Mobile game developer, and Technical artist.</li>

                            <li><span style={{fontWeight:"900",fontSize:"25px"}}>3D Environment Art for Games </span> : This course mainly focuses on creating detailed and immersive environments for games, opening up career paths that include 3D Environment artists, Texture artists, Lighting artists, Prop artists, and Technical artists.</li> 
                               
                               </ul> */}
                                Each of these roles offers unique opportunities to contribute to the gaming industry.
                            </p></div>}

                        </div>

                        <div id="pointerr3" className={isActive4 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <div className='pluin' onClick={() => setIsActive4(!isActive4)}> {!isActive4 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                                <p>Will I receive a certificate upon completion?</p>

                            </div>
                            {isActive4 && <div className="faqsC" id="HiddenText34" style={{ display: isActive4 ? "block" : "none" }}><p>Both Diploma and Advanced Diploma are degree courses. Students will receive a degree upon completion of the courses.</p></div>}
                        </div>








                        <div id="pointerr4" className={isActive5 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <p>What is the admission process for the Diploma and Advanced Diploma courses?</p>
                                <div className='pluin' onClick={() => setIsActive5(!isActive5)}> {!isActive5 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                            </div>
                            {isActive5 && <div className="faqsC" style={{ display: isActive5 ? "block" : "none" }}><p>Once the eligibility criteria is met, students must fill the application form to take the process further. Once the application is approved, a counseling session with the admissions team is scheduled. After payment, the student’s seat may be reserved

                                For more detailed information, you can visit our <Link style={{ color: "#ed1923" }} to={"/admissions/admission-process/"}>admission process page</Link> for more details.</p></div>}

                        </div>


                        <div id="pointerr5" className={isActive6 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <div className='pluin' onClick={() => setIsActive6(!isActive6)}> {!isActive6 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                                <p>Is there an entrance exam for admission?</p>

                            </div>
                            {isActive6 && <div className="faqsC" id="HiddenText34" style={{ display: isActive6 ? "block" : "none" }}><p>No, there is no entrance exam for admissions related to Diploma and Advanced Diploma courses.</p></div>}
                        </div>






                        <div id="pointerr6" className={isActive7 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <p>Is Backstage Pass accredited?</p>
                                <div className='pluin' onClick={() => setIsActive7(!isActive7)}> {!isActive7 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                            </div>
                            {isActive7 && <div className="faqsC" style={{ display: isActive7 ? "block" : "none" }}><p>
                                Yes, Backstage Pass is affiliated with the Jawaharlal Nehru Architecture and Fine Arts University (JNAFAU) for all its Bachelor’s and Master’s courses. Whereas for the Advanced Diploma and Diploma courses, it is affiliated to the Lincoln University College. This ensures that the courses offered meet educational standards and can be trusted for quality education in game design and development.
                            </p></div>}

                        </div>

                        {/* <div id="pointerr7" className={isActive8 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <div className='pluin' onClick={() => setIsActive8(!isActive8)}> {!isActive8 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                                <h1>Are there any success stories from your alumni?</h1>

                            </div>
                            {isActive8 && <div className="faqsC" id="HiddenText34" style={{ display: isActive8 ? "block" : "none" }}><p>Backstage Pass is leaving its mark across India and the globe. Some of the top companies our alumni currently work at are Sony, Ubisoft, EA Sports, Zynga, and more. Check out our <Link style={{color: "#ed1923"}} to={"/life-at-bsp/alumni-success/"}>Alumni Success Stories</Link> for more details.</p></div>}
                        </div> */}





                        {/* <div id="pointerr8" className={isActive9 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <h1>Do you offer online courses?</h1>
                                <div className='pluin' onClick={() => setIsActive9(!isActive9)}> {!isActive9 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                            </div>
                            {isActive9 && <div className="faqsC" style={{ display: isActive9 ? "block" : "none" }}><p>Yes, we do offer online courses that last for 1 year (Advanced Diploma) and 6 months (Diploma).

                                Check out our <Link style={{color: "#ed1923"}} to={"/courses/"}>Courses Overview</Link> for more details.</p></div>}

                        </div> */}

                        {/* 
                        <div id="pointerr9" className={isActive10 ? 'classNameBasedOnCondition' : ' '}>
                            <div className='plucon'>
                                <div className='pluin' onClick={() => setIsActive10(!isActive10)}> {!isActive10 ? <CiCirclePlus /> : <CiCircleMinus />}</div>
                                <h1>Are there any success stories from your alumni?</h1>

                            </div>
                            {isActive10 && <div className="faqsC" id="HiddenText34" style={{ display: isActive10 ? "block" : "none" }}><p>Backstage Pass is leaving its mark across India and the globe. Some of the top companies our alumni currently work at are Sony, Ubisoft, EA Sports, Zynga, and more. Check out our <Link style={{color: "#ed1923"}} to={"/life-at-bsp/alumni-success/"}>Alumni Success Stories</Link> for more details.</p></div>}
                        </div> */}


                    </div>




                </div>
            </div>
            <HomeContent />
        </>
    )
}


export default ContactUs;

