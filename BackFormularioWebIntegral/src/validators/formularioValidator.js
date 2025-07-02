const Joi = require("joi");

const formularioSchema = Joi.object({
  NombreCompleto: Joi.string().min(3).max(30).required(),
  Correo: Joi.string().email().required(),
  Telefono: Joi.number().integer().min(10).optional(),
  Mensaje: Joi.string().max(500).required(),
  recaptcha: Joi.string().required(),
  aceptaPrivacidad: Joi.boolean().required().valid(true),
});

module.exports = {
  formularioSchema,
};
