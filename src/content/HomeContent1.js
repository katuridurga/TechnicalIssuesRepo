import React, { useState } from "react";
import "./HomeContent.css";
import "./FeaturedProducts.css";
import axios from 'axios';
import awic from '../assets/img/banners/global-network.png';
import awic1 from '../assets/img/banners/expert.png';
import awic2 from '../assets/img/banners/medal.png';
import awic3 from '../assets/img/banners/mindset.png';
import awic4 from '../assets/img/banners/loan-to-value.png';
import awic5 from '../assets/img/banners/business-man.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function HomeContent() {

  //const [inputs, setInputs] = useState([]);

  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '', PhoneNumber: '', email: '', city: '', qualification: ''
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
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
        firstname: '', lastname: '', PhoneNumber: '', email: '', qualification: '', city: ''
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };




  return (
    <>

      <section className="tuitiona-aid-sections">
        <div className="tuitiona-aid-sectionsInner">
          {typeof window !== undefined && !window.location.pathname.includes("/courses/") ?
            <div className="tuitiona-aid-sectionsLeft">

              <div className="show-grid">
                <h3 className="mainHeadingTotal">
                  Why choose us?
                </h3>
                <div className="maind">

                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic2} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">#1 Gaming Institute</p>
                      Specialized education in gaming with industry-aligned curriculum
                    </div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Industry Exposure</p>

                      Networking opportunities and strategic tie-ups with top gaming studios</div></div>

                </div>
                <div className="maind">
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic1} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Industry-experienced Mentors</p>

                      Guidance from industry veterans with an experience of 10+ years</div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic3} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Hands-on Learning</p>

                      Mimicked real-world scenarios for practical learning
                    </div></div>
                </div>
                <div className="maind">
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic4} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Financial Aid</p>

                      Flexible financial aid options for affordable quality learning
                    </div>
                  </div>
                  <div className="left w-100 icn">
                    <div style={{
                      border: "1px solid#fff", height: "40px", display: "flex",
                      justifyContent: "center", alignItems: "center", borderRadius: "50%", width: "40px", background: "#fff"
                    }}><img width="30" height="30" src={awic5} alt="icons" style={{ width: "80%", objectFit: "contain", objectPosition: "center" }} /></div>
                    <div className="mainic" style={{ marginLeft: "5px", width: "90%" }}>
                      <p className="suprts">Professional Readiness</p>

                      Portfolio development for the competitive market
                    </div>
                  </div>
                </div>
              </div>


            </div> : null}

          <div className="tuitiona-aid-sectionsRight">

            <div className="hidden md:block md:flex-1 self-start form-stcc">

              <h3 className="mainHeadingTotal">
                Enquire now
              </h3>

              <form onSubmit={handleSubmit} className="formMain">
                <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">


                  <div className="">
                    <label className="" for="firstname">First Name</label>
                    <input className="" placeholder="First Name" id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} required />
                  </div>
                  <div className="">
                    <label className="" for="lastname">Last Name</label>
                    <input className="" placeholder="Last Name" id="lastname" name="lastname" type="text" value={formData.lastname} onChange={handleInputChange} required />
                  </div>

                </div>
                <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                  <div className="">
                    <label className="" for="PhoneNumber">Phone Number</label>
                    <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                  </div>
                  <div className="">
                    <label className="" for="city">City</label>
                    <input className="" placeholder="City" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="formGrid" data-form-id="need-guidance" data-form="step1-container">
                  <div className="">
                    <label className="" for="email">Email</label>
                    <input className="" placeholder="Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
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
    </>
  );
}

export default HomeContent;
