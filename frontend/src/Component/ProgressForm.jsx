import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProgressForm = ({ progress = null, userId, onSave }) => {
  const [weight, setWeight] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [date, setDate] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!weight || !chest || !waist || !hips || !bodyFat || !date) {
      toast.error("Please fill all the fields.");
      return;
    }

    const progressData = {
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
      if (onSave) onSave();
    } catch (error) {
      console.error("Progress save error:", error);
      toast.error(error.response?.data?.msg || "Error saving progress data.");
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h3>{progress ? "Update Progress" : "Add New Progress"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2"><label>Weight (kg):</label><input type="number" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} /></div>
        <div className="mb-2"><label>Chest (cm):</label><input type="number" className="form-control" value={chest} onChange={e => setChest(e.target.value)} /></div>
        <div className="mb-2"><label>Waist (cm):</label><input type="number" className="form-control" value={waist} onChange={e => setWaist(e.target.value)} /></div>
        <div className="mb-2"><label>Hips (cm):</label><input type="number" className="form-control" value={hips} onChange={e => setHips(e.target.value)} /></div>
        <div className="mb-2"><label>Body Fat (%):</label><input type="number" className="form-control" value={bodyFat} onChange={e => setBodyFat(e.target.value)} /></div>
        <div className="mb-2"><label>Date:</label><input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} /></div>
        <button type="submit" className="btn btn-success mt-3">{progress ? "Update Progress" : "Add Progress"}</button>
      </form>
    </div>
  );
};

export default ProgressForm;
