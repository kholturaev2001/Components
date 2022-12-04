import React from "react";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

const SaveInLocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name); 

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default SaveInLocalStorage;
