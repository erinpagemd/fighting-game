'use strict';

var expect = require('chai').expect,
    Weapon = require('../lib/Weapon');

describe('Weapon', function () {
  describe('constructor', function () {

    it('should create a new weapon object 1', function () {
      var sword = new Weapon({name:'sword', damage:0.2});
      expect(sword).to.be.instanceof(Weapon);
      expect(sword.name).to.equal('sword');
      expect(sword.damage).to.equal(0.2);
      expect(sword.accuracy).to.equal(0.8);
      expect(sword.ammo).to.equal(0);
    });

    it('should create a new weapon object 2', function () {
      var sword = new Weapon({name:'sword', damage:0.2, ammo:3});
      expect(sword).to.be.instanceof(Weapon);
      expect(sword.name).to.equal('sword');
      expect(sword.damage).to.equal(0.2);
      expect(sword.accuracy).to.equal(0.8);
      expect(sword.ammo).to.equal(3);
    });
  });

});
