const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  picture: {
    type: {
      url: { type: String, required: false },
      height: { type: Number, required: false },
      width: { type: Number, required: false }
    },
    required: false
  }
});

module.exports = mongoose.model('Name', nameSchema);
