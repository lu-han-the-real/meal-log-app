import apiClient from './apiClient';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

// Add more auth-related functions as needed
