import axios from 'axios';
//api starts
const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;
