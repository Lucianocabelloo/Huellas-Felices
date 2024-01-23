import Button from '@mui/joy/Button';
import headerIMG from "../assets/prueba3.png"
import ChatIcon from '@mui/icons-material/Chat';
import OpenInNew from '@mui/icons-material/OpenInNew';
import PetsIcon from '@mui/icons-material/Pets';


export const Header = () => {
  return (
    <div>
      

      <nav className="bg-transparent backdrop-filter backdrop-blur-md border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <PetsIcon/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-950">Huellitas Felices</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700 text-slate-950">
        <li>
          <a href="#" className="block py-2 px-3 text-slate-950 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-950 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-950 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-950 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-950 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <section className='flex flex-row-reverse w-full items-center justify-center p-28 header'>
        <div className=' w-2/4 h-[500px]'>
          <img className='m-auto h-[625px]' src={headerIMG} alt="Imagen de veterinaria revisando un cachorro" />
        </div>
        <div className='flex flex-col justify-center items-start gap-6 p-4 w-2/4'>
          <h1 className=' text-5xl w-[20ch] leading-[55px] font-bold'>VitalPet: Donde la Salud y la Felicidad de tu Mascota se Encuentran</h1>
          <p className='  text-gray-500 font-mono text-justify w-[50ch]'>¡Cuida su felicidad, confía en nuestra experiencia! En nuestra veterinaria, cada ronroneo y ladrido es una historia de bienestar. Porque amamos a tus mascotas tanto como vos.</p>
          <div className='flex gap-5'>

          <Button
            color="danger"
            onClick={function(){}}
            variant="solid"
            size='lg'
            className='flex gap-3'
          >
            <ChatIcon/>
          Solicitar Turno  
            </Button>      
          <Button
            color="primary"
            onClick={function(){}}
            variant="solid"
            size='lg'
            className='flex gap-3'
          >
            <OpenInNew/>
          Ir a Pet Shop  
            </Button>      
          </div>
          </div>
      </section>
    </div>
  )
}
