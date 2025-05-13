import React from 'react';

const ProgressItem = ({ progress }) => {
  return (
    <li>
      <h3>{progress.date}</h3>
      <p>Weight: {progress.weight} kg</p>
      <p>Chest: {progress.chest} cm</p>
      <p>Waist: {progress.waist} cm</p>
      <p>Hips: {progress.hips} cm</p>
      <p>Body Fat: {progress.bodyFat} %</p>
    </li>
  );
};

export default ProgressItem;
