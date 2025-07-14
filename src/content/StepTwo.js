import React from 'react';

const StepTwo = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
    </div>
  );
};

export default StepTwo;
