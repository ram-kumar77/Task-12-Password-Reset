import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export const authService = {
  signup: async (userData) => {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    return response.data;
  },

  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    return response.data;
  },

  logout: () => {
    setAuthToken(null);
  },

  forgotPassword: async (email) => {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    const response = await axios.post(`${API_URL}/auth/reset-password`, { 
      token, 
      newPassword 
    });
    return response.data;
  }
};