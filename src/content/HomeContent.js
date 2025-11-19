import React, { useState, useEffect } from "react";
import "./HomeContent.css";
import "./FeaturedProducts.css";
import axios from 'axios';
import awic from '../assets/img/banners/global-networkn.webp';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import awic1 from '../assets/img/banners/expertn.webp';
import awic2 from '../assets/img/banners/medaln.webp';
import awic3 from '../assets/img/banners/mindsetn.webp';
import awic4 from '../assets/img/banners/loan-to-valuen.webp';
import awic5 from '../assets/img/banners/business-mann.webp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { useSelector, shallowEqual } from "react-redux";
import Autocomplete from '@mui/material/Autocomplete';
import { Helmet } from "react-helmet";
import { boxShadow } from "../assets/jss/material-dashboard-react";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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

function HomeContent() {
  const { formState: { }, setValue } = useForm();
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle errors
  const [collegecity, setCollegecity] = useState([]);  // To store state data
  //const [inputs, setInputs] = useState([]);

  const [open, setOpen] = React.useState(false);

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const handleClose = () => {
    setOpen(false);
  };
  const options = {
    bachelor: [
      { value: "csgameDevelopment", label: "Computer Science & Game Development" },
      { value: "gameArtDesign", label: "Game Art & Design" },
      { value: "arvr", label: "AR & VR" }
    ],
    masters: [
      { value: "msc", label: "Master’s Game Technology" },
      { value: "msc3d", label: "Master’s 3D Game Art & Game Design" }

    ],
    advancedDiploma: [
      { value: "gd", label: " Game Development" },
      { value: "3dgame", label: "3D Game Art & Digital Sculpting" },
      // { value: "tdca", label: "Traditional & Digital Concept Art" }
    ],

    diploma: [
      { value: "gdp", label: "Game Design & Production" },
      { value: "gdu", label: "Game Development with Unity" },
      { value: "3dart", label: "3D Environment Art For Games" },
      { value: 'gdunreal', label: 'Game Development with Unreal' },
       { value: 'dvra', label: 'VR Application Development' },
    ]
  };


  const [mainCategory, setMainCategory] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '', PhoneNumber: '', email: '', city: '', qualification: '', course: '',
    specialization: '', comments: '', url: window.location.href
  });
  const handleMainCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    setMainCategory(selectedCategory);
    setSubOptions(options[selectedCategory] || []);
    setFormData((prevData) => ({
      ...prevData,
      course: selectedCategory,
    }));
  };
  const handleSubCategoryChange = (event) => {
    const selectedsubCategory = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      specialization: selectedsubCategory,
    }));
  };

  // Handle input changes
  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "PhoneNumber" && /^[0-9]{10}$/.test(value)) {
      try {
        const response = await fetch(`https://www.backstagepass.co.in/reactapi/checkenquirypagemobile.php?contactNumber=${value}`);
        const result = await response.json();

        if (response.status === 200) {
          alert('This mobile number is already registered with in the last 3 months our team will get back to you.');
          setFormData((prevData) => ({
            ...prevData,
            PhoneNumber: '',  // Reset the contact number field to an empty string
          }));
        }
      } catch (error) {
        console.error('Error checking mobile number:', error);
        alert('Failed to validate mobile number. Please try again.');
      }
    }
  };
  const handleCitySelect = (event, newValue) => {
    if (newValue) {
      setFormData((prevData) => ({
        ...prevData,
        city: newValue.value,  // Store the value of the selected city
      }));
      setValue('city', newValue.value); // Update react-hook-form state with city value
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value && !emailRegex.test(value)) {
        alert("Please enter a valid email address.");
      }
    }
  };

  useEffect(() => {
    // Replace the URL with your actual API endpoint
    axios.get('https://www.backstagepass.co.in/reactapi/getcity.php')
      .then((response) => {
        setCollegecity(response.data);  // Set the fetched data to the state
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError('Error fetching states');  // Set error message if request fails
        setLoading(false);  // Set loading to false on error
      });
  }, []); // Empty array ensures this only runs once after initial render

  const handleSubmit = async (event) => {
    //alert("Your Data Submitted successfully");
    //console.log(formData);
    setOpen(true);
    //console.log('pranathi');


    event.preventDefault();

    try {
      const response = await axios.post("https://www.backstagepass.co.in/enquiry_react.php", formData);
      console.log(response);
      //alert(response.statuscode);

      setFormData({
        firstname: '', lastname: '', PhoneNumber: '', email: '', qualification: '', city: '', comments: '', course: '',
        specialization: '', url: window.location.href
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }


  };




  return (
    <>
      <Helmet>
        {window.location.pathname === "/" ?
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
            }]
          }
              `}
          </script> : null}
        {window.location.pathname === "/" ?
          <script type="application/ld+json">
            {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "India’s Best Game Development college | Backstage Pass Institute of Gaming",
            "url": "https://www.backstagepass.co.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.backstagepass.co.in/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
            `}
          </script> : null}
        {window.location.pathname === "/" ?
          <script type="application/ld+json">
            {`{
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "Backstage Pass Institute of Gaming",
  "alternateName": "Backstage pass Gaming college",
  "url": "https://www.backstagepass.co.in/",
  "logo": "https://www.backstagepass.co.in/logo-16c7e4db.webp",
  "sameAs": [
    "https://www.facebook.com/bspgaminginstitute/",
    "https://x.com/Bsp_Gaming",
    "https://www.instagram.com/backstagepassgaming/",
    "https://www.youtube.com/channel/UC8-3EcO9JQO8cRJklp8Gdvg",
    "https://www.linkedin.com/school/backstagepassinstitute/",
    "https://www.pinterest.com/backstagepassgaminginstitute/",
    "https://www.backstagepass.co.in/"
  ]
}
  `}

          </script> : null}
        {window.location.pathname === "/" ?
          <script type="application/ld+json">
            {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Backstage Pass Institute of Gaming",
  "image": "https://www.backstagepass.co.in/logo-16c7e4db.webp",
  "@id": "",
  "url": "https://www.backstagepass.co.in/",
  "telephone": "8008002794",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2-46/2/8/L/21, RBI Colony, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
    "addressLocality": "Ranga Reddy",
    "postalCode": "500081",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4391354,
    "longitude": 78.3921157
  }  
}
`}
          </script> : null}
      </Helmet>
      <section className="tuitiona-aid-sections mbtextlr">
        {typeof window !== undefined && !window.location.pathname.includes("/courses/") && window !== undefined && !window.location.pathname.includes("/enquire-now/") ?
          <div className="tuitiona-aid-sectionsLeft left1">

            <div className="show-grid desg">
              <h3 className="mainHeadingTotal3">
                Why choose backstagepass?
              </h3>
              <div className="maind">

                <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                  <div style={{
                       flexShrink: "0",
    position: "relative",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                  }}><LazyLoadImage effect="blur"
                    src={awic2}
                    alt="icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "30px",
                      maxHeight: "30px",
                      objectFit: "contain",
                      display: "block",
                    }} /></div>
                  <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                    <p className="suprts">#1 Gaming Institute</p>
                    Specialized education in gaming with industry-aligned curriculum
                  </div>
                </div>
                <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                  <div style={{
                      flexShrink: "0",
    position: "relative",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                  }}><LazyLoadImage effect="blur" width="30" height="30" src={awic} alt="icons" style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30px",
                    maxHeight: "30px",
                    objectFit: "contain",
                    display: "block",
                  }} /></div>
                  <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                    <p className="suprts">Industry Exposure</p>

                    Networking opportunities and strategic tie-ups with top gaming studios</div></div>

              </div>
              <div className="maind">
                <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                  <div style={{
                      flexShrink: "0",
    position: "relative",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                  }}><LazyLoadImage effect="blur" width="30" height="30" src={awic1} alt="icons" style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30px",
                    maxHeight: "30px",
                    objectFit: "contain",
                    display: "block",
                  }} /></div>
                  <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                    <p className="suprts">Industry-experienced Mentors</p>

                    Guidance from industry veterans with an experience of 10+ years</div>
                </div>
                <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                  <div style={{
                      flexShrink: "0",
    position: "relative",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                  }}><LazyLoadImage effect="blur" width="30" height="30" src={awic3} alt="icons" style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30px",
                    maxHeight: "30px",
                    objectFit: "contain",
                    display: "block",
                  }} /></div>
                  <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                    <p className="suprts">Hands-on Learning</p>

                    Mimicked real-world scenarios for practical learning
                  </div></div>
              </div>
              <div className="maind">
                <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                  <div style={{
                     flexShrink: "0",
    position: "relative",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                  }}><LazyLoadImage effect="blur" width="30" height="30" src={awic4} alt="icons" style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30px",
                    maxHeight: "30px",
                    objectFit: "contain",
                    display: "block",
                  }} /></div>
                  <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                    <p className="suprts">Financial Aid</p>

                    Flexible financial aid options for affordable quality learning
                  </div>
                </div>
                <div className="bgchange left w-100 icn" style={{ width: isMobileState ? "95%" : "100%" }}>
                  <div style={{
                     flexShrink: "0",
    position: "relative",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    boxShadow: "0 2px 15px 0px rgba(0, 0, 0, 0.1)"
                  }}><LazyLoadImage effect="blur" width="30" height="30" src={awic5} alt="icons" style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30px",
                    maxHeight: "30px",
                    objectFit: "contain",
                    display: "block",
                  }} /></div>
                  <div className="mainic" style={{ marginLeft: isMobileState ? "10px" : "5px", width: "90%" }}>
                    <p className="suprts">Professional Readiness</p>

                    Portfolio development for the competitive market
                  </div>
                </div>
              </div>
            </div>


          </div> : null}

        <div className="tuitiona-aid-sectionsRight right1">

          <div className="hidden md:block md:flex-1 self-start form-stcc">

            <h3 className="mainHeadingTotal3">
              Enquire now
            </h3>

            <form onSubmit={handleSubmit} className="formMain">
              <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">


                <div className="">
                  <label className="" htmlFor="firstname">First Name <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                  <input className="" placeholder="First Name" id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} required pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                    title="First name should only contain letters and spaces" />
                </div>
                <div className="">
                  <label className="" htmlFor="lastname">Last Name <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                  <input className="" placeholder="Last Name" id="lastname" name="lastname" type="text" value={formData.lastname} onChange={handleInputChange} required pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                    title="Lase name should only contain letters and spaces" />
                </div>

              </div>
              <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                <div className="inputContainer">
                  <label className="" htmlFor="PhoneNumber">Phone Number <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                  <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                </div>


                <div className="inputContainer">
                  <label htmlFor="city">City</label>
                  <Autocomplete
                    id="city"
                    name="city"
                    value={collegecity.find((city) => city.value === formData.city) || null}
                    onChange={handleCitySelect}
                    options={collegecity}
                    isOptionEqualToValue={(option, value) => option.value === value}
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
              <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                <div className="">
                  <label className="" htmlFor="email">Email <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                  <input className="" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} required />
                </div>
                <div className="s1t">
                  <label className="" htmlFor="qualification">Qualification <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                  <select className="input-gray" name="qualification" id="qualification" value={formData.qualification} onChange={handleInputChange} required>
                    <option value="">Qualification</option>
                    <option value="10th">10th Pass</option>
                    <option value="12th">12th Pursuing</option>
                    <option value="12pass">12th Pass</option>
                    <option value="ugraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>


              <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                <div className="s1t" style={{ width: isMobileState ? "100%" : "100%" }}>
                  <label className="" htmlFor="course">Course <span style={{ color: "red", marginLeft: "4px", marginTop: "2px" }}>*</span></label>
                  <select onChange={handleMainCategoryChange} name="course" id="course" value={formData.course} style={{ marginBottom: "10px", width: isMobileState ? "100%" : "100%" }} required>
                    <option value="" disabled>Select Course</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="masters">Master's</option>
                    <option value="advancedDiploma">Advanced Diploma</option>
                    <option value="diploma">Diploma</option>
                  </select>

                  {subOptions.length > 0 && (
                    <>
                      <label>Specialization</label>
                      <select onChange={handleSubCategoryChange} value={formData.specialization} name="specialization" id="specialization" style={{ marginBottom: "10px", width: isMobileState ? "100%" : "100%" }} required>
                        <option value="">Select Specialization</option>
                        {subOptions.map((sub) => (
                          <option key={sub.value} value={sub.value}>{sub.label}</option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
                <div >
                  <label className="" htmlFor="comments">Comments</label>
                  <textarea
                    className="input-gray"
                    name="comments"
                    id="comments"
                    placeholder="Enter your comments here..."
                    value={formData.comments}
                    onChange={handleInputChange}

                    rows="6"
                    maxLength={40}
                    style={{ color: '#5a555a' }}
                    title="max 40 characters allowed"
                  ></textarea>
                  <small style={{ color: '#888', fontSize: '12px' }}>Allow maximum 40 characters</small>
                </div>



              </div>
              <div>
                <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
                  Submit
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

                <DialogContent style={{ background: "#ec1923" }}>
                  <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: "21px", color: "#fff", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>
                    We appreciate your interest and will get in touch with you soon.

                  </DialogContentText>
                </DialogContent>
                <DialogActions style={{ background: "#ec1923" }}>
                  <Button onClick={handleClose} style={{ fontSize: "18px", fontWeight: "600", color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>Close</Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>

          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
