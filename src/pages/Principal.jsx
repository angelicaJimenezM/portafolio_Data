 import fondo from '../assets/imagenes/fondo.jpg'
 import telefono from '../assets/imagenes/iconos/telefono.png'
 import correo from '../assets/imagenes/iconos/correo.png'
 import linkedin from '../assets/imagenes/iconos/linkedin.png'
 import descargar from '../assets/imagenes/iconos/descargas.png'
 import github from '../assets/imagenes/iconos/github.png'
 import analisis from '../assets/imagenes/certificados/analisis.jpg'
import curso from '../assets/imagenes/certificados/curso_1.jpg'
 import power from '../assets/imagenes/certificados/power.jpg'
 import excel from '../assets/imagenes/certificados/excel.jpg'
 import recursos_humanos from '../assets/imagenes/recursos_humanos.png'
 import musica from '../assets/imagenes/musica.png'
 import ventas from '../assets/imagenes/ventas.png'
 import foto from '../assets/imagenes/foto.jpeg'
import { Link } from "react-router-dom";

 export function Principal() {
  return (
    <>
      <header className="bg-[#75669b] font-poppins p-7 flex gap-8 justify-center">
        <a href="#inicio">Inicio</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#certificados">Certificados</a>
        <a href="#contacto">Contacto</a>
      </header>

      <main className="bg-[#fdfaff] h-screen font-poppins"> 
        <div className="p-11 min-h-[40vh] flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${fondo})` }}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Data Analyst Junior y BI Developer
          </h1>
          <h1 className="text-3xl md:text-4xl mt-2  font-bold">
           Angelica Jiménez Machacon
          </h1>
        </div>
        <div className='italic py-16 px-6 flex flex-col items-center'>
          <section id="inicio" className="bg-[#fdfaff] py-16 px-6 flex flex-col items-center">
         
          <div className="max-w-6xl flex flex-col gap-6 ">
              <h1 className="italic text-4xl font-bold text-[#7d61c2] border-b-2 border-purple-50 pb-2">
              ¡Hola! 👋
              </h1>
    
            <div className="italic text-gray-700 text-lg leading-relaxed flex w-full gap-4">
              <p>
                Estoy construyendo mi camino en el análisis de datos, enfocándome en algo simple: resolver problemas reales con información.
                Me interesa entender cómo funcionan los datos, organizarlos y convertirlos en herramientas útiles para tomar decisiones. No me quedo solo en la teoría; me gusta llevar las ideas a proyectos donde pueda automatizar procesos, limpiar datos y crear visualizaciones claras.
                He trabajado con herramientas como SQL, Python y dashboards interactivos, explorando formas de hacer el análisis más práctico y accesible.
                Estoy en constante aprendizaje, mejorando cada proyecto y buscando nuevas formas de hacer las cosas mejor.
               Este portafolio no es solo lo que sé hoy, sino todo lo que estoy construyendo para llegar más lejos.
              </p>
              <div className="flex-shrink-0 mt-6 md:mt-0">
                
              <img src={foto} alt="Angelica Jiménez" 
          className="w-72 md:w-80 h-auto rounded-3xl shadow-[0_20px_50px_rgba(125,97,194,0.3)] border-4 border-white object-cover"/>
              </div>
            </div>
          </div>
        </section>
        <div className='flex flex-col md:flex-row gap-8 p-10 bg-[#fdfaff] justify-center items-start'>
        {/* Sección de Habilidades Técnicas*/}
        <section id="habilidades" className='bg-white p-8 rounded-2xl shadow-md border border-purple-100 w-full md:w-[600px]'>
          <h2 className='text-[#7d61c2] text-2xl font-bold mb-6 border-b-2 border-purple-50 pb-2'>
            Habilidades Técnicas
          </h2>
        {/* Grid de 3 columnas para las habilidades */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 font-medium'>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>📊 Power Bi</p>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>📈 Excel</p>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>📱 Power App</p>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>⚙️ Automate</p>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>☁️ SharePoint</p>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>🐍 Python</p>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>🗄️ MySQL</p>
            <p className='flex items-center gap-2 bg-purple-50 p-2 rounded-lg'>🐙 GitHub</p>
          </div>
        </section>
        {/* Sección de Contacto (Derecha) */}
        <section id="contacto" className='bg-[#957bd7] p-8 rounded-2xl shadow-lg text-white w-full md:w-[400px] flex flex-col gap-4'>
          <h2 className='text-2xl font-bold mb-4'>Contacto</h2>
          <div className='flex flex-col gap-3'>
          {/* Email */}
          <div className='bg-white text-gray-800 p-3 rounded-xl flex items-center gap-3'>
            <img src={correo} alt="" className="w-5 h-5" />
            <p className="text-sm font-medium truncate">angelicajimenezm5@gmail.com</p>
          </div>
          {/* telefono */}
          <div className='bg-white text-gray-800 p-3 rounded-xl flex items-center gap-3'>
            <img src={telefono} alt="" className="w-5 h-5" />
            <p className="text-sm font-medium truncate">3016027521</p>
          </div>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/angelica-jimenezm" target="_blank" className='bg-white text-gray-800 p-3 rounded-xl flex items-center gap-3 hover:bg-purple-50 transition-all'>
           <img src={linkedin} alt="" className="w-5 h-5" />
           <span className="font-medium">LinkedIn</span>
          </a>
          {/* GitHub */}
          <a href="https://github.com/angelicaJimenezM" target="_blank" className='bg-white text-gray-800 p-3 rounded-xl flex items-center gap-3 hover:bg-purple-50 transition-all'>
            <img src={github} alt="" className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          {/* Botón Descargar CV */}
          <a href='/public/Hoja_de_vida.pdf' download='Hoja_de_vida_Angelica.pdf' className='mt-2 bg-purple-900 text-white p-4 rounded-xl flex items-center justify-center gap-3 hover:bg-purple-800 transition-transform active:scale-95 font-bold shadow-md'>
            <img src={descargar} alt="" className="w-5 h-5 invert" />
             Descargar CV
          </a>
    </div>
  </section>
</div>

        <section id="experiencia" className="py-10 px-6 max-w-4xl mx-auto flex flex-col gap-8">
    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#9947dc] w-fit pb-1">
    Experiencia Profesional
    </h2>

  <div className="flex flex-col gap-6">
    {/* Experiencia en Seguridad Privada BG LTDA */}
    <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-[#ab45ff] hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[#7d61c2] text-xl font-bold">Analista de Datos</h3>
          <p className="text-gray-600 font-medium">Seguridad Privada BG LTDA</p>
        </div>
        <span className="text-sm bg-purple-50 text-[#ab45ff] px-3 py-1 rounded-full font-semibold">
          julio 2025 – enero 2026
        </span>
      </div>

    </div>

    {/* Experiencia en Tenaris */}
    <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-[#ab45ff] hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[#7d61c2] text-xl font-bold">Practicante – Ingeniería (Automatización y Datos)</h3>
          <p className="text-gray-600 font-medium">Tenaris</p>
        </div>
        <span className="text-sm bg-gray-100 text-[#ab45ff]  px-3 py-1 rounded-full font-semibold">
          enero 2025 – julio 2025
        </span>
      </div>
      
    </div>
  </div>
</section>
           {/*seccion de proyectos*/}
        <section id='proyectos' className="py-16 px-6 max-w-7xl mx-auto bg-[#fdfaff]">
  <h2 className='text-3xl font-bold text-[#7d61c2] mb-10'>Proyectos Destacados</h2>
  
  
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    
    {/* Tarjeta de Proyecto: Música */}
    <article className='bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col border border-purple-50 group'>
      {/* Contenedor de Imagen con altura fija para uniformidad */}
      <div className="h-56 overflow-hidden">
        <img src={musica} alt="Dashboard Música" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
      </div>
      
      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className='text-[#7d61c2] font-bold text-xl mb-3'>Dashboard de Datos Musicales</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Dashboard interactivo desarrollado para analizar tendencias musicales, comportamiento de usuarios y rendimiento de canciones.
        </p>
        
        {/* Etiquetas (Tags) */}
        <div className='flex flex-wrap gap-2 mb-8'>
          <span className='text-[11px] bg-purple-50 text-[#ab45ff] px-3 py-1 rounded-full font-bold uppercase'>SQL</span>
          <span className='text-[11px] bg-purple-50 text-[#ab45ff] px-3 py-1 rounded-full font-bold uppercase'>Power Bi</span>
          <span className='text-[11px] bg-purple-100 text-[#ab45ff] px-3 py-1 rounded-full font-bold uppercase'>ETL</span>
        </div>
        
       
            <Link to="/AnalisisMusica" className="mt-auto w-full py-3 bg-[#6d56a6] text-white text-center rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
  Ver Detalles del Proyecto
</Link>
        
      </div>
    </article>

    {/* Tarjeta de Proyecto: Ventas */}
    <article className='bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col border border-purple-50 group'>
      <div className="h-56 overflow-hidden">
        <img src={ventas} alt="Dashboard Ventas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className='text-[#7d61c2] font-bold text-xl mb-3'>Dashboard de Ventas</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Análisis del comportamiento de ventas a nivel global, identificando países, productos y regiones más rentables.
        </p>
        <div className='flex flex-wrap gap-2 mb-8'>
          <span className='text-[11px] bg-purple-50 text-[#ab45ff] px-3 py-1 rounded-full font-bold uppercase'>Excel</span>
          <span className='text-[11px] bg-purple-100 text-[#ab45ff] px-3 py-1 rounded-full font-bold uppercase'>Data Analytics</span>
        </div>
       <Link to="/AnalisisVentas" className="mt-auto w-full py-3 bg-[#6d56a6] text-white text-center rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
  Ver Detalles del Proyecto
</Link>
      </div>
    </article>

    {/* Tarjeta de Proyecto: RRHH */}
    <article className='bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col border border-purple-50 group'>
      <div className="h-56 overflow-hidden">
        <img src={recursos_humanos} alt="Dashboard RRHH" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className='text-[#7d61c2] font-bold text-xl mb-3'>Recursos Humanos</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Gestión del talento humano, identificando patrones en rotación, desempeño, satisfacción y costos de nómina.
        </p>
        <div className='flex flex-wrap gap-2 mb-8'>
          <span className='text-[11px] bg-purple-50 text-[#ab45ff] px-3 py-1 rounded-full font-bold uppercase'>Excel</span>
          <span className='text-[11px] bg-purple-100 text-[#ab45ff] px-3 py-1 rounded-full font-bold uppercase'>Talento Humano</span>
        </div>
                 <Link to="/Analisis_rrhh" className="mt-auto w-full py-3 bg-[#6d56a6] text-white text-center rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
  Ver Detalles del Proyecto
</Link>
      </div>
    </article>

  </div>
</section>
   <section id="certificados" >
    <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-[#9947dc] w-fit pb-1">Certificados y Formacion</h1>
    <div className='flex flex-wrap gap-6 justify-center p-10'>

  <div className='w-80 h-2/6 overflow-hidden  shadow-xl rounded-2xl '>
    <img src={analisis} alt="Certificado Análisis" className='w-full h-full object-cover' />
    <p className='text-[#7d61c2] font-bold px-2'>Introduccion  al analisis de datos de Microsoft</p>
    <div className='flex justify-between items-start px-2'>
    <p className='text-gray-600 font-medium'>Microsoft</p>
    <p className='text-sm bg-gray-100 text-[#ab45ff]  px-3 py-1 rounded-full font-semibold'>Marzo 2026</p>
    </div>
  </div>
  <div className='w-80 h-full overflow-hidden shadow-xl rounded-2xl '>
    <img src={power} alt="Certificado Power BI" className='w-full h-full object-cover' />
    <p className='text-[#7d61c2] font-bold px-2'>Preparacion de datos para el analisis de power Bi</p>
    <div className='flex justify-between items-start px-2'>
    <p className='text-gray-600 font-medium'>Microsoft</p>
    <p className='text-sm bg-gray-100 text-[#ab45ff]  px-3 py-1 rounded-full font-semibold'>Marzo 2026</p>
    </div>
  </div>
  <div className='w-80 h-full overflow-hidden shadow-xl rounded-2xl '>
    <img src={curso} alt="Certificado Coursera" className='w-full h-full object-cover' />
    <p className='text-[#7d61c2] font-bold px-2'>Aspectos Basicos: Datos, Datos en todas partes</p>
      <div className='flex justify-between items-start px-2'>
    <p className='text-gray-600 font-medium'>Coursera</p>
    <p className='text-sm bg-gray-100 text-[#ab45ff]  px-3 py-1 rounded-full font-semibold'>Octubre 2025</p>
      </div>
  </div>
  <div className='w-80 h-full shadow-xl rounded-2xl '>
    <img src={excel} alt="Certificado Excel" />
    <p className='text-[#7d61c2] font-bold px-2'>Excel aplicado</p>
    <div className='flex justify-between items-start px-2'>
      <p className='text-gray-600 font-medium'>Unicolombo</p>
    <p className='text-sm bg-gray-100 text-[#ab45ff]  px-3 py-1 rounded-full font-semibold'>Junio 2022</p>
    </div>
  </div>
    </div>
</section>

       
      </div>
      </main>
    </>
  );
}

