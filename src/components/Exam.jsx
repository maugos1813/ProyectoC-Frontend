import React from 'react'
import exams from './../examenCompleto.json'
import { Link, useParams } from 'react-router-dom';

export const Exam = () => {

    const { id } = useParams()

    const exam = exams.find((exam) => exam.id === parseInt(id))

    return (
        <main className='w-full h-full flex flex-col p-8 gap-8 border-[1px] bg-[#baf1cf]'>
            {/* <section className='w-full  flex flex-col gap-8 ' >
                <h1 className='font-semibold text-center text-[2.5rem]'>{exam.name}</h1>
                <h3 className='font-semibold text-center text-[1.5rem]'>Prof. {exam.autor}</h3>
                <Link className='text-[1.2rem]' to={'/'}>{'<'}Volver a Examenes</Link>

                <section className='w-full flex flex-col gap-4 bg-white rounded-2xl p-8'>
                    <h2 className='font-semibold text-[1.5rem]'>PREGUNTAS</h2>
                    {
                        exam.questions.map((q,index) => (

                            <div key={index} >
                                {
                                    (q.type === "multiple") &&
                                    <div className='flex flex-col gap-4'>
                                        <span className='font-semibold'>{q.pregunta}</span>
                                        {
                                            q.opciones.map((op, index) => (
                                                <div key={index} className="flex flex-row gap-4">
                                                    <input id={index} type="checkbox" /> <label htmlFor={index}>{op}</label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }

                                {(q.type === "simple") &&
                                    <div className='flex flex-col gap-4'>

                                        {
                                            <div className="flex flex-col gap-4">
                                                <span className='font-semibold'>{q.pregunta}</span>
                                                <textarea name="respuesta" id="respuesta" cols="20" rows="5" placeholder='Respuesta' className=' outline-1 outline-[#0A8537] rounded-xl p-4 bg-[#def5e6]'></textarea>
                                            </div>
                                        }
                                    </div>
                                }



                                {(q.type === "video") &&
                                    <div className='flex flex-col gap-4'>

                                        {
                                            <div className="flex flex-col gap-4">
                                                <span className='font-semibold'>{q.pregunta}</span>
                                                <Link to={'/video'} className='bg-[#0A8537]  rounded-xl p-3 text-white text-center font-semibold'>Grabar video</Link>

                                            </div>
                                        }

                                    </div>

                                }
                            </div>))
                    }
                    <button className='bg-[#0A8537]  rounded-xl p-3 text-white font-semibold'>Enviar Respuestas</button>
                </section>
            </section> */}

        </main >
    )
}
