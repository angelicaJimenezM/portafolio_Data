import { Link } from 'react-router-dom';
import imagen from '../assets/imagenes/ventas/ventas_image.png';
import imagen1 from '../assets/imagenes/ventas/ventas_image-1.png';
import github from '../assets/imagenes/iconos/github.png'
import video from '../assets/videos/ventas/video-ventas.mp4'
export function AnalisisVentas() {
    return (
        <div className="bg-gray-50 min-h-screen font-poppins text-gray-800">
            {/* Header con navegación */}
            <header className="bg-[#75669b] p-7 flex gap-8 justify-around items-center shadow-md">
                <Link to="/" className="hover:underline font-medium text-2xl"> Inicio </Link>
                <h1 className="text-3xl font-bold">Dashboard de ventas</h1>
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
                            <h3 className="font-bold text-[#75669b] mb-2 uppercase tracking-wider text-sm">Excel</h3>
                            <p className="text-gray-600 text-sm">Base de dtaos, Limpieza de Datos</p>
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
                            Analizar los datos de ventas globales para identificar los países, marcas y regiones más rentables, evaluar márgenes de ganancia y volúmenes de ventas, facilitando la detección de oportunidades de crecimiento.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#75669b] mb-4 border-b-2 border-purple-200 pb-2">Explicación del Proceso</h2>
                        <div className="space-y-4">
                            <p className="font-semibold text-[#75669b]">Paso 1: Estructuración y KPIs iniciales</p>
                            <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                <li><strong>Limpieza:</strong> Estandarización de columnas de fecha mediante Power Query. [cite: 50]</li>
                                <li><strong>KPIs:</strong> Definición de Precio unitario, Costo unitario y Cantidad total. [cite: 48]</li>
                                <li><strong>Visualizaciones:</strong> Implementación de mapas mundiales y gráficos de barras horizontales. [cite: 49]</li>
                            </ul>
                            <img src={imagen} alt="Primer avance" className="rounded-xl" />
                        </div>

                        <div className="mt-8 space-y-4">
                            <p className="font-semibold text-[#9d81e5]">Paso 2: Refinamiento y Segunda Actualización</p>
                            <p className="text-gray-600">Complementé el análisis con un gráfico de Top 5 países por ventas y ajusté la paleta de colores para mejorar la accesibilidad visual.</p>
                            <img src={imagen1} alt="Segunda actualización" className="rounded-xl" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}