

/**
 * Verifica si el rol corresponde con el indicado
 * @param {string} requiredRole Rol necesario para avanzar
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos saliente
 * @param {object} next Continua al controlador o a otro middleware
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const verifyRole = (requiredRole) => (req, res, next) => {
    console.log("Verificar rol: req.user: ", req.user);
    if (req.user.role !== role) {
        return res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
    }
    next();
};

module.exports = {
    verifyRole
};