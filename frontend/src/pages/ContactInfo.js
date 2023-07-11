import styles from "./ContactInfo.module.css";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramLine, RiFacebookLine } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}> 
      <ul className={styles.contactList}>
        <li>
          <FaPhone className={styles.icon} />
          <span className={styles.label}>Phone Number:</span>
          <p className={styles.value}>9481621054</p>
        </li>
        <li>
          <FaEnvelope className={styles.icon} />
          <span className={styles.label}>Email:</span>
          <p className={styles.value}>gurudattagadde1054@gmail.com</p>
        </li>
        <li>
          <FaMapMarkerAlt className={styles.icon} />
          <span className={styles.label}>Address:</span>
          <p className={styles.value}>Bangalore Institute of Technology,<br /> Bangalore</p>
        </li>
        <li>
          <RiInstagramLine className={styles.icon} />
          <span className={styles.label}>Instagram:</span>
          <p className={styles.value}>@gurudattagadde</p>
        </li>
        {/* <li>
          <RiFacebookLine className={styles.icon} />
          <span className={styles.label}>Facebook:</span>
          <p className={styles.value}>/facebook_username</p>
        </li> */}
      </ul>
    </div>
  );
};

export default ContactPage;
