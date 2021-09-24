var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var qrRouter = require('./routes/qr');
var tfRouter = require('./routes/testflight');
var noticeRouter = require('./routes/notice');
var payRouter = require('./routes/api/pay');
var payPageRouter = require('./routes/pay');
var orderRouter = require('./routes/api/order');
var orderPageRouter = require('./routes/order');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/qr', qrRouter);
app.use('/tf', tfRouter);
app.use('/notice', noticeRouter);
app.use('/api/pay', payRouter);
app.use('/pay', payPageRouter);
app.use('/api/order', orderRouter);
app.use('/order', orderPageRouter);

module.exports = app;
