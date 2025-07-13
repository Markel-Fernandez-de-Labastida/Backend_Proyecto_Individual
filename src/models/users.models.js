const { users } = require("../models/querys");
const { dbConnect } = require("../utils/dbConnect");


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