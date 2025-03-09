import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // Replace with your API's base URL
});

// Add token to request headers
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token has expired or is invalid
            console.error("Unauthorized! Redirecting to login...");
            localStorage.removeItem("token"); // Remove the token
            window.location.href = "/login"; // Redirect to login page
        }
        return Promise.reject(error);
    }
);


export default API;
