import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:5000',
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

export default api;