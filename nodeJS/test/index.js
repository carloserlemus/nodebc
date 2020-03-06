const express = require('express');
const app = express();

// Routers
const home = require('./home.js');
const products = require('./products.js');

app.use('/', home);
app.use('/products', products);