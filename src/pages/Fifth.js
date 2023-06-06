import React from "react";
import styles from "./Fifth.module.css";

const Fifth = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Heading</h1>
      <p className={styles.text}>One line of text</p>
      <img
        className={styles.image}
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt="Image"
      />
      <div className={styles.textContainer}>
        <p className={styles.justifiedText}>
          Several lines of text that are justified. Several lines of text that
          are justified. Several lines of text that are justified. Several lines
          of text that are justified. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Magnam exercitationem culpa recusandae. Suscipit
          quae sed consequatur dolorem beatae in dolorum, quibusdam tempora nisi
          veritatis similique officia magnam aliquam, fugiat voluptatibus
          impedit ipsam iste non dolor totam voluptates architecto. Explicabo
          debitis voluptatem ex veritatis? Similique animi, exercitationem
          soluta debitis optio cupiditate!
        </p>
      </div>
    </div>
  );
};

export default Fifth;
