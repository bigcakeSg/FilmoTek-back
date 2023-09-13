const express = require('express');
const router = express.Router();

const {
  getSupportVhs,
  getSupportLd,
  getSupportDvd,
  getSupportBd,
  getSupportUhd,
  patchSupport,
  patchSupportSingle
} = require('../controllers/support.controller');

router.get('/vhs', getSupportVhs);
router.get('/ld', getSupportLd);
router.get('/dvd', getSupportDvd);
router.get('/bd', getSupportBd);
router.get('/uhd', getSupportUhd);
router.patch('/movie/:movieId', patchSupport);
router.patch('/movie/:movieId/support/:support', patchSupportSingle);

module.exports = router;
