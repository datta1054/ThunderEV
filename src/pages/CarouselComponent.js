import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css";

const CarouselComponent = (props) => {
  const { carouselData } = props;

  return (
    <div className={styles.carouselContainer}> <Carousel
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
        <div key={index} className={styles.carouselSlide}>
          <img className={styles.image} src={item.image} alt="Carousel Image" />
          <div className={styles.carouselContent}>
            <p className={styles.heading}>{item.heading}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </Carousel></div>
   
  );
};

export default CarouselComponent;
