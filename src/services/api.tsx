import axios from 'axios';

const api = axios.create({
    baseURL: 'http://143.107.183.158:3333'
})
export default api