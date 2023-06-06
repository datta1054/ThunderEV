import React from "react";
import styles from "./Success.module.css";

const Success = () => {
  const columnData = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
      number: "1000",
      text: "Text 1",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
      number: "2000",
      text: "Text 2",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
      number: "3000",
      text: "Text 3",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
      number: "4000",
      text: "Text 4",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Success</h1>
      <p className={styles.text}>One line of text</p>
      <div className={styles.columnContainer}>
        {columnData.map((column, index) => (
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
