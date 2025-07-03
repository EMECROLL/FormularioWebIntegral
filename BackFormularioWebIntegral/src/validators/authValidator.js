const Joi = require("joi");

const adminSchema = Joi.object({
    correo: Joi.string().email().required(),
    contrasenia: Joi.string().min(6).required(),
});

module.exports = {
  adminSchema,
};