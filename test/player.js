'use strict';

var expect = require('chai').expect,
Player = require('../lib/Player');

describe('Player', function () {

  describe('constructor initializer', function () {
    it('should make a new player object', function(){
      var player1 = new Player({name:'mandy'});
      expect(player1).to.be.instanceof(Player);
      expect(player1.name).to.be.a('string');
    });
  });

  describe('#attack', function () {
    it('should have a method on the prototype ', function(){
      var player1 = new Player({name:'mandy'});
      expect(player1).to.respondTo('attack');
    });
  });

});
