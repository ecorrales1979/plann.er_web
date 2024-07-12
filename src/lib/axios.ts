import axios from "axios";

const baseURL: string = import.meta.env.VITE_API_URL;
console.log("baseURL", baseURL);

const api = axios.create({
  baseURL,
});

export { api };
