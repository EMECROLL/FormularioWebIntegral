const { connectDB } = require("../config/bd");
const bcrypt = require("bcryptjs");

const crearAdministrador = async ({ correo, contrasenia }) => {
    const connection = await connectDB();

    const hashedPassword = await bcrypt.hash(contrasenia, 10);

    const query = `
        INSERT INTO Administradores (Correo, Contrasenia)
        VALUES (?, ?)
    `;
    const params = [correo, hashedPassword];

    const [result] = await connection.execute(query, params);
    await connection.end();

    return result.insertId;
};

const obtenerAdministradorPorCorreo = async (correo) => {
  const connection = await connectDB();

  const query = 'SELECT * FROM Administradores WHERE Correo = ? LIMIT 1';
  const [rows] = await connection.execute(query, [correo]);

  await connection.end();

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
};

module.exports = {
    crearAdministrador,
    obtenerAdministradorPorCorreo,
};
