var express = require('express');
var router = express.Router();
var HeroesController = require('../controller/heroesController.js');
var HeroesList = require('../model/heroesList.js');

var heroesController = new HeroesController(new HeroesList());

router.get('/', (req, res) => {
    res.send(heroesController.getHeroes());
});

router.get('/:id', (req, res) => {
    try {
        return res.send(heroesController.getHeroById(req.params.id));
    } catch(err){
        return res.status(400).send(err);
    }
});

router.put('/:id', (req, res) => {
    if(!req.body.id || !parseInt(req.body.id) || !req.params.id || !parseInt(req.params.id)) {
        return res.status(400).send("missing id");
    }
    if(!req.body.name) {
        return res.status(400).send("missing name");
    }
    try {
        heroesController.updateHeroById(parseInt(req.params.id), parseInt(req.body.id), req.body.name);
        return res.send(heroesController.heroes);
    } catch(err){
        return res.status(400).send(err);
    }
});

router.post('/', (req, res) => {
    if(!req.body.id || !parseInt(req.body.id)) {
        return res.status(400).send("missing id");
    }
    if(!req.body.name) {
        return res.status(400).send("missing name");
    }
    try {
        heroesController.insertHero(parseInt(req.body.id), req.body.name);
        return res.send(heroesController.heroes);
    } catch(err){
        return res.status(400).send(err);
    }
});

router.delete('/:id', (req, res) => {
    try {
        heroesController.deleteHeroById(parseInt(req.params.id));
        return res.send(heroesController.heroes);
    } catch(err){
        return res.status(400).send(err);
    }
});

router.delete('/', (req, res) => {
    if(!req.query.name) {
        return res.status(400).send("missing name");
    }
    try {
        heroesController.deleteHeroByName(req.query.name);
        return res.send(heroesController.heroes);
    } catch(err){
        return res.status(400).send(err);
    }
});

module.exports = {server:router,
    setController: (controller) => {
        heroesController = controller;
    }}
