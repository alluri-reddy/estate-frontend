import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://vasundara-realestate-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;