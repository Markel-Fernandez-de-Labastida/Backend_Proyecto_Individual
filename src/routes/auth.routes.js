/**
 * Importaciones
 */
const { Router } = require("express");
const { check } = require('express-validator');
const {
  login,
  registry,
  renewJWToken
} = require("../controllers/auth.controllers");
const { verifyRole } = require("../middleware/verifyRole");
const { verifyJWT } = require("../middleware/verifyJWT");
const { validateInput } = require("../middleware/validateInput");

const routes = Router();

/**
 * 
 */
routes.post('/login', /*[
        check("user_email", "invalid email").notEmpty().isEmail(),
        check("user_password", "Invalid password").isLength({min: 6, max: 20}).withMessage('Debe tener entre 3 y 100 caracteres'),
        validateInput
],*/ login);
routes.post('/register', registry);
routes.get('/renewJWToken', verifyJWT /* verifyRole('base') */, renewJWToken)

module.exports = routes;

