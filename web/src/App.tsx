import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './service/authContext'; // Adjust the path as necessary
import Login from './Login';
import Profile from './Profile';
import './App.css';

function App() {
  const { user } = useAuth();

  console.log('User state:', user);
  return (
    // <Router>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
        {/* <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} /> */}
        {/* Add other routes here */}
      </Routes>
    // </Router>
  );
}

export default App;
