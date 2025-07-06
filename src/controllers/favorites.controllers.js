const {
    addFavorite,
    delFavorite
} = require("../models/favorites.models");



const insertFavorites = async (req, res) => {
    const {id_user, id_track} = req.body;
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

const deleteFavorites = async (req, res) => {
    const {id_favorite} = req.body;
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