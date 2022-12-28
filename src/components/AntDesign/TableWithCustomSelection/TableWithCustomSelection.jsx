import { Table, Tag } from "antd";
import React from "react";
import { useState } from "react";

const TableWithCustomSelection = () => {
  const [alreadySelected, setAlreadySelected] = useState(["1", "3", "4"]);

  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "green"
          : tag.includes("B")
          ? "blue"
          : "red";
        return <Tag color={color}> {tag} </Tag>;
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Student Name 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student Name 2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Student Name 3",
      grade: "B+",
    },
    {
      key: "4",
      id: 4,
      name: "Student Name 4",
      grade: "B",
    },
    {
      key: "5",
      id: 5,
      name: "Student Name 5",
      grade: "C",
    },
    {
      key: "6",
      id: 6,
      name: "Student Name 6",
      grade: "D+",
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          onSelect: (record) => {
            console.log(record);
          },
          selectedRowKeys: alreadySelected,
          onChange: (keys) => {
            setAlreadySelected(keys);
          },
          getCheckboxProps: (record) => ({
            disabled: record.grade === "C",
          }),
        }}
      />
    </div>
  );
};

export default TableWithCustomSelection;
