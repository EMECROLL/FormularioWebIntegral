const fetch = require("node-fetch");

const validarRecaptcha = async (token) => {
  const secretKey = process.env.CLAVE_SECRETA_RECAPTCHA;

  if (!token) {
    return { success: false, message: "Token de reCAPTCHA no proporcionado" };
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    console.log("Respuesta de reCAPTCHA:", data);

    if (!data.success) {
      return {
        success: false,
        message: "Falló la validación de reCAPTCHA",
        data,
      };
    }
    return { success: true, data };
  } catch (err) {
    console.error("Error verificando reCAPTCHA:", err);
    return { success: false, message: "Error al verificar con Google" };
  }
};

module.exports = {
  validarRecaptcha,
};
