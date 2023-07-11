import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { format, subMonths } from "date-fns";
import styles from "./Chart.module.css";

const BarChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const startDate = subMonths(new Date(), 6);
    const labels = ["Food", "Travel", "Rent", "Groceries", "Bills", "Others"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Bar Chart For ExpensesF",
          data: [1, 2, 3, 4, 5, 6, 7],
          backgroundColor: [
            "rgba(17, 0, 255, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 205, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(201, 203, 207, 0.8)",
          ],
          borderColor: [
            "rgb(255, 255, 255)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.7)",
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.7)",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "rgba(255, 255, 255, 0.7)",
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

  return <canvas ref={chartRef} className={styles.chartContainer} />;
};

export default BarChart;
