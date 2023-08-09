import axios from 'axios'

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const api = axios.create({ baseURL: BASE_URL });

export default api;