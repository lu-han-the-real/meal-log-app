import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My MealLog</h1>
        <p>Log your meals and track your nutrition with curated nutrition data and caring coaches.</p>
      </header>
      <div className="App-content">
        <Login />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
