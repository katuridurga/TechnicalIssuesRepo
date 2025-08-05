import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Box, TextField, MenuItem, Avatar, IconButton, Button, Typography, Modal, Grid, RadioGroup, FormControlLabel, Radio, FormHelperText, FormControl as MuiFormControl } from '@mui/material';
import { useSelector, shallowEqual } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";

import axios from 'axios';
import Slide from '@mui/material/Slide';

import Autocomplete from '@mui/material/Autocomplete';




// Validation Schema using Yup
// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   dob: yup.date().required('Date of Birth is required'),
//   contactNumber: yup
//     .string()
//     .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits')
//     .required('Contact number is required'),
//   email: yup.string().email('Enter a valid email').required('Email is required'),
// });

function App() {
  const [open, setOpen] = React.useState(false);


  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { control, watch, formState: { },setValue  } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

   

    if (name === "contactNumber" && /^[0-9]{10}$/.test(value)) {
      try {
        const response = await fetch(`https://www.backstagepass.co.in/reactapi/checkmobile.php?contactNumber=${value}`);
        const result = await response.json();

        if (response.status === 200) {
          alert('This mobile number is already registered.');
          setFormData((prevData) => ({
            ...prevData,
            contactNumber: '',  // Reset the contact number field to an empty string
          }));
        }
      } catch (error) {
        console.error('Error checking mobile number:', error);
        alert('Failed to validate mobile number. Please try again.');
      }
    }
  };

 

  // Handle state change and fetch cities

  // const handleBluremail = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "email") {
  //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     if (value && !emailRegex.test(value)) {
  //       alert("Please enter a valid email address.");
  //     }
  //   }
  // };
  // const handleBlurgaremail = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "guardianEmail") {
  //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     if (value && !emailRegex.test(value)) {
  //       alert("Please enter a valid email address.");
  //     }
  //   }
  // };
  const SpecializationSelector = ({ program, specialization, handleSpecializationChange }) => {
    // Define specializations based on the selected program
    const specializationOptions = {
      bachelor: [
        { value: 'csgameDevelopment', label: 'Computer Science & Game Development' },
        { value: 'gameArtDesign', label: 'Game Art & Design' },
        { value: 'arvr', label: 'Augmented Reality And Virtual Reality' },
      ],
      masters: [
        { value: 'msc', label: 'M.Sc Game Technology' },
      ],
      advancedDiploma: [
        { value: 'gd', label: 'Game Development' },
        { value: '3dgame', label: '3D Game Art & Digital Sculpting' },
        { value: 'tdca', label: 'Traditional & Digital Concept Art' },
      ],
      diploma: [
        { value: 'gdp', label: 'Game Design & Production' },
        { value: 'gdu', label: 'Game Development with Unity' },
        { value: '3dart', label: '3D Environment Art For Games' },
        { value: 'gdunreal', label: 'Game Development with Unreal' },
      ],
    };
    
    return (
      <TextField
        
        select
        fullWidth
        label="Choose your specialization"
        value={specialization}
        onChange={handleSpecializationChange}
        InputProps={{
          sx: {
            color: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#555', // Default border color
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#555', // Focused border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff', // Hover border color
            },
          },
        }}
        InputLabelProps={{
          sx: {

            color: 'white', // Label text color

            background: '#222222',

            px: 1,

            '& .MuiInputLabel-asterisk': {

              color: 'red', // Asterisk color

              fontSize: "21px"

            },

          },
        }}
      >
        {specializationOptions[program]?.map(option => (
          <MenuItem  className="mfn" key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: 'white', // Set text color for the input
            '& .MuiSelect-select': {
              color: 'white', // Set text color for the selected value in a dropdown
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiInputAdornment-root .MuiSvgIcon-root': {
              color: 'white', // Change the color of the date picker icon
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'white', // Set label color
          },
        },
      },
    },
  });

  const [files, setFiles] = useState({
    tenthMarkSheet: null,
    twelfthMarkSheet: null,
    bonafideCertificate: null,
    transferCertificate: null,
    casteCertificate: null,
    equivalencyCertificate: null,
    migrationCertificate: null,
    aadhar: null,
    passportPhotos: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    //alert("hii");
    // Check if files are selected
    if (files.length > 0) {

      // Display the file name in the alert
      //alert(`File uploaded: ${fileName}`);

      // Store the file in the state (only first file if multiple is not allowed)
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: files[0],
      }));
    }
  };

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth", // This makes the scroll smooth

    });

  };



  const [program, setProgram] = useState('');
  const [specialization, setSpecialization] = useState('');
 const [state, setState] = useState(''); 
 const [selectedState, setSelectedState] = useState(''); 
 const [cities, setCities] = useState([]);  
  
 
  
  const handleProgramChange = (event) => {
    const selectedProgram = event.target.value;
    setProgram(selectedProgram);
    setSpecialization(''); // Reset specialization when program changes
    setFormData((prevData) => ({
      ...prevData,
      program: selectedProgram,
      specialization: '', // Reset specialization in formData
    }));
  };

  const handleSpecializationChange = (event) => {
    const selectedSpecialization = event.target.value;
    setSpecialization(selectedSpecialization);
    setFormData((prevData) => ({
      ...prevData,
      specialization: selectedSpecialization,
    }));
  };

  const [employmentStatus, setEmploymentStatus] = useState('');
  const [pursuingstatus, setpursuingstatus] = useState('');
  const [qualification, setQualification] = useState('');
  const selectedQualification = watch('qualification', '');


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const onSubmit = (data) => {
    console.log(data);

  };

  const handleNext = () => {

  

    
  const form = document.querySelector('form');

  
  if (!form.checkValidity()) {
   
    form.reportValidity(); 
    return; 
  }

const emailField = form.querySelector('input[name="email"]');
  
// if (emailField) {  // If the email field exists, validate it
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//   // Validate the email pattern
//   if (!emailPattern.test(emailField.value)) {
//     alert("Please enter a valid email address");
//     return; // Prevent moving to the next tab if email is invalid
//   }
// }

// const garemailField = form.querySelector('input[name="guardianEmail"]');
  
// if (garemailField) {  // If the email field exists, validate it
//   const gemailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//   // Validate the email pattern
//   if (!gemailPattern.test(garemailField.value)) {
//     alert("Please enter a valid email address");
//     return; // Prevent moving to the next tab if email is invalid
//   }
// }
if(program === 'advancedDiploma'){
  if (!modeOfStudy) {
    alert("Please select a mode of study (Online or Offline)");
      return; // Prevent moving to the next tab if email is invalid
  }
  }
  
    setActiveTab((prev) => prev + 1);

    window.scrollTo({

      top: 0,

      behavior: "smooth", // This makes the scroll smooth

    });
  };
 

  const handleBack = () => {
    setActiveTab((prev) => prev - 1);
    window.scrollTo({

      top: 0,

      behavior: "smooth", // This makes the scroll smooth

    });
  };

  const [modeOfStudy, setModeOfStudy] = useState('');
  const [foundBy, setFoundBy] = useState('');
  const [referralName, setReferralName] = useState('');
  const [referralContact, setReferralContact] = useState('');
  const [referralProgram, setReferralProgram] = useState('');
  const [referralBatchYear, setReferralBatchYear] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');



  const handleBatchChange = (event) => {
  
    //alert(event.target.value);
    console.log("Batch Selected: ", event.target.value);
    const value = event.target.value;
    setSelectedBatch(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedBatch: value,
    }));
  };

  const handleFoundByChange = (event) => {
    const { value } = event.target;
    setFoundBy(value); // Update local state
    setFormData((prevData) => ({
      ...prevData,
      foundBy: value, // Update formData with the selected value
    }));
  };

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const tabStyle = {
    flex: 1,
    minWidth: '150px',
    padding: '12px',
    margin: '4px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: '1px solid transparent',
    borderRadius: '4px',
    fontSize: isMobileState ? "10px" : null
  };
  const handleReferralProgramChange = (event) => {
    const value = event.target.value;
    setReferralProgram(value);

    // Update formData when referralProgram changes
    setFormData((prevData) => ({
      ...prevData,
      referralProgram: value,
    }));
  };
  const handleReferralNameChange = (event) => {
    const value = event.target.value;
    setReferralName(value);

    // Update formData when referralName changes
    setFormData((prevData) => ({
      ...prevData,
      referralName: value,
    }));
  };

  const handleReferralContactChange = (event) => {
    const value = event.target.value;
    setReferralContact(value);

    // Update formData when referralContact changes
    setFormData((prevData) => ({
      ...prevData,
      referralContact: value,
    }));
  };

  const handleReferralBatchYearChange = (event) => {
    const value = event.target.value;
    setReferralBatchYear(value);

    // Update formData when referralBatchYear changes
    setFormData((prevData) => ({
      ...prevData,
      referralBatchYear: value,
    }));
  };

  const [formData, setFormData] = useState({
   
    name: '',
    dob: '',
    nationality: '',
    contactNumber: '',
    email: '',
    aadhar: '',
    residentialAddress: '',
    state: '',
    city: '',
    pin: '',
    qualification: '',
    yearOfCompletion: '',
    schoolCollegeName: '',
    city1: '',
    board: '',
    schoolCollegeName: '',
    employmentStatus: '',
    organizationName: '',
    designationRole: '',
    guardianName: '',
    guardianRelation: '',
    guardianContact: '',
    guardianEmail: '',
    program: '',
    specialization: '',
    foundBy: '',
    modeOfStudy: '',
    referralName: '',
    referralContact: '',
    referralProgram: '',
    referralBatchYear: '',
    selectedBatch:'',
    url: window.location.href, 

  });

  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [states, setStates] = useState([]);  // To store state data
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle errors
  const [collegecity, setCollegecity] = useState([]);  // To store state data
  // To store cities data
  // Fetch states data on component mount
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

  const handleStateSelect = (event) => {
    const selectedState = event.target.value;
   
    setSelectedState(state);
   //setCity('');
    setFormData((prevData) => ({
      ...prevData,
      state: selectedState,
    // city:'',
    }));
   
    axios.get(`https://www.backstagepass.co.in/reactapi/getcity.php?state=${selectedState}`)  // Replace with your actual API path
    .then((response) => {
      setCities(response.data);  // Set the fetched cities data
      setLoading(false);  // Set loading to false after fetching data
    })
    .catch((err) => {
      setError('Error fetching cities');
      setLoading(false);
    });
    
  };

  // const handleCitySelect = (event) => {
  //   const selectedCity = event.target.value;
   
    
  //  setCity(city);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     city: selectedCity,
  //   // city:'',
  //   }));
   
  
    
  // };

  const handleCitySelect = (event, newValue) => {
    if (newValue) {
      setFormData((prevData) => ({
        ...prevData,
        city: newValue.value,  // Store the value of the selected city
      }));
      setValue('city', newValue.value); // Update react-hook-form state with city value
    }
  };
  const handleCollegycityChange = (event, newValue) => {
    if (newValue) {
      setFormData((prevData) => ({
        ...prevData,
        city1: newValue.value,  // Store the value of the selected city
      }));
      setValue('city1', newValue.value); // Update react-hook-form state with city value
    }
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
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
    if (image) {
      formDataToSend.append('image', image); // Single image upload
    }

    // Append files to FormData if files are selected
    for (const [key, file] of Object.entries(files)) {
      if (file) {
        formDataToSend.append(key, file); // Multiple files handling
      }
    }
    
    // if (
    //   !formData.name ||
    //   !formData.dob ||
    //   !formData.nationality ||
    //   !formData.contactNumber ||
    //   !formData.email ||
    //   !formData.aadhar ||
    //   !formData.residentialAddress ||
    //   !formData.state ||
    //   !formData.city ||
    //   !formData.pin ||
    //   !formData.qualification ||
    //   !formData.guardianName ||
    //   !formData.guardianRelation ||
    //   !formData.guardianContact ||
    //   !formData.guardianEmail ||
    //   !formData.program ||
    //   !formData.specialization ||
    //   !formData.foundBy
    // ) {
    //   alert('Please fill all the fields');

    // } else {
      // Send FormData to PHP API
     fetch('https://www.backstagepass.co.in/reactapi/applicationform.php', {
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
            name: '',
            dob: '',
            nationality: '',
            contactNumber: '',
            email: '',
            aadhar: '',
            residentialAddress: '',
            state: '',
            city: '',
            pin: '',
            qualification: '',
            yearOfCompletion: '',
            schoolCollegeName: '',
            city1: '',
            board: '',
            employmentStatus: '',
            organizationName: '',
            designationRole: '',
            guardianName: '',
            guardianRelation: '',
            guardianContact: '',
            guardianEmail: '',
            program: '',
            specialization: '',
            foundBy: '',
            referralName: '',
            referralContact: '',
            referralProgram: '',
            referralBatchYear: '',
            selectedBatch:'',
            url: window.location.href, 
          });
          setImage(null);
          setImagePreviewUrl('');  // Reset the image preview
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        });
    //};

  }
  

  return (
    <>
 <Helmet>
          <title> Apply Now for Game Development Courses | Backstage Pass</title>
           <meta property="og:title" content="Apply Now for Game Development Courses | Backstage Pass" />
          <meta  property="og:description" content=" Applying to Backstage Pass is simple and fast. Fill out our online application form to get started with your game development education today." />
           <meta property="og:url" content="https://www.backstagepass.co.in/Application-form/" />
       
          <link rel="canonical" href="https://www.backstagepass.co.in/Application-form/" />


        </Helmet>
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl" // Controls container width based on screen size
        sx={{
          padding: { xs: '16px', sm: '24px', md: '32px' }, // Adjust padding for different screen sizes
          backgroundColor: '#f4f4f4', // Example background
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            display: isMobileState ? 'flex' : 'block',
            flexDirection: isMobileState ? 'column' : 'row', // Stack vertically on mobile
            flexWrap: 'wrap', // Allow wrapping of tabs
            justifyContent: isMobileState ? 'center' : 'flex-start', // Center on mobile
            alignItems: 'center', // Center align items vertically
            padding: '8px', // Padding around the tabs
            borderBottom: isMobileState ? '1px solid #ccc' : '0px solid #ccc', // Optional border
            overflow: "auto",
            
          }}
        >
          <Tabs value={activeTab} onChange={handleTabChange} sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            '& .MuiTabs-indicator': { backgroundColor: '#eb1a23' },
          }}>
            <Tab style={{ fontSize: isMobileState ? "13px" : null, minWidth: isMobileState ? "150px" : null, tabStyle: null }} label="Applicant Information" className={`siva-${activeTab}`} />
            <Tab style={{ fontSize: isMobileState ? "13px" : null, minWidth: isMobileState ? "150px" : null, tabStyle: null }}  label="Parent’s/Guardian's Details" className={activeTab < 1 ? "kattt" : `siva-${activeTab}`} disabled={activeTab < 1} />
            <Tab style={{ fontSize: isMobileState ? "13px" : null, minWidth: isMobileState ? "150px" : null, tabStyle: null }}  label="Program Details" className={activeTab < 2 ? "kattt" : `siva-${activeTab}`} disabled={activeTab < 2} />
            <Tab style={{ fontSize: isMobileState ? "13px" : null, minWidth: isMobileState ? "150px" : null, paddingRight: isMobileState ? "33px" :null, tabStyle: null }}  label="Form Submission" className={activeTab < 3 ? "kattt" : `siva-${activeTab}`} disabled={activeTab < 3} />
          </Tabs>
        </div>
        { }


        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {activeTab === 0 && (
            <Box mt={2}>
              <Typography variant="h6" sx={{ mb: 0, mt: 2 }} style={{ marginBottom: "0px", marginTop: "15px", display: "inline-block", fontSize: isMobileState ? "17px" : "24px" }} gutterBottom>
                Personal Details
              </Typography>




              <Grid container spacing={2} style={{ flexDirection: isMobileState ? "column-reverse" : null }}>
                <Grid item xs={12} md={9}>
                  <Box mt={2}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          required
                          fullWidth
                          label="Name (as in the 10th marksheet)"
                          {...field}
                          variant="outlined"
                          InputProps={{
                            sx: {
                              color: 'white',
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Default border color
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Focused border color
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff', // Hover border color
                              },
                            },
                          }}
                          value={formData.name}
                          onChange={handleChange}
                          InputLabelProps={{
                            sx: {

                              color: 'white', // Label text color

                              background: '#222222',

                              px: 1,

                              '& .MuiInputLabel-asterisk': {

                                color: 'red', // Asterisk color

                                fontSize: "21px"

                              },

                            },
                          }}
                          
                        />
                      )}
                    />


                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        {/* <Controller */}
                        {/* name="dob"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Date Of Birth"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  
                  {...field}
                  margin="normal"
                />
              )} */}
                        {/* /> */}
                        <Controller
                          name="dob"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              
                              fullWidth
                              //label="Date Of Birth (dd/mm/yyyy)"
                              label="Date of Birth"
                              type="date"
                              variant="outlined"
                              {...field}
                              
                              InputProps={{

                                sx: {

                                  '& input[type="date"]::-webkit-calendar-picker-indicator': {

                                    filter: 'invert(1)', // Inverts the icon to white

                                  },
                                  color: 'white',
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Default border color
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Focused border color
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fff', // Hover border color
                                  },

                                },

                              }}
                              
                              value={formData.dob}
                              onChange={handleChange}
                              InputLabelProps={{
                                sx: {
                                  color: 'white', // Label text color
                                  background: '#222222',
                                  px: 1,
                                  '& .MuiInputLabel-asterisk': {
                                    color: 'red', // Asterisk color
                                    fontSize: '21px',
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Controller
                          name="nationality"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              
                              fullWidth
                              label="Nationality"
                              {...field}
                              InputProps={{
                                sx: {
                                  color: 'white',
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Default border color
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Focused border color
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fff', // Hover border color
                                  },
                                },
                              }}
                              value={formData.nationality}
                              onChange={handleChange}
                              InputLabelProps={{
                                sx: {
                                  color: 'white', // Label text color
                                  background: '#222222',
                                  px: 1,
                                  '& .MuiInputLabel-asterisk': {
                                    color: 'red', // Asterisk color
                                    fontSize: '21px',
                                  },
                                },
                              }}
                              
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Controller
                          name="contactNumber"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              required
                              fullWidth
                              label="Contact No."
                              {...field}
                              value={formData.contactNumber}
                              onChange={handleInputChange}
                              // error={!!errors.contactNumber}
                              // helperText={errors.contactNumber ? errors.contactNumber.message : ''}
                              InputProps={{
                                sx: {
                                  color: 'white',
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Default border color
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: isRegistered ? 'red' : '#555', // Red if registered
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fff', // Hover border color
                                  },
                                },
                              }}
                              InputLabelProps={{
                                sx: {
                                  color: 'white', // Label text color
                                  background: '#222222',
                                  px: 1,
                                  '& .MuiInputLabel-asterisk': {
                                    color: 'red', // Asterisk color
                                    fontSize: '21px',
                                  },
                                },
                              }}
                              inputProps={{
                                pattern: "^[0-9]{10}$", // Regex pattern for a 10-digit phone number
                              
                                title: "Invalid Contact No", 
                              }}
                              
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              
                              fullWidth
                              label="Email ID"
                             
                              {...field}
                             
                              InputProps={{
                                sx: {
                                  color: 'white',
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Default border color
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Focused border color
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fff', // Hover border color
                                  },
                                },
                              }}
                             
                              value={formData.email}
                              onChange={handleChange} 
                              InputLabelProps={{
                                sx: {
                                  color: 'white', // Label text color
                                  background: '#222222',
                                  px: 1,
                                  '& .MuiInputLabel-asterisk': {
                                    color: 'red', // Asterisk color
                                    fontSize: '21px',
                                  },
                                },
                              }}
                            
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                    <Controller
                      name="aadhar"
                      control={control}
                      render={({ field }) => (
                        <TextField
                        
                          fullWidth
                          label="Aadhar No. / SSID"
                          {...field}
                          InputProps={{
                            sx: {
                              color: 'white',
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Default border color
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Focused border color
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff', // Hover border color
                              },
                            },
                          }}
                          value={formData.aadhar}
                          onChange={handleChange}
                          InputLabelProps={{
                            sx: {
                              color: 'white', // Label text color
                              background: '#222222',
                              px: 1,
                              '& .MuiInputLabel-asterisk': {
                                color: 'red', // Asterisk color
                                fontSize: '21px',
                              },
                            },
                          }}
                         
                        />
                      )}
                    />
                    <Controller
                      name="residentialAddress"
                      control={control}
                      render={({ field }) => (
                        <TextField
                        
                          fullWidth
                          multiline
                          rows={3}
                          label="Residential Address"
                          {...field}
                          InputProps={{
                            sx: {
                              color: 'white',
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Default border color
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Focused border color
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff', // Hover border color
                              },
                            },
                          }}
                          value={formData.residentialAddress}
                          onChange={handleChange}
                          InputLabelProps={{
                            sx: {
                              color: 'white', // Label text color
                              background: '#222222',
                              px: 1,
                              '& .MuiInputLabel-asterisk': {
                                color: 'red', // Asterisk color
                                fontSize: '21px',
                              },
                            },
                          }}
                        />
                      )}
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                      <Controller

