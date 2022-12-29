const models = require('../models')

const getAll = async () => {
    return await models.users.findAll();
}

const get = async (id) => {
    return await models.users.findByPk(id);
}

const create = async (requestBody) => {
    return await models.users.create(requestBody);
}

const update = async (id, requestBody) => {
    return await models.users.update(requestBody, {
        where: {
            id: id
        }
    });
}

const remove = async (id) => {
    return await models.users.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}