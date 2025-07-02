import { Routes, Route } from 'react-router-dom';
import AvisoDePrivacidad from './Pages/AvisoDePrivacidad';
import Terminos from './Pages/Terminos';
import Home from './Pages/Home';
import Formulario from './Components/Formulario';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AvisoDePrivacidad" element={<AvisoDePrivacidad />} />
      <Route path="/Terminos" element={<Terminos />} />
      <Route path="/Formulario" element={<Formulario />} />
    </Routes>
  );
}

export default App;
