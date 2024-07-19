import axios from 'axios';

const profileService = {
    getProfile: async (token) => {
        const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Response:', response);
        return response.data;
    },
    updateProfile: async (profileData, token) => {
        const response = await axios.put('http://127.0.0.1:8000/api/profile/', profileData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
};

export default profileService;
