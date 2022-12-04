import React from "react";

const HThree = ({ text, style }) => {
  return (
    <div className={style}>
      <h3 style={{ color: "#1F1F1F" }}>{text}</h3>
    </div>
  );
};

export default HThree;
