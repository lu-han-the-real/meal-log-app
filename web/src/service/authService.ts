import apiClient from './apiClient';
import { User } from './authContext';

interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>('/login', { email, password });
    console.log('login response', response);
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export async function signUp(username: string, email: string, password: string) {
  // Replace with your actual API call
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error('Failed to sign up');
  }

  return response.json();
}

// Add more auth-related functions as needed
