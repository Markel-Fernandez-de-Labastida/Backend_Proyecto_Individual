/**
 * Importaciones
 */
const { Router } = require("express");
const { check } = require('express-validator');
const {
  getAllPosts,
  getAllDetails,
  getPostsByUserId,
  insertPost,
  updatePost,
  delPost
} = require("../controllers/blog.controllers");
const { verifyRole } = require("../middleware/verifyRole");
const { verifyJWT } = require("../middleware/verifyJWT");
const { validateInput } = require("../middleware/validateInput");

const routes = Router();

/**
 * Rutas del blog
 */
routes.get('/AllPosts', /* [
        check("user_email", "invalid email").notEmpty().isEmail(),
        check("user_password", "Invalid password").isLength({min: 6, max: 20}).withMessage('Debe tener entre 3 y 100 caracteres'),
        validateInput
], */ getAllPosts);
routes.get('/allDetails/:id_post', getAllDetails);
routes.get('/getPostsByUser/:id_user', getPostsByUserId)
routes.post('/create', insertPost);
routes.put('/update', updatePost);
routes.delete('/delete/:id_post', delPost);


module.exports = routes;

