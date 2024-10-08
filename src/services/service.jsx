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

export const resultsAll = async (userId) => {
    try {
        const result = await axios.get(`http://localhost:3000/api/results/students/${userId}`)
        return result.data
    } catch (error) {
        console.log(error.response.data.message);
    }
   
}

export const getAll = async () => {
    const response = await axios.get('http://localhost:3000/api/users/');
    return response.data;
}

export const getLevels = async () => {
    const level = await axios.get('http://localhost:3000/api/levels/all/')
    return level.data
}

export const sendExamn = async (data) => {
    
    const video = await axios.post('http://localhost:3000/api/results/',data)
    return video.data
}

export const upExamn = async (data) => {
    const pId = localStorage.getItem('ParEx')

    const exam = await axios.patch(`http://localhost:3000/api/exams/${pId}`,data)
    return exam.data
}




