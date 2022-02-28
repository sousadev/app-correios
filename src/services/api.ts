import axios from 'axios';

// import { Container } from './styles';

const Api = axios.create({
  baseURL: 'http://localhost:3005',
  // baseURL: 'https://api-correios-sousadev.herokuapp.com',
});

export default Api;
