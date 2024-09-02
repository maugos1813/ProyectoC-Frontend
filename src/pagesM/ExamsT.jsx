import React, { useContext } from 'react'
import fondo from "../public/lice.jpeg";
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const ExamsT = () => {
    const {user } = useContext(AuthContext)

    return (
        <div
            className=" flex flex-col gap-2 h-screen bg-cover bg-center mt-2"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className="flex gap-2 mt-3">
                <div className="flex-1 border border-sky-400 flex justify-center h-[40vh] rounded-3xl items-center bg-white bg-opacity-70">
                    <Link to='/course/A1' className="border-sky-400 border flex items-center justify-center h-[8vh] w-[20vh]">Elementary</Link>
                </div>
                <div className="flex-1 border border-sky-400 flex justify-center rounded-3xl items-center bg-white bg-opacity-70">
                    <Link to='/course/A2' className="border-sky-400 border flex items-center justify-center h-[8vh] w-[20vh]">A2</Link>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1 border border-sky-400 flex justify-center h-[40vh] rounded-3xl items-center bg-white bg-opacity-70">
                    <Link to='/course/B1' className="border-sky-400 border flex items-center justify-center h-[8vh] w-[20vh]">B1</Link>
                </div>
                <div className="flex-1 border border-sky-400 flex justify-center rounded-3xl items-center bg-white bg-opacity-70">
                    <Link to='/course/B1' className="border-sky-400 border flex items-center justify-center h-[8vh] w-[20vh]">B2</Link>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1 border border-sky-400 flex justify-center h-[40vh] rounded-3xl items-center bg-white bg-opacity-70">
                    <Link to='/course/C1' className="border-sky-400 border flex items-center justify-center h-[8vh] w-[20vh]">C1</Link>
                </div>
                <div className="flex-1 border border-sky-400 flex justify-center rounded-3xl items-center bg-white bg-opacity-70">
                    <Link to='/course/C2' className="border-sky-400 border flex items-center justify-center h-[8vh] w-[20vh]">C2</Link>
                </div>
            </div>
        </div>
    )
}
