import API from "./api";

export const login = async (email, password) => {
    try {
        const response = await API.post("/auth/login", { email, password });
        const token = response.data.token; // Assuming the token is returned as `token`
        if (token) {
            localStorage.setItem("token", token); // Save the token
        }
        return response.data; // Return other data, if needed
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};
