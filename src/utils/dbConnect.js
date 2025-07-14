const { Pool } = require("pg");
require("dotenv").config();

/**
 * Conexion a base de datos
 */
const dbConnect = () => {
  try {
    const pool = new Pool({
      host: process.env.POOL_HOST,
      user: process.env.POOL_USER,
      database: process.env.POOL_DATABASE,
      password: process.env.POOL_PASSWORD,
    });
    console.log("Conectado a BD");
    return pool;
  } catch (error) {
    console.log(error);
    throw "Error. Contacte con el administrador";
  } finally {
  }
};

module.exports = {
  dbConnect
};