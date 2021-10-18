var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dongho'
});
dbConn.connect();
app.get('/api/product', function (req, res) {
    dbConn.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error;
        return res.send({ data: results });
    });
});

app.get('/api/manufacturer', function (req, res) {
    dbConn.query('SELECT * FROM manufacturer', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'product list.' });
    });
});

app.listen(3000, function () {
    console.log('Node app is running on http://localhost:3000/');
});
module.exports = app;