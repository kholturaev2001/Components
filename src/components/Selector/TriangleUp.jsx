import React from "react";

const TriangleUp = ({ className, bgColor }) => {
  return (
    <svg
      className={className}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6 0.80002C9.8 -0.266647 8.2 -0.266646 7.4 0.80002L1.4 8.80002C0.411146 10.1185 1.35191 12 3 12L15 12C16.6481 12 17.5889 10.1185 16.6 8.80002L10.6 0.80002Z"
        // fill={bgColor}
        fill=""
      />
    </svg>
  );
};

export default TriangleUp;
