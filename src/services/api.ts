import axios from 'axios';

// import { Container } from './styles';

const Api = axios.create({
  baseURL: 'https://api-correios-sousadev.herokuapp.com',
});

export default Api;
