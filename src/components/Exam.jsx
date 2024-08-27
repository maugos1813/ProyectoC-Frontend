import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import exams from './../examenCompleto.json'
import { Link, useParams } from 'react-router-dom';
import fondo from "../public/lice.jpeg";

export const Exam = () => {
    const { id } = useParams()
    const [exam, setExam] = useState({})

    useEffect(() => {
        const examen = async () => {

            const examens = await axios.get(`http://localhost:3000/api/exams/${id}`)

            setExam(examens.data)

        }
        examen()
    }, [id])

    console.log(exam);

    function formRpta(e) {
        e.preventDefault()

        const formData = new FormData(e.target);
        const dataAns = {};

        formData.forEach((value, key) => {
            dataAns[key] = value
        })
        
        console.log(dataAns);

    }



    return (
        <main className='w-full h-full flex flex-col p-8 gap-8 border-[1px] bg-[#baf1cf] bg-cover bg-center'
        style={{ backgroundImage: `url(${fondo})` }}
        >
            <section className='w-full  flex flex-col gap-8 ' >
                <h1 className='font-semibold text-center text-[2.5rem]'>{exam?.name}</h1>
                {/*  <h3 className='font-semibold text-center text-[1.5rem]'>Prof. {exam.autor}</h3> */}
                <Link className='text-[1.2rem]' to={'/examenes'}>{'<'}Volver a Examenes</Link>

                <form onSubmit={formRpta} className='w-full flex flex-col gap-4 bg-white rounded-2xl p-8'>
                    <h2 className='font-semibold text-[1.5rem]'>PREGUNTAS</h2>
                    {(exam) &&
                        exam.questions?.map((q, index) => (

                            <div key={index} >
                                {
                                    (q.type === "multiple-choice") &&
                                    <div className='flex flex-col gap-4'>
                                        <span className='font-semibold'>{q.statement}</span>
                                        {
                                            q.options.map((op, index) => (
                                                <div key={index} className="flex flex-row gap-4">
                                                    <input id={index} value={op} name={q._id} type="radio" />
                                                    <label htmlFor={index}>{op}</label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }

                                {(q.type === "open") &&
                                    <div className='flex flex-col gap-4'>

                                        {
                                            <div className="flex flex-col gap-4">
                                                <span className='font-semibold'>{q.statement}</span>
                                                <textarea name={q._id} id="respuesta" cols="20" rows="5" placeholder='Respuesta' className=' outline-1 outline-[#0A8537] rounded-xl p-4 bg-[#def5e6]'></textarea>
                                            </div>
                                        }
                                    </div>
                                }



                                {(q.type === "video") &&
                                    <div className='flex flex-col gap-4'>

                                        {
                                            <div className="flex flex-col gap-4">
                                                <span className='font-semibold'>{q.statement}</span>
                                                <Link to={'/Recording'} className='bg-sky-300  rounded-xl p-3 text-white text-center font-semibold'>Grabar video</Link>

                                            </div>
                                        }

                                    </div>

                                }
                            </div>))
                    }
                    <button type='submit' className='bg-blue-500  rounded-xl p-3 text-white font-semibold'>Enviar Respuestas</button>
                </form>
            </section>

        </main >
    )
}
