import axios from "axios";

export const UserById = async (id) => {
    const user = await axios.get('http://localhost:3000/api/users/66c524b725f1875626d8db6b')
    console.log(user);
    return user
}

export const loginUser = async ({email, password}) => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            email,
            password,
        })
        console.log(response)
        return response
        
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message)
        throw error
    }
}