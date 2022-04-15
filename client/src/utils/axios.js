// axios instance is used for re-use the base_url
import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEDN_URL;
const axiosInstance = axios.create({
  baseURL: baseURL
});

export default axiosInstance;
