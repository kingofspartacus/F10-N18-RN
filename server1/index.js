var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'forever21'
});
// kết nối vào cơ sở dữ liệu
dbConn.connect();
 // route mặc định
 
 app.get('/Product', function (req, res) {
  dbConn.query('SELECT * FROM Product', function (error, results, fields) {
      if (error) throw error;
      return res.send({ data: results, message: 'Product list.' });
  });
});
// app.post('/Product', function (req, res) {
//     let Product = req.body.Product;
//     if (!Product) {
//       return res.status(400).send({ error:true, message: 'Please provide Product' });
//     }
//    dbConn.query("INSERT INTO Product SET ? ", { Product: Product }, function (error, results, fields) {
//   if (error) throw error;
//     return res.send({ error: false, data: results, message: 'New product has been created successfully.' });
//     });
// });
// app.put('/Product', function (req, res) {
//     let IDProduct = req.body.IDProduct;
//     let Product = req.body.Product;
//     if (!IDProduct || !Product) {
//       return res.status(400).send({ error: Product, message: 'Please provide Product and IDProduct' });
//     }
//     dbConn.query("UPDATE Product SET Product = ? WHERE IDProduct = ?", [Product, IDProduct], function (error, results, fields) {
//       if (error) throw error;
//       return res.send({ error: false, data: results, message: 'Product has been updated successfully.' });
//      });
//     });
// app.delete('/Product', function (req, res) {
//   let IDProduct = req.body.IDProduct;
//   if (!IDProduct) {
//       return res.status(400).send({ error: true, message: 'Please provide user_id' });
//   }
//   dbConn.query('DELETE FROM Product WHERE IDProduct = ?', [IDProduct], function (error, results, fields) {
//       if (error) throw error;
//       return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
//   });
// });
 // chỉnh port
 app.listen(3000, function () {
     console.log('Node app is running on port 3000');
 });
 module.exports = app;