import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import OneProduct from "./product/OneProduct";

function Card(props) {
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

  return (
    <>
      
      <h1 className={styles.homeHeadings}>Our Other Products</h1>{" "}
      <div className={styles.card}>
        
        <div className={styles.cardContent}>
          <img src={props.image} alt="" className={styles.cardImage} />
          <h2 className={styles.cardHeading}>{props.heading}</h2>
          <p className={styles.cardBrand}>{props.brand}</p>
          <span className={styles.cardText}>
            {props.rating} &nbsp;
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          </span>
          <button className={styles.PriceButton}>₹ {props.price}</button>
          <br />
          <button className={styles.submitButton} onClick={handleViewProduct}>
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
