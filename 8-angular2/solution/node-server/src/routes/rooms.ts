import * as express from "express";
import * as path from "path";
import { DummyData } from '../controller/DummyData';
var router = express.Router();

import { Room } from '../model/room';

router.get('/rooms', (req, res) => {
    res.send(DummyData.rooms);
});

router.get('/rooms/:id', (req, res) => {
    if(!req.params.id) {
        return res.status(400).send("missing id");
    }
    var filteredRoom: Room[] = DummyData.rooms.filter(room => room.id === +req.params.id);
    if(!filteredRoom) {
        return res.status(400).send("no such room");
    }
    res.send(filteredRoom[0]);
});

router.get('/rooms/:id/users', (req, res) => {
    if(!req.params.id) {
        return res.status(400).send("missing id");
    }
    var filteredRoom: Room[] = DummyData.rooms.filter(room => room.id === +req.params.id);
    if(!filteredRoom) {
        return res.status(400).send("no such room");
    }
    res.send(filteredRoom[0].users);
});

module.exports = router;