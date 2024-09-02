import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ExamContext } from '../context/ExamContext-'

export const Level = () => {
    const { name } = useParams()
    const { data } = useContext(ExamContext)
    const [course, setCourse] = useState([])

    useEffect(() => {
        if (data && name) {
            const cour = data.filter((ex) => ex.level_id.name === name)
            setCourse(cour)
            console.log(cour);
        }
    }, [data, name])

     return (
         <main className=' w-full h-full py-8 bg-sky-100  rounded-3xl mt-3'>
             <h1 className='font-semibold text-[50px] text-center pb-4'>Examenes</h1>
 
             <Link to={'/courses'} className='text-[20px] w-fit font-semibold text-center px-8'>{'<'} Volver a Cursos</Link>
             <section className='grid grid-cols-2 py-4 px-8 gap-8 w-full'>
                 {course &&
                     course.map((dato, index) =>
 
                     (
                         <section key={index} className='flex flex-row bg-[#F4F4F5] shadow-xl items-center justify-between rounded-2xl p-4 gap-4'>
                             <div className='flex flex-col'>
                                 <h2 className='font-semibold text-[35px]' > {dato.name}</h2>
                                 <span className=''><strong>Name:</strong> {dato.name}</span>
                                 <span className=''><strong>Level:</strong> {dato.level_id.sub_name}</span>
                             </div>
                             <div className="w-full h-full flex justify-end items-center ">
                                 <Link to={`/edit/${dato._id}`} className='bg-sky-400 text-white font-semibold w-[8rem] h-[30%] rounded-3xl justify-center flex items-center hover:bg-sky-500'>Edit Exam</Link> </div>
                         </section>
                     )
                     )
                 }
 
             </section>
         </main>
     )
}
