import React from 'react';

const StepThree = ({ formData, onSubmit }) => {
  return (
    <div>
      <h2>Step 3: Review Information</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default StepThree;
