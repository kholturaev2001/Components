import { Progress } from "antd";
import React from "react";

const AntProgress = () => {
  return (
    <div>
      <Progress percent={33} />
      <Progress percent={33} type="circle" />
      <Progress percent={33} type="line" strokeColor="aqua" status="active" />
      <Progress percent={33} type="line" strokeColor="yellow" strokeWidth={50} status='active' />
      <Progress percent={33} type="circle" status='success' />
      <Progress percent={33} type="circle" status='exception' />
      <Progress percent={33} type="line" status='success' />
      <Progress percent={33} type="line" steps={3} />
    </div>
  );
};

export default AntProgress;
