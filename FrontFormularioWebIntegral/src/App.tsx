import { Routes, Route } from 'react-router-dom';
import AvisoDePrivacidad from './Pages/AvisoDePrivacidad';
import Terminos from './Pages/Terminos';
import Home from './Pages/Home';
import Formulario from './Components/Formulario';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AvisoDePrivacidad" element={<AvisoDePrivacidad />} />
      <Route path="/Terminos" element={<Terminos />} />
      <Route path="/Formulario" element={<Formulario />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
