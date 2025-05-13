import React, { useState } from 'react';
import '../stlye/Rigester.css';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom'; // ✅
import "react-toastify/dist/ReactToastify.css";

export default function Rigester() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [contact, setContact] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi_index, setBmiIndex] = useState("");
  const [target_weight, setTargetWeight] = useState("");
  const [bp, setBp] = useState("");
  const [diabities, setDiabities] = useState("");

  const navigate = useNavigate(); // ✅

  function clear() {
    setName(""); setEmail(""); setPswd(""); setGender(""); setAge(0);
    setContact(""); setHeight(""); setWeight(""); setBmiIndex("");
    setTargetWeight(""); setBp(""); setDiabities("");
  }

  async function register_user(e) {
    e.preventDefault();
    try {
      const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const username_regex = /^[A-Za-z ]+$/;

      if (!name || !email || !pswd || !gender || age <= 0 || !contact || !height || !weight || !bmi_index || !target_weight || !bp || !diabities) {
        toast.error("All fields are required");
        return;
      }

      if (!password_regex.test(pswd)) {
        toast.error("Password must be 8+ characters, include upper, lower, digit, and special char");
        return;
      }

      if (!username_regex.test(name)) {
        toast.error("Name must contain only alphabets and spaces");
        return;
      }

      const userapi = await axios.post("http://localhost:3001/gym/user", {
        name, email, password: pswd, gender, age, contact,
        height, weight, bmi_index, target_weight, bp, diabities
      });

      clear();
      toast.success(userapi.data.msg);

      // ✅ Navigate to login with registration flag
      setTimeout(() => {
        navigate('/login', { state: { registered: true } });
      }, 1000);

    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("Email Already Exists");
      } else {
        toast.error(error.response?.data?.msg || "Something went wrong");
        console.error(error);
      }
    }
  }

  return (
    <div className="container">
      <ToastContainer />
      <h2>Join the Gym Team 💪</h2>

      <label>Full Name</label>
      <input type="text" className="form-control my-2" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email Address</label>
      <input type="email" className="form-control my-2" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password</label>
      <input type="password" className="form-control my-2" value={pswd} onChange={(e) => setPswd(e.target.value)} />

      <label>Gender</label>
      <div className="gender-options">
        {["male", "female", "other"].map((g) => (
          <label key={g}><input type="radio" name="gender" value={g}
            onChange={(e) => setGender(e.target.value)} checked={gender === g} /> {g}</label>
        ))}
      </div>

      <label>Age</label>
      <input type="number" className="form-control my-2" value={age} onChange={(e) => setAge(e.target.value)} />

      <label>Contact</label>
      <input type="number" className="form-control my-2" value={contact} onChange={(e) => setContact(e.target.value)} />

      <label>Height (cm)</label>
      <input type="number" className="form-control my-2" value={height} onChange={(e) => setHeight(e.target.value)} />

      <label>Weight (kg)</label>
      <input type="number" className="form-control my-2" value={weight} onChange={(e) => setWeight(e.target.value)} />

      <label>BMI Index</label>
      <input type="text" className="form-control my-2" value={bmi_index} onChange={(e) => setBmiIndex(e.target.value)} />

      <label>Target Weight (kg)</label>
      <input type="number" className="form-control my-2" value={target_weight} onChange={(e) => setTargetWeight(e.target.value)} />

      <label>Blood Pressure</label>
      <div className="gender-options">
        {["yes", "no"].map((v) => (
          <label key={v}><input type="radio" name="bp" value={v}
            onChange={(e) => setBp(e.target.value)} checked={bp === v} /> {v}</label>
        ))}
      </div>

      <label>Diabities</label>
      <div className="gender-options">
        {["yes", "no"].map((v) => (
          <label key={v}><input type="radio" name="diabities" value={v}
            onChange={(e) => setDiabities(e.target.value)} checked={diabities === v} /> {v}</label>
        ))}
      </div>

      <button className="btn btn-primary my-3" onClick={register_user}>Register Now</button>
    </div>
  );
}
