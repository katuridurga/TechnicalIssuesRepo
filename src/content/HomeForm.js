import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./HomeContent.css";
import "./FeaturedProducts.css";
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

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
      { value: "msc", label: "Master’s Game Technology" }
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
    lastname: '', PhoneNumber: '', email: '', city: '', qualification: '', course:'',
    specialization:'', comments: ''
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
       // const result = await response.json();

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
  // Handle form submission
  const handleSubmit = async (event) => {
    // alert("Your Data Submitted successfully");
    //console.log(formData);
    setOpen(true);
    //console.log('pranathi');


    event.preventDefault();
    try {
      const response = await axios.post("https://www.backstagepass.co.in/enquiry_react.php", formData);
      console.log(response);
      //alert(response.statuscode);

      setFormData({
        firstname: '', lastname: '', PhoneNumber: '', email: '', qualification: '', city: '',course:'',
        specialization:'', comments: ''
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };




  return (
    <>

      <section className="tuitiona-aid-sectionsq">
        <div className="tuitiona-aid-sectionsInnerq">


          <div className="tuitiona-aid-sectionsRight">

            <div className="hidden md:block md:flex-1 self-start form-stcc">


              <h3 className="mainHeadingTotal3">
                Enquire now
              </h3>
              <form onSubmit={handleSubmit} className="formMain">
                <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">


                  <div className="">
                    <label className="" for="firstname">First Name</label>
                    <input className="" placeholder="First Name" id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} required pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                      title="First name should only contain letters and spaces" />
                  </div>
                  <div className="">
                    <label className="" for="lastname">Last Name</label>
                    <input className="" placeholder="Last Name" id="lastname" name="lastname" type="text" value={formData.lastname} onChange={handleInputChange} required pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                      title="Last name should only contain letters and spaces" />
                  </div>

                </div>



                <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                  <div className="">
                    <label className="" for="PhoneNumber">Phone Number</label>
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
                              color: 'white',
                              background: '#222222',
                              px: 1,
                              '& .MuiInputLabel-asterisk': {
                                color: 'red',
                                fontSize: '21px',
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
                    <label className="" for="email">Email</label>
                    <input className="" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} required />
                  </div>
                  <div className="">
                    <label className="" for="qualification">Qualification</label>
                    <select className="input-gray" name="qualification" id="qualification" value={formData.qualification} onChange={handleInputChange} required>
                      <option value="">Highest Qualification</option>
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
                  <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                    <label className="" for="comments">Comments</label>
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
                  <div className="" style={{ width: isMobileState ? "100%" :"100%"}}>
                  <label className="" for="email">Course <span style={{color:"red", marginLeft:"4px", marginTop:"2px"}}>*</span></label>
                  <label htmlFor="course" class="sr-only">Choose Your Course</label>
      <select onChange={handleMainCategoryChange} name="course" id="course" value={formData.course}  style={{marginBottom:"10px", width: isMobileState ? "100%" :"100%"}}>
        <option value="" disabled>Select Course</option>
        <option value="bachelor">Bachelor's</option>
        <option value="masters">Master's</option>
        <option value="advancedDiploma">Advanced Diploma</option>
        <option value="diploma">Diploma</option>
      </select>

      {subOptions.length > 0 && (
        <>
          <label>Specialization</label>
          <select onChange={handleSubCategoryChange}  value={formData.specialization}name="specialization" id="specialization" style={{ width: isMobileState ? "100%" :"100%"}}>
            <option value="">Select Specialization</option>
            {subOptions.map((sub) => (
              <option key={sub.value} value={sub.value}>{sub.label}</option>
            ))}
          </select>
        </>
      )}
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

      </section>
      <br /><br />
    </>
  );
}

export default HomeContent;
