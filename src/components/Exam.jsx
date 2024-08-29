import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
//import exams from './../examenCompleto.json'
import { Link, useParams } from 'react-router-dom';

import fondo from "../public/lice.jpeg";

import { RecordView } from './RecordVideo';
import { ExamContext } from '../context/ExamContext-';
import { AuthContext } from '../context/AuthContext';


export const Exam = () => {
    const { id } = useParams()
    const [exam, setExam] = useState({})
    const { newVideo, sendExam } = useContext(ExamContext)

    useEffect(() => {
        const examen = async () => {

            const examens = await axios.get(`http://localhost:3000/api/exams/${id}`)

            setExam(examens.data)
            console.log(examens.data);
        }
        examen()
    }, [id])

    async function formRpta(e) {
        e.preventDefault()
        const answer = []
        exam.questions.forEach(p => {
            const inputs = e.target[p._id]

            answer.push({
                question_id: p._id,
                question_type: p.type,
                answer: p.type === 'video' ? 'null' : inputs.value

            })

        })
        const formData = new FormData();
        formData.append('student_id', exam.user_id)
        formData.append('exam_id', id)
        formData.append('answers', JSON.stringify(answer))
        formData.append('video', newVideo, `video de ${id}.mp4`)

        await sendExam.mutateAsync(formData)

        const dataAns = {};

        formData.forEach((value, key) => {
            dataAns[key] = value
        })

        console.log(dataAns);

    }



    return (
        <main className='w-full h-full flex flex-col p-8 gap-8 border-[1px] bg-sky-400  bg-cover bg-center'
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <section className='w-full h-full flex flex-col gap-8 ' >
                <h1 className='font-semibold text-center text-[2.5rem]'>{exam?.name}</h1>
                {/*  <h3 className='font-semibold text-center text-[1.5rem]'>Prof. {exam.autor}</h3> */}
                <Link className='text-[1.2rem]' to={'/examenes'}>{'<'}Volver a Examenes</Link>

                <form onSubmit={formRpta} className='w-full h-full flex flex-col gap-4 bg-white rounded-2xl p-8'>
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

                                                <label htmlFor='open' className='font-semibold'>{q.statement}</label>
                                                <input id='open' name={q._id} placeholder='Respuesta' className=' outline-1 outline-sky-400 rounded-xl p-4 bg-[#D9ECFD] ' />

                                            </div>
                                        }
                                    </div>
                                }



                                {(q.type === "video") &&
                                    <div className='flex flex-col gap-4'>

                                        {
                                            <div className="flex flex-col gap-4">
                                                <span className='font-semibold'>{q.statement}</span>

                                            </div>
                                        }

                                    </div>

                                }
                            </div>))

                    }
                    <RecordView />

                    <button type='submit' className='bg-sky-400 rounded-xl p-3 text-white font-semibold'>Enviar Respuestas</button>
                </form>
            </section>

        </main >
    )
}
