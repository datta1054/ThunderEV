import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { dummyIfNotLoaded } from "../Data";
import loading from "./loading2.gif";
import styles from "../components/Home.module.css";
function Third(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [data, setData] = useState(dummyIfNotLoaded);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://thenderbackend.onrender.com/api/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && data.myProducts && (
        <h1 className={styles.homeHeadings}>Our Other Products</h1>
      )}
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        {data && data.myProducts ? (
          data.myProducts.map((product) => (
            <Card
              image={product.imageUrl[0]}
              id={product.id}
              brand={product.brand}
              heading={product.name}
              rating={product.rating}
              price={product.price}
            />
          ))
        ) : (
          <div style={{ marginLeft: "50%" }}>
            {/* <img src={loading} alt="" />
            <p style={{ fontWeight: "Bold", fontSize: "200%", color: "Pink" }}>
              Loading...
            </p> */}
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Third;
