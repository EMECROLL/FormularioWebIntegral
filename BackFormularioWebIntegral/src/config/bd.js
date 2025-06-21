require('dotenv').config();
const mysql = require('mysql2/promise');

const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'FormularioWebIntegral',
};

async function connectDB() {
  try {
    const connection = await mysql.createConnection(config);
    console.log('Conectado a MySQL');
    return connection;
  } catch (err) {
    console.error('Error de conexión MySQL:', err);
    throw err;
  }
}

module.exports = { connectDB };