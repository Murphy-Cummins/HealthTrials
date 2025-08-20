import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

const Header = () => {
    return (
        <Router>
            <div className="Header">
               {/* Navigation Links to the user's favorite trials and profile*/}
               <nav>
                 <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/profile">Profile</Link></li>
                 </ul>
               </nav>
       
               {/* Routing Setup */}
               <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/profile" element={<Profile />} />
               </Routes>
             </div>
        </Router> 
    );
}

export default Header;