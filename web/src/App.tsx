import React from 'react';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My MealLog</h1>
        <p>Log your meals and track your nutrition with curated nutrition data and caring coaches.</p>
        <Login />
      </header>
    </div>
  );
}

export default App;
