const express = require('express');
var cors = require('cors');

const port = 5000;

const app = express();

// Middleware : traiter donnees de la request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/movie', require('./routes/movie.routes'));
app.use('/movie-list', require('./routes/movie-list.routes'));

app.listen(port /*, () => console.log("Server port :", port)*/);
