import React, { useState, useRef, useEffect } from 'react'
import "./ShortCourse.css";
import PropTypes from 'prop-types';

import { Helmet } from "react-helmet";



import axios from 'axios';
import { useSelector, shallowEqual } from "react-redux";
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import advdip from '../../../assets/img/banners/ThumbnailofGameArt.webp';
import wc1 from '../../../assets/img/Icons/WEBSITE-ICON/15yearsofExperience.webp';
import wc2 from '../../../assets/img/Icons/WEBSITE-ICON/Awardwinninggamingcollege.webp';
import wc3 from '../../../assets/img/Icons/WEBSITE-ICON/Industryalignedcurriculum.webp';
import wc4 from '../../../assets/img/Icons/WEBSITE-ICON/TaughtbyindustryExperiencedprofessionals.webp';
import wc5 from '../../../assets/img/Icons/WEBSITE-ICON/HandsonTraining.webp';
import wc6 from '../../../assets/img/Icons/WEBSITE-ICON/StrongIndustryConnection.webp';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

function SkillDiplomaCourses({ active, props }) {






  // const [showBanner, setShowBanner] = useState(true);

  // useEffect(() => {
  //   const data = window.localStorage.getItem('MY_APP_STATE');
  //   if (data !== null) setShowBanner(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  // }, [showBanner]);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowBanner(false);
  //     setLoading(false);
  //   }, 3000);

  // }, []);


  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [courses, setCourses] = useState([]);

  // Function to scroll to the bottom of the container

  useEffect(() => {
    const referrer = document.referrer;
    let lastSegment = "";

    if (referrer) {
      const urlParts = referrer.split('/').filter(Boolean);
      lastSegment = urlParts[urlParts.length - 1];
      if (lastSegment === 'short-course') {
        lastSegment = "";
      }
    }

    // Make the API request with the `slug` as the last segment
    axios
      .get(`https://www.backstagepass.co.in/reactapi/courses_api.php?slug=${lastSegment}`)
      .then((res) => {
        const courseData = res.data;
        console.log('API Response:', courseData);  // Log API response to check structure

        setCourses(courseData);  // Populate options with API data

        // Check if there's exactly one course
        if (courseData.length === 1) {
          const autoSelectedCourse = courseData[0].value;
          setFormData((prev) => ({
            ...prev,
            course: autoSelectedCourse
          }));

          // Directly set the payment details based on the selected course
          const selectedOption = courseData[0];  // We already know there's only one course
          setPaymentDetails({
            originalPayment: selectedOption.orignialpayment,
            gstPayment: '18%',  // Static value for GST, can be dynamic if needed
            discountValue: '',
            finalAmount: selectedOption.gstpayment,
          });
        }
      })
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);





  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };
  const formRef = useRef();

  const [formData, setFormData] = useState({
    fullname: '',
    dob: '',
    PhoneNumber: '',
    email: '',
    course: '',
    city: '',
    school: '',
    coupon: '',
    declaration: false,
    url: window.location.href, // Reset URL
  });
  const [paymentDetails, setPaymentDetails] = useState({
    originalPayment: "",
    gstPayment: "",
  });

  const handleMainCategoryChange = (e) => {

    const selectedCourse = e.target.value;
    const selectedOption = courses.find((course) => course.value === selectedCourse);

    setFormData({
      ...formData,
      course: selectedCourse,
      specialization: "", // You can set specialization if needed
    });

    // Update payment details based on the selected course
    if (selectedOption) {
      setPaymentDetails({
        originalPayment: selectedOption.orignialpayment,
        gstPayment: '18%',
        discountValue: '',
        finalAmount: selectedOption.gstpayment,
      });
    }
  };
  // const handleSubCategoryChange = (event) => {
  //   const selectedsubCategory = event.target.value;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     specialization: selectedsubCategory,
  //   }));
  // };
  const handleInputChange = async (event) => {
    //const { name, value } = event.target;
    const { name, type, value, checked, files } = event.target;
    if (type === 'file') {
      console.log('Selected file:', files[0]); // ✅ Log file to confirm
    }

    if (name === "coupon") {
      if (!formData.course) {
        alert("Please select a course before entering a coupon.");

        // Clear the coupon field
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox'
            ? checked
            : type === 'file'
              ? files[0]  // only one file expected
              : value,

          coupon: "",
        }));

        return;
      } else {
        try {
          const response = await fetch("https://www.backstagepass.co.in/reactapi/getpaymentapi.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              course: formData.course,
              coupon: value,
            }),
          });

          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            const result = data[0];

            setPaymentDetails({
              originalPayment: result.orignialpayment,
              // gstPayment: result.gstpayment,
              gstPayment: '18%',
              discountValue: result.discountvalue,
              finalAmount: result.finalamount,
            });


          } else {
            alert("Invalid response from server.");
          }
        } catch (error) {
          console.error("Error applying coupon:", error);
          alert("An error occurred while applying the coupon.");
        }
      }
    }

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setOpen(true); // Assuming you want to show a modal upon submission
  // console.log(formData);
  //     try {
  //       const response = await axios.post("https://www.backstagepass.co.in/payment_process.php", formData);
  //       console.log(response);

  //       // Assuming the response indicates success
  //       // alert("Your data was submitted successfully!");

  //       // Reset form data
  //       setFormData({
  //         firstname: '',
  //         PhoneNumber: '',
  //         email: '',
  //         course: '',
  //         city: '',
  //         url: window.location.href, // Reset URL   
  //       });
  //     } catch (error) {
  //       console.error('Error adding data:', error);
  //       alert('An error occurred while submitting the form. Please try again.');
  //     }
  //   };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Create a form element
  //   const form = document.createElement('form');
  //   form.method = 'POST';
  //   form.action = 'https://www.backstagepass.co.in/payment_process.php';

  //   // Add form fields
  //   for (const key in formData) {
  //     const input = document.createElement('input');
  //     input.type = 'hidden';
  //     input.name = key;
  //     input.value = formData[key];
  //     form.appendChild(input);
  //   }

  //   // Append and submit the form
  //   document.body.appendChild(form);
  //   form.submit();
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const formElement = document.createElement('form');
  //   const formDataToSend = new FormData();

  //   // Add regular fields
  //   for (const key in formData) {
  //     if (key === 'document' && formData[key]) {
  //       formDataToSend.append('document', formData[key]); // File
  //     } else {
  //       formDataToSend.append(key, formData[key]);
  //     }
  //   }

  //   // Create a new actual form to submit via POST to PHP
  //   formElement.method = 'POST';
  //   formElement.action = 'https://www.backstagepass.co.in/payment_process.php';
  //   formElement.enctype = 'multipart/form-data';

  //   // Add all FormData keys as hidden inputs (for real form submission)
  //   for (const [key, value] of formDataToSend.entries()) {
  //     const input = document.createElement('input');
  //     input.type = 'hidden';
  //     input.name = key;
  //     input.value = value;
  //     formElement.appendChild(input);
  //   }

  //   document.body.appendChild(formElement);
  //   formElement.submit();
  // };
  



  const videoRef = useRef(null); // To reference the video element

  const [isPlaying, setIsPlaying] = useState(false); // To manage the play state

  const payurl = 'https://backstagepass.co.in/landingpage/short-course';

  const coursesData = [
    {
      title: '3D Hard Surface Modelling',
      image: 'https://backstagepass.co.in/mainBanners/3DHardSurface.webp',
      duration: '3 months (120 Hours)',
      mode: 'Online & Interactive',
      batch: '',
      url: 'https://backstagepass.co.in/landingpage/3DHard-surface-modelling-game-art/'
    },
    {
      title: 'Game Design with Unreal Blueprints',
      image: 'https://backstagepass.co.in/mainBanners/UnrealBlrueprints.webp',
      duration: '3 months (120 Hours)',
      mode: 'Online & Interactive',
      batch: 'July 21, 2025',
      url: 'https://backstagepass.co.in/landingpage/game-design-with-unreal-blue-prints/'
    },
    {
      title: 'Game Development with Unity',
      image: 'https://backstagepass.co.in/mainBanners/Unity.webp',
      duration: '3 months (120 Hours)',
      mode: 'Online & Interactive',
      batch: 'July 21, 2025',
      url: 'https://backstagepass.co.in/landingpage/game-development-with-unity/'
    },
    {
      title: 'Game Development with Unreal',
      image: 'https://backstagepass.co.in/mainBanners/Unreal.webp',
      duration: '3 months (120 Hours)',
      mode: 'Online & Interactive',
      batch: '',
      url: 'https://backstagepass.co.in/landingpage/game-development-with-unreal/'
    },
    {
      title: 'AI- Powered Game Design and Level Building',
      image: 'https://backstagepass.co.in/mainBanners/AIPowered.webp',
      duration: '3 months (120 Hours)',
      mode: 'Online & Interactive',
      batch: '',
      url: 'https://backstagepass.co.in/landingpage/ai-powered-game-design-and-level-building/'
    },
    {
      title: 'Essentials of Game Design',
      image: 'https://backstagepass.co.in/mainBanners/4c.webp',
      duration: '20 Hours',
      mode: 'Online & Interactive',
      batch: 'July 28, 2025',
      url: 'https://backstagepass.co.in/landingpage/certificate-program-in-essentials-of-game-design/'
    },
    {
      title: '3D Game Development with Unity',
      image: 'https://backstagepass.co.in/mainBanners/5c.webp',
      duration: '20 Hours',
      mode: 'Online & Interactive',
      batch: '',
      url: 'https://backstagepass.co.in/landingpage/certificate-program-in-3DGame-development-with-unity/'
    },
    {
      title: 'Game Development for VR',
      image: 'https://backstagepass.co.in/mainBanners/3c.webp',
      duration: '20 Hours',
      mode: 'Online & Interactive',
      batch: '',
      url: 'https://backstagepass.co.in/landingpage/certificate-program-in-game-development-for-VR/'
    },
    {
      title: 'Prototyping & Game Concept Development',
      image: 'https://backstagepass.co.in/mainBanners/2c.webp',
      duration: '20 Hours',
      mode: 'Online & Interactive',
      batch: '',
      url: 'https://backstagepass.co.in/landingpage/certificate-program-in-prototyping-and-game-concept-development/'
    },
    {
      title: 'Storytelling & Design Documentation for Games',
      image: 'https://backstagepass.co.in/mainBanners/1c.webp',
      duration: '20 Hours',
      mode: 'Online & Interactive',
      batch: 'July 28, 2025',
      url: 'https://backstagepass.co.in/landingpage/certificate-program-in-storytelling-and-design-documentation-for-games/'
    },

    // Add more if needed
  ];

  const CourseCard = ({ title, image, duration, mode, batch, url }) => (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-details">
        <h3 className="course-title">{title}</h3>
        <div className="course-info">
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Mode:</strong> {mode}</p>
          {batch ? (
        <p><strong>Upcoming Batch:</strong> {batch}</p>
          ) : (
            <p><strong>Coming Soon</strong></p>
          )}
          
        </div>

        <a href={url} target='_blank' rel="noopener noreferrer">
          <button className="view-button" style={{ marginRight: "10px" }}>View More</button></a>
        <a href={payurl} target='_blank' rel="noopener noreferrer"><button className="view-button">Pay Now</button></a>
      </div>
    </div>
  );




  const handlePlayMain = () => {
    // Play the video when the image is clicked
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Update the state to hide the image
    }
  };





  return (
    <>
      <Helmet>
        <title>Skill Diploma Course</title>
        <meta name="description" content="Learn 3D modeling, character design, and more. Start from scratch and master game art to create stunning game worlds and characters." />
        <link rel="canonical" href="https://www.backstagepass.co.in/" />
      </Helmet>
      <div className="row mb0" id="scroll-container" >
        <div className="mainPanel1">

          <div style={{ width: isMobileState ? "100%" : "100%", margin: isMobileState ? "50px auto" : "0px auto" }}>

            <div style={{ background: "#000", color: "#fff" }}>
              {/* <h1 style={{ textTransform: "capitalize" }} className='maintext'>Certified Skill Diploma Courses</h1> */}
              <br />
            </div>
            <div className="maincls">
              <div className='mainv'>
                <div className='MainVideoSection1'>

                  <div className="videomain21g">
                    <video ref={videoRef} controls loop>
                      <source src="https://www.backstagepass.co.in/landingpage/game-artv.mp4" type="video/mp4" />

                    </video>


                    {!isPlaying && (
                      <img
                        src={advdip}
                        height={isMobileState ? "233" : "545"}
                        width={isMobileState ? "414" : "945"}
                        style={{ objectFit: isMobileState ? "null" : "contain" }}
                        className="overlay-image2-1g"
                        alt="advdip"
                        onClick={handlePlayMain} // Handle the click to play the video

                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className='fom-ad-21' id="CounsellingOnGamingCareer">


                  <div className='containers-21'>




                    {/* 
                    <form onSubmit={handleSubmit} className="formMain">

                      <p className="suprtsMobiless">ENROLLMENT FORM</p>
                      <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">


                        <div className="">
                          <label className="" for="firstname">Name</label>
                          <input className="" placeholder="First Name" id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} required />
                        </div>
                        <input type="hidden" name="url" value={formData.url} />
                        <input type="hidden" name="course_ttl" value={formData.course_ttl} />

                        <div className="">
                          <label className="" for="Phone Number">Phone Number</label>
                          <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minlength="10" maxlength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                        </div>

                      </div>
                      <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">
                      <div className="">
                          <label className="" for="Phone Number">Email</label>
                          <input className="" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="">
                          <label className="" for="Phone Number">City</label>
                          <input className="" placeholder="Location" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                        </div>
                      </div>
                      
                      <div className="formGrid-c" data-form-id="need-guidance" data-form="step1-container">
                        <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                          <label className="" for="email">Course <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                          <select
          onChange={handleMainCategoryChange}
          name="course"
          id="course"
          value={formData.course}
          style={{ width: "100%" }}
          required
        >
          <option value="" disabled>
            Select Course
          </option>
          {courses.map((course) => (
            <option
              key={course.id}
              value={course.value}
              data-original-payment={course.orignialpayment} // Store original payment in data attribute
              data-gst-payment={course.gstpayment} // Store GST payment in data attribute
            >
              {course.label}
            </option>
          ))}
        </select>
        <div className="">
                          <label className="" for="Phone Number">Coupon code</label>
                          <input className="" placeholder="Coupon code Apply here" id="coupon" name="coupon" type="text" value={formData.coupon} onChange={handleInputChange}  />
                        </div>

               
                <div>
                {paymentDetails.originalPayment && (
                  <div className='paymentShortCourse'>
                    <div>Payment (INR): <span>₹{paymentDetails.originalPayment}</span></div>
                    {paymentDetails.discountValue > 0 && (
                      <div>
                        Discount (INR): <span>-₹{paymentDetails.discountValue}</span>
                      </div>
                    )}
                   
                    <div>Total Payment (INR): <span>₹{paymentDetails.finalAmount}</span></div>
                  </div>
                )}
</div>



                        
                        </div>
                      </div>
                    
                      <div style={{ padding: "20px" }}>
                        <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
                        Pay Now
                        </button>

                      </div>
                    </form> */}


                    {/* <form onSubmit={handleSubmit} className="formMain" encType="multipart/form-data"> */}
                    <form
                      ref={formRef} className="formMain"
                      method="POST"
                      action="https://www.backstagepass.co.in/payment_process.php"
                      encType="multipart/form-data"
                    >

                      <p className="suprtsMobiless">ENROLLMENT FORM</p>

                      <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">
                        <div className="">
                          <label className="" for="fullname">Full Name (as per official documents)</label>
                          <input
                            className=""
                            placeholder="Full Name"
                            id="fullname"
                            name="fullname"
                            type="text"
                            value={formData.fullname}
                            onChange={handleInputChange}
                            required
                          />
                          <input type="hidden" name="url" value={formData.url} />
                          <input type="hidden" name="course_ttl" value={formData.course_ttl} />
                        </div>

                        <div className="">
                          <label className="" for="dob">Date of Birth (as per official documents)</label>
                          <input
                            className="custom-datepicker"
                            placeholder="Date of Birth"
                            id="dob"
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container">
                        <div className="">
                          <label className="" htmlFor="email">Email Address</label>
                          <input
                            className=""
                            placeholder="Email Address"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="">
                          <label className="" for="PhoneNumber">Mobile Number</label>
                          <input
                            className=""
                            placeholder="Mobile Number"
                            id="PhoneNumber"
                            name="PhoneNumber"
                            type="tel"
                            pattern="[6-9][0-9]{9}"
                            minlength="10"
                            maxlength="10"
                            value={formData.PhoneNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="formGrid-c" data-form-id="need-guidance" data-form="step1-container">
                        <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                          <label className="" htmlFor="course">Course <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                          <select
                            onChange={handleMainCategoryChange}
                            name="course"
                            id="course"
                            value={formData.course}
                            style={{ width: "100%" }}
                            required
                          >
                            <option value="" disabled>
                              Select Course
                            </option>
                            {courses.map((course) => (
                              <option
                                key={course.id}
                                value={course.value}
                                data-original-payment={course.orignialpayment} // Store original payment in data attribute
                                data-gst-payment={course.gstpayment} // Store GST payment in data attribute
                              >
                                {course.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="">
                          <label className="" for="school">Last School/ College Attended</label>
                          <input
                            className=""
                            placeholder="Last School/ College Attended"
                            id="school"
                            name="school"
                            type="text"
                            value={formData.school}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="">
                          <label className="" for="Phone Number">City</label>
                          <input className="" placeholder="Location" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                        </div>

                        <div className="">
                          <label className="" for="document">Upload Document (Marksheet/ Certificate)</label>
                          <input
                            className=""
                            id="document"
                            name="document"
                            type="file"
                            accept=".jpg,.png,.pdf"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="">
                          <label className="" for="coupon">Coupon Code</label>
                          <input
                            className=""
                            placeholder="Coupon Code (Optional)"
                            id="coupon"
                            name="coupon"
                            type="text"
                            value={formData.coupon}
                            onChange={handleInputChange}
                          />
                        </div>
                        {paymentDetails.originalPayment && (
                          <div className='paymentShortCourse'>
                            <div>Payment (INR): <span>₹{paymentDetails.originalPayment}</span></div>
                            {paymentDetails.discountValue > 0 && (
                              <div>
                                Discount (INR): <span>-₹{paymentDetails.discountValue}</span>
                              </div>
                            )}

                            <div>Total Payment (INR): <span>₹{paymentDetails.finalAmount}</span></div>
                          </div>
                        )}
                        <div className="checkbox-container" >
                          <label className="checkbox-label" style={{fontSize: "14px"}}>
                            <input
                              type="checkbox"
                              name="declaration"
                              checked={formData.declaration}
                              onChange={handleInputChange}
                              required
                              style={{
                                marginTop: '4px',
                                marginRight: '100px !important',
                                display: 'inline-block',
                                width: '16px',
                                height: '16px',
                                opacity: 1,
                                position: "relative"
                              }}
                            />
                            I hereby declare that all the information provided above is true to the best of my knowledge. I understand that submitting false documents or details may result in cancellation of my enrollment.
                          </label>
                        </div>
                      </div>
                      <div style={{ padding: "20px" }}>
                        <button className="three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
                          Pay Now
                        </button>
                      </div>
                    </form>

                    <React.Fragment>

                      <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle style={{ fontSize: "21px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>{"Thank you for reaching out to us"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: "19px", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>
                            We appreciate your interest and will get in touch with you soon.

                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} style={{ fontSize: "21px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>Close</Button>
                        </DialogActions>
                      </Dialog>
                    </React.Fragment>



                  </div>
                </div>
              </div>
            </div>
            <div id="Career-Opportunitiesl" backgroundColor="brown" height="auto">
              <h2 className='mainHeadingTotall-2'>you might also like
              </h2>
              <div className="course-section">
               
                <div className="course-grid">
                {coursesData
        .filter(course => course.duration === '3 months (120 Hours)')
        .map((course, index) => (
          <CourseCard key={`pro-${index}`} {...course} />
        ))}
                </div>
              </div>

              <h2 className='mainHeadingTotall-2'>Explore Now</h2>

              <div className="course-section">
               
                <div className="course-grid">
                {coursesData
        .filter(course => course.duration === '20 Hours')
        .map((course, index) => (
          <CourseCard key={`cert-${index}`} {...course} />
        ))}
                </div>
              </div>

            </div>








            <h2 className='mainHeadingTotall-2'>Why Choose Backstage Pass?
            </h2>

            <ul className='featuress3gl'>
              <li ><img src={wc1} alt="wc1" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Live and Interactive Courses

                </div></li>
              <li><img src={wc2} alt="wc2" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />
                <div className='featuresscon2'>Certificate- JAINX by Jain University, Bangalore.
                </div></li>
              <li><img src={wc3} alt="wc3" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />

                <div className='featuresscon2'>Placement Support
                </div></li>
              <li><img src={wc4} alt="wc4" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />
                <div className='featuresscon2'>Letter of Recommendation will be given to exceptional students.
                </div></li>



              <li><img src={wc5} alt="wc5" />

                <div className='featuresscon2'>Portfolio Building


                </div></li>

              <li><img src={wc6} alt="wc6" height={isMobileState ? "30" : "50"}
                width={isMobileState ? "30" : "50"} />
                <div className='featuresscon2'>Loan facility is available.
                </div></li>

            </ul>



            <h2 className='mainHeadingTotall-2'>A short course will help you be industry ready!
            </h2>






            <div className="footerin" style={{ height: "160px", padding: "30px" }}>
              <div className="text-center foot-content fadeInUp anime-delay2" style={{ display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>© A Subsidiary of PVR Memorial Educational Society 2025. All Rights Reserved</div>
            </div>
          </div>


        </div>

      </div>


    </>
  )
}

export default SkillDiplomaCourses;