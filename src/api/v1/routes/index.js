const rolesRoute = require('./roles');
const express = require('express');
const router = express.Router();

router.use('/roles', rolesRoute);

module.exports = router;