const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  url: { type: String, required: false },
  height: { type: Number, required: false },
  width: { type: Number, required: false }
});

const creator = new mongoose.Schema({
  name: { type: mongoose.Types.ObjectId, ref: 'Name', required: true },
  attributes: { type: [String], required: false }
});

const cast = new mongoose.Schema({
  name: { type: mongoose.Types.ObjectId, ref: 'Name', required: true },
  characters: { type: [String], required: true },
  attributes: { type: [String], required: false }
});

const movieSchema = new mongoose.Schema({
  imdbId: { type: String, required: false },
  originalTitle: { type: String, required: true },
  regionalTitles: {
    type: [
      {
        title: { type: String, required: false },
        region: { type: String, required: false }
      }
    ],
    required: false
  },
  picture: {
    type: pictureSchema,
    required: false
  },
  releaseDate: {
    type: {
      year: { type: Number, required: false },
      month: { type: Number, required: false },
      day: { type: Number, required: false }
    },
    required: false
  },
  duration: { type: Number, required: false },
  plot: { type: String, required: false },
  genres: {
    type: [{ type: mongoose.Types.ObjectId, ref: 'Genre', required: false }],
    required: false
  },
  directors: {
    type: [{ type: creator, ref: 'Name', required: false }],
    required: false
  },
  writers: {
    type: [{ type: creator, ref: 'Name', required: false }],
    required: false
  },
  casting: {
    type: {
      principal: [{ type: cast, required: false }],
      extended: [{ type: cast, required: false }]
    },
    required: false
  }
});

module.exports = mongoose.model('Movie', movieSchema);
