import { Table } from "antd";
import React from "react";

const AntTable = () => {
  const data = [
    {
      webPage: "msu.tj",
      age: 10,
      address: "Address 1",
      phone: "+9929034623462",
      key: "1",
    },
    {
      webPage: "ausbildung.de",
      age: 20,
      address: "Address 2",
      phone: "+9929034623462",
      key: "2",
    },
    {
      webPage: "github.com",
      age: 30,
      address: "Address 3",
      phone: "+9929034623462",
      key: "3",
    },
  ];

  const columns = [
    {
      title: "Web Page",
      dataIndex: "webPage",
      key: "key",
      render: (web) => {
        return <a href={`https://${web}`}>{web}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "key",
    },
    {
      title: "Graduated",
      key: "key",
      render: (payload) => {
        console.log("payload is: ", payload);
        return <p>{payload.age > 20 ? "True" : "False"}</p>;
      },
    },
  ];

  return (
    <div style={{ width: "500px", margin: "50px" }}>
      <Table dataSource={data} columns={columns}>
        Here is data
      </Table>
    </div>
  );
};

export default AntTable;
