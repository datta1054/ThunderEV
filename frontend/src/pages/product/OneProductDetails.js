import React from "react";
import styles from "./OneProductDetails.module.css";

const OneProductDetails = (props) => {
  const handleViewProduct = () => {};
  var cost = props.price;
  if (cost > 10000000) {
    cost = (parseFloat(cost) / 1000000).toFixed(2);
    cost += " Cr";
  } else if (cost > 100000) {
    cost = (parseFloat(cost) / 100000).toFixed(2);
    cost += " Lcs";
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.name}>
          <span className={styles.headingText}>{props.name}</span>
          <sub className={styles.subscript}>{props.brand}</sub>
        </h1>
      </div>
      <img className={styles.image} src={props.imageUrl} alt="Product" />{" "}
      <p className={styles.rating}>
        {props.rating} <span className={styles.starIcon}>⭐</span>
      </p>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.cont2}>
        <div className={styles.leftColumn}>
          <p className={styles.releaseYear}>
            Release Year: {props.releaseYear}
          </p>
          <p className={styles.maximumPower}>
            Maximum Power: {props.maximumPower} HP
          </p>
        </div>
        <div className={styles.rightColumn}>
          <button className={styles.priceButton}> ₹{cost}</button>
        </div>
      </div>
      <button className={styles.submitButton} onClick={handleViewProduct}>
        Buy
      </button>
    </div>
  );
};

export default OneProductDetails;
