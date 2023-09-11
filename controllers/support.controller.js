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

module.exports.patchSupport = async (req, res) => {
  try {
    // add / remove vhs
    if (req.body.includes('vhs')) {
      await Support.findOneAndUpdate(
        { type: 'vhs' },
        { $addToSet: { movies: req.params.movieId } },
        { new: true }
      );
    } else {
      await Support.findOneAndUpdate(
        { type: 'vhs' },
        { $pull: { movies: req.params.movieId } },
        { new: true }
      );
    }

    // add / remove ld
    if (req.body.includes('ld')) {
      await Support.findOneAndUpdate(
        { type: 'ld' },
        { $addToSet: { movies: req.params.movieId } },
        { new: true }
      );
    } else {
      await Support.findOneAndUpdate(
        { type: 'ld' },
        { $pull: { movies: req.params.movieId } },
        { new: true }
      );
    }

    // add / remove dvd
    if (req.body.includes('dvd')) {
      await Support.findOneAndUpdate(
        { type: 'dvd' },
        { $addToSet: { movies: req.params.movieId } },
        { new: true }
      );
    } else {
      await Support.findOneAndUpdate(
        { type: 'dvd' },
        { $pull: { movies: req.params.movieId } },
        { new: true }
      );
    }

    // add / remove bd
    if (req.body.includes('bd')) {
      await Support.findOneAndUpdate(
        { type: 'bd' },
        { $addToSet: { movies: req.params.movieId } },
        { new: true }
      );
    } else {
      await Support.findOneAndUpdate(
        { type: 'bd' },
        { $pull: { movies: req.params.movieId } },
        { new: true }
      );
    }

    // add / remove uhd
    if (req.body.includes('uhd')) {
      await Support.findOneAndUpdate(
        { type: 'uhd' },
        { $addToSet: { movies: req.params.movieId } },
        { new: true }
      );
    } else {
      await Support.findOneAndUpdate(
        { type: 'uhd' },
        { $pull: { movies: req.params.movieId } },
        { new: true }
      );
    }

    res.status(200).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
};
