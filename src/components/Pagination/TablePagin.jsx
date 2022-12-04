import React, { useState } from "react";
import styles from "./TablePagination.module.scss";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const TablePagin = ({ rowsPerPage = 4, data, columns }) => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const num = Math.ceil(data.length / rowsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <Paper sx={{ width: "70vw", overflow: "hidden" }}>
          <TableContainer sx={{ height: 400 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns?.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#BBDEFB",
                        border: "1px solid #fff",
                        fontSize: "16px"
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((row, id) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                        {columns?.map(column => {
                          const value = row[column.name];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <div className={styles.pagination}>
        <Stack spacing={2}>
          <Pagination
            onChange={handleChangePage}
            count={num}
            renderItem={item => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon
                }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default TablePagin;
