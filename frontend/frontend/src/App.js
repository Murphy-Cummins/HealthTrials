//import react states
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//import style sheer
import './styles/App.css';

//import website components
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
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

export default App;
