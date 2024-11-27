import axios from "axios";

const REAL_API = 'http://localhost:5154/api';

export async function registerUser(userRequest) {
    try {
        const response = await axios.post(`${REAL_API}/Auth/register`, userRequest);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}

export async function login(loginRequest) {
    try {
        const response = await axios.post(`${REAL_API}/Auth/login`, loginRequest);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

export async function  getPhase(userId) {
    try {
        const response = await axios.get(`${REAL_API}/phase/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching phase:', error);
        throw error;
    }
}