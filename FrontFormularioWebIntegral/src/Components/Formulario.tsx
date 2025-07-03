import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';

interface FormData {
  NombreCompleto: string;
  Correo: string;
  Telefono: string;
  Mensaje: string;
  recaptcha: string;
  aceptarPrivacidad: boolean;
}

interface FormErrors {
  NombreCompleto?: string;
  Correo?: string;
  Telefono?: string;
  Mensaje?: string;
  recaptcha?: string;
  aceptarPrivacidad?: string;
}

function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    NombreCompleto: '',
    Correo: '',
    Telefono: '',
    Mensaje: '',
    recaptcha: '',
    aceptarPrivacidad: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.NombreCompleto.trim()) newErrors.NombreCompleto = 'Nombre requerido';
    if (!formData.Correo.trim()) newErrors.Correo = 'Correo requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Correo))
      newErrors.Correo = 'Correo inválido';

    if (!formData.Telefono.trim()) newErrors.Telefono = 'Teléfono requerido';
    else if (!/^\d{10}$/.test(formData.Telefono))
      newErrors.Telefono = 'Teléfono debe tener 10 dígitos';

    if (!formData.Mensaje.trim()) newErrors.Mensaje = 'Mensaje requerido';
    if (!formData.recaptcha) newErrors.recaptcha = 'Por favor verifica que no eres un robot.';
    if (!formData.aceptarPrivacidad) newErrors.aceptarPrivacidad = 'Debes aceptar el aviso de privacidad para continuar.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData(prev => ({ ...prev, aceptarPrivacidad: checked }));
    setErrors(prev => ({ ...prev, aceptarPrivacidad: '' }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setFormData(prev => ({ ...prev, recaptcha: token || '' }));
    setErrors(prev => ({ ...prev, recaptcha: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus('Enviando...');

    try {
      const apiUrl = import.meta.env.VITE_URLAPI;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      setStatus('Mensaje enviado con éxito');
      setFormData({
        NombreCompleto: '',
        Correo: '',
        Telefono: '',
        Mensaje: '',
        recaptcha: '',
        aceptarPrivacidad: false,
      });
      setErrors({});
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Error al enviar el mensaje. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-8 bg-gradient-to-br from-[#f8f4e9] to-[#f0ebe0] font-serif">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden border border-[#e8e6e1]">
        {/* Encabezado del formulario */}
        <div className="p-8 bg-[#2a2e35] text-[#e8e6e1] text-center border-b border-[#3a3f47]">
          <h1 className="text-2xl font-light tracking-wider text-[#d4af37] mb-2">Contáctanos</h1>
          <p className="text-sm text-[#a8a6a1]">Llena el formulario y nos pondremos en contacto contigo</p>
        </div>

        {/* Cuerpo del formulario */}
        <form onSubmit={handleSubmit} noValidate className="p-8 flex flex-col">
          {/* Nombre Completo */}
          <div className={`mb-6 ${errors.NombreCompleto ? 'border-l-4 border-[#d4af37] pl-4' : ''}`}>
            <label
              htmlFor="NombreCompleto"
              className="block mb-2 font-light text-[#3a3226] tracking-wide"
            >
              Nombre completo
            </label>
            <input
              id="NombreCompleto"
              type="text"
              name="NombreCompleto"
              value={formData.NombreCompleto}
              onChange={handleChange}
              placeholder="Ingresa tu nombre completo"
              className={`w-full px-4 py-3 bg-[#f9f7f1] rounded-sm text-[#3a3226] text-base
                focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition font-light`}
            />
            {errors.NombreCompleto && (
              <span className="text-[#d4af37] text-xs mt-1 block font-light">{errors.NombreCompleto}</span>
            )}
          </div>

          {/* Correo */}
          <div className={`mb-6 ${errors.Correo ? 'border-l-4 border-[#d4af37] pl-4' : ''}`}>
            <label
              htmlFor="Correo"
              className="block mb-2 font-light text-[#3a3226] tracking-wide"
            >
              Correo electrónico
            </label>
            <input
              id="Correo"
              type="email"
              name="Correo"
              value={formData.Correo}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              className={`w-full px-4 py-3 bg-[#f9f7f1] rounded-sm text-[#3a3226] text-base
                focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition font-light`}
            />
            {errors.Correo && (
              <span className="text-[#d4af37] text-xs mt-1 block font-light">{errors.Correo}</span>
            )}
          </div>

          {/* Teléfono */}
          <div className={`mb-6 ${errors.Telefono ? 'border-l-4 border-[#d4af37] pl-4' : ''}`}>
            <label
              htmlFor="Telefono"
              className="block mb-2 font-light text-[#3a3226] tracking-wide"
            >
              Teléfono
            </label>
            <input
              id="Telefono"
              type="tel"
              name="Telefono"
              value={formData.Telefono}
              onChange={handleChange}
              placeholder="10 dígitos sin espacios"
              className={`w-full px-4 py-3 bg-[#f9f7f1] rounded-sm text-[#3a3226] text-base
                focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition font-light`}
            />
            {errors.Telefono && (
              <span className="text-[#d4af37] text-xs mt-1 block font-light">{errors.Telefono}</span>
            )}
          </div>

          {/* Mensaje */}
          <div className={`mb-6 ${errors.Mensaje ? 'border-l-4 border-[#d4af37] pl-4' : ''}`}>
            <label
              htmlFor="Mensaje"
              className="block mb-2 font-light text-[#3a3226] tracking-wide"
            >
              Mensaje
            </label>
            <textarea
              id="Mensaje"
              name="Mensaje"
              rows={4}
              value={formData.Mensaje}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
              className={`w-full px-4 py-3 bg-[#f9f7f1] rounded-sm text-[#3a3226] text-base resize-y
                focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition font-light`}
            />
            {errors.Mensaje && (
              <span className="text-[#d4af37] text-xs mt-1 block font-light">{errors.Mensaje}</span>
            )}
          </div>

          {/* Recaptcha y checkbox */}
          <div className={`mb-6 ${errors.recaptcha || errors.aceptarPrivacidad ? 'border-l-4 border-[#d4af37] pl-4' : ''}`}>
            {import.meta.env.VITE_RECAPTCHA_KEY ? (
              <>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                  onChange={handleRecaptchaChange}
                />
                {errors.recaptcha && (
                  <span className="text-[#d4af37] text-xs mt-1 block font-light">{errors.recaptcha}</span>
                )}

                <div className="flex items-start mt-4">
                  <input
                    type="checkbox"
                    name="aceptarPrivacidad"
                    id="aceptarPrivacidad"
                    checked={formData.aceptarPrivacidad}
                    onChange={handleCheckboxChange}
                    className="mt-1 mr-3 h-4 w-4 rounded-sm border-[#3a3226] text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <label htmlFor="aceptarPrivacidad" className="text-[#3a3226] text-xs select-none font-light">
                    Acepto el{' '}
                    <Link
                      to="/AvisoDePrivacidad"
                      className="text-[#d4af37] underline hover:text-[#c19b2e] transition"
                    >
                      Aviso de Privacidad
                    </Link>{' '}
                    y{' '}
                    <Link
                      to="/Terminos"
                      className="text-[#d4af37] underline hover:text-[#c19b2e] transition"
                    >
                      Términos y Condiciones
                    </Link>
                  </label>
                </div>

                {errors.aceptarPrivacidad && (
                  <span className="text-[#d4af37] text-xs mt-1 block font-light">{errors.aceptarPrivacidad}</span>
                )}
              </>
            ) : (
              <span className="text-[#d4af37] text-xs">No se pudo cargar reCAPTCHA</span>
            )}
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-[#2a2e35] text-[#e8e6e1] font-light tracking-wide rounded-sm
              hover:bg-[#3a3f47] transition disabled:bg-[#a8a6a1] disabled:cursor-not-allowed flex justify-center items-center gap-2
              border border-[#3a3f47]`}
          >
            {isSubmitting && (
              <svg
                className="animate-spin h-4 w-4 text-[#e8e6e1]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {/* Mensaje de estado */}
          {status && (
            <div
              className={`mt-6 p-3 rounded-sm text-center font-light tracking-wide text-sm
                ${
                  status.includes('éxito')
                    ? 'bg-[#f0ebe0] text-[#3a3226] border border-[#d4af37]'
                    : 'bg-[#f0ebe0] text-[#d4af37] border border-[#d4af37]'
                }`}
              role="alert"
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Formulario;