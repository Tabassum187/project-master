import React, { useEffect, useState } from 'react'
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify"

export default function ShowUser() {
    let [user, setUser] = useState([]); // To store users
    let [n, setn] = useState("");       // Name of the user
    let [e, sete] = useState("");       // Email of the user
    let [age, setage] = useState(0);    // Age of the user
    let [g, setg] = useState("");       // Gender of the user
    let [id, setid] = useState("");     // ID of the user to update

    useEffect(() => {
        Dataaya();
    }, []);  // Calling the function once when the component is loaded

    // Function to get all users
    async function Dataaya() {
        try {
            let response = await axios.get("http://localhost:3001/gym/getuser");
            console.log(response.data);
            setUser(response.data);  // Storing users in the state
        } catch (error) {
            console.log(error);  // Logging error if any
        }
    }

    // Function to delete a user record
    async function delete_record(id) {
        try {
            if (window.confirm("Are You Sure You Want To Delete This Record?")) {
                await axios.delete(`http://localhost:3001/gym/getuser/${id}`).then(() => {
                    toast.dark("Record Deleted Successfully");
                    Dataaya(); // Fetch updated data
                });
            }
        } catch (error) {
            toast.error(error.response.data.msg);  // Show error message if deletion fails
        }
    }

    // Function to pre-fill modal data for editing
    function setdata(a, b, c, d, e) {
        setn(a);
        sete(b);
        setage(c);
        setg(d);
        setid(e);
    }

    // Function to update a user record
    async function update_function() {
        try {
            await axios.put(`http://localhost:3001/gym/getuser/${id}`, {
                name: n,
                email: e,
                age: age,
                gender: g
            }).then((a) => {
                Dataaya(); // Fetch updated data
                toast.success(a.data.msg); // Show success message
                document.querySelector(".kuchbhi").click(); // Close modal
            });
        } catch (error) {
            toast.error(error.response.data.msg);  // Show error message if update fails
        }
    }

    return (
        <div className='container'>
            <ToastContainer />
            <h1>User Records</h1>
            <div className='row'>
                {user.length === 0 ? (
                    <p>No Records Found</p>
                ) : (
                    user.map((a) => (
                        <div className='mt-3 col-md-4' key={a._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{a.name}</h4>
                                    <p className="card-text">{a.email}</p>
                                    <button className='btn btn-danger' onClick={() => delete_record(a._id)}>
                                        <i className="bi bi-trash"></i> Delete
                                    </button>
                                    <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setdata(a.name, a.email, a.age, a.gender, a._id)}>
                                        <i className="bi bi-pen"></i> Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Record</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control mt-3" value={n} onChange={(e) => setn(e.target.value)} />
                                <input type="text" className="form-control mt-3" value={e} onChange={(e) => sete(e.target.value)} />
                                <input type="text" className="form-control mt-3" value={age} onChange={(e) => setage(e.target.value)} />
                                <div>
                                    <input type="radio" name="gender" value="male" onChange={(e) => setg(e.target.value)} checked={g === "male"} /> Male
                                    <input type="radio" name="gender" value="female" onChange={(e) => setg(e.target.value)} checked={g === "female"} /> Female
                                    <input type="radio" name="gender" value="other" onChange={(e) => setg(e.target.value)} checked={g === "other"} /> Other
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary kuchbhi" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={update_function}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
