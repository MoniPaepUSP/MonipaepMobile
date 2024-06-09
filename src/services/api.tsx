import axios from 'axios';
// import {APP_URL} from "@env";

const api = axios.create({
    baseURL: "URL DO SERVIDOR DA USP AQUI"
})
export default api