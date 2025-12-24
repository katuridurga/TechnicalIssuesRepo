import React from "react";

const EnrollNowButton = ({ onClick, className = "", style = {} }) => {
  return (
    <button
      type="button"
      className={`dwnbtn three w-full sm:w-auto ${className}`}
      style={style}
      onClick={onClick}
    >
      Enroll Now
    </button>
  );
};

export default EnrollNowButton;


