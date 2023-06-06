import React from "react";
import styles from "./Second.module.css";

const Second = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2>Electric Vehicles</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo
          ligula eget velit consectetur, eget efficitur libero rhoncus. Sed at
          ullamcorper arcu, vitae interdum felis. Phasellus at rutrum turpis.
          Donec cursus, dui in iaculis malesuada, sapien mi ullamcorper elit,
          sed iaculis nunc velit vitae metus. Fusce dapibus interdum metus, sed
          rutrum enim finibus id. Suspendisse sagittis ligula in dolor sagittis,
          ut faucibus ex pellentesque. Nullam a arcu quam. Nunc lobortis, lectus
          nec placerat fermentum, tortor tellus feugiat tortor, et dapibus eros
          quam vitae sapien.
        </p>
      </div>
      <div className={styles.rightSection}>
        <img src="https://images.yourstory.com/cs/1/64db9d1048fe11ec9e6aa71c2a2ad73b/blog-img1-1637302048857.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" alt="Electric Vehicle" />
      </div>
    </div>
  );
};

export default Second;
