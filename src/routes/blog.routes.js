/**
 * Importaciones
 */
const { Router } = require("express");
const { check } = require('express-validator');
const {
  getAllPosts,
  getAllDetails,
  insertPost,
  updatePost,
  delPost
} = require("../controllers/blog.controllers");
const { verifyRole } = require("../middleware/verifyRole");
const { verifyJWT } = require("../middleware/verifyJWT");
const { validateInput } = require("../middleware/validateInput");

const routes = Router();

/**
 * Rutas usuario
 */
routes.get('/AllPosts', /* [
        check("user_email", "invalid email").notEmpty().isEmail(),
        check("user_password", "Invalid password").isLength({min: 6, max: 20}).withMessage('Debe tener entre 3 y 100 caracteres'),
        validateInput
], */ getAllPosts);
routes.get('/AllDetails/:id_post', getAllDetails);
routes.post('/Create', insertPost);
routes.post('/Update', updatePost);
routes.post('/Delete', delPost);


module.exports = routes;

