const express = require('express');
const router = express.Router();

const rolesController = require('../../api/v1/controllers/roles');

router.get('/', rolesController.getRoles)

router.get('/:id', rolesController.getRole)

router.post('/', rolesController.createRole) 

router.put('/:id', rolesController.updateRole) 

router.delete('/:id', rolesController.deleteRole)

module.exports = router