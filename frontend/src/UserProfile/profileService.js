    // profileService.js

    import axios from 'axios';
    import authService from '../AuthService';

    const API_URL = 'http://localhost:8000/api/';  // Replace with your Django API URL

    const getProfile = async () => {
    const accessToken = authService.getAccessToken();
    if (!accessToken) {
        throw new Error('No access token found');
    }

    try {
        const response = await axios.get(`${API_URL}profile/`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
    };

    const updateProfile = async (profileData) => {
    const accessToken = authService.getAccessToken();
    if (!accessToken) {
        throw new Error('No access token found');
    }

    try {
        const response = await axios.put(`${API_URL}profile/`, profileData, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
    };

    export default {
    getProfile,
    updateProfile,
    };
