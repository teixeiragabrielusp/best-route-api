const path = require('path');
const express = require('express');
const hbs = require('hbs');
const travelRouter = require('./routers/travel');

const app = express();

//Define paths for Express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static
app.use(express.static(publicPath));

//Setup router
app.use(travelRouter);

module.exports = app;