import { Input } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const AntInput = () => {
  return (
    <div style={{margin: "50px"}}>
      <Input.Search
        placeholder="Name"
        maxLength={13}
        prefix={<UserOutlined />}
        size="large"
        style={{ width: "300px" }}
        allowClear
      ></Input.Search>
    </div>
  );
};

export default AntInput;
