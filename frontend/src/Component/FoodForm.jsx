import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const FoodForm = ({ food = null, userId, onSave }) => {
  const [name, setName] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  // If food data is passed, set it into the state
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

    // Validate form data
    if (!name || !quantity || !calories || !protein || !carbs || !fat) {
      toast.error("Please fill all the fields.");
      return;
    }

   const foodData = {
  userId, // ✅ Include this
  meals: [{
    name,
    mealType,
    quantity,
    calories,
    protein,
    carbs,
    fat
  }]
};


    try {
      if (food && food._id) {
        // If food exists (updating the food data)
        await axios.put(`http://localhost:3001/gym/foods/${food._id}`, foodData);
        toast.success("Food updated successfully!");
      } else {
        // If food does not exist (adding a new food entry)
        await axios.post("http://localhost:3001/gym/foods", foodData);
        toast.success("Food added successfully!");
      }

      clearForm(); // Clear the form after successful submission
      if (onSave) onSave(); // Call onSave callback if provided
    } catch (error) {
      console.error("Food save error:", error);
      toast.error(error.response?.data?.msg || "Error saving food data.");
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h3>{food ? "Update Food" : "Add New Food"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Food Name:</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>

        <div className="mb-2">
          <label>Meal Type:</label>
          <select className="form-control" value={mealType} onChange={e => setMealType(e.target.value)} required>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>

        <div className="mb-2">
          <label>Quantity:</label>
          <input type="number" className="form-control" value={quantity} onChange={e => setQuantity(e.target.value)} required />
        </div>

        <div className="mb-2">
          <label>Calories:</label>
          <input type="number" className="form-control" value={calories} onChange={e => setCalories(e.target.value)} required />
        </div>

        <div className="mb-2">
          <label>Protein (g):</label>
          <input type="number" className="form-control" value={protein} onChange={e => setProtein(e.target.value)} required />
        </div>

        <div className="mb-2">
          <label>Carbs (g):</label>
          <input type="number" className="form-control" value={carbs} onChange={e => setCarbs(e.target.value)} required />
        </div>

        <div className="mb-2">
          <label>Fat (g):</label>
          <input type="number" className="form-control" value={fat} onChange={e => setFat(e.target.value)} required />
        </div>

        <button type="submit" className="btn btn-success mt-3">
          {food ? "Update Food" : "Add Food"}
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
