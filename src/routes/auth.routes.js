/**
 * Importaciones
 */
const { Router } = require("express");
const {
  login,
  register,
  updateUser,
  delUser,
  singUp
} = require("../controllers/users.controllers");

const routes = Router();

/**
 * Rutas usuario
 */
routes.post('/login', login);
routes.post('/singUp', singUp);

module.exports = routes;
