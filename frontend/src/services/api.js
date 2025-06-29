import axios from 'axios';
// Add this to your existing API exports
export const getAssignedComplaints = () => API.get('/complaints/assigned');

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

// Add request interceptor for auth token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Complaint APIs
export const createComplaint = (data) => API.post('/complaints', data);
export const getComplaints = () => API.get('/complaints');
export const updateComplaintStatus = (id, status) => API.patch(`/complaints/${id}`, { status });

// Auth APIs
export const login = (credentials) => API.post('/login', credentials);
export const register = (userData) => API.post('/register', userData);

// Admin APIs
export const getUsers = () => API.get('/admin/users');
export const getAgents = () => API.get('/admin/agents');