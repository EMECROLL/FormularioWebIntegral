const { registrarAdministrador, loginAdministrador } = require("../services/authService");

const registrarAdministradorHandler = async (req, res) => {
    try {
        const adminData = req.body;
        const result = await registrarAdministrador(adminData);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error en registrarAdministrador:", error);
        res.status(400).json({ error: error.message });
    }
};

const loginAdministradorHandler = async (req, res) => {
    try {
        const { correo, contrasenia } = req.body;
        const resultado = await loginAdministrador({ correo, contrasenia });
        res.json(resultado);
    } catch (error) {
        console.error("Error en loginAdministrador:", error);
        res.status(401).json({ error: error.message });
    }
};


module.exports = {
    registrarAdministrador: registrarAdministradorHandler,
    loginAdministrador: loginAdministradorHandler,
};
