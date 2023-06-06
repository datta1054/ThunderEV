import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const cardData = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
      title: "Logo 1",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
      title: "Logo 2",
    },
    {
      logo: "https://thecuriocitycollective.org/wp-content/uploads/2019/10/cropped-logo1.png",
      title: "Logo 3",
    },
    // Add more card data as needed
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Services</h1>
      <p className={styles.text}>One line of text</p>
      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.logo} src={card.logo} alt={card.title} />
            <p className={styles.title}>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
