import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from '../style/FoodForm.module.css';

const FoodForm = ({ food = null, userId, onSave }) => {
  const [name, setName] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  useEffect(() => {
    if (food) {
      setName(food.name || '');
      setMealType(food.mealType || 'breakfast');
      setQuantity(food.quantity || '');
      setCalories(food.calories || '');
      setProtein(food.protein || '');
      setCarbs(food.carbs || '');
      setFat(food.fat || '');
    }
  }, [food]);

  const clearForm = () => {
    setName('');
    setMealType('breakfast');
    setQuantity('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !quantity || !calories || !protein || !carbs || !fat) {
      toast.error("Please fill all the fields.");
      return;
    }

    const foodData = {
      userId,
      meals: [{ name, mealType, quantity, calories, protein, carbs, fat }]
    };

    try {
      if (food && food._id) {
        await axios.put(`http://localhost:3001/gym/foods/${food._id}`, foodData);
        toast.success("Food updated successfully!");
      } else {
        await axios.post("http://localhost:3001/gym/foods", foodData);
        toast.success("Food added successfully!");
      }
      clearForm();
      if (onSave) onSave();
    } catch (error) {
      console.error("Food save error:", error);
      toast.error(error.response?.data?.msg || "Error saving food data.");
    }
  };

  return (
    <div className={styles.foodContainer}>
      <ToastContainer />
      <h3 className={styles.heading}>{food ? "Update Food" : "Add New Food"}</h3>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <label className={styles.label}>Food Name:</label>
        <input type="text" className={styles.input} value={name} onChange={e => setName(e.target.value)} required />

        <label className={styles.label}>Meal Type:</label>
        <select className={styles.input} value={mealType} onChange={e => setMealType(e.target.value)} required>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>

        <label className={styles.label}>Quantity:</label>
        <input type="number" className={styles.input} value={quantity} onChange={e => setQuantity(e.target.value)} required />

        <label className={styles.label}>Calories:</label>
        <input type="number" className={styles.input} value={calories} onChange={e => setCalories(e.target.value)} required />

        <label className={styles.label}>Protein (g):</label>
        <input type="number" className={styles.input} value={protein} onChange={e => setProtein(e.target.value)} required />

        <label className={styles.label}>Carbs (g):</label>
        <input type="number" className={styles.input} value={carbs} onChange={e => setCarbs(e.target.value)} required />

        <label className={styles.label}>Fat (g):</label>
        <input type="number" className={styles.input} value={fat} onChange={e => setFat(e.target.value)} required />

        <button type="submit" className={styles.submitButton}>
          {food ? "Update Food" : "Add Food"}
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
