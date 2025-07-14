const { blog } = require("../models/querys");
const { dbConnect } = require("../utils/dbConnect");

/**
 * Retorna la noticia con el id ingresado
 * @param {number} id_post Id de la noticia
 * @returns Retorna : Si sale bien, un objeto con los valores devueltos
 * desde la base de datos. Si sale mal, un error
 */
const idExists = async (id_post) => {
    let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(blog.checkPostExsists, [id_post]);

        return answer.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

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
 * Devuelve los campos del usuario que concuerde con el email introducido
 * @param {string} user_email Email de un usuario
 * @returns Devuelve: Si existe el email, los campos del usuario que concuerde con el email introducido.
 * Si no, error o vacio
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
 * Retorna todas las noticias
 * @returns Retorna todas las noticias
 */
const showAllPosts = async () => {
    let client;
    try {
        const pool = dbConnect();
        client = await pool.connect();

        const answer = await client.query(blog.showAllPosts);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Retorna todas las noticias que ha creado el usuario introducido
 * @param {number} id_user Id del usuario
 * @returns Retorna: si sale bien, todas las noticias que haya creado ese usuario.
 * Si sale mal, error o vacio
 */
const postByUserId = async (id_user) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(blog.showPostsByUserId, [id_user]);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Retorna todos los campos de una noticia
 * @param {number} id_post Id de la noticia
 * @returns Retorna: si sale bien, devuelve todos los campos de una noticia.
 * Si sale mal, error o vacio
 */
const postAllDetails = async (id_post) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(blog.postAllDetails, [id_post]);

        return answer.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Crea una noticia nueva
 * @param {number} post_user Id del usuario
 * @param {string} post_title Titulo de la noticia
 * @param {string} post_subtitle Subtitulo de la noticia
 * @param {string} post_content Contenido de la noticia
 * @param {Date} date_insert Fecha de inserción de la noticia
 * @returns Retorna: Si sale bien, los datos de la noticia creada.
 * Si no, error
 */
const createPost = async (post_user, post_title, post_subtitle, post_content, date_insert) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(blog.createPost, [post_user, post_title, post_subtitle, post_content, date_insert]);

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Modifica un noticia
 * @param {number} id_post 
 * @param {string} post_title 
 * @param {string} post_subtitle 
 * @param {string} post_content 
 * @param {Date} date_insert 
 * @returns Retorna: Si sale bien, los datos de la noticia modificada.
 * Si no, error
 */
const modifyPost = async (id_post, post_title, post_subtitle, post_content, date_insert) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(blog.modifyPost, [id_post, post_title, post_subtitle, post_content, date_insert])

        return answer.rows;
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Elimina una noticia
 * @param {number} id_post id de la noticia
 * @returns Retorna: Si sale bien, los datos de la noticia eliminada.
 * Si no, error
 */
const deletePost = async (id_post) => {
    let client;
    try {
        const poll = dbConnect();
        client = await poll.connect();

        const answer = await client.query(blog.deletePost, [id_post]);

        return answer.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

module.exports = {
    idExists,
    showRoles,
    postByUserId,
    checkUserByEmail,
    showAllPosts,
    postAllDetails,
    createPost,
    modifyPost,
    deletePost
}