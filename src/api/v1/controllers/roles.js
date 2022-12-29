const services = require('../services');

const getRoles = (async (req, res) => {
    res.status(200).json(await services.roles.getAll());
});

const getRole = (async (req, res) => {
    const id = Number(req.params.id);
    const Role = await services.roles.get(id);
    if (!Role) {
        return res.status(404).send('Role not found');
    }
    res.json(Role);
});

const createRole = (async (req, res) => {
    const newRole = req.body;
    await services.roles.create(newRole);
    res.status(201).json(newRole);
});

const updateRole = (async (req, res) => {
    const id = Number(req.params.id);
    const updated = await services.roles.update(id, req.body);
    if(!updated) {
        res.status(404).json('Role not updated');
    }
    res.status(200).json('Role updated');
});

const deleteRole = (async (req, res) => {
    const id = Number(req.params.id);
    if(id<2) {
        res.status(403).json('Administrator role cannot be deleted');
        return;
    }
    const removed = await services.roles.remove(id);
    if(!removed) {
        res.status(404).json('Role not found');
    }
    res.status(200).json('Role deleted');
});

module.exports = {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
}