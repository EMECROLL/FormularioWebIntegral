import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom"; // Asegúrate de tenerlo importado
import "../App.css";

interface FormData {
  NombreCompleto: string;
  Correo: string;
  Telefono: string;
  Mensaje: string;
  recaptcha: string;
  aceptaPrivacidad: boolean;
}

interface FormErrors {
  NombreCompleto?: string;
  Correo?: string;
  Telefono?: string;
  Mensaje?: string;
  recaptcha?: string;
  aceptaPrivacidad?: string;
}

function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    NombreCompleto: "",
    Correo: "",
    Telefono: "",
    Mensaje: "",
    recaptcha: "",
    aceptaPrivacidad: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.NombreCompleto.trim())
      newErrors.NombreCompleto = "Nombre requerido";
    if (!formData.Correo.trim()) newErrors.Correo = "Correo requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Correo))
      newErrors.Correo = "Correo inválido";

    if (!formData.Telefono.trim()) newErrors.Telefono = "Teléfono requerido";
    else if (!/^\d{10}$/.test(formData.Telefono))
      newErrors.Telefono = "Teléfono debe tener 10 dígitos";

    if (!formData.Mensaje.trim()) newErrors.Mensaje = "Mensaje requerido";
    if (!formData.recaptcha)
      newErrors.recaptcha = "Por favor verifica que no eres un robot.";
    if (!formData.aceptaPrivacidad)
      newErrors.aceptaPrivacidad =
        "Debes aceptar el aviso de privacidad para continuar.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({ ...prev, aceptaPrivacidad: checked }));
    setErrors((prev) => ({ ...prev, aceptaPrivacidad: "" }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setFormData((prev) => ({ ...prev, recaptcha: token || "" }));
    setErrors((prev) => ({ ...prev, recaptcha: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus("Enviando...");

    try {
      const apiUrl = import.meta.env.VITE_URLAPI;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      setStatus("Mensaje enviado con éxito");
      setFormData({
        NombreCompleto: "",
        Correo: "",
        Telefono: "",
        Mensaje: "",
        recaptcha: "",
        aceptaPrivacidad: false,
      });
      setErrors({});
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("Error al enviar el mensaje. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-container">
      <div className="centered-form">
        <div className="form-card">
          <div className="form-header">
            <h1>Contáctanos</h1>
            <p>Llena el formulario y nos pondremos en contacto contigo</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div
              className={`form-group ${errors.NombreCompleto ? "error" : ""}`}
            >
              <label htmlFor="nombreCompleto">Nombre completo</label>
              <input
                id="NombreCompleto"
                type="text"
                name="NombreCompleto"
                value={formData.NombreCompleto}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
              />
              {errors.NombreCompleto && (
                <span className="error-message">{errors.NombreCompleto}</span>
              )}
            </div>

            <div className={`form-group ${errors.Correo ? "error" : ""}`}>
              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="Correo"
                type="email"
                name="Correo"
                value={formData.Correo}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
              />
              {errors.Correo && (
                <span className="error-message">{errors.Correo}</span>
              )}
            </div>

            <div className={`form-group ${errors.Telefono ? "error" : ""}`}>
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="Telefono"
                type="tel"
                name="Telefono"
                value={formData.Telefono}
                onChange={handleChange}
                placeholder="10 dígitos sin espacios"
              />
              {errors.Telefono && (
                <span className="error-message">{errors.Telefono}</span>
              )}
            </div>

            <div className={`form-group ${errors.Mensaje ? "error" : ""}`}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="Mensaje"
                name="Mensaje"
                rows={4}
                value={formData.Mensaje}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
              />
              {errors.Mensaje && (
                <span className="error-message">{errors.Mensaje}</span>
              )}
            </div>

            <div className={`form-group ${errors.recaptcha ? "error" : ""}`}>
              {import.meta.env.VITE_RECAPTCHA_KEY ? (
                <>
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                    onChange={handleRecaptchaChange}
                  />
                  {errors.recaptcha && (
                    <span className="error-message">{errors.recaptcha}</span>
                  )}

                  <div style={{ display: "flex" }}>
                    <div style={{ marginTop: 10, marginRight: 8 }}>
                      <input
                        type="checkbox"
                        name="aceptaPrivacidad"
                        checked={formData.aceptaPrivacidad}
                        onChange={handleCheckboxChange}
                      />
                    </div>

                    <div style={{ marginTop: "10px" }}>
                      <label>
                        <span>
                          Acepto el{" "}
                          <Link
                            to="/AvisoDePrivacidad"
                            style={{
                              color: "#007bff",
                              textDecoration: "underline",
                            }}
                          >
                            Aviso de Privacidad
                          </Link>{" "}
                          y{" "}
                          <Link
                            to="/Terminos"
                            style={{
                              color: "#007bff",
                              textDecoration: "underline",
                            }}
                          >
                            Términos y Condiciones
                          </Link>
                        </span>
                      </label>

                      {errors.aceptaPrivacidad && (
                        <div
                          className="error-message"
                          style={{ marginTop: "4px" }}
                        >
                          {errors.aceptaPrivacidad}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <span className="error-message">
                  No se pudo cargar reCAPTCHA
                </span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                "Enviar mensaje"
              )}
            </button>

            {status && (
              <div
                className={`status-message ${
                  status.includes("éxito") ? "success" : "error"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
