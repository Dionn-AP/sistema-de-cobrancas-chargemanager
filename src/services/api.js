import axios from 'axios';

export default axios.create({
    baseURL: 'https://charge-manager-server.onrender.com',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});