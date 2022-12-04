import React from "react";
import style from "./Statistics.module.scss";
import male from "./images/male.svg";
import female from "./images/female.svg";

const Statistics = ({sum, title, desc1, num1, percent1, img1, desc2,  num2,  percent2, img2}) => {
  return (
    <div className={style.container}>
      <section>
        <p>{sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        <p>{title}</p>
      </section>
      <div>
        <img src={img1} />
        <p>{desc1}</p>
        <p>{num1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        <p>({percent1}%)</p>
      </div>
      <div>
        <img src={img2} />
        <p>{desc2}</p>
        <p>{num2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        <p>({percent2}%)</p>
      </div>
    </div>
  );
};

export default Statistics;
