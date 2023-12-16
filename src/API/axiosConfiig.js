import axios from 'axios';

const api = axios.create({
  baseURL: 'https://57fa-2603-6080-6300-af37-1030-4241-8430-518d.ngrok-free.app',
  headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;
