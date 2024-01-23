import PetsIcon from '@mui/icons-material/Pets';


const Footer = () => {
  return (
    <div className='flex justify-around bg-slate-950 text-white'>
        <div className='flex justify-center items-center'>
            <h2><PetsIcon sx={{ fontSize: 60 }} /> Huellitas Felices</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h2>Congreso 3204</h2>
            <h2>(+54) 3815983423</h2>
            <h2>San miguel de Tucuman</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2>HORARIOS DE ATENCION</h2>
            <ul>
              <li>Lunes - Viernes 9:00 AM - 5:00 PM</li>
              <li>Sábado: Cerrado</li>
              <li>Domingo: 11:00 AM - 3:00 PM</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer