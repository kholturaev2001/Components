import React, { useState } from "react";
import Input from "./Input";

const InputContainer = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <Input
        type="textfalse"
        disabled={false}
        value={input}
        placeholder="Phone number"
        onChange={setInput}
        elemId="phoneNumber"
        inpName="phoneNumber"
        labelTxt="Write your phone number"
        // errorTxt='Phone number is required'
        formController={{}}
      />
    </div>
  );
};

export default InputContainer;
