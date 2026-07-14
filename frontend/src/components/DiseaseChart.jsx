import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function DiseaseChart({ patients }) {
  const diseaseCount = {};

  patients.forEach((patient) => {
    diseaseCount[patient.disease] =
      (diseaseCount[patient.disease] || 0) + 1;
  });

  const data = {
    labels: Object.keys(diseaseCount),
    datasets: [
      {
        label: "Patients",
        data: Object.values(diseaseCount),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
          "#14b8a6",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
      }}
    >
      <h2>Disease Analytics</h2>

      <Pie data={data} />
    </div>
  );
}

export default DiseaseChart;