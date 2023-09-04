const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  rapidApiHeader: { type: Object, required: true },
  region: { type: String, required: true }
});

module.exports = mongoose.model('Config', configSchema);
