const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/', controllers.roles.getRoles)

router.get('/:id', controllers.roles.getRole)

router.post('/', controllers.roles.createRole) 

router.put('/:id', controllers.roles.updateRole) 

router.delete('/:id', controllers.roles.deleteRole)

module.exports = router