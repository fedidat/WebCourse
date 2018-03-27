import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as path from "path";


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, '../node_modules/popper.js/dist')));
app.use(express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '../node_modules/jquery.cookie')));
app.use(express.static(path.join(__dirname, "../public")));

var users = require('./routes/users');
app.use('/', users);
var index = require('./routes/index');
app.use('/', index);

app.use(express.static(path.join(__dirname, '../views')));

app.use(errorHandler());

app.listen(3000, function () {
  console.log('MyTwitter')
});