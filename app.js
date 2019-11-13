var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post('/', function(req, res) {
  var info = req.body;
  console.log(info);
  infoArr.push(info);


  const stripe = require("stripe")("sk_test_XfSN5Jg519ofs2eCCZny9bUg000Vt1SumR");

  /*
  var charge = stripe.charges.create(
      {
        amount: 1,
        currency: 'usd',
        source: info,
        description: 'Test charge',
      },
      function(err, charge) {
        // asynchronously called
      }
  );

  charge.then(function(x) {
    console.log('processed charge ' + x);
  });

   */

  res.send('processed payment request');

});



module.exports = app;

