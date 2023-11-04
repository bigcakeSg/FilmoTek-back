const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  type: { type: String, required: true },
  movies: { type: [String], required: true }
});

module.exports = mongoose.model('Support', supportSchema);
