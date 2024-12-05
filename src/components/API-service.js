import axios from 'axios';

const API_BASE_URL = 'http://localhost:8282/api'; // Adjust this to your Spring Boot server URL

export const saveProfile = async (profileData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/profile`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error saving profile:', error);
    throw error;
  }
};