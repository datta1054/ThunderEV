import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneProductDetails from "./OneProductDetails";
import loading from "./loading.gif";
function OneProduct() {
  const { qid } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/getAllProducts"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(qid);
  return (
    <div style={{ background: "black" }}>
      {/* <h2 style={{ color: "white" }}>Product Details</h2> */}

      {data && data.myProducts ? (
        data.myProducts
          .filter((product) => product.id === parseInt(qid))
          .map((product) => (
            <div key={product.id}>
              <OneProductDetails
                name={product.name}
                brand={product.brand}
                imageUrl={product.imageUrl[0]}
                description={product.description}
                price={parseInt(parseInt(product.price))}
                rating={product.rating}
                releaseYear={product.release_year}
                maximumPower={product.maximum_power}
              />
            </div>
          ))
      ) : (
        <div style={{ marginLeft: "15%" }}>
          <img src={loading} alt="" />
          <p style={{ fontWeight: "Bold", fontSize: "200%", color: "Pink" }}>
            Loading...
          </p>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
