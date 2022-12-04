import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ data, isOpen, setIsOpen }) => {
  return (
    <div className={styles.main} onClick={() => setIsOpen(false)}>
      <div className={styles.modal__container}>
        <div className={styles.exitBtnContainer}>
          <button className={styles.exitBtn} onClick={() => setIsOpen(false)}>
            x
          </button>
        </div>
        <div
          className={styles.modal__content}
          onClick={event => event.stopPropagation()}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
