import { DatePicker, TimePicker } from "antd";
import React from "react";

const AntDatePicker = () => {
  return (
    <div style={{ margin: "50px" }}>
      <div>
        <DatePicker picker="date" bordered={true} />
      </div>
      <div>
        <DatePicker.RangePicker />
      </div>
      <div>
        <TimePicker />
      </div>
    </div>
  );
};

export default AntDatePicker;
