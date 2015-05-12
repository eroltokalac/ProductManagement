/**
 * Created by ErolTokalac on 05/12/15.
 */

// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var products = require('./routes/products');
var mongoose = require('mongoose');

var app = express();

//connect to our database

var dbName='products';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', products);

module.exports = app;
