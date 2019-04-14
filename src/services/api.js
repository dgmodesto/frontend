import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistackdgm.herokuapp.com'
});

export default api;