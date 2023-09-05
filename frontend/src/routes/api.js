import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getAllUsers = () => {
  return apiClient.get('/users');
};

export const getAllBusinesses = () => {
  return apiClient.get('/businesses');
};

export const getAllEvents = () => {
  return apiClient.get('/events');
}



export const createUser = (userData) => {
  return apiClient.post('/users', userData);
};

export const createBusiness = (businessData) => {
  return apiClient.post('/businesses', businessData);
};

export const createEvent = (eventData) => {
  return apiClient.post('/events', eventData);
}


export const getUserById = (userId) => {
  return apiClient.get(`/users/${userId}`);
};

export const getBusinessById = (businessId) => {
  return apiClient.get(`/businesses/${businessId}`);
};

export const getEventById = (eventId) => {
  return apiClient.get(`/events/${eventId}`);
}

export const deleteUserById = (userId) => {
  return apiClient.delete(`/users/${userId}`);
}

export const deleteBusinessById = (businessId) => {
  return apiClient.delete(`/businesses/${businessId}`);
};

export const deleteEventById = (eventId) => {
  return apiClient.delete(`/events/${eventId}`);
}


export const updateUserById = (userId, userData) => {
  return apiClient.put(`/users/${userId}`, userData);
}
export const updateBusinessById = (businessId, businessData) => {
  return apiClient.put(`/businesses/${businessId}`, businessData);
};

export const updateEventById = (eventId, eventData) => {
  return apiClient.put(`/events/${eventId}`, eventData);
}


export const createBusinessBranding = (businessBrandingData) => {
  return apiClient.post('/business-brandings', businessBrandingData);
}

export const getAllBusinessBrandings = () => {
  return apiClient.get('/business-brandings');
}

export const getBusinessBrandingById = (businessBrandingId) => {
  return apiClient.get(`/business-brandings/${businessBrandingId}`);
}

export const updateBusinessBrandingById = (businessBrandingId, businessBrandingData) => {
  return apiClient.put(`/business-brandings/${businessBrandingId}`, businessBrandingData);
}

export const deleteBusinessBrandingById = (businessBrandingId) => {
  return apiClient.delete(`/business-brandings/${businessBrandingId}`);
}

export const createEventBranding = (eventBrandingData) => {
  return apiClient.post('/event-brandings', eventBrandingData);
}

export const getAllEventBrandings = () => {
  return apiClient.get('/event-brandings');
}

export const getEventBrandingById = (eventBrandingId) => {
  return apiClient.get(`/event-brandings/${eventBrandingId}`);
}

export const updateEventBrandingById = (eventBrandingId, eventBrandingData) => {
  return apiClient.put(`/event-brandings/${eventBrandingId}`, eventBrandingData);
}

export const deleteEventBrandingById = (eventBrandingId) => {
  return apiClient.delete(`/event-brandings/${eventBrandingId}`);
}

export const createBusinessCategory = (businessCategoryData) => {
  return apiClient.post('/business-categories', businessCategoryData);
}

export const getAllBusinessCategories = () => {
  return apiClient.get('/business-categories');
}

export const getBusinessCategoryById = (businessCategoryId) => {
  return apiClient.get(`/business-categories/${businessCategoryId}`);
}

