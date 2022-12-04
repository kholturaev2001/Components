import React from "react";
import SubmitBtn from "./SubmitBtn";

const SubmitBtnContainer = () => {
  const onClickHandler = name => {
    return console.log(`Hello, ${name}`);
  };
  return (
    <div>
      <SubmitBtn
        loading={false}
        disabled={false}
        onClickHandler={() => onClickHandler("Muhammadrasul")}
        btnTxt="Click me"
      />
    </div>
  );
};

export default SubmitBtnContainer;
