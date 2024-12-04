import axios from "axios";

// Base API configuration
const REAL_API = "http://localhost:5154/api";

// Configure Axios globally for credentials
const axiosInstance = axios.create({
    baseURL: REAL_API,
    withCredentials: true, // Ensure cookies and credentials are included
});

export async function registerUser(userRequest) {
    try {
        const response = await axiosInstance.post("/Auth/register", userRequest);
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}

export async function login(loginRequest) {
    try {
        const response = await axiosInstance.post("/Auth/login", loginRequest);
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}

export async function logout() {
    try {
        const response = await axiosInstance.post("/Auth/logout");
        return response.data;
    } catch (error) {
        console.error("Error during logout:", error);
        throw error;
    }
}

export async function checkSession() {
    try {
        const response = await axiosInstance.get("/Auth/check-session");
        return response.data;
    } catch (error) {
        console.error("Error checking session:", error);
        throw error;
    }
}

export async function sendPhaseData(phaseData) {
    try {
        const response = await axiosInstance.post("/phase/add", phaseData);
        return response.data;
    } catch (error) {
        console.error("Error sending phase data:", error);
        throw error;
    }
}

export async function getPhase(userId) {
    try {
        const response = await axiosInstance.get(`/phase/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching phase:", error);
        throw error;
    }
}

export async function logPeriodDay(periodLogRequest) {
    try {
        const response = await axiosInstance.post("/api/phase/log-period-day", periodLogRequest);
        return response.data;
    } catch (error) {
        console.error("Error logging period day:", error);
        throw error;
    }
}