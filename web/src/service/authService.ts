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

// Add more auth-related functions as needed
