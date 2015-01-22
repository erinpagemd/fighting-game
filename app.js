
//then mwe make the GAME


function Game(numberOfPlayers){
  //make an array of weapons using the Weapon constructor
  this.weapons = [];
  this.weapons.push(new Weapon({name: 'Sword', damage: 0.2, ammo: Infinity}));
  this.weapons.push(new Weapon({name: 'Shotgun', damage: 0.6, ammo: 1}));
  this.weapons.push(new Weapon({name: 'Fist', damage: 0.05, ammo: Infinity}));
  this.players = [];

  //make an array of Players using Player constructor. Give them a weapon.
  for (var i=0; i < numberOfPlayers; i++){
    var player = new Player();
    player.weapon = getRandomWeapon(this.weapons);
    this.players.push(player);
  }

  //look in to the weapons array and choose one by index #
  function getRandomWeapon(weapons){
    return weapons[getRandomInt(0, weapons.length)];
  }

  //randomly generate an index #
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

//first lets make the players. they must be passed an object with value name {name: "mandy"}
function Player(obj){
  this.name = obj && obj.name || 'Player';
  this.health = 1;
  this.isZombie = false;
  this.isTrulyDead = false;
  this.dexterity = 0.5;
}

//add an attack method to the Player prototype
Player.prototype.attack = function(otherPlayer){
  if (didHit(this.weapon.accuracy)) {
    otherPlayer.health -= this.weapon.damage;
  }
};

//next lets make the weapons. they must be passed an object with name and damage#0-1 (possible ammo). {name: "sword", damage: .3, ammo: 4}
function Weapon(obj){
  this.name = obj.name;
  this.damage = obj.damage;
  this.accuracy = 1 - obj.damage;
  this.ammo = obj && obj.ammo || 0;
}

//the hit will land if the accuracy is more than the random number
function didHit(accuracy){
  return accuracy > Math.random();
}

//add a fight method to the Game prototype
Game.prototype.fight = function(){
  this.players.forEach(function(player, i, playersArray)){
    var nextPlayer = playersArray[i+1] || playersArray[0];
    player.attack(nextPlayer);
  }
  //why are we returning this???
  return this;
}
