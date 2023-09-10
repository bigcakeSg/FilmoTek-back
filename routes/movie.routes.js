const express = require('express');
const router = express.Router();

const {
  setMovie,
  getMovieList,
  getMovieMiniInfos,
  getMovieFullInfos,
  deleteMovie
} = require('../controllers/movie.controller');

router.post('/', setMovie);
router.get('/list', getMovieList);
router.get('/mini-infos/:imdbId', getMovieMiniInfos);
router.get('/infos/:imdbId', getMovieFullInfos);
router.delete('/:imdbId', deleteMovie);

module.exports = router;
