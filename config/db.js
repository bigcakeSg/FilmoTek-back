const mongoose = require('mongoose');

const connectDb = async () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URI).then(
    () => console.log('Connected'),
    (err) => {
      console.log('ERROR:', err);
      process.exit();
    }
  );
};

module.exports = connectDb;
