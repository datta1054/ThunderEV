import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Fourth.module.css";

import { OurProductsData } from "../Data";
const Fourth = () => {
  
  return (
    <div className={styles.FourthContainer}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={8000}
        infiniteLoop={true}
        transitionTime={2000}
        showArrows={true}
        className={styles.carousel}
      >
        {OurProductsData.map((item, index) => (
          <div>
            <p className={styles.FourHead}>{item.name}</p>
            <div key={index} className={styles.carouselItem}>
              <div className={styles.carouselLeft}>
                <p className={styles.LeftText}>{item.description}</p>
              </div>
              <div className={styles.carouselMiddle}>
                <img
                  src={item.imageUrl}
                  alt=""
                  className={styles.carouselImage}
                />
              </div>
              <div className={styles.carouselRight}>
                <div className={styles.table}>
                  <div className={styles.row}>
                    <span className={styles.label}>Brand :</span>
                    <span>{item.brand}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Price:</span>
                    <span>{item.price}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Release Year:</span>
                    <span>{item.release_year}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Rating:</span>
                    <span>{item.rating}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Maximum Power:</span>
                    <span>{item.maximum_power}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Fourth;
