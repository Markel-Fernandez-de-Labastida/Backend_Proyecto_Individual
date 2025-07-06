const {
    showAllUsers,
    checkUserByEmail,
    showUserById,
    createUser,
    modifyUser,
    deleteUser,
    showRoles,
    checkRoles,
    checkLogin,
    checkUsers
} = require("../models/users.models");

const getRoles = async (req, res) => {
    try {
        const answer = await showRoles();
        if (!answer){
            return res.status(404).json({
                ok:false,
                msg: "Error al mostrar todos los roles",
            });
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Roles recividos",
                data: answer,
            })
        }
    } catch (error) {
        console.log({  error });
        res.status(500).json({
            ok: false,
            msg: "Error. Contacte con el administrador",
        })
    }
}

const checkIfEmailExists = async (req, res) => {
    const {user_email} = req.body;
    try {
        const answer = await checkUserByEmail(user_email);
        if (!answer) {
            return res.status(404).json({
                ok: false,
                msg: "El correo no existe",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Un usuario con ese correo recivido",
                data: answer,
            })
        }
    } catch (error) {
        console.log({error});
        res.status(500).json({
            ok: false,
            msg: "Error. Contacte con el administrador"
        })
    }
}


const getAllUsers = async (req, res) => {
    
    try {
        const answer = await showAllUsers();
        if (!answer){
            return res.status(404).json({
                ok:false,
                msg: "Error al mostrar a todos los usuarios",
            });
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Usuario recibido",
                data: answer,
            })
        }
    } catch (error) {
        console.log({  error });
        res.status(500).json({
            ok: false,
            msg: "Error. Contacte con el administrador",
        })
    }
}


const getUserById = async (req, res) => {
    const {id_user} = req.body;
    try {
        // TODO: Comprobar si el id existe
        const answer = await showUserById(id_user);
        if (!answer) {
            return res.status(404).json({
                ok: false,
                msg: "El id no existe",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Usuario recibido",
                data: answer,
            })
        }
    } catch (error) {
        console.log({error});
        res.status(500).json({
            ok: false,
            msg: "Error. Contacte con el administrador"
        })
    }
}

const insertUser = async (req, res) => {
    const {user_name, user_password, user_email, user_role} = req.body;
    try {
        const email = await checkUserByEmail(user_email);
        if (email) {
            return res.status(404).json({
                ok: false,
                msg: "El correo ya existe",
            })
        }
        const role = await checkRoles(user_role);
        if (!role) {
            return res.status(404).json({
                ok: false,
                msg: "El rol introducido no existe",
            })
        }
        const answer = await createUser(user_name, user_password, user_email, user_role);
        if (!answer) {
            res.status(404).json({
                ok: false,
                msg: "Error al insertar un usuario"
            })
        } else {
            res.status(200).json({
                ok: true,
                msg: "Usuario insertado",
                data: answer
            })
        }
    } catch (error) {
        console.log({error});
        res.status(500).json({
            ok: false,
            msg: "ERROR. Contacte con el administrador"
        })
    }
}


const updateUser = async (req, res) => {
    const {user_role, user_id} = req.body;
    try {
        const role = await checkRoles(user_role);
        if (!role) {
            return res.status(404).json({
                ok: false,
                msg: "El rol introducido no existe",
            })
        }
        const answer = await modifyUser(user_role, user_id);
        if (!answer) {
            res.status(404).json({
                ok: false,
                msg: "Error al actualizar"
            })
        } else {
            res.status(200).json({
                ok: true,
                msg: "Usuario actualizado",
                data: answer
            })
        }
    } catch (error) {
        console.log({error});
        res.status(500).json({
            ok: false,
            msg: "ERROR. Contacte con el administrador"
        })
    }
}


const delUser = async (req, res) => {
    const {id_user} = req.body;
    try {
        // TODO: Comprobar que el usuario existe
        const user = await checkUsers(id_user);
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: "El usuario introducido no existe",
            })
        }
        const answer = await deleteUser(id_user);
        if (!answer) {
            res.status(404).json({
                ok: false,
                msg: "Error al eliminar"
            })
        } else {
            res.status(200).json({
                ok: true,
                msg: "Usuario eliminado",
                data: answer
            })
        }
    } catch (error) {
        console.log({error});
        res.status(500).json({
            ok: false,
            msg: "ERROR. Contacte con el administrador"
        })
    }
}

module.exports = {
    getRoles,
    getAllUsers,
    getUserById,
    insertUser,
    updateUser,
    delUser
}