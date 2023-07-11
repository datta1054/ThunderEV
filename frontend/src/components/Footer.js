import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.address}>
          <h3>Company Address</h3>
          <p>123 Street, City, State, Country</p>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
