import axios from 'axios'

if (process.env.VUE_APP_API_URL) {
  console.log('VUE_APP_API_URL is set to:', process.env.VUE_APP_API_URL);
} else {
  console.error('VUE_APP_API_URL is not set. Please check your environment configuration.');
} 

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add request interceptor for debugging
api.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
});

// Add response interceptor for debugging
api.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response.data, null, 2))
  return response
}, error => {
  console.log('Error Response:', error.response ? error.response.data : error.message)
  return Promise.reject(error)
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user-token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;