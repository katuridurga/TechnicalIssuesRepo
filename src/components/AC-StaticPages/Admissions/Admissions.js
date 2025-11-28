import React from 'react'
import "./Admissions.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useSelector, shallowEqual } from "react-redux";


import { Helmet } from "react-helmet";

function Courses(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
     
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const [open, setOpen] = React.useState(false);
  const [opena, setOpena] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenApply = () => {
    setOpena(true);
  };
  const handleCloseApply = () => {
    setOpena(false);
  };
  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassadmis' : 'AdmissionsB'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Admissions</h1></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div> */}
      <div className="courses-container">
        <Helmet>
          <script type="application/ld+json">
            {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Backstage Pass Institute of Gaming",
            "url": "https://www.backstagepass.co.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.backstagepass.co.in/admissions/admission-process/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
            `}
          </script>
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
                "name": "Enroll Now | Top Gaming College in Hyderabad, India - Backstage Pass institute of Gaming",
                "item": "https://www.backstagepass.co.in/admissions/admission-process/"  
              }]
            }
              `}
          </script>
          <title>Enroll Now | Top Gaming College in Hyderabad, India - Backstage Pass institute of Gaming </title>

          <meta property="og:title" content="Enroll Now | Top Gaming College in Hyderabad, India - Backstage Pass Institute of Gaming" />
          <meta property="og:description" name="description" content="Gain game development skills at Backstage Pass Institute of Gaming, Hyderabad's leading gaming college. Get practical training, expert guidance, and career support. Admissions open." />
          <meta property="og:url" content="https://www.backstagepass.co.in/admissions/admission-process/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/admissions/admission-process/" />

        </Helmet>

        <div className="courses-wrapper">
          <h2 className="mainHeadingTotal fadeInUp anime-delay">Admission Process</h2>

          <p className='adminissionPTagad'>At Backstage Pass, we believe that every student’s journey begins with a deliberate choice. Our career-oriented bachelor's programs, including specialised computer science with game development, game art & design, and AR/VR courses, are built on the idea that true learning grows from careful guidance and sincere effort.<br />

            Students joining our college are encouraged to follow a simple and clear process by reviewing the instructions for their chosen course.

          </p>

          <React.Fragment>

            <BootstrapDialog
              onClose={handleCloseApply}
              aria-labelledby="customized-dialog-title"
              open={opena}
            >

              <IconButton
                aria-label="close"
                onClick={handleCloseApply}
                sx={(theme) => ({
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme.palette.grey[500],
                })}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers>
                <div gutterBottom style={{
                  fontSize: "16px", fontWeight: "600", textDecoration: "underline", background: "#fff", padding: "27px",
                  margin: "-6px"
                }}>
                  1.  <Link className="" to={"/Application-form/"} target="_blank">B.Sc in Computer Science & Game Development</Link>
                  <br />
                  2.  <Link className="" to={"/Application-form/"} target="_blank">B.A (Hons) in Game Art & Design</Link>
                  <br />
                  3.  <Link className="" to={"/Application-form/"} target="_blank">B.A (Hons) in Augmented Reality & Virtual Reality</Link>
                  <br />

                  4.  <Link className="" to={"/Application-form/"} target="_blank">Advanced Diploma in Game Development</Link><br />
                  5.  <Link className="" to={"/Application-form/"} target="_blank">Advanced Diploma in 3D Game Art & Digital Sculpting</Link><br />

                  6.  <Link className="" to={"/Application-form/"} target="_blank">Diploma in Game Design & Production</Link><br />
                  7.  <Link className="" to={"/Application-form/"} target="_blank">Diploma in Game Development with Unity</Link><br />
                  8. <Link className="" to={"/Application-form/"} target="_blank">Diploma In Game Development with Unreal</Link><br />
                  9. <Link className="" to={"/Application-form/"} target="_blank">Diploma In 3D Environment Art For Games</Link><br />
                  10.<Link className="" to={"/Application-form/"} target="_blank">Diploma In VR Application Development</Link><br />
                  11.  <Link className="" to={"/Application-form/"} target="_blank">M.Sc Game Technology</Link><br />
                  12.  <Link className="" to={"/Application-form/"} target="_blank">M.A 3D Game Art Design</Link><br />
                </div>


              </DialogContent>

            </BootstrapDialog>

            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >

              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme.palette.grey[500],
                })}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers style={{ background: "ec1923" }}>
                <Typography gutterBottom style={{
                  fontSize: "16px", padding: "20px",
                  background: "#fff",
                  color: "#000",
                  margin: "-3px",
                  fontFamily:"Montserrat"
                }}>
                  1. 10th class marks memo, <br />
                  2. 12th class marks memo,  <br />
                  3. Study certificate(s) from class VI to XII, <br />
                  4. Caste certificate, if applicable, Transfer/leaving/migration certificate
                </Typography>


              </DialogContent>

            </BootstrapDialog>
          </React.Fragment>

          <div className='bgforprocess'>

            <ul className="process">
              <li className="process__item1">
                <div id="infinity"><span className="process__number1">01</span></div>

                <h4 className="process__title">Online Application</h4>
                <span className="process__subtitle">If you match the eligibility criteria for the course of your choice, then fill our application form by <a href="https://backstagepass.co.in/application-form/" rel="noopener noreferrer" target='_blank'><b style={{ fontSize: "16px", textDecoration: "underline", display: "inline-block", color: "#eb1a23" }}>clicking here </b></a><br />(No application fee involved)</span>
              </li>

              <li className="process__item1">
                <div id="infinity"><span className="process__number1">02</span></div>
                <h4 className="process__title">Entrance Exam*</h4>
                <p style={{ textAlign: "left", color: "#eb1a23" }}>*For Bachelor’s courses only.</p>
                <span className="process__subtitle">An online entrance exam will be conducted after receiving your application, with prior intimation about the exam schedule
                </span>
              </li>

              <li className="process__item1">
                <div id="infinity"><span className="process__number1">03</span></div>
                <h4 className="process__title">Student Counselling</h4>
                <span className="process__subtitle">Upon clearing the entrance exam, a personal or online counselling session will be held where you will need to provide
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}><button class=" three button brand size200 w-full sm:w-auto" style={{ width: "245px", fontSize: "12px", fontWeight: "800" }} onClick={handleClickOpen}>Relevant Documents</button></div>
                </span>
              </li>

              <li className="process__item1">
                <div id="infinity"><span className="process__number1">04</span></div>
                <h4 className="process__title" >Final Enrolment</h4>
                <span className="process__subtitle">Upon document verification and payment of semester tuition fee, the student’s seat will be officially reserved.</span>
              </li>
            </ul>
          </div>
          <p className='adminissionPTagadp'>If you are a resident of Hyderabad, you can schedule a walk-in counselling session in order to complete all formalities to reserve your seat.
          </p>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><button class=" three button brand size200 w-full sm:w-auto" style={{ width: "180px", fontSize: "17px" }}
            onClick={handleClickOpenApply}>APPLY NOW</button></div>


        </div>






      </div>
      <HomeContent />
    </>
  )
}

Courses.propTypes = {

}

export default Courses;

