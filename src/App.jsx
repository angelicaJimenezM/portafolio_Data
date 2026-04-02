import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Principal} from './pages/Principal.jsx';
function App() {
  return (
    <div>

      <Router>
         <Routes>
           <Route path='/' element={<Principal />} />
         </Routes>
      </Router>
    </div>
  )
}
export default App;
