import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const { user } = useContext(AuthContext)
   // console.log(user);

    return (
        <main className='p-8'> 
            <h1>Bienvenido {user?.firstName}</h1>
            <h2>Nivel: {user?.level_id}</h2>
            <Link className='bg-orange-400 text-white ' to={'/examenes'}>examenes</Link>
        </main>
    )
}
