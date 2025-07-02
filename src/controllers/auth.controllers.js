const bcrypt = require('bcryptjs');
const {
    showAllUsers,
    checkUserByEmail,
    showUserById,
    createUser,
    modifyUser,
    deleteUser,
    showRoles,
    checkLogin
} = require("../models/users.models");
const { createJWToken } = require('../utils/createJWToken');


const login = async (req, res) => {
    const {user_email, user_password} = req.body;
    try {
        // TODO: No traer el correo
        const email = await checkUserByEmail(user_email);
        if (!email) {
            return res.status(404).json({
                ok: false,
                msg: "El correo o la contraseña es incorrecta",
            })
        }
        const verifyPassword = bcrypt.compareSync(user_password, email.user_password);
        if (!verifyPassword) {
            return res.status(401).json({
                ok: false,
                msg: 'El correo o la contraseña es incorrecta'
            })
        }
        let token;
        await createJWToken(email.id_user , email.user_role)
            .then((resp) => token = resp)
            .catch((error) => {
                console.log(error)
                return res.status(401).json({
                    ok: false,
                    msg: error
                })
            })
        return res.status(200).json({
            ok: true,
            msg: 'Usuario logueado',
            email,
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error. Contacte con el administrador'
        })
    }
}

const registry = async (req, res) => {
    console.log("Registro: ", req.body);
    const {user_name, user_password, user_email, user_role} = req.body;
    try {
        // TODO: comprobar si el rol existe (No es necesario
        // porque habra dos endpoint por donde registrarse:
        //  1. Ruta publica: Cuaquiera podra registrarse y tendran
        //  el rol de "base"
        //  2. Ruta privada: El administrador podra registrar y
        //  y tendran el rol de "editor" )

        const email = await checkUserByEmail(user_email);
        if (email) {
            return res.status(403).json({
                ok: false,
                msg: "Ya existe un usuario con ese correo",
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(user_password, salt);

        const answer = await createUser(user_name, encryptedPassword, user_email, user_role);
        if (!answer) {
            res.status(404).json({
                ok: false,
                msg: "Error al insertar usuario"
            })
        } else {
            res.status(201).json({
                ok: true,
                msg: "Usuario creado",
                data: answer,
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error. Contacte con el administrador"
        })
    }
}

const renewJWToken = async (req, res) => {
    // Crear el "verifyJWT" para validar y guardar en req los datos de id y role
    //console.log("renew req :",req);
    const id = req.id;
    const role = req.role;
    //console.log("RenewJWT: ", email, role);

    let newToken;
    await createJWToken(id, role)
        .then((resp) => newToken = resp)
        .catch((error) => {
            return res.status(401).json({
                ok: false,
                msg: error
            })
        });
    return res.status(201).json({
        ok: true,
        newToken
    })
}



module.exports = {
    login,
    registry,
    renewJWToken
}