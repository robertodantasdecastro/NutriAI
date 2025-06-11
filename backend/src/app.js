const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./routes');

const app = express();

// PT-BR: Middlewares básicos
// EN: Basic middlewares
app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;
