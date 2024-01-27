import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PetsIcon from '@mui/icons-material/Pets';
import About from "../assets/AboutUs.png"
import Button from '@mui/joy/Button';
import ChatIcon from '@mui/icons-material/Chat';

const Main = () => {
  return (

    <>
    <section className='flex flex-col m-5 gap-14'>
        <h2 className=' text-3xl my-4 mainText'>3 Sencillos Pasos para Brindarle el Mejor Cuidado a tu Mascota</h2>
        <div className='flex gap-6'>
            <div className=' flex flex-col w-1/3 justify-center items-center box'>
                <AssignmentIndIcon sx={{ fontSize: 60 }}/>
                <h3 className=' text-2xl font-medium m-2'>Registrate en nuestra web</h3>
                <p className='w-[50ch] text-center'>En Huellitas Felices, sabemos que tu tiempo es valioso. Por eso, te ofrecemos un proceso de registro fácil y rápido en nuestra web. Con solo unos clics, podrás acceder a un mundo de servicios diseñados para el bienestar de tu mascota.</p>
            </div>
            <div className=' flex flex-col w-1/3 justify-center items-center box'>
                <AddBoxIcon sx={{ fontSize: 60 }}/>
                <h3 className=' text-2xl font-medium m-2'>Solicita el turno</h3>
                <p className='w-[50ch] text-center'>Una vez registrado, el siguiente paso es programar el turno para la consulta de tu mascota. Llena los datos necesarios, selecciona el día más conveniente y listo. En Huellitas Felices, nos aseguramos de que cada detalle esté cubierto para proporcionar el mejor servicio a tu compañero peludo.</p>
            </div>
            <div className=' flex flex-col w-1/3 justify-center items-center box'>
                <PetsIcon sx={{ fontSize: 60 }}/>
                <h3 className=' text-2xl font-medium m-2'>Trae a tu mascota a consulta</h3>
                <p className='w-[50ch] text-center'>El día y hora acordado, trae a tu mascota a nuestras instalaciones. Nuestro equipo de profesionales estará listo para recibirlos y brindar una atención rápida y eficaz. En Huellitas Felices, entendemos la importancia de cada consulta</p>
            </div>
        </div>
    </section>

    <section className='flex justify-center w-100 gap-[100px] AboutMain my-24 bg-[#DA0675] p-12 text-white'>
    <div className='flex flex-col gap-10'>
        <h2> Donde la Tecnologia y la Tradición se Fusionan para Ofrecerte Calidad Inigualable</h2>
        <p className='w-[70ch] text-lg text-slate-200'>En Huellitas Felices, fusionamos la vanguardia con la tradición para ofrecerte lo mejor en cuidado animal. Más que una veterinaria, somos la elección de quienes buscan calidad, precisión y profesionalismo en cada consulta porque la salud de tu mascota es un estandar, no una opcion, descubri la tranquilidad que Huellitas puede brindarte</p>
        <Button
            color="primary"
            onClick={function(){}}
            variant="solid"
            size='lg'
            className='flex gap-3'
            
          >
            <ChatIcon/>
          Solicitar Turno  
            </Button>    
    </div>
    <div >
        <img src={About} alt="" className='w-[600px] h-[400px] rounded-lg' />
    </div>
    </section>
    </>
  )
}

export default Main