const Support = require('../models/support.model');

const findSupport = async (support) => {
  return await Support.findOne({ type: support })
    .select('movies')
    .then((supportList) => {
      return supportList.movies;
    });
};

module.exports.getSupportVhs = async (_, res) => {
  try {
    const movieList = await findSupport('vhs');
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportLd = async (_, res) => {
  try {
    const movieList = await findSupport('ld');
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportDvd = async (_, res) => {
  try {
    const movieList = await findSupport('dvd');
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportBd = async (_, res) => {
  try {
    const movieList = await findSupport('bd');
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.getSupportUhd = async (_, res) => {
  try {
    const movieList = await findSupport('uhd');
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addRemoveSupport = async (movieId, support, alreadyExists) => {
  if (alreadyExists) {
    await Support.findOneAndUpdate(
      { type: support },
      { $pull: { movies: movieId } },
      { new: true }
    );
  } else {
    await Support.findOneAndUpdate(
      { type: support },
      { $addToSet: { movies: movieId } },
      { new: true }
    );
  }
};

module.exports.patchSupport = async ({ body, params }, res) => {
  try {
    const formats = ['vhs', 'ld', 'dvd', 'bd', 'uhd'];

    Promise.all(
      formats.map((format) =>
        addRemoveSupport(params.movieId, format, !body.includes(format))
      )
    );

    res.status(200).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.patchSupportSingle = async ({ body, params }, res) => {
  try {
    await addRemoveSupport(params.movieId, params.support, body.alreadyExists);

    res.status(200).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
};
