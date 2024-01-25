import React from 'react'
import VetCard from './VetCard'
import AddIcon from '@mui/icons-material/Add';

const VetsAdministrator = () => {
  return (
    <>
    <h1 className=' text-5xl text-center py-5'>Veterinarios Disponibles</h1>
    <section className='flex flex-wrap gap-11 items-center p-5'>

    <div>
      <VetCard/>
    </div>

    <div className=' p-20 border border-slate-300  bg-white hover:bg-[#bfc0c3]	flex justify-center items-center  max-w-[10%] rounded-lg cursor-pointer m-auto lg:m-0'>
      <AddIcon sx={{ fontSize: 80 }}/>
    </div>
    </section>
    </>
  )
}

export default VetsAdministrator