import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-backend-theta.vercel.app/api",
  credentials: true,
});

export default apiRequest;
