"Use strict";

// const objA = {
//     x: 1,
//     y: 2
// }

// const objB = {
//     z: 10
// }

// const objA = Object.create(objB)

// console.log(objA)

// const Hero = function(name, xp) {
//     this.name = name,
//     this.xp = xp
// };

// Hero.description = 'This is Hero Description';

// Hero.prototype.changeName = function(name) {
//     this.name = name;
// };

// const mango = new Hero('Mango', 1000);

// console.log(mango)
// console.dir(Hero)

class Hero {
  static description = `This is base class description`;

  static showStats = function(hero) {
    console.log(`Logging hero ${hero}`);
  };

  constructor(name, xp) {
    this._name = name;
    this._xp = xp;
  }

  changeName(name) {
    this.name = name;
  }

  get name() {
      return this._name;
  }

  set name(newName) {
      this._name = newName;
  }

  gainXp(xp) {
    console.log(`${this._name} gained ${xp}`);
    this._xp += xp;
  }
}


class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);

        this._weapon = weapon;
    }

    attack() {
        console.log(`${this.name} dealt 11 dmg`)
    }
}

class Mage extends Hero {
    constructor(name, xp, spell) {
        super(name, xp);

        this.spell = spell;
    }

    cast() {
        console.log(`${this.name} casts ${this.spell} and deals 68dmg`)
    }
}




const mango = new Warrior('Mango', 1000, `Daedric Sword`);
const axe = new Mage('Axe', 2000, `Fireball`);

console.log(mango);
mango.name = 'Rubick'
console.log(mango.name);