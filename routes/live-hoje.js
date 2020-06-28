var express = require('express');
var router = express.Router();

var cheerio = require('cheerio')
var axios = require('axios');

var moment = require('moment');

var DataService = require('../service/data.service.js')

var URL = 'https://www.letras.mus.br/blog/lives-da-semana/#livesdasemana'

function get() {
  return axios.get(URL)
}

router.get('/', function(req, res) {
  get().then(function(response) {
    var $ = cheerio.load(response.data)

    var data = {
        lives: []
    }

    $('#livesdasemana').next().next().next().children().each(function (i, e) {
      data.lives.push({
        description: $(e).text(),
        url: $(e).children().attr('href')
      });
    })

    DataService().increment(data, moment().format('YYYY-MM-DD'))

    res.send('FINALIZADO')
  })
});

module.exports = router;
