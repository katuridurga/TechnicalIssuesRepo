import React from 'react';

const StepOne = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className='hdform'>Personal Details</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
      />
    
<div style={{display:"flex"}}>  
<div style={{width:"50%"}}>
      <input
        type="text"
        placeholder="Date Of Birth"
        value=""
        onChange="" required
      />
      </div>
      <div style={{width:"50%"}}>
       <input
        type="text"
        placeholder="Nationality"
        value=""
        onChange="" required
      />
      </div> 
      
   </div> 
   <div style={{display:"flex"}}>  
<div style={{width:"50%"}}>
      <input
        type="text"
        placeholder="Contact No"
        value=""
        onChange="" required
      />
      </div>
      <div style={{width:"50%"}}>
       <input
        type="text"
        placeholder="Email ID"
        value=""
        onChange="" required
      />
      </div> 
      
   </div> 
   <input
        type="text"
        placeholder="Aadhar No / SSID"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
      />
       <input
        type="text"
        placeholder="Residential Address"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
      />
     
     <div style={{display:"flex"}}>  
<div style={{width:"50%"}}>
      <input
        type="text"
        placeholder="State"
        value=""
        onChange="" required
      />
      </div>
      <div style={{width:"50%"}}>
       <input
        type="text"
        placeholder="City"
        value=""
        onChange="" required
      />
      </div> 
      <div style={{width:"50%"}}>
       <input
        type="text"
        placeholder="PIN"
        value=""
        onChange="" required
      />
      </div>
   </div> 
   <h2 className='hdform'>Educational/Occupational Background</h2>
    <div className="formGrid">
   <select  name="qualification" id="" value="" onChange="" required>
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
        value=""
        onChange="" required
      />
              <input
        type="text"
        placeholder="Name of School/College"
        value=""
        onChange="" required
      />
       <div style={{display:"flex"}}>  
       <div style={{width:"50%"}}>
       <input
        type="text"
        placeholder="City"
        value=""
        onChange="" required
      />
      </div> 
<div style={{width:"50%"}}>
      <input
        type="text"
        placeholder="Board "
        value=""
        onChange="" required
      />
      </div>
     
      
   </div> 
      </div>
   
  );
};

export default StepOne;
