const { connectDB } = require('../config/bd');

const getUsuarios = async () => {
  const connection = await connectDB();
  const [rows] = await connection.execute('SELECT * FROM Usuarios');
  await connection.end();
  return rows;
};

const insertarUsuario = async ({ NombreCompleto, Correo, Telefono, Mensaje }) => {
  const connection = await connectDB();
  const query = `
    INSERT INTO Usuarios (NombreCompleto, Correo, Telefono, Mensaje)
    VALUES (?, ?, ?, ?)
  `;
  const params = [NombreCompleto, Correo, Telefono, Mensaje];
  const [result] = await connection.execute(query, params);
  await connection.end();
  return result.insertId;
};

module.exports = {
  getUsuarios,
  insertarUsuario,
};
