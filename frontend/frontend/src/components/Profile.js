import React from 'react';
import '../styles/App.css';
import Favorites from '../components/Favorites';
import UserInput from './UserInput';
import { Navigate, useNavigate} from 'react-router-dom';

function Profile() {
  
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p>Here you can manage your profile and information.</p>
      <div>
        <UserInput/>
      </div>
      <button onClick={() => navigate('/favorites')}>Click Here to Add Trials</button>
    </div>
  );
}

export default Profile;
