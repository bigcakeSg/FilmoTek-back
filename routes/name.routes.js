const express = require('express');
const router = express.Router();

const { setName } = require('../controllers/name.controller');

router.post('/', setName);

module.exports = router;
