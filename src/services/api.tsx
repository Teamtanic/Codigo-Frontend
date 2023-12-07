import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://silver-doodle-jpq5qp66rpvhjjv6-8081.app.github.dev/',
  headers: {
    'Content-Type': 'application/json',
  },
});
