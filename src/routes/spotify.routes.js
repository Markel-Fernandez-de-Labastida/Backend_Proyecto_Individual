const { Router } = require("express");
const {login, callback} = require("../controllers/spotify.controllers")
const routes = Router();

/**
 * Rutas usuario
 */
routes.get('/login', login);
routes.get('/callback', callback);


module.exports = routes;