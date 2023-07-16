import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import ProductList from "./ProductList";
import loading from "./loadding.gif";
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://thenderbackend.onrender.com/api/getAllProducts"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {data && data.myProducts ? (
        data.myProducts.map((product, index) => (
          <ProductList
            key={index}
            id={product.id}
            title={product.name}
            brand={product.brand}
            image={product.imageUrl[0]}
            description={product.description.slice(0, 150)}
            vehicle_type={product.vehicle_type}
            release_year={product.release_year}
            price={parseInt(parseInt(product.price))}
            rating={product.rating}
            maximum_power={product.maximum_power}
          />
        ))
      ) : (
        <div style={{ marginLeft: "20%" }}>
          <img src={loading} alt="" />
          <p style={{ fontWeight: "Bold", fontSize: "200%", color: "Pink" }}>
            Loading...
          </p>
         <p><i>There could potentially be an issue with data retrieval.</i></p> 
        </div>
      )}
    </div>
  );
};

export default Products;
