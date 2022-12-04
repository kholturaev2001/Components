import React from "react";
import StatisticsHeader from "../StatisticsHeader/StatisticsHeader";
import Statistics from "../Statistics/Statistics";
import img1 from "./images/school 1.svg";
import style from "./GenStat.module.scss";
import male from "./images/male.svg";
import female from "./images/female.svg";

const GenStat = () => {
  return (
    <div>
      <StatisticsHeader title="Омори умумишаҳрӣ" desc="Муассисаҳо" img={img1} />
      <div className={style.statisticsCont}>
        {[1, 2, 3, 4, 5].map((el, id) => (
          <Statistics
            key={id}
            sum={"1000"}
            title="дар барнома"
            desc1="кормандон"
            num1="15000"
            img1={male}
            percent1="100"
            desc2="хонандагон"
            num2="100000"
            percent2="90"
            img2={female}
          />
        ))}
      </div>
    </div>
  );
};

export default GenStat;
