const { obtenerUsuarios } = require('../services/formularioService');
const { crearUsuario } = require('../services/formularioService');


const getUsuarios = async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error('Error en getUsuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

const postUsuario = async (req, res) => {
  try {
    const usuarioData = req.body;
    const nuevoUsuarioId = await crearUsuario(usuarioData);
    res.status(201).json({ message: 'Usuario creado', id: nuevoUsuarioId });
  } catch (error) {
    console.error('Error en postUsuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

module.exports = {
  getUsuarios,
  postUsuario,
};
