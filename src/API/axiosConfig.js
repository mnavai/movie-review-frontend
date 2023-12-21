import axios from 'axios';
import Layout from '../components/Layout';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;
