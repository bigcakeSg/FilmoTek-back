const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model('Name', nameSchema);
