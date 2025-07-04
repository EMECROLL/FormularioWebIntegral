const { getUsuarios, insertarUsuario, actualizarStatusUsuario } = require("../repositories/formularioRepository");
const { validarRecaptcha } = require("../services/recaptchaService");
const { formularioSchema } = require("../validators/formularioValidator");

const obtenerUsuarios = async () => {
  return await getUsuarios();
};

const crearUsuario = async (usuarioData) => {
  // Satanización de los datos
  const { error } = formularioSchema.validate(usuarioData);
  if (error) {
    throw new Error("Datos inválidos: " + error.details[0].message);
  } else {
    await validarRecaptcha(usuarioData.recaptcha)
      .then((resultado) => {
        if (!resultado.success) {
          throw new Error(
            "Validación de reCAPTCHA fallida: " + resultado.message
          );
        }
        console.log("Validación de reCAPTCHA exitosa:", resultado.data);
        return insertarUsuario(usuarioData);
      })
      .catch((error) => {
        console.error("Error al validar reCAPTCHA:", error);
        throw new Error("Error al validar reCAPTCHA: " + error.message);
      });
  }
  // return await insertarUsuario(usuarioData);
};

updateStatusUsuario = async (id, nuevoEstatus) => {
  try {
    await actualizarStatusUsuario(id, nuevoEstatus).then((resultado) => {
      if (resultado.status === "success") {
        console.log("Usuario actualizado correctamente:", resultado.message);
        return resultado;
      }
    });
  } catch (error) {
    console.error("Error al actualizar el estado del usuario:", error);
    throw new Error("Error al actualizar el estado del usuario: " + error.message);
  }
};

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  updateStatusUsuario,
};
