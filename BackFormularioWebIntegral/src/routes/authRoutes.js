const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo administrador
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - correo
 *               - contrasenia
 *             properties:
 *               correo:
 *                 type: string
 *                 example: admin@example.com
 *               contrasenia:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       201:
 *         description: Administrador creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: Administrador creado con éxito
 *                 id:
 *                   type: integer
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login de administrador
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - correo
 *               - contrasenia
 *             properties:
 *               correo:
 *                 type: string
 *                 example: admin@example.com
 *               contrasenia:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Login exitoso, retorna token y datos del admin
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 admin:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     correo:
 *                       type: string
 */

router.post("/auth/register", authController.registrarAdministrador);
router.post("/auth/login", authController.loginAdministrador);

module.exports = router;
