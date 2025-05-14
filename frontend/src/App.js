import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Main from './Component/Main';
import Rigester from './Component/Register';
import ShowUser from './Component/ShowUser';
import Login from './Component/Login';
import ProgressForm from './Component/ProgressForm';
import WorkoutForm from './Component/WorkoutForm';
import FoodForm from './Component/FoodForm';
import FoodList from './Component/FoodList';
import FoodItem from './Component/FoodItem';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/reg' element={<Rigester />} />
          <Route path='/getuser' element={<ShowUser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Main />} />
          <Route path='/pro' element={<ProgressForm />} />
          <Route path='/work' element={<WorkoutForm />} />
          <Route path='/food' element={<FoodForm />} />
          <Route path='/foodlist' element={<FoodList />} />
          <Route path='/fooditem' element={<FoodItem />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
