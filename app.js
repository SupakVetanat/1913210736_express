var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config/index.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
const staffRouter = require('./routes/staff');
const shopRouter = require('./routes/shop');
const mongoose = require('mongoose');
mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});
// mongoose.connect('mongodb+srv://superDev:BxK0ahUdmkQ9MXAQ@1913210736-fah.jih4kuj.mongodb.net/restfullapi?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});

var app = express();

app.use(logger('dev'));
app.use(express.json({
    limit:'50mb'
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/staff', staffRouter);
app.use('/shop', shopRouter);

module.exports = app;
