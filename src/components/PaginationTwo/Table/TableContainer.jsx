import React, { useState } from "react";
import countriesData from "../data/data";
import styles from "./TableContainer.module.scss";
import Table from "./Table";

const TableContainer = () => {
  const [countries] = useState([...countriesData]);
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Table data={countries} rowsPerPage={4} />
      </div>
    </main>
  );
};

export default TableContainer;
