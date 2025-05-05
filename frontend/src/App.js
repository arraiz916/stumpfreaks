import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <header className="navbar">
        <div className="logo">🌲 Stumpfreaks</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Appointments</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to Stumpfreaks</h1>
        <p>Professional stump grinding and tree removal services.</p>
        <button className="cta-button">Get a Free Estimate</button>
      </section>

      <section className="placeholder-section">
        <h2>Placeholder for Services Section</h2>
        <p>Describe key services offered here with icons or cards.</p>
      </section>

      <section className="placeholder-section">
        <h2>Placeholder for About Us Section</h2>
        <p>Short company intro, values, or mission can go here.</p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Stumpfreaks. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
