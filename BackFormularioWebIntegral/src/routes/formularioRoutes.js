const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/formularioController");

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones relacionadas con usuarios del formulario
 */

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
 *                 example: 5551234567
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

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualiza el estatus de un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nuevoEstatus
 *             properties:
 *               nuevoEstatus:
 *                 type: int
 *                 example: 1
 *     responses:
 *       200:
 *         description: Estatus actualizado correctamente
 *       500:
 *         description: Error del servidor
 */

router.get("/usuarios", usuarioController.getUsuarios);
router.post("/usuarios", usuarioController.postUsuario);
router.put("/usuarios/:id", usuarioController.putStatusUsuario);

module.exports = router;
