import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { format, subMonths } from "date-fns";
import styles from "./Chart.module.css";

const LineChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const startDate = subMonths(new Date(), 8); // Start date: 6 months ago
    const labels = Array.from({ length: 8 }, (_, index) =>
      format(subMonths(startDate, index), "MMMM")
    );

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Line Chart for Expenses",
          data: [11,5,3,4,6,6,2,3],
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
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.7)",
            },
          },
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
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

  return <canvas ref={chartRef} className={styles.chartContainer}/>;
};

export default LineChart;
