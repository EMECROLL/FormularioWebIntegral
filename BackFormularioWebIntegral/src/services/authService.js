const { crearAdministrador, obtenerAdministradorPorCorreo } = require("../repositories/authRepository");
const { adminSchema } = require("../validators/authValidator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRET;

const registrarAdministrador = async (adminData) => {
    const { error } = adminSchema.validate(adminData);
    if (error) {
        throw new Error("Datos inválidos: " + error.details[0].message);
    }

    const adminId = await crearAdministrador(adminData);
    return { id: adminId, mensaje: "Administrador creado con éxito" };
};

const loginAdministrador = async ({ correo, contrasenia }) => {
    // Buscar admin por correo
    const admin = await obtenerAdministradorPorCorreo(correo);
    if (!admin) {
        throw new Error("Correo o contraseña incorrectos");
    }

    // Comparar contraseña
    const esContrasenaValida = await bcrypt.compare(contrasenia, admin.Contrasenia);
    if (!esContrasenaValida) {
        throw new Error("Correo o contraseña incorrectos");
    }

    // Generar JWT
    const payload = {
        id: admin.Id,
        correo: admin.Correo,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    return { token, admin: { id: admin.Id, correo: admin.Correo } };
};

module.exports = {
    registrarAdministrador,
    loginAdministrador,
};
