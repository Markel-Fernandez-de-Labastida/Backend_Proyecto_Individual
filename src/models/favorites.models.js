const { users } = require("../models/querys");
const { dbConnect } = require("../utils/dbConnect");

/**
 * Añade un favorito
 * @param {number} id_user Id del usuario
 * @param {number} id_track Id de la cancion
 * @returns Retorna: Si sale bien, los datos de la inserción a favoritos.
 * Si no, error
 */
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
/**
 * Elimina de favoritos
 * @param {number} id_favorite 
 * @returns Retorna: Si sale bien, los datos de la eliminacion de favoritos.
 * Si no, error
 */
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
