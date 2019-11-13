var express = require('express');
var router = express.Router();
var infoArr = [];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res) {
  var info = req.body;
  console.log(info);
  infoArr.push(info);
  res.send('added payment request');
});

module.exports = router;
