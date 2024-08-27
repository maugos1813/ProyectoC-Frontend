import axios from "axios";

export const UserById = async (id) => {
    const user = await axios.get('http://localhost:3000/api/users/66c524b725f1875626d8db6b')
    return user
}

export const loginUser = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', data)
        return response
        
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message)
        throw error
    }
}

export const infoUser = async () => {
    const token = localStorage.getItem('tokenLogin')
    const info = await axios.get('http://localhost:3000/api/auth/me', {
        headers: { Authorization: token }
    })
    return info.data
}

export const examenes = async () => {
    
    const examens = await axios.get('http://localhost:3000/api/exams')
    return examens.data
}

export const videosAll = async () => {
    
    const video = await axios.get('http://localhost:3000/api/video')
    return video.data
}


export const getAll = async () => {
    const response = await axios.get('http://localhost:3000/api/users/');
    return response.data;
};

export const getLevels = async () => {
    const level = await axios.get('http://localhost:3000/api/levels/all/')
    return level.data
}

/* export const videosName = async () => {
    
    const video = await axios.get('http://localhost:3000/api/video/videoR/s{}')
    return video.data
} */




