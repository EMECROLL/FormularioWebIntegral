const express = require("express");
const router = express.Router();
const helloController = require("../controllers/helloController");

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Retorna un saludo
 *     tags: [Saludo]
 *     responses:
 *       200:
 *         description: Hola Mundo!!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hola Mundo desde la capa de Repositorio!
 */
router.get("/hello", helloController.sayHello);

module.exports = router;