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

app.use('/movie', require('./routes/movie.routes'));

app.listen(port /*, () => console.log("Server port :", port)*/);
