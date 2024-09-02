import React, { useContext, useEffect, useState } from 'react'
import { ExamContext } from '../context/ExamContext-';
import { Link } from 'react-router-dom';
import fondo from "../public/lice.jpeg";


export const Calificaciones = () => {
    const { score } = useContext(ExamContext)

    useEffect(() => {
        console.log(score);

    }, [score])

    return (
        <div
            className="flex flex-col border bg-gray-900 h-[130vh] bg-cover bg-center mt-2"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className="w-[90%] h-[90%] absolute inset-0 m-auto mt-[15vh]">
                <div className="flex gap-4">
                    <div className="flex justify-start mb-4">
                        <Link
                            to={'/dashboard'}
                            className="text-white bg-sky-500 h-[6vh] border-[2px] px-4 py-2 rounded-2xl hover:bg-sky-700 font-semibold flex items-center shadow-lg"
                        >
                            Volver
                        </Link>
                    </div>

                    <div className="bg-sky-500 text-white border-[2px] text-[20px] font-bold h-[6vh] w-[95%] flex justify-center items-center shadow-xl rounded-2xl">
                        Mis Calificaciones
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="flex w-full h-[8vh] rounded-xl items-center bg-sky-300 text-center font-semibold">
                        <li className="flex-1 ">Examen</li>
                        <li className="flex-1 ">Fecha</li>
                        <li className="flex-1 ">Calificacion</li>
                    </ul>
                </div>

                <div className="mt-[15px]">
                    {score?.map((sc) => (
                        <div
                            className="flex text-center border-b items-center h-[8vh] shadow-lg rounded-xl bg-white mt-2"
                            key={sc._id}
                        >
                            <div className="flex-1 ">{sc.exam_id.name}</div>
                            <div className="flex-1 ">
                                {new Date(sc.date).toLocaleDateString('es-ES', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}
                            </div>
                            <div className="flex-1 ">{sc.score}</div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}






{/* <div className="mt-4">
<ul className="flex w-full h-[8vh] rounded-xl items-center bg-sky-300 text-center font-semibold">
    <li className="flex-1 ">Nombre</li>
    <li className="flex-1 ">Fecha</li>
    <li className="flex-1 ">Calificacion</li>
    <li className="flex-1 ">Estado</li>
</ul>
</div>

<div className="mt-[15px]">
{score?.map((sc) => (
    <div
        className="flex text-center border-b items-center h-[8vh] shadow-lg rounded-xl bg-white mt-2"
        key={sc._id}
    >
        <div className="flex-1 ">{sc.exam_id.name}</div>
        <div className="flex-1 ">{sc.date}</div>
        <div className="flex-1 ">{sc.score}</div>
        <div className="flex-1 ">{sc.status}</div>
    </div>
))}
</div> */}
