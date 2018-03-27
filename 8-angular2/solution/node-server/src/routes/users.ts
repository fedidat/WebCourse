import * as express from "express";
import * as path from "path";
var router = express.Router();

import { User } from '../model/user';
import { DummyData } from "../controller/DummyData";
import { Room } from "../model/room";

let loggedIn: string[] = [];

router.post('/signin', (req, res) => {
    var username: string = req.body.id;
    var password: string = req.body.password;
    var userInfo:  User = DummyData.users.filter(user => user.id === username)[0];
    if (userInfo && userInfo.password === password) {
        loggedIn.push(username);
        res.cookie('user', username, { maxAge: 60 * 60 * 24 * 365 })
            .send("logged in successfully");
    }
    else {
        res.status(400).send("username or password error");
    }
});

router.post('/signup', (req, res) => {
    var username: string = req.body.id;
    var password: string = req.body.password;
    var teamid: string = req.body.teamid;
    var userInfo:  User = DummyData.users.filter(user => user.id === username)[0];
    if (!userInfo) {
        var newUser: User = new User(username, password);
        DummyData.teams.filter(team => {
            if(team.id === teamid) {
                team.users.push(newUser);
            }
        })
        DummyData.users.push(newUser);
        res.send("created user successfully");
    }
    else {
        res.status(400).send("username already exists");
    }
});

router.get('/user/:id/rooms', (req, res) => {
    var username: string = req.params.id;
    var userRooms:  Room[] = [];
    DummyData.teams.forEach(team => {
        if(team.users.filter(user => user.id === username).length > 0){
            team.rooms.forEach(room => userRooms.push(room));
        }
    });
    res.send(userRooms);
});

module.exports = router;