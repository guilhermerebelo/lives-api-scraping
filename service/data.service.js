var fs = require('fs');
var _ = require('lodash');

var DB_PATH = "./db/db.json";
var DB_PATH_PRE = "./db/pre.json";

module.exports = Service;

function Service() {
    return {
        write: write,
        read: read,
        increment: increment
    }

    function write() {
        //implementar
    }
    
    function read(path) {
        var db = fs.readFileSync(path, 'utf8');
    
        if (!db) {
            throw('Não foi possivel recuperar o arquivo')
        }
    
        return JSON.parse(db);
    }
    
    function increment(data, date) {
        data = insertDate(data, date)

        var db = read(DB_PATH);
        var newData = _.merge(db, data);

        if (!isValid(DB_PATH_PRE, newData)) {
            throw('Erro ao salvar o arquivo');
        }

        save(DB_PATH, newData);
    }

    function isValid(path, data) {
        save(path, data);
        return _.isObject(read(path));
    }

    function save(path, data) {
        fs.writeFile(path, JSON.stringify(data), callback);
    }
    
    function callback(err) {
        if (err) {
            console.log('Erro ao manipular o arquivo', err);
        } else {
            console.log('Manipulado com sucesso');
        }
    }

    function insertDate(data, date) {
        return {
            [date]: data
        }
    }
}