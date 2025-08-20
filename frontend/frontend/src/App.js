//import react states
import React from 'react';
import Header from './components/Header';


//import style sheer
import './styles/App.css';

function App() {
  return (
    <div className="centered-container">
      <div className="app-container">
        <main className="app-main">

          <section className="page-content">
            <Header />
          </section>
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 HeathTrials. All rights reserved.</p>
        </footer>
      </div>
      </div>
  );
}

export default App;
