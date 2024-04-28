import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-backend-theta.vercel.app/api",
});

// Function to get JWT token from localStorage or wherever you store it
const getToken = () => {
  return localStorage.getItem("jwtToken");
};

// Request interceptor to add JWT token to each request
apiRequest.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default apiRequest;
