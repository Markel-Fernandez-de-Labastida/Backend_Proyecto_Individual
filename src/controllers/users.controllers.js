const {
    showAllUsers,
    showUserById,
    createUser,
    modifyUser,
    deleteUser,
    showRoles
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
                msg: "Usuario creado",
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


const addUser = async (req, res) => {
    const {user_name, user_password, user_email, user_role} = req.body;
    try {
        // TODO: comprobar si el rol existe
        const answer = await createUser(user_name, user_password, user_email, user_role);
        if (!answer) {
            res.status(404).json({
                ok: false,
                msg: "Error al insertar usuario"
            })
        } else {
            res.status(201).json({
                ok: false,
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


const updateUser = async (req, res) => {
    const {user_role, user_id} = req.body;
    try {
        // TODO: Comprobar que el rol existe
        // TODO: Comprobar que el usuario existe

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
    const {user_id} = req.body;
    try {
        // TODO: Comprobar que el usuario existe

        const answer = await deleteUser(user_id);
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
    addUser,
    updateUser,
    delUser
}