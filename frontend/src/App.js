import React, { useState } from 'react';
import './App.css';

const slides = [
  { before: "/images/IMG_7710.jpg", after: "/images/IMG_7711.jpg" },
  { before: "/images/IMG_7712.jpg", after: "/images/IMG_7713.jpg" },
  { before: "/images/IMG_7714.jpg", after: "/images/IMG_7715.jpg" },
  { before: "/images/IMG_7716.jpg", after: "/images/IMG_7717.jpg" },
  { before: "/images/IMG_7623.jpg", after: "/images/IMG_7624.jpg" },
  { before: "/images/IMG_8065.jpg", after: "/images/IMG_8067.jpg" },
  { before: "/images/IMG_8158.jpg", after: "/images/IMG_8159.jpg" }
];

function App() {
  return (
    <div className="main-container">
      <header className="navbar">
        <div className="logo">🌲 StumpFreaks</div>
        <nav className="nav-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <Home />
    </div>
  );
}

function Home() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className="hero">
        <h1>Welcome to StumpFreaks</h1>
        <h2>Professional Stump Grinding and Arboring Services.</h2>
      </section>

      <section className="gallery-section">
        <h2>Before & After</h2>
        <div className="slider">
          <button className="nav-button" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>&#8592;</button>
          <div className="slide">
            <div className="image-pair">
              <img src={slides[index].before} alt="Before" />
              <img src={slides[index].after} alt="After" />
            </div>
          </div>
          <button className="nav-button" onClick={() => setIndex((index + 1) % slides.length)}>&#8594;</button>
        </div>
      </section>

      <section className="placeholder-section" id="about">
        <h2>About Us</h2>
        <p>
          StumpFreaks is a locally owned and operated mobile stump grinding service dedicated to helping
          homeowners and businesses clear out<br />unsightly stumps quickly and professionally. We bring our tools to you — no matter where you are!
        </p>
        <h2 id="contact">Contact</h2>
        <div className="contact-details">
          <div><span className="label">Business Owner:</span><span className="value">David Murillo</span></div>
          <div><span className="label">Phone:</span><span className="value"><a href="tel:9165192068">916-519-2068</a></span></div>
          <div><span className="label">Location:</span><span className="value">Mobile Service – Serving the Greater Sacramento Area</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <p>
          Follow us on Instagram:{" "}
          <a
            href="https://www.instagram.com/stump_freaks"
            target="_blank"
            rel="noopener noreferrer"
          >
            @stump_freaks
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
