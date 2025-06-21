const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/formularioController");

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                     type: integer
 *                   NombreCompleto:
 *                     type: string
 *                   Correo:
 *                     type: string
 *                   Telefono:
 *                     type: string
 *                   Mensaje:
 *                     type: string
 *
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - NombreCompleto
 *               - Correo
 *             properties:
 *               NombreCompleto:
 *                 type: string
 *                 example: Juan Pérez
 *               Correo:
 *                 type: string
 *                 example: juan.perez@example.com
 *               Telefono:
 *                 type: string
 *                 example: 555-123-4567
 *               Mensaje:
 *                 type: string
 *                 example: Mensaje de prueba
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario creado
 *                 id:
 *                   type: integer
 */
router.get("/usuarios", usuarioController.getUsuarios);
router.post("/usuarios", usuarioController.postUsuario);

module.exports = router;
