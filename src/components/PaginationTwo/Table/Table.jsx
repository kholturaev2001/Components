import React, { useState } from "react";

import useTable from "../hooks/useTable";
import styles from "./Table.module.scss";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <div className={styles.table}>
        <header className={styles.tableRowHeader}>
          <div>
            <p className={styles.tableHeader}>Country</p>
            <p className={styles.tableHeader}>Capital</p>
            <p className={styles.tableHeader}>Language</p>
          </div>
        </header>
        <section>
          {slice.map(el => (
            <div className={styles.tableRowItems} key={el.id}>
              <p className={styles.tableCell}>{el.name}</p>
              <p className={styles.tableCell}>{el.capital}</p>
              <p className={styles.tableCell}>{el.language}</p>
            </div>
          ))}
        </section>
      </div>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
