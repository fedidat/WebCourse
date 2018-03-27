var assert = require('chai').assert;
var HeroesController = require('../controller/heroesController.js');
var HeroesList = require('../model/heroesList.js');
var Hero = require('../model/hero.js');

describe('HeroesController', function() {

    describe('#heroes()', function() {
      it('should return list of heroes', function() {
        var heroesList = new HeroesList();
        var heroesController = new HeroesController(heroesList);
        heroesList.heroes.push(new Hero(1, "superman"));
        assert.deepEqual(heroesController.heroes, [new Hero(1, "superman")]);
      });
    });
    
    describe('#getHeroById(id)', function() {
      it('should return the hero of given ID', function() {
        var heroesList = new HeroesList();
        var heroesController = new HeroesController(heroesList);
        heroesList.heroes.push(new Hero(1, "superman"));
        assert.deepEqual(heroesController.getHeroById(1), new Hero(1, "superman"));
        assert.throws(() => { 
            heroesController.getHeroById(2); 
          }, "hero not found");
      });
    });
    
    describe('#updateHeroById(originalID, newID, newName)', function() {
      it('should update hero of given ID', function() {
        var heroesList = new HeroesList();
        var heroesController = new HeroesController(heroesList);
        heroesList.heroes.push(new Hero(1, "superman"));
        heroesController.updateHeroById(1, 2, "batman");
        assert.deepEqual(heroesList.heroes, [new Hero(2, "batman")]);
      });
    });

    describe('#insertHero(id, name)', function() {
      it('should append hero with given ID and name', function() {
        var heroesList = new HeroesList();
        var heroesController = new HeroesController(heroesList);
        heroesController.insertHero(1, "superman");
        assert.deepEqual(heroesList.heroes, [new Hero(1, "superman")]);
      });
    });

    describe('#deleteHeroById(id)', function() {
      it('should delete hero with given ID', function() {
        var heroesList = new HeroesList();
        var heroesController = new HeroesController(heroesList);
        heroesList.heroes.push(new Hero(1, "superman"));
        heroesController.deleteHeroById(1);
        assert.deepEqual(heroesController.heroes, []);
      });
    });

    describe('#deleteHeroByName(name)', function() {
      it('should return the hero of given name', function() {
        var heroesList = new HeroesList();
        var heroesController = new HeroesController(heroesList);
        heroesList.heroes.push(new Hero(1, "superman"));
        heroesController.deleteHeroByName("superman");
        assert.deepEqual(heroesController.heroes, []);
      });
    });

});