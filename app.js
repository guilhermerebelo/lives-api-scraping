var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var liveHoje = require('./routes/live-hoje');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', liveHoje);

app.listen(3333);