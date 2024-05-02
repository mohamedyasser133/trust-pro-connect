import React from 'react';
import './App.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#">TrustPro</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Signin</a></li>
      </ul>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="How can I help you" />
    </div>
  );
}

function Suggestions() {
  return (
    <div className="suggestions">
      <h3>Do you need any of these services?</h3>
      <ul>
        <li>Do you want an electrician?</li>
        <li>How to repair anything?</li>
        <li>Do you want a carpenter?</li>
        <li>Do you want a plumber?</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <Suggestions />
    </div>
  );
}

export default App;