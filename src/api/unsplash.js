import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0b4ca2c911b76d8eb6ed3f444903df06df4f8b02e76c659357e7ea89625fad92'
  }
})
