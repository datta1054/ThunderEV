import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>

      <p>Welcome to our psychiatrist therapy website!</p>
      <p className={styles.text}>
        At CalmSoul, we are dedicated to providing high-quality psychiatric
        therapy services to individuals seeking support and guidance. Our team
        of experienced and compassionate psychiatrists is committed to helping
        you improve your mental well-being and lead a fulfilling life.
      </p>
      <img
        className={styles.image}
        src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <p className={styles.text}>
        Using the power of React.js, we have created an interactive and
        user-friendly platform that allows you to easily access our services and
        connect with our professional therapists. Here, we combine cutting-edge
        technology with evidence-based therapeutic approaches to deliver
        personalized and effective treatment.
      </p>
      <h2 className={styles.subHeading}>Our Approach</h2>
      <p className={styles.text}>
        At CalmSoul, we believe in a holistic approach to mental health. We
        understand that each individual is unique, and we strive to provide
        personalized treatment plans tailored to your specific needs. Our
        psychiatrists employ a range of therapeutic techniques, including
        cognitive-behavioral therapy (CBT), psychodynamic therapy,
        mindfulness-based practices, and medication management when necessary.
      </p>
      <h2 className={styles.subHeading}>Our Services</h2>
      <p className={styles.text}>
        We offer a comprehensive range of services to address various mental
        health concerns, including but not limited to:
      </p>
      <ul className={styles.list}>
        <li>Individual Therapy</li>
        <li>Medication Management</li>
        <li>Teletherapy</li>
        <li>Group Therapy</li>
      </ul>
      <p className={styles.text}>
        In addition to the above services, we also provide workshops,
        educational resources, and support programs to promote mental wellness
        and self-care.
      </p>
    </div>
  );
};

export default About;
