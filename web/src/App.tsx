import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import TopBar from './TopBar';
import { useAuth } from './service/authContext';

function App() {
  const { user } = useAuth();

  return (
    <>
      {user && <TopBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
