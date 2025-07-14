const {
    idExists,
    showRoles,
    checkUserByEmail,
    postByUserId,
    showAllPosts,
    postAllDetails,
    createPost,
    modifyPost,
    deletePost
} = require("../models/blog.models");
const { showUserById } = require('../models/users.models')
const { post } = require("../routes/auth.routes");

/**
 * Recive todas las noticias
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const getAllPosts = async (req, res) => {
    try {
        const posts = await showAllPosts();
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se han encontrado noticias",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Noticias recividas",
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
 * Recive todas las noticias que ha creado un usuario
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const getPostsByUserId = async (req, res) => {
    console.log("req: ", req.params);
    const { id_user } = req.params;
    //console.log("req params: ", id_user)
    try {
        // TODO: comprobar si el id existe
        const answer = await showUserById(id_user);
        if (!answer) {
            return res.status(404).json({
                ok: false,
                msg: "El usuario no existe",
            })
        }
        const posts = await postByUserId(id_user);
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se han encontrado noticias",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Noticias recividas",
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
 * Recive todos los campos de una noticia
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const getAllDetails = async (req, res) => {
    const { id_post } = req.params;
    console.log("req params: ", id_post)
    try {
        // TODO: comprobar si el id existe
        const post = await idExists(id_post);
        if (!post) {
            return res.status(404).json({
                ok: false,
                msg: "No se han encontrado id noticias",
            })
        }
        const posts = await postAllDetails(id_post);
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se han encontrado noticias",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Noticias recividas",
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
 * Crea una nueva noticia
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const insertPost = async (req, res) => {
    const { post_user, post_title, post_subtitle, post_content, date_insert } = req.body;
    try {
        const posts = await createPost(post_user, post_title, post_subtitle, post_content, date_insert);
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se ha podido crear el post",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Noticias creada",
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
 * Actualiza una noticia
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const updatePost = async (req, res) => {
    const { id_post, post_title, post_subtitle, post_content, date_insert } = req.body;
    try {
        const post = await idExists(id_post);
        if (!post) {
            return res.status(404).json({
                ok: false,
                msg: "No se han encontrado noticias que modificar",
            })
        }
        const posts = await modifyPost(id_post, post_title, post_subtitle, post_content, date_insert);
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se ha podido modificar el post",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Noticias modificada",
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
 * Elimina una noticia
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns Devueve un objeto: Si sale bien, un ok: true, mensaje, datos devueltos pos la base de datos.
 * Si sale mal, un ok: false y un mensaje
 */
const delPost = async (req, res) => {
    const { id_post } = req.params;
    try {
        const post = await idExists(id_post);
        if (!post) {
            return res.status(404).json({
                ok: false,
                msg: "No se han encontrado noticias que eliminar",
            })
        }
        const posts = await deletePost(id_post);
        if (!posts) {
            return res.status(404).json({
                ok: false,
                msg: "No se ha podido eliminar el post",
            })
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Noticias eliminada",
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
    getAllPosts,
    getAllDetails,
    getPostsByUserId,
    insertPost,
    updatePost,
    delPost
}