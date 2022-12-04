import React from "react";
import style from "./StatisticsHeader.module.scss";

const StatisticsHeader = ({title, desc, img}) => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.textCont}>
          <p>{title} </p>
          <p>{desc}</p>
        </div>
        <div>
          <div className={style.circleCont}>
            <div className={style.bigCircle}></div>
            <div className={style.smallCircle}></div>
          </div>
          <div className={style.imgCont}>
            <img className={style.mainImg} src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsHeader;
