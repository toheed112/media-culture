import axios from 'axios';

const api = axios.create({
    baseURL: 'https://1a1f-2409-4081-9bce-1637-e8dd-caaa-9e1b-967d.ngrok-free.app',  // New ngrok URL
    headers: { "ngrok-skip-browser-warning": "true" }
});

export default api;
