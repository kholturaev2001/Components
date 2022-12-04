import React, { useState } from "react";

function BoxOn({ toggle, id, on }) {
  return (
    <div
      onMouseEnter={toggle}
      style={{ backgroundColor: on ? "#222222" : "transparent" }}
      className="box"
    ></div>
  );
}

export default BoxOn;
