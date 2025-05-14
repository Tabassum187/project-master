import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Line } from 'react-chartjs-2';
import styles from '../style/ProgressForm.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let ProgressForm = ({ progress = null, userId, onSave = () => {} }) => {
  let [weight, setWeight] = useState('');
  let [chest, setChest] = useState('');
  let [waist, setWaist] = useState('');
  let [hips, setHips] = useState('');
  let [bodyFat, setBodyFat] = useState('');
  let [date, setDate] = useState('');
  let [history, setHistory] = useState([]);

  useEffect(() => {
    if (progress) {
      setWeight(progress.weight || '');
      setChest(progress.chest || '');
      setWaist(progress.waist || '');
      setHips(progress.hips || '');
      setBodyFat(progress.bodyFat || '');
      setDate(progress.date?.split("T")[0] || '');
    }
  }, [progress]);

  useEffect(() => {
    if (userId) {
      fetchProgressHistory();
    }
  }, [userId]);

  let fetchProgressHistory = async () => {
    try {
      let res = await axios.get(`http://localhost:3001/gym/progress/user/${userId}`);
      setHistory(res.data);
    } catch (error) {
      console.error("Error fetching progress history", error);
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!weight || !chest || !waist || !hips || !bodyFat || !date) {
      toast.error("Please fill all the fields.");
      return;
    }

    let progressData = {
      userId,
      weight,
      chest,
      waist,
      hips,
      bodyFat,
      date
    };

    try {
      if (progress && progress._id) {
        await axios.put(`http://localhost:3001/gym/progress/${progress._id}`, progressData);
        toast.success("Progress updated successfully!");
      } else {
        await axios.post("http://localhost:3001/gym/progress", progressData);
        toast.success("Progress added successfully!");
      }

      onSave();
      fetchProgressHistory();
    } catch (error) {
      console.error("Progress save error:", error);
      toast.error(error.response?.data?.msg || "Error saving progress data.");
    }
  };

  let generateChartData = (label, key) => {
    let sorted = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
    return {
      labels: sorted.map(p => new Date(p.date).toLocaleDateString()),
      datasets: [
        {
          label,
          data: sorted.map(p => parseFloat(p[key])),
          borderColor: 'rgba(255, 206, 86, 1)',
          fill: false,
        }
      ]
    };
  };

  return (
    <div className={styles.progressContainer}>
      <ToastContainer />
      <h3 className={styles.heading}>{progress ? "Update Progress" : "Add New Progress"}</h3>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <label className={styles.label}>Weight (kg):</label>
        <input type="number" className={styles.input} value={weight} onChange={e => setWeight(e.target.value)} />

        <label className={styles.label}>Chest (cm):</label>
        <input type="number" className={styles.input} value={chest} onChange={e => setChest(e.target.value)} />

        <label className={styles.label}>Waist (cm):</label>
        <input type="number" className={styles.input} value={waist} onChange={e => setWaist(e.target.value)} />

        <label className={styles.label}>Hips (cm):</label>
        <input type="number" className={styles.input} value={hips} onChange={e => setHips(e.target.value)} />

        <label className={styles.label}>Body Fat (%):</label>
        <input type="number" className={styles.input} value={bodyFat} onChange={e => setBodyFat(e.target.value)} />

        <label className={styles.label}>Date:</label>
        <input type="date" className={styles.input} value={date} onChange={e => setDate(e.target.value)} />

        <button type="submit" className={styles.submitButton}>{progress ? "Update Progress" : "Add Progress"}</button>
      </form>

      {history.length > 0 && (
        <div className={styles.chartSection}>
          <h4>Your Progress Over Time</h4>
          {['weight', 'chest', 'waist', 'hips', 'bodyFat'].map(key => (
            <div key={key} className={styles.chartContainer}>
              <h6>{key.charAt(0).toUpperCase() + key.slice(1)}</h6>
              <Line data={generateChartData(key, key)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressForm;
