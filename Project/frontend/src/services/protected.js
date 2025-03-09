export const getProtectedData = async () => {
    try {
        const response = await API.get("/protected-route");
        return response.data;
    } catch (error) {
        console.error("Error fetching protected data:", error);
        throw error;
    }
};
