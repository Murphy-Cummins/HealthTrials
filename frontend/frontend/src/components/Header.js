import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Favorites from "./Favorites";
import Login from "./Login";
import ImageSwitcher from "./ImageSwitcher";

const Header = () => {

  const navigate = useNavigate();

    return (
            <div className="Header">
               {/* Navigation Links to the user's favorite trials and profile*/}
               <nav style={
                {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  height: '50px',
                }
               }>
                <div style={ 
                  {
                    position: 'absolute',
                    left: '20px',
                  }
                }>
                <button onClick={() => navigate('/login')}>Login</button>
                </div>
                 <ul style={
                  {
                    display: 'flex',
                    listStyle: 'none',
                    gap: '20px',
                    margin: 0,
                    padding: 0,
                  }
                 }>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
                  </ul>
                 </nav>

               <ImageSwitcher/>
               {/* Routing Setup */}
               <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/profile" element={<Profile />} />
                 <Route path="/favorites" element={<Favorites />} />
                 <Route path="/login" element={<Login />} />
               </Routes>
             </div>
    );
}

export default Header;