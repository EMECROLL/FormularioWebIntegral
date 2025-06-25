const Joi = require("joi");

const formularioSchema = Joi.object({
  NombreCompleto: Joi.string().min(3).max(30).required(),
  Correo: Joi.string().email().required(),
  Telefono: Joi.number().integer().min(18).max(99).optional(),
  Mensaje: Joi.string().min(10).max(500).required(),
  tokenRecaptcha: Joi.string().required(),
});

module.exports = {
  formularioSchema,
};
