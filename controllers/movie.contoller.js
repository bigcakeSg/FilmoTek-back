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

    // Create movie
    let newMovie;

    // Check if movie already exists
    const movieExists = await Movie.exists({
      imdbId: req.body.imdbId
    });

    if (movieExists) res.status(200).json(req.body);
    else {
      newMovie = await Movie.create({
        ...req.body,
        genres: genreList,
        directors: directorList,
        writers: writerList,
        casting: { principal: principalCastList, extended: extendedCastList }
      });

      res.status(201).json();
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Get movies Id
module.exports.getMovieList = async (_, res) => {
  try {
    const movies = await Movie.find()
      .select('imdbId originalTitle releaseDate directors')
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
        'imdbId originalTitle regionalTitles picture releaseDate directors'
      )
      .populate('directors.name');

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Get Movie infos
module.exports.getMovieFullInfos = async (req, res) => {
  try {
    const movie = await Movie.findOne({
      imdbId: req.params.imdbId
    }).populate(
      'genres directors.name writers.name casting.principal.name casting.extended.name'
    );

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
