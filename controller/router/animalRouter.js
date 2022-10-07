const { Router } = require('express');
const { readAll, persist } = require('../business_logic/businessLogic');

const router = Router();

// Read all
router.get('/', readAll);

// Read by id
// router.get('/', readById);

// Write
router.post('/', persist);

module.exports = { router };
