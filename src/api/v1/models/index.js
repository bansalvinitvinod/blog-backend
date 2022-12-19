const rolesModel = require('./roles');
const usersModel = require('./users');
const categoriesModel = require('./categories');
const commentsModel = require('./comments');
const permissionsModel = require('./permissions');
const postsModel = require('./posts');
const tagsModel = require('./tags');

// Associations / Relationship
usersModel.hasMany(postsModel, {
    foreignKey: {
        name: 'user_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
postsModel.belongsTo(usersModel, {
    foreignKey: {
        name: 'user_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
usersModel.hasMany(commentsModel, {
    foreignKey: {
        name: 'user_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
commentsModel.belongsTo(usersModel, {
    foreignKey: {
        name: 'user_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
postsModel.hasMany(commentsModel, {
    foreignKey: {
        name: 'post_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
commentsModel.belongsTo(postsModel, {
    foreignKey: {
        name: 'post_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
categoriesModel.hasMany(postsModel, {
    foreignKey: {
        name: 'category_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
postsModel.belongsTo(categoriesModel, {
    foreignKey: {
        name: 'category_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
postsModel.belongsToMany(tagsModel, {
    foreignKey: {
        name: 'post_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    through: 'posts_tags'
});
tagsModel.belongsToMany(postsModel, {
    foreignKey: {
        name: 'tag_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    through: 'posts_tags'
});
rolesModel.belongsToMany(permissionsModel, {
    foreignKey: {
        name: 'role_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    through: 'roles_permissions'
});
permissionsModel.belongsToMany(rolesModel, {
    foreignKey: {
        name: 'permission_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    through: 'roles_permissions'
});
rolesModel.hasMany(usersModel, {
    foreignKey: {
        name: 'role_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
usersModel.belongsTo(rolesModel, {
    foreignKey: {
        name: 'role_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});


module.exports ={
    roles: rolesModel,
    users: usersModel,
    categories: categoriesModel,
    comments: commentsModel,
    permissions: permissionsModel,
    posts: postsModel,
    tags: tagsModel
}