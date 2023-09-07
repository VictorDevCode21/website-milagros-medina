import React from 'react'
import Image from 'next/image'
import Carousel from '../carousel'

function Mamá() {
  const slides = [
    "/Photos/mom/1.JPG",
    "/Photos/mom/2.JPG",
    "/Photos/mom/3.JPG",
    "/Photos/mom/4.JPG",
    "/Photos/mom/5.JPG",
  ]

  return (
    <section className='w-full h-full'>
      <div className=' flex flex-col justify-center items-center pr-8 pl-8'>
        <h2 className='text-4xl font-serif font-bold pb-6'>Mamá</h2>
        <p className='font-serif font-normal leading-6 text-center pb-6'>Desde la gestión del tiempo hasta la superación de desafíos empresariales,
          comparto herramientas y consejos probados que te ayudarán a prosperar tanto en tu rol
          como madre como en tu camino empresarial.
          Descubre cómo convertir la maternidad en tu mayor fortaleza.
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

export default Mamá