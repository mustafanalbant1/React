import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "1da4551a94mshb2d0ea3c6aae539p1e1187jsn5d522b5f7382",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default api;
