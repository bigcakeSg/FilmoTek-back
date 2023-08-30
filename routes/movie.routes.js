const express = require('express');
const router = express.Router();

const {
  setMovie,
  getMovieList,
  getMovieMiniInfos,
  getMovieFullInfos
} = require('../controllers/movie.contoller');

router.post('/', setMovie);
router.get('/list', getMovieList);
router.get('/mini-infos/:imdbId', getMovieMiniInfos);
router.get('/infos/:imdbId', getMovieFullInfos);

module.exports = router;
