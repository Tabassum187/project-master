import React, { useState } from 'react';
import axios from 'axios';

const WorkoutForm = ({ workout, onSave }) => {
  const [exercise, setExercise] = useState(workout ? workout.exercise : '');
  const [sets, setSets] = useState(workout ? workout.sets : '');
  const [reps, setReps] = useState(workout ? workout.reps : '');
  const [weight, setWeight] = useState(workout ? workout.weight : '');
  const [category, setCategory] = useState(workout ? workout.category : '');
  const [notes, setNotes] = useState(workout ? workout.notes : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { exercise, sets, reps, weight, category, notes };

    // Save to backend
    if (workout) {
      axios.put(`http://localhost:3001/gym/workouts/${workout.id}`, newWorkout)
        .then(() => onSave())
        .catch(error => console.error("Error updating workout:", error));
    } else {
      axios.post("http://localhost:3001/gym/workouts", newWorkout)
        .then(() => onSave())
        .catch(error => console.error("Error creating workout:", error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Exercise Name:</label>
      <input type="text" value={exercise} onChange={e => setExercise(e.target.value)} required />
      
      <label>Sets:</label>
      <input type="number" value={sets} onChange={e => setSets(e.target.value)} required />
      
      <label>Reps:</label>
      <input type="number" value={reps} onChange={e => setReps(e.target.value)} required />
      
      <label>Weight:</label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} required />
      
      <label>Category:</label>
      <select value={category} onChange={e => setCategory(e.target.value)} required>
        <option value="strength">Strength</option>
        <option value="cardio">Cardio</option>
      </select>
      
      <label>Notes:</label>
      <textarea value={notes} onChange={e => setNotes(e.target.value)} />
      
      <button type="submit">Save Workout</button>
    </form>
  );
};

export default WorkoutForm;
