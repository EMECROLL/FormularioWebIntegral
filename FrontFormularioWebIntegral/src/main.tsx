import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Home from './Pages/Home.tsx'; // Asegúrate que esté bien la ruta
import Terminos from './Pages/Terminos.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Terminos" element={<Terminos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
