import axios from "axios";

export const UserById = async (id) => {
    const user = await axios.get('http://localhost:3000/api/users/66c524b725f1875626d8db6b')
    console.log(user);
    return user
}
