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

const putStatusUsuario = async (req, res) => {
  const { id } = req.params;
  const { nuevoEstatus } = req.body;

  try {
    const resultado = await updateStatusUsuario(id, nuevoEstatus);
    res.json(resultado);
  } catch (error) {
    console.error('Error en putUsuario:', error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

module.exports = {
  getUsuarios,
  postUsuario,
  putStatusUsuario
};
