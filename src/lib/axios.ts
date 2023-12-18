import axios from "axios";
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);
export const axiosInstance = axios;
export const updateUserAuthId = (id: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = id || "";
};
