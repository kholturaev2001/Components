import { UploadOutlined } from "@mui/icons-material";
import { Button } from "antd";
import React from "react";
import { useState } from "react";
import './AntButton.css'

const AntButton = () => {
  const [loading, setLoading] = useState(false);

  const onButtonClick = (e) => {
    console.log("Button Clicked!");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div>
      <div>
        <Button>Default!</Button>
      </div>
      <div>
        <Button
          loading={loading}
          icon={<UploadOutlined />}
          onClick={onButtonClick}
          block
          type="primary"
        //   style={{ display: "flex", alignItems: "center", color: "red" }}
          className='primaryBtn'
        >
          Primary!
        </Button>
      </div>
      <div>
        <Button type="link" href="https://www.google.com">
          Link!
        </Button>
      </div>
    </div>
  );
};

export default AntButton;
