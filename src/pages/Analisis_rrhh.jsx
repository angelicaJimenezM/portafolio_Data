import { Link } from 'react-router-dom';
import imagen from '../assets/imagenes/rrhh/rrhh-image.png';
import imagen1 from '../assets/imagenes/rrhh/rrhh-image-1.png';
import imagen2 from '../assets/imagenes/rrhh/rrhh-image-2.png';
import github from '../assets/imagenes/iconos/github.png';

export function Analisis_rrhh() {
    return (
        <div className="bg-gray-50 min-h-screen font-poppins text-gray-800">
            {/* Header con navegación */}
            <header className="bg-[#75669b] p-7 flex gap-8 justify-around items-center shadow-md">
                <Link to="/" className="hover:underline font-medium text-2xl"> Inicio </Link>
                <h1 className="text-3xl font-bold">Dashboard de recursos humanos.pbixs</h1>
                <a href="https://github.com/angelicaJimenezM" target="_blank" className=' text-gray-800 p-3 rounded-xl flex items-center gap-3 '>
                           <img src={github} alt="" className="w-5 h-5" />
                           <span className="font-medium">GitHub</span>
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
                    <div className="bg-gray-800 aspect-video rounded-3xl flex items-center justify-center text-white shadow-2xl">
                        <p className="italic">Aquí puedes embeber tu video demostrativo del Dashboard</p>
                    </div>
                </section>

                {/* Sección de Resumen Técnico */}
                <section id="resumen" className="space-y-8 bg-white p-10 rounded-3xl shadow-lg">
                    <div>
                        <h2 className="text-2xl font-bold text-[#75669b] mb-4 border-b-2 border-purple-200 pb-2">Objetivo</h2>
                        <p className="leading-relaxed text-gray-700">
                            Analizar la base de empleados para identificar patrones en rotación, desempeño, satisfacción y costos de nómina, y presentar los hallazgos en un dashboard interactivo.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#75669b] mb-4 border-b-2 border-purple-200 pb-2">Explicación del Proceso</h2>
                        <p>En este primer avance desarrollé un dashboard en Power BI a partir de un excel que hace la funcion de base de datos</p>
                        <div className="space-y-4">
                            <p className="font-semibold text-[#75669b]">Paso 1: Estructuración y KPIs iniciales</p>
                            <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                <li><strong>Limpieza:</strong> separación de columnas de salario y cargo, estandarización de campos. </li>
                                <li><strong>Creación de KPIs iniciales:</strong>Salario total, Promedio del índice de satisfacción, Promedio del desempeño (conversión de valores de texto a números), Rotación anual (en construcción).</li>
                                <li><strong>Visualizaciones:</strong>Barra horizontal: distribución del desempeño por departamento, Gráfico circular: reclutamiento por fuente, Tarjetas: salario total, promedio de desempeño, índice de satisfacción, rotación anual.</li>
                            </ul>
                            <img src={imagen} alt="Primer avance" className="rounded-xl" />
                        </div>

                        <div className="mt-8 space-y-4">
                            <p className="font-semibold text-[#9d81e5]">Paso 2: Refinamiento y Segunda Actualización</p>
                             <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                <li>Añadí segmentación de datos por gerente, cargo y departamento para hacer el dashboard más interactivo. </li>
                                <li>Creé una columna calculada de estado para clasificar a los empleados entre Activos y Ex-empleados. tuvieran fecha de salida.</li>
                                <li>Incorporé una tabla dinámica para visualizar el detalle de los empleados filtrados.</li>
                                <li>Creé la columna Año de salida para facilitar el análisis temporal.</li>
                                <li>Implementé la métrica de rotación anual diferenciando empleados activos y los que salieron.</li>
                                <li>Refiné los KPIs y mejoré la navegación entre visualizaciones.</li>
                            </ul>
                            <img src={imagen1} alt="Segunda actualización" className="rounded-xl" />
                        </div>

                           <div className="mt-8 space-y-4">
                            <p className="font-semibold text-[#9d81e5]">Paso 3: Diseño del Dashboard y Segunda Actualización</p>
                             <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                <li>Reemplacé el gráfico de desempeño por departamento por un gráfico 100% apilado para mostrar la proporción de empleados arriba, dentro y abajo de lo esperado en cada área. </li>
                                <li>Ajusté la paleta de colores corporativa para dar un estilo más formal y consistente (azules y morados).</li>
                                <li>Mejoré los KPIs con iconos representativos (empleados activos, ex empleados, salario total, desempeño, rotación anual y total, índice de satisfacción). </li>
                                <li>Rediseñé la sección de KPIs para que sean más claros y visualmente atractivos.</li>
                                <li>Incorporé segmentadores (gerente, departamento, estado y cargo) para facilitar la exploración de datos.</li>
                                <li>Ajusté la tabla final mostrando información detallada de empleados, con campos clave como fechas de contratación/salida, fuente de reclutamiento y desempeño.</li>
                            </ul>
                            <img src={imagen2} alt="Segunda actualización" className="rounded-xl" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}