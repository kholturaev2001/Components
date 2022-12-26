import { Button } from "antd";
import React from "react";

const AntButton = () => {
  const onButtonClick = (e) => {
    console.log("Button Clicked!");
  };
  return (
    <div>
      <div>
        <Button>Default!</Button>
      </div>
      <div>
        <Button onClick={onButtonClick} block type="primary">
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
