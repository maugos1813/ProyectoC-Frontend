import React, { useContext } from 'react'
import { ExamContext } from '../context/ExamContext-';
import { Link } from 'react-router-dom';

export const Videos = () => {
// const {videos} = useContext(ExamContext)

 //   console.log(videos);
    return (
        <main className=' w-full h-[90%] py-8 bg-[#baf1cf] '>
            <h1 className='font-semibold text-[50px] text-center pb-4'>MIS VIDEOS</h1>
            <Link to={'/dashboard'} className='text-[20px] text-center px-8'>{'<'} Volver al Panel</Link>
           <video autoPlay src={`http://localhost:3000/api/video/videoR/1724442447290-1724356206391-Gato bailando diriri da diri dou dou.mp4`}/>
           
           
            {/* <section className='grid - grid-cols-2 py-4 px-8 gap-8 w-full'>
                {videos &&
                    videos.map((dato, index) =>

                    (
                        <section key={index} className='flex flex-row bg-[#F4F4F5] shadow-xl items-center justify-between rounded-2xl p-4 gap-4'>
                            <div className='flex flex-col'>
                                <h2 className='font-semibold text-[35px]' >{dato.title}</h2>
                                <span className=''>Examen: {dato.exam_id.name}</span>
                            </div>
                            <div className="w-full h-full flex justify-end items-center ">
                                <img src={`/exam/${dato._id}`} className='bg-[#0A8537] text-white font-semibold w-[8rem] h-[30%] rounded-3xl justify-center flex items-center hover:bg-[#1f6e3c]'/> 
                                </div>
                        </section>
                    )
                    )
                }

            </section> */}
        </main>
    )
}
