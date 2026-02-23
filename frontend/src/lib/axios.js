import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001"
      : "https://chat-app-backend-irvu.onrender.com",
  withCredentials: true,
});