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
//   describe('Player has a prototype', function () {
//     it('should have the prototype of Player constructor', function (){
//       var player2 = new Player({name: 'susan'});
//       expect(player2.prototype.constructor).to.equal('Player');
//     });
//   });
//
// });
//when i make a new player, it has a prototype method of attack
//player.respondsTo.attack
