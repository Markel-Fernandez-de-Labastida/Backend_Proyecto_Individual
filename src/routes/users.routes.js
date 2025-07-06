/**
 * Importaciones
 */
const { Router } = require("express");
const { check } = require('express-validator');
const {
  getAllUsers,
  getUserById,
  insertUser,
  updateUser,
  delUser
} = require("../controllers/users.controllers");
const { verifyRole } = require("../middleware/verifyRole");
const { verifyJWT } = require("../middleware/verifyJWT");
const { validateInput } = require("../middleware/validateInput");

const routes = Router();

/**
 * Rutas usuario
 */
routes.get('/AllUsers', /* [
        check("user_email", "invalid email").notEmpty().isEmail(),
        check("user_password", "Invalid password").isLength({min: 6, max: 20}).withMessage('Debe tener entre 3 y 100 caracteres'),
        validateInput
], */ getAllUsers);
routes.post('/Create', insertUser);
routes.post('/Update', updateUser);
routes.post('/Delete', delUser);

module.exports = routes;