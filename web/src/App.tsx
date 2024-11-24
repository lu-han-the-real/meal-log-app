import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import './App.css';
import { useAuth } from './service/authContext';
import Home from './Home';

function App() {
  const { user } = useAuth();

  console.log('User state:', user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
