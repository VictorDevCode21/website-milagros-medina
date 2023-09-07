import React from 'react'
import Image from 'next/image'
import Carousel from '../carousel'

function Business() {
    const slides = [
        "/Photos/business/1.JPG",
        "/Photos/business/2.JPG",
        "/Photos/business/3.JPG",
    ]

    return (
        <section className='w-full h-full pt-14'>
            <div className=' flex flex-col justify-center items-center pr-8 pl-8'>
                <h2 className='text-4xl font-serif font-bold pb-6'>Empresaria</h2>
                <p className='font-serif font-normal leading-6 text-center pb-6'>Desde la gestión eficaz hasta la toma de decisiones estratégicas, comparto mis conocimientos como empresaria para ayudarte a alcanzar el éxito en el mundo de los negocios.
                    Aprende cómo la experiencia de la maternidad puede potenciar
                    tu habilidad para liderar con fuerza y determinación.
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

export default Business