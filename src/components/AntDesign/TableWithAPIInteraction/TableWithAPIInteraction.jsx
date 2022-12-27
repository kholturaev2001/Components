import { Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TableWithAPIInteraction = () => {
  const [dataSource, setDataSource] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setDataSource(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      key: "3",
      title: "Title",
      dataIndex: "title",
      filters: [
        { text: 'Start With "a"', value: "a" },
        { text: 'Start With "q"', value: "q" },
      ],
      onFilter: (value, record) => record.title[0] === value,
    },
    {
      key: "4",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In Progress"}</p>;
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];
  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
    </div>
  );
};

export default TableWithAPIInteraction;
