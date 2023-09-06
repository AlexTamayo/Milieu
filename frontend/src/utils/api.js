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

export const getUserById = (userId) => {
  return apiClient.get(`/users/${userId}`);
};

export const updateUserById = (userId, userData) => {
  return apiClient.put(`/users/${userId}`, userData);
}

export const deleteUserById = (userId) => {
  return apiClient.delete(`/users/${userId}`);
}

export const createBusiness = (businessData) => {
  return apiClient.post('/businesses', businessData);
};

export const getAllBusinesses = () => {
  return apiClient.get('/businesses');
};

export const getBusinessById = (businessId) => {
  return apiClient.get(`/businesses/${businessId}`);
};

export const updateBusinessById = (businessId, businessData) => {
  return apiClient.put(`/businesses/${businessId}`, businessData);
};

export const deleteBusinessById = (businessId) => {
  return apiClient.delete(`/businesses/${businessId}`);
};
