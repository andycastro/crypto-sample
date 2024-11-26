import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstance;
