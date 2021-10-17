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
// app.get('/product/:id', function (req, res) {
//     let product_id = req.params.id;
//     if (!product_id) {
//         return res.status(400).send({ error: true, message: 'Please provide product_id' });
//     }
//     dbConn.query('SELECT * FROM product where id=?', product_id, function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results[0], message: 'product list.' });
//     });
// });
// app.post('/product', function (req, res) {
//     let user = req.body.user;
//     if (!user) {
//         return res.status(400).send({ error:true, message: 'Please provide user' });
//     }
//     dbConn.query("INSERT INTO product SET ? ", { user: user }, function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
//     });
// });
// app.put('/product', function (req, res) {
//     let product_id = req.body.product_id;
//     let user = req.body.user;
//     if (!product_id || !user) {
//         return res.status(400).send({ error: user, message: 'Please provide user and product_id' });
//     }
//     dbConn.query("UPDATE product SET user = ? WHERE id = ?", [user, product_id], function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//     });
// });
// app.delete('/product', function (req, res) {
//     let product_id = req.body.product_id;
//     if (!product_id) {
//         return res.status(400).send({ error: true, message: 'Please provide product_id' });
//     }
//     dbConn.query('DELETE FROM product WHERE id = ?', [product_id], function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
//     });
// });
//-------------------------------//
app.get('/api/manufacturer', function (req, res) {
    dbConn.query('SELECT * FROM manufacturer', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'product list.' });
    });
});
// app.get('/manufacturer/:id', function (req, res) {
//     let manufacturer_id = req.params.id;
//     if (!manufacturer_id) {
//         return res.status(400).send({ error: true, message: 'Please provide manufacturer_id' });
//     }
//     dbConn.query('SELECT * FROM manufacturer where id=?', manufacturer_id, function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results[0], message: 'product list.' });
//     });
// });
// app.post('/manufacturer', function (req, res) {
//     let user = req.body.user;
//     if (!user) {
//         return res.status(400).send({ error:true, message: 'Please provide user' });
//     }
//     dbConn.query("INSERT INTO manufacturer SET ? ", { user: user }, function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
//     });
// });
// app.put('/manufacturer', function (req, res) {
//     let manufacturer_id = req.body.manufacturer_id;
//     let user = req.body.user;
//     if (!manufacturer_id || !user) {
//         return res.status(400).send({ error: user, message: 'Please provide user and manufacturer_id' });
//     }
//     dbConn.query("UPDATE manufacturer SET user = ? WHERE id = ?", [user, manufacturer_id], function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//     });
// });
// app.delete('/manufacturer', function (req, res) {
//     let manufacturer_id = req.body.manufacturer_id;
//     if (!manufacturer_id) {
//         return res.status(400).send({ error: true, message: 'Please provide manufacturer_id' });
//     }
//     dbConn.query('DELETE FROM manufacturer WHERE id = ?', [manufacturer_id], function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
//     });
// });
app.listen(3000, function () {
    console.log('Node app is running on http://localhost:3000/');
});
module.exports = app;