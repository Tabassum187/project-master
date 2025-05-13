import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressItem from './ProgressItem';

const ProgressList = () => {
  const [progressEntries, setProgressEntries] = useState([]);

  useEffect(() => {
    // Fetch progress entries from backend
    axios.get("http://localhost:3001/gym/progress")
      .then(response => {
        setProgressEntries(response.data);
      })
      .catch(error => console.error("Error fetching progress:", error));
  }, []);

  return (
    <div>
      <h2>Your Progress Entries</h2>
      <ul>
        {progressEntries.map(progress => (
          <ProgressItem key={progress.id} progress={progress} />
        ))}
      </ul>
    </div>
  );
};

export default ProgressList;
