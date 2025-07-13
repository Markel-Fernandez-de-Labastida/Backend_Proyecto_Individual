const jwt = require('jsonwebtoken')

/**
 * Crea un nuevo JWT
 * @param {number} id ID del usuario
 * @param {string} role Rol del usuario
 * @returns Envia un JWT nuevo con los datos del usuario que se acaba de loguear
 */
const createJWToken = (id, role) => {
    return new Promise((resolve, reject) => {

        const payload = { id: id, role: role };
        //console.log("Dentro de crear el token: ", payload);

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: '2h'
            },
            (error, token) => {
                if (error) {
                    reject('error al generar el JWToken')

                }
                resolve(token);
            }
        )
    })

}

module.exports = {
    createJWToken
}