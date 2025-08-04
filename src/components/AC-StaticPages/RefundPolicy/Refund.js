import React from 'react'
import "./Refund.css";




import { Helmet } from "react-helmet";


function Courses(props) {
  
  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Return/Refund Policy</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-container">
        <Helmet>
          <title>Return/Refund Policy</title>
          <meta  property="og:description" content="Accelerator Program" />
          <link rel="canonical" href="https://www.backstagepass.co.in/refund-policy-test/"/>

        </Helmet>

        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}}>Return/Refund Policy
        </h3>

          <p className='suprtst'>Thank you for choosing to invest in one of our programs or courses at Backstage Pass Institute of Gaming. We are committed to providing the best learning experience and value for your time and investment. Your satisfaction is our priority, and we strive to ensure that you have a rewarding journey with us. 
          </p>
        
        </div>
        <div className="courses-wrapper">
          <h3 className="mainHeadingTotall-2" style={{textAlign:"left"}} >Cancellation/Rescheduling/Refund Policy
 
        </h3>

          <p className='suprtst'>If for any reason you wish to cancel your participation in a course or program, we ask that you notify us at least two working days (48 hours) prior to the official start date. If this requirement is met, a refund will be issued. Unfortunately, we cannot process refunds if cancellation is requested after this timeframe, or if you fail to attend the program.

          </p>
          <p className='suprtst'>Backstage Pass reserves the right to cancel or reschedule any course or program due to unforeseen circumstances, such as insufficient enrollment or instructor availability. In the event of a cancellation, you will receive a full refund within 10 working days. If the course is rescheduled, you will be notified of the new date and time. If you are unable to attend the new schedule, we may offer an alternative, such as access to course recordings or a different session.

</p>
<p className='suprtst'>We cannot be held responsible for issues related to receiving course materials, login credentials, or emails due to technical problems such as spam filters, firewalls, or issues with your email provider. Similarly, we cannot be held accountable for any technical problems at your end, including internet connectivity or system incompatibility. We strongly encourage you to check your system’s requirements in advance to ensure a smooth experience.

</p>
<p className='suprtst'>Please note that we are not responsible if you are not satisfied with the content of the course or program. We recommend reviewing all course descriptions carefully before making your purchase to ensure it aligns with your expectations and learning goals.

</p>
<p className='suprtst'>By registering for any of our programs, you agree to these terms.


</p>
        </div>
        
        </div>

      </>
    )
}



export default Courses;

