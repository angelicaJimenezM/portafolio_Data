import { Link } from 'react-router-dom';
import imagen from '../assets/imagenes/musica/musica_image.png';
import imagen1 from '../assets/imagenes/musica/musica_image-1.png';
import github from '../assets/imagenes/iconos/github.png'
import video from '../assets/videos/musica/video-musica.mp4'

export function AnalisisMusica() {
    return (
        <div className="bg-gray-50 min-h-screen font-poppins text-gray-800">
            {/* Header con navegación */}
            <header className="bg-[#75669b] p-7 flex gap-8 justify-around items-center shadow-md">
                <Link to="/" className="hover:underline font-medium text-2xl"> Inicio </Link>
                <h1 className="text-3xl font-bold">Dashboard de Datos Musicales</h1>
                <a href="https://github.com/angelicaJimenezM" target="_blank" className=' text-gray-800 p-3 rounded-xl flex items-center gap-3 '>
                           <img src={github} alt="" className="w-6 h-6" />
                           <span className="font-medium text-2xl">GitHub</span>
                         </a>
            </header>

            <main className="max-w-5xl mx-auto p-6 md:p-12">
                
                {/* Sección de Herramientas Estilo Card */}
                <section id="herramientas" className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-purple-100">
                    <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-2xl font-bold text-[#75669b]">Tecnologías y herramientas aplicadas</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 transition-transform hover:scale-105">
                            <h3 className="font-bold text-[#75669b] mb-2 uppercase tracking-wider text-sm">Power BI Desktop</h3>
                            <p className="text-gray-600 text-sm">Modelado, visualización y uso de DAX para lógica de negocio.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-purple-50  p-6 rounded-2xl border border-pink-100 transition-transform hover:scale-105">
                            <h3 className="font-bold text-[#75669b] mb-2 uppercase tracking-wider text-sm">DAX</h3>
                            <p className="text-gray-600 text-sm">Clasificación geográfica, Top 10, Top 5 y cálculo de KPIs complejos.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-purple-50  p-6 rounded-2xl border border-blue-100 transition-transform hover:scale-105">
                            <h3 className="font-bold text-[#75669b] mb-2 uppercase tracking-wider text-sm">Diseño UI</h3>
                            <p className="text-gray-600 text-sm">Tipografías limpias, layout modular y paleta de colores institucional.</p>
                        </div>
                          {/* Card 4 */}
                        <div className="bg-purple-50  p-6 rounded-2xl border border-blue-100 transition-transform hover:scale-105">
                            <h3 className="font-bold text-[#75669b] mb-2 uppercase tracking-wider text-sm">SQL</h3>
                            <p className="text-gray-600 text-sm">Base de datos, Limpieza de Datos</p>
                        </div>
                    </div>
                </section>

                {/* Sección de Video */}
                <section id="video" className="mb-12 text-center">
                    
                       <video src={video} controls className=" aspect-video rounded-3xl flex items-center justify-center text-white shadow-2xl"></video>
                    
                </section>

                {/* Sección de Resumen Técnico */}
                <section id="resumen" className="space-y-8 bg-white p-10 rounded-3xl shadow-lg">
                    <div>
                        <h2 className="text-2xl font-bold text-[#75669b] mb-4 border-b-2 border-purple-200 pb-2">Objetivo</h2>
                        <p className="leading-relaxed text-gray-700">
                        <p className='font-bold'>Para este proyecto hice uso de la base de datos llamada Chinook Database.</p>
                           Analizar la base de datos Chinook para identificar patrones en la cantidad de canciones, géneros más producidos, artistas más activos y distribución de álbumes, presentando los hallazgos en un dashboard interactivo desarrollado en Power BI.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#75669b] mb-4 border-b-2 border-purple-200 pb-2">Explicación del Proceso</h2>
                        <div className="space-y-4">
                            <p className="font-semibold text-[#75669b]">Paso 1: Estructuración y KPIs iniciales</p>
                            <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                <li><strong>Conexión de datos:</strong> Importé las tablas principales: Artist, Album, Track y Genre, Establecí relaciones entre ellas (Artista → Álbum → Canción → Género), Limpieza y preparación
Seleccioné solo los campos relevantes (nombres, títulos, duraciones, géneros), Seleccione una tabla para que sea macro con las columnas necesarias para el análisis general.</li>
                                <li><strong>Creación de KPIs iniciales:</strong> Total de artistas, Total de álbumes, Total de canciones, Número de géneros distintos. </li>
                                <li><strong>Creación de filtros y segmentaciones:</strong>Filtros dinámicos por artista, género y álbum, Segmentadores que permiten analizar cuántos álbumes y canciones tiene cada artista.</li>
                                <li><strong>Visualizaciones:</strong>Tabla dinámica: detalle de canciones por artista y género.</li>
                            </ul>
                            <img src={imagen} alt="Primer avance" className="rounded-xl" />
                        </div>

                        <div className="mt-8 space-y-4">
                            <p className="font-semibold text-[#9d81e5]">Paso 2: Estableciendo el enfoque del Dashboard y Segunda Actualización</p>
                            <p className="text-gray-600">Estableciendo cuál es el propósito del dashboard y qué decisiones se tomarán a partir de el, realicé un proceso más profundo de depuración y fortalecimiento de la base de datos.</p>
                           <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                <li>Se realizó una limpieza completa de la base de datos SQL usando SQL Server, reemplazando los valores nulos para mantener coherencia en los registros.</li>
                                <li>Se revisaron las llaves foráneas y primarias, reforzando las relaciones entre las tablas Track, Album, Artist y Genre. </li>
                                <li>Se documentaron las dependencias y restricciones aplicadas para garantizar la integridad referencial de la información</li>
                                <li>Se validaron los datos de forma cruzada, verificando que no existieran artistas sin canciones, álbumes sin referencias o géneros sin asignación.</li>
                            </ul>
                            <p>Con esto, la base de datos quedó lista para conectarse con Power BI de forma estable y confiable, permitiendo construir indicadores sólidos y visualizaciones más precisas.</p>
                        </div>
                        <div className="mt-8 space-y-4">
                            <p className="font-semibold text-[#9d81e5]">Paso 3: construccion del dashboard y su visualizacion y tercera Actualización</p>
                            <p className="text-gray-600">Despues de realiza la limpieza y la validacion de los datos, avance con la construccion del dashboard y su visualizacion</p>
                            <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                <li>Creé los indicadores clave (KPIs): total de géneros, álbumes, canciones y artistas.</li>
                                <li>Establecí filtros dinámicos por artista, álbum, género y una segmentación adicional que indica si el artista tiene canciones o no, permitiendo explorar la información de manera interactiva.</li>
                                <li>Incorporé un gráfico de pastel para visualizar los ingresos de los cinco géneros más vendidos, facilitando la comparación entre categorías musicales.</li>
                                <li>Añadí un gráfico de barras que muestra el top 9 de países con mayores ventas de canciones, destacando los mercados más activos.</li>
                                <li>mplementé un mapa interactivo que muestra todos los países donde se han vendido canciones; este rota automáticamente al seleccionar un país, proporcionando una vista geográfica dinámica.</li>
                                <li>Debajo del mapa incluí un Top 5 de artistas más vendidos, acompañado del monto total de ingresos generados por cada uno.</li>
                                <li>Finalmente, diseñé un gráfico de líneas que refleja los ingresos totales por año, permitiendo observar tendencias de crecimiento o descenso en las ventas.</li>
                            </ul>
                            <img src={imagen1} alt="Segunda actualización" className="rounded-xl" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}