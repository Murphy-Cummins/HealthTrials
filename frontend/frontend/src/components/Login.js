import React, { useState } from "react";

function Login () {

        const [createUserLogin, setUserLogin] = useState(false);
    
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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}> 
                <input type= "email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/><br/>
                <input type= "password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/><br/>
                <button type= "submit">Login</button>
            </form>
        </div>
    );
};

export default Login;