import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#f8f4e9] to-[#f0ebe0] text-[#3a3226] font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-[#2a2e35] text-[#e8e6e1] shadow-lg">
        <h1 className="text-2xl font-light tracking-wider text-[#d4af37]">Formulario Web Integral</h1>
        <div className="space-x-4">
          <button
            onClick={() => (window.location.href = "/Formulario")}
            className="px-6 py-2 rounded-sm bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#2a2e35] transition-all duration-300 font-medium tracking-wide"
          >
            Ir al Formulario
          </button>
          <button
            onClick={() => (window.location.href = "/Login")}
            className="px-6 py-2 rounded-sm bg-[#d4af37] text-[#2a2e35] hover:bg-[#c19b2e] transition-all duration-300 font-medium tracking-wide"
          >
            Iniciar Sesión
          </button>
        </div>
      </header>

      {/* Cuerpo */}
      <main className="flex-grow max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="bg-white/80 backdrop-blur-sm p-12 rounded-lg shadow-sm border border-[#e8e6e1]">
          <p className="text-2xl font-light leading-relaxed text-[#4a4238]">
            Bienvenido a nuestro <span className="text-[#d4af37]">formulario web integral</span>, donde la elegancia se encuentra con la funcionalidad.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2a2e35] text-[#e8e6e1] py-6 px-8 text-center font-light tracking-wide border-t border-[#3a3f47]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm">© 2025 Formulario Web Integral. Todos los derechos reservados.</p>
          <p className="text-xs mt-2 text-[#a8a6a1]">Diseño sofisticado para experiencias excepcionales</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;