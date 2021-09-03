const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');


/*********************/
// EXPRESS APP
const app = express();

// SET PORT
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

/*********************/
// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*********************/
// ROUTES
app.get('/', (req, res) => {
    res.send('Hola!');
});

app.use('/', userRoutes);

/*********************/
module.exports = app;