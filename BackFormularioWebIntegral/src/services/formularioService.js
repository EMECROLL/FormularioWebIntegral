const { getUsuarios } = require('../repositories/formularioRepository');
const { insertarUsuario } = require('../repositories/formularioRepository');

const obtenerUsuarios = async () => {
  return await getUsuarios();
};

const crearUsuario = async (usuarioData) => {
  return await insertarUsuario(usuarioData);
};

module.exports = {
  obtenerUsuarios,
  crearUsuario,
};