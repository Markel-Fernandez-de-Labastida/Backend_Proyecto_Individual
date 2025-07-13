/**
 * Importaciones
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const authRoutes = require("./routes/auth.routes");
const blogRoutes = require("./routes/blog.routes");
const usersRoutes = require("./routes/users.routes");
const favoriteRoutes = require("./routes/favorites.routes");
const spotifyRoutes = require("./routes/spotify.routes");
/* const {dbConnect} = require("./utils/dbConnect");

dbConnect(); */

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
  "http://localhost:5173",
  '*'
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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/favorites", favoriteRoutes);



/**
 * Autorización Spotify
 */
/* const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.CLIENT_SECRET;
// http://127.0.0.1:3000/api/v1/spotify/login
 */
app.use("/api/v1/spotify", spotifyRoutes);

/**
 * Pone el puerto a la escucha del servidor
 */
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
