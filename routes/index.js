var express = require('express');
var router = express.Router();



var processor = function (req, res, next) {
  var stripe = require('stripe')('sk_test_XfSN5Jg519ofs2eCCZny9bUg000Vt1SumR');
  const info = req.body;
  var token = info.tok;
  console.log('token ' + info.tok + '\n' + 'amount ' + info.amt);

  var charge = stripe.charges.create(
      {
        amount: 100,
        currency: 'usd',
        source: info.tok,
        description: 'Test charge',
      },
      function(err, charge) {
        // asynchronously called
      }
  );
  console.log('charge ' + charge);
  var capture = stripe.charges.capture(
      charge,
      function(err, charge){
        // asynchronously called
      });
  console.log('capture ' + capture);
  next();
};


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use(processor);
router.post('/', function(req, res, next) {
res.send('processed file');
});

module.exports = router;