name="state"
style={{fontSize: "17px"}}
control={control}
//rules={{ required: 'State is required' }}
render={({ field }) => (
  <TextField
    
  //  error={!!errors.state}
  //  helperText={errors.state?.message}
    select // Enables dropdown functionality
    fullWidth
    style={{fontSize: "17px"}}
    label="State"
    {...field}
    InputProps={{
      sx: {
        color: 'white',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#555', // Default border color
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#555', // Focused border color
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#fff', // Hover border color
        },
      },
    }}
    value={formData.state}
    formData={formData}
    onChange={handleStateSelect}
    
    InputLabelProps={{
      sx: {
        color: 'white', // Label text color
        background: '#222222',
        px: 1,
        '& .MuiInputLabel-asterisk': {
          color: 'red', // Asterisk color
          fontSize: '21px',
        },
      },
    }}
  >
    {/* Dropdown Options for Indian States */}
    {/* {[
      { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
      { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
      { value: 'Assam', label: 'Assam' },
      { value: 'Bihar', label: 'Bihar' },
      { value: 'Chhattisgarh', label: 'Chhattisgarh' },
      { value: 'Goa', label: 'Goa' },
      { value: 'Gujarat', label: 'Gujarat' },
      { value: 'Haryana', label: 'Haryana' },
      { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
      { value: 'Jharkhand', label: 'Jharkhand' },
      { value: 'Karnataka', label: 'Karnataka' },
      { value: 'Kerala', label: 'Kerala' },
      { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
      { value: 'Maharashtra', label: 'Maharashtra' },
      { value: 'Manipur', label: 'Manipur' },
      { value: 'Meghalaya', label: 'Meghalaya' },
      { value: 'Mizoram', label: 'Mizoram' },
      { value: 'Nagaland', label: 'Nagaland' },
      { value: 'Odisha', label: 'Odisha' },
      { value: 'Punjab', label: 'Punjab' },
      { value: 'Rajasthan', label: 'Rajasthan' },
      { value: 'Sikkim', label: 'Sikkim' },
      { value: 'Tamil Nadu', label: 'Tamil Nadu' },
      { value: 'Telangana', label: 'Telangana' },
      { value: 'Tripura', label: 'Tripura' },
      { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
      { value: 'Uttarakhand', label: 'Uttarakhand' },
      { value: 'West Bengal', label: 'West Bengal' },
      { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands' },
      { value: 'Chandigarh', label: 'Chandigarh' },
      { value: 'Dadra and Nagar Haveli and Daman and Diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
      { value: 'Delhi', label: 'Delhi' },
      { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
      { value: 'Ladakh', label: 'Ladakh' },
      { value: 'Lakshadweep', label: 'Lakshadweep' },
      { value: 'Puducherry', label: 'Puducherry' }, */}
    {/* ].map((option) => (
      <MenuItem  className="mfn" style={{fontSize: "17px"}} key={option.value} value={option.value}>
        {option.label}
      </MenuItem> */}
   {/* ))} */}
    {/* Loading and error handling */}
    {loading && <MenuItem  className="mfn" value="">Loading...</MenuItem>}
      {error && <MenuItem  className="mfn" value="">Error loading data</MenuItem>}

      {/* Dropdown Options from API response */}
      {!loading && !error && states.map((option) => (
       
        <MenuItem  className="mfn" style={{ fontSize: "17px" }} key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    
  </TextField>
)}
/>
                      </Grid>
                      <Grid item xs={12} md={4}>
        {/* City Select Dropdown with Autocomplete */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              value={cities.find((city) => city.value === formData.city) || null}
              onChange={handleCitySelect} // Update form state on selection
              options={cities}
              getOptionLabel={(option) => option.label || ''}
              loading={loading}
              loadingText="Loading cities..."
              isOptionEqualToValue={(option, value) => option.value === value} // Ensures single select
              getOptionSelected={(option, value) => option.value === value} // Match options correctly when clicking outside
              freeSolo={false}  // Disable free text input, users can only pick from the list
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                      },
                      height: '56px', 
                    },
                  }}
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
          )}
        />
      </Grid>
                      <Grid item xs={12} md={4}>
                        <Controller
                          name="pin"
                          control={control}
                          render={({ field }) => (
                            <TextField
                            
                              fullWidth
                              label="PIN"
                              {...field}
                              InputProps={{
                                sx: {
                                  color: 'white',
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Default border color
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Focused border color
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fff', // Hover border color
                                  },
                                },
                              }}
                              value={formData.pin}
                              onChange={handleChange}
                              InputLabelProps={{
                                sx: {
                                  color: 'white', // Label text color
                                  background: '#222222',
                                  px: 1,
                                  '& .MuiInputLabel-asterisk': {
                                    color: 'red', // Asterisk color
                                    fontSize: '21px',
                                  },
                                },
                              }}
                              
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>

                  <Box
                    p={4}
                    boxShadow={3}
                    borderRadius={0}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    bgcolor="#313131"
                    padding="0px"
                    style={{ marginTop: "25px", width: isMobileState ? "55%" : "100%", margin: "25px auto 0px auto" }}
                  >
                    <Box position="relative">
                      {/* Profile image */}


                      {/* Upload button */}
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"

                      >
                        <input
                          hidden
                          accept="image/*"
                          type="file"
                          id="file-input"
                          onChange={handleImageChange} // Handler to preview the image
                        />
                        <Avatar
                          style={{ width:isMobileState ? "200px" :"265px", height: isMobileState ? "200px" :"265px", objectFit: "contain", background: "#4c4c4c" }} // Set the dimensions for the Avatar
                          src={imagePreviewUrl || 'https://backstagepass.co.in/zgast/banners/prfimg.png'} // Default image if no preview URL
                          sx={{ borderRadius: 1 }} // Border radius for the Avatar
                          className='imagePreviewUrl'
                        />
                      </IconButton>
                    </Box>



                    {/* <Box mt={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="body1">John Doe</Typography>
          <Typography variant="body2" color="textSecondary">johndoe@example.com</Typography>
        </Box> */}

                    {/* <Box mt={2}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Box> */}
                  </Box>

                </Grid>
              </Grid>

              <Typography variant="h6" style={{ marginBottom: "0px", marginTop: "15px", display: "inline-block", fontSize: isMobileState ? "17px" : "24px" }} gutterBottom>
                Educational/Occupational Background
              </Typography>
              <Box mt={2}>
                <Controller
                  name="qualification"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      
                      select
                      fullWidth
                      label="Your Highest Qualification"
                      {...field}
                      InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555', // Default border color
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555', // Focused border color
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#fff', // Hover border color
                          },
                        },
                      }}
                      onChange={(e) => {
                        field.onChange(e.target.value); // Update form value
                        setFormData((prev) => ({ ...prev, qualification: e.target.value })); // Optional: Sync external state
                        //console.log('Selected Qualification:', e.target.value);
                      }}
                      InputLabelProps={{
                        sx: {
                          color: 'white', // Label text color
                          background: '#222222',
                          px: 1,
                          '& .MuiInputLabel-asterisk': {
                            color: 'red', // Asterisk color
                            fontSize: '21px',
                          },
                        },
                      }}
                    >
                     <MenuItem  className="mfn" value="10th pass">10th Pass</MenuItem>
                      <MenuItem  className="mfn" value="12th pursuing">12th Pursuing</MenuItem>
                      <MenuItem  className="mfn" value="12th pass">12th Pass</MenuItem>
                      <MenuItem  className="mfn" value="Pursuing Graduation">Pursuing Graduation</MenuItem>
                      <MenuItem  className="mfn" value="Graduate">Graduate</MenuItem>
                      <MenuItem  className="mfn" value="Pursuing Post Graduation">Pursuing Post Graduation</MenuItem>
                      <MenuItem  className="mfn" value="postgraduate">Post Graduate</MenuItem>
                    </TextField>
                  )}
                />


                {/* Show these fields only if a specific qualification is selected */}
                {(selectedQualification === '10th pass' ||
                  selectedQualification === '12th pass' ||
                  selectedQualification === 'Pursuing Graduation' ||
                  selectedQualification === 'Graduate' ||
                  selectedQualification === 'Pursuing Post Graduation' ||
                  selectedQualification === 'postgraduate') && (
                    <>


                      <Controller
                        name="yearOfCompletion"
                        control={control}
                        render={({ field }) => (
                          <TextField
                          
                            fullWidth
                            label="Year of Completion YYYY"
                            {...field}
                            InputProps={{
                              sx: {
                                color: 'white',
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#555', // Default border color
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#555', // Focused border color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#fff', // Hover border color
                                },
                              },
                            }}
                            value={formData.yearOfCompletion}
                            onChange={handleChange}
                            InputLabelProps={{
                              sx: {
                                color: 'white', // Label text color
                                background: '#222222',
                                px: 1,
                                '& .MuiInputLabel-asterisk': {
                                  color: 'red', // Asterisk color
                                  fontSize: '21px',
                                },
                              },
                            }}
                            
                          />
                        )}
                      />

                      <Controller
                        name="schoolCollegeName"
                        control={control}
                        render={({ field }) => (
                          <TextField
                          
                            fullWidth
                            label="Name of School/College"
                            {...field}
                            InputProps={{
                              sx: {
                                color: 'white',
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#555', // Default border color
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#555', // Focused border color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#fff', // Hover border color
                                },
                              },
                            }}
                            value={formData.schoolCollegeName}
                            onChange={handleChange}
                            InputLabelProps={{
                              sx: {
                                color: 'white', // Label text color
                                background: '#222222',
                                px: 1,
                                '& .MuiInputLabel-asterisk': {
                                  color: 'red', // Asterisk color
                                  fontSize: '21px',
                                },
                              },
                            }}
                            
                          />
                        )}
                      />
                      
              
                      <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
        {/* City Select Dropdown with Autocomplete */}
        <Controller
          name="city1"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              //value={cities.find((city) => city.value === formData.city) || null}
              value={collegecity.find((city1) => city1.value === formData.city1) || null}
              onChange={handleCollegycityChange} // Update form state on selection
              options={collegecity}
              getOptionLabel={(option) => option.label || ''}
              loading={loading}
              loadingText="Loading cities..."
              isOptionEqualToValue={(option, value) => option.value === value} // Ensures single select
              getOptionSelected={(option, value) => option.value === value} // Match options correctly when clicking outside
              freeSolo={false}  // Disable free text input, users can only pick from the list
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                      },
                      height: '56px', 
                    },
                  }}
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
          )}
        />
      </Grid>
                        {/* <Grid item xs={12} md={6}>
                          <Controller
                            name="city1"
                            control={control}
                            render={({ field }) => (
                              <Autocomplete
                              {...field}
                              value={collegecity.find((city1) => city.value === formData.city1) || null}
                              onChange={handleCollegycityChange} // Update form state on selection
                              options={collegecity}
                              getOptionLabel={(option) => option.label || ''}
                              loading={loading}
                              loadingText="Loading cities..."
                              isOptionEqualToValue={(option, value) => option.value === value} // Ensures single select
                              getOptionSelected={(option, value) => option.value === value} // Match options correctly when clicking outside
                              freeSolo={false}  // Disable free text input, users can only pick from the list
                              renderInput={(params) => (
                              <TextField
                                fullWidth
                                label="City"
                                {...field}
                                InputProps={{
                                  sx: {
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Default border color
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Focused border color
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#fff', // Hover border color
                                    },
                                  },
                                }}
                               
                                InputLabelProps={{
                                  sx: {
                                    color: 'white', // Label text color
                                    background: '#222222',
                                    px: 1,
                                    '& .MuiInputLabel-asterisk': {
                                      color: 'red', // Asterisk color
                                      fontSize: '21px',
                                    },
                                  },
                                }}
                                
                              />
                            )}
                            />
                            )}
                          />
                        </Grid> */}
                        <Grid item xs={12} md={6}>
                          <Controller
                            name="board"
                            control={control}
                            render={({ field }) => (
                              <TextField
                              
                                fullWidth
                                label="Board"
                                {...field}
                                InputProps={{
                                  sx: {
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Default border color
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Focused border color
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#fff', // Hover border color
                                    },
                                  },
                                }}
                                value={formData.board}
                                onChange={handleChange}
                                InputLabelProps={{
                                  sx: {
                                    color: 'white', // Label text color
                                    background: '#222222',
                                    px: 1,
                                    '& .MuiInputLabel-asterisk': {
                                      color: 'red', // Asterisk color
                                      fontSize: '21px',
                                    },
                                  },
                                }}
                                
                              />
                            )}
                          />
                        </Grid>
                      </Grid>


                    </>
                  )}
                {selectedQualification === '12th pursuing' && (
                  <>

                    <Controller
                      name="schoolCollegeName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                        
                          fullWidth
                          label="Name of School/College"
                          {...field}
                          InputProps={{
                            sx: {
                              color: 'white',
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Default border color
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555', // Focused border color
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff', // Hover border color
                              },
                            },
                          }}
                          value={formData.schoolCollegeName}
                          onChange={handleChange}
                          InputLabelProps={{
                            sx: {
                              color: 'white', // Label text color
                              background: '#222222',
                              px: 1,
                              '& .MuiInputLabel-asterisk': {
                                color: 'red', // Asterisk color
                                fontSize: '21px',
                              },
                            },
                          }}
                          
                        />
                      )}
                    />
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
        {/* City Select Dropdown with Autocomplete */}
        <Controller
          name="city1"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              //value={cities.find((city) => city.value === formData.city) || null}
              value={collegecity.find((city1) => city1.value === formData.city1) || null}
              onChange={handleCollegycityChange} // Update form state on selection
              options={collegecity}
              getOptionLabel={(option) => option.label || ''}
              loading={loading}
              loadingText="Loading cities..."
              isOptionEqualToValue={(option, value) => option.value === value} // Ensures single select
              getOptionSelected={(option, value) => option.value === value} // Match options correctly when clicking outside
              freeSolo={false}  // Disable free text input, users can only pick from the list
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                      },
                      height: '56px', 
                    },
                  }}
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
          )}
        />
      </Grid>
                      <Grid item xs={12} md={6}>
                        <Controller
                          name="board"
                          control={control}
                          render={({ field }) => (
                            <TextField
                            
                              fullWidth
                              label="Board"
                              {...field}
                              InputProps={{
                                sx: {
                                  color: 'white',
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Default border color
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#555', // Focused border color
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#fff', // Hover border color
                                  },
                                },
                              }}
                              value={formData.board}
                              onChange={handleChange}
                              InputLabelProps={{
                                sx: {
                                  color: 'white', // Label text color
                                  background: '#222222',
                                  px: 1,
                                  '& .MuiInputLabel-asterisk': {
                                    color: 'red', // Asterisk color
                                    fontSize: '21px',
                                  },
                                },
                              }}
                              
                            />
                          )}
                        />
                      </Grid>
                    </Grid>

                  </>
                )}
                {(selectedQualification === '10th pass' ||
                  selectedQualification === '12th pass' ||
                  selectedQualification === 'Pursuing Graduation' ||
                  selectedQualification === 'Graduate' ||
                  selectedQualification === 'Pursuing Post Graduation' ||
                  selectedQualification === 'postgraduate')  && (
                    <>
                      <Controller
                        name="employmentStatus"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            select
                            
                            fullWidth
                            label="Employment status"
                            {...field}
                            InputProps={{
                              sx: {
                                color: 'white',
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#555',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#555',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#fff',
                                },
                              },
                            }}
                            InputLabelProps={{
                              sx: {
                                color: 'white', // Label text color
                                background: '#222222',
                                px: 1,
                                '& .MuiInputLabel-asterisk': {
                                  color: 'red', // Asterisk color
                                  fontSize: '21px',
                                },
                              },
                            }}
                            onChange={(e) => {
                              field.onChange(e.target.value); // Update React Hook Form
                              setEmploymentStatus(e.target.value); // Optional: Update external state
                            }}
                          >
                            <MenuItem  className="mfn" value="unemployed">Unemployed</MenuItem>
                            <MenuItem  className="mfn" value="employed">Employed</MenuItem>
                            <MenuItem  className="mfn" value="looking">Looking for Employment</MenuItem>
                            <MenuItem  className="mfn" value="further">Want to study further</MenuItem>
                         
                          </TextField>
                        )}
                      />


                      {/* Show these fields only if the applicant is employed */}

                      {employmentStatus === 'employed' && (
                        <>
                          <Controller
                            name="organizationName"
                            control={control}
                            render={({ field }) => (
                              <TextField
                              
                                fullWidth
                                label="Name of Organization"
                                {...field}
                                InputProps={{
                                  sx: {
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Default border color
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Focused border color
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#fff', // Hover border color
                                    },
                                  },
                                }}
                                value={formData.organizationName}
                                onChange={handleChange}
                                InputLabelProps={{
                                  sx: {
                                    color: 'white', // Label text color
                                    background: '#222222',
                                    px: 1,
                                    '& .MuiInputLabel-asterisk': {
                                      color: 'red', // Asterisk color
                                      fontSize: '21px',
                                    },
                                  },
                                }}
                                
                              />
                            )}
                          />
                          <Controller
                            name="designationRole"
                            control={control}
                            render={({ field }) => (
                              <TextField
                              
                                fullWidth
                                label="Designation/Role"
                                {...field}
                                InputProps={{
                                  sx: {
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Default border color
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#555', // Focused border color
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#fff', // Hover border color
                                    },
                                  },
                                }}
                                value={formData.designationRole}
                                onChange={handleChange}
                                InputLabelProps={{
                                  sx: {
                                    color: 'white', // Label text color
                                    background: '#222222',
                                    px: 1,
                                    '& .MuiInputLabel-asterisk': {
                                      color: 'red', // Asterisk color
                                      fontSize: '21px',
                                    },
                                  },
                                }}
                                
                              />
                            )}
                          />
                        </>
                      )}
                    </>
                  )}
              </Box>
              <Button type="submit" variant="contained" color="primary" className='button brand size200'>
                  Submit
                </Button>
              <Button
                variant="contained"
                type='submit'
                onClick={handleNext}
                style={{ marginTop: '20px', backgroundColor: 'transparent !important' }}
                className='button brand size200'
              >
                Next
              </Button>
            </Box>
          )}

          {activeTab === 1 && (
            <Box mt={2}>
              <Typography variant="h6" style={{ fontSize: isMobileState ? "17px" : "24px" }}>Parent’s/Guardian's Details</Typography>
              <Controller
                name="guardianName"
                control={control}
                render={({ field }) => <TextField  fullWidth label="Parent’s / Guardian's Name" {...field} InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Default border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Focused border color
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff', // Hover border color
                    },
                  },
                }}
                  value={formData.guardianName}
                  onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      color: 'white', // Label text color
                      background: '#222222',
                      px: 1,
                      '& .MuiInputLabel-asterisk': {
                        color: 'red', // Asterisk color
                        fontSize: '21px',
                      },
                    },
                  }}
                  
                  
                  />}
              />
              <Controller
                name="guardianRelation"
                control={control}
                render={({ field }) => <TextField  fullWidth label="Relation to the student" {...field} InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Default border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Focused border color
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff', // Hover border color
                    },
                  },
                }}
                  value={formData.guardianRelation}
                  onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      color: 'white', // Label text color
                      background: '#222222',
                      px: 1,
                      '& .MuiInputLabel-asterisk': {
                        color: 'red', // Asterisk color
                        fontSize: '21px',
                      },
                    },
                  }}
                  
                  
                  />}
              />
              <Controller
                name="guardianContact"
                control={control}
                render={({ field }) => <TextField  fullWidth label="Contact No." {...field} InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Default border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Focused border color
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff', // Hover border color
                    },
                  },
                }}
                  value={formData.guardianContact}
                  onChange={handleChange}
                  InputLabelProps={{
                    sx: {
                      color: 'white', // Label text color
                      background: '#222222',
                      px: 1,
                      '& .MuiInputLabel-asterisk': {
                        color: 'red', // Asterisk color
                        fontSize: '21px',
                      },
                    },
                  }}
                  
                  
                  />}
              />
              <Controller
                name="guardianEmail"
                control={control}
                render={({ field }) => <TextField  fullWidth label="Email ID." {...field} InputProps={{
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Default border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#555', // Focused border color
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff', // Hover border color
                    },
                  },
                }}
                  value={formData.guardianEmail} 
                  onChange={handleChange} 
                  InputLabelProps={{
                    sx: {
                      color: 'white', // Label text color
                      background: '#222222',
                      px: 1,
                      '& .MuiInputLabel-asterisk': {
                        color: 'red', // Asterisk color
                        fontSize: '21px',
                      },
                    },
                  }} />}
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  disabled={activeTab === 0}
                  style={{ marginRight: '10px', backgroundColor: 'transparent !important' }}
                  className='button brand size200'
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  type='submit'
                  onClick={handleNext}
                  className='button brand size200'
                  style={{ backgroundColor: 'transparent !important' }}
                >
                  Next
                </Button>
                <Button type="submit" variant="contained" color="primary" className='button brand size200'>
                  Submit
                </Button>
              </Box>
            </Box>
          )}

          {activeTab === 2 && (
            <Box mt={2} style={{ color: "#fff" }}>
              <Typography variant="h6" style={{ fontSize: isMobileState ? "17px" : "24px" }}  gutterBottom>
                Program Details
              </Typography>
              <Box mt={2} >
                {/* Program Dropdown */}


                <div>

                  <Typography variant="subtitle1" className='chp' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff' }}>
                    Choose your program:
                  </Typography>

                  {/* Program Selection */}
                  <TextField
                    select
                    
                    fullWidth
                    label="Choose your program"
                    value={program}
                    onChange={handleProgramChange}
                    InputProps={{
                      sx: {
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#555', // Default border color
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#555', // Focused border color
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#fff', // Hover border color
                        },
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: 'white', // Label text color
                        background: '#222222',
                        px: 1,
                        '& .MuiInputLabel-asterisk': {
                          color: 'red', // Asterisk color
                          fontSize: '21px',
                        },
                      },
                    }}
                  >
                    <MenuItem  className="mfn" value="bachelor">Bachelor’s [Duration: 4 years]</MenuItem>
                    <MenuItem  className="mfn" value="masters">Master’s [Duration: 2 years]</MenuItem>
                    <MenuItem  className="mfn" value="advancedDiploma">Advanced Diploma [Duration: 1 year]</MenuItem>
                    <MenuItem  className="mfn" value="diploma">Diploma [Duration: 6 months]</MenuItem>
                  </TextField>

                  {/* Specialization Selector */}
                  <SpecializationSelector
                    program={program}
                    specialization={specialization}
                    handleSpecializationChange={handleSpecializationChange}
                  />


                </div>

                {/* 
    {program === 'advancedDiploma' && specialization === 'tdca' && (
          <MenuItem  className="mfn" disabled>
            Online (Unavailable)
          </MenuItem>
        )} */}

                {/* Specialization Dropdown */}


                {program === 'advancedDiploma' || specialization === 'tdca' && (
                  <>
                  {/* Study1 */}
                    <Box mt={3}>
                      <Typography variant="h6">Choose The Preferable Mode Of Study <span style={{ color: "#f00" }}>*</span></Typography>
                      <RadioGroup
                        value={modeOfStudy}
                        onChange={(e) => setModeOfStudy(e.target.value)}
                      >
                        <FormControlLabel
                          value="online" 
                          control={<Radio sx={{
                            color: 'white', // Change unselected radio color
                            '&.Mui-checked': {
                              color: 'white', // Change selected radio color
                            },
                            // Adjust color when disabled
                            '&.Mui-disabled': {
                              color: '#555', // Grey color when disabled
                            },
                          }} style={{ color: "#555" }} />}
                          label="Online"
                          // Disable if the selected program is Advanced Diploma
                          style={{
                            color: program === 'advancedDiploma' ? '#555' : 'white', // Change label color
                          }}
                        />
                        <FormControlLabel value="offline"  control={<Radio sx={{
                          color: 'white', // Change unselected radio color
                          '&.Mui-checked': {
                            color: 'white', // Change selected radio color
                          },
                        }} />} label="Offline" />
                      </RadioGroup>
                      {program === 'advancedDiploma' && (
                        <FormHelperText style={{ fontSize: "16px", color: "#ec1829" }}>
                          *Due to the nature of its subjects, the Advanced Diploma in Traditional & Digital Concept Art is only available as an offline course.
                        </FormHelperText>
                      )}
                    </Box>
                    


                  </>
                  
                )}

                {program === 'diploma' && (
                  <>
                  {/* Study3  */}
                    <Box mt={3} style={{ color: "#fff" }}>
                      <Typography variant="h6">Choose The Preferable Mode Of Study <span style={{ color: "#f00" }}>*</span></Typography>
                      <RadioGroup
                        value={modeOfStudy}
                        onChange={(e) => {
                          setModeOfStudy(e.target.value);
                          setSelectedBatch('');  // Reset batch selection when mode of study changes
                        }}
                      >
                        <FormControlLabel
                          value="online" 
                          control={<Radio sx={{
                            color: 'white', // Change unselected radio color
                            '&.Mui-checked': {
                              color: 'white', // Change selected radio color
                            },
                          }} />}
                          label="Online"
                          disabled={program === 'advancedDiploma'} style={{ color: "#fff" }}// Disable if the selected program is Advanced Diploma
                        />
                        <FormControlLabel value="offline"  control={<Radio sx={{
                          color: 'white', // Change unselected radio color
                          '&.Mui-checked': {
                            color: 'white', // Change selected radio color
                          },
                        }} />} label="Offline" />
                      </RadioGroup>
                      
                      
                      {specialization === 'gdu' && modeOfStudy === 'online' && (
        <div>
          <Typography variant="subtitle1" className="chp" style={{ fontSize: "24px", color: '#fff' }}>
            Choose the Batch you want to join In:
          </Typography>
       
          <TextField
            select
            fullWidth
            label="Choose the Batch you want to join In"
            value={selectedBatch}  // Ensure value is bound to selectedBatch state
            onChange={handleBatchChange}  // Ensure onChange is updating the state
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Default border color
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Focused border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff', // Hover border color
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white', // Label text color
                background: '#222222',
                px: 1,
                '& .MuiInputLabel-asterisk': {
                  color: 'red', // Asterisk color
                  fontSize: '21px',
                },
              },
            }}
          >
            {/* Conditionally render MenuItems based on specialization */}
                
            <MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="21-april-2025">21st April 2025</MenuItem>
                <MenuItem  className="mfn" value="21-july-2025">21st July 2025</MenuItem>
                <MenuItem  className="mfn" value="21-october-2025">21st October 2025</MenuItem> 
               


             
            
          </TextField>

          {/* Debugging */}
       
        </div>
      )}
       {specialization === 'gdunreal' && modeOfStudy === 'online' && (
        <div>
          <Typography variant="subtitle1" className="chp" style={{ fontSize: "24px", color: '#fff' }}>
            Choose the Batch you want to join In:
          </Typography>
       
          <TextField
            select
            fullWidth
            label="Choose the Batch you want to join In"
            value={selectedBatch}  // Ensure value is bound to selectedBatch state
            onChange={handleBatchChange}  // Ensure onChange is updating the state
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Default border color
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Focused border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff', // Hover border color
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white', // Label text color
                background: '#222222',
                px: 1,
                '& .MuiInputLabel-asterisk': {
                  color: 'red', // Asterisk color
                  fontSize: '21px',
                },
              },
            }}
          >
            {/* Conditionally render MenuItems based on specialization */}
                
            <MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="21-april-2025">21st April 2025</MenuItem>
                <MenuItem  className="mfn" value="21-october-2025">21st October 2025</MenuItem> 
              </TextField>

          {/* Debugging */}
       
        </div>
      )}
      {specialization === '3dart' && modeOfStudy === 'online' && (
        <div>
          <Typography variant="subtitle1" className="chp" style={{ fontSize: "24px", color: '#fff' }}>
            Choose the Batch you want to join In:
          </Typography>
       
          <TextField
            select
            fullWidth
            label="Choose the Batch you want to join In"
            value={selectedBatch}  // Ensure value is bound to selectedBatch state
            onChange={handleBatchChange}  // Ensure onChange is updating the state
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Default border color
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Focused border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff', // Hover border color
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white', // Label text color
                background: '#222222',
                px: 1,
                '& .MuiInputLabel-asterisk': {
                  color: 'red', // Asterisk color
                  fontSize: '21px',
                },
              },
            }}
          >
            {/* Conditionally render MenuItems based on specialization */}
                
            <MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="28-april-2025">28th April 2025</MenuItem>
                <MenuItem  className="mfn" value="28-july-2025">28th July 2025</MenuItem>
                <MenuItem  className="mfn" value="27-october-2025">27th October 2025</MenuItem> 
              </TextField>

          {/* Debugging */}
       
        </div>
      )}
        {specialization === 'gdp' && modeOfStudy === 'online' && (
        <div>
          <Typography variant="subtitle1" className="chp" style={{ fontSize: "24px", color: '#fff' }}>
            Choose the Batch you want to join In:
          </Typography>
       
          <TextField
            select
            fullWidth
            label="Choose the Batch you want to join In"
            value={selectedBatch}  // Ensure value is bound to selectedBatch state
            onChange={handleBatchChange}  // Ensure onChange is updating the state
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Default border color
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#555', // Focused border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff', // Hover border color
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white', // Label text color
                background: '#222222',
                px: 1,
                '& .MuiInputLabel-asterisk': {
                  color: 'red', // Asterisk color
                  fontSize: '21px',
                },
              },
            }}
          >
            {/* Conditionally render MenuItems based on specialization */}
                
            <MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="21-april-2025">21st April 2025</MenuItem>
                <MenuItem  className="mfn" value="20-october-2025">20th October 2025</MenuItem> 
              </TextField>

          {/* Debugging */}
       
        </div>
      )}
 {modeOfStudy === 'offline' && (specialization === 'gdu' || specialization === 'gdunreal' || specialization === 'gdp') && (

                      <div>

<Typography variant="subtitle1" className='chp' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff' }}>
Choose the Batch you want to join In:
</Typography>

{/* Program Selection */}
<TextField
  select
  fullWidth
  label="Choose the Batch you want to join In"
  value={selectedBatch}
  onChange={handleBatchChange}
  InputProps={{
    sx: {
      color: 'white',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Default border color
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Focused border color
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff', // Hover border color
      },
    },
  }}
  InputLabelProps={{
    sx: {
      color: 'white', // Label text color
      background: '#222222',
      px: 1,
      '& .MuiInputLabel-asterisk': {
        color: 'red', // Asterisk color
        fontSize: '21px',
      },
    },
  }}
>
<MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="19-may-2025">19th May 2025</MenuItem>
                <MenuItem  className="mfn" value="17-november-2025">17th November 2025</MenuItem>
  
</TextField>

</div> 
)}

