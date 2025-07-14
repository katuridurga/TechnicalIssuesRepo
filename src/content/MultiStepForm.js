// src/MultiStepForm.js

import React, { useState } from "react";
import "../header/header.css";

// Step components defined first
const Step1 = ({ formData, handleChange, onNext, errors }) => (
  <div>
    <h2 className="hdform">Personal Information</h2>
    <input
      type="text"
      placeholder="Name"
      name="Name"
      value={formData.Name}
      onChange={handleChange}
    />
    {errors.Name && <span className="error">{errors.Name}</span>}

    <div style={{display:"flex"}}>  
<div className ="fieldsf">
      <input
        type="text"
        placeholder="Date Of Birth"
        name="DOB"
        value={formData.DOB}
        onChange={handleChange}
      />
       {errors.DOB && <span className="error">{errors.DOB}</span>}
      </div>
      <div className ="fieldss">
       <input
        type="text"
        placeholder="Nationality"
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
      />
      {errors.nationality && <span className="error">{errors.nationality}</span>}
      </div> 
      </div>
    
   <div style={{display:"flex"}}>  
<div className ="fieldsf">
      <input
        type="text"
        placeholder="Contact No"
        name="contact"
        value={formData.name}
        onChange={handleChange}
      />
      </div>
      <div className ="fieldss">
       <input
        type="text"
        placeholder="Email ID"
        name="email"
        value={formData.name}
        onChange={handleChange}
      />
      </div> 
      
   </div> 
   <input
        type="text"
        placeholder="Aadhar No / SSID"
        name="aadhar"
        value={formData.name}
        onChange={handleChange} required
      />
       <input
        type="text"
        placeholder="Residential Address"
        name="residential"
        value={formData.name}
        onChange={handleChange} required
      />
     
     <div style={{display:"flex"}}>  
<div style={{width:"50%",marginRight:"10px"}}>
      <input
        type="text"
        placeholder="State"
        value={formData.name}    
        onChange="{handleChange}" required
      />
      </div>
      <div style={{width:"50%",marginRight:"10px"}}>
       <input
        type="text"
        placeholder="City"
        name="city"
        value={formData.name}
        onChange="{handleChange}" required
      />
      </div> 
      <div style={{width:"50%"}}>
       <input
        type="text"
        placeholder="PIN"
        name="pin"
        value={formData.name}
        onChange="{handleChange}" required
      />
      </div>
   </div> 
   <h2 className='hdform'>Educational/Occupational Background</h2>
    <div className="formGrid" style={{marginBottom:"14px"}}>
   <select  name="qualification1" id="qualification1" value={formData.qualification1} onChange={handleChange} required style={{color:"#6c6666",border:"1px solid#6c6666"}}>
                      <option value="">Your highest qualification</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pursuing</option>
                      <option value="12pass">12th Pass</option>
                      <option value="ugraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="others">Others</option>
                    </select>
                    </div>
                    <input
        type="text"
        placeholder="Year of Completion YYYY"
        name="completion"
        value={formData.name}
        onChange="{handleChange}" required
      />
        <input
        type="text"
        placeholder="Name of School/College"
        name="college"
        value={formData.name}
        onChange="{handleChange}" required
      />
       <div style={{display:"flex"}}>  
       <div style={{width:"50%",marginRight:"10px"}}>
       <input
        type="text"
        placeholder="City"
        name="city"
        value={formData.name}
        onChange="{handleChange}" required
      />
      </div> 
<div style={{width:"50%",marginRight:"10px"}}>
      <input
        type="text"
        placeholder="Board"
        name="board"
        value={formData.name}
        onChange="{handleChange}"  required
      />
      </div>
      
   </div> 
   <h2 className='hdform'>Employment status</h2>
    <div className="formGrid" style={{marginBottom:"14px"}}>
   <select className="sel"   name="emply" id="emply" value={formData.emply} onChange={handleChange} required style={{color:"#6c6666",border:"1px solid#6c6666"}}>
                      <option value="employed">Employed</option>
                      <option value="unemployed">UnEmployed</option>
                      <option value="LEmployed">Looking For Employment</option>
                      <option value="12pass">Want to Study Further</option>
                      
                    </select>
                    </div>
                    <input
      type="text"
      placeholder="Name Of Organization"
      name="Name Of Organization"
      value={formData.Name}
      onChange={handleChange}
    />
   
    <input
      type="text"
      placeholder="Designation/Role"
      name="Designation/Role"
      value={formData.name}
      onChange={handleChange}
    />
    
    {/* <button className=" three button brand size200 sm:w-auto" onClick={onNext}>Next</button> */}
    
    <button onClick={onNext}>Next</button>
  </div>
);


const Step2 = ({ formData, handleChange, onNext, onBack, errors }) => (
  <div>
    <h2>Step 2: Contact Information</h2>
    <input
      type="email"
      placeholder="Email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    {errors.email && <span className="error">{errors.email}</span>}

    <input
      type="tel"
      placeholder="Phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
    />
    {errors.phone && <span className="error">{errors.phone}</span>}

    <button onClick={onBack}>Back</button>
    <button onClick={onNext}>Next</button>
  </div>
);

const Step3 = ({ formData, onBack }) => (
  <div>
    <h2>Step 3: Review Information</h2>
    <pre>{JSON.stringify(formData, null, 2)}</pre>
    <button onClick={onBack}>Back</button>
    <button onClick={() => alert("Form Submitted!")}>Submit</button>
  </div>
);

// Multistep form component
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateStep1 = (data) => {
    const errors = {};
    if (!data.firstName) errors.firstName = "First name is required.";
    if (!data.lastName) errors.lastName = "Last name is required.";
    return errors;
  };

  const validateStep2 = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid.";
    }
    if (!data.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    return errors;
  };

  const handleNext = () => {
    let validationErrors = {};

    // Validate current step
    if (currentStep === 0) {
      validationErrors = validateStep1(formData);
    } else if (currentStep === 1) {
      validationErrors = validateStep2(formData);
    }

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const steps = [
    {
      label: "Step 1",
      content: (
        <Step1
          formData={formData}
          handleChange={handleChange}
          onNext={handleNext}
          errors={errors}
        />
      ),
    },
    {
      label: "Step 2",
      content: (
        <Step2
          formData={formData}
          handleChange={handleChange}
          onNext={handleNext}
          onBack={handleBack}
          errors={errors}
        />
      ),
    },
    {
      label: "Step 3",
      content: <Step3 formData={formData} onBack={handleBack} />,
    },
  ];

  return (
    <div className="multi-step-form">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={steps.length}
        stepLabels={steps.map((step) => step.label)}
      />
      <h1>{steps[currentStep].label}</h1>
      {steps[currentStep].content}
    </div>
  );
};

// Progress bar component
const ProgressBar = ({ currentStep, totalSteps, stepLabels }) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }} />
      </div>
      <div className="steps-list">
        {stepLabels.map((label, index) => (
          <div
            key={index}
            className={`step ${currentStep >= index ? "active" : ""}`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiStepForm;