import React from "react";
import styles from "./Fifth.module.css";
import BangaloreMap from "./BangaloreMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Fifth = () => {
  return (
    <>
      <div className={styles.image}>
        <BangaloreMap />
      </div>
      <p className={styles.text}>
        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#4ab3e7" }} />{" "}
        &nbsp;&nbsp; Indicates the Charging Ponts
      </p>
    </>
  );
};

export default Fifth;
