import React from "react";
import styles from "./ErrorPage.module.css";
import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found !!</h1>
      <FaExclamationTriangle className={styles.icon} />
      <NavLink to="/">
        <button className={styles.button}>Go to Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
