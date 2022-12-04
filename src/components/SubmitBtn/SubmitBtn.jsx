import React from "react";
import styles from "./SubmitBtn.module.scss";
import CircleLoader from "./CircleLoader";

const SubmitBtn = ({ loading, disabled, onClickHandler, btnTxt }) => {
  return (
    <div className={styles.main}>
      <button
        disabled={disabled}
        className={styles.submitBtn}
        onClick={onClickHandler}
        className={loading ? styles.loadBg : ""}
      >
        {loading ? <CircleLoader /> : btnTxt}
      </button>
    </div>
  );
};

export default SubmitBtn;
