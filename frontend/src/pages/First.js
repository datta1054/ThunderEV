import React from "react";
import styles from "./First.module.css";

const Second = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.card}>
          <h2 className={styles.secondHeading}>Avoid Frequent Fast Charges</h2>
          <p className={styles.secondText}>
            Frequent fast-charging may have a negative impact on a battery's
            health over time, as sending high currents causes a lot of strain
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.secondHeading}>Control Level of Charge</h2>
          <p className={styles.secondText}>
            Charging extremes(close to zero or 100%) can reduce the battery's
            capacity to store electricity and even drain faster over time.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.secondHeading}>Parking for Longer Periods</h2>
          <p className={styles.secondText}>
            When parked for an extended period of time (more than a month),
            maintain a charging range of 40 to 60% to safeguard the battery's
            health.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.secondHeading}>
            Avoid Exposure to Hot Temperatures
          </h2>
          <p className={styles.secondText}>
            Exposing your electric vehicle to extreme hot temperatures and can
            potentially damage the battery.
          </p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img
          className={styles.secondImage}
          src="https://stimg.cardekho.com/pwa/img/ev/evBenefits-new.png"
          alt="Electric Vehicle"
        />
      </div>
    </div>
  );
};

export default Second;
