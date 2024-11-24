import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from './service/authService'; // Adjust the path as necessary
import { useAuth } from './service/authContext'; // Adjust the path as necessary
import styles from './SignUp.module.scss';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const { user } = await signUp(username, email, password);
      setUser(user);
      navigate('/login');
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className={styles.SignUp}>
      <div className={styles.signUpHeader}>
        <h1>Sign Up for MealLog</h1>
      </div>
      <div className={styles.signUpContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
