import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  type,
  disabled,
  value,
  placeholder,
  onChange,
  elemId,
  inpName,
  labelTxt,
  errorTxt,
  required,
  formController,
  className
}) => {
  return (
    <div className={styles.main}>
      {labelTxt && <label>{labelTxt}</label>}
      <p>
        <input
          {...formController}
          type={type}
          name={inpName}
          id={elemId}
          value={value}
          placeholder={placeholder}
          onChange={event => onChange(event.currentTarget.value)}
          disabled={disabled}
          className={className}
        />
        {errorTxt && <span className={styles.errTxt}>{errorTxt}</span>}
      </p>
    </div>
  );
};

export default Input;
