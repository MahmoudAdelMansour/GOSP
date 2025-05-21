import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Now correctly reads the env var
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export const getScholarships = async () => {
    const response = await api.get("/scholarship");
    return response.data;
};

export default api;

// Example usage in a component:
/*
import { createScholarship } from './services/scholarshipService';

const newScholarship = {
  name: "New Scholarship",
  description: "This is a new scholarship",
  is_active: true,
  applicants: 0
};

createScholarship(newScholarship)
  .then(response => console.log('Created:', response.data))
  .catch(error => console.error('Error:', error));
*/