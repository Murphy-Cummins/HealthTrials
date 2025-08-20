//import react states
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import style sheer
import './styles/App.css';
import CreateLogin from './components/CreateLogin';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
    <div className="centered-container">
      <div className="app-container">
        <main className="app-main">
          <Header />
          <section className="page-content">
            <Routes>
              <Route path="/create" element={<CreateLogin />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 HeathTrials. All rights reserved.</p>
        </footer>
      </div>
      </div>
      </Router>
  );
}

export default App;
