var jwt = require('jsonwebtoken');

/**
 * Verifica si el JWT es autentico
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos saliente
 * @param {object} next Continua al controlador o a otro middleware
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const verifyJWT = async (req, res, next) => {
    console.log("verify header: ", req.header);
    const authorization = req.header('authorization');
    if (!authorization) {
        return res.status(404).json({
            ok: false,
            msg: "no contiene autorización"
        });
    }
    const token = authorization.split(" ")[1];
    try {
        const privateKey = process.env.JWT_SECRET;
        const payLoad = jwt.verify(token, privateKey);

        console.log("Paiload: ", payLoad);

        req.id = payLoad.id;
        req.role = payLoad.role;

        //req.id = payLoad.
        next();

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: error
        });
    }
}

module.exports = {
    verifyJWT
}