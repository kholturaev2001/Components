import React, { useState } from "react";
import Selector from "./Selector";

const SelectorContainer = () => {
  const [currentData, setCurrentData] = useState({
    id: 1,
    name: "option1"
  });

  const arrData = [
    {
      id: 1,
      name: "option1"
    },
    {
      id: 2,
      name: "option2"
    },
    { id: 3, name: "option3" }
  ];
  return (
    <span>
      <Selector
        current={currentData}
        data={arrData}
        chooseCurrent={setCurrentData}
        disabled={false}
      />
    </span>
  );
};

export default SelectorContainer;
