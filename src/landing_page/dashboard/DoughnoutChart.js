import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './index2.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}
