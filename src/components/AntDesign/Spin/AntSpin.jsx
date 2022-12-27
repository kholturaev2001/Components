import { Button, Spin } from "antd";
import React from "react";
import { useState } from "react";

const AntSpin = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Spin spinning={loading} />
      <Button
        onClick={() => {
          setLoading((prev) => !prev);
        }}
      >
        Toggle Spinning
      </Button>
      <Spin spinning={loading}>
        <p>P tag 1</p>
        <p>P tag 2</p>
        <p>P tag 3</p>
      </Spin>
    </div>
  );
};

export default AntSpin;
