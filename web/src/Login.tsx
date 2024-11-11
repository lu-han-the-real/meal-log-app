import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './service/authService'; // Adjust the path as necessary
import { useAuth } from './service/authContext'; // Adjust the path as necessary
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Use context to set user information

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const { user } = await login(email, password);
      setUser(user); // Store user information in context
      navigate('/profile');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
