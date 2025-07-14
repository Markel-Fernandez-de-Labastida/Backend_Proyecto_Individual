const users = {
    checkRoleExists: ``, // Quizas no sea necesario. Se hace en fronted
    checkUserExist: `select * from users where id_user = $1`,
    checkUserByEmail: `select *
                from users
                where users.user_email = $1`,
    checkPostExsists: `select * from posts where id_post = $1`,
    showRoles: `select * from roles`,
    checkRoles: `select * from roles
                where id_role = $1`,
    showAllUsers: `select id_user, user_name, user_email, user_password, roles.role_name 
                from users
                inner join roles on users.user_role = roles.id_role`,
    showUserById: `select id_user, user_name, user_email, user_password, roles.role_name 
                from users
                inner join roles on users.user_role = roles.id_role
                where users.id_user = $1`,
    createUser: `insert into users(user_name, user_password, user_email, user_role) 
                VALUES ($1, $2, $3, $4)
                RETURNING user_name, user_password, user_email, user_role`,
    modifyUser: `update users
                set user_role= $1
                where id_user= $2
                RETURNING user_role`,
    deleteUser: `delete from users 
                where id_user= $1
                RETURNING user_name, user_password, user_email, user_role`,
    createFavorites: `INSERT INTO favorites(user_id, track_id) VALUES($1, $2) RETURNING *`,
    deleteFavorites: `delete from favorites where id_favorite = $1 RETURNING *`
}

const blog = {
    showAllPosts: `select id_post, users.user_name, post_title, post_subtitle, post_content, post_link, date_insert 
                    from posts
                    inner join users on posts.post_user = users.id_user`,
    showPostsByUserId: `select users.user_name, post_title, post_subtitle, post_content, date_insert from posts
                    inner join users on posts.post_user = users.id_user
                    where post_user = $1`,
    checkPostExsists: `select * from posts where id_post = $1`,
    postAllDetails: `select id_post, users.user_name, post_title, post_subtitle, post_content, post_link, date_insert 
                    from posts
                    inner join users on posts.post_user = users.id_user
                    where id_post = $1`,
    createPost: `INSERT INTO posts(post_user, post_title, post_subtitle, post_content, date_insert) 
                    VALUES($1, $2, $3, $4, $5) RETURNING *`,
    modifyPost: `update posts
                    set post_title = $2, post_subtitle = $3, post_content = $4, date_insert = $5
                    where id_post = $1
                    RETURNING *`,
    deletePost: `delete from posts where id_post = $1 RETURNING *`
}

module.exports = {
    users,
    blog
}