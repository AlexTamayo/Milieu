import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createUser = (userData) => {
  return apiClient.post('/users', userData);
};

export const getAllUsers = () => {
  return apiClient.get('/users');
};

export const getMarkers = () => {
  return apiClient.get('/markers'); // still need markers route in backend
};

export const addMarker = (markerData) => {
  return apiClient.post('/markers', markerData);
};

export const updateMarker = (markerId, updatedData) => {
  return apiClient.put(`/markers/${markerId}`, updatedData);
};

export const deleteMarker = (markerId) => {
  return apiClient.delete(`/markers/${markerId}`);
};
