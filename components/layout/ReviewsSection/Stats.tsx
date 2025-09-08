import React from "react";
import styles from "./Review.module.css";
import { statsData } from "@/data";

const Stats: React.FC = () => {
  return (
    <div className={`${styles.counterArea} py-[70px] px-[30px] w-full`}>
      <ul className="w-full flex justify-around">
        {statsData.map(({ value, label, description }, index) => (
          <li key={index}>
            <div className={styles.statsContent}>
              <div className="flex items-baseline">
                <h3 className="text-[38px] font-semibold">{value}</h3>
                <span className="text-[20px] font-medium ml-[5px]">
                  {label}
                </span>
              </div>
              <p className="text-paraColor">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
