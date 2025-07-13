/**
 * Importaciones
 */
const { Router } = require("express");
const { check } = require('express-validator');
const {
        insertFavorites,
        deleteFavorites
} = require("../controllers/favorites.controllers");
const { verifyRole } = require("../middleware/verifyRole");
const { verifyJWT } = require("../middleware/verifyJWT");
const { validateInput } = require("../middleware/validateInput");

const routes = Router();

/**
 * Rutas usuario
 */
routes.post('/AddFavorite', /* [
        check("user_email", "invalid email").notEmpty().isEmail(),
        check("user_password", "Invalid password").isLength({min: 6, max: 20}).withMessage('Debe tener entre 3 y 100 caracteres'),
        validateInput
], */ insertFavorites);
routes.post('/DelFavorite', deleteFavorites);

module.exports = routes;

