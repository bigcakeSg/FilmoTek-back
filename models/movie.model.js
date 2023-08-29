const mongoose = require('mongoose');

const picture = {
  url: { type: String, required: false },
  height: { type: Number, required: false },
  width: { type: Number, required: false }
};

const person = {
  id: { type: String, required: true },
  name: { type: String, required: true },
  attributes: { type: [String], required: false }
};

const cast = {
  type: [
    {
      ...person,
      characters: { type: [String], required: true },
      picture: { type: picture, required: false }
    }
  ],
  required: true
};

const movieSchema = mongoose.Schema({
  imdbId: { type: String, required: false },
  originalTitle: { type: String, required: true },
  regionalTitle: {
    type: [
      {
        title: { type: String, required: false },
        region: { type: String, required: false }
      }
    ],
    required: false
  },
  picture: {
    type: picture,
    required: false
  },
  releaseDate: {
    type: {
      year: { type: Number, required: true },
      month: { type: Number, required: false },
      day: { type: Number, required: false }
    },
    required: false
  },
  genres: {
    type: [
      {
        id: { type: String, required: true },
        text: { type: String, required: true }
      }
    ],
    required: false
  },
  directors: {
    type: [person],
    required: false
  },
  writers: {
    type: [person],
    required: false
  },
  casting: {
    type: {
      principal: cast,
      extended: cast
    },
    required: false
  }
});

module.exports = mongoose.model('Movie', movieSchema);
