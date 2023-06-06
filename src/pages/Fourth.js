import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Fourth.module.css";

const Fourth = (props) => {
  const { carouselData } = props;

  return (
    <div className={styles.FourthContainer}>
      <h2 className={styles.FourHead}>Our Products</h2>
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
        {carouselData.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <div className={styles.carouselLeft}>
              <p>{item.text}</p>
            </div>
            <div className={styles.carouselMiddle}>
              <img src={item.image} alt="" className={styles.carouselImage} />
            </div>
            <div className={styles.carouselRight}>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Fourth;
