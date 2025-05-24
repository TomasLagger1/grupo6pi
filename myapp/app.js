var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session')


const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


var app = express();

app.use(cookieParser());

app.use(session({
  secret: "Mensaje Secreto",
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  if (req.session.user) {
    res.locals.user = req.session.user
  } else {
    res.locals.user = undefined
  }
  return next()
})

app.use(function(req, res, next) {
  if (!req.session.user && req.cookies.userEmail) {
    db.Usuario.findOne({
      where: { email: req.cookies.userEmail }
    })
    .then(function(user) {
      if (user) {
        req.session.user = user
        res.locals.user = user
      }
      next()
    })
    .catch(function(error) {
      console.log("Error al leer cookie:", error)
      next()
    })
  } else {
    next()
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/users', userRouter)



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

module.exports = app;
