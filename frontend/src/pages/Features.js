import React from "react";
import styles from "./Features.module.css";
import { FeatureData } from "../Data";
const Features = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>One line of text</p>
      <div className={styles.cardContainer}>
        {FeatureData.map((card, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.logo} src={card.logo} alt={card.title} />
            <p className={styles.title}>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
