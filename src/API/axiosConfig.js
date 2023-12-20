import axios from 'axios';
//api starts
const api = axios.create({
  baseURL: 'https://80f4-2603-6080-6300-af37-1dd8-6901-4c53-c3ff.ngrok-free.app',
  headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;
