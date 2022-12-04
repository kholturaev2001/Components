import React from "react";

const HOne = ({ text, style }) => {
  return (
    <div className={style}>
      <h1 style={{ color: "#1F1F1F" }}>{text}</h1>
    </div>
  );
};

export default HOne;
