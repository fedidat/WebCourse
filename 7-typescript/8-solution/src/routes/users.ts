import * as express from "express";
import * as path from "path";
var router = express.Router();

let loginInfo: { "username": string, "password": string }[] = [
    { "username": "admin", "password": "secretpassword" }
];
let loggedIn: string[] = [];

router.post('/login', (req, res) => {
    var username: string = req.body.username;
    var password: string = req.body.password;
    var userInfo: { "username": string, "password": string } = loginInfo.filter(info => info.username === username)[0];
    if (userInfo && userInfo.password === password) {
        loggedIn.push(username);
        res.cookie('user', username, { maxAge: 60 * 60 * 24 * 365 })
            .send("logged in successfully");
    }
    else {
        res.status(400).send("username or password error");
    }
});

router.get('/loggedIn', (req, res) => {
    res.send(loggedIn);
});

router.post('/createUser', (req, res) => {
    var username: string = req.body.username;
    var password: string = req.body.password;
    var userInfo: { "username": string, "password": string } = loginInfo.filter(info => info.username === username)[0];
    if (!userInfo) {
        loginInfo.push({ "username": username, "password": password });
        res.send("created user successfully");
    }
    else {
        res.status(400).send("username already exists");
    }
});

module.exports = router;