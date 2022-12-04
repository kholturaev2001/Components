import React from "react";

const HFive = ({ text, style }) => {
  return (
    <div className={style}>
      <h5 style={{ color: "#1F1F1F" }}>{text}</h5>
    </div>
  );
};

export default HFive;
