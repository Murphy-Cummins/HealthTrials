import React, { useState } from "react";
import '../styles/UserInput.css';

function UserInput () {

    const [createUserProfile, setUserProfile] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        conditions: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value, type , checked } = e.target;

        if (type === 'checkbox') {
            setUserProfile(checked);
            console.log('Creating profile:', createUserProfile);

            setFormData((prevData) => ({
                ...prevData,
                [name]:value
            }));
        }
        else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Form Submitted:', formData);

        setFormData({
            name: '',
            age: '',
            conditions: '',
            email: '',
            password: ''
        });

        alert('Form submitted!');
        setUserProfile(false);
    };

return (
    <div className="form-container">
        <h2>User Medical Information</h2>
        <form onSubmit={handleSubmit}>

            <div className="column">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="column">
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>

            <div className="column">
            <label>Conditions:</label>
            <textarea name="conditions" value={formData.conditions} onChange={handleChange} placeholder="depression, diabetes, asthmas, etc"></textarea>
            </div>

            <div className="column">
            <label>Email:</label>            
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="column">
                <label>Create a User Profile</label>
                <input type="checkbox" checked={createUserProfile} onChange={handleChange} />
            </div>

            <div className="column">
                {createUserProfile && (
                    <>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
);
}

export default UserInput;