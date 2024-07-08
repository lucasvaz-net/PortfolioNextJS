import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolioapi.lucasvaz.dev.br/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
