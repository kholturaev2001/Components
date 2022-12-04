import React from "react";
import data from "./data";
import columns from "./columns";
import TablePagin from "./TablePagin";

const TablePaginationContainer = () => {
  return (
    <div>
      <TablePagin data={data} columns={columns} rowsPerPage={8} />
    </div>
  );
};

export default TablePaginationContainer;
