import {
  AppleFilled,
  BankTwoTone,
  LoadingOutlined,
  LogoutOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, Divider } from "antd";
import React from "react";

const AntIcons = () => {
  const HeartIcon = (props) => {
    return (
      <Icon
        component={() => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
            </svg>
          );
        }}
        {...props}
      />
    );
  };

  return (
    <div>
      <PieChartFilled style={{ color: "purple", fontSize: 100 }} />
      <AppleFilled style={{ color: "green", fontSize: 100 }} />
      <LoadingOutlined style={{ color: "red", fontSize: 100 }} />
      <PieChartFilled rotate={45} style={{ color: "orange", fontSize: 100 }} />
      <BankTwoTone twoToneColor="green" style={{ fontSize: 100 }} />

      <Divider />

      <HeartIcon />
      <Divider />

      <Button icon={<LogoutOutlined style={{ color: "red", fontSize: 14 }} />}>
        Button with Custom Icon
      </Button>
      <Divider />
      <p style={{ color: "black", fontSize: 30 }}>
        I <HeartIcon /> coding
      </p>
    </div>
  );
};

export default AntIcons;
