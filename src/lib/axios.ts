import axios from "axios";

const baseURL: string = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
});

export { api };
