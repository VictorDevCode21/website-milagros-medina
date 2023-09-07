import React from 'react'
import Image from 'next/image'
import Carousel from '../carousel'

function Tips() {
    const slides = [
        "/Photos/tips/1.JPG",
        "/Photos/tips/2.JPG",
        "/Photos/tips/3.JPG",
        "/Photos/tips/4.JPG",
        "/Photos/tips/5.JPG",
        "/Photos/tips/6.JPG",
        "/Photos/tips/7.JPG",
        "/Photos/tips/8.JPG",
        "/Photos/tips/9.JPG",
        "/Photos/tips/10.JPG",
        "/Photos/tips/11.JPG",
    ]

    return (
        <section className='w-full h-full pt-14'>
            <div className=' flex flex-col justify-center items-center pr-8 pl-8'>
                <h2 className='text-4xl font-serif font-bold pb-6'>Algunos tips para ti</h2>
                <p className='font-serif font-normal leading-6 text-center pb-6'>¡Bienvenida a mi sección de Tips, 
                donde encontrarás una fuente constante de inspiración y 
                consejos que abarcan desde el emprendimiento hasta la crianza y el éxito personal! 
                Como mamá empresaria, comparto estrategias probadas, reflexiones enriquecedoras y técnicas 
                valiosas para ayudarte a equilibrar con éxito tu vida familiar y tus aspiraciones profesionales.
                </p>
            </div>
            <div className='w-full h-full'>
                <Carousel>
                    {slides.map((s, index) => (
                        <div key={index} className='p-2'>
                            <Image className='h-80' src={s} alt={`mom-${index}`} width={1080} height={720} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default Tips