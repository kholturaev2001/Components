import React, { useState } from "react";
import InputWithSearch from "./InputWithSearch";
import data from "./data.js";

const InputWithSearchCont = () => {
  const [current, setCurrent] = useState(data[0]);

 return (
    <div>
      <InputWithSearch
        data={data}
        type="text"
        placeholder="Школа" 
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default InputWithSearchCont;
