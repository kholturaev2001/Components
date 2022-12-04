import React, { useState } from "react";
import styles from "./Selector.module.scss";
import TriangleUp from "./TriangleUp";

const Selector = ({ current, data, chooseCurrent, disabled }) => {
  const [currentSelect, setCurrentSelect] = useState(current);
  const [opened, setOpened] = useState(false);

  return (
    <span className={styles.main}>
      <span className={styles.current}>
        <button
          onClick={() => {
            setOpened(!opened);
          }}
          disabled={disabled}
        >
          {currentSelect?.name}
          <TriangleUp className={opened ? styles.up : styles.down} />
        </button>
      </span>
      {opened && (
        <span className={styles.optionsContainer}>
          {data.map((e, id) => (
            <li className={styles.options} key={id}>
              <button
                className={current?.id === e?.id ? styles.activeOption : ""}
                onClick={() => {
                  setCurrentSelect(e);
                  chooseCurrent(e);
                  setOpened(!opened);
                }}
              >
                {e?.name}
              </button>
            </li>
          ))}
        </span>
      )}
    </span>
  );
};

export default Selector;
