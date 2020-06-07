import axios from 'axios';

const api = axios.create({
  baseURL: 'http://186.219.93.56:3333'
});

export default api;