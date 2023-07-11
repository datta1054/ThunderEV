import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css";
import { HomeData } from "../Data";
const CarouselComponent = (props) => {
  return (
    <div className={styles.carouselContainer}>
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
        {HomeData.map((item, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img
              className={styles.carouselImage}
              src={item.image}
              alt="Carousel Image"
            />
            <div className={styles.carouselContent}>
              <p className={styles.carouselHeading}>{item.heading}</p>
              <p className={styles.carouselText}>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
