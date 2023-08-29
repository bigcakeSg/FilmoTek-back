const Movie = require('../models/movie.model');

module.exports.setMovie = async (req, res) => {
  // TODO: gerer les erreurs
  // if (!req.body.message) {
  //   res.status(400).json({ message: "Merci d'ajouter un message" });
  // }

  const movie = await Movie.create(req.body);

  res.status(200).json(movie);
};
