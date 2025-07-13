const { Router } = require("express");
const { login, callback, spotifyToken } = require("../controllers/spotify.controllers")
const routes = Router();

/**
 * Rutas usuario
 */
routes.get('/login', login);
routes.get('/callback', callback);
routes.get('/token', spotifyToken);

module.exports = routes;