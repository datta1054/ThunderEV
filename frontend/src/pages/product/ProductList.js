import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductList.module.css";
import OneProduct from "./OneProduct";

const Card = (props) => {
  const navigate = useNavigate();
  const [redirectToProduct, setRedirectToProduct] = useState(false);

  const handleViewProduct = () => {
    setRedirectToProduct(true);
  };

  if (redirectToProduct) {
    const productPath = `/product/${props.id}`;
    <OneProduct id={props.id} name={props.name} />;
    navigate(productPath);
  }
  var cost = props.price;
  if (cost > 10000000) {
    cost = (parseFloat(cost) / 1000000).toFixed(2);
    cost += " Cr";
  } else if (cost > 100000) {
    cost = (parseFloat(cost) / 100000).toFixed(2);
    cost += " Lcs";
  }
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.brand}> {props.brand}</p>
        {/* <p className={styles.description}>"description"Left to add</p> */}
        <p className={styles.releaseYear}> {props.release_year}</p>
        <p className={styles.maximumPower}> {props.maximum_power} HP</p>
        <p className={styles.rating}>
          {props.rating} <span className={styles.starIcon}>⭐</span>
        </p>
        <button className={styles.PriceButton}>₹ {cost}</button>
        <br />
        <br />
        <button className={styles.viewMore} onClick={handleViewProduct}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
