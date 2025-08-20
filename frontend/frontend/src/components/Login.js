import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import CreateLogin from "./CreateLogin";
import '../styles/App.css';

function Login () {

        const [createUserLogin, setUserLogin] = useState(false);
        const navigate = useNavigate();

        const [formData, setFormData] = useState({
            email: '',
            password: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData((prevData) => ( {
                ...prevData,
                [name]: value,
            }));
        };

        const handleSubmit =(e) => {
            e.preventDefault();
            console.log('User Form Submitted:', formData);

            setFormData({
                email: '',
                password: '',
            });

            alert('Welcome!');

            //testing email and password output
            //alert(formData.email);
            //alert(formData.password);
            setUserLogin(false);

        }
    return (
        <div className='form-container'>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}> 
                <input type= "email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/><br/>
                <input type= "password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/><br/>
                <button type= "submit">Login</button>
            </form>

            <button onClick={() => navigate('/create')}>Create a Profile</button>
           </div>
    );
};

export default Login;