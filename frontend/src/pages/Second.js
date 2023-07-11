import React from "react";
import styles from "./Second.module.css";

const Second = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <p className={styles.leftPara}>
          Electric vehicles (EVs) have emerged as a game-changer in the
          automotive industry, offering a cleaner and more sustainable mode of
          transportation. With their electric motors powered by rechargeable
          batteries, EVs produce zero tailpipe emissions, reducing air pollution
          and combating climate change.   As technology advances, EVs are witnessing rapid
          improvements in battery range, charging infrastructure, and
          affordability, making them an increasingly attractive choice for
          individuals and businesses alike.
        </p>
      </div>
      <div className={styles.rightSection}>
        <img
          className={styles.secondImage}
          src="https://images.yourstory.com/cs/1/64db9d1048fe11ec9e6aa71c2a2ad73b/blog-img1-1637302048857.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
          alt="Electric Vehicle"
        />
      </div>
    </div>
  );
};

export default Second;
