const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db');

const port = 5000;

// Connexion DB
connectDb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(process.env.ROUTE_BASE_APP + 'movie', require('./routes/movie.routes'));
app.use(
  process.env.ROUTE_BASE_APP + 'config',
  require('./routes/config.routes')
);
app.use(
  process.env.ROUTE_BASE_APP + 'support',
  require('./routes/support.routes')
);

app.listen(port, () => console.log('Server port :', port));
