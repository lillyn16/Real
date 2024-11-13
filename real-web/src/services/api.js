import axios from "axios";

export async function  getPhase(userId) {
    const response = await axios.get(`http://localhost:5154/api/phase/${userId}`);
    return response.data;
}