const jwt = require('jsonwebtoken')


const createJWToken = (id, role) => {
    return new Promise((resolve, reject) => {
        
        const payload = {id : id, role : role};
        //console.log("Dentro de crear el token: ", payload);

        jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: '2h'
                },
                (error, token) => { 
                    if(error){
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