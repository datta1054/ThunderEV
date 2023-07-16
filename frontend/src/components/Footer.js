import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.address}>
          <h3>Bangalore Institute of Technolody</h3>
          <p>Bangalore, Karnataka, India</p>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>Email: gurudattagadde1054@gmail.com</p>
        </div>
        {/* <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook className={styles.icon} />
            </a>
          </div>
        </div> */}
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 ThunderBoltz. All rights reserved.</p>
        <p> Developed by <i>Gurudatta Kamalakar Gadde</i></p>
      </div>
    </footer>
  );
};

export default Footer;
