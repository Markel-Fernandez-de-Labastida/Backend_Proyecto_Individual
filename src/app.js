/**
 * Importaciones
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config();


/**
 * Establecer el puerto
 */
const port = process.env.PORT || 3000;

/**
 * Hacer uso de Express
 */

const app = express();

/**
 * Middlewares
 */
const whiteList = [
  "http://localhost:3000",
  "http://localhost:5000",
//  "https://frontend-movie-app-b8in.onrender.com",
//  "https://frontend-proyectbackendgroup1.onrender.com",
];

app.use(
  cors({
    origin: whiteList,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




/**
 * Rutas
 */





/**
 * Pone el puerto a la escucha del servidor
 */
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
