const mongoose = require('mongoose');

const connectDb = async () => {
  const mongoUri = `${process.env.MONGO_ROOT}${process.env.MONGODB_PSWD}${
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_URI_PROD
      : process.env.MONGO_URI_DEV
  }`;

  mongoose.set('strictQuery', false);
  mongoose.connect(mongoUri).then(
    () => console.log('Connected'),
    (err) => {
      console.log('ERROR:', err.message);
      process.exit();
    }
  );
};

module.exports = connectDb;
