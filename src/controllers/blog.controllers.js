const {
    idExists,
    showRoles,
    checkUserByEmail,
    showAllPosts,
    postAllDetails,
    createPost,
    modifyPost,
    deletePost
} = require("../models/blog.models");
const { post } = require("../routes/auth.routes");

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

const getAllDetails = async (req, res) => {
    const {id_post} = req.params;
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

const insertPost = async (req, res) => {
    const {post_user, post_title, post_subtitle, post_content, date_insert} = req.body;
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

const updatePost = async (req, res) => {
    const {id_post, post_title, post_subtitle, post_content, date_insert} = req.body;
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

const delPost = async (req, res) => {
    const {id_post} = req.body;
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
    insertPost,
    updatePost,
    delPost
}