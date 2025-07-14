const {
    addFavorite,
    delFavorite
} = require("../models/favorites.models");


/**
 * Inserta una cancion a favoritos
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const insertFavorites = async (req, res) => {
    const { id_user, id_track } = req.body;
    try {
        const posts = await addFavorite(id_user, id_track);
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se ha podido añadir a favoritos",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "añadido a favoritos",
                data: posts,
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error. Contacte con el administrador'
        })
    }
}

/**
 * Elimina una cancion de favoritos
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const deleteFavorites = async (req, res) => {
    const { id_favorite } = req.body;
    try {
        const posts = await delFavorite(id_favorite);
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se ha podido eliminar de favoritos",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "eliminar de favoritos",
                data: posts,
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error. Contacte con el administrador'
        })
    }
}

module.exports = {
    insertFavorites,
    deleteFavorites
}