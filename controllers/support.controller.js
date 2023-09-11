const Support = require('../models/support.model');

module.exports.getSupportVhs = (_, res) => {
  try {
    Support.findOne({ type: 'vhs' })
      .select('movies')
      .then((support) => {
        res.status(200).json(support.movies);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportLd = async (_, res) => {
  try {
    Support.findOne({ type: 'ld' })
      .select('movies')
      .then((support) => {
        res.status(200).json(support.movies);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportDvd = async (_, res) => {
  try {
    Support.findOne({ type: 'dvd' })
      .select('movies')
      .then((support) => {
        res.status(200).json(support.movies);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportBd = async (_, res) => {
  try {
    Support.findOne({ type: 'bd' })
      .select('movies')
      .then((support) => {
        res.status(200).json(support.movies);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportUhd = async (_, res) => {
  try {
    Support.findOne({ type: 'uhd' })
      .select('movies')
      .then((support) => {
        res.status(200).json(support.movies);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
