import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const itemService = {
  // Get all items
  getAllItems: () => api.get('/items'),
  
  // Get single item
  getItem: (id) => api.get(`/items/${id}`),
  
  // Create new item
  createItem: (data) => api.post('/items', data),
  
  // Update item
  updateItem: (id, data) => api.put(`/items/${id}`, data),
  
  // Delete item
  deleteItem: (id) => api.delete(`/items/${id}`),
};
