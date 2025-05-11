import React, { useState } from 'react'
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
export default function Login() {
    let [email, setEmail] = useState("") 
  let [pswd, setPswd] = useState("")

  async function login_func(){
    try {
        await axios.post("http://localhost:3001/gym/log",{
            email:email,
            password:pswd
        }).then((a)=>{
            localStorage.setItem("user_informartion", JSON.stringify(a.data.user))
            toast.success(a.data.msg)
            setEmail("");
            setPswd("")
        })
        
    } catch (error) {
        
    }
  }
  return (
    <div>
        <ToastContainer/>
        <h1>LOGIN</h1>
          <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required className='form-control my-2' value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required className='form-control my-2' value={pswd}
          onChange={(e) => setPswd(e.target.value)} />
           <button className='btn btn-primary' onClick={login_func}>Login </button>
    </div>
  )
}
