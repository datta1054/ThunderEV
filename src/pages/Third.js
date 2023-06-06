import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import styles from "./Third.module.css";
function Test(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
      heading: "Carousel Heading 1",
      text: "Carousel Text 1",
    },

    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1387159339/photo/electric-vehicle-charging.webp?b=1&s=170667a&w=0&k=20&c=8d4Lxtp6AxISmXzh5L0QW8MrA7TPLMQUHJP94kQYAQY=",
      heading: "Carousel Heading 3",
      text: "Carousel Text 3",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
      heading: "Carousel Heading 1",
      text: "Carousel Text 1",
    },

    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1387159339/photo/electric-vehicle-charging.webp?b=1&s=170667a&w=0&k=20&c=8d4Lxtp6AxISmXzh5L0QW8MrA7TPLMQUHJP94kQYAQY=",
      heading: "Carousel Heading 3",
      text: "Carousel Text 3",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
      heading: "Carousel Heading 1",
      text: "Carousel Text 1",
    },

    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1387159339/photo/electric-vehicle-charging.webp?b=1&s=170667a&w=0&k=20&c=8d4Lxtp6AxISmXzh5L0QW8MrA7TPLMQUHJP94kQYAQY=",
      heading: "Carousel Heading 3",
      text: "Carousel Text 3",
    },
  ];

  const product = data.map((item) => (
    <Card image={item.image} heading={item.heading} text={item.text} />
  ));
  return (
    <div className={styles.thirdcontainer} thirdContainer>
      <h2 className={styles.ThirdHead}>Our Other Products</h2>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        {product}
      </Carousel>
      ;
    </div>
  );
}

export default Test;
