import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from './service/authService';
import { useAuth } from './service/authContext';
import styles from './AuthForm.module.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const { user } = await login(email, password);
      setUser(user);
      navigate('/profile');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className={styles.authForm}>
      <div className={styles.formHeader}>
        <h1>Login to MealLog</h1>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p className={styles.signUpPrompt}>
          Not a user yet? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
