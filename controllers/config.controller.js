const Config = require('../models/config.model');

module.exports.getConfig = async (_, res) => {
  try {
    const config = await Config.find();

    res.status(200).json(config);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
