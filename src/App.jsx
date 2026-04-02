import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1. Cambia 'principal' por 'Principal' (Mayúscula)
import { Principal } from './pages/Principal.jsx'; 

function App() {
  return (
    <div>
      <Router>
        
          <Routes>
            {/* 2. Úsalo con Mayúscula en element */}
            <Route path='/' element={<Principal />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;