import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Principal } from './pages/Principal.jsx'; 
import { AnalisisVentas } from "./pages/AnalisisVentas.jsx";
import { AnalisisMusica } from "./pages/AnalisisMusica.jsx";
import { Analisis_rrhh } from "./pages/Analisis_rrhh.jsx";

function App() {
  return (
    <div>
      <Router>
        
          <Routes>
            {/* 2. Úsalo con Mayúscula en element */}
            <Route path='/' element={<Principal />} />
            <Route path='/AnalisisVentas' element={<AnalisisVentas />} />
            <Route path='/AnalisisMusica' element={<AnalisisMusica />} />
            <Route path='/Analisis_rrhh' element={<Analisis_rrhh />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;