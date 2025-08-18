import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Favorites from '../components/Favorites';

function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p>Here you can manage your profile and information.</p>

      <Favorites />
    </div>
  );
}

export default Profile;
