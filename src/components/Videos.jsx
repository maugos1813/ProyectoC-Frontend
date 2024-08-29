import React, { useContext, useEffect, useState } from 'react'
import { ExamContext } from '../context/ExamContext-';
import { Link } from 'react-router-dom';

export const Videos = () => {
    const { result } = useContext(ExamContext)
    const [video,setVideo] = useState([])

    useEffect(() => {
        const answer = result?.flatMap((rs) => {
          return rs.answers?.filter((as) => as.question_type === 'video')
        })
        setVideo(answer);
    }, [result])

    return (
        <main className=' w-full h-screen py-8 bg-sky-100 '>
            <h1 className='font-semibold text-[50px] text-center pb-4'>MIS VIDEOS</h1>

            <Link to={'/dashboard'} className='text-[20px] text-center px-8'>{'<'} Volver al Panel</Link>


            <section className='grid - grid-cols-3 py-4 px-8 gap-8 w-full'>
                {video &&
                    video.map((dato, index) =>


                    (
                        <section key={index} className='flex flex-col bg-[#F4F4F5] shadow-xl items-center justify-between rounded-2xl p-4 gap-4'>
                            <div className='flex flex-col'>
                                <h2 className='font-semibold text-[30px]' >{dato.question_id.exam_id}</h2>
                                <span className=''>Examen: {dato.question_id.statement}</span>
                            </div>
                            <div className="w-full h-full flex justify-center items-center ">
                                <video controls  src={`http://localhost:3000/api/video/videoR/${dato.answer}`} className=' text-white font-semibold rounded-3xl justify-center flex items-center ' />
                            </div>
                        </section>
                    )
                    )
                }
                

            </section>
        </main>
    )
}
