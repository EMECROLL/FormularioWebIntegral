import { useNavigate } from "react-router-dom";


function Terminos() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f4e9] to-[#f0ebe0] py-12 px-4 sm:px-6 lg:px-8 font-serif">
            <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-sm p-8 sm:p-10 border border-[#e8e6e1]">

                <button
                    onClick={() => navigate('/')}
                    className="absolute top-4 left-4 text-[#d4af37] hover:text-[#c19b2e] transition-colors"
                    aria-label="Volver al inicio"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>

                <div className="text-center mb-10 border-b border-[#e8e6e1] pb-6">
                    <h1 className="text-3xl font-light text-[#3a3226] tracking-wider mb-4">Términos y Condiciones</h1>
                    <p className="text-[#5a5248] font-light leading-relaxed">
                        Bienvenido a nuestra plataforma. Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones de uso.
                    </p>
                </div>


                <div className="space-y-8 text-[#3a3226]">
                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">1. Uso del sitio</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            El contenido proporcionado en este sitio es únicamente para fines informativos y no constituye asesoramiento profesional.
                            Nos reservamos el derecho de modificar, actualizar o eliminar cualquier contenido sin previo aviso.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">2. Propiedad intelectual</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Todos los textos, imágenes, logotipos, diseños, interfaces y demás elementos presentes en el sitio son propiedad exclusiva
                            de la empresa o de sus licenciantes y están protegidos por las leyes de propiedad intelectual e industrial aplicables.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">3. Responsabilidad</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Bajo ninguna circunstancia seremos responsables por daños directos, indirectos, incidentales o consecuentes derivados del
                            uso o la imposibilidad de uso del sitio web o de la información contenida en él, incluso si hemos sido advertidos de la
                            posibilidad de dichos daños.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">4. Privacidad</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            La información personal recopilada será manejada conforme a nuestra Política de Privacidad, la cual describe cómo recabamos,
                            utilizamos, protegemos y compartimos sus datos personales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">5. Modificaciones</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Nos reservamos el derecho de actualizar estos términos en cualquier momento para reflejar cambios en nuestras prácticas
                            operativas o regulatorias. Las modificaciones entrarán en vigor inmediatamente después de su publicación. Te recomendamos
                            revisarlos periódicamente para estar informado sobre cualquier cambio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">6. Contacto</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Si tienes alguna pregunta sobre estos términos y condiciones, puedes contactarnos a través de nuestro formulario de contacto
                            disponible en el sitio o enviando un correo electrónico a legal@tuempresa.com.
                        </p>
                    </section>


                    <div className="pt-6 mt-8 border-t border-[#e8e6e1]">
                        <p className="text-sm font-light text-[#a8a6a1] tracking-wide">
                            NUESTROS TERMINOS SON MUY FLEXIBLES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminos;