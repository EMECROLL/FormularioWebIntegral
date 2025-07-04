import { useAuthStore } from "../Store/authStore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#d4af37">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Seguridad Garantizada",
      description: "Protegemos tus datos con los más altos estándares de encriptación y cumplimiento."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#d4af37">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rápido y Eficiente",
      description: "Procesamiento instantáneo de formularios con tecnología de última generación."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#d4af37">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "En la Nube",
      description: "Accede a tus formularios desde cualquier dispositivo, en cualquier momento."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#f8f4e9] to-[#f0ebe0] text-[#3a3226] font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-[#2a2e35] text-[#e8e6e1] shadow-lg">
        <h1 className="text-2xl font-light tracking-wider text-[#d4af37]">Formulario Web Integral</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/Formulario")}
            className="px-6 py-2 rounded-sm bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#2a2e35] transition-all duration-300 font-medium tracking-wide"
          >
            Ir al Formulario
          </button>
          <button
            onClick={() => navigate(isAuthenticated ? "/Dashboard" : "/Login")}
            className="px-6 py-2 rounded-sm bg-[#d4af37] text-[#2a2e35] hover:bg-[#c19b2e] transition-all duration-300 font-medium tracking-wide"
          >
            {isAuthenticated ? "Ir al Dashboard" : "Iniciar Sesión"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
              Transformando <span className="text-[#d4af37]">experiencias</span> digitales
            </h1>
            <p className="text-xl font-light text-[#5a5248] mb-10 max-w-3xl mx-auto leading-relaxed">
              Nuestra plataforma de formularios web ofrece soluciones elegantes y sofisticadas para la recolección y gestión de datos.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate("/Formulario")}
                className="px-8 py-3 rounded-sm bg-[#2a2e35] text-[#e8e6e1] hover:bg-[#3a3f47] transition-all duration-300 font-medium tracking-wide"
              >
                Comenzar ahora
              </button>
              <button
                onClick={() => navigate("/AvisoDePrivacidad")}
                className="px-8 py-3 rounded-sm bg-transparent border border-[#2a2e35] text-[#2a2e35] hover:bg-[#2a2e35] hover:text-[#e8e6e1] transition-all duration-300 font-medium tracking-wide"
              >
                Conocer más
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-center mb-16 text-[#3a3226]">
              Nuestras <span className="text-[#d4af37]">características</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-8 bg-[#f9f7f1] rounded-lg border border-[#e8e6e1] hover:shadow-md transition-all">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-light mb-3 text-[#3a3226]">{feature.title}</h3>
                  <p className="text-[#5a5248] font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a2e35] text-[#e8e6e1]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-12">
              Lo que dicen <span className="text-[#d4af37]">nuestros usuarios</span>
            </h2>
            <div className="bg-[#3a3f47] p-8 rounded-lg">
              <blockquote className="text-lg font-light italic mb-6">
                "La plataforma de formularios más elegante y fácil de usar que he encontrado. Ha simplificado enormemente nuestro proceso de recolección de datos."
              </blockquote>
              <div className="flex justify-center items-center">
                <div className="h-12 w-12 rounded-full bg-[#d4af37] flex items-center justify-center text-[#2a2e35] font-medium mr-4">
                  AM
                </div>
                <div className="text-left">
                  <p className="font-medium">Ana Martínez</p>
                  <p className="text-sm text-[#a8a6a1]">Directora de Operaciones</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-12 rounded-lg shadow-sm border border-[#e8e6e1]">
            <h2 className="text-3xl font-light mb-6 text-[#3a3226]">
              ¿Listo para comenzar?
            </h2>
            <p className="text-[#5a5248] font-light mb-8 text-lg">
              Regístrate ahora y descubre cómo podemos transformar tu manera de recolectar información.
            </p>
            <button
              onClick={() => navigate(isAuthenticated ? "/Dashboard" : "/Login")}
              className="px-8 py-3 rounded-sm bg-[#d4af37] text-[#2a2e35] hover:bg-[#c19b2e] transition-all duration-300 font-medium tracking-wide"
            >
              {isAuthenticated ? "Ir al Dashboard" : "Crear una cuenta"}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2a2e35] text-[#e8e6e1] py-8 px-8 border-t border-[#3a3f47]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-light mb-4 text-[#d4af37]">Formulario Web</h3>
              <p className="text-sm font-light text-[#a8a6a1]">
                Soluciones elegantes para la gestión de formularios digitales.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4 text-[#d4af37]">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="/Formulario" className="text-sm font-light text-[#a8a6a1] hover:text-[#d4af37] transition">Formulario</a></li>
                <li><a href="/AvisoDePrivacidad" className="text-sm font-light text-[#a8a6a1] hover:text-[#d4af37] transition">Privacidad</a></li>
                <li><a href="/Terminos" className="text-sm font-light text-[#a8a6a1] hover:text-[#d4af37] transition">Términos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4 text-[#d4af37]">Contacto</h3>
              <p className="text-sm font-light text-[#a8a6a1]">contacto@formularioweb.com</p>
              <p className="text-sm font-light text-[#a8a6a1]">+52 55 1234 5678</p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4 text-[#d4af37]">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[#a8a6a1] hover:text-[#d4af37] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-[#a8a6a1] hover:text-[#d4af37] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-[#a8a6a1] hover:text-[#d4af37] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[#3a3f47]">
            <p className="text-sm text-center font-light text-[#a8a6a1]">
              © 2025 Formulario Web Integral. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;