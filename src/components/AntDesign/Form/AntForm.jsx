import { Button, Form, Input, message, Alert } from "antd";
import React, { useState } from "react";

const AntForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = (e) => {
    console.log(e);

    setTimeout(() => {
      setShowAlert(true);
      message.error("Login error!", 2 /* alert will stay 2 seconds */);
    }, 2000);

    setTimeout(() => {
      message.warning("Login failed!", 2 /* alert will stay 2 seconds */);
    }, 5000);

    setTimeout(() => {
      message.success("Login successful!", 2 /* alert will stay 2 seconds */);
    }, 8000);
  };

  return (
    <div style={{ width: "400px", margin: "50px" }}>
      {showAlert && (
        <Alert
          type="error"
          message="Error"
          description="There was an error on login"
          closable
        />
      )}

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
