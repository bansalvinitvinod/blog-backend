const rolesModel = require('../models/roles')

const getAll = (async () => {
    return await rolesModel.findAll();
})

const get = (async (id) => {
    return await rolesModel.findByPk(id);
})

const create = (async (requestBody) => {
    return await rolesModel.create(requestBody);
})

const update = (async (id, requestBody) => {
    return await rolesModel.update(requestBody, {
        where: {
            id: id
        }
    })
})

const remove = (async (id) => {
    return await rolesModel.destroy({
        where: {
            id: id
        }
    });
})

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}