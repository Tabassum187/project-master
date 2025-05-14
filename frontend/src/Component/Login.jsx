import React, { useState } from 'react';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import styles from '../style/Login.module.css'; // ✅ Using CSS Module

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [pswd, setPswd] = useState("");
  const navigate = useNavigate();

  async function login_func() {
    try {
      let response = await axios.post("http://localhost:3001/gym/log", {
        email: email,
        password: pswd
      });

      let data = response.data;
      localStorage.setItem("user_informartion", JSON.stringify(data.user));
      toast.success(data.msg);
      setEmail("");
      setPswd("");

      navigate('/dashboard');
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className={styles.loginContainer}>
      <ToastContainer />
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Welcome Back 🏋️‍♂️</h2>

        <label htmlFor="email" className={styles.label}>Email Address</label>
        <input 
          type="email" 
          id="email" 
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label htmlFor="password" className={styles.label}>Password</label>
        <input 
          type="password" 
          id="password" 
          className={styles.input}
          value={pswd}
          onChange={(e) => setPswd(e.target.value)} 
        />

        <button className={styles.loginButton} onClick={login_func}>Login</button>
      </div>
    </div>
  );
}
