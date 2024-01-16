import React from 'react'

import headerIMG from "../assets/img1.jpg"

export const Header = () => {
  return (
    <div>
      <section className='flex flex-row-reverse w-full items-center justify-center'>
        <div className=' w-2/4 h-[500px]'>
          <img className='m-auto h-full' src={headerIMG} alt="Imagen de veterinaria revisando un cachorro" />
        </div>
        <div className='flex flex-col gap-6 p-4 w-2/4'>
          <h1 className=' text-5xl w-[15ch] leading-[55px] font-bold'>VitalPet: Donde la Salud y la Felicidad de tu Mascota se Encuentran</h1>
          <p className='  text-gray-500 font-mono text-justify w-[50ch]'>¡Cuida su felicidad, confía en nuestra experiencia! En nuestra veterinaria, cada ronroneo y ladrido es una historia de bienestar. Porque amamos a tus mascotas tanto como vos.</p>
        </div>
      </section>
    </div>
  )
}
