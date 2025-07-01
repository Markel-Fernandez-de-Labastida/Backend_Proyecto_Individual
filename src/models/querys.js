const users = {
    checkRoleExists: ``, // Quizas no sea necesario. Se hace en fronted
    checkUserExis: ``, // Quizas no sea necesario. Se hace en fronted
    checkUserByEmail: `select *
                from users
                where users.user_email = $1`,
    showRoles: `select * from roles`,
    showAllUsers : `select user_name, user_email, user_password, roles.role_name 
                from users
                inner join roles on users.user_role = roles.id_role`,
    showUserById : `select user_name, user_email, user_password, roles.role_name 
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
                RETURNING user_name, user_password, user_email, user_role`
}

module.exports = {
    users
}