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

router.post('/animalInfoByID/:id', function(req, res) {
  
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

module.exports = router;