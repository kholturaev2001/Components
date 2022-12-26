import { Button, Form, Input } from "antd";
import React from "react";

const AntForm = () => {
  const onFinish = (e) => {
    console.log(e);
  };

  return (
    <div style={{ width: "400px", margin: "50px" }}>
      <Form onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="User Name" /* required */ />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" /* required */ />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntForm;
