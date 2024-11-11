import axios from 'axios';
// Create an axios instance with default settings
const API_URL = 'http://localhost:8080/';
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, add request/response interceptors
apiClient.interceptors.request.use(
  (config) => {
    // Modify request config if needed, e.g., add auth token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default apiClient; 
