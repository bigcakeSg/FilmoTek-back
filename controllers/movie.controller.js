const Movie = require('../models/movie.model');
const Genre = require('../models/genre.model');
const Name = require('../models/name.model');

const createIfNameExists = async (toCreate) => {
  let list = [];
  for (const item of toCreate) {
    // Check if item already exists
    const itemExists = await Name.exists({
      id: item.name.id
    });

    if (itemExists) list.push({ ...item, name: itemExists });
    else {
      const newItem = new Name(item.name);
      list.push({ ...item, name: newItem._id });
      await newItem.save();
    }
  }

  return list;
};

// Save a new movie
module.exports.setMovie = async (req, res) => {
  try {
    // create genres
    let genreList = [];
    for (const genre of req.body.genres) {
      // Check if genre already exists
      const genreExists = await Genre.exists({
        id: genre.id
      });

      if (genreExists) genreList.push(genreExists);
      else {
        const newGenre = new Genre(genre);
        genreList.push(newGenre._id);
        await newGenre.save();
      }
    }

    // Create names
    const directorList = await createIfNameExists(req.body.directors);
    const writerList = await createIfNameExists(req.body.writers);
    const principalCastList = await createIfNameExists(
      req.body.casting.principal
    );
    const extendedCastList = await createIfNameExists(
      req.body.casting.extended
    );

    // Check if movie already exists
    const movieExists = await Movie.exists({
      imdbId: req.body.imdbId
    });

    if (movieExists) res.status(200).json(req.body);
    else {
      await Movie.create({
        ...req.body,
        genres: genreList,
        directors: directorList,
        writers: writerList,
        casting: { principal: principalCastList, extended: extendedCastList }
      });

      const newMovie = await Movie.findOne({
        imdbId: req.body.imdbId
      }).populate(
        'genres directors.name writers.name casting.principal.name casting.extended.name'
      );

      res.status(201).json(newMovie);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Get movie list
module.exports.getMovieList = async (_, res) => {
  try {
    const movies = await Movie.find()
      .select(
        'imdbId originalTitle regionalTitles picture releaseDate directors seen'
      )
      // .skip(0) // first item
      // .limit(300) // number of items
      .sort('originalTitle')
      .populate('directors.name');

    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Get Movie mini-infos
module.exports.getMovieMiniInfos = async (req, res) => {
  try {
    const movie = await Movie.findOne({ imdbId: req.params.imdbId })
      .select(
        'imdbId originalTitle regionalTitles picture releaseDate directors seen'
      )
      .populate('directors.name');

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Get Movie infos
module.exports.getMovieFullInfos = (req, res) => {
  try {
    Movie.findOne({
      imdbId: req.params.imdbId
    })
      .populate(
        'genres directors.name writers.name casting.principal.name casting.extended.name'
      )
      .then((movie) => {
        if (movie) res.status(200).json(movie);
        else res.status(404).json({ message: 'Movie not found!' });
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Delete movie
module.exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ imdbId: req.params.imdbId });

    if (!movie) {
      throw new Error(`Movie id: ${req.params.movieid} does not exist!`);
    }

    await movie.deleteOne({ _id: movie });
    res.status(200).json({ message: `"${movie.originalTitle}" deleted!` });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Update seen movie
module.exports.updateSeenMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ imdbId: req.params.imdbId });

    if (!movie) {
      res.status(400).json({ message: 'Movie does not exist!' });
    }

    const patchMovie = await Movie.findByIdAndUpdate(movie, req.body, {
      new: true
    }).populate(
      'genres directors.name writers.name casting.principal.name casting.extended.name'
    );

    res.status(200).json(patchMovie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.updateSeenAllMovie = async (_, res) => {
  try {
    await Movie.updateMany({}, { seen: true });
    res.status(200).json({ message: 'OK' });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
