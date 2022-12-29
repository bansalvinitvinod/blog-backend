const services = require('../services');

const getUsers = async (req, res) => {
    res.status(200).json(await services.users.getAll());
}

const getUser = async (req, res) => {
    const id = Number(req.params.id);
    const User = await services.users.get(id);
    if (!User) {
        return res.status(404).send('User not found');
    }
    res.json(User);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    await services.users.create(newUser);
    res.status(201).json(newUser);
}

const updateUser = async (req, res) => {
    const id = Number(req.params.id);
    const updated = await services.users.update(id, req.body);
    if(!updated) {
        res.status(404).json('User not updated');
    }
    res.status(200).json('User updated');
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser
}