import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "./Chart.module.css";

const PieChart = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: ["Food", "Travel", "Rent", "Groceries", "Bills", "Others"],
      datasets: [
        {
          label: "Pie Chart For Expenses",
          data: [1, 2, 3, 4, 5, 6],
          backgroundColor: [
            "rgb(235, 107, 52)",
            "rgb(235, 214, 52)",
            "rgb(95, 235, 52)",
            "rgb(52, 235, 211)",
            "rgb(52, 58, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 6,
        },
      ],
    };

    const config = {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "#fff",
            },
          },
        },
      },
    };

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} className={styles.pie} />;
};

export default PieChart;
