import React from 'react'
import Data from './../examenCompleto.json'
import { Link } from 'react-router-dom'

export const Examns = () => {

    return (
        <main className=' w-full h-[90%] py-8 bg-[#baf1cf] '>
            <h1 className='font-semibold text-[50px] text-center pb-4'>Examenes</h1>
            <section className='grid - grid-cols-2 py-4 px-8 gap-8 w-full'>
                {Data &&
                    Data.map((dato, index) =>

                    (
                        <section key={index} className='flex flex-row bg-[#F4F4F5] shadow-xl items-center justify-between rounded-2xl p-4 gap-4'>
                            <div className='flex flex-col'>
                                <h2 className='font-semibold text-[35px]' > {dato.name}</h2>
                                <span className=''>{dato.autor}</span>
                            </div>
                            <div className="w-full h-full flex justify-end items-center ">
                                <Link to={`/${dato.id}`} className='bg-[#0A8537] text-white font-semibold w-[8rem] h-[30%] rounded-3xl justify-center flex items-center hover:bg-[#1f6e3c]'>Access</Link> </div>
                        </section>
                    )
                    )
                }

            </section>
        </main>
    )
}
