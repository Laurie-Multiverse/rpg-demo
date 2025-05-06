const Person = require("./Person");

class Player extends Person {
    constructor(name, type, weapon) {
        super(name, type, [-100, -100]);
        this.weapon = weapon;
    }

}

module.exports = Player;