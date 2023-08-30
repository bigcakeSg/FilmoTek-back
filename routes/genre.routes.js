const express = require('express');
const router = express.Router();

const { setGenre, setGenreList } = require('../controllers/genre.controller');

router.post('/', setGenre);
router.post('/list/', setGenreList);

module.exports = router;
