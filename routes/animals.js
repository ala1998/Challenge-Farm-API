const express = require('express')
bodyParser = require('body-parser')
router = express.Router();
  
// get animals lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM animals`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Animals  listretrieved successfully"
    })
  })
});

router.get('/animalInfoByID/:id', function(req, res) {
  
  let sql = `SELECT * FROM animals where id=${req.params.id}`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Animal is retrieved successfully"
    })
  })
});

router.get('/farmByID/:id', function(req, res) {
  
  let sql = `SELECT name FROM farms where id=${req.params.id}`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Farm name is retrieved successfully"
    })
  })
});

router.get('/solalaByID/:id', function(req, res) {
  
  let sql = `SELECT name FROM solalat where id=${req.params.id}`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Solala name is retrieved successfully"
    })
  })
});

router.get('/jawdaByID/:id', function(req, res) {
  
  let sql = `SELECT name FROM jawda where id=${req.params.id}`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Jawda name is retrieved successfully"
    })
  })
});

module.exports = router;