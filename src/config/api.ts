import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL:BASE_URL,
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": API_HOST,
  },
});
export default api;