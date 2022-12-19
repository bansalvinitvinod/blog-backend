const rolesModel = require('./roles');
const usersModel = require('./users');
const categoriesModel = require('./categories');
const commentsModel = require('./comments');

module.exports ={
    roles: rolesModel,
    users: usersModel,
    categories: categoriesModel,
    comments: commentsModel
}