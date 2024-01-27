import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Veterinary from '../utils/FormClass';
import uuid4 from 'uuid4';

const BasicModalDialog = () => {
  const initialVeterinaries = JSON.parse(localStorage.getItem('Veterinaries')) || [];

  const [veterinaries, setVeterinaries] = useState(initialVeterinaries);

  console.log(veterinaries)

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
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
  };

  useEffect(() => {
    localStorage.setItem('Veterinaries', JSON.stringify(veterinaries));
  }, [veterinaries]);

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div
        onClick={() => setOpen(true)}
        className='p-20 border border-slate-300 bg-white hover:bg-[#bfc0c3] flex justify-center items-center max-w-[10%] rounded-lg cursor-pointer m-auto lg:m-0'
      >
        <AddIcon sx={{ fontSize: 80 }} />
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Crea una nueva tarjeta de Veterinario</DialogTitle>
          <DialogContent>Agrega la informacion correspondiente</DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input {...register('Nombre')} autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input {...register('Apellido')} required />
              </FormControl>
              <FormControl>
                <FormLabel>Especialidad</FormLabel>
                <Input {...register('Especialidad')} required />
              </FormControl>
              <FormControl>
                <FormLabel>Turnos Libres</FormLabel>
                <Input {...register('TurnosLibres')} required />
              </FormControl>
              <FormControl>
                <FormLabel>Turnos Agendados</FormLabel>
                <Input {...register('TurnosAgendados')} required />
              </FormControl>
              <FormControl>
                <FormLabel>Consultas Realizadas</FormLabel>
                <Input {...register('Consultas')} required />
              </FormControl>
              <FormControl>
                <FormLabel>Imagen</FormLabel>
                <Input {...register('Imagen')} required />
              </FormControl>
              <Button type='submit'>Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}


export default BasicModalDialog;