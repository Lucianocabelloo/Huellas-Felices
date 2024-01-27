import React, { useState, useEffect } from 'react';
import VetCard from './VetCard';
import BasicModalDialog from './Form';
import Veterinary from '../utils/FormClass';
import uuid4 from 'uuid4';


const VetsAdministrator = () => {
  const initialVeterinaries = JSON.parse(localStorage.getItem('Veterinaries')) || [];
  const [veterinaries, setVeterinaries] = useState(initialVeterinaries);
  const [isModalOpen, setIsModalOpen] = useState(true);



  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    const newVeterinary = new Veterinary(
      uuid4(),
      data.Nombre,
      data.Apellido,
      data.Email,
      data.DNI,
      data.Especialidad,
      data.TurnosLibres,
      data.TurnosAgendados,
      data.Consultas,
      data.Imagen
    );
    setVeterinaries([...veterinaries, newVeterinary]);
    closeModal();
  };

  useEffect(() => {
    localStorage.setItem('Veterinaries', JSON.stringify(veterinaries));
  }, [veterinaries]);

  return (
    <>
      <h1 className='text-5xl text-center py-5'>Veterinarios Disponibles</h1>
      <section className='flex justify-center flex-wrap gap-11 items-center p-5'>
        {veterinaries.map((veterinary) => (
          <div key={veterinary.id}>
            <VetCard veterinary={veterinary} />
          </div>
        ))}

      </section>

      {isModalOpen && (
        <BasicModalDialog
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default VetsAdministrator;
