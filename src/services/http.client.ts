import axios from "axios";
import router from "@/router";

const http = axios.create({
  baseURL: "https://chef-hub-vh6th.ondigitalocean.app/backend",
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user-token");
    if (token && config.headers) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("User was not authorized to backend taking them to login...");
      router.push({ path: "/login" });
    }
    Promise.reject(error);
  }
);

export default http;
