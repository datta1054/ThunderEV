import React from "react";
import WhyNeeded from "../pages/WhyNeeded";
import Navbar from "./Navbar";
import Second from "../pages/Second";
import Third from "../pages/Third";
import PieChart from "../pages/PieChart";
import BarChart from "../pages/BarChart";
import LineChart from "../pages/LineChart";
import CarouselComponent from "../pages/CarouselComponent";
import Fourth from "../pages/Fourth";
import Fifth from "../pages/Fifth";
import Services from "../pages/Services";
import Features from "../pages/Features";
import Success from "../pages/Success";

function Home() {
  const carouselData = [
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
  return (
    <div>
      <CarouselComponent carouselData={carouselData} />
      <Second />
      <Fourth carouselData={carouselData} />
      <Fifth />
      <Third />
      <Services />
      <WhyNeeded />
      <Features />
      <Success />
      <PieChart />
      <LineChart />
      <BarChart />
    </div>
  );
}

export default Home;
