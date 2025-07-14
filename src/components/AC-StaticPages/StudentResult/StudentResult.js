import React, { useState } from 'react'
import "./StudentResult.css";
import axios from 'axios';
import { Helmet } from "react-helmet";
import { useSelector, shallowEqual} from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { useForm } from 'react-hook-form';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 


function StudentResult(props) {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isOpenM, setIsOpenM] = useState(false);
 const [open, setOpen] = React.useState(false);

 const handleClick = async (e) => {
  e.preventDefault();
  try {
    await fetch("https://www.backstagepass.co.in/reactapi/click_count.php", {
      method: "GET"
    });
    // Slight delay to ensure fetch completes, then redirect
    setTimeout(() => {
      window.open("https://tgbie.cgg.gov.in/", "_blank");

    }, 100); 
  } catch (error) {
    console.error("Failed to increase count:", error);
    window.open("https://tgbie.cgg.gov.in/", "_blank");

  }
};


  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [openModal, setOpenModal] = useState(false);
 const { register, handleSubmit, formState: { errors } } = useForm();
   const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    PhoneNumber: '',
     email: '',
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
       const response = await axios.post("https://www.backstagepass.co.in/reactapi/inter_results.php", formDataWithUrl);
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
        firstname: '',
        lastname:'',
        PhoneNumber: '',
         email: '',
         comments: '',
         url: window.location.href,
       });
     } catch (error) {
       console.error('Error adding data:', error);
       alert('An error occurred while submitting the form. Please try again.');
     }
   };

  return (
    <>
    <div className='resulttag'>
<marquee behavior="scroll" direction="left" scrollamount="12">Bachelor's Admissions Open for 2025!</marquee>
</div>
<a  onClick={() => setIsOpenM(true)}>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'intermobile' : 'interbanner'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
         
          </div>
        </div>
      </div>
      </a>

      <Helmet>
         
      
          <title>Telangana Intermediate Results 2025 | backstage Pass Institute of Gaming
          </title>
          <meta name="description" content="Get the results of Intermediate Public Examinations I & II Year (General) 2025 Results & Vocational Results with marks and Intermediate Public Examinations II Year (General) 2024 Results & Vocational Results with marks."/>
          <link rel="canonical" href="https://www.backstagepass.co.in/intermediate-board-results/"/>
        </Helmet>
     

      <div className='courses-container'>
    <a class="playbtn" href="#" onClick={handleClick}>Intermediate Results 2025
     <span></span>
  <span></span>
  <span></span>
  <span></span>
      </a>
      {isOpenM && (
            <div className="overlayM">
              <div className="popupM">
               <form  className="formMain" onSubmit={handleSubmit(onSubmit)}>
              
              <div className="formGrid-2M" data-form-id="need-guidance" data-form="step1-container">
              
              <button className="close-btnM" onClick={() => setIsOpenM(false)}>
                          <HighlightOffIcon/>
                          </button>
                <div className="close-btnMd">
                  <label className="" for="firstname">First Name  <span style={{color:"#ec1923"}}>*</span></label>
                  <input  className="inputm"  placeholder="First Name" id="firstname" name="firstname" type="text"  {...register("firstname", { required: true })}
 />
                </div>
                <div className="close-btnMd">
                  <label className="" for="lastname">Last Name <span style={{color:"#ec1923"}}>*</span></label>
                  <input  className="inputm"  placeholder="Last Name" id="lastname" name="lastname" type="text"  {...register("lastname", { required: true })} />
                </div>
                <div className="close-btnMd">
                                    <label className="" for="Phone Number">Phone Number <span style={{color:"#ec1923"}}>*</span></label>
                                    <input className="inputm" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minlength="10" maxlength="10"   {...register("PhoneNumber", { required: true })} />
                                  </div>

                                  <div className="close-btnMd">
                                    <label className="" for="Phone Number">Email <span style={{color:"#ec1923"}}>*</span></label>
                                    <input className="inputm" placeholder="Email" id="email" name="email" type="email"   {...register("email", { required: true })} />
                                  </div>
                                  <div className="close-btnMd">
                  <label className="" for="comments">Comments <span style={{color:"#ec1923"}}>*</span></label>
                  <input  className="inputm"  placeholder="comments" id="comments" name="comments" type="text"  
                  {...register("comments", { required: true })}
 />
                </div>
                                
              
                </div>
                
                <div>
                                  <button className=" three button brand size200m w-full sm:w-auto"
                                   data-form-id="need-guidance" data-form="step1-button-continue" 
                                   type="submit">
                                    Submit
                                  </button>
              
                                </div> </form>
              
                                <React.Fragment>
                                
                                                  <Dialog
                                                    open={open}
                                                    TransitionComponent={Transition}
                                                    keepMounted
                                                    onClose={handleClose}
                                                    aria-describedby="alert-dialog-slide-description"
                                                  >
                                                    <DialogContent>
                                                      <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: "19px", fontWeight: "500", color:"#ec1923", fontFamily: "'Montserrat', sans-serif" }}>
                                                      Thank You
                                                      </DialogContentText>
                                                    </DialogContent>
                                                  
                                                  </Dialog>
                                                </React.Fragment>
                                                {/* <button className="close-btnM" onClick={() => setIsOpenM(false)}>
                            Download
                          </button> */}
                         
                        </div>
                      </div>
                    )}
    
      </div>







    </>
  )
}


export default StudentResult;

