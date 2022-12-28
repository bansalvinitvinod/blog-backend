const models = require('../models')

const getAll = (async () => {
    return await models.roles.findAll();
})

const get = (async (id) => {
    return await models.roles.findByPk(id);
})

const create = (async (requestBody) => {
    return await models.roles.create(requestBody);
})

const update = (async (id, requestBody) => {
    return await models.roles.update(requestBody, {
        where: {
            id: id
        }
    })
})

const remove = (async (id) => {
    return await models.roles.destroy({
        where: {
            id: id
        }
    });
})

const hasPermission = (async (role, permissionType, permissionFor) => {
    rolePermission = await models.roles.findOne({
        where: {
            role_title: role
        },
        include: [{
            model: models.permissions,
            where: {
                type: permissionType,
                permission_for: permissionFor
            }
        }]
    });
    return !(null == rolePermission);
});

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
    hasPermission
}