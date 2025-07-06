const {users} = require("../models/querys");
const {dbConnect} = require("../utils/dbConnect");

const addFavorite = async (id_user, id_track) => {
        let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(users.createFavorites, [id_user, id_track]);

        return answer.rows[0]; 
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

const delFavorite = async (id_favorite) => {
        let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(users.deleteFavorites, [id_favorite]);

        return answer.rows[0]; 
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

module.exports = {
    addFavorite,
    delFavorite
}
