import React from "react";
import styles from "./About.module.css";
import ContactPage from "./ContactInfo";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.aboutHeading}>
          Thunderboltz : The Future of Electric Vehicles
        </h1>

        {/* <p>Welcome to our Electric Vegicle website!</p> */}
        <p className={styles.aboutText}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Thunderboltz is a company
          dedicated to making electric vehicles accessible and affordable for
          everyone. We believe that electric vehicles are the future of
          transportation, and we are committed to providing our customers with
          the best possible experience. Our team is passionate about electric
          vehicles, and we are constantly working to improve our products and
          services. We offer a wide range of electric vehicles, from sedans and
          SUVs to trucks and vans. We also offer a variety of after-sales
          support services, including charging stations, maintenance, and
          repairs. <br />
          <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We are committed to
          sustainability, and we believe that electric vehicles are the best way
          to reduce our environmental impact. Electric vehicles produce zero
          emissions, which means they help to improve air quality and reduce
          greenhouse gas emissions. We are also committed to providing our
          customers with the best possible value. We offer competitive prices on
          our vehicles, and we also offer a variety of financing options to make
          it easier for our customers to afford an electric vehicle.
          <br /> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; If you are looking
          for an electric vehicle that is both affordable and sustainable, then
          Thunderboltz is the perfect choice for you. We are here to help you
          make the switch to electric vehicles, and we are committed to
          providing you with the best possible experience.
        </p>
        <img
          className={styles.image}
          src="https://www.topgear.com/sites/default/files/2023/01/Used-electric-cars.jpg?w=1784&h=1004"
          alt=""
        />
        <h2 className={styles.subHeading}>Our Story</h2>
        <p className={styles.aboutText}>
          Thunderboltz was founded in 2023 by two friends who were passionate
          about electric vehicles. They saw the potential of electric vehicles
          to change the world, and they were determined to make them more
          accessible to everyone. The company started out small, but it has
          grown rapidly in recent years. Thunderboltz now sells electric
          vehicles in over 100 countries, and it is one of the leading electric
          vehicle companies in the world.
        </p>

        <h2 className={styles.subHeading}>Our Mission</h2>
        <p className={styles.aboutText}>
          Our mission is to make electric vehicles accessible and affordable for
          everyone. We believe that electric vehicles are the future of
          transportation, and we are committed to providing our customers with
          the best possible experience.
        </p>

        <h2 className={styles.subHeading}>Our Values</h2>

        <ul className={styles.aboutList}>
          <li>
            <strong> Sustainability : </strong> We are committed to reducing our
            environmental impact by manufacturing electric vehicles that produce
            zero emissions. We also use recycled materials in our vehicles and
            packaging, and we are working to develop new ways to reduce our
            overall environmental impact.
          </li>
          <li>
            <strong>Affordability : </strong>We believe that electric vehicles
            should be accessible to everyone, regardless of their income. That's
            why we offer a variety of financing options, and we are constantly
            working to make our vehicles more affordable.
          </li>
          <li>
            <strong> Excellence : </strong>We are committed to providing our
            customers with the best possible products and services. That means
            that our vehicles are built to the highest standards of quality, and
            our customer service is second to none.
          </li>
          <li>
            <strong> Innovation : </strong>We are constantly working to improve
            our products and services. We are always looking for new ways to
            make our vehicles more efficient, more affordable, and more
            enjoyable to drive.
          </li>
        </ul>
        <h2 className={styles.subHeading}>Contact Information</h2>
        <ContactPage/>
      </div>
    </>
  );
};

export default About;
