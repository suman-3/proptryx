import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL!;

export const FranchiseApiInstance = axios.create({
    baseURL: `${API_URL}/api/franchise`,
    headers: {
        "Content-Type": "application/json",
    },
});

export const TrackingApi = axios.create({
    baseURL: `${API_URL}/api/ordertrack`,
    headers: {
        "Content-Type": "application/json",
    },
});
