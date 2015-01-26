'use strict';

var expect = require('chai').expect,
Game = require('../lib/Game');

describe('Game', function () {

  describe('constructor', function () {
    it('should create an array of weapons', function () {
      var game1 = new Game(4);
      expect(game1.weapons.length).to.equal(3);
    });
    it('should create an array of players', function () {
      var game2 = new Game(5);
      expect(game2.players.length).to.equal(5);
    });
  });

  describe('#fight', function(){
    it('should have a method on the prototype', function () {
      var game3 = new Game(6);
      expect(game3).to.respondTo('fight');
    });
  });

});
