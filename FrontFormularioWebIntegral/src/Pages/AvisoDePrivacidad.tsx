import { useNavigate } from "react-router-dom";

function AvisoDePrivacidad() {

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
                    <h1 className="text-3xl font-light text-[#3a3226] tracking-wider mb-4">Aviso de Privacidad</h1>
                    <p className="text-[#5a5248] font-light leading-relaxed">
                        En esta corporación, valoramos profundamente su privacidad y nos comprometemos a proteger sus datos personales con los más altos estándares de seguridad.
                    </p>
                </div>


                <div className="space-y-8 text-[#3a3226]">
                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">1. Información que recopilamos</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Recopilamos información personal como nombre, correo electrónico, teléfono y mensajes que usted nos proporciona voluntariamente a través de nuestro formulario de contacto.
                            Esta información se recaba con el único propósito de brindarle un servicio personalizado y de calidad.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">2. Uso de la información</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Utilizamos su información exclusivamente para los siguientes fines: responder a sus solicitudes y consultas, mejorar continuamente nuestros servicios,
                            mantener comunicación relevante sobre nuestros productos/servicios, y cumplir con las obligaciones legales que nos corresponden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">3. Protección de datos</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Implementamos rigurosas medidas de seguridad técnicas y administrativas para proteger su información contra accesos no autorizados, pérdida, alteración
                            o divulgación inapropiada. Nuestros protocolos de seguridad siguen las mejores prácticas de la industria y se actualizan periódicamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">4. Derechos del usuario</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Usted tiene derecho a:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2 font-light text-[#5a5248]">
                            <li>Acceder a sus datos personales en nuestro poder</li>
                            <li>Solicitar la rectificación de información inexacta</li>
                            <li>Cancelar el uso de sus datos personales</li>
                            <li>Oponerse al tratamiento de sus datos para fines específicos</li>
                            <li>Revocar el consentimiento otorgado (cuando este sea la base del tratamiento)</li>
                        </ul>
                        <p className="font-light leading-relaxed text-[#5a5248] mt-3">
                            Para ejercer estos derechos, puede enviarnos una solicitud a través de los medios de contacto proporcionados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-light text-[#d4af37] tracking-wide mb-3 border-l-4 border-[#d4af37] pl-4">5. Contacto</h2>
                        <p className="font-light leading-relaxed text-[#5a5248]">
                            Para cualquier duda, aclaración o solicitud relacionada con el tratamiento de su información personal, puede contactar a nuestro departamento de privacidad en:
                        </p>
                        <p className="mt-3 font-light text-[#d4af37]">
                            <span className="font-medium">Correo electrónico:</span> contacto@tuempresa.com
                        </p>
                    </section>


                    <div className="pt-6 mt-8 border-t border-[#e8e6e1]">
                        <p className="text-sm font-light text-[#a8a6a1] tracking-wide">
                            ¡TU PRIVACIDAD NOS IMPORTANTE!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvisoDePrivacidad;