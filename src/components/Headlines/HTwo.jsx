import React from "react";

const HTwo = ({ text, style }) => {
  return (
    <div className={style}>
      <h2 style={{ color: "#1F1F1F" }}>{text}</h2>
    </div>
  );
};

export default HTwo;