{modeOfStudy === 'offline' && (specialization === '3dart') && (

                      <div>

<Typography variant="subtitle1" className='chp' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff' }}>
Choose the Batch you want to join In:
</Typography>

{/* Program Selection */}
<TextField
  select
  fullWidth
  label="Choose the Batch you want to join In"
  value={selectedBatch}
  onChange={handleBatchChange}
  InputProps={{
    sx: {
      color: 'white',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Default border color
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Focused border color
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff', // Hover border color
      },
    },
  }}
  InputLabelProps={{
    sx: {
      color: 'white', // Label text color
      background: '#222222',
      px: 1,
      '& .MuiInputLabel-asterisk': {
        color: 'red', // Asterisk color
        fontSize: '21px',
      },
    },
  }}
>
<MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="12-may-2025">12th May 2025</MenuItem>
                <MenuItem  className="mfn" value="20-november-2025">20th November 2025</MenuItem>
  
</TextField>

</div> 
)}                  


              

         
  

                      {program === 'advancedDiploma' && (
                        <FormHelperText style={{ fontSize: "16px", color: "#ec1829" }}>
                          *Due to the nature of its subjects, the Advanced Diploma in Traditional & Digital Concept Art is only available as an offline course.
                        </FormHelperText>
                      )}
                    </Box>

                    <div>
                      <Typography variant="h6">Documents Needed</Typography>
                      <Typography variant="body2" gutterBottom className='discl'>
                        *All documents to be submitted with this online form are optional. The final stage of admission including the seat reservation will require proper document submission.
                      </Typography>
                      <Typography variant="h6">Certificates Required For Advanced Diploma Course:</Typography>
                      {/* <p>*All documents are optional at this stage but required for seat reservation.</p> */}
                      <div className='FileUpload'>
                        {[
                          { label: "10th Class Marks Sheet / Pass Certificate	- Color Scanned Copy (PDF or Any Image Format)", name: "tenthMarkSheet" },
                          { label: "12th Class or equivalent Marks Sheet / Pass Certificate- Color Scanned Copy (PDF or Any Image Format)", name: "twelfthMarkSheet" },
                          { label: "Aadhar card	- Color Scanned Copy (PDF or Any Image Format)", name: "aadhar" },
                          //{ label: "Recent Passport size photocopy  – Color Scanned Copy", name: "migrationCertificate" },

                        ].map((doc, index) => (
                          <div className="form-groupH" key={index}>
                            <label>{doc.label} {doc.name === "aadhar" ? <span style={{ color: "#f00" }}>*</span> : null}</label>
                            <input
                              type="file"    accept="image/jpeg, image/png, image/gif, application/pdf" 
                              name={doc.name}
                              onChange={handleFileChange}
                              multiple={doc.name === "passportPhotos"}
                            />
                            {/* {files[doc.name] && (
                                <span className="file-name">
                                  {files[doc.name].name}
                                </span>
                              )} */}
                          </div>
                        ))}

                      </div>
                    </div>
                  </>
                )}


                {/* Conditional Display of Documents */}
                <Box mt={4} style={{ color: "#fff" }}>


                  {program === 'bachelor' && (
                    <>
                      <div>
                        <Typography variant="h6">Documents Needed</Typography>
                        <Typography variant="body2" gutterBottom className='discl'>
                          *All documents to be submitted with this online form are optional. The final stage of admission including the seat reservation will require proper document submission.
                        </Typography>
                        <Typography variant="h6">Certificates Required For Bachelor Courses: 
                        </Typography>
                        {/* <p>*All documents are optional at this stage but required for seat reservation.</p> */}
                        <div className='FileUpload'>
                          {[
                            { label: "10th Class Marks Sheet / Pass Certificate - Scanned Copies (PDF or Any Image Format)", name: "tenthMarkSheet" },
                            { label: "12th Class or equivalent Marks Sheet / Pass Certificate - Scanned Copies (PDF or Any Image Format)", name: "twelfthMarkSheet" },
                            { label: "Aadhar Card - Scanned Copies (PDF or Any Image Format)", name: "aadhar" },
                            //{ label: "Recent Passport Size Photocopies - 5", name: "passportPhotos" },
                          ].map((doc, index) => (
                            <div className="form-groupH" key={index}>
                              <label>{doc.label} {doc.name === "aadhar" ? <span style={{ color: "#f00" }}>*</span> : null}</label>
                              <input
                                type="file"   accept="image/jpeg, image/png, image/gif, application/pdf" 
                                name={doc.name}
                                onChange={handleFileChange}
                                multiple={doc.name === "passportPhotos"}
                              />
                              {/* {files[doc.name] && (
                                <span className="file-name">
                                  {files[doc.name].name}
                                </span>
                              )} */}
                            </div>
                          ))}

                        </div>
                      </div>
                    </>
                  )}

                  {program === 'masters' && (
                    <>
                      <div>
                        <Typography variant="h6">Documents Needed</Typography>
                        <Typography variant="body2" gutterBottom className='discl'>
                          *All documents to be submitted with this online form are optional. The final stage of admission including the seat reservation will require proper document submission.
                        </Typography>
                        <Typography variant="h6">Certificates Required For Masters Course:</Typography>
                        {/* <p>*All documents are optional at this stage but required for seat reservation.</p> */}
                        <div className='FileUpload'>
                          {[
                            { label: "10th Class Marks Sheet / Pass Certificate - Scanned Copies (PDF or Any Image Format)", name: "tenthMarkSheet" },
                            { label: "12th Class or equivalent Marks Sheet / Pass Certificate - Scanned Copies (PDF or Any Image Format)", name: "twelfthMarkSheet" },
                            { label: "Degree Provisional Certificate - Scanned Copies (PDF or Any Image Format)", name: "casteCertificate" },
                            { label: "Aadhar card - Scanned Copies (PDF or Any Image Format)", name: "aadhar" },
                            // { label: "Recent Passport size photocopies – 5", name: "passportPhotos" },
                          ].map((doc, index) => (
                            <div className="form-groupH" key={index}>
                              <label>{doc.label} {doc.name === "aadhar" ? <span style={{ color: "#f00" }}>*</span> : null}</label>
                              <input
                                type="file"   accept="image/jpeg, image/png, image/gif, application/pdf" 
                                name={doc.name}
                                onChange={handleFileChange}
                                multiple={doc.name === "passportPhotos"}
                              />
                              {/* {files[doc.name] && (
                                <span className="file-name">
                                  {files[doc.name].name}
                                </span>
                              )} */}
                            </div>
                          ))}

                        </div>
                      </div>
                    </>
                  )}

                  {program === 'advancedDiploma' && (
                    <>
                    {/* Study2 */}
                      <div>
                        <Typography variant="h6">Choose The Preferable Mode Of Study <span style={{ color: "#f00" }}>*</span></Typography>
                        {specialization === 'tdca' ? <Typography variant="subtitle1">*Due to the nature of its subjects, the Advanced Diploma in Traditional & Digital Concept Art is only available as an offline course.
                        </Typography> : null}
                        <RadioGroup
                          value={modeOfStudy}
                          onChange={(e) => setModeOfStudy(e.target.value)}
                        >
                          <FormControlLabel
                            value="online" 
                            control={<Radio sx={{
                              color: 'white', // Change unselected radio color
                              '&.Mui-checked': {
                                color: 'white', // Change selected radio color
                              },
                            }} />}
                            label="Online"
                            //disabled={specialization === 'tdca'} 
                            style={{ color: "#222", display: specialization === 'tdca' ? "none" : "block" }}// Disable if the selected program is Advanced Diploma
                          />
                          <FormControlLabel value="offline"  control={<Radio sx={{
                            color: 'white', // Change unselected radio color
                            '&.Mui-checked': {
                              color: 'white', // Change selected radio color
                            },
                          }} />} label="Offline" />
                        </RadioGroup>
                        {modeOfStudy === 'online' && specialization === 'gd' && (
                      <div>

<Typography variant="subtitle1" className='chp' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff' }}>
Choose the Batch you want to join In:
</Typography>

{/* Program Selection */}
<TextField
  select
  fullWidth
  label="Choose the Batch you want to join In"
  value={selectedBatch}
  onChange={handleBatchChange}
  InputProps={{
    sx: {
      color: 'white',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Default border color
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Focused border color
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff', // Hover border color
      },
    },
  }}
  InputLabelProps={{
    sx: {
      color: 'white', // Label text color
      background: '#222222',
      px: 1,
      '& .MuiInputLabel-asterisk': {
        color: 'red', // Asterisk color
        fontSize: '21px',
      },
    },
  }}
>
<MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="21-april-2025">21st April 2025</MenuItem>
                <MenuItem  className="mfn" value="20-october-2025">20th October 2025</MenuItem>
  
</TextField>




</div> 
)}

{modeOfStudy === 'offline' && specialization === 'gd'  && (
                      <div>

<Typography variant="subtitle1" className='chp' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff' }}>
Choose the Batch you want to join In:
</Typography>

{/* Program Selection */}
<TextField
  select
  fullWidth
  label="Choose the Batch you want to join In"
  value={selectedBatch}
  onChange={handleBatchChange}
  InputProps={{
    sx: {
      color: 'white',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Default border color
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#555', // Focused border color
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff', // Hover border color
      },
    },
  }}
  InputLabelProps={{
    sx: {
      color: 'white', // Label text color
      background: '#222222',
      px: 1,
      '& .MuiInputLabel-asterisk': {
        color: 'red', // Asterisk color
        fontSize: '21px',
      },
    },
  }}
>
<MenuItem  className="mfn" value="">Choose Batch</MenuItem>
                <MenuItem  className="mfn" value="19-may-2025">19th May 2025</MenuItem>
                <MenuItem  className="mfn" value="17-november-2025">17th November 2025</MenuItem>
  
</TextField>

</div> 
)}

                        <Typography variant="h6">Documents Needed</Typography>
                        <Typography variant="body2" gutterBottom className='discl'>
                          *All documents to be submitted with this online form are optional. The final stage of admission including the seat reservation will require proper document submission.
                        </Typography>
                        <Typography variant="h6">Certificates Required For Advanced Diploma Course:</Typography>
                        {/* <p>*All documents are optional at this stage but required for seat reservation.</p> */}
                        <div className='FileUpload'>
                          {[
                            { label: "10th Class Marks Sheet / Pass Certificate	- Color Scanned Copy (PDF or Any Image Format)", name: "tenthMarkSheet" },
                            { label: "12th Class or equivalent Marks Sheet / Pass Certificate- Color Scanned Copy (PDF or Any Image Format)", name: "twelfthMarkSheet" },
                            { label: "Aadhar card	- Color Scanned Copy (PDF or Any Image Format)", name: "aadhar" },
                            // { label: "Recent Passport size photocopy  – Color Scanned Copy", name: "migrationCertificate" },

                          ].map((doc, index) => (
                            <div className="form-groupH" key={index}>
                              <label>{doc.label} {doc.name === "aadhar" ? <span style={{ color: "#f00" }}>*</span> : null}</label>
                              <input
                                type="file"    accept="image/jpeg, image/png, image/gif, application/pdf" 
                                name={doc.name}
                                onChange={handleFileChange}
                                multiple={doc.name === "passportPhotos"}
                              />
                              {/* {files[doc.name] && (
                                <span className="file-name">
                                  {files[doc.name].name}
                                </span>
                              )} */}
                            </div>
                          ))}

                        </div>
                      </div>
                    </>
                  )}
                </Box>
              </Box>
              <Box mt={2}>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  style={{ marginRight: '10px', backgroundColor: 'transparent !important' }}
                  className='button brand size200'
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  type='submit'
                  onClick={handleNext}
                  className='button brand size200'
                  style={{ backgroundColor: 'transparent !important' }}

                >
                  Next
                </Button>
                <Button type="submit" variant="contained" color="primary" className='button brand size200'>
                  Submit
                </Button>
              </Box>
            </Box>
          )}

          {activeTab === 3 && (
            <Box mt={2}>


              <Typography variant="h6" gutterBottom className='subop' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff'  }}>
                1.Once you click SUBMIT, your application form goes to the Admissions Team for assessment </Typography>
              <Typography variant="h6" gutterBottom className='subop' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff'  }}>2.Based on the application, a counselling session is arranged to verify the alignment of eligibility criteria </Typography>
              <Typography variant="h6" gutterBottom className='subop' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff'  }}>3.Based on your program choice, an entrance test may/may not be conducted </Typography>
              <Typography variant="h6" gutterBottom className='subop' style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff'  }}>4.Seat will be reserved only once the tuition fee (semester/program-wise) is paid.

              </Typography>
              <Box mt={2}  style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff'  }}>
                {/* How did you find out about us */}
                <Typography variant="subtitle1"  style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff'  }}>
                  Before submitting the form, let us know how you found out about us: 
                </Typography>
                <RadioGroup
                  value={foundBy} // Keep it synced with foundBy state
                  onChange={handleFoundByChange}
                  style={{ fontSize: isMobileState ? "17px" : "24px", color: '#fff'  }}
                >
                  <FormControlLabel value="Google" control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': { color: 'white' },
                  }} />} label="Google" style={{ color: "#fff", fontSize: "1rem" }} />

                  <FormControlLabel value="Facebook/Instagram Ad" control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': { color: 'white' },

                  }} />} label="Facebook/Instagram Ad" style={{ color: "#fff", fontSize: "1rem" }} />

                  <FormControlLabel value="twitter" control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': { color: 'white' },
                  }} />} label="Twitter" style={{ color: "#fff", fontSize: "1rem" }} />

                  <FormControlLabel value="youtube" control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': { color: 'white' },
                  }} />} label="YouTube" style={{ color: "#fff", fontSize: "1rem" }} />

                  <FormControlLabel value="family" control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': { color: 'white' },
                  }} />} label="Through family" style={{ color: "#fff", fontSize: "1rem" }} />

                  <FormControlLabel value="referral" control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': { color: 'white' },
                  }} />} label="I am a referral" style={{ color: "#fff", fontSize: "1rem" }} />
                </RadioGroup>

                {/* Conditional fields for referral */}
                {/* Conditional referral fields */}
                {foundBy === 'referral' && (
                  <Box mt={3}>
                    <TextField
                    
                      fullWidth
                      label="Referral Name"
                      value={referralName}
                      onChange={handleReferralNameChange}
                      margin="normal"
                      InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555',
                          },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: isRegistered ? 'red' : '#555', // Red if registered
                        },
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: 'white', // Label text color
                          background: '#222222',
                          px: 1,
                          '& .MuiInputLabel-asterisk': {
                            color: 'red', // Asterisk color
                            fontSize: '21px',
                          },
                        },
                      }}
                    />
                    <TextField
                    required
                      fullWidth
                      label="Contact Number"
                      value={referralContact}
                      onChange={handleReferralContactChange}
                      margin="normal"
                      InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555',
                          },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: isRegistered ? 'red' : '#555', // Red if registered
                        },
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: 'white', // Label text color
                          background: '#222222',
                          px: 1,
                          '& .MuiInputLabel-asterisk': {
                            color: 'red', // Asterisk color
                            fontSize: '21px',
                          },
                        },
                      }}
                    />
                    <TextField
                    required
                      fullWidth
                      label="Program"
                      value={referralProgram}
                      onChange={handleReferralProgramChange}
                      margin="normal"
                      InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555',
                          },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: isRegistered ? 'red' : '#555', // Red if registered
                        },
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: 'white', // Label text color
                          background: '#222222',
                          px: 1,
                          '& .MuiInputLabel-asterisk': {
                            color: 'red', // Asterisk color
                            fontSize: '21px',
                          },
                        },
                      }}
                    />
                    <TextField
                    
                      fullWidth
                      label="Batch Year"
                      value={referralBatchYear}
                      onChange={handleReferralBatchYearChange}
                      margin="normal"
                      InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555',
                          },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: isRegistered ? 'red' : '#555', // Red if registered
                        },
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: 'white', // Label text color
                          background: '#222222',
                          px: 1,
                          '& .MuiInputLabel-asterisk': {
                            color: 'red', // Asterisk color
                            fontSize: '21px',
                          },
                        },
                      }}
                    />
                  </Box>
                )}
              </Box>

              <Box mt={2}>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  style={{ marginRight: '10px', backgroundColor: 'transparent' }}
                  className='button brand size200'
                >
                  Back
                </Button>
                <Button type="submit" variant="contained" color="primary" className='button brand size200'>
                  Submit
                </Button>
              </Box>
            </Box>
          )}

          
        {/* <React.Fragment>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
     
        <DialogContent style={{background:"#ec1923"}}>
                    <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: "21px", color:"#fff", fontWeight: "500", fontFamily: "'Montserrat', sans-serif"}}>
                      We appreciate your interest and will get in touch with you soon.

                    </DialogContentText>
                  </DialogContent>
                  <DialogActions style={{background:"#ec1923"}}>
                    <Button onClick={handleClose} style={{ fontSize: "18px", fontWeight: "600", color:"#fff", fontFamily: "'Montserrat', sans-serif"}}>Close</Button>
                  </DialogActions>
      </Dialog> 
    </React.Fragment> */}


          {/* <React.Fragment>

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
          </React.Fragment> */}

          
        </form>

        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box
            p={4}
            bgcolor="background.paper"
            style={{ margin: 'auto', marginTop: '10%', width: isMobileState ? "95%" : '50%', textAlign: 'center' }}
          >
            <Typography variant="h6" style={{ color: "#f00" }}>Thank you! Your application has been submitted.</Typography>
            <Button onClick={() => setOpenModal(false)} style={{ marginTop: '21px', background: "#ec1923", color: "#fff" }}>Close</Button>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
