var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var liveHoje = require('./routes/live-hoje');
var liveProximaSemana = require('./routes/live-proxima-semana');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/lives-hoje', liveHoje);
app.use('/lives-proxima-semana', liveProximaSemana); //tem que fazer

app.listen(3333);