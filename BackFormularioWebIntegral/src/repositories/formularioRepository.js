const { connectDB } = require('../config/bd');
const StatusEnum = require('../enums/enumerations');

const getUsuarios = async () => {
  const connection = await connectDB();
  const [rows] = await connection.execute('SELECT * FROM Usuarios');
  await connection.end();

  const statusMap = Object.fromEntries(
    Object.entries(StatusEnum).map(([key, value]) => [value, key])
  );

  // Convertimos el campo Estatus de cada usuario
  const usuariosConEstatusTexto = rows.map(usuario => ({
    ...usuario,
    Estatus: statusMap[usuario.Estatus] || 'Desconocido',
  }));

  return usuariosConEstatusTexto;
};

const insertarUsuario = async ({ NombreCompleto, Correo, Telefono, Mensaje }) => {
  const connection = await connectDB();
  const estatus = StatusEnum.NUEVO;
  const query = `
    INSERT INTO Usuarios (NombreCompleto, Correo, Telefono, Mensaje, Estatus)
    VALUES (?, ?, ?, ?, ?)
  `;
  const params = [NombreCompleto, Correo, Telefono, Mensaje, estatus];
  const [result] = await connection.execute(query, params);
  await connection.end();
  return result.insertId;
};

actualizarStatusUsuario = async (id, nuevoEstatus) => {
  const connection = await connectDB();
  const query = `
    UPDATE Usuarios
    SET Estatus = ?
    WHERE id = ?
  `;
  const params = [nuevoEstatus, id];
  await connection.execute(query, params);
  await connection.end();
  return { status: 'success', message: 'Usuario actualizado correctamente' };
};

module.exports = {
  getUsuarios,
  insertarUsuario,
  actualizarStatusUsuario,
};
