import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-backend-theta.vercel.app/api",
});

export default apiRequest;
