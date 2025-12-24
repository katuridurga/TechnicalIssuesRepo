import React, { useState, useRef, useEffect } from "react";
import "./ShortCourse.css";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useSelector, shallowEqual } from "react-redux";

import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

/* -------------------- UTIL COMPONENTS -------------------- */

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

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

/* -------------------- ENROLL BUTTON -------------------- */

const EnrollNowButton = ({ onClick }) => (
  <button type="button" className="dwnbtn three w-full sm:w-auto" onClick={onClick} style={{ width: "450px" }}>
    Enroll Now
  </button>
);

/* -------------------- MAIN COMPONENT -------------------- */

function SkillDiplomaCourses() {
  const isMobileState = useSelector(
    (state) => state.mainReducer.isMobile,
    shallowEqual
  );

  const [openFormModal, setOpenFormModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    PhoneNumber: "",
    email: "",
    course: "",
    city: "",
    school: "",
    coupon: "",
    declaration: false,
    url: window.location.href,
  });

  const [paymentDetails, setPaymentDetails] = useState({
    originalPayment: "",
    discountValue: "",
    finalAmount: "",
  });

  /* -------------------- FETCH COURSES -------------------- */

  useEffect(() => {
    const referrer = document.referrer;
    let lastSegment = "";

    if (referrer) {
      const parts = referrer.split("/").filter(Boolean);
      lastSegment = parts[parts.length - 1];
      if (lastSegment === "short-course") lastSegment = "";
    }

    axios
      .get(
        `https://www.backstagepass.co.in/reactapi/courses_api.php?slug=${lastSegment}`
      )
      .then((res) => {
        const data = res.data || [];
        setCourses(data);

        if (data.length === 1) {
          setFormData((prev) => ({ ...prev, course: data[0].value }));
          setPaymentDetails({
            originalPayment: data[0].orignialpayment,
            discountValue: "",
            finalAmount: data[0].gstpayment,
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  /* -------------------- HANDLERS -------------------- */

  const handleFormClose = () => setOpenFormModal(false);

  const handleMainCategoryChange = (e) => {
    const value = e.target.value;
    const selected = courses.find((c) => c.value === value);

    setFormData((prev) => ({ ...prev, course: value }));

    if (selected) {
      setPaymentDetails({
        originalPayment: selected.orignialpayment,
        discountValue: "",
        finalAmount: selected.gstpayment,
      });
    }
  };

  const handleInputChange = async (e) => {
    const { name, type, value, checked, files } = e.target;

    if (name === "coupon") {
      if (!formData.course) {
        alert("Please select a course first");
        return;
      }

      try {
        const res = await fetch(
          "https://www.backstagepass.co.in/reactapi/getpaymentapi.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ course: formData.course, coupon: value }),
          }
        );

        const data = await res.json();
        if (data?.length) {
          setPaymentDetails({
            originalPayment: data[0].orignialpayment,
            discountValue: data[0].discountvalue,
            finalAmount: data[0].finalamount,
          });
        }
      } catch {
        alert("Coupon error");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  /* -------------------- JSX -------------------- */

  return (
    <>
      <Helmet>
        <title>Skill Diploma Course</title>
      </Helmet>

      <EnrollNowButton onClick={() => setOpenFormModal(true)} />

     <Dialog
  open={openFormModal}
  onClose={handleFormClose}
  disableScrollLock
  fullWidth
  maxWidth={false}   
  PaperProps={{
    sx: {
      width: isMobileState ? "95%" : "750px",  
      maxWidth: "95%",
      margin: "0 auto",
    },
  }}
>

        <DialogActions style={{backgroundColor:"#fa9f42"}}>
          <p className="mainHeadingTotall-2" style={{ fontSize: isMobileState ? "20px" : "30px", color: "#fff", margin: "16px auto" }}>ENROLLMENT FORM</p>
          <Button onClick={handleFormClose} className="hvcls" style={{ fontSize: "35px", color: "#fff", fontWeight: "bold" }}> &times;</Button>

        </DialogActions>

        <DialogContent dividers>
          <form
            ref={formRef} className="formMain"
            method="POST"
            action="https://www.backstagepass.co.in/payment_process.php"
            encType="multipart/form-data"
          >



            <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container" style={{
              gridTemplateColumns: isMobileState ? "repeat(1, 1fr)" : "repeat(2, 1fr)"
            }}>
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

            <div className="formGrid-2" data-form-id="need-guidance" data-form="step1-container" style={{
              gridTemplateColumns: isMobileState ? "repeat(1, 1fr)" : "repeat(2, 1fr)"
            }}>
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
                  style={{ width: "100%", marginBottom: "20px" }}
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
                  <div style={{ color: "#000" }}>Payment (INR): <span>₹{paymentDetails.originalPayment}</span></div>
                  {paymentDetails.discountValue > 0 && (
                    <div style={{ color: "#000" }}>
                      Discount (INR): <span>-₹{paymentDetails.discountValue}</span>
                    </div>
                  )}

                  <div style={{ color: "#000" }}>Total Payment (INR): <span>₹{paymentDetails.finalAmount}</span></div>
                </div>
              )}
              <div className="checkbox-container" >
                <label className="checkbox-label" style={{ fontSize: "14px" }}>
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


        </DialogContent>
      </Dialog>
    </>
  );
}

export default SkillDiplomaCourses;
