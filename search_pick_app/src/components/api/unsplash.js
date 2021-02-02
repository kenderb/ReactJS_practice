import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID v3WwksA7Dfi68b-QDX33nnaTDhc6G61vFNnj0SoS4WM'
  }
});