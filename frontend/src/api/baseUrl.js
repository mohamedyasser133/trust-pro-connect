import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const baseUrl = axios.create({ baseURL: backendUrl })