import React from "react";
import styles from "./Success.module.css";
import { successData } from "../Data";
const Success = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Success</h1>
      <p className={styles.text}>One line of text</p>
      <div className={styles.columnContainer}>
        {successData.map((column, index) => (
          <div key={index} className={styles.column}>
            <img className={styles.icon} src={column.icon} alt={column.text} />
            <p className={styles.number}>{column.number}</p>
            <p className={styles.text}>{column.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
