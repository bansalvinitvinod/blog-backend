const routesV1 = require('../api/v1/routes');
const express = require('express');
const router = express.Router();

router.use('/v1', routesV1);

module.exports = router;