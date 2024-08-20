import React from 'react'
import Data from './../data.json'

export const Examns = () => {
    console.log(Data);
    return (
        <main className='h-[85%] w-full py-8 '>
            <h1 className='font-semibold text-[50px] text-center pb-4'>Examenes</h1>
            <section className='grid - grid-cols-2 py-4 px-8 gap-8 w-full'>
                {Data &&
                    Data.map((dato,index) => 

                        (
                            <section key={index} className='flex flex-row bg-[#F4F4F5] shadow-xl items-center justify-around rounded-2xl p-4 gap-4'>
                                <div className='flex flex-col'>
                                    <h2 className='font-semibold text-[35px]' > {dato.titulo}</h2>
                                    <span className=''>{dato.fecha}</span>
                                </div>
                                <button className='bg-[#0A8537] text-white font-semibold w-[25%] h-[40%] rounded-3xl justify-center flex items-center hover:bg-[#1f6e3c]'>Access</button>
                            </section>
                        )
                    )
                }
                
            </section>
        </main>
    )
}
