import React, { useState, useEffect } from "react";
import "./FinancialAssistance.css";
import HomeContent from "../../../content/HomeContent";

import partner1 from "../../../assets/img/partners/Edufin.webp";
import partner2 from "../../../assets/img/partners/Feemonk.webp";
import insurance from "../../../assets/img/security.webp";
import cash from "../../../assets/img/coin.webp";
import time from "../../../assets/img/timing.webp";

import { FiArrowRight } from "react-icons/fi";
import { CiPhone, CiMail } from "react-icons/ci";
import { useSelector, shallowEqual } from "react-redux";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import zero from "../../../assets/img/Icons/ZeroPercent.webp";
import cost from "../../../assets/img/Icons/NoCostEMI.webp";
import charge from "../../../assets/img/Icons/NohiddenCharge.webp";
import collat from "../../../assets/img/Icons/NoCollateral.webp";


import { Helmet } from "react-helmet";

function Courses(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '', PhoneNumber: '', email: '', city: '', state: '', qualification: '', course: '',
    specialization: '', comments: '', url: window.location.href
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const StyledTextField = styled(TextField)`
    .MuiOutlinedInput-root {
      padding: 0 !important;
      margin-top: -12px !important;
      border: none !important;
    }
  
    .MuiOutlinedInput-notchedOutline {
     border: none !important;
    }
  
    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border: none !important;
    }
  `;
  const [states, setStates] = useState([]);  // To store state data
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle errors
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    // Replace the URL with your actual API endpoint
    axios.get('https://www.backstagepass.co.in/reactapi/getstate.php')
      .then((response) => {
        setStates(response.data);  // Set the fetched data to the state
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError('Error fetching states');  // Set error message if request fails
        setLoading(false);  // Set loading to false on error
      });
  }, []); // Empty array ensures this only runs once after initial render
  const handleStateSelect = (event) => {
    const selectedState = event.target.value;

    setSelectedState(selectedState); // This was using `state` by mistake
    setFormData((prevData) => ({
      ...prevData,
      state: selectedState,
      city: '', // Reset city when state changes
    }));
    setLoading(true); // Start loading

    axios
      .get(`https://www.backstagepass.co.in/reactapi/getcity.php?state=${selectedState}`)
      .then((response) => {
        setCities(response.data); // Assuming response is like [{ value: 'Hyderabad', label: 'Hyderabad' }, ...]
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching cities');
        setLoading(false);
      });
  };

  const [courses, setCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  // Function to scroll to the bottom of the container

  useEffect(() => {

    axios
      .get("https://www.backstagepass.co.in/reactapi/loan_courses_api.php")
      .then((res) => {
        console.log('API Response:', res.data);  // Log API response to check structure
        setCourses(res.data); // Populate options with API data
      })
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);


  const [tenures, setTenures] = useState([]);
  const handleMainCategoryChange = async (e) => {
    const selectedCourseId = e.target.value;


    const selectedOption = courses.find(
      (course) => course.id.toString() === selectedCourseId
    );

    setFormData((prevData) => ({
      ...prevData,
      course: selectedCourseId,
      specialization: "",
      course_fee: selectedOption ? selectedOption.gstpayment : '',
    }));
    try {
      const res = await axios.get(
        `https://www.backstagepass.co.in/reactapi/get_tenures_by_course.php?course_id=${selectedCourseId}`
      );
      console.log("Tenure Response:", res.data);
      setTenures(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching tenures:", error);
    }

  };
  const handleSubmit = (e) => {
    setOpen(true);

    e.preventDefault();
    // if (!formData.name || !formData.dob || !formData.email) {
    //   alert('Please fill all the fields');
    //   return; // Prevent form submission if any field is empty
    // }
    // Create FormData to append both image and file inputs
    const formDataToSend = new FormData();

    // Append form fields (e.g., name, email) to FormData
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }

    // Append image to FormData if an image is selected


    // Append files to FormData if files are selected



    // Send FormData to PHP API
    fetch('https://www.backstagepass.co.in/reactapi/create_loan.php', {
      method: 'POST',
      body: formDataToSend,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);

        // Handle successful submission
        if (data.status === 200) {
          setOpenModal(true);
          setTimeout(() => {
            window.location.reload();
          }, 4000);
          // alert('Data Submitted Successfully');
        } else {
          alert('Submission failed: ' + data.status_message); // More specific error message
        }

        // Reset the form and image preview after successful submission
        setFormData({
          firstname: '',
          lastname: '',
          PhoneNumber: '',
          email: '',
          city: '',
          state: '',
          qualification: '',
          course: '',
          specialization: '',
          comments: '',
          panno: '',
          dob: '',
          address: '',
          pincode: '',
          relationship: '',
          sname: '',
          sdob: '',
          gender: '',
          course_fee: '',
          tenureid: '',
          income: '',
          emptype: '',
          url: window.location.href,
        });

      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });


  }
  return (
    <>
      <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular finaceB">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Financial Assistance</h1></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div> */}
      <div className="courses-container">
        <Helmet>
          <title> Financial Assistance & Scholarships | Backstage Pass Institute of Gaming</title>
          <meta property="og:title" content=" Financial Assistance & Scholarships | Backstage Pass Institute of Gaming" />
          <meta property="og:description" name="description" content="Make your gaming education affordable with student loan options, scholarships, and financial aid from Backstage Pass Institute of Gaming. Our program features 0% interest and quick processing." />
          <meta property="og:url" content="https://www.backstagepass.co.in/admissions/financial-assistance-and-scholarship/" />

          <link rel="canonical" href="https://www.backstagepass.co.in/admissions/financial-assistance-and-scholarship/" />


        </Helmet>

        <div className="">
          <h2 className="mainHeadingTotal fadeInUp anime-delay">Financial Assistance</h2>

          <p className='adminissionPTag1' style={{marginBottom:"20px"}}>Financing your education shouldn't hold you back from achieving your dreams. At Backstage Pass, we're dedicated to providing accessible and affordable student loan options to empower your academic journey.
          </p>





        </div>






      </div>

<div className="mainbenfits">
      <h2 className="mainHeadingTotal fadeInUp anime-delay">Benefits</h2>


      <div className='courseUpdates3'>

        <ul>
          <li><div className="bgicofin"><img alt="Zero Interest Rate" src={zero} /></div>
            <p style={{ color: "#000" }}>Zero<br />Interest Rate</p></li>
          <li><div className="bgicofin"><img alt="No Collateral Required" src={collat} /></div>
            <p style={{ color: "#000" }}>No Collateral<br />Required</p></li>
          <li><div className="bgicofin"><img alt="No Hidden Charges" src={charge} /></div>
            <p style={{ color: "#000" }}>No Hidden<br />Charges</p></li>
          <li><div className="bgicofin"><img alt="No Cost EMIs" src={cost} /></div>
            <p style={{ color: "#000" }}>No Cost<br />EMIs</p></li>

        </ul>
      </div>
</div>
      <div className="courses-container">

        <div className="courses-wrapper">
                <h2
        className="mainHeadingTotal fadeInUp anime-delay"
      
      ><span>
        What’s More?</span>
      
      </h2>

      {isOpen && (
        <>
          <div className="whtsmain">
            <div
              style={{
                width: isMobileState ? "100%" : "50%",
                margin: "0px auto",
                textAlign: "center",
                marginBottom: isMobileState ? "0px" : "30px",
              }}
            >
              <p style={{ color: "#000", fontSize: "16px", marginTop: "0px" }}>
                Apart from the above, our strategic partnership with these leading
                financial institutions lets you enjoy many exclusive benefits!
              </p>
            </div>

            <div>
              <ul className="benfits">
                <li>
                
                  <div className="benfitContent">
                      <div className="benfitIcon">
                    <img src={insurance} alt="accidental insurance icon" />
                  </div>
                    Accidental insurance coverage of INR 5L
                  </div>
                </li>
                <li>
                 
                  <div className="benfitContent">
                     <div className="benfitIcon">
                    <img src={cash} alt="voucher icon" />
                  </div>
                    Voucher worth INR 10,000</div>
                </li>
                <li>
               
                  <div className="benfitContent">
                       <div className="benfitIcon">
                    <img src={time} alt="Quick loan icon" />
                  </div>
                    Quick loan processing within 24 hours
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <br />

          <p className="adminissionPTag1">
            For those who prefer to apply for a student loan through nationalized banks
            in India, we'll provide necessary documents to ensure a seamless
            application process.
          </p>
  </>
      )}
          <h2 className="mainHeadingTotal fadeInUp anime-delay">Loan Application Process</h2>

          <ul className="process">
            {/* <li className="process__itemf">
              <div id="infinity"><span className="process__numberfinance">01</span></div>

              <span className="process__titlef">Fill
              </span>
              <span className="process__subtitlef">the Loan <b><a style={{textDecoration:"underline",color:"#fff",fontSize:"17px"}}>Application Form</a></b> </span>
            </li> */}

            <li className="process__itemf">
              <div id="infinity"><span className="process__numberfinance">01</span></div>
              <span className="process__titlef">Upload</span>
              <span className="process__subtitlef" style={{ textAlign: "left" }}>
                the required documents:
                <ul style={{ margin: "20px 0px" }}>
                  <li style={{ marginBottom: "7px" }}><FiArrowRight /> 6 months' bank statement</li>
                  <li style={{ marginBottom: "7px" }}><FiArrowRight /> 3 months' pay slips</li>
                  <li style={{}}><FiArrowRight /> Pan and Aadhar copy</li>
                </ul>


              </span>
            </li>

            <li className="process__itemf">
              <div id="infinity"><span className="process__numberfinance">02</span></div>
              <span className="process__titlef">Processing</span>
              <span className="process__subtitlef">of the loan amount will be done within maximum 24 working hours</span>
            </li>

            <li className="process__itemf">
              <div id="infinity"><span className="process__numberfinance">03</span></div>
              <span className="process__titlef">Disbursement</span>
              <span className="process__subtitlef">Of the loan will take another 24 working hours after approval
              </span>
            </li>
          </ul>

          <p className='adminissionPTag1' style={{marginTop:isMobileState?"20px":"0px", marginBottom:"0px"}}>Take the first step towards securing your academic future. Apply now and let us help you achieve your goals!</p>

          {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><button className=" three button brand size200 w-full sm:w-auto" style={{ width: "320px", fontSize: "17px" }}>APPLY FOR LOAN NOW</button></div> */}

 <h2 className="mainHeadingTotal fadeInUp anime-delay">Financial Assistance Partners
</h2>

          <ul className="processpartner">
           
            <li className="process__itempartner">
          
           <img src={partner1} alt="partner1"/>
            </li>

            <li className="process__itempartner">
           
           <img src={partner2} alt="partner2"/>
            </li>

          
          </ul>

          <h2 className="mainHeadingTotal fadeInUp anime-delay">Got Questions? Ask Us</h2>

          <ul className="askus callmaindiv">
            <li><p className="callu"><a href="tel:+91-9014226199"><CiPhone /> Call Us</a></p></li>
            <li><p className="callu"><a href="mailto:admin@backstagepass.co.in"><CiMail /> Mail Us</a></p></li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="formMain" style={{ background: "#f9fafb", boxShadow:"0 2px 15px 0px rgba(0, 0, 0, 0.1)" }}>
           <h3 className="mainHeadingTotal">Loan Application Form </h3>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">

            <div className="">
              <label className="" htmlFor="firstname">First Name <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="First Name" id="firstname" name="firstname" type="text" value={formData.firstname} required pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                title="First name should only contain letters and spaces" onChange={handleChange} />
            </div>
            <div className="">
              <label className="" htmlFor="lastname">Last Name <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="Last Name" id="lastname" name="lastname" type="text" value={formData.lastname} required pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                title="Lase name should only contain letters and spaces" onChange={handleChange} />
            </div>

          </div>

          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">
            <div className="inputContainer">
              <label className="" htmlFor="PhoneNumber">Phone Number <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel"
                pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" onChange={handleChange} value={formData.PhoneNumber} required />
            </div>

            <div className="">
              <label className="" htmlFor="email">Email <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="Email" id="email" name="email" type="email"
                value={formData.email} required onChange={handleChange} />
            </div>


          </div>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">


            <div className="">
              <label className="" htmlFor="panno">Pan No <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="Pan No" id="panno" name="panno" type="text" value={formData.panno}
                onChange={handleChange}
                required />
            </div>
            <div className="">
              <label className="" htmlFor="dob">Date Of Birth <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="dob" id="dob" name="dob" type="date" value={formData.dob}
                onChange={handleChange}
                required />
            </div>

          </div>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">
            <div className="">
              <label className="" htmlFor="state">
                State <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span>
              </label>

              <select
                name="state"
                id="state"
                value={formData.state}
                onChange={handleStateSelect}
                style={{ marginBottom: "10px", width: isMobileState ? "100%" : "100%" }}
                required
              >
                <option value="" disabled>Select State</option>
                {loading ? (
                  <option>Loading...</option>
                ) : (
                  states.map((state) => (
                    <option key={state.id} value={state.value}>
                      {state.label}
                    </option>
                  ))
                )}
              </select>

              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div className="inputContainer">
              <label htmlFor="city">City<span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <Autocomplete
                id="city"
                name="city"
                options={cities} // Must be passed in
                value={
                  cities.find((c) => c.value === formData.city) || null
                } // match selected city object
                onChange={(e, newValue) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    city: newValue ? newValue.value : '', // store the value (like 'Hyderabad')
                  }));
                }}
                getOptionLabel={(option) => option.label} // what shows in dropdown
                isOptionEqualToValue={(option, value) => option.value === value.value}
                loading={loading}
                loadingText="Loading cities..."
                renderInput={(params) => (
                 <StyledTextField
        {...params}
        required
        variant="outlined"
        placeholder="City"
        InputLabelProps={{
          sx: {
            color: "#5a555a",              
            "&.Mui-focused": { color: "#5a555a" }, 
            "& .MuiInputLabel-asterisk": {
              color: "red",
              fontSize: "21px",
            },
          },
        }}
        InputProps={{
          ...params.InputProps,
          sx: {
            color: "#5a555a",              
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5a555a",      
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5a555a",      
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5a555a",      
            },
            "& input::placeholder": {
              color: "#5a555a",             
              opacity: 1,
            },
          },
        }}
      />
    )}
  />
            </div>

          </div>

          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">
            <div className="s1t" style={{ width: isMobileState ? "100%" : "100%" }}>
              <label className="" for="etype">EmploymentType <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <select name="emptype" id="emptype" value={formData.emptype} style={{ marginBottom: "10px", width: isMobileState ? "100%" : "100%" }} onChange={handleChange} required>
                <option value="" disabled>Select Type</option>
                <option value="SALARIED">SALARIED</option>
                <option value="SELF-EMPLOYED">SELF-EMPLOYED</option>

              </select>


            </div>
            <div className="">
              <label className="" htmlFor="income">MonthlyIncome<span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="MonthlyIncome" id="income" name="income" type="text"
                value={formData.income} required onChange={handleChange} />
            </div>





          </div>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">


            <div >
              <label className="" htmlFor="address">Address</label>
              <textarea
                className="input-gray"
                name="address"
                id="comments"
                placeholder="Enter your address here..."
                value={formData.address}
                onChange={handleChange}

                rows="6"
                maxLength={40}
                style={{ color: '#5a555a' }}
                title="max 40 characters allowed"
              ></textarea>
            </div>

            <div className="">
              <label className="" htmlFor="pincode">Pincode <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="Pincode" id="pincode" name="pincode" type="text" value={formData.pincode} required onChange={handleChange} />
            </div>

          </div>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">

            <div >
              <label className="" htmlFor="comments">GuardianRelation</label>
              <input className="" placeholder="Relationship" id="relationship" name="relationship" type="text" value={formData.relationship} required onChange={handleChange} />
            </div>

            <div className="">
              <label className="" htmlFor="sname">Student Name<span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="Student Name" id="sname" name="sname" type="text" value={formData.sname} required onChange={handleChange} />
            </div>




          </div>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">
            <div >
              <label className="" htmlFor="comments">StudentDoB<span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <input className="" placeholder="StudentDoB" id="sdob" name="sdob" type="date" value={formData.sdob} required onChange={handleChange} />
            </div>
            <div className="s1t">
              <label className="" htmlFor="gender">Gender<span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
              <select className="input-gray" name="gender" id="gender" value={formData.gender} onChange={handleChange} // ← This is important!
                required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>

              </select>
            </div>


          </div>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">
            <div className="s1t" style={{ width: isMobileState ? "100%" : "100%" }}>
              <label className="" for="email"> Course  <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
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
                    value={course.id}
                    data-original-payment={course.orignialpayment} // Store original payment in data attribute
                    data-gst-payment={course.gstpayment} // Store GST payment in data attribute
                  >
                    {course.label}
                  </option>
                ))}
              </select>


            </div>
            <div>
              <label className="" htmlFor="comments">Course Fee</label>
              <input
                className=""
                placeholder="Course Fee"
                id="course_fee"
                name="course_fee"
                type="text"
                value={formData.course_fee || ''}
                readOnly
                required onChange={handleChange}
              />
            </div>





          </div>
          <div className="formGridfs mgrid" data-form-id="need-guidance" data-form="step1-container">
            <div className="s1t" style={{ width: isMobileState ? "100%" : "100%" }}>
              <label className="" for="email">Course Tenure  <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>

              <select
                name="tenureid"
                id="tenureid"
                value={formData.tenureid}
                style={{ marginBottom: "10px", width: isMobileState ? "100%" : "100%" }}
                onChange={handleChange}
                required
              >
                <option value="">Select Tenure</option>
                {Array.isArray(tenures) &&
                  tenures.map((tenure) => (
                    <option key={tenure.id} value={tenure.value}>
                      {tenure.label} months
                    </option>
                  ))}
              </select>

            </div>
          </div>

          <div>
            <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <HomeContent />
    </>
  )
}

Courses.propTypes = {

}

export default Courses;

