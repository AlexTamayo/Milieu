import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const ROUTES = {
  USERS: "/users",
  BUSINESSES: "/businesses",
  EVENTS: "/events",
  BUSINESS_BRANDINGS: "/business-brandings",
  EVENT_BRANDINGS: "/event-brandings",
  BUSINESS_CATEGORIES: "/business-categories"
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getAllUsers = () => {
  return apiClient.get(ROUTES.USERS);
};

export const getAllBusinesses = () => {
  return apiClient.get(ROUTES.BUSINESSES);
};

export const getAllEvents = () => {
  return apiClient.get(ROUTES.EVENTS);
}



export const createUser = (userData) => {
  return apiClient.post(ROUTES.USERS, userData);
};

export const createBusiness = (businessData) => {
  return apiClient.post(ROUTES.BUSINESSES, businessData);
};

export const createEvent = (eventData) => {
  return apiClient.post(ROUTES.EVENTS, eventData);
}


export const getUserById = (userId) => {
  return apiClient.get(`${ROUTES.USERS}/${userId}`);
};

export const getBusinessById = (businessId) => {
  return apiClient.get(`${ROUTES.BUSINESSES}/${businessId}`);
};

export const getEventById = (eventId) => {
  return apiClient.get(`${ROUTES.EVENTS}/${eventId}`);
}

export const deleteUserById = (userId) => {
  return apiClient.delete(`${ROUTES.USERS}/${userId}`);
}

export const deleteBusinessById = (businessId) => {
  return apiClient.delete(`${ROUTES.BUSINESSES}/${businessId}`);
};

export const deleteEventById = (eventId) => {
  return apiClient.delete(`${ROUTES.EVENTS}/${eventId}`);
}


export const updateUserById = (userId, userData) => {
  return apiClient.put(`${ROUTES.USERS}/${userId}`, userData);
}
export const updateBusinessById = (businessId, businessData) => {
  return apiClient.put(`${ROUTES.BUSINESSES}/${businessId}`, businessData);
};

export const updateEventById = (eventId, eventData) => {
  return apiClient.put(`${ROUTES.EVENTS}/${eventId}`, eventData);
}


export const createBusinessBranding = (businessBrandingData) => {
  return apiClient.post(ROUTES.BUSINESS_BRANDINGS, businessBrandingData);
}

export const getAllBusinessBrandings = () => {
  return apiClient.get(ROUTES.BUSINESS_BRANDINGS);
}

export const getBusinessBrandingById = (businessBrandingId) => {
  return apiClient.get(`${ROUTES.BUSINESS_BRANDINGS}/${businessBrandingId}`);
}

export const updateBusinessBrandingById = (businessBrandingId, businessBrandingData) => {
  return apiClient.put(`${ROUTES.BUSINESS_BRANDINGS}/${businessBrandingId}`, businessBrandingData);
}

export const deleteBusinessBrandingById = (businessBrandingId) => {
  return apiClient.delete(`${ROUTES.BUSINESS_BRANDINGS}/${businessBrandingId}`);
}

export const createEventBranding = (eventBrandingData) => {
  return apiClient.post(ROUTES.EVENT_BRANDINGS, eventBrandingData);
}

export const getAllEventBrandings = () => {
  return apiClient.get(ROUTES.EVENT_BRANDINGS);
}

export const getEventBrandingById = (eventBrandingId) => {
  return apiClient.get(`${ROUTES.EVENT_BRANDINGS}/${eventBrandingId}`);
}

export const updateEventBrandingById = (eventBrandingId, eventBrandingData) => {
  return apiClient.put(`${ROUTES.EVENT_BRANDINGS}/${eventBrandingId}`, eventBrandingData);
}

export const deleteEventBrandingById = (eventBrandingId) => {
  return apiClient.delete(`${ROUTES.EVENT_BRANDINGS}/${eventBrandingId}`);
}

export const createBusinessCategory = (businessCategoryData) => {
  return apiClient.post(ROUTES.BUSINESS_CATEGORIES, businessCategoryData);
}

export const getAllBusinessCategories = () => {
  return apiClient.get(ROUTES.BUSINESS_CATEGORIES);
}

export const getBusinessCategoryById = (businessCategoryId) => {
  return apiClient.get(`${ROUTES.BUSINESS_CATEGORIES}/${businessCategoryId}`);
}

