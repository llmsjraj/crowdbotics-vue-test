import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const setAuthHeader = (key: string) => {
  console.log(apiClient.defaults.headers, "=== before");
  apiClient.defaults.headers.common['X-CSRF-TOKEN'] = key;
  console.log(apiClient.defaults.headers, "=== after");
}

export default apiClient;
