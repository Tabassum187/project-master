import React, { useState } from 'react';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [pswd, setPswd] = useState("");
  const navigate = useNavigate(); // 👈 for navigation

  async function login_func() {
    try {
      const response = await axios.post("http://localhost:3001/gym/log", {
        email: email,
        password: pswd
      });

      const data = response.data;
      localStorage.setItem("user_informartion", JSON.stringify(data.user));
      toast.success(data.msg);
      setEmail("");
      setPswd("");

      // ✅ Redirect to dashboard
      navigate('/dashboard');

    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div>
      <ToastContainer />
      <h1>LOGIN</h1>

      <label htmlFor="email">Email Address</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required 
        className='form-control my-2' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />

      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        required 
        className='form-control my-2' 
        value={pswd}
        onChange={(e) => setPswd(e.target.value)} 
      />

      <button className='btn btn-primary' onClick={login_func}>Login</button>
    </div>
  );
}