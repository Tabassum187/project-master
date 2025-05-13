import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressGraph = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    // Fetch progress data from backend
    axios.get("http://localhost:3001/gym/progress")
      .then(response => {
        setProgressData(response.data);
      })
      .catch(error => console.error("Error fetching progress data:", error));
  }, []);

  const data = {
    labels: progressData.map(entry => entry.date), // Dates as labels
    datasets: [
      {
        label: 'Weight (kg)',
        data: progressData.map(entry => entry.weight), // Weight data
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Body Fat (%)',
        data: progressData.map(entry => entry.bodyFat), // Body fat data
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1,
      }
    ]
  };

  return (
    <div>
      <h2>Your Progress Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default ProgressGraph;
