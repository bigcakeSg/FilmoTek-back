const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  text: { type: String, required: true },
  id: { type: String, required: true }
});

module.exports = mongoose.model('Genre', genreSchema);
