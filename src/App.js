// src/App.js
import React from 'react';
import './App.css';
import logoImage from './images/undergradlogo.png';
import squareImage1 from './images/1become_a_tutor.png';
import squareImage2 from './images/2_book_sessions.png';
import squareImage3 from './images/3_join_communities.png';
import Why from './images/Why.png';
import whypt2 from './images/whypt2.png';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logoImage} alt="Your System Logo" style={{ height: 'auto', maxWidth: '100%' }} />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Tutors</li>
            <li>Join the Community</li>
            <li>Question Bank</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>First Collaborative Hub for university students in Sri Lanka</h1>
        <button>About Us</button>
        <div className="square-container">
          <div className="square">
            <img src={squareImage1} alt="Square 1" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <div className="square">
            <img src={squareImage2} alt="Square 2" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <div className="square">
            <img src={squareImage3} alt="Square 3" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div className="additional-images">
          <img src={Why} alt="WHY" />
          <img src={whypt2} alt="Additional Image 2" />
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Your System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
