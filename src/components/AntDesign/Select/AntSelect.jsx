import { Select } from "antd";
import React from "react";

const AntSelect = () => {
  const fruits = ["Banana", "Apple", "Mango", "Orange"];
  return (
    <>
      <div style={{ margin: "50px" }}>
        <p>What is your favorite fruit?</p>
        <Select placeholder="Select fruit" style={{ width: "300px" }}>
          {fruits.map((fruit, id) => {
            return (
              <Select.Option key={id} value={fruit}>
                {fruit}
              </Select.Option>
            );
          })}
        </Select>
      </div>

      <div style={{ margin: "50px" }}>
        <p>What are your favorite fruits?</p>
        <Select
          maxTagCount={2}
          allowClear
          mode="multiple"
          placeholder="Select fruit"
          style={{ width: "300px" }}
        >
          {fruits.map((fruit, id) => {
            return (
              <Select.Option key={id} value={fruit}>
                {fruit}
              </Select.Option>
            );
          })}
        </Select>
      </div>
    </>
  );
};

export default AntSelect;
