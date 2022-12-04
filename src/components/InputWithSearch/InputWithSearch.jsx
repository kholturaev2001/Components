import React, { useState } from "react";
import styles from "./InputWithSearch.module.scss";
import TriangleUp from "../Selector/TriangleUp";

const InputWithSearch = ({
  type,
  current,
  data,
  setCurrent,
  disabled,
  placeholder,
  elemId,
  inpName,
  labelTxt,
  errorTxt,
  required,
  formController,
  className
}) => {
  const [opened, setOpened] = useState(false);
  const [dataOptions, setDataOptions] = useState(data);
  const [input, setInput] = useState(null);

  const func = () => {
    setOpened(!opened);
  };

  function searchFunc(inp) {
    let dataArr = data?.filter(
      item =>
        !`${item?.short_name} ${String(item?.number)}`
          ?.toLowerCase()
          .indexOf(inp.toLowerCase()) ||
        !`${item?.short_name}${String(item?.number)}`
          ?.toLowerCase()
          .indexOf(inp.toLowerCase()) ||
        !String(item?.number)?.indexOf(inp)
    );
    setInput(inp);
    setDataOptions(dataArr);
  }

  function changing(e) {
    setCurrent(e);
    setInput(null);
  }

  return (
    <div className={styles.main}>
      {labelTxt && <label>{labelTxt}</label>}
      <div>
        <p>
          <input
            {...formController}
            type={type}
            name={inpName}
            id={elemId}
            value={
              input !== null
                ? input
                : `${current?.short_name} ${current?.number}`
            }
            placeholder={placeholder}
            onChange={e => searchFunc(e.target.value)}
            disabled={disabled}
            className={className}
            onFocus={func}
            onBlur={func}
          />
          <span onClick={func}>
            <TriangleUp className={opened ? styles.up : styles.down} />
          </span>
        </p>
        {errorTxt && <span className={styles.errTxt}>{errorTxt}</span>}
        {opened && (
          <div className={styles.optionsContainer}>
            {dataOptions?.map((e, id) => (
              <li className={styles.options} key={id}>
                <button
                  className={current?.id === e?.id ? styles.activeOption : ""}
                  onMouseDown={() => {
                    changing(e);
                  }}
                >
                  {`${e?.short_name} ${e?.number}`}
                </button>
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default InputWithSearch;
