const { users } = require("../models/querys");
const { dbConnect } = require("../utils/dbConnect");

/**
 * Retorna todos los roles en la tabla de roles
 * @returns Retorna todos los roles en la tabla de roles
 */
const showRoles = async () => {
    let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(users.showRoles);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}
/**
 * Comprueba que hay usuarios con el rol introducido
 * @param {number} id_role Id del rol
 * @returns Retorna: si sale bien, devuelve los datos de los usuarios con el rol introducido.
 * Si sale mal, error o vacio
 */
const checkUsers = async (id_role) => {
    let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(users.checkUserExist, [id_role]);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}
/**
 * Comprueba que el rol introducido existe
 * @param {number} id_role Id del rol
 * @returns Retorna: Si sale bien, el rol introducido.
 * Si sale mal, error o vacio
 */
const checkRoles = async (id_role) => {
    let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(users.checkRoles, [id_role]);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}
/**
 * Comprueba que existe un usuario con el email introducido
 * @param {string} user_email Email de un usuario
 * @returns Retorna: Si sale bien, todos los campos del usuario con el email introducido.
 * Si sale mal, error o vacio
 */
const checkUserByEmail = async (user_email) => {
    let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(users.checkUserByEmail, [user_email]);

        return answer.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Devuelve todos los usuarios
 * @returns Retorna: Si sale bien, devuelve todos los usuarios.
 * Si sale mal, error o vacio
 */
const showAllUsers = async () => {
    let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(users.showAllUsers);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Devuelve el usuario que coincida con el id introducido
 * @param {number} id_user Id de un usuario
 * @returns Retorna: Si sale bien, devuelve todos los campos del id introducido.
 * Si sale mal, error o vacio
 */
const showUserById = async (id_user) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(users.showUserById, [id_user]);

        return answer.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Crea un usuario nuevo
 * @param {string} user_name Nombre del usuario
 * @param {string} user_password Contraseña del usuario
 * @param {string} user_email Email del usuario
 * @param {string} user_role Rol del usuario
 * @returns Retorna: Si sale bien, devuelve los datos del usuario creado.
 * Si sale mal, error o vacio
 */
const createUser = async (user_name, user_password, user_email, user_role) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(users.createUser, [user_name, user_password, user_email, user_role]);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Modifica el rol de un usuario
 * @param {number} user_role Id del role
 * @param {number} user_id Id del usuario
 * @returns Retorna: Si sale bien, devuelve todos los campos del usuario modificado.
 * Si sale mal, error o vacio
 */
const modifyUser = async (user_role, user_id) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(users.modifyUser, [user_role, user_id])

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Elimina a un usuario
 * @param {number} id_user Id del usuario
 * @returns Retorna: Si sale bien, devuelve todos los datos del usuarios eliminado.
 * Si sale mal, error o vacio
 */
const deleteUser = async (id_user) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(users.deleteUser, [id_user]);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

module.exports = {
    showRoles,
    checkUsers,
    checkRoles,
    checkUserByEmail,
    showAllUsers,
    showUserById,
    createUser,
    modifyUser,
    deleteUser
}