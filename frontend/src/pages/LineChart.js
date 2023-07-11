import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { format, subYears } from "date-fns";
import styles from "./Chart.module.css";

const LineChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const startDate = subYears(new Date(), 0); // Start date: 7 years ago
    const labels = Array.from({ length: 8 }, (_, index) =>
      format(subYears(startDate, 6 - index), "yyyy")
    );

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Electric Vehicles Sale in India",
          data: [1608, 2350, 5690, 13094, 21236, 30307, 59823, 72000],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.9)",
            },
          },
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.9)",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
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

export default LineChart;
