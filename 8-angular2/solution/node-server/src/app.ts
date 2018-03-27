import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as path from "path";
import { Room } from "./model/room";
import { Message } from "./model/message";
import { User } from "./model/user";
import { DummyData } from "./controller/DummyData";

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
app.use(express.static(path.join(__dirname, "../../angular-client/dist")));

var index = require('./routes/index');
app.use('/', index);
var users = require('./routes/users');
app.use('/', users);
var rooms = require('./routes/rooms');
app.use('/', rooms);

app.route('/*').get(function(req, res) { 
  return res.sendFile(path.join(__dirname, "../../angular-client/dist", 'index.html')); 
});

//////////////////SOCKET IO
const http = require('http').Server(app);
const io = require('socket.io')(http);
const socketCookieParser = require('socket.io-cookie-parser');

io.use(socketCookieParser());

io.on('connection', function(socket: any){
  var user = socket.request.cookies["user"];
  var roomid = +socket.request._query['roomid'];
  DummyData.rooms.forEach( room =>{
    if(room.id === roomid
      && !room.users.filter(ruser => ruser.id === user).length)
      room.users.push(new User(user, "***"));
  });
  console.log('User ' + user + ' connected');
  // socket.broadcast.emit('user connect event', user, 'connected');
  socket.on('disconnect', function(){
    console.log('User ' + user + ' disconnected');
    DummyData.rooms.forEach( room =>{
      if(room.id === roomid)
        room.users = room.users.filter(ruser => ruser.id !== user);
    });
    // io.emit('user connect event', user, 'disconnected');
  });
  socket.on('server-message', function(msg: Message, room: Room){
    console.log('chat message: ' + user + ' said \"' + msg + '"');
    socket.broadcast.emit('client-message', msg, room);
  });
});
///END////////////////

app.use(errorHandler());

http.listen(3000, function () {
  console.log('Team chat')
});