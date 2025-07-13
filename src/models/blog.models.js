const { blog } = require("../models/querys");
const { dbConnect } = require("../utils/dbConnect");

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