const { validationResult } = require('express-validator');

/**
 * Verifica si los campos son correctos
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos saliente
 * @param {object} next Continua al controlador o a otro middleware
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const validateInput = (req, res, next) => {
    const errores = validationResult(req)

    if (!errores.isEmpty()) {
        return res.status(404).json({
            ok: false,
            errores: errores.mapped()
        });
    }
    next();
}

module.exports = {
    validateInput
};