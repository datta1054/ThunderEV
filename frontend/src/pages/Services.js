import React from "react";
import styles from "./Services.module.css";
import { servicesData } from "../Data";
const Services = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Powering the Future of Transportation: Comprehensive EV Services for
        Every Journey
      </p>
      <div className={styles.cardContainer}>
        {servicesData.map((card, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.logos} src={card.logo} alt={card.title} />
            <p className={styles.title}>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
