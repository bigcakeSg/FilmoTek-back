const express = require('express');
const router = express.Router();

const {
  setMovie,
  getMovieList,
  getMovieMiniInfos,
  getMovieFullInfos,
  deleteMovie,
  updateSeenMovie,
  updateSeenAllMovie
} = require('../controllers/movie.controller');

router.post('/', setMovie);
router.get('/list', getMovieList);
router.get('/:imdbId/mini-infos', getMovieMiniInfos);
router.get('/:imdbId/infos', getMovieFullInfos);
router.delete('/:imdbId', deleteMovie);
router.patch('/:imdbId/seen', updateSeenMovie);
router.patch('/seen', updateSeenAllMovie);

module.exports = router;
