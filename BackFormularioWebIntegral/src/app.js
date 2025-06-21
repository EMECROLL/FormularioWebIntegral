require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');  
const PORT = process.env.PORT || 3000;

//* Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

app.use(express.json());
app.use(cors()); 


//* Rutas
const helloRoutes = require('./routes/helloRoutes');
app.use('/api', helloRoutes);
const formularioRoutes = require('./routes/formularioRoutes');
app.use('/api', formularioRoutes);

//* Ruta Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Swagger disponible en http://localhost:${PORT}/swagger`);
});