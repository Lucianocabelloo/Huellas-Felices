import React, { useState } from 'react';
import VetCard from './VetCard';
import BasicModalDialog from './Form';

const VetsAdministrator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <h1 className='text-5xl text-center py-5'>Veterinarios Disponibles</h1>
      <section className='flex flex-wrap gap-11 items-center p-5'>

        <div>
          <VetCard />
        </div>

        <BasicModalDialog/>

      </section>

      {isModalOpen && <BasicModalDialog onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default VetsAdministrator;
