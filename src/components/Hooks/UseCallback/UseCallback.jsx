import React, { useState, useCallback } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(12);
  const [dark, setDark] = useState(false);

  /* The main difference of useCallback between useMemo is that, useMemo takes a 
     function and it's going to return to you the return value of that function, but 
     useCallback takes a function, but that's actually what the useCallback returns. 
  */
  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + incrementor + 1,
        number + incrementor + 2,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
