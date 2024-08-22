import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const UserById = async (id) => {
    const user = await axios.get('http://localhost:3000/api/users/66c524b725f1875626d8db6b')
    return user
}

export const loginUser = async ({email, password}) => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            email,
            password,
        })
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

