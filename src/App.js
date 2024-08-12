import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container mt-3">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to the Hospital Registration System</h2>
  </div>
);

export default App;
