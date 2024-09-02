import axios from "axios";

const BASE_URL = 'http://localhost:3000/api'

export const UserById = async (id) => {
    const user = await axios.get(`${BASE_URL}/users/${id}`)
    return user
}

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, data)
        return response
        
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message)
        throw error
    }
}

export const infoUser = async () => {
    const token = localStorage.getItem('tokenLogin')
    const info = await axios.get(`${BASE_URL}/auth/me`, {
        headers: { Authorization: token }
    })
    return info.data
}

export const examenes = async () => {
    const examens = await axios.get(`${BASE_URL}/api/exams`)
    return examens.data
}

export const createExam = async (examData) => {
    try {
        const token = localStorage.getItem('tokenLogin');
        if (!token) {
            throw new Error('No authentication token found');
        }
        const response = await axios.post(`${BASE_URL}/exams`, examData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating exam:', error.response?.data || error.message);
        throw error;
    }
}

export const videosAll = async () => {
    const video = await axios.get(`${BASE_URL}/video`)
    return video.data
}

export const getAll = async () => {
    const response = await axios.get(`${BASE_URL}/users/`);
    return response.data;
};

export const getLevels = async () => {
    const level = await axios.get(`${BASE_URL}/levels/all/`)
    return level.data
}

/* export const videosName = async () => {
    const video = await axios.get('http://localhost:3000/api/video/videoR/s{}')
    return video.data
} */