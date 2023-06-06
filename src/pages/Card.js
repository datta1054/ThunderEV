import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const handleSubmit = () => {
    // Handle submit logic here
    console.log("Form submitted!");
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src={props.image} alt="" className={styles.cardImage} />
        <h2 className={styles.cardHeading}>{props.heading}</h2>
        <p className={styles.cardText}>{props.text}</p>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Card;
