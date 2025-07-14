import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./SkillDiploma.css";
import { useForm } from 'react-hook-form';
import { TextField, Button, MenuItem, Container, Typography, Paper, Modal, Box } from '@mui/material';


import { useSelector, shallowEqual } from "react-redux";


import { Helmet } from "react-helmet";

const handleBlur = (event) => {
  const { name, value } = event.target;
  if (name === "email") {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value && !emailRegex.test(value)) {
      alert("Please enter a valid email address.");
    }
  }
};
function Courses(props) {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    location: '',
    comments: '',
    url: window.location.href,

  });
  const onSubmit = async (data) => {
    //setOpen(true); // Assuming you want to show a modal

    try {
      // Log the form data received from the handleSubmit
      console.log("Submitting data:", data);
      const formDataWithUrl = { ...data, url: window.location.href };

      console.log("Form data with URL:", formDataWithUrl); // This should include the 'url' field
      const response = await axios.post("https://www.backstagepass.co.in/reactapi/shortterm_courses.php", formDataWithUrl);
      console.log("Response:", response);
      setOpenModal(true);
      if (response.status === 200) {
        setOpen(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
      // Assuming the response indicates success
      //alert("Your data was submitted successfully!");

      // Reset form data
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        location: '',
        comments: '',
        url: window.location.href, // Reset URL
      });
    } catch (error) {
      console.error('Error adding data:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get('https://www.backstagepass.co.in/reactapi/courses_api.php')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <>

      <div className="courses-container">
        <Helmet>
          <title>Short Courses Form</title>
          <meta name="description" content="Short Courses Form" />
          <link rel="canonical" href="https://www.backstagepass.co.in/admissions/admission-process/" />

        </Helmet>

        <div className="courses-wrapper">

          <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000' }}>
            <Paper elevation={10} sx={{ padding: 4, borderRadius: 4, background: 'linear-gradient(135deg, #1a1a1a, #2b2b2b)', color: 'white' }}>
              <Typography variant="h4" style={{ color: "rgb(236, 25, 35)" }} textAlign="center" gutterBottom color="primary">Short Courses Form</Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  fullWidth
                  label="Name *"
                  variant="outlined"
                  margin="normal"
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  //helperText={errors.name?.message}
                  InputLabelProps={{ style: { color: 'white' } }}
                  inputProps={{
                    pattern: "^[A-Za-z]+(?: [A-Za-z]+)*$", // Regex to ensure only alphabetic characters
                    title: "Name should only contain letters and spaces", // Error message to display
                  }}
                  sx={{ input: { color: 'white' }, label: { color: 'gray' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: 'white' } }, '& .MuiFormHelperText-root': { fontSize: '1.2rem' } }}
                />

                <TextField
                  fullWidth
                  label="Phone No *"
                  variant="outlined"
                  margin="normal"
                  type="tel"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 10 }}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits"
                    },
                    minLength: { value: 10, message: "Phone number must be 10 digits" },
                    maxLength: { value: 10, message: "Phone number must be 10 digits" }
                  })}
                  error={!!errors.phone}
                 // helperText={errors.phone?.message}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    input: { color: 'white' },
                    label: { color: 'gray' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'gray' },
                      '&:hover fieldset': { borderColor: 'white' }
                    },
                    '& .MuiFormHelperText-root': { fontSize: '1rem' }
                  }}
                />

                <TextField
                  fullWidth
                  label="E-mail *"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                //  helperText={errors.email?.message}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{ input: { color: 'white' }, label: { color: 'gray' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: 'white' } }, '& .MuiFormHelperText-root': { fontSize: '1.2rem' } }}
                />

                <TextField
                  select
                  fullWidth
                  label="Select a Course *"
                  variant="outlined"
                  margin="normal"
                  {...register("course", { required: "Please select a course" })}
                  error={!!errors.course}
                 // helperText={errors.course?.message}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'gray' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '& .MuiSelect-select': { color: 'white' }
                    },
                    '& .MuiFormHelperText-root': { fontSize: '1.2rem' }
                  }}
                >
                  {/* <MenuItem value="gdu">Game Development with Unity</MenuItem>
                  <MenuItem value="gdunreal">Game Development with Unreal</MenuItem>
                  <MenuItem value="gdublueprints">Game Design with Unreal Blueprints</MenuItem>
                  <MenuItem value="aipgdl">AI Powered Game Design and Level Building</MenuItem>
                  <MenuItem value="vr">VR Application Development</MenuItem>
                  <MenuItem value="3dhsm">3D Hard Surface Modeling</MenuItem> */}
                  {courses.map(course => (
                  <MenuItem key={course.id} value={course.value}>
                    {course.label}
                  </MenuItem>
                ))}
                </TextField>


                <TextField
                  fullWidth
                  label="Location *"
                  variant="outlined"
                  margin="normal"
                  {...register("location", { required: "Location is required" })}
                  error={!!errors.location}
                  helperText={errors.location?.message}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{ input: { color: 'white' }, label: { color: 'gray' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: 'white' } }, '& .MuiFormHelperText-root': { fontSize: '1.2rem' } }}
                />

                <TextField
                  fullWidth
                  label="Comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  {...register("comments")}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{ textarea: { color: 'white' }, label: { color: 'gray' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: 'white' } }, '& .MuiFormHelperText-root': { fontSize: '1.2rem' } }}
                />

                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2, py: 1.5, fontSize: 16 }}>
                  Submit
                </Button>
              </form>
              <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box
                  p={4}
                  bgcolor="background.paper"
                  style={{ margin: 'auto', marginTop: '10%', width: isMobileState ? "95%" : '50%', textAlign: 'center' }}
                >
                  <Typography variant="h6" style={{ color: "#f00" }}>Thank you! Your Short Term course has been submitted.</Typography>
                  <Button onClick={() => setOpenModal(false)} style={{ marginTop: '21px', background: "#ec1923", color: "#fff" }}>Close</Button>
                </Box>
              </Modal>
            </Paper>
          </Container>












        </div>






      </div >

    </>
  )
}

Courses.propTypes = {

}

export default Courses;

